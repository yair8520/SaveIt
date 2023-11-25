"use client";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import { sideBarPages } from "@/Consts/constant";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { toggleDarkMode } from "@/Features/General/GeneralSlice";
import { useAppDispatch, useAppSelector } from "@/Redux";
import { isDarkMode } from "@/Features/General/GeneralSelectors";
import { Drawer, DrawerHeader } from "./SideBarProps";
import styles from "./SideBar.module.css";
import { ModalContext } from "../Providers/ModalContext/ModalContext";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "@/Helpers/Auth";
export const SideBar = ({ children }: any) => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(isDarkMode);
  const { t } = useTranslation();
  const { handleModal } = useContext(ModalContext);
  const router = useRouter();

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
    // router.push("/dashBoard/settings");
  };
  const logOut = () => {
    signOut();
  };

  const handleDrawer = () => {
    setOpen(!open);
  };
  const handleClick = (Modal: any) => {
    if (typeof Modal === "string") return router.push(`${Modal}`);

    handleModal(<Modal />);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarPages.map(({ Icon, text, modal }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClick(modal)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={t(`sideBar.${text}`)} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem onClick={toggleTheme} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {isDark ? <DarkModeIcon /> : <LightModeIcon />}
              </ListItemIcon>
              <ListItemText
                primary={t(`sideBar.${isDark ? "dark" : "light"}`)}
              />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={logOut} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t(`sideBar.logOut`)} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {children}
    </Box>
  );
};
