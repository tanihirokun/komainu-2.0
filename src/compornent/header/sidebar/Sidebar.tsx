import { FC, memo, useState } from "react";

// import Divider from "@mui/material/Divider";
import {
  Button,
  Paper,
  Tooltip,
  Divider,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  List,
  Box,
  Badge,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

import { SidebarData } from "./SidebarData";

export const Sidebar: FC = memo(() => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!open);
  };

  return (
    <Paper
      component="section"
      square={true}
      sx={{
        minWidht: open ? "50px" : "160px",
        maxWidth: open ? "70px" : "180px",
        overflowY: "scroll",
        height: "93vh",
        transition: "0.2s ease-in",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          padding: "12px 0px",
          transition: "0.2s ease-in",
        }}
      >
        <Button
          onClick={toogleOpen}
          sx={{
            marginRight: open ? "5px" : 0,
            transition: "0.2s ease-in",
            color: "gray",
            borderRadius: "100%",
            backgroundColor: open ? "transparent" : "transparent",
            cursor: "poiner",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {open ? (
            <ArrowForwardIosIcon
              sx={{
                fontSize: "20px",
                color: open ? "lightgray" : "lightGray",
              }}
            />
          ) : (
            <ArrowBackIosIcon
              sx={{
                fontSize: "20px",
                color: open ? "lightgray" : "lightGray",
              }}
            />
          )}
        </Button>
      </Box>
      <Divider />
      <List sx={{ paddingX: 1 }}>
        {SidebarData.map((key, index) => (
          <Tooltip title={open ? key.title : ""} key={index} placement="right-start">
          <Box
            component="li"
            sx={{ width: "100%", marginTop: key.margin }}
          >
            <ListItemButton
              onClick={() => navigate(key.url)}
              sx={{
                margin: "6px 0px",
                padding: open ? "5px 0 5px 10px" : { sm: "6px ", md: "10px" },
                transition: "0.2s ease-in",
                borderRadius: "8px",
                width: "100%",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "grey.100",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: { sm: "30px", md: "46px" } }}>
                <Badge>
                  <key.icon
                    sx={{
                      fontSize: "20px",
                      color: "grey.700",
                    }}
                  />
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={key.title}
                primaryTypographyProps={{
                  variant: "body2",
                }}
                sx={{
                  display: open ? "none" : { xs: "none", sm: "initial" },
                  transition: "0.2s ease-in",
                  margin: "0px",
                  color: "grey.700",
                  minWidth: "130px",
                }}
              />
            </ListItemButton>
          </Box>
          </Tooltip>
        ))}
      </List>
    </Paper>
  );
});
