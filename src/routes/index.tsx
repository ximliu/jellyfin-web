import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ConnectedRoute from '../components/ConnectedRoute';
import SearchPage from './search';

const AppRoutes = () => (
    <Routes>
        <Route path='/'>
            <Route
                path='search.html'
                element={
                    <ConnectedRoute>
                        <SearchPage />
                    </ConnectedRoute>
                }
            />
            {/* Suppress warnings for unhandled routes */}
            <Route path='*' element={null} />
        </Route>
    </Routes>
);

export default AppRoutes;
