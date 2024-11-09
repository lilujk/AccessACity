import { createContext, useContext } from 'react';

//Array containing all event data across JSON (STARTING VALUES)
//Note: start with reading/ worry about 'add event' page very last. 

/*
    In any page, you can: 
    `import { useEvents } from '@/hooks/useEvents';`
    and 
    `const events = useEvents();`
    before return in any file
*/
export const EventsContext = createContext([
    {
        Name: "fakename",
        Description: "fakedescription",
        Tags: ["faketag1", "faketag2"],
    },
    {
        Name: "fakename2",
        Description: "fakedescription2",
        Tags: ["faketag3", "faketag4"],
    }
]);

export const useEvents = () => {
    const events = useContext(EventsContext);
    return events;
}

