import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 380px;
  background: rgba(17, 34, 64, 0.98);
  border-radius: 20px;
  border: 2px solid rgba(100, 255, 218, 0.3);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
  overflow: hidden;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(79, 209, 197, 0.15));
  border-bottom: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CoachAvatar = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64FFDA, #4FD1C5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #0A192F;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.4);
`;

const CoachInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoachName = styled.div`
  color: #64FFDA;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.span`
  background: rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const CoachStatus = styled.div`
  color: #8892B0;
  font-size: 0.9rem;
`;

const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  color: #64FFDA;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
`;

const ChatBody = styled(motion.div)`
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(100, 255, 218, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(100, 255, 218, 0.3);
    border-radius: 4px;
  }
`;

const Message = styled(motion.div)<{ isUser?: boolean }>`
  padding: 12px 18px;
  border-radius: 20px;
  max-width: 85%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  background: ${({ isUser }) =>
    isUser
      ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2))'
      : 'rgba(17, 34, 64, 0.8)'};
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: ${({ isUser }) => (isUser ? '#64FFDA' : '#E6F1FF')};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px 18px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 20px;
  width: fit-content;
  margin-left: 10px;
`;

const Dot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background: #64FFDA;
  border-radius: 50%;
`;

const QuickReplies = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background: rgba(17, 34, 64, 0.5);
  border-top: 2px solid rgba(100, 255, 218, 0.2);
`;

const QuickReplyButton = styled(motion.button)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const ChatInput = styled.div`
  padding: 15px;
  background: rgba(17, 34, 64, 0.5);
  border-top: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  gap: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: #E6F1FF;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: rgba(230, 241, 255, 0.5);
  }
`;

const SendButton = styled(motion.button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  border: 2px solid rgba(100, 255, 218, 0.3);
  color: #64FFDA;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.3), rgba(79, 209, 197, 0.3));
    transform: scale(1.1) rotate(5deg);
  }

  &:active {
    transform: scale(0.95) rotate(-5deg);
  }
`;

export const AIChatCoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI learning coach. How can I help you today?",
      isUser: false,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "Help me study",
    "Show my progress",
    "Set a goal",
    "Practice questions",
    "Need motivation",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: message, isUser: true },
    ]);
    setMessage('');

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "I'm analyzing your question. Let me help you with that!",
          isUser: false,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: reply, isUser: true },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Great choice! Let's work on that together.",
          isUser: false,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <ChatContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ChatHeader onClick={() => setIsOpen(!isOpen)}>
        <HeaderContent>
          <CoachAvatar
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            🤖
          </CoachAvatar>
          <CoachInfo>
            <CoachName>
              AI Learning Coach
              <Badge>Certified</Badge>
            </CoachName>
            <CoachStatus>Online & Ready to Help</CoachStatus>
          </CoachInfo>
        </HeaderContent>
        <ToggleButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? '▼' : '▲'}
        </ToggleButton>
      </ChatHeader>

      <AnimatePresence>
        {isOpen && (
          <ChatBody
            initial={{ height: 0 }}
            animate={{ height: 500 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MessagesContainer>
              {messages.map((msg) => (
                <Message
                  key={msg.id}
                  isUser={msg.isUser}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.text}
                </Message>
              ))}
              {isTyping && (
                <TypingIndicator>
                  <Dot
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <Dot
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  />
                  <Dot
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                  />
                </TypingIndicator>
              )}
              <div ref={messagesEndRef} />
            </MessagesContainer>

            <QuickReplies>
              {quickReplies.map((reply) => (
                <QuickReplyButton
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {reply}
                </QuickReplyButton>
              ))}
            </QuickReplies>

            <ChatInput>
              <InputField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <SendButton
                onClick={handleSend}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
              >
                ➤
              </SendButton>
            </ChatInput>
          </ChatBody>
        )}
      </AnimatePresence>
    </ChatContainer>
  );
}; 