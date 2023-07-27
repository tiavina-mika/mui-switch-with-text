/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useState } from "react";

import { IProjectProduct, IProjectProductOption, ISelectOption } from "../types/app.type";
import ButtonSwitch from "../components/ButtonSwitch";
import { Box } from "@mui/material";

const options: IProjectProductOption[] = [
  {
    label: "Roadmap",
    value: "roadmap"
  },
  {
    label: "Insight",
    value: "insight"
  },
];

const Home = () => {
  const [currentProduct, setCurrentProduct] = useState<IProjectProductOption>(
    options[0]
  );

  const handleSelectProjectProduct = (value: IProjectProductOption) => {
    setCurrentProduct(value);
  };

  return (
    <Box className="flexCenter" sx={{ minHeight: "100vh" }}>
      <ButtonSwitch
        onSelect={handleSelectProjectProduct}
        selectedOption={currentProduct}
        options={options}
        checked={currentProduct.value === "roadmap"}

      />
    </Box>
  );
};

export default Home;
