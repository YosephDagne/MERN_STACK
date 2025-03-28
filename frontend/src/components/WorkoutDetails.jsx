import React from "react";

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="bg-white rounded-[4px] m-5 mx-auto p-5 relative shadow-md">
      <h4 className="mt-0 mb-2 text-xl text-teal-500">{workout.title}</h4>
      <p className="text-sm m-0 text-gray-600">
        <strong>Load(kg):</strong>
        {workout.load}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Repetitions:</strong>
        {workout.repetitions}
      </p>
      <p className="text-sm text-gray-600">{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
