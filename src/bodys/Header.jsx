import logo from "../images/logoicon.png";


export default function Header() {
  return (
     <div
    className="flex flex-col h-full p-[16px] box-border bg-[#212327] w-[80px] absolute top-0 left-0 bottom-0"
    >
       <div 
          className="items-center justify-center flex"
       >
            <img 
               src={logo}
               alt="This is error"
               width={40}
               style={{borderRadius: 20 , padding:20}}
            />
       </div>
       <div 
        className="items-center justify-center flex"
       >
               L
       </div>
       <div
        className="mt-auto cursor-pointer object-cover border-1 rounded-full w-[45px] min-h-[45px] items-center justify-center flex relative bottom-20 bg-green-200"
        style={{backgroundColor:"green"}}
       >
            E
       </div>
    </div>  
    
  )
}
