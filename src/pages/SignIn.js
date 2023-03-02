import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';


export default function SignIn(){
    function handleClick(e){
        console.log('Your information was saved successfully')
        e.preventDefault()
    }
    return(
        <Container>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
                SignIn
            </Button>
        </Form>
        </Container>
    )
}

