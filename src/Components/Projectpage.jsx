import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Projectpage = () => {
  const calendarDays = [
    { date: 27, day: 'SUN', prevMonth: true },
    { date: 28, day: 'MON', prevMonth: true },
    { date: 29, day: 'TUE', prevMonth: true },
    { date: 30, day: 'WED', prevMonth: true },
    { date: 31, day: 'THU', prevMonth: true },
    { date: 1, day: 'FRI' },
    { date: 2, day: 'SAT' },
    { date: 3, day: 'SUN' },
    { date: 4, day: 'MON' },
    { date: 5, day: 'TUE' },
    { date: 6, day: 'WED' },
    { date: 7, day: 'THU' },
    { date: 8, day: 'FRI' },
    { date: 9, day: 'SAT' },
    { date: 10, day: 'SUN' },
    { date: 11, day: 'MON' },
    { date: 12, day: 'TUE' },
    { date: 13, day: 'WED' },
    { date: 14, day: 'THU' },
    { date: 15, day: 'FRI' },
    { date: 16, day: 'SAT' },
    { date: 17, day: 'SUN' },
    { date: 18, day: 'MON' },
    { date: 19, day: 'TUE' },
    { date: 20, day: 'WED' },
    { date: 21, day: 'THU' },
    { date: 22, day: 'FRI' },
    { date: 23, day: 'SAT' },
    { date: 24, day: 'SUN' },
    { date: 25, day: 'MON' },
    { date: 26, day: 'TUE' },
    { date: 27, day: 'WED' },
    { date: 28, day: 'THU' },
    { date: 29, day: 'FRI' },
    { date: 30, day: 'SAT' },
  ];

  const progressData = [
    {
      task: 'Resources check',
      timeline: [
        { month: 'January', color: 'bg-orange-200', width: 'w-full' },
      ],
    },
    {
      task: 'Participants',
      timeline: [
        { month: 'February', color: 'bg-blue-200', width: 'w-full' },
      ],
    },
    {
      task: 'SWOT analysis',
      timeline: [
        { month: 'March', color: 'bg-emerald-200', width: 'w-4/5' },
      ],
    },
    {
      task: 'Design research',
      timeline: [
        { month: 'April', color: 'bg-yellow-200', width: 'w-1/4' },
        { month: 'May', color: 'bg-purple-200', width: 'w-full' },
      ],
    },
  ];

  const teamMembers = [
    {
      name: 'Dana R.',
      role: 'Project manager',
      image: '/api/placeholder/48/48',
      tasks: [
        { name: 'Research check-in', due: 'Today', status: 'Not started', priority: 'High priority' },
        { name: 'Survey design', due: 'Tomorrow', status: 'In progress', priority: 'Medium priority' },
        { name: 'Idea sprint', due: 'Friday', status: 'In progress', priority: 'High priority' },
      ],
    },
    {
      name: 'Elon S.',
      role: 'Key account planner',
      image: '/api/placeholder/48/48',
      tasks: [
        { name: 'Market analysis', due: 'Today', status: 'Not started', priority: 'High priority' },
        { name: 'Surveys evaluation', due: 'Thursday', status: 'In progress', priority: 'Medium priority' },
        { name: 'B2B Research', due: 'Friday', status: 'Paused', priority: 'Low priority' },
      ],
    },
    {
      name: 'Nancy W.',
      role: 'Account manager',
      image: '/api/placeholder/48/48',
    },
    {
      name: 'James M.',
      role: 'Digital manager',
      image: '/api/placeholder/48/48',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Project overview / <span className="text-blue-900">Market research 2024</span>
        </h1>
        <img
          src="/api/placeholder/40/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Calendar Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-900">April 2022</h2>
            <div className="flex gap-1">
              <button className="p-1 rounded hover:bg-gray-100">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
              <div key={day} className="text-xs text-gray-500 text-center py-2">
                {day}
              </div>
            ))}
            {calendarDays.map((date, index) => (
              <button
                key={index}
                className={`text-sm p-2 rounded-lg text-center
                  ${date.prevMonth ? 'text-gray-400' : 'text-gray-700'}
                  hover:bg-gray-50`}
              >
                {date.date}
              </button>
            ))}
          </div>
        </div>

        {/* Project Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-medium text-gray-900 mb-4">Project progress</h2>
          <div className="space-y-6">
            <div className="flex text-xs text-gray-500 mb-2">
              {['January', 'February', 'March', 'April', 'May', 'June'].map((month) => (
                <div key={month} className="flex-1">{month}</div>
              ))}
            </div>
            {progressData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-sm text-gray-700">{item.task}</div>
                <div className="flex gap-1">
                  {item.timeline.map((period, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full ${period.color} ${period.width}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Directory */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-medium text-gray-900">Team directory</h2>
            <button className="text-sm text-gray-500 flex items-center">
              See more <MoreHorizontal className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task by User */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-medium text-gray-900 mb-6">Task by user</h2>
          <div className="space-y-6">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.name} className="space-y-4">
                <div className="flex items-center gap-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {member.name}'s responsibilities
                  </span>
                </div>
                <div className="space-y-3">
                  {member.tasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                        <span>{task.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`
                          px-2 py-1 rounded-full text-xs
                          ${task.due === 'Today' ? 'text-pink-500' :
                            task.due === 'Tomorrow' ? 'text-purple-500' : 'text-gray-500'}
                        `}>
                          {task.due}
                        </span>
                        <span className={`
                          px-2 py-1 rounded-full text-xs
                          ${task.status === 'Not started' ? 'bg-purple-100 text-purple-500' :
                            task.status === 'In progress' ? 'bg-blue-100 text-blue-500' :
                            'bg-gray-100 text-gray-500'}
                        `}>
                          {task.status}
                        </span>
                        <span className={`
                          px-2 py-1 rounded-full text-xs
                          ${task.priority === 'High priority' ? 'bg-pink-100 text-pink-500' :
                            task.priority === 'Medium priority' ? 'bg-orange-100 text-orange-500' :
                            'bg-green-100 text-green-500'}
                        `}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;