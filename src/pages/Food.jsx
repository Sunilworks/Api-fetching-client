import axios from 'axios';
import React, { useEffect } from 'react'

function Food() {
  useEffect(() => {
    axios
      .get("https://blog-api-fetching.onrender.com/api/food")
      .then((res) => console.log(res.data))
      .catch(err => {
       console.log(err.message);
  });
  }, []);
  return (
    <>
    <h1>Food DATA</h1>
    </>
  )
}

export default Food