import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChatPage from "./pages/ChatPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e1a_1px,transparent_1px),linear-gradient(to_bottom,#22c55e1a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-green-400 opacity-20 blur-md animate-pulse"
            style={{
              width: `${4 + Math.random() * 12}px`,
              height: `${4 + Math.random() * 12}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-500 rounded-full opacity-20 blur-[120px] animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-400 rounded-full opacity-20 blur-[120px] animate-pulse animation-delay-2000" />

      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
