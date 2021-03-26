import React from "react";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const dataHome = [
  {
    title: "Python Introduction",
    // path: "/overview",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Getting Started",
        path: "/overview/revenue"
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Python Variables",
        path: "/overview/users"
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Statements & Comments",
        path: "/overview/revenue"
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Python Datatypes",
        path: "/overview/revenue2"
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Python Type Conversion",
        path: "/overview/revenue3"
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Python I/O and Import",
        path: "/overview/revenue4"
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Python Flow Control",
    // path: "/reports",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Python if...else",
        path: "/reports/reports1",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Python for Loop",
        path: "/reports/reports2",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Python for While ",
        path: "/reports/reports3"
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Python break and continue",
        path: "/reports/reports4"
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Compiler"
    //path: "/"
  }
];
export const dataDiaporama = [
  {
    title: "Diapo 1",
    // path: "/overview",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Diapo 2",
    // path: "/reports",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Diapo 3",
    //path: "/"
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  }
];
