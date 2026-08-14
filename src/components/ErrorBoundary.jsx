import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-boundary">
          <div className="error-boundary__container">
            <div className="error-boundary__card">
              <span className="error-boundary__icon">⚠️</span>

              <h1 className="error-boundary__title">Nəsə xəta baş verdi</h1>

              <p className="error-boundary__text">
                Səhifənin göstərilməsi zamanı gözlənilməyən xəta baş verdi.
                Zəhmət olmasa səhifəni yeniləyin.
              </p>

              <button
                type="button"
                className="error-boundary__button"
                onClick={this.handleReload}
              >
                Səhifəni yenilə
              </button>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
