import clsx from "clsx";
import { ComponentProps } from "react";

const Name: React.FC<ComponentProps<'h1'>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1 className={clsx('text-white text-2xl font-bold', className)} {...props}>
            {children}
        </h1>
    )
}

const Location: React.FC<ComponentProps<'p'>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p className={clsx(' text-green-light font-normal text-base', className)} {...props}>
            {children}
        </p>
    )
}

const BodyText: React.FC<ComponentProps<'p'>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p className={clsx('text-white font-normal text-sm', className)} {...props}>
            {children}
        </p>
    )
}

const Typography = {
    Name,
    Location,
    BodyText
}
export default Typography