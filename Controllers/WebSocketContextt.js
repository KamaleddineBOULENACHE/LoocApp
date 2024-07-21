// WebSocketContext.js
import React, { createContext, useEffect, useRef, useState } from 'react';

export const WebSocketContext = createContext();

const WebSocketProvider = ({children}) => {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [message, setMessage] = useState('');
  const [messag, setMessag] = useState('');
  

  const ws = useRef(null);
  const reconnectInterval = 1000; // 1 second

  useEffect(() => {
    // connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const connectWebSocket = () => {
    ws.current = new WebSocket('ws://192.168.4.1:81');

    ws.current.onopen = () => {
      setConnectionStatus(true);
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (event) => {
      const receivedMessage = event.data;
      setMessage(receivedMessage);
      console.log('Received message:', receivedMessage);
    };

    ws.current.onerror = (error) => {
      console.log('WebSocket error:', error.message);
    };

    ws.current.onclose = (event) => {
      setConnectionStatus(false);
      console.log('WebSocket closed', event.reason);
      // Attempt to reconnect after a delay
      setTimeout(connectWebSocket, reconnectInterval);
    };
  };

  const sendMessage = (msg) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(msg);
    } else {
      console.log('WebSocket is not open');
    }
  };

  return (
    <WebSocketContext.Provider value={{ connectionStatus, message, sendMessage,setMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};
export default WebSocketProvider;
