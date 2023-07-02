import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import React, { useState, useRef } from 'react';

import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";


const ResearchIcon = () => {
    //Codigo para el overlay,
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [showInput, setShowInput] = useState(false);

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleCancelButtonClick = () => {
        setShowInput(false);
    };

    return (
        <div class='searchbar'>
            <ul class=' listIconsHorizontal searchMargin '>
                <li class='social-icon'>
                    {!showInput ? (
                        <div className="inputContainer">
                            <button onClick={handleButtonClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" /><p class='textoButton'>SEARCH</p>
                                </svg>
                                <p class='search-title'>SEARCH</p>
                            </button>
                        </div>
                    ) : (
                        <div className="inputContainer ">
                            <button onClick=''><BsSearch className="IconSearch" /></button>
                            <input placeholder="Search" type="text" />
                            <button onClick={handleCancelButtonClick}><GiCancel className="IconCancel" /></button>
                        </div>
                    )}
                </li>
                <li lass='social-icon'>
                    <div>
                        <Button variant="danger" ref={target} onClick={() => setShow(!show)} style={{ paddingTop: '25px', display: 'flex', background: 'transparent', border: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <p class='search-title'>SIGN IN</p>
                        </Button>
                        <Overlay target={target.current} show={show} placement="left">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        position: 'absolute',
                                        padding: '10px 0px',
                                        justifyItems: 'center',
                                        borderRadius: 3,
                                        ...props.style,
                                    }}
                                >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}
                        </Overlay>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default ResearchIcon;