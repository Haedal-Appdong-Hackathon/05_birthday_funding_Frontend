import { useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from '../src/pages/Error/Error';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
