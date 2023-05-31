import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Breed() {

    const [breedlist, setBreedlist] = useState([])
    const [image, setImage] = useState("")
    const [breed, setBreed] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/list")
            .then((result) => {
                setBreedlist(Object.entries(result.data))

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    function submithandler(e) {
        setBreed(e.target.value)
    }


    function getImage() {
        axios.get(`http://localhost:3000/breedimage/${breed}`)
            .then((result) => {
                setImage(result.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }







    return (
        <div className='breed-wrapper'>
            <div className='search-breed'>
                <div className='breed-list'>
                    <select onChange={(e) => { submithandler(e) }}>
                        <option disabled selected > Select the Breed</option>
                        {breedlist
                            ? breedlist.map((item, index) => (
                                <option key={index} value={item[0]}>
                                    {item[0]}
                                </option>
                            ))
                            : ''}
                    </select>
                    <button onClick={() => { getImage() }}>Get Image</button>
                </div>
                <div className='breed-image'>
                    {
                        image ?
                            <img src={image}></img>
                            : " "
                    }
                </div>
                <div className='back-to-home'>
                    <Link to="/">Back To Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Breed