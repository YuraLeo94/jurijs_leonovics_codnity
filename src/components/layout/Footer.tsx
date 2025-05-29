import React, { JSX } from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Facebook, Twitter, GitHub } from "@mui/icons-material";
import { COPYRIGHT_TEXT } from "../../constants";

const Footer = (): JSX.Element => (
  <Box
    component="footer"
    sx={{ p: 2, textAlign: "center", bgcolor: "#f5f5f5" }}
  >
    <section className="container">
      <Typography variant="body2" color="textSecondary">
        {COPYRIGHT_TEXT}
      </Typography>
      <Box sx={{ mt: 1 }}>
        <MuiLink href="https://facebook.com" target="_blank" sx={{ mx: 1 }}>
          <Facebook />
        </MuiLink>
        <MuiLink href="https://twitter.com" target="_blank" sx={{ mx: 1 }}>
          <Twitter />
        </MuiLink>
        <MuiLink href="https://github.com" target="_blank" sx={{ mx: 1 }}>
          <GitHub />
        </MuiLink>
      </Box>
    </section>
  </Box>
);

export default Footer;
