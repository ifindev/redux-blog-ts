import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Some Interesting Posts</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
