import { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";

export default function Input(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          'fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent',
          },
        },
        '& input::placeholder': {
          position: 'relative',
          bottom: '15%'
        },
        ...props?.sx
      }}
    />
  )
}
