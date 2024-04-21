
import React, { useState } from "react";
import './index.css'
export default function Card() {
    // State variable to track whether all cards are visible
    const [showAll, setShowAll] = useState(false);

    
    const Sidebarlist = [
      { id: 1, title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
          { id: 2,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
        { id: 3,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
          { id: 4,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
           { id: 5,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
         { id: 6,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
          { id: 7,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
          { id: 8,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
         { id: 9,title: "Depression ",name:"How to Start A new life without Depression",descreption:"Discover how staying Well and peacefull can support your Life goals and improve overall health.",authorName:"Emily Johnson",date:"23 May 2023 - 5 min read",src1:"https://s3-alpha-sig.figma.com/img/765f/f5ee/40962426a0fdb043ede431bc6a31397e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECrYV6oJDwXSZeXXPKXYLW1xncrSsqcz~WG0B4Qiy-H2g2w~is2akNa0kwexAdjsg23WE2vuT-kKiq7agMwK5gMsEyTx7QmB-ZHP2sNMd21io5ya6wAGhgV5rgX9Ytw3r2qDDIxiNHJKB4i~zNbv15ozMueOQZ79Vi~aUksNUfoS8aG4EvMc5CvEHOyt0LaJ7zrH~8MEe~EGzzQH6PM7dQYARdy9LKYqYRmLnmzMR3MfDfXouI0-6mcADHqkWvTLQIItqfwps1tZ8YTpsXrfQYYwgw~KOcxCjZRuzBqdnArTlMrEJ1Xjhx6t6An-IBWfNudDkrqmGiV5Kx6KqU5y9Q__",src2:"https://s3-alpha-sig.figma.com/img/f3c3/962d/cadfffd2660cfa7ff7bbf60c6e410807?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q-f5PVX9yWLME4DjOyYZMHgD35QLE5Uh2iLJRy1X0ZNO6yQABcQWfupVBV-SPVe4-Q2vA6khDSbgQRN-7RrVy5801yU86NF5UeNEGxo0bbwBE0qmG3A605TMjlsCws5PjJ10jfTxY4vAE3OwvbmPQ9XZ7e3zemyBnl1mifgCtm~z1EttXD7jeZvAZnen0lH-T9kFym-TFIA0GFxn-AWpHyM5Djg89aX9M5LzMXn8LHOOBfM7mC3PyTkcIYls49MbsA3yZ6aHq6IYNiYXIj5E35aenwncXDfE7~bwjlyo1b55Mt6DSi2Sa76zjH4dfEgx68vx6qpZFd9AoEjygBHRSA__"},
    ];

    
    const handleViewMoreClick = () => {
        setShowAll(!showAll);
    };
   
    const cardsToRender = showAll ? Sidebarlist : Sidebarlist.slice(0, 6);

    return (

      
        <div className="grid grid-cols-3 gap-4 w-[100%] mx-auto mt-[64px]">
           
            {cardsToRender.map((card) => (
               // eslint-disable-next-line react/jsx-key
               <div className="mb-[64px] flex flex-col justify-center items-start gap-8 w-[398px] h-[560px] p-7 border  border-[#298ea6ff] border-solid rounded-[10px] box-border  bg-[rgba(227,241,244,1)] shadow-[4px_4px_23px_0px_rgba(6,50,72,0.15)]">
                        <img
                         src={card.src1}
                         alt="Not Found"
                         className=" w-[100%] h-[239px]"
                       />
                       <div className=" flex flex-col justify-start items-start gap-5 w-[100%] box-border">
                         <div className=" flex flex-col justify-start items-start gap-0.5 w-[100%] box-border">
                           <p className="  border-[#4c606eff] text-base  text-[#4C606E] leading-[150%]  font-urbanist  font-[500]">
                           {card.title}
                           </p>
                           <p className="  border-[#063248ff] text-xl text-[#063248] leading-[150%]  font-urbanist  font-[600]">
                           {card.name}
                           </p>
                         </div>
                         <p className="  border-[#4c606eff] text-sm text-[#4C606E]  leading-[150%]  font-urbanist  font-[500]">
                         {card.descreption}
                         </p>
                         <div className=" flex flex-row justify-start items-center gap-5 w-[100%] pl-3.5 pr-3 py-3.5 border  border-[#c3e7faff] border-solid rounded-[10px] box-border  bg-[rgba(227,241,244,1)]">
                           <div className=" flex flex-row justify-start items-center gap-3.5 w-[100%] h-[100%] box-border">
                             <img
                               src={card.src2}
                               alt="Not Found"
                               className=" w-[50px] h-[100%]"
                             />
                             <div className=" flex flex-col justify-start items-start w-[244px] h-[undefinedundefined] box-border">
                               <p className=" text-[#063248] border-[#063248ff] text-base  leading-[150%]  font-urbanist  font-[600]">
                               {card.authorName}
                               </p>
                               <p className="  border-[#4c606eff] text-sm text-[#4C606E] leading-[150%]  font-urbanist  font-[500]">
                                 {card.date}
                               </p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
            ))}

            <button 
            onClick={handleViewMoreClick}
            className="view-all relative left-[100%] bottom-[45%]">
              {showAll ? "View Less" : "View All"}
              </button>
         
        </div>
    );
}
