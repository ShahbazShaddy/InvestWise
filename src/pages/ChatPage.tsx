import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { toast } from 'sonner'
import { 
  ArrowLeft, 
  Send, 
  Bot, 
  User, 
  Coins,
  Loader2,
  Sparkles,
  TrendingUp,
  PiggyBank,
  Calculator
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const ChatPage = () => {
  const navigate = useNavigate()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Welcome to InvestWize! 🪙 I'm your AI Investment Coach, here to help you master your finances. Whether you need help with budgeting, expense tracking, investment strategies, or building wealth, I'm here to guide you every step of the way.\n\nWhat financial challenge can I help you solve today? I can assist with:\n• Smart budgeting & expense analysis\n• Investment recommendations (ETFs, stocks, bonds)\n• Savings strategies & goal planning\n• Debt management & optimization\n• Financial planning for your future",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  console.log('ChatPage component rendered with dark theme')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getGroqResponse = async (userMessage: string): Promise<string> => {
    console.log('Getting Groq response for:', userMessage)
    
    try {
      const apiKey = (import.meta as any).env?.VITE_GROQ_API_KEY
      
      if (!apiKey) {
        console.error('GROQ API key is missing from environment variables')
        throw new Error('API key configuration error')
      }
      const prompt = `You are InvestWize, an expert AI Investment Coach and Personal Finance advisor with a friendly, professional personality. Use emojis appropriately to make responses engaging.

Your expertise includes:
- Advanced budget planning and expense optimization
- Investment strategies across all asset classes (ETFs, mutual funds, bonds, stocks, crypto, real estate)
- Comprehensive financial planning and wealth building
- Risk assessment and portfolio diversification
- Tax-efficient investing strategies
- Emergency fund and retirement planning
- Debt consolidation and management
- Financial goal setting and achievement tracking

User Question: ${userMessage}

Please provide helpful, actionable financial advice that is:
- Personalized and practical
- Easy to understand with clear steps
- Backed by financial best practices
- Encouraging and motivational
- Includes specific recommendations when appropriate

Keep responses conversational, engaging, and informative. Always remind users that this is educational content and they should consult with licensed financial advisors for major financial decisions.

Response:`

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 1200
        })
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()
      console.log('Groq API response:', data)
      
      return data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request right now. Please try again."
      
    } catch (error) {
      console.error('Error calling Groq API:', error)
      
      // Enhanced fallback responses
      const lowerMessage = userMessage.toLowerCase()
      
      if (lowerMessage.includes('budget') || lowerMessage.includes('spending')) {
        return "🎯 Great question about budgeting! Here's my proven approach:\n\n💰 **The 50/30/20 Rule Plus**:\n• 50% for needs (rent, utilities, groceries)\n• 30% for wants (entertainment, dining)\n• 20% for savings and debt repayment\n\n📊 **Smart Budgeting Tips**:\n1. Track expenses for 30 days to see patterns\n2. Use the envelope method for discretionary spending\n3. Automate savings before you can spend it\n4. Review and adjust monthly\n\n🔍 Which category would you like to dive deeper into? I can help you optimize any area of your budget!"
      } else if (lowerMessage.includes('invest') || lowerMessage.includes('portfolio')) {
        return "📈 Excellent! Let's build your investment strategy:\n\n🏗️ **Foundation First**:\n1. Emergency fund (3-6 months expenses) ✅\n2. Pay off high-interest debt (>7% APR)\n3. Max employer 401k match if available\n\n💎 **Investment Hierarchy**:\n• **Conservative**: Index funds (VTI, VTIAX)\n• **Moderate**: 70% stocks, 30% bonds\n• **Aggressive**: Growth stocks, sector ETFs\n\n⏰ **Time Horizon Matters**:\n• 5+ years: Stock-heavy portfolio\n• 2-5 years: Balanced approach\n• <2 years: High-yield savings/CDs\n\nWhat's your investment timeline and risk tolerance? Let's create a personalized strategy! 🚀"
      } else if (lowerMessage.includes('save') || lowerMessage.includes('savings')) {
        return "💰 Let's supercharge your savings strategy!\n\n🎯 **High-Impact Savings Methods**:\n1. **Automate Everything**: Set up automatic transfers on payday\n2. **Pay Yourself First**: Save before spending\n3. **The 1% Challenge**: Increase savings rate by 1% monthly\n4. **Round-Up Apps**: Spare change adds up fast\n\n🏆 **Savings Goals Framework**:\n• **Emergency Fund**: Start with $1,000, build to 6 months\n• **Short-term**: Vacation, car, home improvements\n• **Long-term**: House down payment, retirement\n\n💡 **Pro Tip**: Use high-yield savings accounts (currently 4-5% APY) for emergency funds.\n\nWhat's your current savings goal? Let's create a roadmap to achieve it! 🎯"
      } else if (lowerMessage.includes('debt') || lowerMessage.includes('loan')) {
        return "⚡ Let's tackle that debt strategically!\n\n🎯 **Debt Elimination Strategies**:\n\n**Avalanche Method** (Best for math):\n• Pay minimums on all debts\n• Attack highest interest rate first\n• Saves most money long-term\n\n**Snowball Method** (Best for motivation):\n• Pay minimums on all debts\n• Attack smallest balance first\n• Builds momentum and confidence\n\n💳 **Credit Card Optimization**:\n1. Balance transfer to 0% APR card\n2. Negotiate lower rates with current cards\n3. Consider debt consolidation loan\n\n📊 What types of debt are you dealing with? Share the balances and interest rates, and I'll create a personalized payoff plan! 💪"
      } else {
        return "🪙 Welcome to InvestWize! I'm here to help transform your financial future.\n\n🎯 **I can help you with**:\n• 📊 Smart budgeting and expense tracking\n• 📈 Investment strategies and portfolio building\n• 💰 Savings optimization and goal planning\n• ⚡ Debt management and elimination\n• 🏠 Financial planning for major purchases\n• 🎓 Financial education and literacy\n\n💡 **Popular questions I answer**:\n\"How should I start investing with $1000?\"\n\"What's the best budgeting method for beginners?\"\n\"How can I save for a house down payment?\"\n\"Should I pay off debt or invest first?\"\n\nWhat financial goal are you working towards? Let's create a plan together! 🚀\n\n*Remember: This is educational content. Always consult licensed financial advisors for major financial decisions.*"
      }
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    console.log('Sending message:', inputMessage)
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const aiResponse = await getGroqResponse(userMessage.content)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      toast.error('Failed to get response. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    { icon: PiggyBank, text: "How to start budgeting?", emoji: "💰" },
    { icon: TrendingUp, text: "Best investment for beginners?", emoji: "📈" },
    { icon: Calculator, text: "Pay off debt or invest?", emoji: "⚡" },
    { icon: Sparkles, text: "Build emergency fund?", emoji: "🛡️" }
  ]

  return (
    <div className="min-h-screen dark-gradient text-white">
      {/* Header */}
      <header className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 px-4 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center glow-effect">
                <Coins className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">InvestWize Coach</h1>
                <p className="text-sm text-gray-400">AI Investment Assistant</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Online</span>
          </div>
        </div>
      </header>

      {/* Chat Interface */}
      <div className="container mx-auto max-w-5xl h-[calc(100vh-80px)] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-4xl ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user' 
                    ? 'gold-gradient' 
                    : 'bg-gray-700 border border-yellow-400/30'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-black" />
                  ) : (
                    <Bot className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                
                <Card className={`${
                  message.role === 'user'
                    ? 'bg-yellow-500/10 border-yellow-400/30 text-white'
                    : 'bg-gray-800/50 border-gray-700'
                }`}>
                  <CardContent className="p-4">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <p className={`text-xs mt-3 ${
                      message.role === 'user' ? 'text-yellow-300' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-4xl">
                <div className="w-10 h-10 rounded-xl bg-gray-700 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-yellow-400" />
                </div>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin text-yellow-400" />
                      <p className="text-sm text-gray-300">Analyzing your financial question...</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-6 py-4">
            <div className="text-center mb-4">
              <p className="text-gray-400 text-sm">Quick questions to get started:</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputMessage(question.text)}
                  className="text-left justify-start border-gray-700 hover:border-yellow-400/50 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 p-3 h-auto"
                >
                  <span className="mr-2 text-base">{question.emoji}</span>
                  <span className="text-xs">{question.text}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6">
          <div className="flex space-x-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about budgeting, investing, saving, or any financial question..."
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="gold-gradient text-black hover:opacity-90 px-6 glow-effect"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3 text-center">
            💡 This is educational content. Consult with licensed financial advisors for major financial decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatPage