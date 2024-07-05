import { LiaInfoSolid,LiaThemeco, LiaUserCheckSolid, LiaReact,LiaIdCard,LiaToolsSolid,LiaHomeSolid} from "react-icons/lia";
export const navItems = [
    {name: "Home", link: "#home", otherLink:"/#home", Icon:LiaHomeSolid},
    { name: "About", link: "#about",otherLink:"/#about", Icon:LiaInfoSolid },
    {name:"Skills", link:"#skills", otherLink:"/#skills",Icon:LiaReact},
    {name:"Tools", link:"#tools", otherLink:"/#tools", Icon:LiaToolsSolid},
    { name: "Projects", link: "/project", otherLink:"/project",Icon:LiaThemeco  },
    { name: "Testimonials", link: "#testimonials", otherLink:"/#testimonials", Icon:LiaUserCheckSolid },
    { name: "Contact", link: "#contact", otherLink:"/#contact",Icon:LiaIdCard}
 
  ];
  