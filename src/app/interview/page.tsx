"use client";
import React from 'react';
import LeftPanel from '@/components/interview/LeftPanel';
import CenterPanel from '@/components/interview/CenterPanel';
function InterviewPage() {
  return (
    <div className="flex flex-col w-full px-6">
      <div className='flex w-[100%] h-full '>
      <LeftPanel />
      <CenterPanel />
      </div>
   
    </div>
  );
}

export default InterviewPage;
