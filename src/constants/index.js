import { google, jumpplus, ptn } from "../assets/images";
import {
    azure,
    c,
    cpp,
    csharp,
    docker,
    express,
    git,
    github,
    hackathonQds,
    java,
    javascript,
    lifeAwareApp,
    mongodb,
    nodejs,
    python,
    react,
    slack,
    tcpFileTransfer,
    udpProtocol,
    contact,
    linkedin,
    airport,
    breeze,

} from "../assets/icons";

export const skills = [
    // Programming Languages first
     {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming Language",
    },
    
    // Then, other skills based on their role in development
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // DevOps and Cloud
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud",
    },
    // Version Control
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    // Communication Tools
    {
        imageUrl: slack,
        name: "Slack",
        type: "Communication",
    }
];


export const experiences = [
    {
        title: "Assistant Project Manager",
        company_name: "PTN MED CO",
        icon: ptn, // Ensure you have a corresponding icon for PTN MED CO
        iconBg: "lightgray",
        date: "July 2023 – April 2024",
        points: [
            "Directed migration from Visual Basic to C# web apps, boosting performance and security in healthcare software.",
            "Implemented Agile in Azure DevOps, enhancing project delivery and team agility.",
            "Led design and compliance of medical web applications, meeting healthcare standards.",
            "Fostered team collaboration across development, design, and healthcare domains, ensuring medically relevant solutions.",
            "Prioritized secure development practices, safeguarded patient data, and ensured compliance with privacy laws.",
        ],
    },
    {
        title: "Google Specialist",
        company_name: "Google",
        icon: google, // Ensure you have a corresponding icon for Google
        iconBg: "#fbc3bc",
        date: "August 2022 – December 2023",
        points: [
            "Introduced Chromebooks and Chrome OS to end-users, significantly increasing platform adoption and proficiency.",
            "Configured Android devices for Linux developer mode, effectively solving complex technical issues.",
            "Educated users on Google Workspace tools, improving productivity and collaborative work environments.",
            "Developed and delivered presentations to stakeholders, showcasing product impact and strategies.",
        ],
    },
    {
        title: " Apple Authorized Representative",
        company_name: "Jump Plus",
        icon: jumpplus, // Ensure you have a corresponding icon for Jump Plus
        iconBg: "#a2d2ff",
        date: "May 2022– August 2022",
        points: [
            "Utilized Apple Bootcamp to configure Windows OS on Apple devices, catering to diverse user requirements.",
            "Managed iCloud account setups and recoveries, ensuring seamless access and data security for users.",
            "Comprehensive education on Apple products and Operating Systems (iOS, iPadOS, watchOS) enhanced customer knowledge and engagement.",
            "Strategically guided clients in selecting Apple products, aligning with their business objectives and technological needs.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: udpProtocol, // Replace with actual icon URL
        theme: 'btn-back-red', // You can customize the theme color as needed
        name: 'Reliable UDP Protocol Simulation',
        description: 'Spearheaded the creation of a reliable UDP-based network protocol supporting IPv4/IPv6 to ensure data integrity under lossy conditions. Developed sender, receiver, and proxy modules to simulate real-world network unreliability, enhancing protocol robustness.',
        link: 'https://github.com/SAMi-Rn/reliable-udp.git', // Add the link if available
    },
    {
        iconUrl: lifeAwareApp, // Replace with actual icon URL
        theme: 'btn-back-green',
        name: 'LifeAware Android App',
        description: 'Collaborated with a team to design and develop an Android app focused on emergency fall detection, utilizing accelerometer data for immediate alerts to caregivers, significantly improving emergency response capabilities.',
        link: 'https://github.com/SheyBarpagga/LifeAware.git', // Add the link if available
    },
    {
        iconUrl: tcpFileTransfer, // Replace with actual icon URL
        theme: 'btn-back-blue',
        name: 'TCP File Transfer System',
        description: 'Designed and implemented a robust TCP client-server application facilitating seamless file transfers across networks. Engineered a sophisticated architecture enabling efficient handling of multiple client connections and reliable file transmission.',
        link: 'https://github.com/SAMi-Rn/fsm.git', // Add the link if available
    },
    {
        iconUrl: hackathonQds, // Replace with actual icon URL or a generic hackathon icon
        theme: 'btn-back-pink',
        name: 'Hackathon QDS - Space to Breathe',
        description: 'Implemented "Space to Breathe", focusing on students’ wellbeing and wellness as a full-stack project during a hackathon, utilizing React for the frontend and Node Express for the backend, aimed at enhancing student life through wellness resources.',
        link: '', // Add the link if available or participated as a team
    },
    {
    iconUrl: airport,
    theme: "btn-back-yellow",
    name: "YVR SMART AIRPORT HACKATHON - 4th place",
    description: "Developed with a team of eight, an enhanced \"Crow's Nest\" system integrating BOSCH 3100i cameras with machine learning for airport space monitoring. Implemented a Node.js server facilitating communication between the machine learning algorithms and camera system. Engineered solutions to identify and prioritize cleanliness issues and detect unattended baggage for improved facility standards. Utilized a Raspberry Pi for code deployment and network camera access, ensuring seamless operation and data processing. Technologies: Python, machine learning, BOSCH 3100i cameras, Node.js; Focused on intelligent sensor and data analysis.",
    link: "",
    },
    {
    iconUrl: breeze,
    theme: "btn-back-blue",
    name: "BreezeChat - Real-Time Chat Application Development",
    description: "Developed a secure, real-time chatting application with React front-end and Node.js/Express backend. Enabled live chat, file sharing, and music streaming using socket.io, with MongoDB for data storage. Implemented encryption and hashing for data security and user privacy. Added profile customization and live status indicators for enhanced user experience. Technologies: React, Node.js, Express, MongoDB, socket.io.",
    link: "https://github.com/SAMi-Rn/BreezeChat.git"
}
    
    // Add any additional projects here
];