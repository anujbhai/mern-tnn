const WorkoutDetails = props => {
  const {workout} = props;

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.load}</p>
      <p>{workout.createdAt}</p>  
    </div>
  );
};

export default WorkoutDetails;

