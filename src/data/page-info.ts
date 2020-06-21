
export interface pageDataItem {
  name: string,
  menu: string,
  title: string
}
// title is for meta title

export type pageData = pageDataItem[];

export const data:pageData = [
  {
    name: "Home",
    menu: "Home page",
    title: "Chen man ching Sacramento"
  },
  {
    name: "Beginners",
    menu: "Beginners",
    title: "Chen man ching Sacramento for beginners"
  },
  {
    name: "Intermediate",
    menu: "Home alone",
    title: "Chen man ching Sacramento"
  },
  {
    name: "Advanced",
    menu: "Learners",
    title: "Chen man ching Sacramento for beginners"
  },
  {
    name: "Contact",
    menu: "#5",
    title: "Chen man ching Sacramento"
  }
  
]

