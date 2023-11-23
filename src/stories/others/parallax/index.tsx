import { css } from '@emotion/react';

const container = () =>
    css({
        '*': {
            margin: '0',
            padding: '0',
            color: '#fff',
            // 커서를 고정해서 텍스트에 마우스 올려도 커서가 변하지 않음
            cursor: 'default',
            fontFamily: 'YouTube Sans',
            fontWeight: 600,
        },
    });

const sec = css({
    width: '100vw',
    height: '100vh',
    h1: {
        textAlign: 'center',
        lineHeight: '100vh',
        fontSize: '70px',
    },
    p: {
        textAlign: 'center',
        lineHeight: '100vh',
        fontSize: '50px',
    },
});

const bg = {
    backgroundSize: 'cover',
    // fixed가 parallax의 핵심인듯
    backgroundAttachment: 'fixed',
};
const secBg1 = css({
    background: 'url(/images/img1.jpg) center no-repeat',
    ...bg,
});
const secBg2 = css({
    background: 'url(/images/img2.jpg) center no-repeat',
    ...bg,
});
const secBg3 = css({
    background: 'url(/images/img3.jpg) center no-repeat',
    backgroundSize: 'cover',
});
const secBg4 = css({
    background: 'url(/images/img4.jpg) center no-repeat',
    ...bg,
});

export const ParallaxBasic = () => {
    return (
        <div css={container}>
            <section css={[sec, secBg1]}>
                <h1>Parallax Effect</h1>
            </section>
            <section css={[sec, secBg2]}>
                <p>패럴렉스 테스트</p>
            </section>
            <section css={[sec, secBg3]}>
                <h1>일반적인 효과</h1>
            </section>
            <section css={[sec, secBg4]}>
                <p>기본적인 패럴렉스</p>
            </section>
        </div>
    );
};
