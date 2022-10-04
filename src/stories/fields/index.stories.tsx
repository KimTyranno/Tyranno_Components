import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from '.';

export default {
    title: 'components/Fields/InputField',
    component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = () => <InputField />;

export const Menu = Template.bind({});
