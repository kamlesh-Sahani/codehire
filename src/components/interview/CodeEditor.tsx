"use client";
import { EditorContext } from "@/context/EditorContext";
import Editor from "@monaco-editor/react";
import { useContext, useRef, useState } from "react";

const CodeEditor = () => {
    const {language,setLanguage,defaultCode,setDefaultCode} = useContext(EditorContext)
    const [codeData,setCodeData] = useState<string|undefined>("");
    const editorRef = useRef(null);

    const editorMount = (editor:any)=>{
        editorRef.current = editor;
        editor.focus();
    }
  return (
    <div className="w-full h-full ">
      <Editor
        theme="vs-dark"
        height={"100%"}
        width={"100%"}
        defaultLanguage={language}
        defaultValue={defaultCode}
        value={codeData}
        onChange={(value)=>setCodeData(value)}
        onMount={editorMount}
      />
    </div>
  );
};

export default CodeEditor;
