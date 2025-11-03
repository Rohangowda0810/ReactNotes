import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Example2() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data); 
        setError(false);
      } catch (err) {
        console.log("Error while fetching the data: " + err);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching API Data using Axios</h1>
      {error && <p>Error while fetching the data. Try again.</p>}
      {!error && data ? (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, index) => (
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.price}</td>
                <td>{ele.description}</td>
                <td>{ele.category}</td>
                <td><img src={ele.image} alt={ele.title} height={100} width={100} /></td>
                <td>{ele.rating.rate}</td>
                <td>{ele.rating.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default Example2;