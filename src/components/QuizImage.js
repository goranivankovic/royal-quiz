import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import LightB from '../img/lightB.jpeg'

export default class QuizImage extends Component {
    render() {
        return (
            <div className="quizMainDiv">
            
                <Container>
                    <h2 className="text-primary">Quiz Game</h2>
                    <Row>
                        <Col xs={12}>
                        
                         <img src ={LightB} className="slika" />

                        
                        
                        </Col>


                    </Row>
      

                </Container>

                
            </div>
        )
    }
}
