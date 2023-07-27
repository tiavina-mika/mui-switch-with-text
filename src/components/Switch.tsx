/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, Theme } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ISelectOption, IProjectProduct } from "../types/app.type";

const classes = {
  switch: (theme: Theme) => ({
    borderRadius: 100,
    border: "1px solid " + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light
  }),
  selectedButton: (isSelected: boolean) => {
    if (isSelected) {
      return {
        color: "#ffffff"
      };
    }

    return {
      color: "#5316AE"
    };
  }
};
type Props = {
  onSelect: (value: IProjectProduct) => void;
  product: IProjectProduct;
};

const Switch = ({ onSelect, product }: Props) => {
  const options: ISelectOption<IProjectProduct>[] = [
    {
      label: "Roadmap",
      value: "roadmap"
    },
    {
      label: "Insight",
      value: "insight"
    }
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Box css={classes.switch}>
        <Box
          className="mask"
          style={{
            transform: `translateX(${product === "roadmap" ? 0 : "100px"})`
          }}
        />
        {options.map((option, index) => {
          const isSelected = product === option.value;
          return (
            <Button
              key={option.value + index}
              disableRipple
              variant="text"
              onClick={() => onSelect(option.value)}
              css={classes.selectedButton(isSelected)}
            >
              {option.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default Switch;
