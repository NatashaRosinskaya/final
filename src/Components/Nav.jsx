import React from 'react'
import { NavLink } from 'react-router-dom'

const  Nav = () =>{
    return(
        <nav>
            <NavLink to='/'>                
            </NavLink>

            <NavLink to='/catalog'>                
            </NavLink>

            <NavLink to='/about__company'>                
            </NavLink>

            <NavLink to='/certificates'>                
            </NavLink>

            <NavLink to='/vacancy'>                
            </NavLink>
            
            <NavLink to='/payment'>                
            </NavLink>
            
            <NavLink to='/delivery'>                
            </NavLink>

            <NavLink to='/cart'>                
            </NavLink>

            <NavLink to='/product/:id'>                
            </NavLink>
        </nav>
    )
}
export default Nav