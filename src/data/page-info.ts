// List of pages

// ToDo - import all pages here, then build access into list so that it can be used as is by Router

export interface PageDataItem {
  name: string;
  menu: string;
  title: string;
}
// title is for meta title

export type PageData = PageDataItem[];

export const data: PageData = [
  {
    name: "Home",
    menu: "Home page",
    title: "Cheng Man Ch'ing Sacramento"
  },
  {
    name: "Beginners",
    menu: "Beginners",
    title: "Cheng Man Ch'ing Sacramento for beginners"
  },
  {
    name: "Intermediate",
    menu: "Intermediate",
    title: "Cheng Man Ch'ing Sacramento"
  },
  {
    name: "Advanced",
    menu: "Advanced",
    title: "Cheng Man Ch'ing Sacramento for beginners"
  },
  {
    name: "About",
    menu: "About",
    title: "About Cheng Man Ch'ing Sacramento"
  },
  {
    name: "History",
    menu: "History",
    title: "Cheng Man Ch'ing Sacramento"
  },
  {
    name: "Articles",
    menu: "Articles",
    title: "Cheng Man Ch'ing Sacramento"
  },
  {
    name: "Resources",
    menu: "Resources",
    title: "Cheng Man Ch'ing Sacramento"
  },
  {
    name: "Contact",
    menu: "Contact",
    title: "Cheng Man Ch'ing Sacramento"
  }
  
]

