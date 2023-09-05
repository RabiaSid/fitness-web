import * as React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

export default function InputTextarea() {
  const grey = {
    50: "#fff",
    100: "#E0E3E7",
    150: "#616161",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    padding: 12px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    color:${theme.palette.mode === "light" ? grey[150] : grey[150]};
    border: 2px solid ${theme.palette.mode === "light" ? grey[50] : grey[50]};
    border-bottom-color:${
      theme.palette.mode === "light" ? grey[100] : grey[100]
    };
    font-size: 15px;
	  font-family: "Barlow",sans-serif;
	  font-weight: 400;

}
  `
  );

  return    <>
      <StyledTextarea
        maxRows={5}
        aria-label="maximum height"
        placeholder="Message"
      />
    </>
}
