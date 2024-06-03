import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // Function to send a message
  const sendMessage = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/messages/send_message",
        {
          conversation_id: "1", // You need to define conversationId
          sender_id: "2", // You need to define senderId
          content: text
        }
      );
      // Optionally, you can handle the response if needed
      console.log("Message sent:", response.data);
      setText(""); // Clear the input field after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Function to fetch messages for a conversation
  const fetchMessages = async () => {
    try {
      const response = await axios.get(`/messages/conversation/messages/${1}/${2}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // useEffect(() => {
  //   // Fetch messages when the component mounts or conversation ID changes
  //   fetchMessages();
  // }, [1]);

  return (
    <div>
      {/* Display messages */}
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.content}</p>
        </div>
      ))}
      {/* Input field for typing messages */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      />
      {/* Button to send the message */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Messages;

// import React from "react";
// import EmojiPicker from "emoji-picker-react";
// import { useState } from "react";
// const Messages = () => {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   return (
//     <div className="flex-grow h-[85%] flex flex-col ">
//       <div className="flex gap-5 border-b border-[#e1e3e5] justify-between items-center py-2.5 pr-6 w-full bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full ">
          
//               <img
//               src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fo47ijrygbe-I66%3A33222%3B783%3A5816?alt=media&token=1fb202b2-3526-4b6f-aa88-c957c0ab39d3"
//               alt="Not Found"
//               className=" w-[50px] h-[50px] mt-[7px] cursor-pointer "
//             />
        
//         <div className="flex flex-col justify-center self-stretch my-auto">
//           <div className="self-center text-[14px] text-[#063248] font-urbanist font-semibold leading-[18px] ">
//             Dr. Ouali Zouina
//           </div>
//           <div className="mt-1 text-xs text-[#4C606E] font-urbanist ">
//             last seen 45 minutes ago
//           </div>
//         </div>
//         <div className="border border-[white] flex gap-5 justify-between self-stretch my-auto">
//           <svg
//           className="cursor-pointer"
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <rect width="44" height="44" rx="11" fill="#E3F1F4" />
//             <path
//               d="M32 18L26 22L32 26V18Z"
//               stroke="#298EA6"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M24 16H14C12.8954 16 12 16.8954 12 18V26C12 27.1046 12.8954 28 14 28H24C25.1046 28 26 27.1046 26 26V18C26 16.8954 25.1046 16 24 16Z"
//               stroke="#298EA6"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <svg
//           className="cursor-pointer"
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M26.92 12.0001H29.92C30.1985 11.9989 30.4741 12.056 30.7293 12.1676C30.9845 12.2791 31.2136 12.4428 31.4018 12.648C31.5901 12.8532 31.7335 13.0955 31.8227 13.3593C31.9119 13.6231 31.945 13.9027 31.92 14.1801C31.5856 17.2572 30.5341 20.2131 28.85 22.8101C27.3146 25.2262 25.2661 27.2747 22.85 28.8101C20.2412 30.5001 17.271 31.5518 14.18 31.8801C13.9034 31.9051 13.6247 31.8722 13.3616 31.7836C13.0985 31.6949 12.8567 31.5525 12.6516 31.3653C12.4465 31.1781 12.2827 30.9503 12.1705 30.6963C12.0583 30.4423 12.0002 30.1677 12 29.8901V26.8901C11.9952 26.4048 12.1671 25.9343 12.4835 25.5663C12.8 25.1983 13.2394 24.958 13.72 24.8901C14.68 24.7634 15.6227 24.5286 16.53 24.1901C16.8879 24.0555 17.2769 24.0264 17.6509 24.1062C18.0248 24.1859 18.3681 24.3712 18.64 24.6401L19.91 25.9101C22.4135 24.4865 24.4864 22.4136 25.91 19.9101L24.64 18.6401C24.3711 18.3682 24.1858 18.0249 24.1061 17.6509C24.0263 17.277 24.0554 16.888 24.19 16.5301C24.5285 15.6228 24.7634 14.6801 24.89 13.7201C24.9585 13.2343 25.2032 12.7907 25.5775 12.4735C25.9518 12.1564 26.4296 11.9879 26.92 12.0001Z"
//               stroke="#4C606E"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//       <div className="w-full flex-grow bg-white my-2  overflow-y-auto">
       
        

//         <div className="flex justify-end">
//           <div className="flex items-end  bg-[#e6e6e7] w-3/4   m-1 rounded-xl rounded-br-none sm:w-3/4 md:w-auto">
//             <div className="p-4">
//               <div className="  text-gray-700">
//               Hello Janet, thank you for reaching out              </div>
//             </div>
//           </div>
//         </div>





      
      
//       <div className="gap-2">
       
//         <div className="justify-center w-2/4 items-end p-4   text-base leading-6 text-white bg-[#298EA6] rounded-bl-none rounded-2xl">           
//             <div className=" text-[white] ark:text-gray-200">
//               Hello po ang pogi niyo :)
//             </div>
//           </div>
        
//         <div className="text-xs text-[#8B8D97]">just now</div>
//         </div>

      
    
//       </div>

//       <div className=" px-[27px] flex items-center justify-center gap-4 w-[100%] rounded-xl rounded-tr-none rounded-tl-none bg-white border-t border-[#e1e3e5]">
//        <div className="relative cursor-pointer"> <svg
//           width="17"
//           height="16"
//           viewBox="0 0 17 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           <g clipPath="url(#clip0_213_674)">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M2 8C2 6.27609 2.68482 4.62279 3.90381 3.40381C5.12279 2.18482 6.77609 1.5 8.5 1.5C10.2239 1.5 11.8772 2.18482 13.0962 3.40381C14.3152 4.62279 15 6.27609 15 8C15 9.72391 14.3152 11.3772 13.0962 12.5962C11.8772 13.8152 10.2239 14.5 8.5 14.5C6.77609 14.5 5.12279 13.8152 3.90381 12.5962C2.68482 11.3772 2 9.72391 2 8ZM8.5 0C6.37827 0 4.34344 0.842855 2.84315 2.34315C1.34285 3.84344 0.5 5.87827 0.5 8C0.5 10.1217 1.34285 12.1566 2.84315 13.6569C4.34344 15.1571 6.37827 16 8.5 16C10.6217 16 12.6566 15.1571 14.1569 13.6569C15.6571 12.1566 16.5 10.1217 16.5 8C16.5 5.87827 15.6571 3.84344 14.1569 2.34315C12.6566 0.842855 10.6217 0 8.5 0ZM5.5 8C5.76522 8 6.01957 7.89464 6.20711 7.70711C6.39464 7.51957 6.5 7.26522 6.5 7C6.5 6.73478 6.39464 6.48043 6.20711 6.29289C6.01957 6.10536 5.76522 6 5.5 6C5.23478 6 4.98043 6.10536 4.79289 6.29289C4.60536 6.48043 4.5 6.73478 4.5 7C4.5 7.26522 4.60536 7.51957 4.79289 7.70711C4.98043 7.89464 5.23478 8 5.5 8ZM12.5 7C12.5 7.26522 12.3946 7.51957 12.2071 7.70711C12.0196 7.89464 11.7652 8 11.5 8C11.2348 8 10.9804 7.89464 10.7929 7.70711C10.6054 7.51957 10.5 7.26522 10.5 7C10.5 6.73478 10.6054 6.48043 10.7929 6.29289C10.9804 6.10536 11.2348 6 11.5 6C11.7652 6 12.0196 6.10536 12.2071 6.29289C12.3946 6.48043 12.5 6.73478 12.5 7ZM5.82 9.636C5.98134 9.52303 6.18064 9.47806 6.37486 9.51081C6.56908 9.54355 6.74262 9.65138 6.858 9.811L6.865 9.82C6.96785 9.93795 7.08549 10.0421 7.215 10.13C7.479 10.308 7.898 10.5 8.5 10.5C9.102 10.5 9.52 10.308 9.785 10.129C9.91451 10.0411 10.0322 9.93695 10.135 9.819L10.142 9.811C10.2574 9.64895 10.4324 9.53937 10.6285 9.50637C10.8247 9.47336 11.026 9.51963 11.188 9.635C11.35 9.75037 11.4596 9.92539 11.4926 10.1215C11.5256 10.3177 11.4794 10.519 11.364 10.681L10.75 10.25C11.364 10.68 11.364 10.681 11.363 10.681V10.682L11.362 10.684L11.36 10.687L11.355 10.694L11.341 10.713C11.2848 10.7883 11.2233 10.8594 11.157 10.926C10.9963 11.0924 10.8187 11.2415 10.627 11.371C9.99722 11.7894 9.25607 12.0086 8.5 12C7.554 12 6.848 11.692 6.374 11.37C6.12319 11.2003 5.89676 10.9971 5.701 10.766C5.6867 10.7486 5.6727 10.7309 5.659 10.713L5.645 10.693L5.64 10.687L5.638 10.684V10.682H5.637L6.25 10.25L5.636 10.68C5.52196 10.5172 5.47718 10.3159 5.51149 10.1201C5.54581 9.92439 5.6564 9.75027 5.819 9.636H5.82Z"
//               fill="#2C2C2E"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_213_674">
//               <rect
//                 width="16"
//                 height="16"
//                 fill="white"
//                 transform="translate(0.5)"
//               />
//             </clipPath>
//           </defs>
//         </svg>
//         <div className="absolute left-0 bottom-9">
//         <EmojiPicker open={open} onEmojiClick={handleEmoji} /> </div>
//         </div>

//         <div className="w-[80%]">
//           <input
//             value={text}
//             className="input w-[100%]   text-[#666668] text-sm py-4 focus:outline-none bg-white rounded-l-md"
//             type="text"
//             placeholder="Start typing ..."
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>

//         <svg
//         className="cursor-pointer"
//           width="17"
//           height="16"
//           viewBox="0 0 17 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g clipPath="url(#clip0_213_679)">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M5.24995 2.37004C4.51061 2.79684 3.86257 3.36508 3.34283 4.04232C2.8231 4.71956 2.44185 5.49254 2.22084 6.31713C1.77451 7.98245 2.008 9.75687 2.86995 11.25C3.7319 12.7432 5.15171 13.8328 6.81704 14.2791C8.48236 14.7254 10.2568 14.492 11.75 13.63C11.9216 13.5386 12.122 13.5174 12.3089 13.5709C12.4958 13.6244 12.6546 13.7484 12.7519 13.9168C12.8492 14.0851 12.8773 14.2846 12.8303 14.4733C12.7833 14.6619 12.6649 14.825 12.5 14.928C10.9875 15.8008 9.2309 16.1548 7.4984 15.9359C5.76589 15.7169 4.15261 14.9371 2.90478 13.7155C1.65696 12.4939 0.843132 10.8975 0.58752 9.17003C0.331908 7.44256 0.648553 5.6789 1.48912 4.14823C2.32969 2.61757 3.64802 1.40398 5.24288 0.692706C6.83774 -0.0185698 8.62153 -0.188465 10.322 0.208952C12.0225 0.606369 13.5462 1.54927 14.6606 2.89373C15.775 4.2382 16.4189 5.91038 16.494 7.65504C16.498 7.68655 16.5 7.71828 16.5 7.75004V7.85404C16.5007 7.91737 16.5007 7.98071 16.5 8.04404V9.25004C16.5004 9.84571 16.3073 10.4253 15.9498 10.9018C15.5924 11.3783 15.0899 11.7259 14.5179 11.8922C13.9459 12.0586 13.3354 12.0347 12.7782 11.8242C12.221 11.6137 11.7471 11.228 11.428 10.725C10.7933 11.4069 9.94045 11.8459 9.01667 11.9663C8.09288 12.0866 7.15607 11.8807 6.36785 11.3842C5.57964 10.8876 4.98946 10.1315 4.69914 9.24636C4.40883 8.36117 4.43659 7.4024 4.77763 6.53548C5.11867 5.66856 5.7516 4.94787 6.56722 4.49774C7.38285 4.04762 8.33 3.89629 9.24528 4.06988C10.1606 4.24346 10.9866 4.73107 11.5808 5.44856C12.1749 6.16606 12.5001 7.06845 12.5 8.00004V9.25004C12.5 9.58156 12.6317 9.8995 12.8661 10.1339C13.1005 10.3683 13.4185 10.5 13.75 10.5C14.0815 10.5 14.3995 10.3683 14.6339 10.1339C14.8683 9.8995 15 9.58156 15 9.25004V7.86704C14.977 6.73738 14.6599 5.63322 14.08 4.66348C13.5001 3.69374 12.6775 2.89191 11.6932 2.33707C10.7089 1.78224 9.59691 1.49356 8.46703 1.49952C7.33715 1.50547 6.22834 1.80586 5.24995 2.37104V2.37004ZM11 8.00004C11 7.337 10.7366 6.70112 10.2677 6.23227C9.79888 5.76343 9.16299 5.50004 8.49995 5.50004C7.83691 5.50004 7.20102 5.76343 6.73218 6.23227C6.26334 6.70112 5.99995 7.337 5.99995 8.00004C5.99995 8.66308 6.26334 9.29897 6.73218 9.76781C7.20102 10.2366 7.83691 10.5 8.49995 10.5C9.16299 10.5 9.79888 10.2366 10.2677 9.76781C10.7366 9.29897 11 8.66308 11 8.00004Z"
//               fill="#3D3D3D"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_213_679">
//               <rect
//                 width="16"
//                 height="16"
//                 fill="white"
//                 transform="translate(0.5)"
//               />
//             </clipPath>
//           </defs>
//         </svg>

// <button className="w-[17px] h-[16px]">
// <svg
//         className="cursor-pointer "
//           width="17"
//           height="16"
//           viewBox="0 0 17 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g clipPath="url(#clip0_213_681)">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M2.09168 2.71245L2.88083 7.25004H7.75001C8.16422 7.25004 8.50001 7.58582 8.50001 8.00004C8.50001 8.41425 8.16422 8.75004 7.75001 8.75004H2.88083L2.09168 13.2876L14.4294 8.00004L2.09168 2.71245ZM1.48875 8.00004L0.563675 2.68087C0.48889 2.25086 0.628032 1.81135 0.936661 1.50272C1.32445 1.11494 1.90926 1.00231 2.41333 1.21834L15.8157 6.9622C16.2308 7.14013 16.5 7.54835 16.5 8.00004C16.5 8.45172 16.2308 8.85995 15.8157 9.03788L2.41333 14.7817C1.90926 14.9978 1.32445 14.8851 0.936661 14.4974C0.628032 14.1887 0.48889 13.7492 0.563675 13.3192L1.48875 8.00004Z"
//               fill="#8E8E93"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_213_681">
//               <rect
//                 width="16"
//                 height="16"
//                 fill="white"
//                 transform="translate(0.5)"
//               />
//             </clipPath>
//           </defs>
//         </svg>
// </button>
       
//       </div>
//     </div>
//   );
// };

// export default Messages;
