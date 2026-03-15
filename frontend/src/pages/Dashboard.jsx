import { useEffect, useState } from "react";
import API from "../services/api";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const getTasks = async () => {

    try {

      const res = await API.get("/tasks");

      setTasks(res.data.tasks);

    } catch (error) {

      console.log(error);

    }
  };

  const createTask = async (taskData) => {

    try {

      if (editingTask) {

        await API.put(`/tasks/${editingTask._id}`, taskData);

        setEditingTask(null);

      } else {

        await API.post("/tasks", taskData);

      }

      getTasks();

    } catch (error) {

      console.log(error);

    }
  };

  const deleteTask = async (id) => {

    await API.delete(`/tasks/${id}`);

    getTasks();

  };

  const editTask = (task) => {

    setEditingTask(task);

  };

  useEffect(() => {

    getTasks();

  }, []);

  return (
    <div className="container">

      <Navbar />

      <h2>Dashboard</h2>

      <TaskForm
        createTask={createTask}
        editingTask={editingTask}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

    </div>
  );
}

export default Dashboard;