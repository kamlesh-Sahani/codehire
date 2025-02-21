"use client";

import { useState } from "react";

type Candidate = {
  name: string;
  email: string;
  score: number;
};

const candidatesData: Candidate[] = [
  { name: "Alice Johnson", email: "alice@example.com", score: 95 },
  { name: "Bob Smith", email: "bob@example.com", score: 90 },
  { name: "Charlie Brown", email: "charlie@example.com", score: 88 },
  { name: "David Williams", email: "david@example.com", score: 85 },
];

export default function RecruiterDashboard() {
  const [candidates, setCandidates] = useState<Candidate[]>(candidatesData);
  const [sortOrder, setSortOrder] = useState<string>("Highest Score");
  const [search, setSearch] = useState<string>("");

  const handleSort = (order: string) => {
    const sortedCandidates = [...candidates].sort((a, b) =>
      order === "Highest Score" ? b.score - a.score : a.score - b.score
    );
    setCandidates(sortedCandidates);
    setSortOrder(order);
  };

  const handleEmail = (email: string) => {
    alert(`Sending email to ${email}`);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto text-white p-5 mt-20 bg-black">
      <h1 className="text-2xl font-bold mb-4">Top Scoring Candidates</h1>
      
      <div className="flex gap-4 mb-4">
        <select
          className="bg-gray-800 p-2 rounded"
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option>Highest Score</option>
          <option>Lowest Score</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          className="bg-gray-800 p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full bg-gray-900 text-left rounded-lg">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Score</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {candidates
            .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .map((candidate, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3">{candidate.name}</td>
                <td className="p-3">{candidate.email}</td>
                <td className="p-3">{candidate.score}</td>
                <td className="p-3">
                  <button
                    className="bg-blue-600 px-3 py-1 rounded"
                    onClick={() => handleEmail(candidate.email)}
                  >
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
