import char from "../assets/character.png";
import mainchar from "../assets/mainchar.png";
import arise from "../assets/AriseCrossover.webp";

import rbx1 from "../assets/rbx1.webp"
import rbx2 from "../assets/rbx2.webp"
import rbx3 from "../assets/rbx3.webp"
import rbx4 from "../assets/rbx4.webp"

import m from "../assets/rbxlogo.webp"
import p from "../assets/premium.webp"

// maps
import m1 from "../assets/AriseCrossover.webp"
import m2 from "../assets/maps/m2.webp"
import m3 from "../assets/maps/m3.webp"
import m4 from "../assets/maps/m4.webp"
import m5 from "../assets/maps/m5.webp"
import m6 from "../assets/maps/m6.webp"
import m7 from "../assets/maps/m7.webp"
import m8 from "../assets/maps/m8.webp"
import m9 from "../assets/maps/m9.webp"
import m10 from "../assets/maps/m10.webp"


// RBX TOOLS
const tools=[
    {
        title:"Clothing",
        color:"bg-pink-500",
        image:rbx2,
        path:"/rbx-tools/clothing"
    },
    {
        title:"Heads",
        color:"bg-red-500",
        image:rbx3,
        path:"/rbx-tools/heads"
    },
    {
        title:"Accessories",
        color:"bg-yellow-500",
        image:rbx1,
        path:"/rbx-tools/accessories"
    },
    {
        title:"Animation",
        color:"bg-lime-500",
        image:rbx4,
        path:"/rbx-tools/animations"
    }
]
// CHARACTERS
const charAvatar=[
    {
        image:char,
        title:"Avatars",
        color:"bg-lime-500",
        slug:"avatars"
    },
    {
        image:mainchar,
        title:"Characters",
        color:"bg-teal-500",
        slug:"chars"
    }
]
// FREE RBX
const freeRBX=[
    {
        title:"FREE RBX",
        description:"How to Get RBX Guide",
        image:m,
        color:"bg-teal-500",
        slug:"free-rbx"
    },
    {
        title:"PREMIUM",
        description:"Tips FREE RBX Premium",
        image:p,
        color:"bg-yellow-500",
        slug:"premium"
    }
]
// MAPS DATA
const maps=[
    {
        title:"Arise Crossover",
        image:arise,
        color:"bg-white"
    },
    {
        title:"Berry Avenue RP",
        image:m2,
        color:"bg-white"
    },
    {
        title:"Blox Fruits",
        image:m3,
        color:"bg-white"
    },
    {
        title:"Brookhaven RP",
        image:m4,
        color:"bg-white"
    },
    {
        title:"Dandy's World",
        image:m5,
        color:"bg-white"
    },
    {
        title:"Fisch",
        image:m6,
        color:"bg-white"
    },
    {
        title:"Murder Mystery Z",
        image:m7,
        color:"bg-white"
    },
    {
        title:"Pet Simulator 99",
        image:m8,
        color:"bg-white"
    },
    {
        title:"Dead Rails",
        image:m9,
        color:"bg-white"
    },
    {
        title:"Rivals",
        image:m10,
        color:"bg-white"
    }
]
export { tools, charAvatar, freeRBX, maps}