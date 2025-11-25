import React, { useState, useRef, useEffect } from 'react';
import './AIChat.css';

function AIChat({ hospitalId, activeTab }) {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      text: 'Hello! I\'m your AI assistant for hospital surge management. I can help you with inventory, staffing, beds, and procurement. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const quickCommands = [
    { label: '📊 Check Status', command: 'Check inventory status' },
    { label: '⚠️ View Alerts', command: 'Show me critical items' },
    { label: '🛒 Auto Order', command: 'Generate purchase orders' },
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateAIResponse(input, activeTab);
      setMessages(prev => [...prev, {
        type: 'agent',
        text: response,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (query, tab) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('status') || lowerQuery.includes('check')) {
      return `I've analyzed the current ${tab} data. Everything is being monitored. Would you like me to provide detailed insights or generate reports?`;
    } else if (lowerQuery.includes('alert') || lowerQuery.includes('critical')) {
      return `🚨 Found 3 critical items requiring attention:\n• N95 Masks - Below reorder level\n• Ventilators - Critically low\n• ICU Beds - 84% occupancy\n\nShould I create purchase orders?`;
    } else if (lowerQuery.includes('order') || lowerQuery.includes('purchase')) {
      return `✅ I can generate purchase orders for low-stock items. Based on current inventory:\n• N95 Masks: 500 units needed\n• Ventilators: 5 units needed\n\nTotal estimated cost: ₹1,85,000\n\nShall I proceed?`;
    } else {
      return `I understand you're asking about "${query}". I'm here to help with inventory management, staffing allocation, bed capacity monitoring, and automated procurement. What specific information do you need?`;
    }
  };

  const handleQuickCommand = (command) => {
    setInput(command);
    handleSend();
  };

  return (
    <div className="ai-chat-container">
      <div className="chat-header">
        <h3 className="chat-title">🤖 AI Assistant</h3>
        <span className="chat-subtitle">Powered by AI</span>
      </div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            <div className="message-content">
              <div className="message-text">{msg.text}</div>
              <div className="message-time">
                {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message agent">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-quick-commands">
        <div className="quick-commands-title">💡 Quick Commands:</div>
        <div className="quick-commands-grid">
          {quickCommands.map((cmd, idx) => (
            <button
              key={idx}
              className="quick-command-btn"
              onClick={() => handleQuickCommand(cmd.command)}
            >
              {cmd.label}
            </button>
          ))}
        </div>
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="chat-send-btn" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default AIChat;
