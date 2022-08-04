import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Footer = ({ sta }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    const ubahColor = () => {
      setColor(sta);
    };
    ubahColor();
  }, [sta]);
  return (
    <div style={{ textAlign: "center", background: `${color}` }}>
      <Typography variant="body3" sx={{ color: "dark grey" }}>
        {new Date().getFullYear()} DTS FINAL PROJECT - Rangga Suteja
      </Typography>
    </div>
  );
};

export default Footer;
