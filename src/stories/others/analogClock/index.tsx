import { css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

const container = () =>
    css({
        '*': {
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#acbaca',
    });

const clock = () =>
    css({
        position: 'relative',
        width: '300px',
        height: '300px',
        background: '#c9d5e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50px',
        boxShadow: `
            30px 30px 30px -10px rgba(0,0,0,0.15),
            inset 15px 15px 10px rgba(255,255,255,0.75),
            -15px -15px 35px rgba(255,255,255,0.55),
            inset -1px -1px 10px rgba(0,0,0,0.2)
        `,
        ':before': {
            content: '""',
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: '#e91e63',
            borderRadius: '50%',
            zIndex: 1000,
            boxShadow: `
            0 0 0 1px #e91e63,
            0 0 0 3px #fff,
            0 0 5px 5px rgba(0,0,0,0.15)
            `,
        },
    });

const numberContainer = () =>
    css({
        position: 'absolute',
        inset: '35px',
        background: '#152b4a',
        borderRadius: '50%',
        boxShadow: `
            5px 5px 15px #152b4a66,
            inset 5px 5px 5px rgba(255,255,255,0.55),
            -6px -6px 10px rgba(255,255,255,1)
        `,
    });

const number = (i: number) =>
    css({
        position: 'absolute',
        inset: '5px',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1.25em',
        transform: `rotate(calc(90deg * ${i}))`,
        ':before': {
            content: '""',
            position: 'absolute',
            inset: '35px',
            background: 'linear-gradient(#2196f3, #e91e63)',
            borderRadius: '50%',
            animation: `${animate} 2s linear infinite`,
        },
        ':after': {
            content: '""',
            position: 'absolute',
            inset: '38px',
            background: '#152b4a',
            borderRadius: '50%',
        },
        b: {
            fontWeight: 600,
            display: 'inline-block',
            transform: `rotate(calc(-90deg * ${i}))`,
        },
    });

const animate = keyframes`
    0% {
        transform: rotate(360deg)
    }
    100% {
        transform: rotate(0deg)
    }
`;

const circle = () =>
    css({
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 10,
        i: {
            position: 'absolute',
            width: '3px',
            height: '50%',
            background: '#fff',
            transformOrigin: 'bottom',
        },
    });
const hrStyle = (hh: number, mm: number) =>
    css({
        i: {
            transform: `scaleY(0.3) rotateZ(${hh + mm / 12}deg)`,
            width: '4px',
        },
    });
const mnStyle = (mm: number) =>
    css({
        i: {
            transform: `scaleY(0.45) rotateZ(${mm}deg)`,
        },
    });
const scStyle = (ss: number) =>
    css({
        i: {
            width: '2px',
            transform: `scaleY(0.55) rotateZ(${ss}deg)`,
            background: '#e91e63',
            boxShadow: '0 30px 0 #e91e63',
        },
    });

export const AnalogClock = () => {
    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    const [ss, setSs] = useState(0);

    setInterval(() => {
        const day = new Date();
        setHh(day.getHours() * 30);
        setMm(day.getMinutes() * 6);
        setSs(day.getSeconds() * 6);
    });

    return (
        <div css={container}>
            <div css={clock}>
                <div css={numberContainer}>
                    <span css={number(0)}>
                        <b>12</b>
                    </span>
                    <span css={number(1)}>
                        <b>3</b>
                    </span>
                    <span css={number(2)}>
                        <b>6</b>
                    </span>
                    <span css={number(3)}>
                        <b>9</b>
                    </span>
                    <div css={[circle, hrStyle(hh, mm)]}>
                        <i></i>
                    </div>
                    <div css={[circle, mnStyle(mm)]}>
                        <i></i>
                    </div>
                    <div css={[circle, scStyle(ss)]}>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
