import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiQuickbooks,
} from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoGraph } from "react-icons/go";

const stacks = [
  {
    id: 1,
    title: "HTML & CSS",
    icon: <FaHtml5 size={40} color="#e34c26 " />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 2,
    title: "JavaScript",
    icon: <SiJavascript size={40} color="yellow" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 3,
    title: "React",
    icon: <FaReact size={40} color="#61dbfb" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 4,
    title: "ExpressJs",
    icon: <SiExpress size={40} color="#3C873A" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 5,
    title: "MongoDB",
    icon: <SiMongodb size={40} color="green" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 6,
    title: "NextJs",
    icon: <SiNextdotjs size={40} color="white" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
];

const accounting = [
  {
    id: 1,
    title: "Financial Statements",
    icon: <FcComboChart size={40} />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 2,
    title: " Accounting Softwares",
    icon: <SiQuickbooks size={40} color="red" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 3,
    title: "Financial Reporting",
    icon: <GiTakeMyMoney size={40} color="white" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
  {
    id: 4,
    title: "Accounting Controls",
    icon: <GoGraph size={40} color="green" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum recusandae neque. Excepturi modi, temporibus velit alias cum impedit voluptates porro placeat officia! Ad quis velit quo nostrum sed amet.",
  },
];

export { stacks, accounting };
