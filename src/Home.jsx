import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home(){
    const navigate = useNavigate();

    return(

        <section>
            <div className="header">
                <h1>Breath+</h1>
                <p></p>
            </div>
            <div className='plants'>
                <button onClick={()=>navigate("/plants")}>Plants</button>
            </div>
            <div className="space">
                <button>Cosmic</button>
            </div>
        </section>
        
    )
}

export default Home