import React from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'accent' | 'ghost'
type ButtonProps = {
    children: React.ReactNode
    variant?: Variant
    to?: string
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

const base = 'cursor-pointer text-black inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
const variants: Record<Variant, string> = {
    primary: `${base} bg-primary hover:brightness-90`,
    accent:  `${base} bg-accent hover:brightness-95`,
    ghost:   `${base} bg-transparent hover:bg-surface/30`,
}

export default function Button({ children, variant = 'primary', to, onClick, className = '', type = 'button' }: ButtonProps) {
    const cls = `${variants[variant]} ${className}`
    if (to) {
        return (
            <Link to={to} className={cls}>
                {children}
            </Link>
        )
    }
    return (
        <button type={type} onClick={onClick} className={cls}>
            {children}
        </button>
    )
}