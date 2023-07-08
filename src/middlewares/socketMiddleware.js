import { io } from "socket.io-client";

const socket = io("https://pizza-mania-23rd.onrender.com");

socket.on('status_changed',(data) => {
    console.log('Event Recieved :', data)
})