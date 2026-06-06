import { useEffect } from "react";

const LOGIN_URL = "https://app.gohighlevel.com/";

function LoginRedirect() {
  useEffect(() => {
    window.location.replace(LOGIN_URL);
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 pt-32 text-center text-slate-700">
      <p className="mb-5 text-lg font-medium">Redirecting to login...</p>
      <a
        href={LOGIN_URL}
        className="inline-flex rounded-md px-6 py-3 font-semibold text-white shadow-lg transition-all hover:brightness-110"
        style={{ backgroundColor: "var(--primary-blue)" }}
      >
        Continue to Login
      </a>
    </div>
  );
}

export default LoginRedirect;
