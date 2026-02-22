import { useState } from "react";

export default function AlumniDashboard() {
  const [requests, setRequests] = useState([
    { id: 1, studentName: "Rohit", status: "requested" }
  ]);

  const acceptRequest = (id) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: "accepted" } : req
    );
    setRequests(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-blue-100 to-purple-200 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        👔 WarmConnect – Alumni Dashboard
      </h1>

      <div className="max-w-4xl mx-auto">
        {requests.map((req) => (
          <div key={req.id} className="bg-white shadow-xl rounded-xl p-6 mb-6">
            <h3 className="font-bold text-xl text-gray-800">
              Student: {req.studentName}
            </h3>

            {req.status === "requested" && (
              <button
                onClick={() => acceptRequest(req.id)}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              >
                Accept Request
              </button>
            )}

            {req.status === "accepted" && (
              <p className="mt-4 text-green-600 font-semibold">
                Request Accepted ✅
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}