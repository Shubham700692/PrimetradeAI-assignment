import { useState, useEffect } from "react";

function TaskForm({ createTask, editingTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    if (editingTask) {

      setTitle(editingTask.title);
      setDescription(editingTask.description);

    }

  }, [editingTask]);

  const handleSubmit = (e) => {

    e.preventDefault();

    createTask({ title, description });

    setTitle("");
    setDescription("");

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>
        {editingTask ? "Update Task" : "Add Task"}
      </button>

    </form>

  );
}

export default TaskForm;