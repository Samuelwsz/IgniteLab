import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

export function Button({children, className,...props}: ButtonProps){
    return(
        <button className={clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors w-full hover:bg-cyan-300 focus:ring-2 ring-white ', className,)} {...props}>{children}</button>
    )
}