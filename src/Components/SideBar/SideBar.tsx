"use client";
import * as React from "react";
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
import { toggleDarkMode } from "@/Features/General/GeneralSlice";
import { useAppDispatch, useAppSelector } from "@/Redux";
import { isDarkMode } from "@/Features/General/GeneralSelectors";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Drawer, DrawerHeader } from "./SideBarProps";

export const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(isDarkMode);
  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };
  const handleDrawer = () => {
    setOpen(!open);
  };
  const { t } = useTranslation();
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
          {sideBarPages.map(({ Icon, text }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <Icon /> : <Icon />}
                </ListItemIcon>
                <ListItemText
                  primary={t(`sideBar.${text}`)}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem
            onClick={() => toggleTheme()}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {isDark ? <DarkModeIcon /> : <LightModeIcon />}
              </ListItemIcon>
              <ListItemText
                primary={t(`sideBar.${isDark ? "dark" : "light"}`)}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
