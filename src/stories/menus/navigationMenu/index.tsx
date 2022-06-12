import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faComment, faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const container = css({
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
});

const wrapper = css({
    width: '350px',
    height: '70px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '10px',
});

const ul = css({
    display: 'flex',
    margin: 0,
    padding: 0,
});

const li = (active: boolean) =>
    css({
        position: 'relative',
        listStyle: 'none',
        width: '70px',
        height: '70px',
        zIndex: 1,

        a: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            textAlign: 'center',
            fontWeight: 500,

            '.icon': {
                position: 'relative',
                display: 'block',
                lineHeight: '75px',
                fontSize: '1.5em',
                textAlign: 'center',
                transition: '.5s',
                color: '#333',
                transform: `${active && 'translateY(-35px)'}`,
            },

            '.text': {
                position: 'absolute',
                color: '#333',
                fontWeight: 400,
                fontSize: '0.75em',
                letterSpacing: '0.05em',
                transition: '.5s',
                opacity: active ? 1 : 0,
                transform: `translateY(${active ? '10px' : '20px)'})`,
            },
        },
    });
const indicator = (idx: number) =>
    css({
        boxSizing: 'border-box',
        position: 'absolute',
        width: '70px',
        height: '70px',
        backgroundColor: '#29fd53',
        top: '-50%',
        borderRadius: '50%',
        border: '6px solid #333',
        transition: '.5s',

        ':before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '-22px',
            width: '20px',
            height: '20px',
            backgroundColor: 'transparent',
            borderTopRightRadius: '20px',
            boxShadow: '0 -10px #333',
        },
        ':after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            right: '-22px',
            width: '20px',
            height: '20px',
            backgroundColor: 'transparent',
            borderTopLeftRadius: '20px',
            boxShadow: '0 -10px #333',
        },

        transform: `translateX(calc(70px * ${idx}))`,
    });
export const NavigationMenu = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const onClickHandler = (idx) => {
        setActiveMenu(idx);
    };
    return (
        <div css={container}>
            <div css={wrapper}>
                <ul css={ul}>
                    <li css={li(activeMenu === 0)} onClick={() => onClickHandler(0)}>
                        <a href='#'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faHouse} size='1x' />
                            </span>
                            <span className='text'>Home</span>
                        </a>
                    </li>
                    <li css={li(activeMenu === 1)} onClick={() => onClickHandler(1)}>
                        <a href='#'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faUser} size='1x' />
                            </span>
                            <span className='text'>Profile</span>
                        </a>
                    </li>
                    <li css={li(activeMenu === 2)} onClick={() => onClickHandler(2)}>
                        <a href='#'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faComment} size='1x' />
                            </span>
                            <span className='text'>Message</span>
                        </a>
                    </li>
                    <li css={li(activeMenu === 3)} onClick={() => onClickHandler(3)}>
                        <a href='#'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faGear} size='1x' />
                            </span>
                            <span className='text'>Settings</span>
                        </a>
                    </li>
                    <div css={indicator(activeMenu)} />
                </ul>
            </div>
        </div>
    );
};
