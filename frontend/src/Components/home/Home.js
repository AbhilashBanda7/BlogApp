import React from 'react'
import {Outlet} from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='Home d-flex flex-column justify-content-center align-items-center ' style={{height:"88vh"}}>
        <h1>
            BLOG
        </h1>
        
        <p className="lead mt-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam aliquid qui velit vel error saepe exercitationem harum iusto, ducimus voluptatibus officiis ipsum accusamus alias quaerat unde! Nemo, deleniti provident.</p>
        
    <Outlet></Outlet>
    </div>
  )
}

export default Home