
// logos
import facebook from "../images/facebook.png";
import meetup from "../images/meetup.png";

export interface SocialItem {
  name: string;
  url: string;
  logo: string;
  altText: string;

}

export type SocialData = SocialItem[]

export const socialData: SocialData = [
  {
    name: "Facebook",
    url:  "https://www.facebook.com/chengmanchingtaichi/",
    logo: facebook,
    altText: "Click here to visit our facebook page"
  },
  {
    name: "Meetup",
    url: "https://www.meetup.com/Cheng-Man-Ching-Tai-Chi-Chuan-Group/",
    logo: meetup,
    altText: "Click here to visit our meetup page"
  }
]

