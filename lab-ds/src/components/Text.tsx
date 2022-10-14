import { clsx } from 'clsx';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: string;
    className?: string;
}

export function Text({size = 'md', children, className}: TextProps){
    return(
        <h1 className={clsx('text-gray-100', {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-lg': size === 'lg',
        },
        className
        )}>{children}</h1>
    )
}