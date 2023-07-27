import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ISelectOption, IProjectProduct } from "../types/app.type";

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
      <Box className="mask-box">
        <Box
          className="mask"
          style={{
            transform: `translateX(${product === "roadmap" ? 0 : "100px"})`
          }}
        />
        {options.map((option, index) => (
          <Button
            key={option.value + index}
            disableRipple
            variant="text"
            sx={{ color: product === option.value ? "#ffffff" : "#5316AE" }}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Switch;
