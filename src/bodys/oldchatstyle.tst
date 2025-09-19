return (
    <div className="flex flex-col h-screen w-screen bg-[#292a2d]">

        {/* ---------------------THESE ARE THE CHAT SECTION ONLY FOR DISPLAYING MESSAGES AND THE LIKES----------------------- */}
            <div className="overflow-y-auto flex-col flex-1 ml-[60px] bg-[#292a2d]" style={{paddingTop:50, paddingInline:70 , scrollbarWidth: "none", msOverflowStyle: "none" , borderWidth:10, borderColor:'white'}}>
                <div>
                  <h2 style={{fontFamily:"'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif", color: "wheat"}}>
                    Chat Me
                  </h2>
                </div>

                {/* <div> */}
                  {
                      messages.map((item , index)=>{
                        return(
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                              duration: 0.5,
                              delay: 0.2,
                              ease: [0, 0.51, 0.1, 1.01],
                          }}
                        className="flex justify-end space-x-2 mb-[20px]"
                        key={index}
                        
                        > 
                            <div 
                              className="text-white p-3 rounded-lg rounded-tr-none shadow max-w-xs" 
                              style={{
                                    backgroundColor:"#D3D3D3", 
                                    padding:10, 
                                    borderRadius:10, 
                                    fontFamily:"'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
                                    flexDirection: "row",
                                    margin:3
                                  }}
                            
                            >
                              <p>
                                {item}
                              </p>
                            </div>
                        </motion.div>
                        );
                      })
                    }
                {/* </div> */}

                {/* <div className="flex flex-col justify-start flex-1 overflow-y-auto"> */}
                  {
                      outPut.map((item , index)=>{
                        return(
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                              duration: 0.5,
                              delay: 0.2,
                              ease: [0, 0.51, 0.1, 1.01],
                          }}
                        className="flex items-start  mb-[20px]"
                        key={index}
                        
                        > 
                        <div>
                          <img 
                          src={side_logo} 
                          alt="" 
                          className="w-[35px] h-[35px] rounded-sm m-[10px]"/>
                        </div>
                            <div 
                              className="bg-white text-gray-800 p-3 rounded-lg rounded-tl-none shadow max-w-xs" 
                              style={{color:"white" ,fontFamily:"'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif"}}
                            >
                              <p>
                                {item}
                              </p>
                            </div>
                        </motion.div>
                        );
                      })
                    }

            </div>
            
      {/* </div> */}
            <div>
                <Input 
                  messages={messages} 
                  setMessages={setMessages}
                  outPut={outPut}
                  outPutMessage={outPutMessage}
                />
                

                {/* <Search /> */}
            </div>
    </div>
  )