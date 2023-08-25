import { Menu } from "../types";

export const desktopHeaderMenus: Menu[] = [
  {
    title: "Products",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
];

export const mobileHeaderMenus: Menu[] = [
  ...desktopHeaderMenus,
  {
    title: "Login",
    link: "#",
  },
];

export const landingsMenu: Menu[] = [
  { title: "Home", link: "#" },
  { title: "Products", link: "#" },
  { title: "Services", link: "#" },
];

export const companyMenu: Menu[] = [
  { title: "Home", link: "#" },
  {
    title: "Careers",
    link: "#",
    hasButton: true,
    buttonLabel: "Hiring!",
  },
  { title: "Services", link: "#" },
];

export const resourcesMenu: Menu[] = [
  { title: "Blog", link: "#" },
  { title: "Products", link: "#" },
  { title: "Services", link: "#" },
];
