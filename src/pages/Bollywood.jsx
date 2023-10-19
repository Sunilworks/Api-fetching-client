import axios from 'axios';
import React, { useEffect } from 'react'

function Bollywood() {
  useEffect(() => {
    axios
      .get("https://blog-api-fetching.onrender.com/api/bollywood")
      .then((res) => console.log(res.data))
      .catch(err => {
       console.log(err.message);
  });
  }, []);
  return (
    <>
    <h1>Bollywood DATA</h1>
    </>
  )
}

export default Bollywood