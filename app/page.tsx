"use client";

import { GlobalState } from "@/components/utility/global-state"
import Chat from "@/components/Chat"


export default function Home() {

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <GlobalState>
        <Chat />
      </GlobalState>
    </div>
  );
}
