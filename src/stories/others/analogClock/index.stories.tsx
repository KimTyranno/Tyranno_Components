import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnalogClock } from '.';

export default {
    title: 'components/Others/AnalogClock',
    component: AnalogClock,
} as ComponentMeta<typeof AnalogClock>;

const Template: ComponentStory<typeof AnalogClock> = () => <AnalogClock />;

export const Menu = Template.bind({});
