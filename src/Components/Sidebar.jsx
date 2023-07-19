import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CloseIcon from '@mui/icons-material/Close';

// https://dev.to/oussel/how-to-use-conditional-rendering-with-animation-in-react-1k20

const Sidebar = (props) => {
  const [selected, setSelected] = useState(null);

  const list = [
    {
      type: "normal",
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      type: "dropdown",
      title: "Salons",
      items: [
        {
          title: "List Salons",
          link: "/listsalons",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add Salon", link: "/addsalon", icon: <AddIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "Therapies",
      items: [
        {
          title: "List Therapies",
          link: "/listtherapies",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add Therapy", link: "/addtherapies", icon: <AddIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "Offers",
      items: [
        {
          title: "List Offers",
          link: "/listoffer",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add Offer", link: "/addoffer", icon: <AddIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "Services",
      items: [
        {
          title: "List Services",
          link: "/listservices",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add Service", link: "/addservices", icon: <AddIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "Cities",
      items: [
        {
          title: "List Cities",
          link: "/listcities",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add City", link: "/addcity", icon: <AddIcon fontSize="small"/> },
        {
          title: "List Areas",
          link: "/listareas",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add Area", link: "/addarea", icon: <AddIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "Inquiries",
      items: [
        { title: "Book Now", link: "/booknow", icon: <BookmarkBorderIcon fontSize="small"/> },
        { title: "Call now", link: "/callnow", icon: <CallIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "Blogs",
      items: [
        {
          title: "List Blogs",
          link: "/listblogs",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
        { title: "Add Blog", link: "/addblog", icon: <AddIcon fontSize="small"/> },
      ],
    },
    {
      type: "dropdown",
      title: "FAQ's",
      items: [
        {
          title: "List FAQ's",
          link: "/listfaqs",
          icon: <FormatListBulletedIcon fontSize="small"/>,
        },
      ],
    },
  ];

  const handleClose = () => {
    console.log('hello');
    props.change_hamburger_state(!props.hamburger_state);
  }

  return (
    <>
      <div className="sidebar-container">
        {props.hamburger_state && <div className="sidebar-close-btn" onClick={handleClose}>
          <CloseIcon />
        </div>}
        <div className="sidebar-item">
          <div className="logo">Trakky</div>
        </div>
        {list.map((item, index) => {
          if (item.type === "normal") {
            return (
              <SidebarItem title={item.title} link={item.link} key={index} />
            );
          } else {
            return (
              <SidebarDropdown
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
                title={item.title}
                items={item.items}
                key={index}
                index={index}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Sidebar;

const SidebarItem = (props) => {
  return (
    <Link to={props.link} className="sidebar-item">
      <div className="single">{props.title}</div>
    </Link>
  );
};

const SidebarDropdown = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  const mountedStyle = { animation: "inAnimation 250ms ease-in" };

  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };

  const handleClick = () => {
    if (props.selected === props.index) {
      props.setSelected(null);
      setShowDescription(false);
    } else {
      setShowDescription(true);
      props.setSelected(props.index);
    }
  };

  return (
    <div className="sidebar-item sidebar-dropdown">
      <div className="dropdown-title" onClick={handleClick}>
        <div className="dropdown-item-title">{props.title}</div>
        <div className="dropdown-icon">
          {props.selected === props.index ? (
            <KeyboardArrowUpIcon sx={{color : '#474545'}} />
          ) : (
            <KeyboardArrowDownIcon sx={{color : '#474545'}} />
          )}
        </div>
      </div>
      {props.selected === props.index && showDescription && (
        <div className="dropdown-description" style={ (props.selected === props.index && showDescription) ? mountedStyle : unmountedStyle}>
          {props.items.map((item, key) => {
            return (
              <DropdownItem
                icon={item.icon}
                title={item.title}
                link={item.link}
                key={key}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const DropdownItem = (props) => {
  return (
    <Link to={props.link} className="dropdown-item">
      <div className="dropdown-item-icon">{props.icon}</div>
      <div className="dropdown-item-title">{props.title}</div>
    </Link>
  );
};
