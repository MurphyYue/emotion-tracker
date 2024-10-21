import Chat from "@/components/Chat";
import { ChatState } from "@/components/utility/chat-state";

export default function Page(){
  return (
    <ChatState>
      <Chat />
    </ChatState>
  );
}