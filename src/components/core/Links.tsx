import clsx from 'clsx'
import React, { ComponentProps } from 'react'

interface LinksProps extends ComponentProps<'a'> {
  url: string
}

const Links: React.FC<ComponentProps<'a'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a 
      className={clsx(' block w-full rounded-lg font-primary font-semibold bg-grey-normal text-white hover:bg-green-light hover:text-black-off cursor-pointer text-center py-3', className)} 
      target='_blank'
      {...props}>
        {children}
    </a>
  )
}

export default Links