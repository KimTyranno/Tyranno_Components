import { themes } from '@storybook/theming';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    darkMode: {
        dark: {
            ...themes.dark,
            appBg: '#333',
        },
        light: {
            ...themes.light,
            appBg: '#fff',
        },
        current: 'dark',
    },
};
