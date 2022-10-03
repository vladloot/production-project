import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";
import {AppLink} from "shared/ui/AppLink/AppLink";


const App = () => {
   const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
