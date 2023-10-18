import axios from 'axios';
import React, { useEffect } from 'react'

function Fitness() {
  useEffect(() => {
    axios
      .get("http://localhost:4500/api/fitness")
      .then((res) => console.log(res.json))
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