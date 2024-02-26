import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
    //disponivel no provider
    const { toggleTheme} = useAppThemeContext();

    return (
        <Routes>
            {/* variant (contained) deixa o botão todo preenchido */}
            <Route path="/pagina-inicial" element={ <Button variant="contained" color="primary" onClick={toggleTheme} >Toggle Theme</Button> }/>
            {/* Endereço padrão */}
            <Route path="*" element={ <Navigate to="/pagina-inicial" /> } />
        </Routes>
    );
}