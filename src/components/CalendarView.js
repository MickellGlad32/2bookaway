import React from 'react';
import Calendar from 'react-calendar';
import { Table,Container,Row, Col
} from 'react-bootstrap';


export default function CalendarView(){
    // const bookings = [
    //     {
    //         from: new Date('2022-07-03'),
    //         to: new Date('2022-07-30'),
    //         middayCheckout: true,
    //     },
    //     {
    //         from: '2022-04-08',
    //         to: '2022-04-13',
    //         middayCheckout: true,
    //     },
    //     {
    //         from: '2022-09-03T19:20:35.593Z',
    //         to: '2022-09-22T19:20:35.593Z',
    //         middayCheckout: false,
    //     },
    // ]

    return(

        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Stylist</th>
                    <th>Client</th>
                    <th>Service</th>
                    <th>Times</th>
                    <th>Price</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </tbody>
        </Table>
    )
}

