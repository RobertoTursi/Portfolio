//in questo file abbiamo quasi ogni contenuto che sarà visibile sulla nostra pagina (testo, immagini, descrizioni ecc..)
//facendo in questo modo non solo avremo un codice più ordinato, ma nel momento in cui dovremo andare, per necessità, a 
//camnbiare un immagine o del testo all'interno della pagina, non dovremo andarlo a cambiare in ogni parte della pagina, 
//bensì basterà cambiarlo all'interno di questo file e tutte le referenze saranno aggiornate automaticamente.
  
import {
  landingPageTechnogym,
  storeTechnogym,
  attrezzoTechnogym,
  checkoutTechnogym,
  carrelloTechnogym,
  searchAttrezziTechnogym,
} from "../assets";



  export const navLinks = [
    {
      id: "about",
      title: "About",
      color: "text-green-500",
    },
    {
      id: "project",
      title: "Project",
      color: "text-slate-100"
      
    },
    {
      id: "contact",
      title: "Contact",
      color: "text-red-500"
    },
  ];
  

  export const projects = [
    {
      name: "Technogym Inspired Ecommerce",
      description:
        "Ecommerce that allows users to search, add to cart and buy fitness products",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "java",
          color: "text-orange-400",
        },
        {
          name: "tailwind",
          color: "text-green-600",
        },
        {
          name: "postgresql",
          color: "text-purple-600",
        },
      ],
      images: [
        landingPageTechnogym, 
        storeTechnogym,
        attrezzoTechnogym,
        carrelloTechnogym,
        checkoutTechnogym,
        // searchAttrezziTechnogym,
      ],
      source_code_link: "https://github.com/RobertoTursi/Capstone",
    }
  ];
  
  export const contactLinks = 
    [
      {
        id: "email",
        title: "Robertotursi00@gmail.com",
        href: "mailto:Robertotursi00@gmail.com"
      },
      {
        id: "linkedin",
        title: "Linkedin",
        href: "https://www.linkedin.com/in/roberto-tursi/"
        
      },
      {
        id: "instagram",
        title: "Instagram",
        href: "https://www.instagram.com/roberto_tursi_/"
      },
      {
        id: "github",
        title: "Github",
        href: "https://github.com/RobertoTursi"
      },
    ];