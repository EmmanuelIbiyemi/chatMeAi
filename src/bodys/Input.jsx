import { useState } from "react"

// For the search icon
import search from "../images/searchicon.png"

// -- THIS FRAMER MOTION TO USE FOR THE BUTTON WHEN THE PERSON CLICKS
import { motion } from "framer-motion";

import OpenAI from "openai";

// -- This is the module for the gemini Ai chat bot
import { GoogleGenAI } from "@google/genai";


export default function Input( {messages , setMessages , outPut , outPutMessage} ) {

   // ---- THIS ARE STATE VARIBLE FOR THE GETTING USER INPUTS AND THE LIKES
  const [inp , setInp]  = useState("");

   // -- This is the function for the gemini
    const ai = new GoogleGenAI({ apiKey: `AIzaSyBy8o9WYjjYJNNoVbASJbrut9z72mVS7wg` });
    async function api_CALLING() {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${inp}`,
      });
      outPutMessage([...outPut , response.text]);
      console.log(response.text);
    }


  

  const handlesend =()=>{
   if (inp == "") {
    return
    };
    if (inp != "") {
      setMessages([...messages, inp]);
      setInp('');
    }
      
      messages.map((item)=>{
        console.log(item);
        console.log("Message sent!");
      });

      api_CALLING();
  }

  
  return (

      //  -------------------------------THIS IS FOR THE INPUT AND THE BUTTON FOR SEARCHING IS HERE ------------------------------------
      <div
        className="z-10 flex items-center justify-center "
      >

        <div className=" p-[10px] w-[70%] bg-[#404045]  m-[10px]" style={{ justifySelf: "center" , borderRadius:20, marginLeft: 'auto', marginRight: 'auto', }}>
         <div className="relative">
          <input
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            placeholder="Search Anything ..."
            className="focus:outline-none w-full bg-transparent border-none resize-none text-white text-lg"
            style={{
              fontWeight: 'bold',
              color: 'white',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
            type="text"
            onKeyPress={(event) => { if(event.key === 'Enter') { handlesend()} }}
          />
              <div id="pink-mask"></div>
         </div>
          {/* To add to the button section and stuff */}
            <div className="flex flex-row">
                <motion.button 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}  
                  className="ml-auto cursor-pointer rounded-md border-0 h-[40px] w-[40px] items-end bg-blue-600" 
                  style={{
                    borderRadius:10 , 
                    backgroundColor:"#4d6bfe",
                  }}
                  onClick={()=>handlesend()}
                >
                  <img 
                    src={search}
                    alt="SB"
                    style={{width:20 , height:20}}
                  />
                </motion.button>
            </div>
        </div>
      </div>
   )
}
