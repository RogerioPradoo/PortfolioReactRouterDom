import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home";
import Sobremim from "./pages/sobremim";
import Notfound from "./pages/notfound"
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import PaginaPradrao from "componentes/PaginaPadrao";
import Post from "pages/post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPradrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobremim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
