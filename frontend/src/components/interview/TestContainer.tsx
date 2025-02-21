"use client";
import { useState } from 'react';

const dummyTests = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Test the candidate's knowledge of JavaScript fundamentals.",
    difficulty: "Easy",
    questions: [
      {
        id: 1,
        type: "MCQ",
        question: "What is the output of `2 + '2'` in JavaScript?",
        options: ["22", "4", "NaN", "Error"],
        correctAnswer: "22",
      },
      {
        id: 2,
        type: "Definition",
        question: "Define closure in JavaScript.",
        correctAnswer: "A function that retains access to its lexical scope even when executed outside that scope.",
      },
      {
        id: 3,
        type: "FillInBlank",
        question: "The `===` operator in JavaScript checks for both value and __________.",
        correctAnswer: "type",
      },
    ],
  },
  {
    id: 2,
    title: "React Concepts",
    description: "Test the candidate's understanding of React.",
    difficulty: "Medium",
    questions: [
      {
        id: 1,
        type: "MCQ",
        question: "What is the purpose of React's `useEffect` hook?",
        options: [
          "To manage state",
          "To perform side effects",
          "To create reusable components",
          "To handle routing",
        ],
        correctAnswer: "To perform side effects",
      },
      {
        id: 2,
        type: "Definition",
        question: "What is JSX?",
        correctAnswer: "A syntax extension for JavaScript that allows writing HTML-like code in React.",
      },
    ],
  },
];

export default function TestContainer() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    type: "MCQ",
    question: "",
    options: [],
    correctAnswer: "",
  });
  const [newTest, setNewTest] = useState({
    title: "",
    description: "",
    difficulty: "Easy",
    questions: [],
  });
  const [tests, setTests] = useState(dummyTests);
  const [candidateAnswers, setCandidateAnswers] = useState({});

  const handleAddQuestion = () => {
    if (!selectedTest) return;

    const updatedTest = {
      ...selectedTest,
      questions: [...selectedTest.questions, { ...newQuestion, id: selectedTest.questions.length + 1 }],
    };
    setSelectedTest(updatedTest);
    setNewQuestion({ type: "MCQ", question: "", options: [], correctAnswer: "" });
  };

  const handleCreateTest = () => {
    if (!newTest.title || !newTest.description) return;

    const newTestWithId = {
      ...newTest,
      id: tests.length + 1,
    };
    setTests([...tests, newTestWithId]);
    setNewTest({ title: "", description: "", difficulty: "Easy", questions: [] });
  };

  const handleAnswerChange = (questionId, answer) => {
    setCandidateAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  return (
    <div className="text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Let's Complete It</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Test List */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Available Tests</h2>
          <ul className="space-y-4">
            {tests.map((test) => (
              <li
                key={test.id}
                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer"
                onClick={() => setSelectedTest(test)}
              >
                <h3 className="text-xl font-medium">{test.title}</h3>
                <p className="text-sm text-gray-300">{test.description}</p>
                <span className="text-xs text-purple-400">{test.difficulty}</span>
              </li>
            ))}
          </ul>

          {/* Create New Test Form */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Create New Test</h4>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Test Title"
                value={newTest.title}
                onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded-lg"
              />
              <textarea
                placeholder="Test Description"
                value={newTest.description}
                onChange={(e) => setNewTest({ ...newTest, description: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded-lg"
              />
              <select
                value={newTest.difficulty}
                onChange={(e) => setNewTest({ ...newTest, difficulty: e.target.value })}
                className="w-full p-2 bg-gray-700 rounded-lg"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <button
                onClick={handleCreateTest}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Create Test
              </button>
            </div>
          </div>
        </div>

        {/* Selected Test Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Test Details</h2>
          {selectedTest ? (
            <div>
              <h3 className="text-xl font-medium">{selectedTest.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{selectedTest.description}</p>
              <p className="text-xs text-purple-400 mt-2">Difficulty: {selectedTest.difficulty}</p>

              {/* Questions List */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Questions</h4>
                <ul className="space-y-4">
                  {selectedTest.questions.map((q) => (
                    <li key={q.id} className="p-4 bg-gray-700 rounded-lg">
                      <p className="text-sm font-medium">{q.question}</p>

                      {/* MCQ: Clickable Options */}
                      {q.type === "MCQ" && (
                        <ul className="mt-2 space-y-2">
                          {q.options.map((option, index) => (
                            <li
                              key={index}
                              className={`p-2 rounded-lg cursor-pointer ${
                                candidateAnswers[q.id] === option
                                  ? "bg-purple-600"
                                  : "bg-gray-600 hover:bg-gray-500"
                              }`}
                              onClick={() => handleAnswerChange(q.id, option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Definition: Textarea for Answer */}
                      {q.type === "Definition" && (
                        <textarea
                          placeholder="Write your answer here"
                          value={candidateAnswers[q.id] || ""}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="w-full p-2 bg-gray-600 rounded-lg mt-2"
                        />
                      )}

                      {/* Fill in the Blank: Input for Answer */}
                      {q.type === "FillInBlank" && (
                        <input
                          type="text"
                          placeholder="Fill in the blank"
                          value={candidateAnswers[q.id] || ""}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="w-full p-2 bg-gray-600 rounded-lg mt-2"
                        />
                      )}

                      {/* Display Correct Answer (for testing purposes) */}
                      <p className="text-xs text-purple-400 mt-2">
                        Correct Answer: {q.correctAnswer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add New Question Form */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Add New Question</h4>
                <div className="space-y-4">
                  <select
                    value={newQuestion.type}
                    onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
                    className="w-full p-2 bg-gray-700 rounded-lg"
                  >
                    <option value="MCQ">MCQ</option>
                    <option value="Definition">Definition</option>
                    <option value="FillInBlank">Fill in the Blank</option>
                  </select>

                  <textarea
                    placeholder="Enter the question"
                    value={newQuestion.question}
                    onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                    className="w-full p-2 bg-gray-700 rounded-lg"
                  />

                  {newQuestion.type === "MCQ" && (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter an option"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && e.target.value) {
                            setNewQuestion({
                              ...newQuestion,
                              options: [...newQuestion.options, e.target.value],
                            });
                            e.target.value = "";
                          }
                        }}
                        className="w-full p-2 bg-gray-700 rounded-lg"
                      />
                      <ul className="mt-2 space-y-2">
                        {newQuestion.options.map((option, index) => (
                          <li key={index} className="text-xs text-gray-300">
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder="Correct Answer"
                    value={newQuestion.correctAnswer}
                    onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                    className="w-full p-2 bg-gray-700 rounded-lg"
                  />

                  <button
                    onClick={handleAddQuestion}
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                  >
                    Add Question
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Select a test to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}