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
  codeContent:string;
  setCodeContent:Dispatch<SetStateAction<string>>;

}
export const EditorContext = createContext<EditorContextType>({
  language: "javascript",
  defaultCode: "console.log('hello world')",
  setDefaultCode: () => {},
  setLanguage: () => {},
  codeContent:"",
  setCodeContent:()=>{}
});

const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("javascript");
  const [defaultCode, setDefaultCode] = useState<string>(
    "console.log('hello world')"
  );
  const [codeContent,setCodeContent] = useState<string>("");
  return (
    <EditorContext.Provider
      value={{ language, defaultCode, setLanguage, setDefaultCode,codeContent,setCodeContent }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;