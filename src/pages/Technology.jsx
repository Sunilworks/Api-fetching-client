import axios from 'axios';
import React, { useEffect } from 'react'

function Technology() {
  useEffect(() => {
    axios
      .get("https://blog-api-fetching.onrender.com/api/technology")
      .then((res) => console.log(res.json))
      .catch(err => {
       console.log(err.message);
  });
  }, []);
  return (
    <>
    <h1>Technology DATA</h1>
    </>
  )
}

export default Technology