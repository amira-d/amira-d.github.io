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
      "⚡ Programming"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Plotly Dash",
      fontAwesomeClassname: "far fa-chart-bar"
    },
    {
      skillName: "PowerBI",
      fontAwesomeClassname: "fas fa-signal"
    },
    {
      skillName: "Talend",
      fontAwesomeClassname: "fas fa-project-diagram"
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
      skillName: "Java/JEE Frameworks",
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
      Stack: "Plotly Dash application development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data analysis",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine learning",
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
      Language: "Arabic",  //Insert stack or technology you have experience in
      Proficiency: "90%"  //Insert relative proficiency in percentage
    },
    {
      Language: "French",
      Proficiency: "60%"
    },
    {
      Language: "English",
      Proficiency: "70%"
    },
    {
      Language: "Turkish",
      Proficiency: "30%"
    },
    {
      Language: "German",
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
      companylogo: require("./assets/images/square icon.png"),
      date: "June 2021 – Current",
      desc: "",
      descBullets: [
        "Connect to data sources for  Data Visualization",
        "Work within specs provided by customer to develop Dash applications"
      ]
    },
    {
      role: "Software engineering intern",
      company: "ATBank - HQ Tunis",
      companylogo: require("./assets/images/atblogo.jpg"),
      date: "Juillet 2020 – Août 2020",
      desc: "A 2 months internship where I worked on a banking web applictaion project.",
      // descBullets: [
      //   "Developed a Java EE banking web application(JEE / Hibernate and JSF ) to make daily customer and banker’s operations easier.",
      //   "Implemented RPA (Robotic Process Automation ) for repetitive tasks using UI Path."

      // ]
    },
    {
      role: "Web development intern",
      company: "IbComProd- Tunis",
      companylogo: require("./assets/images/ibcomprod logo.jpg"),
      date: "July 2019",
      desc: "Handled different websites of the agency and worked on improving the front-end using their CMS and web development coding techniques."    },
    {
      role: "Marketing intern",
      company: "Dabchy.com-HQ Tunis",
      companylogo: require("./assets/images/dabchylogo.png"),
      date: "July 2018 – August 2018",
      desc : "Designed a mobile app landing interface by applying my graphic , UI UX design skills and handled the company's social media accounts by applying their marketing strategy ."
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
  title: "Academic Projects",
  subtitle: "SOME MAJOR PROJECTS THAT I WORKED ON",
  projects: [
    {
      image: require("./assets/images/projeqtor.png"),
      projectName: "Projeqtor X Talys",
      projectDesc: "Business Intelligence Project (6-person team)",
      footerLink: [
        {
          name: "Check promo video",
          url: "https://www.linkedin.com/posts/amiradoghri_datawarehousing-talend-datavisualizations-activity-6803341197092888576-4fGO/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/scrumify1.png"),
      projectName: "Scrumify",
      projectDesc: " Scrum Project Management Platform ( Web - Desktop - Mobile )",
      footerLink: [
        {
          name: "Check promo video",
          url: "https://drive.google.com/file/d/1YmBR9BAaNboVIaCJfclK9ik8b3J2BTj-/view?usp=sharing"
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
      title: "She Solves! ",
      subtitle: "Programming contest.           ",
      image: require("./assets/images/shesolves.jpg"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1_9_gDwHdciHLGzL1Y3Ubc3TZ46CO9WsB/view?usp=sharing" },

      ]
    },
    {
      title: "Coursera certificate - Cisco",
      subtitle: "Data Communications and Network Services.",
      image: require("./assets/images/cisco.jpg"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1OcTdJYtJ8egiib185tF8CkeDe6_uSwDH/view?usp=sharing" }]
    },

    {
      title: "Coursera certificate- Google",
      subtitle: "Technical Support Fundamentals",
      image: require("./assets/images/google.png"),
      footerLink: [
        { name: "Certificat", url: "https://drive.google.com/file/d/17nwfKYppXaEodH0Y7lpTccP72cyuUqto/view?usp=sharing" },
      ]
    },
    {
      title: "Coursera certificate- deeplearning.ai",
      subtitle: "AI for everyone                ",
      image: require("./assets/images/deeplearning.png"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1PoN6mLQHMm3pMSrjwsE9IpDoNPtMB5UG/view?usp=sharing" },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Personal experiences",
  subtitle:
    "My extra-curricular activities and acheivements.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
   {
      url: "https://fellows.taefund.org/profiles.php?id_article=100",
      title: "TAEF Fellowship",
      description: "The Tunisian American Entreprise Fund Fellowship is a program  that  helps students discover the professional world of startup and small businesses through an inernship matching program."
    },
    {
      url: "https://drive.google.com/file/d/1hu582CuSLremI9EfqT34itW5KNofNV5Q/view?usp=sharing",
      title: "Global Volunteering in Turkey - Istanbul",
      description: "Volunteered as an english tutor for high school students in Istanbul : Led presentations and discussions about diverse topics to help them practice their English language."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Reference",
  subtitle: emoji(
    "I was lucky enough to learn from the best from the first steps into the professional world 😅"
  ),

  talks: [
    {
      title: "Amani Mansouri,Co-fondatrice et CEO de Dabchy.com",
      subtitle: "The CEO of the first company I worked in speaking of my experience as an intern.",
      slides_url: "https://soundcloud.com/humansinbusiness/2-up-with-flat6labs?fbclid=IwAR2BmfEUO-NkIdD4vMr3STunWTLkph91S6fOQZ9aocJu5iMkEExsBxWGrOE",
      event_url: "https://drive.google.com/file/d/1oIEZO32C2TvDKHbgNCkQJsWVWqVIXx6H/view?usp=sharing"
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Feel free to contact me anytime.",
  number: "+4915228112718",
  email_address: "doghriamira@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
