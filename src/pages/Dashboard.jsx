import {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashboard = () => {
    // STATE
    const [allAuthors, setAllAuthors] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAllAuthors(res.data))
            .catch(errors => console.log(errors))
    }, [refresh])



    const deleteAuthor = (author_id) => {
        axios.delete(`http://localhost:8000/api/authors/${author_id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    // HANDLER
    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <Link to ={`/authors`}>Add an Author </Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author) => {
                            const {_id, name, createdAt} = author
                            return(
                                <tr key={_id}>
                                    <td>{name}</td>
                                    <td>
                                        <Link to={`/authors/edit/${_id}`}>Edit</Link>
                                        <button onClick={() => deleteAuthor(_id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard