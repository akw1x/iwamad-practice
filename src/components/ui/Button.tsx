import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}