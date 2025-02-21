// "use client";

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

interface ShortlistedCandidatesProps {
  onClose: () => void;
}

const ShortlistedCandidates: React.FC<ShortlistedCandidatesProps> = ({
  onClose,
}) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-gray-900 p-6 rounded-xl shadow-2xl w-[95%] max-w-4xl border border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white font-bold">
            Shortlisted Candidates
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            className="bg-gray-800 p-3 rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option>Highest Score</option>
            <option>Lowest Score</option>
          </select>

          <input
            type="text"
            placeholder="Search by name..."
            className="bg-gray-800 p-3 rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-500 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full bg-gray-900 text-left">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-4 font-semibold text-gray-300">Name</th>
                <th className="p-4 font-semibold text-gray-300">Email</th>
                <th className="p-4 font-semibold text-gray-300">Score</th>
                <th className="p-4 font-semibold text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidates
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((candidate, index) => (
                  <tr 
                    key={index} 
                    className="border-t border-gray-800 hover:bg-gray-850 transition-colors duration-200"
                  >
                    <td className="p-4 text-gray-200">{candidate.name}</td>
                    <td className="p-4 text-gray-400">{candidate.email}</td>
                    <td className="p-4 text-blue-400 font-medium">{candidate.score}</td>
                    <td className="p-4">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-white transition-colors duration-200"
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

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortlistedCandidates;