import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const SocialRoot: React.FC<ComponentProps<'div'>> = ({
    children,
    className,
    ...props
}) => {
  return (
    <div className={clsx(' bg-', className)} {...props}>
        {children}
    </div>
  )
}

export default SocialRoot