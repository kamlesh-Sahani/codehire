"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Performance = () => {
  const evaluationResults = {
    correctness: "pass", // or 'fail'
    efficiency: {
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
    },
    codeQuality: {
      variableNaming: [
        "Variable `x` should be renamed to `userCount` for clarity.",
        "Avoid using single-letter variable names unless it's for an iterator.",
      ],
      codeStructure: [
        "Consider breaking down the function into smaller, reusable functions.",
        "The function is too long. Try to keep functions below 50 lines.",
      ],
      bestPractices: [
        "Use `const` instead of `let` for variables that are not reassigned.",
        "Avoid using magic numbers. Use constants for values like `3.14`.",
      ],
    },
    testCases: [
      { name: "Test 1", status: "pass" },
      { name: "Test 2", status: "fail" },
    ],
    aiSuggestions: [
      "Refactor your code to improve readability.",
      "Optimize time complexity for larger datasets.",
      "Use a switch case instead of multiple if-else statements for cleaner code.",
    ],
  };

  const { correctness, efficiency, codeQuality, testCases, aiSuggestions } =
    evaluationResults;

  const correctnessData = [
    { name: "Passed", value: correctness === "pass" ? 100 : 0 },
    { name: "Failed", value: correctness === "fail" ? 100 : 0 },
  ];

  // Data for efficiency (performance) in bar chart format
  const performanceData = [
    {
      name: "Time Complexity",
      value: efficiency.timeComplexity === "O(n log n)" ? 80 : 50,
    },
    {
      name: "Space Complexity",
      value: efficiency.spaceComplexity === "O(n)" ? 70 : 40,
    },
  ];

  // Pie chart for Code Quality (Good Practices vs Issues)
  const codeQualityData = [
    { name: "Good Practices", value: codeQuality.variableNaming ? 80 : 50 },
    { name: "Issues", value: codeQuality.variableNaming ? 20 : 50 },
  ];

  return (
    <div className="w-full md:w-[80%] flex flex-col gap-3 m-auto">
   
      <h1 className="text-3xl font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      Code Evaluation & Insights
          </h1>

      <div className="w-full   gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="mb-8 p-6 border-2 border-[#181818] rounded-md shadow-lg ">
          <h3 className="text-xl font-semibold mb-4">Correctness</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={correctnessData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#82ca9d"
              >
                <Cell fill={correctness === "pass" ? "#4CAF50" : "#FF5733"} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p
            className={`mt-4 text-center ${
              correctness === "pass" ? "text-green-500" : "text-red-500"
            }`}
          >
            {correctness === "pass"
              ? "Code Passed All Test Cases"
              : "Code Failed"}
          </p>
        </div>

        {/* Efficiency Section */}
        <div className="mb-8 p-6 border-2 border-[#181818] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Efficiency</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <p>
              <strong>Time Complexity:</strong> {efficiency.timeComplexity}
            </p>
            <p>
              <strong>Space Complexity:</strong> {efficiency.spaceComplexity}
            </p>
          </div>
        </div>

        {/* Code Quality Section */}
        <div className="mb-8 p-6 border-2 border-[#181818] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Quality</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={codeQualityData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <h4 className="font-semibold">Variable Naming</h4>
            {codeQuality.variableNaming.map((suggestion, idx) => (
              <p key={idx} className="text-yellow-400">
                {suggestion}
              </p>
            ))}
            <h4 className="font-semibold mt-4">Code Structure</h4>
            {codeQuality.codeStructure.map((suggestion, idx) => (
              <p key={idx} className="text-yellow-400">
                {suggestion}
              </p>
            ))}
            <h4 className="font-semibold mt-4">Best Practices</h4>
            {codeQuality.bestPractices.map((suggestion, idx) => (
              <p key={idx} className="text-yellow-400">
                {suggestion}
              </p>
            ))}
          </div>
        </div>

        {/* Test Cases Section */}
        <div className="mb-8 p-6 border-2 border-[#181818] rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Test Cases</h3>
          {testCases.map((testCase, idx) => (
            <div
              key={idx}
              className={`flex justify-between mb-4 p-4 rounded-lg ${
                testCase.status === "pass" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <span>{testCase.name}</span>
              <span>
                {testCase.status === "pass" ? "✔️ Passed" : "❌ Failed"}
              </span>
            </div>
          ))}
        </div>

        <div className="p-6 border-2 border-[#181818] rounded-md shadow-lg md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">AI Suggestions</h3>
          {aiSuggestions.map((suggestion, idx) => (
            <p key={idx} className="text-blue-400">
              {suggestion}
            </p>
          ))}
        </div>
      </div>
      {/* Correctness Section */}
    </div>
  );
};

export default Performance;
