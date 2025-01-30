import React from "react";

const events = [
  { day: "Monday", time: "10:00", title: "Customer review", color: "bg-yellow-200" },
  { day: "Tuesday", time: "9:00", title: "Survey design", color: "bg-orange-200" },
  { day: "Tuesday", time: "11:00", title: "Call preparation", color: "bg-purple-300" },
  { day: "Tuesday", time: "12:00", title: "Sales round-up Q2", color: "bg-blue-300" },
  { day: "Tuesday", time: "13:00", title: "Key account planning", color: "bg-green-300" },
  { day: "Tuesday", time: "15:00", title: "Keynote takeaways", color: "bg-blue-300" },
  { day: "Wednesday", time: "14:00", title: "Code review", color: "bg-yellow-300" },
  { day: "Thursday", time: "10:00", title: "Stakeholders review", color: "bg-green-300" },
  { day: "Thursday", time: "14:00", title: "Data check-in", color: "bg-blue-300" },
  { day: "Friday", time: "14:00", title: "1:1 with Frank", color: "bg-orange-300" },
 

];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const Calendar = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <div className="space-x-2">
          <button className="px-4 py-1 border rounded bg-gray-200">Day</button>
          <button className="px-4 py-1 border rounded bg-blue-500 text-white">Week</button>
          <button className="px-4 py-1 border rounded bg-gray-200">Month</button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-6 mt-4 border border-gray-300 flex-grow">
        {/* Days Header */}
        <div className="p-2 bg-gray-200"></div>
        {days.map((day, index) => (
          <div key={index} className="border-r p-2 text-center font-bold bg-gray-100">
            {day}
          </div>
        ))}

        {/* Time Slots + Events */}
        {times.map((time, index) => (
          <>
            <div key={index} className="border-t p-2 text-gray-500 bg-white">{time}</div>
            {days.map((day, i) => (
              <div key={i} className="border-t border-r h-16 relative bg-white">
                {events
                  .filter(event => event.day === day && event.time === time)
                  .map((event, j) => (
                    <div key={j} className={`absolute left-1 right-1 top-1 px-2 py-1 text-sm text-black rounded ${event.color}`}>
                      {event.title}
                    </div>
                  ))}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
