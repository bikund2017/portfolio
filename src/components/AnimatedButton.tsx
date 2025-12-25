import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps): React.ReactElement => {
    return (
        <button
            className={`cursor-pointer transition-all ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
