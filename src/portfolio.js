
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Amira Doghri",
  title: "Bonjour , je suis DOGHRI Amira",
  subTitle: emoji("Eleve ingénieur en informatique  🚀 à ESPRIT , spécialité Business Intelligence / Informatique Décisionnel."),
  resumeLink: "https://drive.google.com/file/d/170v9_NgaOBG0aHgJilFOlJ5pSVKzplA3/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/amira-d",
  linkedin: "https://www.linkedin.com/in/amiradoghri/",
  gmail: "doghriamira@gmail.com",
  facebook: "https://www.facebook.com/amiradoghri",
  instagram:"https://www.instagram.com/amira.doghri",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Mes compétences",
  subTitle: "Ce que j'ai appris tout au long de mon parcours académique ",
  skills: [
    emoji("⚡ Developpement web et mobile"),
    emoji("⚡ Big Data et Business Intelligence "),
    emoji("⚡ Graphic Design")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java/JEE/Spring/hibernate/jsf",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "sql-database / Oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database / Oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Adobe Illustrator/Photoshop/AfterEffects",
      fontAwesomeClassname: "fab fa-adobe"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Ecole Supérieure Privée d'ingénierie et des Technologies - ESPRIT",
      logo: require("./assets/images/espritLogo1.jpeg"),
      subHeader: "Diplôme d'ingenieur en informatique",
      duration: "Septembre 2017 - Courant",
      desc: "",
      descBullets: [
        "2 années Préparaoire intégré",
        "3 années cycle ingénieur, spécialité BI",
      ]
    },
    {
      schoolName: "Lycée ElWafa",
      logo: require("./assets/images/lyceeLogo.jpg"),
      subHeader: "Baccalauréat en Mathématiques ",
      duration: "Septembre 2016 - Juillet 2017",
      desc: "",

    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Arabe",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Français",
      progressPercentage: "60%"
    },
    {
      Stack: "Anglais",
      progressPercentage: "70%"
    },
    {
      Stack: "Turque",
      progressPercentage: "30%"
    },
    {
      Stack: "Allemand",
      progressPercentage: "10%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Stagiaire au département informatique",
      company: "ATB - Siège Tunis",
      companylogo: require("./assets/images/atblogo.jpg"),
      date: "Juillet 2020 – Août 2020",
      desc: "Stage de deux mois , on m'a  proposé un projet d'une application web bancaire pour gestion des comptes , transactions et simulation des crédits pour le client et le banquier .",
      descBullets: [
        "Application Web JEE / Hibernate / JSF",
        "Automatisation des tâches admin : RPA"
      ]
    },
    {
      role: "Stagiaire Developpement Web",
      company: "IBcomprod Lac 2 ",
      companylogo: require("./assets/images/ibcomprod logo.jpg"),
      date: "Juillet 2019",
      desc: "Maintenance et amélioration de plusieurs sites web CMS "    },
    {
      role: "Stagiaire Marketing",
      company: "Dabchy.com - Tunis",
      companylogo: require("./assets/images/dabchylogo.png"),
      date: "Juillet 2018 – Août 2020",
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
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "amira-d", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};

// Blogs Section
//Experiences personnelles
const blogSection = {

  title: "Expériences Personnelles",
  subtitle: "Mes activitès hors parcours académique qui m'ont marqué.  ",

  blogs: [
    {
      url: "https://fellows.taefund.org/profiles.php?id_article=100",
      title: "TAEF Fellowship",
      description: "Le Tunisian American Entreprise Fund Fellowship est un programme qui permet d'intégrer des startup et des PME à travers le TAEF."
    },
    {
      url: "https://drive.google.com/file/d/1hu582CuSLremI9EfqT34itW5KNofNV5Q/view?usp=sharing",
      title: "Stage Volontaire en Turquie - Istanbul",
      description: "Programme de stage dans lequel je fesais du coaching à des lycées pour pratiquer la langue anglaise à travers de différentes activitès."
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji(" Certifications 🏆 "),
  subtitle: "Les Certifications que j'ai obtenu : Challenges et cours en ligne !",

  achievementsCards: [
    {
      title: "She Solves! ",
      subtitle: "Compétition de programmation.           ",
      image: require("./assets/images/shesolves.jpg"),
      footerLink: [
        { name: "Certificat", url: "https://drive.google.com/file/d/1_9_gDwHdciHLGzL1Y3Ubc3TZ46CO9WsB/view?usp=sharing" },

      ]
    },
    {
      title: "Certificat Coursera - Cisco",
      subtitle: "Data Communications and Network Services.",
      image: require("./assets/images/cisco.jpg"),
      footerLink: [
        { name: "Certificat", url: "https://drive.google.com/file/d/1OcTdJYtJ8egiib185tF8CkeDe6_uSwDH/view?usp=sharing" }]
    },

    {
      title: "Certificat Coursera - Google",
      subtitle: "Technical Support Fundamentals",
      image: require("./assets/images/google.png"),
      footerLink: [
        { name: "Certificat", url: "https://drive.google.com/file/d/17nwfKYppXaEodH0Y7lpTccP72cyuUqto/view?usp=sharing" },
      ]
    },
    {
      title: "Certificat Coursera - deeplearning.ai",
      subtitle: "AI for everyone                ",
      image: require("./assets/images/deeplearning.png"),
      footerLink: [
        { name: "Certificat", url: "https://drive.google.com/file/d/1PoN6mLQHMm3pMSrjwsE9IpDoNPtMB5UG/view?usp=sharing" },
      ]
    }
  ]
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Clubs",
  subtitle: "Les clubs que j'ai rejoint lors de mes années universitaires.",
  projects: [
    {
      image: require("./assets/images/enactus.png"),
      link: "https://www.facebook.com/EnactusEsprit/"
    },
    {
      image: require("./assets/images/rotaract.png"),
      link: "https://www.facebook.com/rotaract.technopole.elghazela"
    }
  ]
};


// Talks Sections

const talkSection = {
  title: "Références",
  subtitle: emoji("Au long de mon parcours , j'ai été assez chanceuse à croiser des gens qui ont reconnu mon potentiel 😅"),

  talks: [
    {
      title: "Amani Mansouri,Co-fondatrice et CEO de Dabchy.com ",
      subtitle: "Elle a parlé de mon expérience au sein de Dabchy.com.",
      slides_url: "https://soundcloud.com/humansinbusiness/2-up-with-flat6labs?fbclid=IwAR2BmfEUO-NkIdD4vMr3STunWTLkph91S6fOQZ9aocJu5iMkEExsBxWGrOE",
      event_url: "https://drive.google.com/file/d/1oIEZO32C2TvDKHbgNCkQJsWVWqVIXx6H/view?usp=sharing"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Mes intérêts 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Me contacter?"),
  subtitle: "Vous voulez me proposer un projet ou juste se rensigner sur quelque chose ? Je suis toujours joignable à travers ces coordonnées.",
  number: "+216-54439062",
  email_address: "doghriamira@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
