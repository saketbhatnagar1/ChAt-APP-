import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]); //will use it to load chats

  //axios api calls from server,as of 20/6 we will fetch dummy data in ../Backend/Data/data.js
  const fetchChats = async () => {
    //usestate hook for storing data and asynchronous call through axios
    const { data } = await axios.get("/api/chats");
    setChats(data);
  };
  //use effect renders the chat on mounting of the element only once,since we have passed an empty dependency array
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
