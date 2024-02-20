import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";


export const App = () => {

  return (
    //ThemeProvider é usado para aplicar a cor do nosso thema na app
    <ThemeProvider theme={ LightTheme }>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>

  );

}

