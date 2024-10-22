"use client";
import { ChatbotUIContext } from "@/context";
import { FC, useContext } from "react";
import Message from "../messages/message";


export const ChatMessages: FC = ({}) => {
  const { chatMessages } = useContext(ChatbotUIContext);
  return chatMessages
    .sort((a, b) => a.message.sequence_number - b.message.sequence_number)
    .map((chatMessage, index, array) => {
      return (
        <Message
          key={chatMessage.message.sequence_number}
          message={chatMessage.message}
          isLast={index === array.length - 1}
        />
      );
    });
};
