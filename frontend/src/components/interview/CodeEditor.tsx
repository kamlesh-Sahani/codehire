"use client";
import { EditorContext } from "@/context/EditorContext";
import Editor from "@monaco-editor/react";
import { useContext, useRef, useState } from "react";
import Loader from "../Loader";
const CodeEditor = () => {
    const {language,defaultCode,setCodeContent,codeContent} = useContext(EditorContext)
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
        value={codeContent}
        onChange={(value)=>setCodeContent(value)}
        onMount={editorMount}
        loading={<Loader />}
      />
    </div>
  );
};

export default CodeEditor;
