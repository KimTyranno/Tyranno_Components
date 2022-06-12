import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationMenu } from '.';

export default {
    title: 'components/Menus/NavigationMenu',
    component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

const Template: ComponentStory<typeof NavigationMenu> = () => <NavigationMenu />;

export const Menu = Template.bind({});
