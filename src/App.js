import './App.css';
import { Link, Routes, Route  } from "react-router-dom";
import Contacts from './Pages/Contacts'
import AddContact from './Pages/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages/Contacts.css'
import EditContact from './Pages/EditContact';


function App() {
  return (

    <div className="App">
      <div className="header-div">
      <h1 className="app-header">Contacts App</h1>
      <Link className="all-contacts" to="/contacts">All Contacts</Link>
      <Link className="add-contact" to="/addContact">Add Contact</Link>
      </div>
      <Routes>
        <Route path='/contacts' exact element={<Contacts />} />
        <Route path='/addContact' element={<AddContact />} />
        <Route path='/edit-contact' element={<EditContact />}/>

      </Routes>
    </div>
  );
}

export default App;
