import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contacts.css'

const Contacts = () => {

    const [contacts, setContacts] = useState([])

    const navigate = useNavigate()
    const [number, setNumber] = useState(1)




    const getContacts = () => {
        fetch("https://gorest.co.in/public/v1/users")
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setContacts(data.data)
            })
    }

    useEffect(() => {
        getContacts()
    }, [number])

    console.log(contacts)


    const handleDelete = (id) => {

        fetch(`https://gorest.co.in/public/v1/users/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ad8714443f89fc1ae425863402fe9be7050f92bfabc21f6a3f3013e515e27006`
            }
        }).then((result) => {
            result.json()
                .then((result) => {
                    console.log(result)
                })
        })
        setNumber(number + 1)

    }

   

    return (
        <div>
            <h4 className="add-contacts__header">All Contacts</h4>
            <table className="contacts">
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Delete Contact</th>
                    <th>Edit Contact</th>
                </tr>
            </table>
            {contacts ? contacts.map((contact) => {
                 const goToEditContact = () => {
                   navigate("/edit-contact",{
                       state: {
                           id: contact.id,
                           name: contact.name,
                           email: contact.email,
                           gender: contact.gender
                       }
                   })
                }
            
                return (
                    <div key={contact.id}>
                        <table className="contacts">
                            <tr className="table-row">
                                <td >{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.gender}</td>
                                <td><button className="delete-button" onClick={() => handleDelete(contact.id)}>Delete</button></td>
                                <td><button className="delete-button" onClick={() => goToEditContact(contact.id)} >Edit</button></td>
                            </tr>



                        </table>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Contacts


// .then(() => {
//     navigate("/contacts")