import { useState } from "react";

const WorkoutForm = props => {
  const {} = props;

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(0);
  const [reps, setReps] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {title, load, reps};

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/workouts/`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error); 
    }
    if (response.ok) {
      setTitle("");
      setLoad(0);
      setReps(0);
      setError(null);

      console.log("new workout added: ", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label>Exercise Title:</label> 
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
      /> 

      <label>Load (in Kg):</label> 
      <input
        type="number"
        onChange={e => setLoad(e.target.value)}
        value={load}
      /> 

      <label>Reps</label> 
      <input
        type="text"
        onChange={e => setReps(e.target.value)}
        value={reps}
      /> 

      <button>Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;

