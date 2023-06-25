import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PinterestLayout } from '.';

export default {
    title: 'components/others/PinterestLayout',
    component: PinterestLayout,
} as ComponentMeta<typeof PinterestLayout>;

const Template: ComponentStory<typeof PinterestLayout> = () => <PinterestLayout />;

export const layout = Template.bind({});
