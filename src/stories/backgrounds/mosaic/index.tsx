import { css, keyframes } from '@emotion/react';
import { useCallback, useMemo, useRef } from 'react';
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
    width: '100vw',
    height: '100vh',
    background: '#000',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
});

const animate = keyframes`
    0% {
        background: transparent;
        // filter: hue-rotate(0deg);
    }
    50% {
        background: #0f0;
    }
    100% {
        background: #222;
        // filter: hue-rotate(360deg);
    }
`;

const box = css({
    position: 'relative',
    width: '40px',
    height: '40px',
    background: '#222',
    '&.boxAnim': {
        animation: `${animate} 2s linear forwards`,
    },
});

export const MosaicBackground = () => {
    const BOXES_LENGTH = 1000;
    const containerRef = useRef<HTMLDivElement>();
    const boxes = useMemo(
        () => new Array(BOXES_LENGTH).fill('').map((_, idx) => <div css={box} key={idx} />),
        [],
    );

    const animateAcitve = useCallback(() => {
        const ref = containerRef.current;
        if (!ref) return;
        const boxes = ref.children;
        const num = Math.floor(Math.random() * boxes.length);
        boxes[num].classList.toggle('boxAnim');
    }, []);

    setInterval(animateAcitve);

    return (
        <div css={body}>
            <div css={container} ref={containerRef}>
                {boxes}
            </div>
        </div>
    );
};
