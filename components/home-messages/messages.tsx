import React from "react";
import { HomeMessage } from "@/types/home-message"
import Message from './message'
const Messages: React.FC<{messages: HomeMessage[]}> = ({messages}) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {messages.map(message => (
        <Message message={message}/>
      ))}
    </ol>
  );
};

export default Messages;
