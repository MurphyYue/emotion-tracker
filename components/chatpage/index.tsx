import Chat from "@/components/chat/Chat";
import { ChatState } from "@/utility/chat-state";

export default function Page(){
  return (
    <ChatState>
      <Chat />
    </ChatState>
  );
}