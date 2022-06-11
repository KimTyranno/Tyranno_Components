import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowMenuIndicator } from './arrowMenuIndicator';

export default {
    title: 'components/Menus/ArrowMenuIndicator',
    component: ArrowMenuIndicator,
} as ComponentMeta<typeof ArrowMenuIndicator>;

const Template: ComponentStory<typeof ArrowMenuIndicator> = () => <ArrowMenuIndicator />;

export const Menu = Template.bind({});
