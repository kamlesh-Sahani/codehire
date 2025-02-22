import { useRef, useState } from "react";

export default function WebRTCComponent() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);

  const startCall = async () => {
    try {
      // Request camera and microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const configuration = {
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      };
      peerConnectionRef.current = new RTCPeerConnection(configuration);

      stream.getTracks().forEach((track) => {
        peerConnectionRef.current?.addTrack(track, stream);
      });

      peerConnectionRef.current.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      const offer = await peerConnectionRef.current.createOffer();
      await peerConnectionRef.current.setLocalDescription(offer);

      console.log("Offer created:", offer);
      setIsCallActive(true);
      setIsVideoActive(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const endCall = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }

    // Stop all media tracks
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }

    setIsCallActive(false);
    setIsVideoActive(false);
    setIsMicMuted(false);
  };

  const toggleMic = () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMicMuted((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col w-full items-center space-y-4 p-4 bg-gray-900 text-white h-screen">
      <h1 className="text-2xl font-bold">WebRTC Video Chat</h1>
      <div className="relative w-full flex justify-center">
        <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-auto bg-black rounded-lg" />
        <video ref={localVideoRef} autoPlay playsInline className="absolute bottom-4 right-4 w-64 h-64 bg-black rounded-lg border-2 border-white shadow-lg" />
      </div>
      <div className="space-x-4 mb-4">
        {!isCallActive ? (
          <button onClick={startCall} className="px-4 py-2 bg-green-500 rounded-lg">
            Start Call
          </button>
        ) : (
          <button onClick={endCall} className="px-4 py-2 bg-red-500 rounded-lg">
            End Call
          </button>
        )}
        {isCallActive && (
          <button onClick={toggleMic} className="px-4 py-2 bg-blue-500 rounded-lg">
            {isMicMuted ? "Unmute Mic" : "Mute Mic"}
          </button>
        )}
      </div>
    </div>
  );
}
