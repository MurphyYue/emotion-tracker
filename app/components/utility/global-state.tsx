import { FC, useState } from "react";
import { ChatMessageContent } from "@/types/chat-message";
import { ChatSettings } from "@/types/chat";
import { ChatbotUIContext } from "@/context";

interface GlobalStateProps {
  children: React.ReactNode;
}
const prompt = "You are a psychologist who can analyze users 'emotions and give assessments of current emotions and suggestions for stabilizing them.";

export const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessageContent[]>([]);
  const [chatSettings] = useState<ChatSettings>({
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
        chatMessages,
        setChatMessages,
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
