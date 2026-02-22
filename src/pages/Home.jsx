import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-100 to-blue-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-6">
        WarmConnect
      </h1>

      <p className="mb-8 text-lg">
        Connecting Students with Alumni through Smart Matching
      </p>

      <button
        onClick={() => navigate("/select-role")}
        className="bg-teal-500 text-white px-8 py-3 rounded-lg"
      >
        Get Started
      </button>
    </div>
  );
}