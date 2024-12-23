"use client";
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import { useContext } from "react";
import { EditorContext } from "@/context/EditorContext";

const CenterPanel = () => {
  const { language, setLanguage,sideBar } = useContext(EditorContext);
  const [langaugeBox, setLanguageBox] = useState<boolean>(false);

  const languageHandler = (lan: string) => {
    setLanguage(lan);
    setLanguageBox(false);
  };
  return (
    <main className={` p-4 ${sideBar?"w-[70%]" :"w-full"}`}>
      <div className="h-[60%] flex flex-col gap-4     ">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center relative">
            <p className="font-medium text-[#3b3b3b]">Language :</p>
            <button
              className="py-2 px-6 bg-[#2b2b2b] rounded-md font-mono"
              onClick={() => setLanguageBox((prev) => !prev)}
            >
              {language}
            </button>

            {langaugeBox && (
              <div className="flex flex-col gap-3 absolute bg-[#0D0c16] py-5 rounded-md  shadow-lg items-center justify-center top-10 z-10 w-[200px]">
                <button
                  className="py-2 px-6 w-full text-start text-[#494949] hover:bg-[#292929] hover:text-white font-mono capitalize"
                  onClick={() => languageHandler("javascript")}
                >
                  Javascript
                </button>
                <button
                  className="py-2 px-6 w-full text-start text-[#494949] hover:bg-[#292929] hover:text-white font-mono capitalize"
                  onClick={() => languageHandler("PHP")}
                >
                  PHP
                </button>
                <button
                  className="py-2 px-6 w-full text-start text-[#494949] hover:bg-[#292929] hover:text-white font-mono capitalize"
                  onClick={() => languageHandler("C++")}
                >
                  C++
                </button>
                <button
                  className="py-2 px-6 w-full text-start text-[#494949] hover:bg-[#292929] hover:text-white font-mono capitalize"
                  onClick={() => languageHandler("python")}
                >
                  Python
                </button>
              </div>
            )}
          </div>

          <button className="bg-white text-black font-bold  px-4 py-2  rounded">
            Run Code
          </button>
        </div>
        <div className="border border-gray-300 rounded overflow-hidden h-[90%] w-full">
          {/* <textarea
            className="w-full h-full p-4 font-mono text-sm bg-black"
            placeholder="Write your code here..."
          ></textarea> */}

          <CodeEditor />
        </div>
      </div>

      <div className=" flex  h-[40%] p-3 w-full">
        <div className="flex flex-col gap-3 w-[50%]">
          <h1 className="font-semibold text-[#4d4d4d]">Output</h1>
          <div className="h-full font-mono"> true </div>
        </div>

        <div className="flex flex-col gap-3 w-[50%]">
          <h1 className="font-semibold text-[#4d4d4d]">Performance</h1>
          <div className="h-full font-mono"> true </div>
        </div>
      </div>
    </main>
  );
};

export default CenterPanel;
