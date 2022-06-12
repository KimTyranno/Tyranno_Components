import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const container = css({
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
});

const box = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#434150',
    fontSize: '24px',
});

const ul = css({
    position: 'relative',
    transform: 'skewY(-15deg)',
});

const li = (color: string, index: number) =>
    css({
        position: 'relative',
        listStyle: 'none',
        width: '130px',
        background: '#3e3f46',
        padding: '15px',
        transition: '.5s',
        zIndex: 'calc(1 * ' + index + ')',

        ':hover': {
            transform: 'translateX(-50px)',
            background: color,

            ':before': {
                background: color,
                filter: 'brightness(0.7)',
            },

            ':after': {
                background: color,
                filter: 'brightness(0.9)',
            },

            a: {
                color: '#fff',
            },

            span: {
                opacity: 1,
            },
        },
        ':before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-40px',
            width: '40px',
            height: '100%',
            background: '#3e3f46',
            filter: 'brightness(0.7)',
            transformOrigin: 'right',
            transform: 'skewY(45deg)',
            transition: '.5s',
        },

        ':after': {
            content: '""',
            position: 'absolute',
            top: '-40px',
            left: 0,
            width: '100%',
            height: '40px',
            background: '#3e3f46',
            filter: 'brightness(0.9)',
            transformOrigin: 'bottom',
            transform: 'skewX(45deg)',
            transition: '.5s',
        },

        a: {
            textDecoration: 'none',
            color: '#999',
            display: 'block',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: '.5s',
        },

        ':last-child:after': {
            boxShadow: '-120px 120px 20px rgba(0,0,0,0.25)',
        },

        span: {
            position: 'absolute',
            top: 0,
            left: '-40px',
            width: '40px',
            height: '100%',
            transformOrigin: 'right',
            transform: 'skewY(45deg)',
            transition: '.5s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '.5',
            fontSize: '1.25em',
        },
    });

export const IsometricMenu = () => {
    return (
        <div css={container}>
            <div css={box}>
                <ul css={ul}>
                    <li css={li('#c32aa3', 3)}>
                        <a href='#'>
                            <span>
                                <FontAwesomeIcon icon={faInstagram} size='1x' />
                            </span>
                            Instagram
                        </a>
                    </li>
                    <li css={li('#1877f2', 2)}>
                        <a href='#'>
                            <span>
                                <FontAwesomeIcon icon={faFacebook} size='1x' />
                            </span>
                            Facebook
                        </a>
                    </li>
                    <li css={li('#1da1f2', 1)}>
                        <a href='#'>
                            <span>
                                <FontAwesomeIcon icon={faTwitter} size='1x' />
                            </span>
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
