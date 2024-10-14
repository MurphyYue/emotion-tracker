"use client";

import { useState } from "react";

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
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          placeholder="Describe your emotions today..."
          className="w-64 h-32 p-2 mb-4 border border-gray-300 rounded text-slate-950"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Record Emotion
        </button>
      </form>
    </div>
  );
}
