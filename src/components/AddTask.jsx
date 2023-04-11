import { useState } from "react";
import axios from "axios";

const API_URL = "import.meta.env.VITE_API_URL";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { projectId } = props;

    const data = { title, description, projectId };
    axios
      .post(API_URL + "/api/tasks", data)
      .then((res) => {
        setTitle("");
        setDescription("");
        props.refreshProject();
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default AddTask;
