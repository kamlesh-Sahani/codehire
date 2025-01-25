"use client";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
} from "chart.js";
import { useContext, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AuthContext } from "@/context/authContext";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip
);

export default function Profile() {
  const { user,logoutHandler } = useContext(AuthContext);
  const [userData] = useState({
    name: "Kamlesh Sahani",
    email: "kamleshbca2005@gmail.com",
    role: "Software Engineer",
    experience: 3,
    avatar: "/avatar.jpg", // Replace with a valid avatar image
  });

  const [statsData] = useState({
    sessionsAttended: 15,
    roundsCompleted: 10,
    pendingInterviews: 2,
  });

  const [performanceData] = useState({
    weekly: [70, 80, 75, 90, 85, 95, 100],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  });

  const lineChartData = {
    labels: performanceData.labels,
    datasets: [
      {
        label: "Performance Trends",
        data: performanceData.weekly,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        pointBackgroundColor: "#4F46E5",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#eee",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#eee" },
      },
      y: {
        ticks: { color: "#eee" },
      },
    },
  };

  return (
    <div className=" min-h-screen p-5 mt-20">
      <div className="max-w-6xl mx-auto  shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 flex items-center justify-between gap-5 border-b max-sm:flex-col">
          <div className="w-full flex gap-3">
            <Avatar className="rounded-full border-4 border-indigo-500 shadow-lg w-[100px] h-[100px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{user?.name}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
              <p className="text-gray-300">{user?.email}</p>
              <p className="text-gray-400">Role: {userData.role}</p>
              <p className="text-gray-400">
                Experience: {userData.experience} years
              </p>
            </div>
          </div>

          <button className="bg-mainColor text-black cursor-pointer w-[130px] h-[40px] rounded font-semibold hover:bg-mainColor/50  max-sm:items-start" onClick={logoutHandler}>Logout</button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-5 p-6">
          <div className="bg-indigo-100 text-indigo-800 p-4 rounded-lg text-center shadow-sm">
            <h2 className="text-lg font-semibold">Sessions Attended</h2>
            <p className="text-3xl font-bold">{statsData.sessionsAttended}</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center shadow-sm">
            <h2 className="text-lg font-semibold">Rounds Completed</h2>
            <p className="text-3xl font-bold">{statsData.roundsCompleted}</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center shadow-sm">
            <h2 className="text-lg font-semibold">Pending Interviews</h2>
            <p className="text-3xl font-bold">{statsData.pendingInterviews}</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Interviews</h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
            <Line data={lineChartData} options={lineChartOptions as any} />
          </div>
        </div>

        {/* Upcoming Interviews Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Upcoming Interviews
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between p-4 bg-gray-900 rounded-lg shadow-sm">
              <span className="font-medium text-gray-400">
                Google - Technical Round
              </span>
              <span className="text-gray-500">Jan 25, 2025 | 3:00 PM</span>
            </li>
            <li className="flex justify-between p-4 bg-gray-900 rounded-lg shadow-sm">
              <span className="font-medium text-gray-400">
                Amazon - HR Round
              </span>
              <span className="text-gray-500">Jan 27, 2025 | 11:00 AM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
