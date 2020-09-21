import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../images/avatar.png';
import Fade from 'react-reveal';
import StarWarsSubmit from './StarWarsSubmit';
import { useToasts } from 'react-toast-notifications';

const StarWarsList = ({ characters, filterCharacters, term }) => {
    const [people, setPeople] = useState([]);
    const { addToast } = useToasts();

    const renderCharacters = (data) => {
        return data.map((character) => {
            return (
                <Fade
                    bottom
                    cascade
                    distance={'20px'}
                    duration={3000}
                    key={character.name}
                >
                    <Card
                        className="media"
                        onClick={() => {
                            addToast(
                                `${character.name} has been added to the roster!`,
                                {
                                    appearance: 'success',
                                    autoDismiss: true,
                                }
                            );

                            setPeople([...people, character.name]);
                        }}
                    >
                        <div className="avatar-container">
                            <Avatar
                                className="mr-3"
                                src={avatar}
                                alt="Generic placeholder image"
                            />
                        </div>

                        <div className="media-body">
                            <h3 className="mt-0" style={{ color: '#FFE81F' }}>
                                {character.name}
                            </h3>
                            <DetailList>
                                <DetailItem>
                                    Height: {character.height}
                                </DetailItem>
                                <DetailItem>Mass: {character.mass}</DetailItem>
                                <DetailItem>
                                    Hair Color: {character.hair_color}
                                </DetailItem>
                                <DetailItem>
                                    Skin Color: {character.skin_color}
                                </DetailItem>
                                <DetailItem>
                                    Birth Year: {character.birth_year}
                                </DetailItem>
                            </DetailList>
                        </div>
                    </Card>
                </Fade>
            );
        });
    };

    return (
        <div>
            {!term
                ? renderCharacters(characters)
                : renderCharacters(filterCharacters)}

            {characters.length > 0 ? (
                <StarWarsSubmit people={people} setPeople={setPeople} />
            ) : null}
        </div>
    );
};

export default StarWarsList;

const Card = styled.div`
    display: flex;
    justify-content: center;
    background: #181818;
    color: #fff;
    border-radius: 10px;
    border: 1px solid #ffe81f;
    margin-bottom: 20px;
    padding: 10px;
    width: 500px;
    cursor: pointer;
`;

const Avatar = styled.img`
    border-radius: 100%;
    width: 64px !important;
    height: 64px !important;
    margin-top: 15px;
    margin-right: 20px;
`;

const DetailList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const DetailItem = styled.li`
    display: inline-block;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 300;
`;
