// List of pages

import Home from "../pages/Home/Home";
import Beginners from "../pages/Beginners/Beginners";
import Intermediate from "../pages/Intermediate/Intermediate"
import Advanced from "../pages/Advanced/Advanced"
import About from "../pages/About/About"
import History from "../pages/History/History"
import Articles from "../pages/Articles/Articles"
import Resources from "../pages/Resources/Resources"
import Contact from "../pages/Contact/Contact"

export interface PageDataItem {
  name: string;                           // used in URL, directory and files names
  menu: string;                           // Description used in menus
                                          // meta values can be used to update the html meta tags. They are optional, assuming that
                                          // the default index.html has them set appropriately
                                          // Should make sure that the home/landing page has good meta tags, so that they get reset during navigation
                                          // SEO may not be using keywords and title any more
  title?: string;                         // meta <title>
  description?: string;                   // <meta> name="description" content=...
  keywords?: string;                      // <meta> name="keywords"
  reactPage: React.FunctionComponent;     // React component, used by menu/routing
}
// title is for meta title

export type PageData = PageDataItem[];

export const allPages: PageData = [
  {
    name: "Home",
    menu: "Home page",
    title: "Cheng Man Ch'ing Sacramento",
    reactPage: Home
  },
  {
    name: "Beginners",
    menu: "Beginners",
    title: "Cheng Man Ch'ing Sacramento for beginners",
    reactPage: Beginners
  },
  {
    name: "Intermediate",
    menu: "Intermediate",
    title: "Cheng Man Ch'ing Sacramento",
    reactPage: Intermediate
  },
  {
    name: "Advanced",
    menu: "Advanced",
    title: "Cheng Man Ch'ing Sacramento for beginners",
    reactPage: Advanced
  },
  {
    name: "About",
    menu: "About",
    title: "About Cheng Man Ch'ing Sacramento",
    reactPage: About
  },
  {
    name: "History",
    menu: "History",
    title: "Cheng Man Ch'ing Sacramento",
    reactPage: History
  },
  {
    name: "Articles",
    menu: "Articles",
    title: "Cheng Man Ch'ing Sacramento",
    reactPage: Articles,
  },
  {
    name: "Resources",
    menu: "Resources",
    title: "Cheng Man Ch'ing Sacramento",
    reactPage: Resources
  },
  {
    name: "Contact",
    menu: "Contact",
    title: "Cheng Man Ch'ing Sacramento",
    reactPage: Contact
  }
  
]

