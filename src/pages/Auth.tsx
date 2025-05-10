
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Lock, User, UserPlus } from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    // Frontend-only authentication simulation
    const timer = setTimeout(() => navigate("/"), 1200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-md w-full flex flex-col items-center border">
          <h2 className="text-3xl font-bold text-green-700 mb-4 flex gap-2 items-center">
            <User className="text-green-500" /> Welcome!
          </h2>
          <p className="text-gray-700 mb-7 text-center max-w-xs">
            This is a frontend-only application.<br />
            No backend authentication is required.
          </p>
          <div className="flex gap-6 text-green-700 mb-4 mt-2">
            <Lock className="w-6 h-6" />
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded mt-2 text-xs">
            Demo: redirects in 1.2s (frontend simulation)
          </span>
        </div>
      </main>
    </div>
  );
}
