import React, { useEffect, useState } from 'react';
import { View } from 'react-native';


const WebSocketConnection = ({ onDataUpdate, onConnectionStatusUpdate }) => {
    const [ConnectionStatus, setConnectionStatus] = useState(false);
    
    const [socket, setSocket] = useState(null);
    // function to connect to the server 
    const connectWebSocket = () => {
        const newSocket = new WebSocket('ws://192.168.4.1:81');

        // Set up event handlers for the WebSocket
        newSocket.onopen = () => {
        console.log('WebSocket connected');
        onConnectionStatusUpdate(true);

        };

        newSocket.onmessage = (event) => {
        const data = event.data;
        onDataUpdate(data);
        console.log(event.data)
        
        };

        newSocket.onerror = (error) => {
        console.error('WebSocket error:', error);
        onConnectionStatusUpdate(false);
        };

        newSocket.onclose = () => {
        console.log('WebSocket disconnected');
         onConnectionStatusUpdate(false);
        reconnectWebSocket();
        };

        setSocket(newSocket);
        };
    // function to reconnect to the server 
    const reconnectWebSocket = () => {
    console.log('Reconnecting WebSocket...');
    setTimeout(() => {
        connectWebSocket();
    }, 500); // Adjust the delay according to your needs
    };

    useEffect(() => {
        connectWebSocket();
        // Clean up the socket connection when the component unmounts
        return () => {
        if (socket) {
            socket.close();
        }
        };
    }, []);
    return <View />;
    };

export default WebSocketConnection;
