import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularProgressBar } from '.';

export default {
    title: 'components/Others/circularProgressBar',
    component: CircularProgressBar,
} as ComponentMeta<typeof CircularProgressBar>;

const Template: ComponentStory<typeof CircularProgressBar> = () => <CircularProgressBar />;

export const Menu = Template.bind({});
