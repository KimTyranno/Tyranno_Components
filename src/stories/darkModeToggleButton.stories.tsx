import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DarkModeToggleButton } from './darkModeToggleButton';

export default {
    title: 'components/ETC/DarkModeToggleButton',
    component: DarkModeToggleButton,
} as ComponentMeta<typeof DarkModeToggleButton>;

const Template: ComponentStory<typeof DarkModeToggleButton> = () => <DarkModeToggleButton />;

export const Button = Template.bind({});
