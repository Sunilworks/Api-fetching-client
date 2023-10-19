import axios from 'axios';
import React, { useEffect } from 'react'

function Fitness() {
  useEffect(() => {
    axios
      .get("https://blog-api-fetching.onrender.com/api/fitness")
      .then((res) => console.log(res.data))
      .catch(err => {
       console.log(err.message);
  });
  }, []);
  return (
    <>
    <h1>Fitness DATA</h1>
    </>
  )
}

export default Fitness