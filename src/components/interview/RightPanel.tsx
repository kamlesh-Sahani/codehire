// components/RightPanel.jsx
import React from 'react';

const RightPanel = () => {
  return (
    <aside className="w-1/4 p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Tools & Insights</h2>
      <ul className="space-y-3">
        <li className="p-3 rounded">Performance Metrics</li>
        <li className="p-3 rounded">AI Suggestions</li>
        <li className="p-3 rounded">Variable Naming Feedback</li>
      </ul>
    </aside>
  );
};

export default RightPanel;
