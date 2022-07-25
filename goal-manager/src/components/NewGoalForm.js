import React, {useState} from "react";

function NewGoalForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  function handleSubmit(event) {
    const formData = {
      title: title,
      content: content,
    };
    console.log(formData);
    event.preventDefault();
    fetch('', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });}

  return (
    <form onSubmit={handleSubmit} className="new-goal-form">
      <input value={title}
        onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content}
        onChange={(e) => setContent(e.target.value)} placeholder="Write your Goals here..." rows={15} cols={50}/>
      <input type="submit" value="Share your Goals" />
    </form>
  );
}

export default NewGoalForm;