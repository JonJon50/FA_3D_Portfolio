import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "December 2021 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - February 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "February 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but John proved me wrong.",
      name: "Lebron James",
      designation: "Power house",
      company: "Lakers",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like John does.",
      name: "Stephen Curry",
      designation: "3 point shooter",
      company: "Warriors",
      image: "https://e0.365dm.com/22/05/768x432/skysports-steph-curry-nba-basketball_5771331.jpg?20220514133850",
    },
    {
      testimonial:
        "After John optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Luka Dončić",
      designation: "Point Guard",
      company: "Mavericks",
      image: "https://a.espncdn.com/photo/2022/1130/r1099347_1296x729_16-9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "WorkHive",
      description:
        "Our website is a platform for job seekers looking for opportunities. We provide a space for companies to post job openings and for applicants to browse through and apply for positions that match their skills and interests.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/TrentLe/WorkHive",
    },
    {
      name: "Nanny's Diary",
      description:
        "Entrusting your family childcare to a Nanny's home daycare gives children the added security of being cared for in a home environment while still giving parents the peace of mind that comes from knowing their children are under the supervision of licensed professionals",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "handlebars",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/JonJon50/Nannys-Diary1",
    },
    {
      name: "Fit Resolution",
      description:
        "Using Geofetch for everyone to be a part of the interaction. Knowing the our fittest goals is important. Through this built we are focus on a functionality that is efficient and effective while saving lives.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "DOM",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/JonJon50/Fit-Resolution",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };