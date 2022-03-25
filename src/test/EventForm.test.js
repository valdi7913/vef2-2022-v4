import { EventForm } from '../components/EventForm/EventForm.jsx';
import { describe, test, expect } from '@jest/globals';
import { render, screen} from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { AuthenticationContext } from '../components/AuthContext/AuthContext.jsx';

describe("EventForm display tests", () => {
    test('Not logged in, not registered', () => {
        //    
        const registered = [];
        const isLoggedIn = false;
        const addToRegistered = (id) => registered.push(id); 
        const removeFromRegistered = (id) => {registered.filter(value === id)}
        const element = new TestRenderer.create(
            <AuthenticationContext.Provider value={{ registered, isLoggedIn ,addToRegistered ,removeFromRegistered }}>
                <EventForm/>
            </AuthenticationContext.Provider>
        );
        
        expect(element.root.getByText(''))
    });      

    test('Logged in, not registered', () => {
        expect(true).toBe(false);
    });      

    test('Logged in, registered', () => {
        expect(true).toBe(false);
    
    });      
});


