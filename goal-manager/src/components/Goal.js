import React from "react";

function Goal({pTitle, pContent}) {
  const [done, setRead] = React.useState(true);

  return (
    <div>
      <h3>{pTitle}</h3>
 
      <p>{pContent}</p>
      <button onClick={() => setRead(!done)}> {done ? "Mark As Undone" : "Mark As Done"}</button>
    </div>
  );
}

export default Goal;