import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const Profile = (props) => {
    const {name, title, profile_pic } = props.team;
    return (
        <PlanCard>
            <Card.Img src={profile_pic} alt={name} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p>{name}</p>
            </Card.Body>
        </PlanCard>
    );
}


const PlanCard = styled(Card)`
    box-shadow: 0px 4px 6px black;
    width: 30%;
    margin: 0 auto;
    @media(max-width: 700px) {
        width: 80%;
    }
`

// const ProfileWrapper = styled.div`
//     display: flex;
//     color: red;
// `