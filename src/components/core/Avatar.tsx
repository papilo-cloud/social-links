import clsx from 'clsx'
import { ComponentProps } from 'react'
import image from '../../../public/images/avatar-jessica.jpeg'

export interface AvatarProps extends ComponentProps<'img'> {
    url: string
}

const Avatar = ({url, children, className, ...props}: AvatarProps) => {
  return (
    <img 
        className={clsx(' rounded-full w-24 h-24 mb-0', className)}
        src={url || image } 
        alt="user-image"
        {...props} />
  )
}

export default Avatar