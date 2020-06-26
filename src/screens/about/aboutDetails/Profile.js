import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Profile = (props) => {
    const {name, title, profile_pic, whatsapp, facebook, instagram,phoneNumbers, phoneNumber2 } = props.team;
    return (
        <PlanCard>
            <Card.Img src={profile_pic} alt={name} />
            <CardBody>
                <Card.Title>{title}</Card.Title>
                <p>{name}</p>
                <Icons>
                   <a href={facebook}>
                    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
                   </a> 
                   {instagram ? <a href={instagram}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
                   </a> : null}
                   {phoneNumber2 ? <a href={`tel:${phoneNumber2}`}>
                   <FontAwesomeIcon icon="phone" size='2x' color='#00e171'/>
                   </a> : null}
                   <a href={`tel:${phoneNumbers}`}>
                    <FontAwesomeIcon icon="phone" size='2x' color='#00e171'/>
                   </a>
                   <a href={`tel:${whatsapp}`}>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
                   </a>
                </Icons>
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

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
`;