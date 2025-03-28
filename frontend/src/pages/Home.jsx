import React, { useEffect  , useState } from 'react';

const Home = () => {

  const [workouts, setWorkouts] = useState([]);
  useEffect(()=>{

    const fetchWorkouts = async () => { 
      const response = await fetch('/api/workouts');
      const data = await response.json();
      if(response.ok){
        setWorkouts(data);
      }
      
      
    }
    fetchWorkouts()
  }, [])
  return (
    <div>
      <div>
        {
          workouts && workouts.map((workout) => (
            <p key={workout._id}>{ workout.title}</p>
         ))
        }
      </div>
    </div>
  )
}

export default Home
