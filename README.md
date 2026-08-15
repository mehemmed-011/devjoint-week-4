# TaskFlow

TaskFlow istifadəçilərə gündəlik tapşırıqlarını yaratmaq, idarə etmək və izləmək imkanı verən müasir və responsiv Task Management tətbiqidir.

Layihədə istifadəçi qeydiyyatı və giriş sistemi, qorunan səhifələr, taskların CRUD əməliyyatları, axtarış və status üzrə filtrasiya funksiyaları mövcuddur.

Hər istifadəçinin taskları ayrıca `userId` ilə əlaqələndirilir. Beləliklə, bir istifadəçi digər istifadəçinin tasklarını görə və idarə edə bilmir.

---

## 🚀 Layihənin əsas xüsusiyyətləri

- 🔐 İstifadəçi qeydiyyatı
- 🔑 İstifadəçi giriş sistemi
- 🛡️ Protected Route
- 👤 İstifadəçi profil səhifəsi
- ➕ Yeni task yaratmaq
- ✏️ Mövcud taskı redaktə etmək
- 🗑️ Task silmək
- 🔍 Tasklar üzrə axtarış
- 📊 Taskları statusa görə filtrasiya etmək
- 📈 Task statistikalarını göstərmək
- 🎯 Task prioritetlərini müəyyən etmək
- 📅 Task üçün son tarix təyin etmək
- 💾 Məlumatların MockAPI üzərində saxlanılması
- 👥 Hər istifadəçiyə aid taskların ayrıca idarə olunması
- ⚡ Axios ilə API sorğuları
- 🚨 Error Boundary ilə xətaların idarə olunması
- 📱 Responsiv dizayn
- 🌐 Vercel üzərindən deploy

---

## 🖥️ Səhifələr

Layihədə aşağıdakı səhifələr mövcuddur:

### Ana səhifə

`/`

TaskFlow haqqında ümumi məlumat, əsas xüsusiyyətlər, necə işlədiyi və istifadəçini qeydiyyata yönləndirən CTA bölməsi göstərilir.

### Login

`/login`

İstifadəçi e-poçt və şifrəsini daxil edərək hesabına daxil ola bilər.

### Signup

`/signup`

Yeni istifadəçi ad, e-poçt və şifrə daxil edərək yeni hesab yarada bilər.

### Dashboard

`/dashboard`

Yalnız autentifikasiya olunmuş istifadəçilər üçün əlçatandır.

Dashboard üzərindən:

- Task yaratmaq
- Task redaktə etmək
- Task silmək
- Task axtarmaq
- Status üzrə filtrasiya etmək
- Task statistikasına baxmaq
- Task statusunu idarə etmək
- Task prioritetini müəyyən etmək
- Task üçün son tarix seçmək

mümkündür.

### Profile

`/profile`

İstifadəçinin:

- Ad və soyadı
- E-poçt ünvanı
- Hesab statusu

göstərilir.

### 404 Not Found

Mövcud olmayan URL-lər üçün xüsusi 404 səhifəsi göstərilir.

---

## 🔐 Autentifikasiya sistemi

Layihədə autentifikasiya üçün React Context API istifadə olunur.

`AuthContext` istifadəçinin giriş vəziyyətini idarə edir.

İstifadəçi uğurla daxil olduqda:

- istifadəçi məlumatları yadda saxlanılır;
- mock token yaradılır;
- istifadəçi Dashboard səhifəsinə yönləndirilir.

Logout zamanı istifadəçinin sessiya məlumatları təmizlənir və istifadəçi ana səhifəyə qaytarılır.

---

## 🛡️ Protected Routes

Dashboard və Profile səhifələri qorunan route-lardır.

İstifadəçi autentifikasiya olunmayıbsa:

```text
/dashboard
/profile

səhifələrinə birbaşa daxil ola bilməz.

Bu məqsədlə ProtectedRoute komponentindən istifadə olunur.
```

---

## 📦 İstifadə olunan texnologiyalar
 ### Frontend
- React
- React Router DOM
- JavaScript
- HTML5
- CSS3
### API
- Axios
- MockAPI
### Build Tool
- Vite
### Deployment
- Vercel

---

## 🌐 API

Layihədə məlumatların saxlanılması və CRUD əməliyyatları üçün MockAPI istifadə olunur.

### Əsas endpoint:

/users

İstifadəçi əməliyyatları üçün istifadə olunur.

### Task endpoint:

/tasks

Taskların yaradılması, oxunması, yenilənməsi və silinməsi üçün istifadə olunur.

---

## 📁 Layihənin strukturu

```text
src/
│
├── components/
│   ├── ErrorBoundary.jsx
│   ├── ErrorBoundary.css
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   └── Footer.css
│
├── features/
│   │
│   ├── auth/
|   |   |
|   |   ├── api/
|   |   |    └── authApi.js
|   |   |
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   └── pages/
│   │       ├── Login.jsx
│   │       ├── Signup.jsx
│   │       └── Auth.css
│   │
│   ├── profile/
│   │   └── pages/
│   │       ├── Profile.jsx
│   │       └── Profile.css
│   │
│   └── tasks/
|       |
|       ├── api/
|       |    └── taskApi.js
|       |
│       └── pages/
│           ├── Dashboard.jsx
│           └── Dashboard.css
│
│
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── NotFound.jsx
│   └── NotFound.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 👥 İstifadəçiyə Məxsus Task Sistemi

Tasklar bütün istifadəçilər üçün ümumi göstərilmir. Hər bir task istifadəçinin `userId` məlumatı ilə əlaqələndirilir. 

Dashboard açıldıqda **yalnız daxil olmuş istifadəçinin** `userId`-sinə uyğun məlumatlar yüklənir. Bu yanaşma sayəsində istifadəçilərin task məlumatları bir-birindən tamamilə ayrılır və izolyasiya olunur.

### Data Strukturu Nümunələri

**İstifadəçi 1-ə aid task:**
```json
{
  "title": "Test 1",
  "description": "Test task 1",
  "status": "pending",
  "priority": "high",
  "dueDate": "2026-08-29",
  "userId": "1"
}
```

**İstifadəçi 2-yə aid task:**
```json
{
  "title": "Test 2",
  "description": "Test task 2",
  "status": "in-progress",
  "priority": "medium",
  "dueDate": "2026-08-30",
  "userId": "2"
}
```

---

## 📝 Task Statusları

Tasklar üç əsas statusdan birinə sahib ola bilər:

* `pending`
* `in-progress`
* `completed`

Frontend-də isə bunlar aşağıdakı kimi göstərilir:

| API Dəyəri | Interfeysdə Nümayişi |
| :--- | :--- |
| `pending` | 🟡 **GÖZLƏNİLİR** |
| `in-progress` | 🔵 **DAVAM EDİR** |
| `completed` | 🟢 **TAMAMLANDI** |

---

## 🎯 Task Prioritetləri

Task üçün üç prioritet səviyyəsi mövcuddur:

* `high`
* `medium`
* `low`

Frontend-də isə bunlar aşağıdakı kimi göstərilir:

| API Dəyəri | Interfeysdə Nümayişi |
| :--- | :--- |
| `high` | 🔴 **Yüksək** |
| `medium` | 🟠 **Orta** |
| `low` | 🔵 **Aşağı** |

---

## 🔍 Axtarış və Filtrasiya

Dashboard-da istifadəçi taskları rahatlıqla axtara və statusa görə filtrasiya edə bilər.

* **Axtarış:** Axtarış sətri vasitəsilə aşağıdakı parametrlər üzərindən həyata keçirilir:
  * Task başlığı
  * Task açıqlaması

* **Status Filtri:** İstifadəçilər üçün aşağıdakı seçim imkanları mövcuddur:
  * **Bütün tasklar** (Filter tətbiq olunmur)
  * **Gözlənilir** (`pending`)
  * **Davam edir** (`in-progress`)
  * **Tamamlandı** (`completed`)

---

## 📊 Dashboard Statistikası

Dashboard istifadəçiyə öz taskları haqqında real-vaxt rejimində ümumi analitika və statistika təqdim edir:

* **Bütün tasklar** — İstifadəçinin yaratdığı ümumi task sayı
* **Gözləyən tasklar** — `pending` statusunda olan taskların sayı
* **Davam edən tasklar** — `in-progress` statusunda olan taskların sayı
* **Tamamlanan tasklar** — `completed` statusunda olan taskların sayı

*Statistikalar mövcud task məlumatlarına əsasən avtomatik və dinamik şəkildə hesablanır.*

---

## ✏️ CRUD Əməliyyatları

Layihədə taskların idarə olunması üçün tam CRUD (Create, Read, Update, Delete) sistemi tətbiq olunub:

* **Create (Yaratmaq):**
  * **Method / Endpoint:** `POST /tasks`
  * **Təsvir:** Yeni task yaratmaq üçün istifadə olunur.

* **Read (Oxumaq):**
  * **Method / Endpoint:** `GET /tasks?userId={userId}`
  * **Təsvir:** Daxil olmuş istifadəçiyə aid taskları əldə etmək üçün istifadə olunur.

* **Update (Yeniləmək):**
  * **Method / Endpoint:** `PUT /users/{userId}/tasks/{taskId}`
  * **Təsvir:** Mövcud taskın məlumatlarını və statusunu yeniləmək üçün istifadə olunur.

* **Delete (Silmək):**
  * **Method / Endpoint:** `DELETE /users/{userId}/tasks/{taskId}`
  * **Təsvir:** Seçilmiş taskı sistemdən silmək üçün istifadə olunur.

---

## ⚡ Optimistic UI

Task yaratmaq, redaktə etmək və silmək zamanı istifadəçi interfeysinin (UI) daha sürətli reaksiya verməsi üçün **Optimistic UI** yanaşmasından istifadə olunur:

* **Real-vaxt Reaksiyası:** İstifadəçi hər hansı bir əməliyyatı icra etdikdə, dəyişiklik server cavabı gözlənilmədən anında UI-da əks olunur.
* **Uğurlu Əməliyyat:** Sorğu uğurla tamamlandıqda local state serverdən gələn dəqiq məlumat ilə yenilənir.
* **Xəta Vəziyyəti (Rollback):** Əməliyyat uğursuz olduqda dəyişiklik geri alınaraq əvvəlki state bərpa edilir və istifadəçiyə müvafiq xəta mesajı göstərilir.

---

## 🚨 Error Boundary

Layihədə React komponentlərində baş verə biləcək gözlənilməz JavaScript xətalarını idarə etmək üçün **ErrorBoundary** komponentindən istifadə olunur:

* **Çökmənin Qarşısının Alınması:** Komponent ağacında baş verən xətaları tutaraq bütün tətbiqin (White Screen OF Death) sıradan çıxmasının qarşısını alır.
* **Xəta İdarəetməsi (Fallback UI):** Xəta baş verdikdə istifadəçiyə çökmüş interfeys əvəzinə daha düzgün, anlaşıqlı və idarəolunan xəta mesajı (Fallback UI) göstərilir.

---

## 📱 Responsiv Dizayn

TaskFlow müxtəlif ekran ölçülərinə tam uyğunlaşacaq şəkildə responsiv olaraq hazırlanıb.

* **Dəstəklənən Cihazlar:**
  * **Mobil:**
  * **Tablet:**
  * **Desktop:**

---

## 👨‍💻 Müəllif

**Məhəmməd İbrahimli**