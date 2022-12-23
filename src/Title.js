import { AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import styles from "./Title.css"
import "./App.css"

const headersData = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Sign in/out",
        href: "/signin"
    },
    {
        label: "Make Post",
        href: "/makepost"
    }
]

function Title(props) {
    const displayDesktop = () => {
        return (
        <Toolbar>
            {bearBlogLogo}
            {getMenuButtons()}
        </Toolbar>
        );
      };

      const bearBlogLogo = (
        <Typography variant="h6" component="h1">
          Bear Blog
        </Typography>
      );

      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
              }}
            >
              {label}
            </Button>
          );
        });
      };
      
      return (
        <div>
          <header>
            <AppBar className="navBar">{displayDesktop()}</AppBar>
          </header>
        </div>
      );
  }
  
  export default Title