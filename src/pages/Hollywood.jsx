import axios from 'axios';
import React, { useEffect } from 'react'

function Hollywood() {
  useEffect(() => {
    axios
      .get("https://blog-api-fetching.onrender.com/api/hollywood")
      .then((res) => console.log(res.data))
      .catch(err => {
       console.log(err.message);
  });
  }, []);
  return (
    <>
    <h1>Hollywood DATA</h1>
    </>
  )
}

export default Hollywood