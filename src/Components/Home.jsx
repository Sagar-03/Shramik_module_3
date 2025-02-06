import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home, Calendar, Users, ChartPie, Settings, LogOut, Plus, Trash2, PenSquare, X, Send, Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';

// Import your components
import ProjectDashboard from './ProjectDashboard'; // Replace with your actual component
import CalendarView from './Calendar'; // Replace with your actual component
import TeamView from './ProjectOverveiw'; // Replace with your actual component
import SettingsView from './Projectpage'; // Replace with your actual component
import Payroll from './Payroll';


const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish monthly reporting', dueDate: 'Today', completed: false },
    { id: 2, title: 'Report signing', dueDate: 'Today', completed: false },
    { id: 3, title: 'Market overview keynote', dueDate: 'Today', completed: false }
  ]);

  // Projects State
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: 'Market research 2024', 
      members: [
        { id: 1, avatar: '/api/placeholder/24/24', name: 'Member 1' },
        { id: 2, avatar: '/api/placeholder/24/24', name: 'Member 2' }
      ]
    },
    { 
      id: 2, 
      name: 'New proposals', 
      members: [
        { id: 3, avatar: '/api/placeholder/24/24', name: 'Member 3' }
      ]
    },
    { 
      id: 3, 
      name: 'Brand sprints', 
      members: [
        { id: 4, avatar: '/api/placeholder/24/24', name: 'Member 4' },
        { id: 5, avatar: '/api/placeholder/24/24', name: 'Member 5' }
      ]
    }
  ]);

  // Comments State
  const [comments] = useState([
    {
      id: 1,
      author: 'Elon S.',
      avatar: '/api/placeholder/32/32',
      text: 'Find my keynote attached in the...',
      project: 'Market research 2024'
    },
    {
      id: 2,
      author: 'Dana R.',
      avatar: '/api/placeholder/32/32',
      text: "I've added some new data. Let's...",
      project: 'Market research 2024'
    }
  ]);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Calendar calculations
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Handle task completion
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle adding new project
  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: 'New Project',
      members: []
    };
    setProjects([...projects, newProject]);
  };

  // Filter projects based on search
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTaskPopup = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-6 w-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-3">
            <Trash2 className="w-5 h-5 text-gray-400 cursor-pointer" />
            <PenSquare className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          <X 
            className="w-5 h-5 text-gray-400 cursor-pointer" 
            onClick={() => setShowPopup(false)}
          />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-6">New task #1</h2>

        {/* Task Form */}
        <div className="space-y-4">
          {/* Assignee */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Assignee</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              <span className="text-gray-400">-</span>
            </div>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Status</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              Not started
            </span>
          </div>

          {/* Project */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Project</span>
            <button className="flex items-center space-x-2 text-gray-500">
              <span>Choose project</span>
              <ChartPie className="w-4 h-4" />
            </button>
          </div>

          {/* Due date */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Due date</span>
            <button className="flex items-center space-x-2 text-gray-500">
              <span>Select date</span>
              <CalendarIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Priority */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Priority</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              Low priority
            </span>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <span className="text-gray-600">Description</span>
            <textarea 
              className="w-full h-24 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add description..."
            />
          </div>

          {/* Subtasks */}
          <div className="space-y-2">
            <span className="text-gray-600">Subtasks</span>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 border-gray-300 rounded"
              />
              <input 
                type="text"
                placeholder="Add a subtask"
                className="flex-1 p-2 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-2">
            <span className="text-gray-600">Comments</span>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">No comments yet.</span>
                <Send className="w-5 h-5 text-blue-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div >
    {/* Left Sidebar */}
    <div className="fixed left-0 top-0 h-full w-16 bg-[#1a2233] flex flex-col items-center py-8">
      {/* Navigation Icons - Increased spacing from space-y-5 to space-y-8 */}
      <div className="space-y-8 ">
        <Link to="/">
          <Home className="w-6 h-6 mt-8 text-white hover:text-gray-300 cursor-pointer" />
        </Link>
        <Link to="/calendar">
          <Calendar className="w-6 h-6 mt-8 text-white hover:text-gray-300 cursor-pointer" />
        </Link>
        <Link to="/team">
          <Users className="w-6 h-6 mt-8 text-white hover:text-gray-300 cursor-pointer" />
        </Link>
        <Link to="/reports">
          <ChartPie className="w-6 h-6 mt-8 text-white hover:text-gray-300 cursor-pointer" />
        </Link>
      
        <Link to="/payroll">
        <CheckCircle className="w-6 h-6 mt-8 text-white hover:text-gray-300 cursor-pointer" />
         </Link>

        
        <button 
          onClick={() => setShowPopup(true)}
          className="w-8 h-8 rounded-lg mt-8 bg-white/10 flex items-center justify-center hover:bg-white/20"
        >
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
      
      {/* Bottom Icons */}
      <div className="mt-auto space-y-8">
        <Link to="/settings">
          <Settings className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
        </Link>
        <LogOut className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
      </div>
    </div>

      {/* Popup */}
      {showPopup && renderTaskPopup()}

      {/* Main Content */}
      <div className="ml-16 p-8">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/reports" element={<ProjectDashboard />} />
        
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </div>
    </div>
  );
};

// Placeholder components (replace with your actual components)
const HomeContent = () => (
  <div>
    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome, Juliana!</h1>
        <p className="text-gray-600">Here is your agenda for today</p>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
        <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>

    {/* Calendar and Tasks Grid */}
    <div className="grid grid-cols-2 gap-8">
      {/* Calendar Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{format(new Date(), 'MMMM yyyy')}</h2>
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <div key={day} className="text-xs font-medium text-gray-500">{day}</div>
          ))}
          {eachDayOfInterval({ start: startOfMonth(new Date()), end: endOfMonth(new Date()) }).map((day, i) => (
            <div
              key={i}
              className={`py-2 text-sm cursor-pointer hover:bg-gray-100 rounded-full
                ${isSameDay(day, new Date()) ? 'bg-orange-500 text-white' : ''}`}
            >
              {format(day, 'd')}
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Urgent tasks</h2>
        <div className="space-y-4">
          {[
            { id: 1, title: 'Finish monthly reporting', dueDate: 'Today', completed: false },
            { id: 2, title: 'Report signing', dueDate: 'Today', completed: false },
            { id: 3, title: 'Market overview keynote', dueDate: 'Today', completed: false }
          ].map((task) => (
            <div key={task.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 border-2 rounded-full mr-3 cursor-pointer
                    ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                ></div>
                <span className={`text-gray-700 ${task.completed ? 'line-through' : ''}`}>
                  {task.title}
                </span>
              </div>
              <span className="text-pink-500 text-sm">{task.dueDate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Grid */}
    <div className="grid grid-cols-3 gap-8 mt-8">
      {/* Project Directory */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Project directory</h2>
        <div className="space-y-4">
          {[
            { id: 1, name: 'Market research 2024', members: [{ id: 1, avatar: '/api/placeholder/24/24', name: 'Member 1' }, { id: 2, avatar: '/api/placeholder/24/24', name: 'Member 2' }] },
            { id: 2, name: 'New proposals', members: [{ id: 3, avatar: '/api/placeholder/24/24', name: 'Member 3' }] },
            { id: 3, name: 'Brand sprints', members: [{ id: 4, avatar: '/api/placeholder/24/24', name: 'Member 4' }, { id: 5, avatar: '/api/placeholder/24/24', name: 'Member 5' }] }
          ].map((project) => (
            <div key={project.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">{project.name}</span>
              </div>
              <div className="flex -space-x-2">
                {project.members.map((member) => (
                  <img
                    key={member.id}
                    src={member.avatar}
                    alt={member.name}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 text-gray-600 border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
          + Add more
        </button>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">New comments</h2>
        <div className="space-y-4">
          {[
            { id: 1, author: 'Elon S.', avatar: '/api/placeholder/32/32', text: 'Find my keynote attached in the...', project: 'Market research 2024' },
            { id: 2, author: 'Dana R.', avatar: '/api/placeholder/32/32', text: "I've added some new data. Let's...", project: 'Market research 2024' }
          ].map((comment) => (
            <div key={comment.id} className="flex items-start space-x-3">
              <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">{comment.author} <span className="text-gray-500">in {comment.project}</span></p>
                <p className="text-sm text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Directory */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Team directory</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Dana R.', role: 'Project Manager' },
            { name: 'Elon S.', role: 'Key Account Plann.' },
            { name: 'Nancy W.', role: 'Account Manager' },
            { name: 'James M.', role: 'Digital Manager' }
          ].map((member, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img src="/api/placeholder/40/40" alt={member.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );

export default Dashboard;