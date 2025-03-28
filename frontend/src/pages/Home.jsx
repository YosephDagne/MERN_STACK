import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKGROUND_URL}/api/workouts`
      );
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="grid grid-cols[3fr_1fr] gap-20">
      <div>
        <div>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
