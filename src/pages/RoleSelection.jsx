import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-100 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-6">
          Select Your Role
        </h2>

        <div className="flex gap-6 justify-center">
          <button
            onClick={() => navigate("/student-login")}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg"
          >
            Student
          </button>

          <button
            onClick={() => navigate("/alumni-login")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Alumni
          </button>
        </div>
      </div>
    </div>
  );
}