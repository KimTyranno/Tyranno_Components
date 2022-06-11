import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IsometricMenu } from './IsometricMenu';

export default {
    title: 'components/ETC/IsometricMenu',
    component: IsometricMenu,
} as ComponentMeta<typeof IsometricMenu>;

const Template: ComponentStory<typeof IsometricMenu> = () => <IsometricMenu />;

export const Menu = Template.bind({});
