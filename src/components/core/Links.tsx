import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const Links: React.FC<ComponentProps<'a'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a 
      className={clsx('block w-full rounded-lg tracking-wide font-primary font-semibold text-sm bg-grey-normal text-white hover:bg-green-light hover:text-black-off cursor-pointer text-center py-3', className)} 
      target='_blank'
      {...props}>
        {children}
    </a>
  )
}

export default Links