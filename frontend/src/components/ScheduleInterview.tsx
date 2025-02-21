import { useState } from "react";

const ScheduleInterview = ({ onClose }: { onClose: () => void }) => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("Online");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ candidateName, position, date, time, mode });
    alert("Interview Scheduled Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-5">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-gray-400 font-bold mb-4 text-center">
          Schedule Interview
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* <label className="block text-gray-700">Candidate Name:</label> */}
            <input
              type="text"
              className="w-full text-white text-sm border p-3 rounded"
              value={candidateName}
              placeholder="Enter Candidate's Name"
              onChange={(e) => setCandidateName(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label className="block text-gray-700">Candidate Email:</label> */}
            <input
              type="email"
             className="w-full text-white text-sm border p-3 rounded"
             placeholder="Enter Candidate's Email"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              required
            />
          </div>

          <div>
            {/* <label className="block text-gray-700">Position:</label> */}
            <select
              className="w-full text-white border text-sm p-2 rounded"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="">Select Position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Data Scientist">Data Scientist</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300">Interview Date:</label>
            <input
              type="date"
              className="w-full text-sm text-white border p-2 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300">Interview Time:</label>
            <input
              type="time"
              className="w-full text-sm text-white border p-2 rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300">Interview Mode:</label>
            <select
              className="w-full text-sm text-white border p-2 rounded"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              required
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-gray-400 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Schedule Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleInterview;