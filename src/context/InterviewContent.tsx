import React, { Dispatch, SetStateAction, useState } from 'react';
import { createContext } from 'react';

interface InterviewContextType {
users:Array<string>;
setUsers:Dispatch<SetStateAction<string[]>>
}

const InterviewContext = createContext<InterviewContextType>({
users:[],
setUsers:()=>{}
});
const interviewContentProvider = ({children}:{children:React.ReactNode}) => {
    const [users,setUsers] = useState([])
  return (
    <InterviewContext.Provider value={{users,setUsers}}>
      {children}
    </InterviewContext.Provider>
  )
}

export default interviewContentProvider
