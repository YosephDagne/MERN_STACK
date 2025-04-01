import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { img_data } from "../assets/img_data.js";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };

  return (
    <div className="bg-white rounded-[4px] m-5 mx-auto p-5 relative shadow-md flex justify-between items-center">
      <div>
        <h4 className="mt-0 mb-2 text-xl text-teal-500">{workout.title}</h4>
        <p className="text-sm m-0 text-gray-600">
          <strong>Load(kg):</strong> {workout.load}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Repetitions:</strong> {workout.repetitions}
        </p>
        <p className="text-sm text-gray-600">{workout.createdAt}</p>
      </div>

      {/* Delete Button pushed to the right */}
      <button
        onClick={handleClick}
        className="p-2 rounded-full bg-gray-200 hover:bg-red-400 transition duration-500 shadow-md hover:shadow-lg cursor-pointer hover:border-[1px]"
        aria-label="Delete workout"
      >
        <img
          className="w-6 h-6 object-contain"
          src={img_data.image}
          alt="Delete"
        />
      </button>
    </div>
  );
};

export default WorkoutDetails;
