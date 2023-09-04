import TextField from "@mui/material/TextField";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";

type InputfieldProps = {
  placeholder: string;
  onChange?: (...args: any[]) => any;
};

const customTheme = (outerTheme: Theme) =>
  createTheme({
    // palette: {
    //   mode: outerTheme.palette.mode,
    // },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#E0E3E7",
            // "--TextField-brandBorderFocusedColor": "#fff",
            "& label.Mui-focused": {
              color: "#616161",
              fontSize: "15px",
              fontWeight: 400,
              fontFamily: ["Barlow", "sans-serif"],
             
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid #E0E3E7",

            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid #E0E3E7",
            },
            "&.Mui-focused:after": {
              borderBottom: "2px solid #E0E3E7",
            },
          },
        },
      },
    },
  });

export default function InputField(props: InputfieldProps) {
  const { placeholder, onChange } = props;
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <TextField
        placeholder={placeholder}
        label=""
        fullWidth={true}
        variant="standard"
        sx={{ maxHeight: "7vh" }}
        focused
      />
    </ThemeProvider>
  );
}
// import { TextField } from "@mui/material";

// export default function InputField() {
//   return <>
//   <TextField id="standard-basic" fullWidth={true} label="Standard" variant="standard" />
//   </>
// }
