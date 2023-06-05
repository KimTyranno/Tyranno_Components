import { css } from '@emotion/react';
import { useState } from 'react';

const container = () =>
    css({
        margin: 0,
        padding: 0,
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#333',
    });

const inputBox = () =>
    css({
        position: 'relative',
        width: '250px',

        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid gray',
            backgroundColor: '#1d223a',
            borderRadius: '5px',
            outline: 'none',
            color: '#fff',
            fontSize: '1em',
            transition: '.5s',

            ':valid ~ span, :focus ~ span': {
                color: '#1d2b3a',
                transform: 'translateX(10px) translateY(-7px)',
                fontSize: '0.65em',
                padding: '0 10px',
                backgroundColor: '#00dfc4',
                borderRadius: '2px',
                borderLeft: '1px solid #00dfc4',
                borderRight: '1px solid #00dfc4',
                letterSpacing: '0.2em',
            },
            ':valid, :focus': {
                border: '1px solid #00dfc4',
            },
        },
        span: {
            position: 'absolute',
            left: 0,
            top: 0,
            padding: '10px',
            pointerEvents: 'none',
            fontSize: '1em',
            color: 'gray',
            textTransform: 'uppercase',
            transition: '.5s',
        },
    });
export const InputField = () => {
    return (
        <div css={container}>
            <div css={inputBox}>
                <input type='text' required />
                <span>First Name</span>
            </div>
            <div css={inputBox}>
                <input type='text' required />
                <span>Last Name</span>
            </div>
        </div>
    );
};
