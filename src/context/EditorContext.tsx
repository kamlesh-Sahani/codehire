import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface EditorContextType {
  language: string;
  defaultCode: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  setDefaultCode: Dispatch<SetStateAction<string>>;
  sideBar:boolean;
  setSideBar:Dispatch<SetStateAction<boolean>>;
}
export const EditorContext = createContext<EditorContextType>({
  language: "javascript",
  defaultCode: "console.log('hello world')",
  setDefaultCode: () => {},
  setLanguage: () => {},
  setSideBar:()=>{},
  sideBar:true
});

const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("javascript");
  const [defaultCode, setDefaultCode] = useState<string>(
    "console.log('hello world')"
  );
  const [sideBar,setSideBar] = useState<boolean>(true);
  return (
    <EditorContext.Provider
      value={{ language, defaultCode, setLanguage, setDefaultCode,sideBar,setSideBar }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;