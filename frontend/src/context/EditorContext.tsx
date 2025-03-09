import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { SocketContext } from "./socketContext";
import { Socket } from "node:dgram";

interface EditorContextType {
  language: string;
  defaultCode: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  setDefaultCode: Dispatch<SetStateAction<string>>;
  codeContent: string;
  setCodeContent: Dispatch<SetStateAction<string>>;
}
export const EditorContext = createContext<EditorContextType>({
  language: "javascript",
  defaultCode: "console.log('hello world')",
  setDefaultCode: () => {},
  setLanguage: () => {},
  codeContent: "",
  setCodeContent: () => {},
});

const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("javascript");
  const [defaultCode, setDefaultCode] = useState<string>(
    "console.log('hello world')"
  );
  const { socketRef, socketRoomId } = useContext(SocketContext);
  const [codeContent, setCodeContent] = useState<string>("");


  useEffect(() => {
    const socket = socketRef?.current;
    if (!socket) return;

    socket.emit("joinInterview", socketRoomId);

    const handleLoadCode = (code: string) => {
      console.log("[LOAD CODE] Received:", code);
      setCodeContent((prev) => (prev !== code ? code : prev));
    };

    const handleCodeUpdate = (code: string) => {
      console.count(code)
      console.log("[CODE UPDATE] Received:", code);
      setCodeContent((prev) => (prev !== code ? code : prev));
    };

    socket.on("loadCode", handleLoadCode);
    socket.on("codeUpdate", handleCodeUpdate);

    return () => {
      socket.off("loadCode", handleLoadCode);
      socket.off("codeUpdate", handleCodeUpdate);
    };
  }, [socketRoomId]);




  useEffect(() => {
    const socket = socketRef?.current;

    console.count("kamlesh count");
    if (socket && codeContent !== defaultCode) {
        socket.emit("changeCode", {
            roomId: socketRoomId,
            code: codeContent,
        });
    }
}, [codeContent, socketRoomId, defaultCode]);

  return (
    <EditorContext.Provider
      value={{
        language,
        defaultCode,
        setLanguage,
        setDefaultCode,
        codeContent,
        setCodeContent,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
