// components/CenterPanel.jsx
import React from 'react';

const CenterPanel = () => {
  return (
    <main className="flex-1 p-4 ">
      <h2 className="text-xl font-semibold mb-4">Code Editor</h2>
      <div className="border border-gray-300 rounded overflow-hidden">
        <textarea
          className="w-full h-[400px] p-4 font-mono text-sm"
          placeholder="Write your code here..."
        ></textarea>
      </div>
      <button className="bg-green-500  px-4 py-2 mt-4 rounded">Run Code</button>
    </main>
  );
};

export default CenterPanel;
