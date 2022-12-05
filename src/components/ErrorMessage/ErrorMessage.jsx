import { Alert } from "@mui/material";
const ErrorMessage = ({ children }) => {
  return (
    <div>
      <Alert severity="error">{children}</Alert>
    </div>
  );
};

export default ErrorMessage;
