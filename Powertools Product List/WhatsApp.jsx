// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./WhatsApp.css";
import Chat from "/public/chat.png";


// eslint-disable-next-line react/prop-types
const ChatButton = ({ productName, dealerNumber,productName1 }) => {
  const handleClick = () => {
    const userMessage = `Hello Mossey Enterprise, Please I want to purchase ${productName} ${productName1}. Can you provide more details?`;

    // Construct the WhatsApp URL with the custom user message
    const userWhatsAppURL = `https://wa.me/${dealerNumber}?text=${encodeURIComponent(userMessage)}`;

    // Open the WhatsApp chat in a new tab/window
      // eslint-disable-next-line no-unused-vars
    const userWindow = window.open(userWhatsAppURL, '_blank');


  };

  const chatbut = {
      but:Chat
  }

  return (
    <button onClick={handleClick} className="chatbut">
      <div id="chatbut">
        <img src={chatbut.but} />
      </div>
      Chat Dealer
    </button>
  );
};

export default ChatButton;
