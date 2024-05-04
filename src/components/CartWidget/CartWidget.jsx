import styles from "./CartWidget.module.css";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "aliceblue",
    right: 0,
    top: -8,

    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  return (
    <div className={styles.container}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={6} color="primary">
          <ShoppingCartIcon
            className={styles.ShoppingCartIcon}
            fontSize="large"
          />
        </StyledBadge>
      </IconButton>
    </div>
  );
}
