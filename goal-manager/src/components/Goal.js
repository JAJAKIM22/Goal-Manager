import React from "react";

function Goal({pTitle, pContent}) {
  const [done, setDone] = React.useState(true);

  return (
    <div  class="container-fluid">
      <h3>{pTitle}</h3>

      <p>{pContent}</p>
      <button onClick={() => setDone(!done)}> {done ? "Mark As Undone" : "Mark As Done"}</button>
    </div>
  );
}

export default Goal;