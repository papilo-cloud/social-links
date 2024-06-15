import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const Info: React.FC<ComponentProps<'div'>> = ({
    children,
    className,
    ...props
}) => {
  return (
    <div className={clsx('flex flex-col items-center gap-1', className)} {...props}>
        {children}
    </div>
  )
}

export default Info