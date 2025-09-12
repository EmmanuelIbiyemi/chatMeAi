import React, { useEffect } from 'react'

// This is for the header part 
import Header from './bodys/Header';
import Chatsec from './bodys/Chatsec';

import Signin from "./(auth)/Signin"

import { BrowerRouter } from "react-dom";
import { Router } from "react-dom";

import Search from './bodys/Search';
export default function App() {



  // -- Just to check if the stuff is working self 
  console.log("It's working!!");
  return (
    <div className="flex flex-col text-2xl font-bold">

      {/* This is to check th input and header section in simple and direct way */}
      {/* This is for the header left and the input section to show brav */}
        <div>
          <Header />
        </div>
        <div>
          <Chatsec />
        </div>


        {/* <Search/> */}
          {/* <Signin /> */}
    </div>
  )
}
