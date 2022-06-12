import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DarkModeToggleButton } from '.';

export default {
    title: 'components/buttons/DarkModeToggleButton',
    component: DarkModeToggleButton,
} as ComponentMeta<typeof DarkModeToggleButton>;

const Template: ComponentStory<typeof DarkModeToggleButton> = () => <DarkModeToggleButton />;

export const Button = Template.bind({});
