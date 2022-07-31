import React from "react";
import GoalContainer from "./GoalContainer";
import NewGoalForm from "./NewGoalForm";
import Navbar from "./Navbar";
import Goal from "./Goal";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const [form, setForm] = React.useState(true);
  
  return (
    <div className="app">
      <Router>
       <div>
        <Navbar/>
       </div>
       <div className="sidebar">
        <button onClick={() => setForm(!form)}>{form ? "hide new goal form" : "Show new goal form"}</button>
      </div>
       <Routes>
         <Route exact path="/" element={<GoalContainer/>}></Route>
         <Route exact path="/post" element={form && <div> <NewGoalForm/></div>}></Route>
       </Routes>
      </Router>
      
    </div>
    
  );
  }

export default App;


