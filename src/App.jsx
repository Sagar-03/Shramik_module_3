import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./Components/Home"
import ProjectDashboard from './Components/ProjectDashboard'
import ProjectOverview from './Components/ProjectOverveiw'
import TaskDashboard from './Components/TaskDashboard'
import Calendar from './Components/Calendar'
import Projectpage from './Components/Projectpage'
import Payroll from './Components/Payroll'

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Dashboard component contains the sidebar navigation */}
        <Dashboard />
        
        {/* Main content area with routes */}
        <main className="main-content">
          <Routes>
            {/* Home/Dashboard route */}
            <Route path="/" element={<TaskDashboard />} />
            
            {/* Calendar route */}
            <Route path="/calendar" element={<Calendar />} />
            
            {/* Team/Project Overview route */}
            <Route path="/team" element={<ProjectOverview />} />
            
            {/* Reports/Project Dashboard route */}
            <Route path="/reports" element={<ProjectDashboard />} />
            
            <Route path="/payroll" element={<Payroll />} />
            
            {/* Settings/Project page route */}
            <Route path="/settings" element={<Projectpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App