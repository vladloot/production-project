import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import style from './AppLink.module.scss';
import {Link} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps {
    className?: string;
    to: string;
    theme?: AppLinkTheme;
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(style.AppLink, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};