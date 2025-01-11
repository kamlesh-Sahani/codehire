"use client";
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import { useContext } from "react";
import { EditorContext } from "@/context/EditorContext";

const EditorContainer = () => {
  const { language, setLanguage} = useContext(EditorContext);
  const [langaugeBox, setLanguageBox] = useState<boolean>(false);
  const languageHandler = (lan: string) => {
    setLanguage(lan);
    setLanguageBox(false);
  };
  return (
    <main className={` p-4 w-full h-full grid grid-cols-3 bg-[#1E1E1E] rounded`}>
      <div className="flex flex-col gap-4  col-span-2 border-r-2 border-[#424242] pr-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center relative">
            <p className="font-medium text-white">Language :</p>
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

          <button className="bg-mainColor text-black font-bold  px-4 py-2  rounded cursor-pointer">
            Run Code
          </button>
        </div>
        <div className=" rounded overflow-hidden h-[90%] w-full ">
          {/* <textarea
            className="w-full h-full p-4 font-mono text-sm bg-black"
            placeholder="Write your code here..."
          ></textarea> */}

          <CodeEditor />
        </div>
      </div>

      <div className="  h-full p-3 w-full flex flex-col gap-2">
    
      <h1 className="font-semibold text-white text-right">Output</h1>
      <div className=" flex-1"></div>
      </div>
    </main>
  );
};

export default EditorContainer;
