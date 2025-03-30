import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/workouts`
      );

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 p-6 max-w-6xl mx-auto">
      {/* Workout List Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col min-h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Workouts</h2>
        <div className="space-y-4 flex-1">
          {workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
      </div>

      {/* Workout Form Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col min-h-full">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
