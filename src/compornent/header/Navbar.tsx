import { FC, memo } from "react";

import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

const FlexToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
});

export const Navbar: FC = memo(() => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#003D6F", boxShadow: "none", maxHeight: 50 }}
    >
      <FlexToolbar>
        <Typography>komainu 2.0 </Typography>
        <Box sx={{marginLeft: "auto", display: "flex",alignItems: "center"}}>
        <Box sx={{marginRight: 10, fontSize:"25px", fontWeight: "bold"}}>2022/06/16 10:26:05</Box>
        <Avatar sx={{ width: 30, height: 30 ,marginRight: 2 }} />
        </Box>
      </FlexToolbar>
    </AppBar>
  );
});
