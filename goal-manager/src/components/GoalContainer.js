import React, {useEffect, useState} from "react";
import Goal from "./Goal";



function GoalsContainer() {
  const [goals, setGoalList] = useState([]);
    useEffect(() => {
    fetch('http://localhost:8004/goals')
    .then(res => res.json())
    .then(goalsData => {
      setGoalList(goalsData)
      });
  }, []);
  

  const goalsCard = goals.map( (goal)=> (<Goal key={goal.id}  pTitle={goal.title} pContent={goal.content} />))

  
  return (
    <div className="goals-container">
     {goalsCard}
    </div>
  );
}

export default GoalsContainer;
