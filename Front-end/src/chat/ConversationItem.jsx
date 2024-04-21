import React from 'react'

const ConversationItem = ({active, time, name, message}) => {
    const _class = active ?'bg-[#C3E7FA]' : 'bg-[white]';
    return (
        <div className='border-b  border-[#b5b8bb] py-[13px]  '>
<div className={'  dark:bg-[#E3F1F4] hover:bg-[#c8dbdf]  rounded-xl h-[79px] px-3 py-2 ' + _class} >
                <div className={'flex items-center  gap-[19px] cursor-pointer  '}>
                <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fo47ijrygbe-I66%3A33222%3B783%3A5816?alt=media&token=1fb202b2-3526-4b6f-aa88-c957c0ab39d3"
              alt="Not Found"
              className=" w-[50px] h-[50px] mt-[7px]  "
            />
                    <div className="flex-grow   ">
                        <div className="flex justify-between mb-[8px] items-center  ">
                            <div className="text-[20px] leading-[24px]  font-urbanist text-[#063248] font-[600]">{name}</div>
                            <div className="text-[16px] leading-[19.2px] font-urbanist text-[#4C606E]  font-[500] dark:text-gray-300">{time}</div>
                        </div>
                        <div className="text-[16px] leading-[19.2px] font-urbanist text-[#4C606E]  font-[500]  w-40 truncate">
                        {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConversationItem
