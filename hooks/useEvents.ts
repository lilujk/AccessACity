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
        username: "testusername",
        eventname: "testeventname",
        description: "testdescription",
        eventcity: "testeventcity",
        eventstate: "testeventstate",
        eventdate: "11/16/2024",
        eventtime: "09:00AM - 01:00 PM",
        tags: ["testtag1", "testtag2", "testtag3"],
        cost: "free",
        accessibility: {
            wheelchair: "high",
            sight: "low to none",
            sound: "med",
            touch: "low to none",
            smell: "med"
        },
        xcord: 1,
        ycord: 1,
        rsvp: "test@email.com"
    }
]);

export const useEvents = () => {
    const events = useContext(EventsContext);
    return events;
}

