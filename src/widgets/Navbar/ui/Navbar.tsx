import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import style from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={style.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>Главная</AppLink>
            </div>
        </div>
    );
};