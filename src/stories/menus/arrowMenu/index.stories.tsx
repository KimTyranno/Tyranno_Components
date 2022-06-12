import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowMenu } from '.';

export default {
    title: 'components/Menus/ArrowMenu',
    component: ArrowMenu,
} as ComponentMeta<typeof ArrowMenu>;

const Template: ComponentStory<typeof ArrowMenu> = () => <ArrowMenu />;

export const Menu = Template.bind({});
