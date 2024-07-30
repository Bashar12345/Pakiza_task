import React from "react";
import { IconButton, styled } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const CustomIconButton = styled(IconButton)({
  position: "absolute",
  display: { xs: "none", sm: "flex" },
  alignItems: "center",
  justifyContent: "center",
  width: "68px",
  height: "68px",
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  cursor: "pointer",
  color: "white",
  top: "50%",
  transform: "translateY(-50%)",
});

const NextArrow = ({ className, style, onClick , right }) => (
  <CustomIconButton
    style={{
      right: "-100px",
      backgroundColor: "#E4E4E4",
      color: "#505051",
    }}
    onClick={onClick}
  >
    <KeyboardArrowRight fontSize="large" />
  </CustomIconButton>
);

const PrevArrow = ({ className, style, onClick }) => (
  <CustomIconButton
    style={{
      left: "-100px",
      backgroundColor: "#E4E4E4",
      color: "#505051",
    }}
    onClick={onClick}
  >
    <KeyboardArrowLeft fontSize="large" />
  </CustomIconButton>
);

export { NextArrow, PrevArrow };
