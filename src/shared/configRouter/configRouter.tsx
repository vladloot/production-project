import React from "react";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum RouteNames {
    MAIN = '/',
    ABOUT = '/about',
}

export type RoutesType = {
    path: string,
    element: React.ReactElement,
}

export const ROUTES: RoutesType[] = [
    { path: RouteNames.MAIN, element: <MainPage /> },
    { path: RouteNames.ABOUT, element: <AboutPage /> },
]

