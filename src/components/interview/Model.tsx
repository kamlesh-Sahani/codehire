"use client";
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation';

const Modal = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState<string>('kamlesh haha ha ');
  const [roomId,setRoomId] = useState<string>("")
  const pathname =usePathname();
  const handleSave = () => {
    toast.success("save changes..")
    closeModal(); 
  };

  useEffect(()=>{
    const id = pathname.split("/").at(-1)
    setRoomId(id)
  },[])
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="rounded-lg p-6 w-96 bg-black">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Interview Details</h3>
          <button onClick={closeModal}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Username input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm   bg-black text-white"
              placeholder="Enter username"
            />
          </div>

          {/* Interview ID input */}
          <div>
            <label htmlFor="interviewId" className="block text-sm font-medium text-white">Room ID</label>
            <input
              type="text"
              id="interviewId"
              value={roomId}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm   bg-black text-white"
              placeholder="Enter interview ID"
              readOnly
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="w-full py-2 bg-mainColor/70 text-white rounded-md hover:bg-mainColor/50 focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
