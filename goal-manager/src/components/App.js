import React from "react";
import GoalContainer from "./GoalContainer";
import NewGoalForm from "./NewGoalForm";
import Navbar from "./Navbar";
import Goal from "./Goal";


function App() {
  const [form, setForm] = React.useState(true);
  
  return (
    <div className="app">
      <div>
      <Navbar/>
      </div>
      <div className="sidebar">
        <button onClick={() => setForm(!form)}>{form ? "hide new goal form" : "Show new goal form"}</button>
        {form && <div> <NewGoalForm /></div>}
      </div>
      <GoalContainer/>
    </div>
  );
  }

export default App;

