// WebSocketContext.js
import React, { createContext, useEffect, useRef, useState } from 'react';

export const WebSocketContext = createContext();

const WebSocketProvider = ({children}) => {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [message, setMessage] = useState('');
  const [ActivateWebsockets, setActivateWebsockets] = useState('false');

  const ws = useRef(null);
  const reconnectInterval = 1000; // 1 second
  const pingInterval = 5000; // 5 seconds (adjust as needed)

  useEffect(() => {
    if (ActivateWebsockets === 'true') {
      connectWebSocket();
    }

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [ActivateWebsockets]);

  useEffect(() => {
    let pingIntervalId = null;

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      pingIntervalId = setInterval(() => {
        // Send a ping to the server to keep the connection alive
        ws.current.send('ping');
      }, pingInterval);
    }

    return () => {
      if (pingIntervalId) {
        clearInterval(pingIntervalId);
      }
    };
  }, [ws.current, pingInterval]);

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
      setConnectionStatus(false);
      console.log('WebSocket error:', error.message);
      setActivateWebsockets('false');
    };

    ws.current.onclose = (event) => {
      setConnectionStatus(false);
      console.log('WebSocket closed', event.reason);
      // Attempt to reconnect after a delay
      setTimeout(connectWebSocket, reconnectInterval);
      setActivateWebsockets('false');
    };
  };

  const sendMessage = (msg) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(msg);
    } else {
      console.log('WebSocket is not open');
    }
  };

  const modifyMessage = (msg) => {
    setMessage(msg);
  };

  const modifyWebsockets = (msg) => {
    setActivateWebsockets(msg);
  };

  return (
    <WebSocketContext.Provider value={{ connectionStatus, message, sendMessage, modifyWebsockets, modifyMessage, ActivateWebsockets }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
