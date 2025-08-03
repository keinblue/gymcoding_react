import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ul>
        <li>
          <Link to={`/canvases/1`}>Canvas 1</Link>
        </li>
        <li>
          <Link to={`/canvases/2?keyword=canvas#helloWorld`}>Canvas 2</Link>
        </li>
        <li>
          <Link to={`/canvases/3`}>Canvas 3</Link>
        </li>
      </ul>
      <p>Explore our site to learn more!</p>
    </div>
  );
}

export default Home;
import React from 'react';
