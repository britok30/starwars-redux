import React, { useState, useEffect } from 'react';
import sw from '../images/star-wars-4.svg';
import styled from 'styled-components';
import StarWarsList from './StarWarsList';
import { ToastProvider } from 'react-toast-notifications';

import { connect } from 'react-redux';
import { fetchData } from '../actions';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        props.fetchData();
    }, []);

    useEffect(() => {
        const results = props.characters.filter((character) => {
            const name = character.name.toLowerCase();

            return name.includes(searchTerm.toLowerCase());
        });

        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div>
            <img
                src={sw}
                style={{
                    width: '500px',
                    margin: '25px auto',
                    display: 'block',
                }}
            />
            <Form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                <Input
                    className="form-control"
                    type="search"
                    placeholder="Search for characters.."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </Form>
            <div className="container list-container">
                <ToastProvider>
                    <StarWarsList
                        characters={props.characters}
                        filterCharacters={searchResults}
                        term={searchTerm}
                    />
                </ToastProvider>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { characters: state.characters };
};

export default connect(mapStateToProps, {
    fetchData,
})(SearchBar);

const Form = styled.form`
    width: 100%;
    margin: 20px auto;
`;

const Input = styled.input`
    margin: auto;
    width: 500px !important;
    background: #181818 !important;
    color: #fff !important;
    box-sizing: border-box !important;
`;
