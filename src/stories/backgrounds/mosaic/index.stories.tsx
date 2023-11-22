import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MosaicBackground } from '.';

export default {
    title: 'components/Backgrounds/Mosaic',
    component: MosaicBackground,
} as ComponentMeta<typeof MosaicBackground>;

const Template: ComponentStory<typeof MosaicBackground> = () => <MosaicBackground />;

export const Mosaic = Template.bind({});
