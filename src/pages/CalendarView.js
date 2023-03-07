import React, { useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Table,Container,Row, Col
} from 'react-bootstrap';



export default function CalendarView(){
    const [bookings, setBookings] = useState(new Date());


    return(
        <div>
            <Calendar  bookings={setBookings}/>
        </div>
    )
}

