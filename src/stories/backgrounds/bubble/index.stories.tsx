import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BubbleBackground } from '.';

export default {
    title: 'components/Backgrounds/Bubble',
    component: BubbleBackground,
} as ComponentMeta<typeof BubbleBackground>;

const Template: ComponentStory<typeof BubbleBackground> = () => <BubbleBackground />;

export const Bubble = Template.bind({});
