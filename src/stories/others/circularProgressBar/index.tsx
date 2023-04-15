import { ClassNames, css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

const body = css({
    '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#222',
});

const container = css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gridArea: 4,
    gap: '40px',
});

const progress = (percentage: number, color: string) =>
    css({
        position: 'relative',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        color: '#fff',
        background: `#444 linear-gradient(to right, transparent 50%, ${color} 0)`,
        h3: {
            position: 'absolute',
            top: '43%',
            left: '53%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2.5em',
            zIndex: 1,
            fontWeight: 500,
            span: {
                fontSize: '0.65em',
                fontWeight: 400,
            },
        },
        h4: {
            position: 'absolute',
            top: '62%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            fontWeight: 500,
            color,
            textTransform: 'uppercase',
        },
        ':before': {
            content: '""',
            display: 'block',
            height: '100%',
            marginLeft: '50%',
            transformOrigin: 'left',
            borderRadius: '0 100% 100% 0/50%',
            // 50% 미만일때는 스타일이 조금 다름
            background: percentage >= 50 ? color : '#444',
            transform: `rotate(calc(((${percentage} - ${percentage >= 50 ? 50 : 0}) * 0.01turn)))`,
        },
        ':after': {
            content: '""',
            position: 'absolute',
            inset: '5px',
            background: '#222',
            borderRadius: '50%',
        },
    });

export const CircularProgressBar = () => {
    return (
        <div css={body}>
            <div css={container}>
                <div css={progress(85, '#43f94a')}>
                    <h3>
                        85<span>%</span>
                    </h3>
                    <h4>HTML</h4>
                </div>
                <div css={progress(62, '#2ccde9')}>
                    <h3>
                        62<span>%</span>
                    </h3>
                    <h4>CSS</h4>
                </div>
                <div css={progress(35, '#fb297b')}>
                    <h3>
                        35<span>%</span>
                    </h3>
                    <h4>JavaScript</h4>
                </div>
            </div>
        </div>
    );
};
