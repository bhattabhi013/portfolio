import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    adroid,
    amazon,
    angular,
    autozoom,
    c4gt,
    car,
    contact,
    css,
    estate,
    express,
    figma,
    firebase,
    flutter,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    smooth,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    tpddl,
    typescript,
    umeed,
    unnati,
    vritant
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
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
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: amazon,
        name: "AWS",
        type: "Cloud",
    },
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
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Mobile Application",
    },  
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    }, 
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },         
];

export const experiences = [
    {
        title: "OPEN-SOURCE CONTRIBUTOR",
        company_name: "CODE FOR GOVTECH (C4GT 23’) ",
        icon: c4gt,
        iconBg: "#f9fce8",
        date: "July 2023 - September 2023",
        points: [
            "Creating a PWA for micro-improvements, project completion, and mentor-mentee task tracking",
            "Designing the UI on Figma to optimize the user experience",
            "Writing technical documentation for clear understanding and collaboration",
            "Conducting stakeholder meetings and presenting application demos for effective communication"
        ],
    },
    {
        title: "AWS Cloud Club Captain (volunteer)",
        company_name: "Amazon",
        icon: amazon,
        iconBg: "#ffc552",
        date: "Mar 2023 - Present",
        points: [
            "Selected as one of the 50 worldwide AWS Cloud Club Captains (Amazon) for my role in mentoring and actively contributing to the community"  
        ],
    },
    {
        title: "SOFTWARE ENGINEER",
        company_name: "TATA POWER DELHI DISTRIBUTION LIMITED",
        icon: tpddl,
        iconBg: "#accbe1",
        date: "Sep 2018 - Nov 2021",
        points: [
            "Developing web apps with JavaScript, Angular, React JS, and mobile apps with Ionic, Firebase",
            "Engineering applications that decreased SLA by 20 minutes and achieved a 60% reduction in restoration time",
            "Collaborating closely with client organizations, constructing tailored mobile solutions",
            "Upgrading Job Safety Analysis, enhancing safety compliance, and reducing safety cases by 10%"
            
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
        link: 'https://github.com/bhattabhi013',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bhatt-abhi/',
    }
];

export const projects = [
    {
        iconUrl: unnati,
        theme: 'btn-back-brown',
        name: 'Unnati',
        description: 'Developed a cutting-edge Progressive Web App (PWA) with streamlined UI design on Figma, aimed at boosting project completion efficiency by 40% through micro-improvements, mentor-mentee task tracking, and secure API integration with global search capabilities',
        link: 'https://github.com/ELEVATE-Project/project-frontend/tree/c4gt',
    },
    {
        iconUrl: vritant,
        theme: 'btn-back-pink',
        name: 'Vritant',
        description: 'Created VRITANT, an AR-based nursery rhyme learning app, boasting a 3-D Playground that boosted user retention by 30%; open-sourced the project, amassing 20+ stars and engaging 20+ contributors',
        link: 'hhttps://github.com/bhattabhi013/Vritant',
    },
    {
        iconUrl: adroid,
        theme: 'btn-back-red',
        name: 'Adroid Connectz',
        description: "Implemented UI/UX for Adroidconnectz mobile app, empowering the student and mentor community. Offering solutions for startups, research, internships, higher studies, and innovations, the team, led by  researchers and entrepreneurs",
        link: 'https://play.google.com/store/apps/details?id=com.adroid.adroidconnectz',
    },
    {
        iconUrl: umeed,
        theme: 'btn-back-green',
        name: 'Umeed',
        description: 'Engineered a mobile app using Angular, Ionic, and Firebase, facilitating users in locating nearby blood donors based on blood groups and location; garnered 250+ downloads, affirming its positive reception',
        link: 'https://play.google.com/store/apps/details?id=com.plasma.covid',
    },
    {
        iconUrl: smooth,
        theme: 'btn-back-yellow',
        name: 'Smooth App',
        description: 'Merged 40+ PR(Pull Requests) in a popular open-source project with 1 million+ Play Store downloads. Open Food Facts enables users to scan and track health and carbon impact',
        link: 'https://github.com/openfoodfacts/smooth-app/pulls/bhattabhi013',
    },
    {
        iconUrl: autozoom,
        theme: 'btn-back-black',
        name: 'Autozoom AI',
        description: "AutoZoom AI: A Flutter app employing machine learning and computer vision to automatically zoom in on objects in the camera 's view, catering to users with visual challenges or those seeking focused attention in crowded environments",
        link: 'https://github.com/bhattabhi013/AutoZoomAI',
    }
];