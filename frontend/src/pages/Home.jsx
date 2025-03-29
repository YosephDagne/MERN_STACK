import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/workouts`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }
        const data = await response.json();
        setWorkouts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 p-6 max-w-6xl mx-auto">
      {/* Workout List Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col min-h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Workouts</h2>

        {loading && <p className="text-gray-600">Loading workouts...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && workouts.length === 0 && <p>No workouts found.</p>}

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
