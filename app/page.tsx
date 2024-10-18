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
    <div className="bg-gray-100 w-full h-full p-4 flex flex-col">
      <GlobalState>
        <Chat />
      </GlobalState>
    </div>
  );
}
