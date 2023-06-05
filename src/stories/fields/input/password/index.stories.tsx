import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPasswordField } from '.';

export default {
    title: 'components/Fields/input/password',
    component: InputPasswordField,
} as ComponentMeta<typeof InputPasswordField>;

const Template: ComponentStory<typeof InputPasswordField> = () => <InputPasswordField />;

export const Menu = Template.bind({});
