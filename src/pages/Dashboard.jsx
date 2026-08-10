import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

let initialTasks = [
  {
    id: 1,
    title: "Ödəniş xətası düzəlişi",
    description: "İllik planlar üçün faktura cəmi səhv yuvarlaqlaşdırılıb.",
    status: "completed",
    priority: "high",
    dueDate: "2026-08-06",
  },
  {
    id: 2,
    title: "Dizayn nümunəsi",
    description: "Portfolio saytı üçün dizayn nümunəsi.",
    status: "completed",
    priority: "medium",
    dueDate: "2026-08-08",
  },
  {
    id: 3,
    title: "React-Vite",
    description: "Layihəni işləmək üçün React-Vite qurmaq.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-08-09",
  },
  {
    id: 4,
    title: "Responsiv dizayn",
    description: "Layihənin mobil, tablet, desktop görünüşünü hazırlamaq.",
    status: "pending",
    priority: "medium",
    dueDate: "2026-08-12",
  },
  {
    id: 5,
    title: "TaskFlow saytı",
    description: "Tam işlək React tətbiqi qurmaq.",
    status: "pending",
    priority: "low",
    dueDate: "2026-08-16",
  },
  {
    id: 6,
    title: "Test",
    description: "Yeni tapşırığın nümunə təsviri.",
    status: "in-progress",
    priority: "low",
    dueDate: "2026-08-20",
  },
];

function Dashboard() {
  let navigate = useNavigate();
  let { logout } = useAuth();

  let [tasks, setTasks] = useState(initialTasks);
  let [search, setSearch] = useState("");
  let [statusFilter, setStatusFilter] = useState("all");
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [editingTask, setEditingTask] = useState(null);
  let [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  let totalTasks = tasks.length;

  let pendingTasks = tasks.filter((task) => task.status === "pending").length;

  let inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  let filteredTasks = tasks.filter((task) => {
    let matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    let matchesStatus = statusFilter === "all" || task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  let getToday = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  let handleLogout = () => {
    logout();
    navigate("/");
  };

  let openCreateModal = () => {
    setEditingTask(null);

    setFormData({
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
      dueDate: "",
    });

    setIsModalOpen(true);
  };

  let openEditModal = (task) => {
    setEditingTask(task);

    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
    });

    setIsModalOpen(true);
  };

  let closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    if (!formData.dueDate || formData.dueDate < getToday()) {
      return;
    }

    if (editingTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...formData,
              }
            : task,
        ),
      );
    } else {
      let newTask = {
        id: Date.now(),
        ...formData,
      };

      setTasks((prev) => [newTask, ...prev]);
    }

    closeModal();
  };

  let handleDelete = (id) => {
    let confirmed = window.confirm(
      "Bu tapşırığı silmək istədiyinizə əminsiniz?",
    );

    if (!confirmed) {
      return;
    }

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  let getStatusText = (status) => {
    let statuses = {
      pending: "GÖZLƏNİLİR",
      "in-progress": "DAVAM EDİR",
      completed: "TAMAMLANDI",
    };

    return statuses[status];
  };

  let getPriorityText = (priority) => {
    let priorities = {
      high: "Yüksək",
      medium: "Orta",
      low: "Aşağı",
    };

    return priorities[priority];
  };

  return (
    <>
      <main className="dashboard">
        <div className="dashboard__container">
          <section className="dashboard__header">
            <div>
              <h1 className="dashboard__title">İdarə paneli</h1>
            </div>

            <div className="dashboard__header-actions">
              <Link to="/profile" className="dashboard__profile-button">
                Profil
              </Link>

              <button
                type="button"
                className="dashboard__logout-button"
                onClick={handleLogout}
              >
                Çıxış
              </button>
            </div>
          </section>

          <section className="dashboard__stats">
            <div className="dashboard__stat">
              <div className="dashboard__stat-icon dashboard__stat-icon--blue">
                📋
              </div>

              <div>
                <span className="dashboard__stat-label">CƏMİ</span>

                <strong className="dashboard__stat-number">{totalTasks}</strong>
              </div>
            </div>

            <div className="dashboard__stat">
              <div className="dashboard__stat-icon dashboard__stat-icon--orange">
                📥
              </div>

              <div>
                <span className="dashboard__stat-label">GÖZLƏNİLİR</span>

                <strong className="dashboard__stat-number">
                  {pendingTasks}
                </strong>
              </div>
            </div>

            <div className="dashboard__stat">
              <div className="dashboard__stat-icon dashboard__stat-icon--purple">
                🔄
              </div>

              <div>
                <span className="dashboard__stat-label">DAVAM EDİR</span>

                <strong className="dashboard__stat-number">
                  {inProgressTasks}
                </strong>
              </div>
            </div>

            <div className="dashboard__stat">
              <div className="dashboard__stat-icon dashboard__stat-icon--green">
                ✅
              </div>

              <div>
                <span className="dashboard__stat-label">TAMAMLANDI</span>

                <strong className="dashboard__stat-number">
                  {completedTasks}
                </strong>
              </div>
            </div>
          </section>

          <section className="dashboard__filters">
            <div className="dashboard__search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Tapşırıq axtar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Bütün statuslar</option>
              <option value="pending">Gözlənilir</option>
              <option value="in-progress">Davam edir</option>
              <option value="completed">Tamamlandı</option>
            </select>
          </section>

          <section className="dashboard__tasks">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <article
                  className={`task-card task-card--${task.priority}`}
                  key={task.id}
                >
                  <div className="task-card__top">
                    <span
                      className={`task-card__status task-card__status--${task.status}`}
                    >
                      {getStatusText(task.status)}
                    </span>

                    <span
                      className={`task-card__priority task-card__priority--${task.priority}`}
                    >
                      {getPriorityText(task.priority)}
                    </span>
                  </div>

                  <h2 className="task-card__title">{task.title}</h2>

                  <p className="task-card__description">{task.description}</p>

                  <div className="task-card__bottom">
                    <span className="task-card__date">🗓️ {task.dueDate}</span>

                    <div className="task-card__actions">
                      <button
                        type="button"
                        className="task-card__action"
                        onClick={() => openEditModal(task)}
                        aria-label="Tapşırığı redaktə et"
                      >
                        ✏️
                      </button>

                      <button
                        type="button"
                        className="task-card__action"
                        onClick={() => handleDelete(task.id)}
                        aria-label="Tapşırığı sil"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="dashboard__empty">
                <h2>Tapşırıq tapılmadı</h2>

                <p>
                  Axtarış və ya filter nəticəsində heç bir tapşırıq tapılmadı.
                </p>
              </div>
            )}
          </section>
        </div>

        <button
          type="button"
          className="dashboard__floating-button"
          onClick={openCreateModal}
          aria-label="Yeni tapşırıq əlavə et"
        >
          +
        </button>

        {isModalOpen && (
          <div className="task-modal">
            <div className="task-modal__content">
              <div className="task-modal__header">
                <h2>
                  {editingTask ? "Tapşırığı redaktə et" : "Yeni tapşırıq"}
                </h2>
              </div>

              <form className="task-modal__form" onSubmit={handleSubmit}>
                <div className="task-modal__field">
                  <label htmlFor="title">Başlıq *</label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Məs: Tam işlək React tətbiqi qurmaq"
                    required
                  />
                </div>

                <div className="task-modal__field">
                  <label htmlFor="description">Qeyd</label>

                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tapşırıq haqqında qısa qeyd.."
                    rows="4"
                  />
                </div>

                <div className="task-modal__row">
                  <div className="task-modal__field">
                    <label htmlFor="status">Status</label>

                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="pending">Gözlənilir</option>

                      <option value="in-progress">Davam edir</option>

                      <option value="completed">Tamamlandı</option>
                    </select>
                  </div>

                  <div className="task-modal__field">
                    <label htmlFor="priority">Prioritet</label>

                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                    >
                      <option value="low">Aşağı</option>
                      <option value="medium">Orta</option>
                      <option value="high">Yüksək</option>
                    </select>
                  </div>

                  <div className="task-modal__field">
                    <label htmlFor="dueDate">Son tarix *</label>

                    <input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      value={formData.dueDate}
                      min={getToday()}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="task-modal__actions">
                  <button
                    type="button"
                    className="task-modal__cancel"
                    onClick={closeModal}
                  >
                    Ləğv et
                  </button>

                  <button type="submit" className="task-modal__submit">
                    {editingTask ? "Dəyişiklikləri saxla" : "Tapşırıq yaradın"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Dashboard;
