import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

import {v4 as uuid } from  "uuid"
import api from "@/lib/api";
import toast from "react-hot-toast"

const InterviewInviteDialog = ({ isOpen, onClose, onSend }) => {
  const [emailList, setEmailList] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("online");
  const [message, setMessage] = useState(
    "Dear candidate, you are invited for an interview..."
  );
  const [subject,setSubject] = useState<string>("");
  const [title,setTitile] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);


  const handleSchedule = async() => {
    try{
      setLoading(true);
      const emails = emailList.split(",").map((email) => email.trim());
      const roomId = uuid();
      const newSchedule = {
        title,
        date,
        time,
        mode,
        mailMessage:message,
        intervieweeEmails:emails,
        mailSubject:subject,
        roomId
      }


      const {data} = await api.post("/interview/new",newSchedule);
      console.log(data,"res")

      if(data.success){
        toast.success(data.message || "schedule is created");
        onClose();
      }else{
        toast.error(data.message || "failed to create")
      }
    }catch(error:any){
      console.log(error,"error")
      toast.error(error?.response?.data?.message || "failed to create")
    }finally{
      setLoading(false);
    }
   
    // onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 rounded-xl p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Send Interview Invitation
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Email Input */}
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Frontend Developer"
              value={title}
              onChange={(e) => setTitile(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label>Email Addresses (comma separated)</Label>
            <Input
              type="text"
              placeholder="Enter candidate emails"
              value={emailList}
              onChange={(e) => setEmailList(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label>Email Subject</Label>
            <Input
              type="text"
              placeholder="You are selected to round 2 (machine coding round)"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-2">
            <Label>Interview Date</Label>
            <DatePicker
              selected={date}
              onChange={(selectedDate: Date | null) => {
                if (selectedDate) setDate(selectedDate);
              }}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={50}
              className="bg-gray-800 border-gray-600 text-white w-full px-3 py-2 rounded-md"
            />
          </div>

          {/* Time Picker */}
          <div>
            <Label>Interview Time</Label>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>

          {/* Mode Selection */}
          <div>
            <Label>Mode</Label>
            <Select value={mode} onValueChange={(value) => setMode(value)}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Message */}
          <div>
            <Label>Custom Message</Label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
        </div>

        {/* Buttons */}
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-600 text-gray-300"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSchedule}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {
              loading?"sending...":"Send Invitation"
            }
           
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewInviteDialog;
