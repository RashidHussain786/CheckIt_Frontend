import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ChatMessageCard from './ChatMessageCard';
import ChatMessageCardSelf from './ChatMessageCardSelf';

const ChatBody = () => {
  const [messages] = useState([
    { sender: 'John', text: 'Hey! How\'s it going?', timestamp: '2023-08-12T12:30:00', self: false ,pic:'./Assets/sid.jpeg'},
    { sender: 'Jane', text: 'Hi John! I\'m doing great. How about you?', timestamp: '2023-08-12T12:35:00', self: true,pic:'./Assets/Image.jpg' },
    { sender: 'John', text: 'I\'m good too. Just working on some projects.', timestamp: '2023-08-12T12:40:00', self: false,pic:'./Assets/sid.jpeg' },
    { sender: 'Jane', text: 'That\'s awesome! Any exciting ones?', timestamp: '2023-08-12T12:45:00', self: true,pic:'./Assets/Image.jpg' },
    { sender: 'John', text: 'Yeah, I\'m working on a new website for a client.', timestamp: '2023-08-13T12:50:00', self: false ,pic:'./Assets/sid.jpeg'},
    { sender: 'Jane', text: 'Nice! You\'re so talented. Keep up the great work!', timestamp: '2023-08-13T12:55:00', self: true,pic:'./Assets/Image.jpg' },
    { sender: 'John', text: 'Thanks, Jane! You\'re always so supportive.', timestamp: '2023-08-13T13:00:00', self: false ,pic:'./Assets/sid.jpeg'},
    { sender: 'Jane', text: 'No problem at all. We\'re a great team!', timestamp: '2023-08-13T13:05:00', self: true,pic:'./Assets/Image.jpg' },
    { sender: 'John', text: 'Absolutely! By the way, do you want to grab lunch later?', timestamp: '2023-08-13T13:10:00', self: false ,pic:'./Assets/sid.jpeg'},
    { sender: 'Jane', text: 'Sure, that sounds like a plan. Where should we meet?', timestamp: '2023-08-13T14:15:00', self: true,pic:'./Assets/Image.jpg' },
    { sender: 'John', text: 'How about the usual cafe near the office?', timestamp: '2023-08-14T14:20:00', self: false ,pic:'./Assets/sid.jpeg'},
    { sender: 'Jane', text: 'Sounds good. See you there at 1:00 PM?', timestamp: '2023-08-14T14:25:00', self: true ,pic:'./Assets/Image.jpg'},
    { sender: 'John', text: 'Perfect! Looking forward to it.', timestamp: '2023-08-14T14:30:00', self: false,pic:'./Assets/sid.jpeg' }
    // ... other messages
  ]);
 
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollToTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const getDateForMessage = (timestamp) => {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();

    if (messageDate.toDateString() === currentDate.toDateString()) {
      return 'Today';
    } else if (messageDate.getDate() === currentDate.getDate() - 1) {
      return 'Yesterday';
    } else {
      return messageDate.toLocaleDateString();
    }
  };

  return (
    <Box sx={{ maxHeight: 'calc(100vh - 180px)', overflowY: 'auto', overflowX: 'hidden', p: '12px', '&::-webkit-scrollbar': { width: '0.4em' } }}>
      <Container ref={containerRef} sx={{ maxWidth: { md: 1320 }, width: '100%', px: '15px', mx: 'auto' }}>
        {messages.map((message, index) => {
          const currentDate = getDateForMessage(message.timestamp);
          const prevMessage = index > 0 ? messages[index - 1] : null;
          const prevDate = prevMessage ? getDateForMessage(prevMessage.timestamp) : null;
          const showDateHeader = !prevDate || prevDate !== currentDate;

          return (
            <React.Fragment key={index}>
              {showDateHeader && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bg: 'background.paper', top: '0', zIndex: 1, pb: '0.75rem' }}>
                  <Typography variant="body2" sx={{ border: '1px solid #ffffff78', p: '4px', borderRadius: '5px', px: '12px' }}>{currentDate}</Typography>
                </Box>
              )}
              {/* Render chat messages */}
              {message.self ? (
                <ChatMessageCardSelf sender="You" text={message.text} timestamp={message.timestamp.slice(11,16)} picture={message.pic} />
              ) : (
                <ChatMessageCard sender="John" text={message.text} timestamp={message.timestamp.slice(11,16)} picture={message.pic} />
              )}
            </React.Fragment>
          );
        })}
      </Container>
    </Box>
  );
};

export default ChatBody;
