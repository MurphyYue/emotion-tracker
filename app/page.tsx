"use client";

import { useState } from "react";
import { GlobalState } from "@/components/utility/global-state"
import Chat from "@/components/Chat"


export default function Home() {
  const [emotion, setEmotion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recorded emotion:", emotion);
    // You can add further logic here to handle the recorded emotion
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full h-full p-4">
      <h1 className="text-3xl font-bold mb-4">Daily Emotion Recorder</h1>
      <GlobalState>
      <Chat />
    </GlobalState>
    </div>
  );
}
