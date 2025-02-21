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
import {
  Bell,
  Calendar,
  Users,
  LogOut,
  Search,
  Filter,
  ArrowUpAZ,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Plus,
  Video,
  MoreHorizontal,
} from "lucide-react";
import { useContext, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AuthContext } from "@/context/authContext";
import ScheduleInterview from "@/components/ScheduleInterview";
import ShortListedCandidates from "@/components/ShortlistCandidate";
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
  const { user, logoutHandler } = useContext(AuthContext);
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
  const [showScheduleInterview, setShowScheduleInterview] = useState(false);
  const [showShortlistedCandidates, setShowShortlistedCandidates] =
    useState(false);
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
// Upcoming Interviews Data
const interviews = [
  {
    company: "Google",
    stage: "Technical Round",
    date: "2025-01-25",
    time: "15:00",
    status: "Upcoming"
  },
  {
    company: "Amazon",
    stage: "HR Interview",
    date: "2025-01-27",
    time: "11:00",
    status: "Scheduled"
  },
  {
    company: "Microsoft",
    stage: "System Design",
    date: "2025-02-01",
    time: "14:30",
    status: "Pending Confirmation"
  },
  {
    company: "Meta",
    stage: "Cultural Fit",
    date: "2025-02-05",
    time: "10:00",
    status: "Preparation Needed"
  }
];

// Recent Activities Data
const activities = [
  {
    candidate: "Sarah Johnson",
    position: "Senior Frontend Developer",
    status: "Technical Review",
    lastUpdate: "2 hours ago"
  },
  {
    candidate: "Michael Chen",
    position: "Full Stack Engineer",
    status: "Offer Sent",
    lastUpdate: "1 day ago"
  },
  {
    candidate: "Emma Wilson",
    position: "UX Engineer",
    status: "Interview Scheduled",
    lastUpdate: "3 days ago"
  },
  {
    candidate: "David Kim",
    position: "DevOps Specialist",
    status: "Reference Check",
    lastUpdate: "5 days ago"
  },
  {
    candidate: "Lisa Rodriguez",
    position: "Mobile Developer",
    status: "Rescreen Needed",
    lastUpdate: "1 week ago"
  }
];
  return (
    // <div className="min-h-screen p-5 mt-20">
    //   <div className="max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
    //     {/* Header Section */}
    //     <div className="p-6 flex items-center justify-between gap-5 border-b max-sm:flex-col">
    //       <div className="w-full flex gap-3">
    //         <Avatar className="rounded-full border-4 border-indigo-500 shadow-lg w-[100px] h-[100px]">
    //           <AvatarImage src="https://github.com/shadcn.png" />
    //           <AvatarFallback>{user?.name}</AvatarFallback>
    //         </Avatar>
    //         <div>
    //           <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
    //           <p className="text-gray-300">{user?.email}</p>
    //           <p className="text-gray-400">Role: {userData.role}</p>
    //           <p className="text-gray-400">
    //             Experience: {userData.experience} years
    //           </p>
    //         </div>
    //       </div>

    //       <div className="flex gap-3">
    //         <button
    //           className="bg-green-500 text-white cursor-pointer w-[160px] h-[40px] rounded font-semibold hover:bg-green-600"
    //           onClick={() => setShowScheduleInterview(true)}
    //         >
    //           Schedule Interview
    //         </button>
    //         <button
    //           className="bg-blue-500 text-white cursor-pointer w-[200px] h-[40px] rounded font-semibold hover:bg-blue-600"
    //           onClick={() => setShowShortlistedCandidates(true)}
    //         >
    //           Shortlisted Candidates
    //         </button>
    //         <button
    //           className="bg-mainColor text-black cursor-pointer w-[130px] h-[40px] rounded font-semibold hover:bg-mainColor/50"
    //           onClick={logoutHandler}
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     </div>
    //     {showScheduleInterview && (
    //       <ScheduleInterview onClose={() => setShowScheduleInterview(false)} />
    //     )}
    //     {showShortlistedCandidates && (
    //       <ShortListedCandidates
    //         onClose={() => setShowShortlistedCandidates(false)}
    //       />
    //     )}
    //     {/* Stats Section */}
    //     <div className="grid grid-cols-3 gap-5 p-6">
    //       <div className="bg-indigo-100 text-indigo-800 p-4 rounded-lg text-center shadow-sm">
    //         <h2 className="text-lg font-semibold">Sessions Attended</h2>
    //         <p className="text-3xl font-bold">{statsData.sessionsAttended}</p>
    //       </div>
    //       <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center shadow-sm">
    //         <h2 className="text-lg font-semibold">Rounds Completed</h2>
    //         <p className="text-3xl font-bold">{statsData.roundsCompleted}</p>
    //       </div>
    //       <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center shadow-sm">
    //         <h2 className="text-lg font-semibold">Pending Interviews</h2>
    //         <p className="text-3xl font-bold">{statsData.pendingInterviews}</p>
    //       </div>
    //     </div>

    //     {/* Graph Section */}
    //     <div className="p-6">
    //       <h2 className="text-xl font-bold text-white mb-4">Interviews</h2>
    //       <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
    //         <Line data={lineChartData} options={lineChartOptions as any} />
    //       </div>
    //     </div>

    //     {/* Upcoming Interviews Section */}
    //     <div className="p-6">
    //       <h2 className="text-xl font-bold text-white mb-4">
    //         Upcoming Interviews
    //       </h2>
    //       <ul className="space-y-4">
    //         <li className="flex justify-between p-4 bg-gray-900 rounded-lg shadow-sm">
    //           <span className="font-medium text-gray-400">
    //             Google - Technical Round
    //           </span>
    //           <span className="text-gray-500">Jan 25, 2025 | 3:00 PM</span>
    //         </li>
    //         <li className="flex justify-between p-4 bg-gray-900 rounded-lg shadow-sm">
    //           <span className="font-medium text-gray-400">
    //             Amazon - HR Round
    //           </span>
    //           <span className="text-gray-500">Jan 27, 2025 | 11:00 AM</span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen p-5 mt-20 bg-gray-900">
      <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden bg-gray-800">
        {/* Header Section */}
        <div className="p-6 flex items-center justify-between gap-5 border-b border-gray-700 max-sm:flex-col">
          <div className="w-full flex gap-4 items-center">
            <Avatar className="rounded-full border-4 border-indigo-500 shadow-lg w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-gray-700 text-white">
                {user?.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
              <p className="text-gray-300">{user?.email}</p>
              <div className="flex gap-4 mt-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                  Role: {userData.role}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                  Exp: {userData.experience} years
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-end">
            <button className="relative bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <Bell className="w-6 h-6 text-gray-300" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex gap-3">
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
                onClick={() => setShowScheduleInterview(true)}
              >
                <Calendar className="w-5 h-5" />
                Schedule Interview
              </button>
              <button
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2"
                onClick={() => setShowShortlistedCandidates(true)}
              >
                <Users className="w-5 h-5" />
                Candidates
              </button>
              <button
                className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center gap-2"
                onClick={logoutHandler}
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Bar */}
        <div className="p-4 bg-gray-900 border-b border-gray-700 flex gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search candidates, interviews..."
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <Filter className="w-5 h-5 text-gray-300" />
            </button>
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <ArrowUpAZ className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
          <div className="bg-gray-700 p-6 rounded-xl border-l-4 border-indigo-500 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm font-medium">
                  Sessions Attended
                </h3>
                <p className="text-3xl font-bold text-white mt-2">
                  {statsData.sessionsAttended}
                </p>
              </div>
              <CalendarCheck className="w-12 h-12 text-indigo-400" />
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-600 rounded-full">
                <div className="h-1 bg-indigo-500 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl border-l-4 border-emerald-500 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm font-medium">
                  Rounds Completed
                </h3>
                <p className="text-3xl font-bold text-white mt-2">
                  {statsData.roundsCompleted}
                </p>
              </div>
              <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-600 rounded-full">
                <div className="h-1 bg-emerald-500 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl border-l-4 border-amber-500 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-400 text-sm font-medium">
                  Pending Interviews
                </h3>
                <p className="text-3xl font-bold text-white mt-2">
                  {statsData.pendingInterviews}
                </p>
              </div>
              <Clock className="w-12 h-12 text-amber-400" />
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-600 rounded-full">
                <div className="h-1 bg-amber-500 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Chart Section */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                Performance Overview
              </h2>
              <div className="flex gap-2">
                <button className="bg-gray-600 px-3 py-1 rounded-lg text-sm text-gray-300 hover:bg-gray-500">
                  1 Week
                </button>
                <button className="bg-indigo-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-indigo-500">
                  1 Month
                </button>
                <button className="bg-gray-600 px-3 py-1 rounded-lg text-sm text-gray-300 hover:bg-gray-500">
                  1 Year
                </button>
              </div>
            </div>
            <div className="h-80">
              <Line data={lineChartData} options={lineChartOptions as any} />
            </div>
          </div>

          {/* Upcoming Interviews */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                Upcoming Interviews
              </h2>
              <button className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New
              </button>
            </div>

            <div className="space-y-4">
              {interviews.map((interview, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">
                        {interview.company}
                      </h3>
                      <p className="text-sm text-gray-400">{interview.stage}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300">{interview.date}</p>
                      <p className="text-sm text-gray-400">{interview.time}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="bg-gray-700 px-2 py-1 rounded text-xs text-amber-400">
                      {interview.status}
                    </span>
                    <button className="ml-auto text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      Join Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="bg-gray-700 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-300 font-medium">
                    Candidate
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-medium">
                    Position
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-medium">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-medium">
                    Last Update
                  </th>
                  <th className="px-6 py-4 text-right text-gray-300 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-600 hover:bg-gray-750 transition-colors"
                  >
                    <td className="px-6 py-4 text-white">
                      {activity.candidate}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {activity.position}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-600 px-3 py-1 rounded-full text-sm text-emerald-400">
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {activity.lastUpdate}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-indigo-400 hover:text-indigo-300 mr-4">
                        View Details
                      </button>
                      <button className="text-gray-400 hover:text-gray-300">
                        <MoreHorizontal  className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showScheduleInterview && (
        <ScheduleInterview onClose={() => setShowScheduleInterview(false)} />
      )}
      {showShortlistedCandidates && (
        <ShortListedCandidates
          onClose={() => setShowShortlistedCandidates(false)}
        />
      )}
    </div>
  );
}
