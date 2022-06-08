import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IsometricMenu } from './IsometricMenu';

export default {
    title: 'ETC/IsometricMenu',
    component: IsometricMenu,
} as ComponentMeta<typeof IsometricMenu>;

const Template: ComponentStory<typeof IsometricMenu> = (args) => <IsometricMenu {...args} />;

export const Primary = Template.bind({});
