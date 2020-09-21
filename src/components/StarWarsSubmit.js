import React from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import { v4 as uuidv4 } from 'uuid';
import Fade from 'react-reveal';
import Footer from './Footer';

const StarWarsSubmit = ({ people, setPeople }) => {
    const { addToast } = useToasts();

    const peopleList = people.map((person) => {
        return (
            <Fade bottom>
                <ListItem key={uuidv4()}>{person}</ListItem>
            </Fade>
        );
    });
    return (
        <div>
            <SubmitCard className="card" style={{ background: '#181818' }}>
                <h3 style={{ textAlign: ' center', marginTop: '10px' }}>
                    Your Selections
                </h3>
                <div className="card-body">
                    <Ul>{peopleList}</Ul>
                </div>
                <Button
                    className="btn btn-outline-light"
                    onClick={() => {
                        if (peopleList.length > 0) {
                            addToast('Characters Have Been Submitted', {
                                appearance: 'success',
                                autoDismiss: true,
                            });

                            setPeople([]);
                        } else {
                            addToast('Please select a character', {
                                appearance: 'error',
                                autoDismiss: true,
                            });
                        }
                    }}
                >
                    Submit
                </Button>
            </SubmitCard>
            <Footer />
        </div>
    );
};

export default StarWarsSubmit;

const SubmitCard = styled.div`
    margin-bottom: 20px;
    border-radius: 5px;
`;

const Button = styled.button`
    display: block;
    margin: auto;
    width: 100%;
`;

const Ul = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
`;

const ListItem = styled.li`
    display: block;
    text-align: center;
    font-size: 18px;
    color: yellow;
`;
