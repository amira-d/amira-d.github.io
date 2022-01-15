/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
username: "Amira Doghri",
  title: " Hi all , I'm Amira DOGHRI",
  subTitle: emoji("A Software Engineering student 🚀 at ESPRIT - Tunisia, with a minor in Business Intelligence | Exchange student at SUAS - Germany | Currently working as a Dash Solutions Developer at Plotly - Canada."),
  resumeLink: "https://drive.google.com/file/d/170v9_NgaOBG0aHgJilFOlJ5pSVKzplA3/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amira-d",
  linkedin: "https://www.linkedin.com/in/amiradoghri/",
  gmail: "doghriamira@gmail.com",
  facebook: "https://www.facebook.com/amiradoghri",
  instagram:"https://www.instagram.com/amira.doghri",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My skills",
  subTitle: "Working with different tools and following up the programming trends is my thing!",
  skills: [
    emoji(
      "⚡ Develop Data analytics web apps/ Dashboards"
    ),
    emoji("⚡ Working with Big data and Business intelligence tools"),
    emoji(
      "⚡ Graphic Design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Dash",
      fontAwesomeClassname: "fab fa-bar-chart"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
     {
      skillName: "java/JEE/Spring/hibernate/jsf",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Adobe Illustrator/Photoshop/AfterEffects",
      fontAwesomeClassname: "fab fa-adobe"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Private Higher School of Engineering and Technology - ESPRIT",
      logo: require("./assets/images/espritLogo1.jpeg"),
      subHeader: "Software Engineering Diplmoa",
      duration: "September 2017 - Current",
      desc: "Estimated graduation: July 2022",
      descBullets: [
        "Major in Software Engineering",
        "Minor in Business Intelligence",
      ]
    },
    {
      schoolName: "ElWafa High School ",
      logo: require("./assets/images/lyceeLogo.jpg"),
      subHeader: "High school degree ",
      duration: "Septembre 2016 - Juillet 2017",
      desc: "",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Your languages

const languages = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
     {
      Language: "Arabe",  //Insert stack or technology you have experience in
      Proficiency: "90%"  //Insert relative proficiency in percentage
    },
    {
      Language: "Français",
      Proficiency: "60%"
    },
    {
      Language: "Anglais",
      Proficiency: "70%"
    },
    {
      Language: "Turque",
      Proficiency: "30%"
    },
    {
      Language: "Allemand",
      Proficiency: "10%"
    }
  ],
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
      {
      role: "Dash Solutions Developer",
      company: "Plotly",
      companylogo: require("./assets/images/plotly_logo_new-01.png"),
      date: "September 2021 – Current",
      desc: "",
      descBullets: [

      ]
    },
      {
      role: "Dash solutions intern",
      company: "Plotly",
      companylogo: require("./assets/images/plotly_logo_new-01.png"),
      date: "June 2021 – August 2021",
      desc: "",
      descBullets: [
        "",
      ]
    },
    {
      role: "Software engineering intern",
      company: "Arab Tunisian Bank - HQ Tunis",
      companylogo: require("./assets/images/atblogo.jpg"),
      date: "Juillet 2020 – Août 2020",
      desc: "A 2 months internship where I worked on a banking web applictaion project.",
      descBullets: [
        "Bank accounts and transactions management , loan simulation process.",
        "Tools: JEE / Hibernate / JSF",
        "Extra feature: RPA task automation for bankers"
      ]
    },
    {
      role: "Web development intern",
      company: "IbComProd- Tunis",
      companylogo: require("./assets/images/ibcomprod logo.jpg"),
      date: "July 2019",
      desc: "Maintain  and devleop multiple CMS websites."    },
    {
      role: "Marketing intern",
      company: "Dabchy.com - Tunis",
      companylogo: require("./assets/images/dabchylogo.png"),
      date: "July 2018 – August 2018",
     descBullets: [
    "   La participation à la mise en place et l'application de la stratégie Marketing digitale au sein de la société - La création du contenu pour les campagnes marketing ( réseaux sociaux et Fb Ads ) ",
    "   L'animation de nos réseaux sociaux ( comptes FB et Instagram ) ",
    "   La conception de certaines interfaces de l'application mobile en vue d'optimiser le UI/UX ",
        ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  languages,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
