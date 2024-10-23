"use client"
import React, { useContext } from 'react';
import ChatInput from './chat-input'
import { ChatMessages } from './chat-messages'
import { ChatbotUIContext } from "@/context";
import { useScroll } from './use-scroll'
import styles from './chat.module.scss'
import { cn } from "@/lib/utils";

const Chat: React.FC = () => {
  const { chatMessages } = useContext(ChatbotUIContext);
  const { messagesEndRef } = useScroll();
  return (
    <div className={cn("flex flex-col p-4", styles.chatWrap)}>
      <div className="overflow-y-auto h-full">
        {/* if no message, show the welcome text */}
        {chatMessages.length === 0 && (
          <div className="w-full h-full flex justify-center items-center">
            <div className='text-center text-lg text-gray-400'>describe your mood here</div>
          </div>
        )}
        <ChatMessages />
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex">
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;