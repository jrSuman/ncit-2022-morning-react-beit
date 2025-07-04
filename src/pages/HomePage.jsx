// import { useState } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
// import './App.css'

function HomePage() {

  //  funcion
  // function handleClick(){

  // }

  // let count = 1;
  const [count, setCount] = useState(1)

  // arrow function
  const handleClick = () => {
    console.log('called', count)
    setCount(count+1)
     console.log('updated', count)
  }


  return (
    <>
      <h1 className='text-red-500'>Hello Developers {count}</h1>
      <button onClick={handleClick}>Click me</button>
      <button>Go to about page</button>
      {/* <NavLink>about page</NavLink> */}
      <br />
      <a href="http://localhost:5175/about">about page href</a> <br />
      <NavLink to="/about">about page nav link</NavLink>
<br />
      <Link to="/about">about page 2 link</Link>
    </>
  )
}

export default HomePage
