import React, { useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { Table,Container,Row, Col
// } from 'react-bootstrap';
//Need to be able to select a day on the calendar for an appointment
//After day is selected a correct date must appear on the client form
//client info form should be created and rendered below the calendar once new booking is created
//client booking information form should contain Name, Phone number, email, current photo uploaded, desired services
//submit button at the bottom that sends all information to PostgreSQL database 


export default function CalendarView(){
    const [appointment, setAppointment] = useState([]);
    const [date, setDate] = useState(new Date());
    const clickHandler = (e) => {
        console.log(setDate)
    }
    return(
        <>
            <h1 className="Title" style={{ color: "purple", textAlign:"center" }}>The Gladness Experience</h1>
            <Calendar onClickDay={clickHandler}  onChange={setDate} value={date}/>
        <input type="text area"/>
        <button type='submit'>Submit</button>
        </>
    )
}

