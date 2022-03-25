import { Registrations } from '../components/Registrations/Registrations.jsx';
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
describe("Registration display tests", () => {
    test('Valid registration', () => {
        //    
        const registrationList = [
            {
                "id": 1,
                "username": "Jester",
                "name": "Jester",
                "comment": "Bing bang bong!"
              },
              {
                "id": 2,
                "username": "valdi7913",
                "name": "Valdi",
                "comment": "Spennandi!"
              }
        ];
        render(<Registrations registrations={registrationList}/>);
        
        expect(screen.getByText(/Valdi/i)).toBeInTheDocument();
        expect(screen.getByText(/Spennandi!/i)).toBeInTheDocument();
        expect(screen.getByText(/Jester/i)).toBeInTheDocument();
        expect(screen.getByText(/Bing bang bong!/i)).toBeInTheDocument();
    });      

    test('no registration', () => {
        //
        const registrationList = [];
        render(<Registrations registrations={registrationList}/>);
        expect(screen.getByText(/Engar skráningar/i)).toBeInTheDocument();
    });      
});
