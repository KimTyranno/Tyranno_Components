import { css } from '@emotion/react';

const buttonCommon = css({
    fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontWeight: 700,
    border: 0,
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
});

const buttonColor = (mode: boolean) =>
    css({
        color: '#fff',
        backgroundColor: mode ? '#1ea7fd' : '#333',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    });

const buttonSize = (size: string) =>
    css({
        fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
        padding: size === 'small' ? '10px 16px' : size === 'medium' ? '11px 20px' : '12px 24px',
    });
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type='button'
            css={[buttonCommon, buttonColor(primary), buttonSize(size)]}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
