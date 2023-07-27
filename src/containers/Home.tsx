/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useState } from "react";

import { IProjectProduct } from "../types/app.type";
import Switch from "../components/Switch";
import { Box } from "@mui/material";

const Home = () => {
  const [currentProduct, setCurrentProduct] = useState<IProjectProduct>(
    "roadmap"
  );

  const handleSelectProjectProduct = (value: IProjectProduct) => {
    setCurrentProduct(value);
  };

  return (
    <Box className="flexCenter" sx={{ minHeight: "100vh" }}>
      <Switch onSelect={handleSelectProjectProduct} product={currentProduct} />
    </Box>
  );
};

export default Home;
