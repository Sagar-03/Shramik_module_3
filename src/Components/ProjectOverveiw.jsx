import React, { useState } from "react";
import { MoreHorizontal, MessageSquare, X } from "lucide-react";

const ProjectOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "",
    tag: ""
  });

  const [columns, setColumns] = useState({
    todo: {
      title: "TO DO",
      items: [
        {
          id: 1,
          title: "Survey design",
          tag: "Research",
          tagColor: "bg-purple-100 text-purple-600",
          priority: "Medium priority",
          priorityColor: "text-orange-500",
          bgColor: "bg-purple-50",
          assignees: ["/api/placeholder/24/24", "/api/placeholder/24/24"]
        },
        {
          id: 2,
          title: "SWOT analysis",
          tag: "Strategy",
          tagColor: "bg-green-100 text-green-600",
          priority: "High priority",
          priorityColor: "text-pink-500",
          bgColor: "bg-green-50",
          assignees: ["/api/placeholder/24/24"]
        },
        {
          id: 3,
          title: "Structure design",
          tag: "Operations",
          tagColor: "bg-orange-100 text-orange-600",
          priority: "Low priority",
          priorityColor: "text-green-500",
          bgColor: "bg-yellow-50",
          assignees: ["/api/placeholder/24/24", "/api/placeholder/24/24", "/api/placeholder/24/24"]
        }
      ]
    },
    inProgress: {
      title: "IN PROGRESS",
      items: [
        {
          id: 4,
          title: "Focus group #5",
          tag: "Research",
          tagColor: "bg-blue-100 text-blue-600",
          priority: "High priority",
          priorityColor: "text-pink-500",
          bgColor: "bg-blue-50",
          assignees: ["/api/placeholder/24/24", "/api/placeholder/24/24"]
        },
        {
          id: 5,
          title: "Surveys set-up",
          tag: "Strategy",
          tagColor: "bg-purple-100 text-purple-600",
          priority: "Medium priority",
          priorityColor: "text-orange-500",
          bgColor: "bg-purple-50",
          assignees: ["/api/placeholder/24/24", "/api/placeholder/24/24", "/api/placeholder/24/24"]
        },
        {
          id: 6,
          title: "Weekly round-up",
          tag: "Operations",
          tagColor: "bg-orange-100 text-orange-600",
          priority: "High priority",
          priorityColor: "text-pink-500",
          bgColor: "bg-orange-50",
          assignees: ["/api/placeholder/24/24", "/api/placeholder/24/24"]
        }
      ]
    },
    done: {
      title: "DONE",
      items: [
        {
          id: 7,
          title: "Focus group #3",
          tag: "Research",
          tagColor: "bg-blue-100 text-blue-600",
          priority: "High priority",
          priorityColor: "text-pink-500",
          bgColor: "bg-blue-50",
          assignees: ["/api/placeholder/24/24"]
        },
        {
          id: 8,
          title: "Q2 results analysis",
          tag: "Insights",
          tagColor: "bg-yellow-100 text-yellow-600",
          priority: "Low priority",
          priorityColor: "text-green-500",
          bgColor: "bg-blue-50",
          assignees: ["/api/placeholder/24/24"]
        }
      ]
    }
  });

  const handleAddTask = () => {
    if (!newTask.title) return;

    const newTaskData = {
      id: Date.now(),
      title: newTask.title,
      tag: newTask.tag || "Research",
      tagColor: "bg-purple-100 text-purple-600",
      priority: newTask.priority || "Medium priority",
      priorityColor: "text-orange-500",
      bgColor: "bg-purple-50",
      assignees: ["/api/placeholder/24/24"]
    };

    setColumns(prev => ({
      ...prev,
      todo: {
        ...prev.todo,
        items: [...prev.todo.items, newTaskData]
      }
    }));

    setIsModalOpen(false);
    setNewTask({ title: "", priority: "", tag: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Project overview / Market research 2024 / Kanban view
        </h1>
        <img
          src="/api/placeholder/40/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="bg-white rounded-xl p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              {column.title}
            </h2>
            <div className="space-y-3">
              {column.items.map((item) => (
                <div key={item.id} className={`p-3 rounded-lg ${item.bgColor}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${item.tagColor}`}>
                      #{item.tag}
                    </span>
                    <span className={`text-xs ${item.priorityColor}`}>
                      {item.priority}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {item.assignees.map((assignee, idx) => (
                        <img
                          key={idx}
                          src={assignee}
                          alt={`Assignee ${idx + 1}`}
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2 text-sm text-gray-500 hover:text-gray-700"
              >
                + Add task
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[480px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Task</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Task Title"
              className="w-full border rounded-lg p-2 mb-4"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />

            <select
              className="w-full border rounded-lg p-2 mb-4"
              value={newTask.tag}
              onChange={(e) => setNewTask({ ...newTask, tag: e.target.value })}
            >
              <option value="">Select Tag</option>
              <option value="Research">Research</option>
              <option value="Strategy">Strategy</option>
              <option value="Operations">Operations</option>
              <option value="Insights">Insights</option>
            </select>

            <select
              className="w-full border rounded-lg p-2 mb-4"
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="">Select Priority</option>
              <option value="High priority">High Priority</option>
              <option value="Medium priority">Medium Priority</option>
              <option value="Low priority">Low Priority</option>
            </select>

            <button
              onClick={handleAddTask}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;