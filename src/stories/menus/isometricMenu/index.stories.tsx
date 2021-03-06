import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IsometricMenu } from '.';

export default {
    title: 'components/Menus/IsometricMenu',
    component: IsometricMenu,
} as ComponentMeta<typeof IsometricMenu>;

const Template: ComponentStory<typeof IsometricMenu> = () => <IsometricMenu />;

export const Menu = Template.bind({});
