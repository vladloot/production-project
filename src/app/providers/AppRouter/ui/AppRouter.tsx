import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "shared/configRouter/configRouter";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {ROUTES.map(({path, element}) => {
                   return <Route key={path} path={path} element={element} />
                })}
            </Routes>
        </Suspense>
    );
};