/** @format */

import ImgStg from "Assets/ImgStg.gif";
import ECom from "Assets/wardrobe.gif";
import phonebook from "Assets/phonebook.gif";
import jersify from "Assets/jersify.png";
import bitcoin from "Assets/bitcoin.png";
import covid from "Assets/covid19.png";
import theme from "Assets/theme-switcher.png";

export const ProjectList = [
  {
    projectName: "Image Steganography",
    Description:
      "This project was made possbile with the help of Sambhu Bogati, Sudeep Panta, Shiva Roka and Asmin Shrestha. You can hide messages inside image in this project.",
    TechnologiesUsed: [
      {
        TechName: "React JS",
      },
      {
        TechName: "Node JS",
      },
      {
        TechName: "Java",
      },
    ],
    Link: "https://github.com/sanjaypun-jsx/imagesteganography",
    src: ImgStg,
  },
  {
    projectName: "E-Commerce Wardrobe",
    Description:
      "E-Commerce site Wardrobe. Made with React JS and Java REST API.",
    TechnologiesUsed: [
      {
        TechName: "React JS",
      },
      {
        TechName: "Java",
      },
      {
        TechName: "React-Redux",
      },
    ],
    Link: "https://github.com/sanjaypun-jsx/wardrobe",
    src: ECom,
  },
  {
    projectName: "Phonebook",
    Description:
      "Phonebook system using REST API. User is able to add contact, delete contact, favourite it and edt it.",
    TechnologiesUsed: [
      {
        TechName: "React JS",
      },
      {
        TechName: "React-Redux",
      },
    ],
    Link: "https://github.com/sanjaypun-jsx/add-contact",
    src: phonebook,
  },
  {
    Projects: [
      {
        ProjectName: "COVID19 Tracker",
        GithubLink: "https://github.com/sanjaypun-jsx/react-covid19-tracker",
        src: covid,
      },
      {
        ProjectName: "Bitcoin Tracker",
        GithubLink:
          "https://github.com/sanjaypun-jsx/react-bitcoin-value-tracker",
        src: bitcoin,
      },
      {
        ProjectName: "Jerisfy Landing Page",
        GithubLink: "https://github.com/sanjaypun-jsx/jersify",
        src: jersify,
      },
      {
        ProjectName: "Switch Theme",
        GithubLink:
          "https://github.com/sanjaypun-jsx/react-player-card-and-theme-switcher",
        src: theme,
      },
    ],
  },
];
