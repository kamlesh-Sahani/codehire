// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">CodeHire Interview</h1>
      <nav className="flex space-x-4">
        <button className="px-3 py-2 bg-blue-600 rounded">Language Selector</button>
        <button className="px-3 py-2 bg-green-600 rounded">Interview Summary</button>
      </nav>
    </header>
  );
};

export default Header;
