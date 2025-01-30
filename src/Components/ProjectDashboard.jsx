import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChevronDown, Users, MoreHorizontal } from 'lucide-react';

const ProjectDashboard = () => {
  const workingHoursData = [
    { day: 'Mon', hours: 6 },
    { day: 'Tue', hours: 7 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 7 },
    { day: 'Fri', hours: 4 },
    { day: 'Sat', hours: 3 },
    { day: 'Sun', hours: 2 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 2000, type: 'primary' },
    { month: 'Feb', revenue: 3000, type: 'secondary' },
    { month: 'Mar', revenue: 4000, type: 'primary' },
    { month: 'Apr', revenue: 3500, type: 'secondary' },
    { month: 'May', revenue: 3800, type: 'primary' },
    { month: 'Jun', revenue: 3200, type: 'secondary' },
    { month: 'Jul', revenue: 4000, type: 'primary' },
    { month: 'Aug', revenue: 2800, type: 'secondary' },
    { month: 'Sep', revenue: 3500, type: 'primary' },
    { month: 'Oct', revenue: 3000, type: 'secondary' },
    { month: 'Nov', revenue: 4000, type: 'primary' },
    { month: 'Dec', revenue: 3500, type: 'secondary' },
  ];

  const categories = [
    { name: 'Research', color: 'bg-orange-50', icon: '📊' },
    { name: 'Marketing', color: 'bg-blue-50', icon: '📱' },
    { name: 'Operations', color: 'bg-yellow-50', icon: '⚙️' },
    { name: 'Customers', color: 'bg-green-50', icon: '😊' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Report</h1>
        <img
          src="/api/placeholder/40/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Projects */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600">Total projects</h3>
            <span className="text-orange-500 bg-orange-50 p-2 rounded-lg">📊</span>
          </div>
          <p className="text-3xl font-bold mb-4">182</p>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-sm font-medium">
            Add new project
          </button>
        </div>

        {/* Team Size */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600">Team size</h3>
            <div className="bg-emerald-50 p-2 rounded-lg">
              <Users className="text-emerald-500 w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold mb-4">14</p>
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-sm font-medium">
            Add new members
          </button>
        </div>

        {/* Working Hours Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-gray-600 mb-1">Total working hours</h3>
              <p className="text-2xl font-bold">37 hours</p>
              <p className="text-sm text-orange-500">Avg. 148h/month</p>
            </div>
            <button className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
              Week <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
          <BarChart width={300} height={180} data={workingHoursData} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar dataKey="hours" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </div>
      </div>

      {/* Project Progress */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
        <h3 className="text-gray-600 mb-6">Project progress</h3>
        <div className="space-y-6">
          <div className="flex items-center">
            <span className="w-24 text-sm text-gray-500">February</span>
            <div className="flex-1 flex gap-1">
              <div className="h-2 rounded-full bg-orange-200 w-1/3" />
              <div className="h-2 rounded-full bg-blue-200 w-1/4" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-24 text-sm text-gray-500">March</span>
            <div className="flex-1 flex gap-1">
              <div className="h-2 rounded-full bg-green-200 w-1/2" />
              <div className="h-2 rounded-full bg-yellow-200 w-1/4" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-24 text-sm text-gray-500">April</span>
            <div className="flex-1 flex gap-1">
              <div className="h-2 rounded-full bg-purple-200 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Project Categories */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-600">Project categories</h3>
            <button className="text-sm text-gray-500 flex items-center">
              See more <MoreHorizontal className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.color} rounded-xl p-4 text-center`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className="text-sm font-medium text-gray-700">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-gray-600 mb-1">Project revenue</h3>
              <p className="text-2xl font-bold">+ $12,856.14</p>
              <p className="text-sm text-emerald-500">Avg. $5,000/month</p>
            </div>
            <button className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
              Year <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
          <BarChart width={400} height={180} data={revenueData} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar
              dataKey="revenue"
              fill={(d) => (d.type === 'primary' ? '#10b981' : '#8b5cf6')}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;