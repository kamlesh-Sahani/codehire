"use client";
import { LogOut, Send, WrapText } from "lucide-react";
import { FormEvent, useState } from "react";

const LeftPanel = () => {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  const [sidebarWrap, setSideBarWrap] = useState(true);
  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() === "") return;
    setMessages((prev:any) => ([...prev, message]))
    setMessage("")
  }
  return (
    <div className={`flex flex-col h-[90vh] overflow-y-auto ${sidebarWrap?"w-[30%]":"w-[5%] bg-[#111111]"} items-center pt-10`}>

      <div className="flex w-full justify-between items-center">
        {
          sidebarWrap && <h2 className="text-lg font-bold">Chat Panel</h2>
        }
        
        <button onClick={() => setSideBarWrap((prev) => !prev)}><WrapText /></button>
      </div>
      {
        sidebarWrap && <>
          <div className="h-[30%]  text-white p-4 flex flex-col gap-3 overflow-y-auto">

            {/* Interviewer Information */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">I</span>
              </div>

              <div>
                <p className="font-semibold">Interviewer</p>
                <p className="text-sm text-gray-400">Technical Round - Session 1</p>
              </div>
            </div>

            <div className="border-t border-gray-600 my-2"></div>
            <div className="flex items-center gap-3 w-full">
              {/* Avatar */}
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">A</span>
              </div>

              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="font-semibold">Attendee: John Doe</p>
                  <p className="text-sm text-gray-300">Role: Frontend Developer</p>
                </div>
                <button className="bg-[#fff] text-black flex items-center gap-2 px-3 py-1 rounded-md hover:bg-[#2de069] transition duration-200">
                  <LogOut size={16} className="text-black font-bold" />
                </button>
              </div>
            </div>

          </div>


          <div className="flex flex-col gap-3 h-[70%]">
            <div className="flex flex-col gap-5  h-[90%] overflow-y-auto ">
              {
                [...messages].reverse().map((m, i) => (
                  <span key={i} className=" font-medium text-[#777777] text-[15px]  bg-[#202020] rounded-md p-2 flex gap-2 "><p className="font-bold text-[12px] text-[#383838ee]">{i + 1}</p>{m}</span>
                ))
              }
            </div>
            <form className="h-[50px] w-full flex gap-2 justify-center items-center " onSubmit={submitHandler}>
              <input type="text" className="w-[80%] bg-transparent border-2  outline-none rounded-md pl-5  border-[#474747] h-full  cursor-pointer" value={message} onChange={(e) => setMessage(e.target.value)} />
              <button className="bg-white text-black rounded-md rounded-tr-2Xl w-[130px] font-medium h-[40px] flex gap-1 justify-center items-center cursor-pointer"><Send /><p>SEND</p></button>
            </form>
          </div>
        </>
      }

    </div>
  );
};

export default LeftPanel;
