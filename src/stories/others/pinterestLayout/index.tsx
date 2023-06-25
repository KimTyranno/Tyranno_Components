import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// export const breakpoints = {
//     sm: '640px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
// } as const;

// export type BreakpointKeys = keyof typeof breakpoints;

// export const isBreakpointkeys = (value: any): value is BreakpointKeys => {
//     return value in breakpoints;
// };

// export const maxScreen = (breakpoint: BreakpointKeys | number) => {
//     const mediaQuery = isBreakpointkeys(breakpoint)
//         ? `@media (max-width: ${breakpoints[breakpoint]})`
//         : `@media (max-width: ${breakpoint}px)`;
//     return mediaQuery;
// };

const container = css({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    width: '1400px',
    margin: '20px auto',
    columns: 4,
    columnGap: '20px',
    '@media (max-width: 1280px)': {
        width: 'calc(100% - 40px)',
        columns: 3,
    },
    '@media (max-width: 768px)': {
        columns: 2,
    },
    '@media (max-width: 480px)': {
        columns: 1,
    },
});

const box = css({
    width: '100%',
    marginBottom: '10px',
    breakInside: 'avoid',
    img: {
        maxWidth: '100%',
        borderRadius: '15px',
    },
});

const noData = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#fff',
});
export const PinterestLayout = () => {
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((res) => res.json())
            .then((res) => setImgList(res));
    }, []);

    if (imgList.length === 0) return <div css={noData}>No Data</div>;

    return (
        <div css={container}>
            {imgList.map((item) => (
                <div css={box} key={item.id}>
                    <img src={item.download_url} />
                </div>
            ))}
        </div>
    );
};
