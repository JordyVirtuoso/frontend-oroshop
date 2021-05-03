import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' // here we need more than just Container

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Oroshop</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
