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

import ClothingItems from "../components/rbx-components/ClothingItems";
import HeadItems from "../components/rbx-components/HeadItems";

import GetExclusive from "../pages/Guide/GetExclusive";
import SelectionPage from "../pages/Guide/SelectionPage";
import Success from "../pages/Guide/Success";
import AccessoryItems from "../components/rbx-components/AccessoryItems";
import AnimationItems from "../components/rbx-components/AnimationItems";
import CharacterItems from "../components/char-components/CharacterItems";

import FreeRBXPackages from "../components/freerbx-components/FreeRBXPackages";
import FreeRBXPremium from "../components/freerbx-components/FreeRBXPremium";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/rbx-tools" element={<RBXTools />} />
            <Route path="/rbx-tools/clothing" element={<Clothing />} />
            <Route path="/rbx-tools/clothing/:category" element={<ClothingItems />} />

            <Route path="/rbx-tools/animations" element={<Animation />} />
            <Route path="/rbx-tools/animations/:animation" element={<AnimationItems />} />

            <Route path="/rbx-tools/accessories" element={<Accessories />} />
            <Route path="/rbx-tools/accessories/:accessory" element={<AccessoryItems />}/>

            <Route path="/rbx-tools/heads" element={<Heads />} />
            <Route path="/rbx-tools/heads/:head" element={<HeadItems />} />

            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:character" element={<CharacterItems />} />

            <Route path="/free-rbx" element={<FreeRBX />} />
            <Route path="/free-rbx/free-rbx" element={<FreeRBXPackages />}/>
            <Route path="/free-rbx/premium" element={<FreeRBXPremium />} />
            
            <Route path="/maps" element={<Maps />} />

            <Route path="/disclaimer" element={<Disclaimer />} />

            <Route path="/guide" element={<GetExclusive />} />

            <Route path="/guide/:step" element={<SelectionPage />} />

            <Route path="/guide/success" element={<Success />} />

        </Routes>
    );
}

export default AppRoutes;