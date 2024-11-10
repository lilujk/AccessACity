import { createContext, useContext } from 'react';

export const UsersContext = createContext([
    {
        "username": "Demo",
        "contact": "tester@gmail.com",
        "preferedAccessibility": {
            "wheelchair": "High",
            "sight": "Any",
            "sound": "Low to none",
            "touch": "Low to none",
            "smell": "Med"
        },
        "savedEvents": [
            {
                "name": "Troy Farmers Market"
            },
            {
                "name": "Friend's Giving Potluck"
            },
        ],
        "rsvpEvents": [
            {
                "name": "Indie Rock Night at The Hangar"
            },
        ]
    }

]);

export const useUser = () => {
    const user = useContext(UsersContext);
    return user;
}