import { cn } from "@/lib/utils";
import styles from './index.module.scss'
import HomeMessages from "@/components/home-messages/messages"
import { HomeMessage } from "@/types/home-message";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    // this is a get request to the backend to get the messages
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/record`);
    const data = await response.json();
    return data;
  };
  const [messages, setMessages] = useState<HomeMessage[]>([]);
  useEffect(() => {
    fetchData().then((data: HomeMessage[]) => {
      setMessages(data);
    });
  }, []);
  return (
    <div className={cn("p-4 overflow-y-auto", styles.chatWrap)}>
      <HomeMessages messages={messages}/>
    </div>
  );
}