import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./calendar";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
			<div className="w-96 h-96 border border-black ">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold text-primary1">
						{months[today.month()]} {today.year()}
					</h1>
					<div className="flex gap-3 items-center  ">
						<GrFormPrevious
							className="w-6 h-6 cursor-pointer border border-[#298EA6]  rounded-sm hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						
						<GrFormNext
							className="w-6 h-6 cursor-pointer border border-[#298EA6]  rounded-sm hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>


				<div className="border border-red-600 bg-red-100 rounded-[12px]">
				<div className="grid grid-cols-7  mx-auto border border-black  ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-6 w-6 border border-black grid place-content-center text-[#a1a8ac] select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7  ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className=" text-center  text-primary1  h-8 w-9 border border-black grid place-content-center text-sm "
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-[#c1c8cc]",
											today
												? "bg-[#298EA6] text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-[#298EA6] text-white"
												: "",
											" h-6 w-6 rounded-[8px] grid place-content-center  text-primary1 hover:bg-[#298EA6] hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
				</div>
			</div>
		
	);
}
