import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const SocialRoot: React.FC<ComponentProps<'div'>> = ({
    children,
    className,
    ...props
}) => {
  return (
    <div className={clsx('flex flex-col gap-5 p-8 justify-center items-center bg-grey-dark max-w-[375px] min-h-[200px] rounded-xl', className)} {...props}>
        {children}
    </div>
  )
}

export default SocialRoot