"use client";
import { ChatMessageContent } from "@/types/chat-message";
import { Dispatch, SetStateAction, createContext } from "react";
import { ChatSettings } from "@/types/chat";
interface ChatbotUIContext {
  chatSettings: ChatSettings | null;
  chatMessages: ChatMessageContent[];
  setChatMessages: Dispatch<SetStateAction<ChatMessageContent[]>>;
  isGenerating: boolean;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;
  abortController: AbortController | null;
  setAbortController: Dispatch<SetStateAction<AbortController | null>>;
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
}
export const ChatbotUIContext = createContext<ChatbotUIContext>({
  chatMessages: [],
  setChatMessages: () => {},
  chatSettings: null,
  isGenerating: false,
  setIsGenerating: () => {},
  abortController: null,
  setAbortController: () => {},
  userInput: "",
  setUserInput: () => {},
});
