import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { JSX, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { LOGO_TEXT, navLinks } from "../../constants";
import { ILink } from "../../types/global";

const Header = (): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {navLinks.map((link: ILink) => (
            <ListItem>
              <Button
                fullWidth
                color="primary"
                component={Link}
                to={link.path}
                sx={{ justifyContent: "left", fontWeight: 600 }}
              >
                {link.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static">
      <Toolbar className="container" sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          {LOGO_TEXT}
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <Box>
            {navLinks.map((link: ILink) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.path}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
