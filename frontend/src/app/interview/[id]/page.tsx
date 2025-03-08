"use client";
import Candidates from "@/components/interview/Candidates";
import Canvas from "@/components/interview/Canvas";
import CodeEditor from "@/components/interview/CodeEditor";
import EditorContainer from "@/components/interview/EditorContainer";
import Modal from "@/components/interview/Model";
import Performance from "@/components/interview/Performance";
import TestContainer from "@/components/interview/TestContainer";
import React, { useEffect, useState } from "react";
import Interview from "@/components/Interview";

import { usePathname } from "next/navigation";
function InterviewPage() {
  const [screenType, setScreenType] = useState<
    "canvas" | "editor"  | "performance" | "test"|"interview"
  >("canvas");
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(pathname,"pathname")
  return (
    <div className="flex flex-col w-full justify-center items-center px-6 pt-20 gap-2  text-white h-screen">
      <div className="flex justify-center  items-center">

        <button className={`w-[140px] h-[40px] text-sm max-sm:w-[120px]    cursor-pointer hover:bg-[#1f1f1f94] border-2 border-b-2 border-[#272727] rounded-l-md font-semibold  ${screenType==="editor"?"bg-[#1f1f1f94]":""}`} onClick={()=>setScreenType("editor")}>
          Editor
        </button>
        <button className={`w-[140px] h-[40px] text-sm max-sm:w-[120px]    cursor-pointer hover:bg-[#1f1f1f94]  border-t-2 border-b-2 border-l-[#272727]  border-t-[#272727] border-b-[#272727] font-semibold  ${screenType==="test"?"bg-[#1f1f1f94]":""}`} onClick={()=>setScreenType("test")}>
          Test
        </button>

        <button className={`w-[140px] h-[40px] text-sm max-sm:w-[120px]    cursor-pointer hover:bg-[#1f1f1f94]  border-t-2 border-b-2 border-l-[#272727]  border-t-[#272727] border-b-[#272727] font-semibold  ${screenType==="canvas"?"bg-[#1f1f1f94]":""}`} onClick={()=>setScreenType("canvas")}>
          Canvas
        </button>
        <button className={`w-[140px] h-[40px] text-sm max-sm:w-[120px] rounded-r-md cursor-pointer hover:bg-[#1f1f1f94] border-2 border-[#272727] font-semibold  ${screenType==="performance"?"bg-[#1f1f1f94]":""}`} onClick={()=>setScreenType("performance")}>
          Performance
        </button>
        <button className={`w-[140px] h-[40px] text-sm max-sm:w-[120px] rounded-r-md cursor-pointer hover:bg-[#1f1f1f94] border-2 border-[#272727] font-semibold  ${screenType==="performance"?"bg-[#1f1f1f94]":""}`} onClick={()=>setScreenType("interview")}>
          Live Interview
        </button>
      </div>

      <div className="w-full bg-[#414141] h-[1px]"></div>
      <div className=" flex flex-1 w-full bg-black overflow-y-auto ">
        {
          screenType==="canvas"?<Canvas />:screenType==="editor"?<EditorContainer />:screenType==="test"?<TestContainer/>:screenType==="interview"?<Interview/>:<Performance />
        }
        
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default InterviewPage;
