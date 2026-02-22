import { useState } from "react";

export default function StudentDashboard() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [matches, setMatches] = useState([]);

  const availableSkills = [
    "React","Java","Python","C","JavaScript","Node","MongoDB",
    "SQL","Machine Learning","DSA"
  ];

  const alumniList = [
    {
      id: 1,
      name: "Rahul Sharma",
      industry: "Software Development",
      skills: ["React","Node","MongoDB","JavaScript"],
      status: "available"
    },
    {
      id: 2,
      name: "Priya Mehta",
      industry: "Data Science",
      skills: ["Python","Machine Learning","SQL"],
      status: "available"
    }
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const calculateMatches = () => {
    const results = alumniList.map((alumni) => {
      const commonSkills = selectedSkills.filter((skill) =>
        alumni.skills.includes(skill)
      );

      const score = Math.round(
        (commonSkills.length / alumni.skills.length) * 100
      );

      return { ...alumni, compatibility: score };
    });

    results.sort((a, b) => b.compatibility - a.compatibility);
    setMatches(results);
  };

  const sendRequest = (id) => {
    const updated = matches.map((alumni) =>
      alumni.id === id
        ? { ...alumni, status: "requested" }
        : alumni
    );
    setMatches(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-blue-100 to-purple-200 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🎓 WarmConnect – Student Dashboard
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-5xl mx-auto">

        <h3 className="font-semibold text-lg mb-4 text-gray-700">
          Select Your Skills
        </h3>

        <div className="flex flex-wrap gap-3 mb-8">
          {availableSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedSkills.includes(skill)
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        <button
          onClick={calculateMatches}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg mb-10 transition"
        >
          Find Best Matches
        </button>

        {matches.map((alumni) => (
          <div key={alumni.id} className="bg-gray-50 shadow-md rounded-xl p-6 mb-6">
            <h3 className="font-bold text-xl text-gray-800">
              👔 {alumni.name}
            </h3>
            <p className="text-gray-600 mb-2">
              Industry: {alumni.industry}
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className="bg-teal-500 h-4 rounded-full transition-all"
                style={{ width: `${alumni.compatibility}%` }}
              ></div>
            </div>

            <p className="mt-2 font-semibold text-teal-600">
              Compatibility: {alumni.compatibility}%
            </p>

            {alumni.status === "available" && (
              <button
                onClick={() => sendRequest(alumni.id)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Request Mentorship
              </button>
            )}

            {alumni.status === "requested" && (
              <p className="mt-4 text-yellow-600 font-semibold">
                Request Sent ⏳
              </p>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}