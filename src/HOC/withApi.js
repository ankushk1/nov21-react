import React, { useEffect, useState } from 'react'

const withApi = (WrappedComonent, type) => () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    const json = await data.json();
    setData(json);
  }; 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <WrappedComonent data={data}/>
    </div>
  )
}

export default withApi