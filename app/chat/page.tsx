import Chat from "@/components/Chat";
import { GlobalState } from "@/components/utility/global-state";

export default function Page(){
  return (
    <GlobalState>
      <Chat />
    </GlobalState>
  );
}