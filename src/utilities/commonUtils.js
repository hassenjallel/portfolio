import Home from "../PortfolioContainer/Home/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/Aboutme";
import Skills from "../PortfolioContainer/Skills/Skills";
import Projects from "../PortfolioContainer/Projects/Porject";
import ContactMe from "../PortfolioContainer/ContactMe/contactme";

export const TOTAL_SCREENS = [
  {
    component: Home,
  },
 {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Skills",
    component: Skills,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
