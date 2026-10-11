import React, { HTMLAttributes } from 'react';

export const Card: React.FC<HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
};