import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

const Create = () => {

    const navigate = useNavigate()

    // STATE
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]); 

    
    const createAuthor = (e) => {
        e.preventDefault()
        // CREATE BODY TO SENT OVER TO API
        let body = {
            "name" : name,
        }
        // MAKE A AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/authors", body)
            .then(res => {
                console.log(res.data)
                setName("")
                navigate("/")
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
        console.log("ASYNC")
            // .catch(errors => console.log(errors.response.data.errors))
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <Link to = {`/`}>Home</Link>
            <form onSubmit={createAuthor}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
            {
                errors.map((error)=> <p>{error}</p>)
            }
        </fieldset>
    )
}

export default Create