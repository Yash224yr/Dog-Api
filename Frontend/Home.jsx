import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [image, setImage] = useState("")
   


    function getImage() {
        axios.get("http://localhost:3000/random")
            .then((result) => {
                setImage(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className='wrapper'>
            <div className='random-image'>
                {
                    image ?
                        <div className='dog'><img src={image}></img></div>
                        : " "
                }
                <div className='select'>
                    <Link onClick={()=>{getImage()}}>Get Random Image</Link>
                    <Link to="/breed">Search By Breed</Link>
                </div>
            </div>


        </div>
    )
}

export default Home