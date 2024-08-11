import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 const [ appointments, setAppointments ] = useState([]);
 const [ contacts, setContacts ] = useState([]);

  const addContact = (name, phone, email) => {
    const newContact = {name, phone, email};
    setContacts(prev => [...prev, newContact]);
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {title, contact, date, time};
    setAppointments(prev => [...prev, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContact={addContact} contact={contacts} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointment={addAppointment} appointments={appointments} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
