import { useState, useCallback } from 'react'

export interface ChatMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export interface BedrockChatResponse {
  success: boolean
  message: string
  error?: string
}

export const useBedrockChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addMessage = useCallback((content: string, role: 'user' | 'assistant') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    return newMessage
  }, [])

  const sendMessage = useCallback(async (content: string, courseContext?: string) => {
    if (!content.trim()) return

    setLoading(true)
    setError(null)

    // Add user message immediately
    addMessage(content, 'user')

    try {
      // TODO: Replace with actual FastAPI endpoint
      const response = await fetch('/api/bedrock/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          context: courseContext || 'bedrock-rag-course',
          history: messages.slice(-5) // Send last 5 messages for context
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: BedrockChatResponse = await response.json()

      if (data.success) {
        addMessage(data.message, 'assistant')
      } else {
        throw new Error(data.error || 'Unknown error occurred')
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message'
      setError(errorMessage)
      
      // Add error message as assistant response
      addMessage(
        `Lo siento, hubo un error al procesar tu mensaje: ${errorMessage}. Por favor, intenta nuevamente.`,
        'assistant'
      )
    } finally {
      setLoading(false)
    }
  }, [messages, addMessage])

  const clearChat = useCallback(() => {
    setMessages([])
    setError(null)
  }, [])

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearChat
  }
}