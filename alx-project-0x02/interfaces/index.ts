
export interface CardProps  {
    title: string;
    content: string;
}

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}