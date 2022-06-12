import { css } from '@emotion/react';

const testColor = css({
    color: 'green',
    backgroundColor: 'red',
});
const App = () => {
    return (
        <div>
            Hello, World!saa1 <p css={testColor}>red Color!</p>
        </div>
    );
};

export default App;
