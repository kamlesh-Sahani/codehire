import React from "react";
import { Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full flex mt-32 justify-around items-center bg-[#030303] text-white py-8">
      <div className="flex flex-col gap-2">
        <button className="text-lg font-semibold bg-mainColor w-[140px] h-[40px] rounded-md">
          HireFlow AI
        </button>
        <p>&copy; 2025 HireFlow AI. All rights reserved.</p>
      </div>

      <div className="flex justify-center items-center space-x-6">
        <a
          href="https://www.linkedin.com/in/kamlesh-sahani"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 flex  items-center justify-center "
        >
          <span className="text-mainColor hover:text-mainColor/40 flex justify-center items-center gap-1 "> <Linkedin /> LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
