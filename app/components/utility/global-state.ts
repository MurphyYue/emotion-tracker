import { FC, useState } from "react";
import { ChatMessageContent } from "@/types/chat-message";
import { ChatSettings } from "@/types/chat";
import { ChatbotUIContext } from "@/context";

interface GlobalStateProps {
  children: React.ReactNode;
}
const prompt = "";

export const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessageContent[]>([]);
  const [chatSettings, setChatSettings] = useState<ChatSettings>({
    model: "gpt-3.5-turbo",
    prompt: `${prompt}`,
    temperature: 0.5,
    contextLength: 4000,
    embeddingsProvider: "openai",
  });
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  return (
    <ChatbotUIContext.Provider
      value={{
        chatSettings,
        setChatSettings,
        chatMessages,
        setChatMessages,
        runningCode,
        setRunningCode,
        isGenerating,
        setIsGenerating,
        abortController,
        setAbortController,
        userInput,
        setUserInput,
      }}
    >
      {children}
    </ChatbotUIContext.Provider>
  );
};
