import { cn } from "@/lib/utils";
import styles from './index.module.scss'
import HomeMessages from "@/components/home-messages/messages"

export default function Home() {
  const messages = [
    {date: '2024-10-20',
      time: "18:02",
      title: "hello",
      content: "I feel so good",}
  ]
  return (
    <div className={cn("p-4 overflow-y-auto", styles.chatWrap)}>
      <HomeMessages messages={messages}/>
    </div>
  );
}