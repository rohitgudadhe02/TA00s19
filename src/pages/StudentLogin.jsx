import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px] text-center">
        <h2 className="text-3xl font-bold mb-6">Student Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          onClick={() => navigate("/student-dashboard")}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}