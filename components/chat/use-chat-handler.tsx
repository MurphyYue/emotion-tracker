"use client"
import { useContext } from "react";
import { ChatbotUIContext } from "@/context";
import {
  validateChatSettings,
  createTempMessages,
  handleHostedChat,
} from "./chat-helpers";
import { ChatMessageContent } from "@/types/chat-message";
import { ChatPayload } from "@/types/chat";

export const useChatHandler = () => {
  const {
    setChatMessages,
    chatSettings,
    setIsGenerating,
    abortController,
    setAbortController,
    setUserInput,
  } = useContext(ChatbotUIContext);
  const handleStopMessage = () => {
    if (abortController) {
      abortController.abort();
      setIsGenerating(false);
    }
  };
  const handleSendMessage = async (
    messageContent: string,
    chatMessages: ChatMessageContent[],
    isRegeneration: boolean
  ) => {
    const startInput = messageContent;
    try {
      setUserInput("");
      setIsGenerating(true);
      const newAbortController = new AbortController();
      setAbortController(newAbortController);
      if (!isRegeneration) {
        validateChatSettings(messageContent);
      }
      const newMessageContent = messageContent;
      const { tempUserChatMessage, tempAssistantChatMessage } =
        createTempMessages(
          newMessageContent,
          chatMessages,
          isRegeneration, // isRegeneration defalut value
          setChatMessages
        );

      let payload: ChatPayload;
      if (chatSettings !== null) {
        payload = {
          chatSettings: chatSettings,
          chatMessages: isRegeneration
            ? [...chatMessages]
            : [...chatMessages, tempUserChatMessage],
        };
      } else {
        return;
      }
      console.log("payload", payload);
      await handleHostedChat(
        payload,
        tempAssistantChatMessage,
        isRegeneration,
        newAbortController,
        setIsGenerating,
        setChatMessages
      );
      setIsGenerating(false);
    } catch (error) {
      console.error(error);
      setIsGenerating(false);
      setUserInput(startInput);
    }
  };
  return {
    handleSendMessage,
    handleStopMessage,
  };
};
