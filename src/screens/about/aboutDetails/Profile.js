import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const Profile = (props) => {
    const {name, title, profile_pic, whatsapp, facebook, instagram,phoneNumbers } = props.team;
    return (
        <PlanCard>
            <Card.Img src={profile_pic} alt={name} />
            <CardBody>
                <Card.Title>{title}</Card.Title>
                <p>{name}</p>
                <>
                   <a href={facebook}>Facebook</a> <br />
                   {instagram ? <a href={instagram}>Instagram</a> : null}
                   <p>call: {phoneNumbers}</p>
                   <p> whatsapp: {whatsapp}</p>
                </>
            </CardBody>
        </PlanCard>
    );
}


const PlanCard = styled(Card)`
    box-shadow: 0px 4px 6px black;
    width: 30%;
    margin: 0 auto;
    @media(max-width: 700px) {
        width: 50% !important;
        margin: 1.3rem auto;
    }
`
const CardBody = styled(Card.Body)`
    background: green;
    color: #fff;
`;

