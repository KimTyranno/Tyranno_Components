import { css } from '@emotion/react';
import { IsometricMenu } from './stories/IsometricMenu';

const testColor = css({
    color: 'green',
    backgroundColor: 'red',
});
const App = () => {
    return (
        <div>
            Hello, World!saa1 <p css={testColor}>red Color!</p>
            <IsometricMenu />
        </div>
    );
};

export default App;
