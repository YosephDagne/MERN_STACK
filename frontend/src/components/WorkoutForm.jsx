import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, repetitions };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/workouts`,
        {
          method: "POST",
          body: JSON.stringify(workout),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to create workout");
        return;
      }

      // Reset form after successful submission
      setTitle("");
      setLoad("");
      setRepetitions("");
      setError(null);
      console.log("New workout created:", data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white/30 backdrop-blur-lg shadow-2xl rounded-lg p-8 mt-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add a New Workout
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold text-lg">
            Exercise Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
            placeholder="Enter exercise title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold text-lg">
            Load (kg):
          </label>
          <input
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
            placeholder="Enter weight in kg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold text-lg">
            Repetitions:
          </label>
          <input
            type="number"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg"
            placeholder="Enter number of repetitions"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-bold rounded-md bg-gradient-to-r from-green-500 to-blue-700 hover:from-blue-600 hover:to-green-800 transition-all shadow-lg text-lg cursor-pointer"
        >
          Add Workout
        </button>

        {error && (
          <div className="bg-red-100 text-red-800 p-3 text-center font-semibold border border-red-300 rounded-md mt-4 text-lg">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default WorkoutForm;
