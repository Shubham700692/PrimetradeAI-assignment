function TaskList({ tasks = [], deleteTask, editTask }) {

  if (!tasks.length) {
    return <p>No tasks yet</p>;
  }

  return (

    <div>

      {tasks.map((task) => (

        <div key={task._id} className="task">

          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button onClick={() => editTask(task)}>
            Edit
          </button>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>

        </div>

      ))}

    </div>

  );
}

export default TaskList;