import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import RBXTools from "../pages/RBXTools/RBXTools";
import Clothing from "../pages/RBXTools/Clothing";
import Animation from "../pages/RBXTools/Animation";
import Accessories from "../pages/RBXTools/Accessories";
import Heads from "../pages/RBXTools/Heads";

import Characters from "../pages/Characters/Characters";

import FreeRBX from "../pages/FreeRBX/FreeRBX";

import Maps from "../pages/Maps/Maps";

import Disclaimer from "../components/Disclaimer";

import ClothingItems from "../components/ClothingItems";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/rbx-tools" element={<RBXTools />} />
            <Route path="/rbx-tools/clothing" element={<Clothing />} />
            <Route path="/rbx-tools/clothing/:category" element={<ClothingItems />} />

            <Route path="/rbx-tools/animations" element={<Animation />} />
            <Route path="/rbx-tools/accessories" element={<Accessories />} />
            <Route path="/rbx-tools/heads" element={<Heads />} />

            <Route path="/characters" element={<Characters />} />

            <Route path="/free-rbx" element={<FreeRBX />} />

            <Route path="/maps" element={<Maps />} />

            <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
    );
}

export default AppRoutes;