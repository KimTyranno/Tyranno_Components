import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ParallaxBasic } from '.';

export default {
    title: 'components/Others/Parallax',
    component: ParallaxBasic,
} as ComponentMeta<typeof ParallaxBasic>;

const Template: ComponentStory<typeof ParallaxBasic> = () => <ParallaxBasic />;

export const Basic = Template.bind({});
