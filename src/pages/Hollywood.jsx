import axios from 'axios';
import React, { useEffect } from 'react'

function Hollywood() {
  useEffect(() => {
    axios
      .get("http://localhost:4500/api/hollywood")
      .then((res) => console.log(res.json))
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