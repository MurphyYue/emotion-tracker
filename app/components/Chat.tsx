import React, { useContext } from 'react';
import ChatInput from './chat/chat-input'
import { ChatMessages } from './chat/chat-messages'
import { ChatbotUIContext } from "@/context";
import { useScroll } from './chat/use-scroll'

const Chat: React.FC = () => {
  const { chatMessages } = useContext(ChatbotUIContext);
  const { messagesEndRef } = useScroll();
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto">
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