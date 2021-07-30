import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100%',
    padding: '10px',
    background: 'white',
    textDecoration: "none",
    color: "black"
}

const Navigation = () => {
    return (
        <div className='navlink'>
            <NavLink
                to='/'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>HOME</NavLink>

            <NavLink
                to='/about'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>ABOUT</NavLink>


        </div>
    )
}

export default Navigation