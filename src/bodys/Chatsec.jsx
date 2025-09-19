import Input from "./Input"
import { useState } from "react";

// For the image for the ai icon
import side_logo from "../images/logoicon.png"

// -- For the motion for the message and output
import { motion } from "framer-motion"

import React from "react";


export default function Chatsec() {

  // -- TO STORE THE USER MESSAGE TO LATER LOOP THROUGH IT 
    const [messages, setMessages] = useState([]);
    const [outPut, outPutMessage] = useState([]);
    // --- This is for the user to be able to do voice to text speech
    /*
    React.useEffect(()=>{
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance("Welcome To Chat Ai");
      utterance.lang = "en-US"; // You can adjust the language
      speechSynthesis.speak(utterance);

      const speakOnce = () => {
      if (speechSynthesis.speaking) return; // Prevent speaking twice
      speechSynthesis.speak(utterance);
      };

    // Wait for voices to be ready if needed
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = speakOnce;
      } else {
        speakOnce();
      }

      
    })
    */

  return (
  <div className="flex flex-col h-screen w-screen bg-[#292a2d]">
    {/* ---------------- CHAT SECTION ---------------- */}
    <div
      className="overflow-y-auto flex-col flex-1 ml-[60px] bg-[#292a2d]"
      style={{
        paddingTop: 50,
        paddingInline: 70,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        borderWidth: 10,
        borderColor: "white",
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
            color: "wheat",
          }}
        >
          Chat Me
        </h2>
      </div>

      {/* 👇 Merge into one timeline for display */}
      {[
        ...messages.map((m, i) => ({ id: i, sender: "me", text: m })),
        ...outPut.map((m, i) => ({ id: i + messages.length, sender: "bot", text: m })),
      ].map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.51, 0.1, 1.01],
          }}
          className={`flex mb-[20px] ${
            item.sender === "me" ? "justify-end" : "items-start"
          }`}
        >
          {item.sender === "bot" && (
            <img
              src={side_logo}
              alt=""
              className="w-[35px] h-[35px] rounded-sm m-[10px]"
            />
          )}

          <div
            className="p-3 rounded-lg shadow max-w-xs"
            style={{
              backgroundColor: item.sender === "me" ? "#D3D3D3" : "#1E1F22",
              color: item.sender === "me" ? "black" : "white",
              borderRadius: 10,
              padding:15,
              fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
            }}
          >
            <p>{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Input section */}
    <div>
      <Input
        messages={messages}
        setMessages={setMessages}
        outPut={outPut}
        outPutMessage={outPutMessage}
      />
    </div>
  </div>
);

}