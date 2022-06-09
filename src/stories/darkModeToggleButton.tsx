import { css } from '@emotion/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const container = (isDarkMode: boolean) =>
    css({
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: isDarkMode ? '#333' : '#fff',
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    });

const wrapper = css({
    position: 'relative',
    width: '60px',
    height: '30px',
    display: 'inline-block',
    cursor: 'pointer',
});

const checkBox = css({
    position: 'relative',
    zIndex: 1,
    appearance: 'none',
});

const buttonWrapper = (isDarkMode: boolean) =>
    css({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: isDarkMode ? '#fff' : '#424242',
        borderRadius: '80px',
        transition: '.5s',
    });

const switchButton = (isDarkMode: boolean) =>
    css({
        position: 'absolute',
        top: '3px',
        left: isDarkMode ? '32px' : '4px',
        width: '24px',
        height: '24px',
        backgroundColor: isDarkMode ? '#424242' : '#fff',
        borderRadius: '50%',
        transition: '.5s',
    });

const lightButton = css({
    position: 'absolute',
    top: '5px',
    left: '5px',
    fontSize: '18px',
    color: 'orange',
});
const moonButton = css({
    position: 'absolute',
    top: '5px',
    right: '5px',
    fontSize: '18px',
    color: '#fff',
});

const testText = (isDarkMode: boolean) =>
    css({
        color: isDarkMode ? '#fff' : '#424242',
    });
export const DarkModeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setIsDarkMode(mode === 'dark');
    }, []);

    return (
        <div css={container(isDarkMode)}>
            <label css={wrapper}>
                <input
                    type='checkbox'
                    css={checkBox}
                    onChange={(e) => setIsDarkMode(e.target.checked)}
                />
                <span css={buttonWrapper(isDarkMode)}>
                    <FontAwesomeIcon icon={faSun} size='1x' css={lightButton} />
                    <FontAwesomeIcon icon={faMoon} size='1x' css={moonButton} />
                    <span css={switchButton(isDarkMode)} />
                </span>
            </label>
            <div css={testText(isDarkMode)}>Dark-Mode 확인용 텍스트</div>
        </div>
    );
};
