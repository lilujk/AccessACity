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
        "username": "troymarket",
        "eventname": "Troy Farmers Market",
        "description": "A vibrant outdoor market featuring local produce, artisan goods, and live music. A great place to shop, eat, and experience the community.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/16/2024",
        "eventtime": "09:00 AM - 01:00 PM",
        "tags": ["market", "local produce", "community", "outdoor event"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Low to none",
            "sound": "Med",
            "touch": "Low to none",
            "smell": "Med"
        },
        "xcord":115,
        "ycord": 420,
        "rsvp": "manger@troymarket.org"
    },
    {
        "username": "ksmith23",
        "eventname": "Friend's Giving Potluck",
        "description": "An informal potluck event for friends to share a meal and celebrate the season. Bring a dish to share and enjoy a cozy gathering.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/22/2024",
        "eventtime": "06:00 PM - 09:00 PM",
        "tags": ["personal event", "social", "food"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Low to none",
            "sound": "Med",
            "touch": "Med",
            "smell": "High"
        },
        "xcord": 240,
        "ycord": 30,
        "rsvp": "ksmith23@gmail.com"
    },
    {
        "username": "hangaronthehudson",
        "eventname": "Indie Rock Night at The Hangar",
        "description": "Enjoy an evening of indie rock music with performances by local bands. Tickets available online or at the door.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/23/2024",
        "eventtime": "08:00 PM - 11:00 PM",
        "tags": ["concert", "music", "indie"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "High",
            "sound": "High",
            "touch": "Low to none",
            "smell": "Low to none"
        },
        "xcord": 150,
        "ycord": 320,
        "rsvp": "hangaronthehudson@gmail.com"
    },
    {
        "username": "dlee17",
        "eventname": "Finals Study Session at RPI Library",
        "description": "Join classmates for a collaborative study session. Quiet and focus-friendly with free coffee and snacks.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "12/02/2024",
        "eventtime": "06:00 PM - 10:00 PM",
        "tags": ["study group", "students", "RPI", "academic"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Low to none",
            "sound": "Low to none",
            "touch": "Low to none",
            "smell": "Low to none"
        },
        "xcord": 180,
        "ycord": 400,
        "rsvp": "dlee17@rpi.edu"
    },
    {
        "username": "rkim41",
        "eventname": "RPI Coding Club Meetup",
        "description": "Monthly meetup for the RPI Coding Club. Discuss ongoing projects, upcoming competitions, and enjoy coding challenges.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/18/2024",
        "eventtime": "05:00 PM - 07:00 PM",
        "tags": ["club", "students", "RPI", "coding"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Low to none",
            "sound": "Low to none",
            "touch": "Low to none",
            "smell": "Low to none"
        },
        "xcord": 165,
        "ycord": 410,
        "rsvp": "rkim41@rpi.edu"
    },
    {
        "username": "jroberts",
        "eventname": "Troy High vs. Albany High Football Game",
        "description": "Join us for an exciting high school football game as Troy High takes on Albany High. Family-friendly event with food and drinks available.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/26/2024",
        "eventtime": "07:00 PM - 09:30 PM",
        "tags": ["sports", "football", "school event"],
        "cost": "$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "High",
            "touch": "Med",
            "smell": "Med"
        },
        "xcord": 190,
        "ycord": 430,
        "rsvp": "jroberts@gmail.com"
    },
    {
        "username": "npatel22",
        "eventname": "Outdoor Yoga and Meditation at Prospect Park",
        "description": "Start your day with a refreshing outdoor yoga and meditation session led by an experienced instructor. Bring your own mat.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/12/2024",
        "eventtime": "08:00 AM - 09:30 AM",
        "tags": ["wellness", "outdoor", "yoga", "meditation"],
        "cost": "$",
        "accessibility": {
            "wheelchair": "Low to none",
            "sight": "Low to none",
            "sound": "Low to none",
            "touch": "Low to none",
            "smell": "Low to none"
        },
        "xcord": 150,
        "ycord": 470,
        "rsvp": "npatel22@yahoo.com"
    },
    {
        "username": "pjackson",
        "eventname": "Midnight Dance Party at The Tipsy Moose!",
        "description": "Get ready for an electrifying night of dancing and fun at The Tipsy Moose! Featuring a live DJ, drink specials, and an unforgettable atmosphere.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/15/2024",
        "eventtime": "09:00 PM - 02:00 AM",
        "tags": ["party", "music", "nightlife", "dance"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Low to none",
            "sight": "High",
            "sound": "High",
            "touch": "High",
            "smell": "Low to none"
        },
        "xcord": 125,
        "ycord": 610,
        "rsvp": "pjackson@gmail.com"
    },
    {
        "username": "kathywhite",
        "eventname": "Troy Sports & Tailgate BBQ",
        "description": "Join us for a fun-filled day of tailgate games, BBQ food, and sports screenings. Cheer on your favorite team with friends and family!",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/16/2024",
        "eventtime": "12:00 PM - 04:00 PM",
        "tags": ["sports", "BBQ", "tailgate", "outdoor"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low to none",
            "smell": "High"
        },
        "xcord": 160,
        "ycord": 590,
        "rsvp": "kathywhite@gmail.com"
    }, 
    {
        "username": "gray12man",
        "eventname": "Troy Brunch & Mimosas",
        "description": "Join us for a fun brunch gathering with delicious food and bottomless mimosas! A great way to meet new people and enjoy a relaxing Sunday.",
        "eventcity": "Troy",
        "eventstate": "NY",
        "eventdate": "11/09/2024",
        "eventtime": "11:00 AM - 01:00 PM",
        "tags": ["brunch", "social", "food", "drinks"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Low to none",
            "sound": "Med",
            "touch": "Low to none",
            "smell": "High"
        },
        "xcord": 105,
        "ycord": 455,
        "rsvp": "graymerman@icloud.com"
    },
    {
        "username": "asmith456",
        "eventname": "Live Jazz Concert at Saratoga Performing Arts Center",
        "description": "An evening of live jazz performances by renowned artists at the Saratoga Performing Arts Center. Enjoy a night of great music and ambiance.",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/17/2024",
        "eventtime": "06:30 PM - 09:00 PM",
        "tags": ["concert", "jazz", "live music", "entertainment"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "High",
            "touch": "Low to none",
            "smell": "Low to none"
        },
        "xcord": 95,
        "ycord": 380,
        "rsvp": "asmith456@spac.org"
    },
    {
        "username": "olivia_rose23",
        "eventname": "Sunday Brunch with Friends",
        "description": "Join us for a relaxing Sunday brunch to catch up and enjoy delicious food. We'll have some homemade waffles, mimosas, and fresh fruit!",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/19/2024",
        "eventtime": "11:00 AM - 01:00 PM",
        "tags": ["brunch", "friends", "relaxation", "food"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low to none",
            "smell": "High"
        },
        "xcord": 250,
        "ycord": 300,
        "rsvp": "olivia_rose23@yahoo.com"
    },
    {
        "username": "nathan2bell",
        "eventname": "Movie Marathon at Nathan's",
        "description": "Come over for a movie marathon night featuring the best action films. Snacks and drinks will be provided, but feel free to bring your own favorites!",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/21/2024",
        "eventtime": "06:00 PM - 12:00 AM",
        "tags": ["movies", "action", "friends", "snacks"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "High",
            "sound": "High",
            "touch": "Low",
            "smell": "Low to none"
        },
        "xcord": 230,
        "ycord": 410,
        "rsvp": "nathan2bell@gmail.com"
    },
    {
        "username": "lucyjames",
        "eventname": "Lucy's Birthday Bash",
        "description": "Celebrate Lucy's birthday with cake, music, and fun activities. There will be a DJ, dancing, and lots of laughter! Don't miss out!",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/22/2024",
        "eventtime": "07:00 PM - 12:00 AM",
        "tags": ["birthday", "party", "music", "friends"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "High",
            "sound": "High",
            "touch": "Low to none",
            "smell": "Low to none"
        },
        "xcord": 280,
        "ycord": 350,
        "rsvp": "lucy_james@hotmail.com"
    },
    {
        "username": "emmabrowndog",
        "eventname": "Board Game Night",
        "description": "Gather around for a competitive board game night! From Monopoly to Catan, we'll have plenty of games to enjoy. Snacks will be available.",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/23/2024",
        "eventtime": "07:00 PM - 10:00 PM",
        "tags": ["board games", "friends", "competition", "snacks"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "High",
            "smell": "Low"
        },
        "xcord": 260,
        "ycord": 380,
        "rsvp": "emmajbrown@gmail.com"
    },
    {
        "username": "david_circles",
        "eventname": "DIY Craft Night",
        "description": "Join us for a creative DIY craft night. Bring your materials, or use what's provided, and let's create something amazing together!",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/25/2024",
        "eventtime": "06:30 PM - 09:00 PM",
        "tags": ["crafting", "DIY", "creative", "friends"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low to none",
            "touch": "High",
            "smell": "Low"
        },
        "xcord": 50,
        "ycord": 420,
        "rsvp": "davidsharey@icloud.com"
    },
    {
        "username": "elizabeth_green",
        "eventname": "Saratoga Springs High School Robotics Club - Open House",
        "description": "Explore the world of robotics! Join the Saratoga Springs High School Robotics Club for an open house event where you can learn about ongoing projects and meet the team.",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/20/2024",
        "eventtime": "03:30 PM - 05:00 PM",
        "tags": ["robotics", "high school", "STEM", "club"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Med",
            "smell": "Low"
        },
        "xcord": 100,
        "ycord": 325,
        "rsvp": "elizabeth_green@saratogaschools.org"
    },
    {
        "username": "matthew_jones_12",
        "eventname": "Saratoga Springs Charity Fundraiser - Help for Homeless Families",
        "description": "Join us for a fundraising event to support local homeless families. The event will feature a silent auction, local speakers, and live music.",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/21/2024",
        "eventtime": "06:00 PM - 08:30 PM",
        "tags": ["fundraiser", "charity", "community", "homelessness"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low to none",
            "smell": "Low"
        },
        "xcord": 40,
        "ycord": 340,
        "rsvp": "matthewjones@gmail.com"
    },
    {
        "username": "sophie_miller",
        "eventname": "Saratoga Springs High School Art Show",
        "description": "A showcase of student artwork from the Saratoga Springs High School art program. Enjoy visual art from talented local students in various media.",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/22/2024",
        "eventtime": "06:00 PM - 08:00 PM",
        "tags": ["art", "high school", "student showcase", "community"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "High",
            "sound": "Low",
            "touch": "Low to none",
            "smell": "Low"
        },
        "xcord": 85,
        "ycord": 320,
        "rsvp": "sophie_miller@saratogaschools.org"
    },
    {
        "username": "caleb27rogers",
        "eventname": "Saratoga Springs Environmental Awareness Rally",
        "description": "Join the community for a rally focused on environmental sustainability. This event includes speakers, student-led discussions, and educational booths on reducing waste and protecting nature.",
        "eventcity": "Saratoga Springs",
        "eventstate": "NY",
        "eventdate": "11/23/2024",
        "eventtime": "01:00 PM - 03:00 PM",
        "tags": ["environment", "sustainability", "community", "education"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Med",
            "smell": "Low"
        },
        "xcord": 120,
        "ycord": 400,
        "rsvp": "caleb_rogers@ssevent.org"
    },
    {
        "username": "emilt34smith",
        "eventname": "Bake Sale for Charity",
        "description": "Join us for a bake sale supporting local food banks. All proceeds go to feeding families in need. Fresh cookies, cupcakes, and more!",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/18/2024",
        "eventtime": "10:00 AM - 02:00 PM",
        "tags": ["fundraising", "charity", "bake sale", "community"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low to none",
            "smell": "High"
        },
        "xcord": 290,
        "ycord": 170,
        "rsvp": "emilt34smith@gmail.com"
    },
    {
        "username": "shirleyannj",
        "eventname": "Taylor Swift Tribute Concert",
        "description": "A tribute concert celebrating the music of Taylor Swift. Enjoy live performances of her biggest hits, from country to pop, and experience the magic of her iconic songs!",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/19/2024",
        "eventtime": "09:00 PM - 11:00 PM",
        "tags": ["concert", "music", "live performances", "Taylor Swift"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low to none",
            "smell": "High"
        },
        "xcord": 155,
        "ycord": 315,
        "rsvp": "shirleyannj@taylortribute.com"
    },
    {
        "username": "henry_alt4",
        "eventname": "NYU Graduate Student Mixer",
        "description": "A networking event for graduate students from all departments. Come meet new people, exchange ideas, and enjoy refreshments!",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/20/2024",
        "eventtime": "06:00 PM - 08:00 PM",
        "tags": ["networking", "graduate students", "social", "NYU"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 150,
        "ycord": 350,
        "rsvp": "henryjalt@gmail.com"
    },
    {
        "username": "jenny.1987",
        "eventname": "Silent Auction for Animal Rescue",
        "description": "Bid on amazing items to support local animal rescues. Items include signed memorabilia, gift certificates, and art pieces.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/21/2024",
        "eventtime": "05:30 PM - 08:30 PM",
        "tags": ["fundraising", "silent auction", "charity", "animals"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low to none",
            "smell": "Low"
        },
        "xcord": 230,
        "ycord": 355,
        "rsvp": "jenny@animalrescue.com"
    },
    {
        "username": "mike_@sk8r",
        "eventname": "Skateboarding Competition",
        "description": "Come show off your skills at the annual skateboarding competition! Prizes for the best tricks and top skaters. Open to all levels.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/23/2024",
        "eventtime": "11:00 AM - 04:00 PM",
        "tags": ["competition", "skateboarding", "sports", "fun"],
        "cost": "$",
        "accessibility": {
            "wheelchair": "Low",
            "sight": "Med",
            "sound": "High",
            "touch": "Med",
            "smell": "Low"
        },
        "xcord": 205,
        "ycord": 440,
        "rsvp": "mike@boardsNYC.com"
    },
    {
        "username": "melissa99_scholar",
        "eventname": "Mental Health Awareness Workshop",
        "description": "Join us for a mental health workshop focusing on stress management and coping strategies. Open to students and professionals alike.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/24/2024",
        "eventtime": "02:00 PM - 04:00 PM",
        "tags": ["mental health", "workshop", "education", "well-being"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 140,
        "ycord": 420,
        "rsvp": "melissaworkshops@icloud.com"
    },
    {
        "username": "timrock_01",
        "eventname": "Rock Concert Fundraiser for Homeless Shelter",
        "description": "Come rock out for a cause! Enjoy live music from local bands and support the local homeless shelter with your donation.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/26/2024",
        "eventtime": "07:00 PM - 10:00 PM",
        "tags": ["music", "fundraiser", "concert", "community"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "High",
            "sound": "High",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 210,
        "ycord": 370,
        "rsvp": "timrock_01@yahoo.com"
    },
    {
        "username": "lisa.pasta_89",
        "eventname": "Cooking Class: Italian Cuisine",
        "description": "Learn how to cook authentic Italian dishes with our hands-on cooking class. Includes appetizers, main courses, and dessert.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/27/2024",
        "eventtime": "06:00 PM - 09:00 PM",
        "tags": ["cooking", "class", "food", "Italian"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "High",
            "smell": "High"
        },
        "xcord": 165,
        "ycord": 335,
        "rsvp": "lisa_pastas@gmail.com"
    },
    {
        "username": "alex23_djbeatz",
        "eventname": "DJ Night at The Rooftop",
        "description": "Join us for an unforgettable night of music, drinks, and dancing at The Rooftop. Featuring guest DJ Alex spinning the hottest tracks.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/29/2024",
        "eventtime": "09:00 PM - 02:00 AM",
        "tags": ["music", "nightlife", "DJ", "party"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "Low",
            "sight": "High",
            "sound": "High",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 155,
        "ycord": 400,
        "rsvp": "alex23_dj@rooftopnyc.com"
    },
    {
        "username": "emily_run21",
        "eventname": "Charity 5K Run for Cancer Research",
        "description": "Run for a cause! Join us for a 5K run through Central Park to raise funds for cancer research. T-shirts for all participants.",
        "eventcity": "New York City",
        "eventstate": "NY",
        "eventdate": "11/30/2024",
        "eventtime": "08:00 AM - 11:00 AM",
        "tags": ["charity", "5K", "fitness", "fundraising"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 170,
        "ycord": 415,
        "rsvp": "emily@run4acause.com"
    },
    {
        "username": "john_smith29",
        "eventname": "Albany Charity Gala",
        "description": "A formal gala to raise funds for local educational scholarships. Join us for an elegant evening with dinner, speeches, and an auction.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/01/2024",
        "eventtime": "06:00 PM - 10:00 PM",
        "tags": ["fundraising", "gala", "charity", "community"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 265,
        "ycord": 440,
        "rsvp": "events@albanygala.org"
    },
    {
        "username": "mike_doe_92",
        "eventname": "Tech Meet-Up for Entrepreneurs",
        "description": "A networking event for tech entrepreneurs in Albany. Discuss new trends in AI, machine learning, and startup growth.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/03/2024",
        "eventtime": "05:30 PM - 08:00 PM",
        "tags": ["networking", "tech", "entrepreneurs", "AI"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 235,
        "ycord": 400,
        "rsvp": "mike_doe@startupmeetup.com"
    },
    {
        "username": "emily_green7",
        "eventname": "Women in Business Panel Discussion",
        "description": "Join us for an empowering evening with successful women in business sharing their stories and insights. A great opportunity to network and learn.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/05/2024",
        "eventtime": "06:00 PM - 08:30 PM",
        "tags": ["networking", "women in business", "panel discussion", "empowerment"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 280,
        "ycord": 110,
        "rsvp": "events@albanywomeninbusiness.org"
    },
    {
        "username": "alex_rider123",
        "eventname": "UAlbany Winter Career Fair",
        "description": "Meet top employers and learn about career opportunities in a variety of fields. The perfect event to jump-start your career post-graduation.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/06/2024",
        "eventtime": "10:00 AM - 02:00 PM",
        "tags": ["career fair", "networking", "job opportunities", "UAlbany"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 120,
        "ycord": 290,
        "rsvp": "career@ualbany.edu"
    },
    {
        "username": "sarah_jones88",
        "eventname": "Holiday Concert for Charity",
        "description": "Enjoy a festive holiday concert featuring local musicians, with proceeds benefiting local homeless shelters. A great way to get into the holiday spirit.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/09/2024",
        "eventtime": "06:00 PM - 08:00 PM",
        "tags": ["concert", "charity", "holiday", "music"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "High",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 270,
        "ycord": 430,
        "rsvp": "sarah_jones@holidayconcert.org"
    },
    {
        "username": "peter_lam_1990",
        "eventname": "Tech for Good Hackathon",
        "description": "Join us for a 24-hour hackathon aimed at solving social problems with technology. Teams will work on projects to improve access to education, healthcare, and more.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/12/2024",
        "eventtime": "09:00 AM - 12/13/2024 09:00 AM",
        "tags": ["hackathon", "tech", "social good", "innovation"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 115,
        "ycord": 290,
        "rsvp": "peter_lam@techforgood.org"
    },
    {
        "username": "lucy_wong123",
        "eventname": "UAlbany Student Government Elections Debate",
        "description": "Watch the candidates for UAlbany Student Government present their platforms and engage in a debate on key campus issues.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/15/2024",
        "eventtime": "05:00 PM - 07:00 PM",
        "tags": ["debate", "student government", "UAlbany", "elections"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "High",
            "sound": "Med",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 95,
        "ycord": 280,
        "rsvp": "lwong32@ualbany.edu"
    },
    {
        "username": "lisa_brown98",
        "eventname": "UAlbany Finals Study Group",
        "description": "A student-led study group to help prepare for finals. Come review key material with peers and exchange study tips.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/17/2024",
        "eventtime": "07:00 PM - 10:00 PM",
        "tags": ["study group", "UAlbany", "finals", "students"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "High",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 105,
        "ycord": 285,
        "rsvp": "lbrown2@ualbany.edu"
    },
    {
        "username": "ryan_shaw02",
        "eventname": "Personal Yoga Retreat",
        "description": "Join me for a peaceful weekend retreat focusing on yoga, mindfulness, and relaxation. A great way to recharge and find inner peace.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/20/2024",
        "eventtime": "08:00 AM - 12/22/2024 05:00 PM",
        "tags": ["yoga", "retreat", "mindfulness", "wellness"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "Low",
            "sight": "High",
            "sound": "Low",
            "touch": "High",
            "smell": "Med"
        },
        "xcord": 300,
        "ycord": 400,
        "rsvp": "ryanshaw02@icloud.com"
    },
    {
        "username": "ualbanyevents",
        "eventname": "UAlbany v. RPI Hockey Game",
        "description": "Come support the UAlbany hockey team as they face off in an exciting matchup against RPI! Enjoy live action, team spirit, and community camaraderie.",
        "eventcity": "Albany",
        "eventstate": "NY",
        "eventdate": "12/01/2024",
        "eventtime": "07:00 PM - 09:00 PM",
        "tags": ["sports", "hockey", "UAlbany", "RPI"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 130,
        "ycord": 315,
        "rsvp": "events@albanyhockey.org"
    },
    {
        "username": "jackson_ryan35",
        "eventname": "Buffalo Startup Expo",
        "description": "A networking event for local startups and entrepreneurs to showcase their products, exchange ideas, and collaborate on innovative solutions.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/01/2024",
        "eventtime": "09:00 AM - 04:00 PM",
        "tags": ["startup", "networking", "entrepreneurs", "business"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 170,
        "ycord": 500,
        "rsvp": "info@buffalostartupexpo.com"
    },
    {
        "username": "alice_brown74",
        "eventname": "University of Buffalo Career Fair",
        "description": "Connect with recruiters from leading companies, explore internship opportunities, and network with professionals from various industries.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/03/2024",
        "eventtime": "10:00 AM - 02:00 PM",
        "tags": ["career fair", "networking", "job opportunities", "UB"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 100,
        "ycord": 340,
        "rsvp": "careercenter@buffalo.edu"
    },
    {
        "username": "tommy_lee38",
        "eventname": "Buffalo Winterfest",
        "description": "A winter celebration with ice sculptures, food trucks, live music, and activities for the whole family. Come celebrate the season with us.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/05/2024",
        "eventtime": "04:00 PM - 09:00 PM",
        "tags": ["festival", "winter", "food", "family-friendly"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "High",
            "touch": "Low",
            "smell": "Med"
        },
        "xcord": 50,
        "ycord": 330,
        "rsvp": "info@buffalowinterfest.org"
    },
    {
        "username": "rebecca_wood89",
        "eventname": "Buffalo Museum of Art Holiday Gala",
        "description": "An elegant evening featuring art exhibitions, live performances, and a silent auction to raise funds for the museum's educational programs.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/06/2024",
        "eventtime": "06:00 PM - 10:00 PM",
        "tags": ["art", "gala", "fundraising", "holiday"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "High",
            "sound": "Med",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 60,
        "ycord": 270,
        "rsvp": "events@buffalomuseum.org"
    },
    {
        "username": "matthew_clark_56",
        "eventname": "Personal Fitness Challenge",
        "description": "Join me for a month-long fitness challenge designed to motivate and push each other towards our health goals. Let's get stronger together!",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/08/2024",
        "eventtime": "09:00 AM - 12/31/2024 11:59 PM",
        "tags": ["fitness", "challenge", "health", "motivation"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Low",
            "sight": "Med",
            "sound": "Low",
            "touch": "High",
            "smell": "Low"
        },
        "xcord": 80,
        "ycord": 300,
        "rsvp": "matthew_clark_56@outlook.com"
    },
    {
        "username": "isabel_walker24",
        "eventname": "Buffalo's Best Food Truck Rally",
        "description": "Sample delicious dishes from Buffalo’s finest food trucks, featuring everything from gourmet tacos to vegan delights. Don’t miss this culinary extravaganza!",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/09/2024",
        "eventtime": "11:00 AM - 03:00 PM",
        "tags": ["food", "festival", "trucks", "local"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Low",
            "sound": "High",
            "touch": "Low",
            "smell": "High"
        },
        "xcord": 115,
        "ycord": 420,
        "rsvp": "info@buffalofoodtruckrally.com"
    },
    {
        "username": "andrew_morris92",
        "eventname": "Buffalo Robotics League: Finals",
        "description": "Watch the top teams compete in the final rounds of the Buffalo Robotics League. Robots will face off in various challenges, showing off their engineering skills.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/12/2024",
        "eventtime": "10:00 AM - 04:00 PM",
        "tags": ["robotics", "competition", "engineering", "STEM"],
        "cost": "$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "Med",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 125,
        "ycord": 370,
        "rsvp": "andrew_morris@buffaloroboticsleague.org"
    },
    {
        "username": "laura_gibson87",
        "eventname": "Personal Book Club Meetup",
        "description": "Join me and fellow book lovers for a cozy night discussing our latest read. This month: 'The Midnight Library' by Matt Haig.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/15/2024",
        "eventtime": "06:30 PM - 08:30 PM",
        "tags": ["book club", "reading", "social", "personal"],
        "cost": "Free",
        "accessibility": {
            "wheelchair": "Low",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 120,
        "ycord": 120,
        "rsvp": "laura_gibson87@gmail.com"
    },
    {
        "username": "chris_wilson_72",
        "eventname": "Buffalo Tech Symposium",
        "description": "A gathering of industry experts discussing the latest trends in AI, cybersecurity, and digital innovation. Join us for insightful talks and networking.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/18/2024",
        "eventtime": "09:00 AM - 03:00 PM",
        "tags": ["tech", "conference", "AI", "cybersecurity"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "Med",
            "sight": "Med",
            "sound": "Low",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 145,
        "ycord": 385,
        "rsvp": "info@buffalotechsymposium.com"
    },
    {
        "username": "buffalobisons",
        "eventname": "Buffalo Bisons Home Game",
        "description": "Join us for a thrilling Buffalo Bisons Baseball game! Cheer on the team, enjoy the excitement of the game, and experience the electric atmosphere of game day.",
        "eventcity": "Buffalo",
        "eventstate": "NY",
        "eventdate": "12/01/2024",
        "eventtime": "01:00 PM - 04:00 PM",
        "tags": ["baseball", "sports", "Buffalo Bisons", "game"],
        "cost": "$$$",
        "accessibility": {
            "wheelchair": "High",
            "sight": "Med",
            "sound": "High",
            "touch": "Low",
            "smell": "Low"
        },
        "xcord": 95,
        "ycord": 400,
        "rsvp": "info@buffalobisons.com"
    }
]);

export const useEvents = () => {
    const events = useContext(EventsContext);
    return events;
}

