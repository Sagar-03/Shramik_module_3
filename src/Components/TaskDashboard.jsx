import React from 'react';

const TaskDashboard = () => {
  const tasks = {
    today: [
      {
        title: 'Finish monthly reporting',
        dueDate: 'Today',
        status: 'In progress',
        priority: 'High priority',
        department: 'Marketing Q2',
        assignees: ['/api/placeholder/24/24']
      },
      {
        title: 'Contract signing',
        dueDate: 'Today',
        status: 'In progress',
        priority: 'Medium priority',
        department: 'Operations',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24']
      },
      {
        title: 'Market overview keynote',
        dueDate: 'Today',
        status: 'In progress',
        priority: 'High priority',
        department: 'Customer Care',
        assignees: ['/api/placeholder/24/24']
      }
    ],
    tomorrow: [
      {
        title: 'Brand proposal',
        dueDate: 'Tomorrow',
        status: 'Not started',
        priority: 'High priority',
        department: 'Marketing Q2',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24']
      },
      {
        title: 'Social media review',
        dueDate: 'Tomorrow',
        status: 'In progress',
        priority: 'Medium priority',
        department: 'Operations',
        assignees: ['/api/placeholder/24/24']
      },
      {
        title: 'Report - Week 30',
        dueDate: 'Tomorrow',
        status: 'Not started',
        priority: 'Low priority',
        department: 'Operations',
        assignees: ['/api/placeholder/24/24']
      }
    ],
    thisWeek: [
      {
        title: 'Order check-ins',
        dueDate: 'Wednesday',
        status: 'Not started',
        priority: 'Medium priority',
        department: 'Retail',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24']
      },
      {
        title: 'HR reviews',
        dueDate: 'Wednesday',
        status: 'In progress',
        priority: 'Medium priority',
        department: 'People',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24']
      },
      {
        title: 'Plug-in implementations',
        dueDate: 'Friday',
        status: 'In progress',
        priority: 'Low priority',
        department: 'Development',
        assignees: ['/api/placeholder/24/24']
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-cyan-50 text-cyan-700';
      case 'not started':
        return 'bg-purple-50 text-purple-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high priority':
        return 'bg-pink-50 text-pink-700';
      case 'medium priority':
        return 'bg-orange-50 text-orange-700';
      case 'low priority':
        return 'bg-green-50 text-green-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const TaskSection = ({ title, tasks }) => (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg">
            <input 
              type="checkbox" 
              className="w-5 h-5 border-2 border-gray-300 rounded-full"
            />
            <div className="flex-1 flex items-center justify-between">
              <span className="text-gray-900">{task.title}</span>
              
              <div className="flex items-center gap-3">
                <span className="text-pink-500 min-w-16">
                  {task.dueDate}
                </span>
                
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
                
                <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                
                <span className="text-gray-600 min-w-24">
                  {task.department}
                </span>
                
                <div className="flex -space-x-2">
                  {task.assignees.map((assignee, idx) => (
                    <img
                      key={idx}
                      src={assignee}
                      alt={`Assignee ${idx + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My tasks</h1>
          <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>

        <div className="space-y-6">
          <TaskSection title="Today" tasks={tasks.today} />
          <TaskSection title="Tomorrow" tasks={tasks.tomorrow} />
          <TaskSection title="This week" tasks={tasks.thisWeek} />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;