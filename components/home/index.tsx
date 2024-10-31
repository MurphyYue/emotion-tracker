import { cn } from "@/lib/utils";
import styles from './index.module.scss'
import HomeMessages from "@/components/home-messages/messages"
import { HomeMessage } from "@/types/home-message";
import { useState } from "react";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import AddRecordModal from "@/components/add-record-modal";

export default function Home() {
  const fetchData = async () => {
    // this is a get request to the backend to get the messages
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/record`);
    const data = await response.json();
    return data;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState<HomeMessage[]>([]);
  useEffect(() => {
    fetchData().then((data: HomeMessage[]) => {
      setMessages(data);
    });
  }, []);
  return (
    <div className={cn("p-4 overflow-y-auto relative", styles.chatWrap)}>
      <HomeMessages messages={messages}/>
      <button
        className="fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus className="h-6 w-6" />
      </button>

      <AddRecordModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}