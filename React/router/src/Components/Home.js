import React from "react";
import {Button,Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import logo from '../logo.svg';

export default function Home(){
    return(
        <Card
        style={{
            width: "18rem"
        }}
        >
         <img
         alt="Sample"
         src={logo}/>
         <CardBody>
            <CardTitle tag="h5">
                Card Title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card Subtitle
            </CardSubtitle>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card`s content.
            </CardText>
            <Button>
                Button
            </Button>
         </CardBody>
        </Card>
    )
}