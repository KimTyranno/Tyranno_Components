import { css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
const body = css({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    minHeight: '100vh',
    background: '#434150',
});
const container = css({
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
});

const animate = keyframes`
    0% {
        transform: translateY(100vh) scale(0)
    }
    100% {
        transform: translateY(-10vh) scale(1)
    }
`;
const bubbles = css({
    position: 'relative',
    display: 'flex',

    span: {
        position: 'relative',
        width: '30px',
        height: '30px',
        backgroundColor: '#4fc3dc',
        margin: '0 4px',
        borderRadius: '50%',
        boxShadow: '0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc',
        animation: `${animate} 15s linear infinite`,

        ':nth-of-type(even)': {
            backgroundColor: '#ff2d75',
            boxShadow: '0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75',
        },
    },
});

export const BubbleBackground = () => {
    // 화면사이즈 / 30가 표시해야할 갯수 (30은 방울 사이즈)
    const [count, setCount] = useState(window.innerWidth / 30);

    // debounce 적용(화면 사이즈가 짧은시간에 여러번 바뀌어도 마지막에 적용된 사이즈때 이벤트 발생)
    const debounceFunction = (callback, delay) => {
        let timer;
        return (...args) => {
            // 실행한 함수(setTimeout())를 취소
            clearTimeout(timer);
            // delay가 지나면 callback 함수를 실행
            timer = setTimeout(() => callback(...args), delay);
        };
    };

    const BubbleComponent = () => {
        let ary = [];
        for (let i = 1; i < count; i++) {
            ary.push(i);
        }
        return ary;
    };

    const handleChange = () => setCount(window.innerWidth / 30);
    // 사이즈가 변경될때마다 그 사이즈에 맞춰서 방울을 표시
    useEffect(() => {
        window.addEventListener('resize', debounceFunction(handleChange, 1000));
    });
    return (
        <div css={body}>
            <div css={container}>
                <div css={bubbles}>
                    {BubbleComponent().map((el) => (
                        <span
                            style={{
                                animationDuration: `calc(120s / (${Math.random() * el} + 20))`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
