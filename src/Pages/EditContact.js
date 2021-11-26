import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const EditContact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
   


    const navigate = useNavigate()
    const location = useLocation()
    const id = location.state.id
    console.log(id)





    const getContacts = () => {
        fetch(`https://gorest.co.in/public/v1/users/${id}`)
            .then(res => res.json())
            .then(data => {

             
                setName(data.data.name)
                setEmail(data.data.email)
                setGender(data.data.gender)
            })
    }

    useEffect(() => {
        getContacts()
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`https://gorest.co.in/public/v1/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ad8714443f89fc1ae425863402fe9be7050f92bfabc21f6a3f3013e515e27006"
            },
            body: JSON.stringify({
                id: id,
                name: name,
                email: email,
                gender: gender
            })
        }).then(() => {
            console.log(JSON.stringify())
        })

    }


    return (
        <div>
            <h4 className="add-contacts__header">Edit Contact</h4>
            <form onSubmit={ handleSubmit} >
                <label>Full name</label>
                <input
                    name="username"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Add name..."></input>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"></input>
                <label>Gender</label>
                <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    placeholder="Gender"></input>
                <button className="addcontact-button">+Edit contact</button>


            </form>
        </div>
    )
}

export default EditContact
