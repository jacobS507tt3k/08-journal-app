import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import {JournalScreen} from '../components/journal/JournalScreen';
import {firebase} from '../firebase/firebase-config';
import {login} from "../actions/auth"
import { PublicRoute } from '../routers/PublicRoute';
import { PrivateRoute } from '../routers/PrivateRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }

            setCheking(false);


      });
    }, [dispatch, setCheking, setIsLoggedIn]);

    if(checking){
        return (
            <h1>Espere...</h1>
        );
    }
    
  return (
        
                <BrowserRouter>
                    <Routes>
                        

                        <Route path="/" element={
                            
                            <PrivateRoute isAuth={isLoggedIn}>
                                <JournalScreen />
                            </PrivateRoute>
                            
                        
                        } />

                        <Route path="/auth/*" element={
                            <PublicRoute isAuth={isLoggedIn}>
                            <AuthRouter />
                            </PublicRoute>
                        
                        } />

                        <Route path="*" element={<Navigate to="/" />} />

                        

                    
                    </Routes>
                </BrowserRouter>
            
           
        );
};
