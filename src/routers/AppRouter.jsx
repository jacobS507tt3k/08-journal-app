import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import {JournalScreen} from '../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
        
                <BrowserRouter>
                    <Routes>
                        

                        <Route path="/" element={<JournalScreen />} />

                        <Route path="/auth/*" element={<AuthRouter />} />

                        <Route path="*" element={<Navigate to="/" />} />

                        

                    
                    </Routes>
                </BrowserRouter>
            
           
        );
};
