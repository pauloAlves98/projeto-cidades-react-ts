import { createTheme } from '@mui/material';
import { yellow, cyan } from '@mui/material/colors';

export const DarkTheme = createTheme({
    //Configura as cores
    palette: {
        primary:{
            main: yellow[700],
            //Dark é quando o mouse esta em cima
            dark: yellow[800],
            light: yellow[500],
            contrastText:'#ffffff',
        },
        secondary:{
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText:'#ffffff',
        },
        background: {
            default: '#303134', // Cor de fundo padrão para o corpo da página
            paper: '#202124',
        }
    }
});
