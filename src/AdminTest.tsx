import { useState } from "react";
import { AdminAuthProvider, useAdminAuth } from "./hooks/useAdminAuth";

const AdminTestContent = () => {
  const { isAuthenticated, isLoading, login, logout } = useAdminAuth();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const success = login(password);
    if (success) {
      setMessage("Login reușit! Admin conectat.");
    } else {
      setMessage("Parolă greșită. Încearcă: admin123");
    }
  };

  const handleLogout = () => {
    logout();
    setMessage("Te-ai deconectat cu succes.");
    setPassword("");
  };

  if (isLoading) {
    return <div>Se încarcă...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Test Admin System</h1>

      <div style={{ marginBottom: "20px" }}>
        <strong>Status: </strong>
        {isAuthenticated ? "✅ Conectat ca Admin" : "❌ Neconectat"}
      </div>

      {!isAuthenticated ? (
        <div>
          <h2>Login Admin</h2>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              placeholder="Introdu parola admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "8px", marginRight: "10px" }}
            />
            <button onClick={handleLogin} style={{ padding: "8px 16px" }}>
              Login
            </button>
          </div>
          <p>
            <strong>Parola corectă:</strong> admin123
          </p>
        </div>
      ) : (
        <div>
          <h2>Admin Dashboard</h2>
          <p>Bine ai venit în zona admin!</p>
          <button onClick={handleLogout} style={{ padding: "8px 16px" }}>
            Logout
          </button>
        </div>
      )}

      {message && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

const AdminTest = () => {
  return (
    <AdminAuthProvider>
      <AdminTestContent />
    </AdminAuthProvider>
  );
};

export default AdminTest;
