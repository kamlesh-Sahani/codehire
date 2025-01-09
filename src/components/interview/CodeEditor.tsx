"use client";
import { EditorContext } from "@/context/EditorContext";
import Editor, { Monaco } from "@monaco-editor/react";
import { useContext, useRef, useState } from "react";

const CodeEditor = () => {
    const {language,defaultCode} = useContext(EditorContext)
    const [codeData,setCodeData] = useState<string|undefined>("");
    const editorRef = useRef(null);

    const editorMount = (editor:any, monaco: Monaco)=>{
        editorRef.current = editor;
        editor.focus();
    }
    console.log("monaco editor")
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
        loading={<h1>Loading................</h1>}
      />
    </div>
  );
};

export default CodeEditor;
