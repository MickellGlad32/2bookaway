import React, { useState} from 'react';
import Calendar from 'react-calendar';
import { Table,Container,Row, Col
} from 'react-bootstrap';



export default function CalendarView(){
    const [bookings, setBookings] = useState(new Date());


    return(
        <div>
            <Calendar  bookings={bookings}/>
        </div>
    //     <Table responsive>
    //         <thead>
    //             <tr>
    //                 <th>ID</th>
    //                 <th>Stylist</th>
    //                 <th>Client</th>
    //                 <th>Service</th>
    //                 <th>Times</th>
    //                 <th>Price</th>
    //                 <th>Total Cost</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>1</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //             </tr>
    //             <tr>
    //                 <td>2</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //             </tr>
    //             <tr>
    //                 <td>3</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //                 <td>Table cell</td>
    //             </tr>
    //         </tbody>
    //     </Table>
     )
}

