import React, { useState } from 'react'
import './AddContacts.css'

const AddContact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('active')
    const [id, setId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const addContact = { name, email, gender, status, id }
        fetch("https://gorest.co.in/public/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ad8714443f89fc1ae425863402fe9be7050f92bfabc21f6a3f3013e515e27006"
            },
            body: JSON.stringify(addContact)
        }).then(() => {
            console.log(JSON.stringify(addContact))
        })

    }

    return (
        <div>
            <h4 className="add-contacts__header">Add Contact</h4>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="username">Name</label> */} 
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
                <button className="addcontact-button">+Add contact</button>


            </form>
        </div>
    )
}

export default AddContact
