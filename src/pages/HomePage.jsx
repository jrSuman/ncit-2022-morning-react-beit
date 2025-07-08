// import { useState } from 'react'
import { useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../components/Button";
// import './App.css'

function HomePage() {
  //  funcion
  // function handleClick(){

  // }

  // let count = 1;
  const [count, setCount] = useState(1);

  // arrow function
  const handleClick = () => {
    console.log("called", count);
    setCount(count + 1);
    console.log("updated", count);
  };

  return (
    <div className="grid gap-2">
      <h1 className="text-red-500">Hello Developers {count}</h1>
      <button onClick={handleClick}>Click me</button>
      <button>Go to about page</button>
      {/* <NavLink>about page</NavLink> */}
      <br />
      <a href="http://localhost:5175/about">about page href</a> <br />
      <NavLink to="/about">about page nav link</NavLink>
      <br />
      <Link to="/about">about page 2 link</Link>

      {/* childrens */}
      <Button >Primary Button</Button>
      <Button>
        <div className="flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>

          <span>Edit icon</span>
        </div>
      </Button>

      {/* Conditional Rendering */}
      <Button outline={true}>Outline Button</Button>
      <Button outline>Outline Button</Button>

      <Button secondary>Outline Button</Button>
    </div>
  );
}

export default HomePage;
