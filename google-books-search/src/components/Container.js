import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SecondHeader from "./Header";
import SearchBooks from './SearchBooks'


function Grid() {
    return (
        <Container>
            <Row>
                <Col><SecondHeader /></Col>
            </Row>
            <Row>
                <Col><SearchBooks /></Col>
            </Row>
        </Container >
    )
}


export default Grid;