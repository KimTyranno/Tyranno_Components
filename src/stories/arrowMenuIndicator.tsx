import { css } from '@emotion/react';
import { useState } from 'react';

type markerType = {
    top: number;
    width: number;
};
const container = () =>
    css({
        margin: 0,
        padding: 0,
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    });

const ul = css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    li: {
        listStyleType: 'none',

        a: {
            position: 'relative',
            fontSize: '2em',
            color: '#333',
            textDecoration: 'none',
            margin: '10px 0',
            display: 'inline-block',
        },
    },
});

const markerStyle = (marker: markerType) =>
    css({
        position: 'absolute',
        top: `${marker.top}px`,
        width: `${marker.width}px`,
        height: '50px',
        transition: '.5s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        ':before': {
            content: '""',
            width: '15px',
            height: '15px',
            borderTop: '4px solid red',
            borderRight: '4px solid red',
            transform: 'rotate(45deg) translate(-30px, 20px)',
        },
        ':after': {
            content: '""',
            width: '15px',
            height: '15px',
            borderTop: '4px solid red',
            borderRight: '4px solid red',
            transform: 'rotate(225deg) translate(-20px, 30px)',
        },
    });

export const ArrowMenuIndicator = () => {
    const [marker, setMarker] = useState<markerType>({ top: 10, width: 80 });
    const onMouseMoveHandle = (e) => {
        setMarker({ top: e.target.offsetTop, width: e.target.offsetWidth });
    };
    return (
        <div css={container}>
            <ul css={ul}>
                <span css={markerStyle(marker)} />
                <li>
                    <a href='#' onMouseMove={onMouseMoveHandle}>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#' onMouseMove={onMouseMoveHandle}>
                        About Us
                    </a>
                </li>
                <li>
                    <a href='#' onMouseMove={onMouseMoveHandle}>
                        Long Name Menu
                    </a>
                </li>
                <li>
                    <a href='#' onMouseMove={onMouseMoveHandle}>
                        Menu
                    </a>
                </li>
            </ul>
        </div>
    );
};
