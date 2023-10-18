import axios from 'axios';
import React, { useEffect } from 'react'

function Food() {
  useEffect(() => {
    axios
      .get("http://localhost:4500/api/food")
      .then((res) => console.log(res.json))
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