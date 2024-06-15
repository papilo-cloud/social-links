import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const LinksRoot: React.FC<ComponentProps<'div'>> = ({
    className,
    children,
    ...props
}) => {
  return (
    <div className={clsx(' flex flex-col w-full gap-4',className)} {...props}>
        {children}
    </div>
  )
}

export default LinksRoot