/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useState } from "react";

import { IProjectProduct } from "../types/app.type";
import Switch from "../components/Switch";

const Home = () => {
  const [currentProduct, setCurrentProduct] = useState<IProjectProduct>(
    "roadmap"
  );

  const handleSelectProjectProduct = (value: IProjectProduct) => {
    setCurrentProduct(value);
  };

  return (
    <Switch onSelect={handleSelectProjectProduct} product={currentProduct} />
  );
};

export default Home;
