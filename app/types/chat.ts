import { ChatMessageContent } from "./chat-message"

export interface ChatPayload {
  chatMessages: ChatMessageContent[]
}

export interface ChatSettings {
  model: string
  prompt: string
  temperature: number
  contextLength: number
  embeddingsProvider: "openai" | "local"
}