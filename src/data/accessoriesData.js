import a1 from "../assets/accessories/head.webp"
import a2 from "../assets/accessories/face.webp"
import a3 from "../assets/accessories/neck.webp"
import a4 from "../assets/accessories/shoulder.webp"
import a5 from "../assets/accessories/waist.webp"
import a6 from "../assets/accessories/gear.webp"


// heads
import h1 from "../assets/accessories/heads/elf.webp";
import h2 from "../assets/accessories/heads/earmuff.webp";
import h3 from "../assets/accessories/heads/kitty.webp";
import h4 from "../assets/accessories/heads/holiday.webp";
import h5 from "../assets/accessories/heads/kittyears.webp";
import h6 from "../assets/accessories/heads/fun.webp";
import h7 from "../assets/accessories/heads/white.webp";
import h8 from "../assets/accessories/heads/violet.webp";

//faces
import f1 from "../assets/accessories/faces/bandit.webp";
import f2 from "../assets/accessories/faces/black.webp";
import f3 from "../assets/accessories/faces/clout.webp";
import f4 from "../assets/accessories/faces/deal.webp";
import f5 from "../assets/accessories/faces/cute.webp";
import f6 from "../assets/accessories/faces/blush.webp";
import f7 from "../assets/accessories/faces/mask.webp";
import f8 from "../assets/accessories/faces/nerd.webp";
import f9 from "../assets/accessories/faces/psycho.webp";
import f10 from "../assets/accessories/faces/red.webp";

// Necks
import n1 from "../assets/accessories/necks/hoodie.webp";
import n2 from "../assets/accessories/necks/goth.webp";
import n3 from "../assets/accessories/necks/moon.webp";
import n4 from "../assets/accessories/necks/cam.webp";
import n5 from "../assets/accessories/necks/goldandwhite.webp";
import n6 from "../assets/accessories/necks/pearls.webp";
import n7 from "../assets/accessories/necks/punk.webp";
import n8 from "../assets/accessories/necks/silver.webp";
import n9 from "../assets/accessories/necks/link.webp";
import n10 from "../assets/accessories/necks/star.webp";

// Shoulders
import s1 from "../assets/accessories/shoulder/brownbear.webp";
import s2 from "../assets/accessories/shoulder/darkshoulderwingset.webp";
import s3 from "../assets/accessories/shoulder/goldrow.webp";
import s4 from "../assets/accessories/shoulder/headrow.webp";
import s5 from "../assets/accessories/shoulder/neonflameaura.webp";
import s6 from "../assets/accessories/shoulder/overseeroverseeperterribleteddy.webp";
import s7 from "../assets/accessories/shoulder/rainbowcursedchains.webp";
import s8 from "../assets/accessories/shoulder/rainbowflameaura.webp";
import s9 from "../assets/accessories/shoulder/springfairy.webp";

// Waists
import w1 from "../assets/accessories/waist/80shangingsuspender.webp";
import w2 from "../assets/accessories/waist/blackpleatedskirt.webp";
import w3 from "../assets/accessories/waist/bunnytail.webp";
import w4 from "../assets/accessories/waist/greycattail.webp";
import w5 from "../assets/accessories/waist/partyunicornfloatie.webp";
import w6 from "../assets/accessories/waist/realisticcappybaramount.webp";
import w7 from "../assets/accessories/waist/sakuraaura.webp";
import w8 from "../assets/accessories/waist/wheelchair.webp";
import w9 from "../assets/accessories/waist/whitechibiskirttutu.webp";
import w10 from "../assets/accessories/waist/wolftail.webp";

// Gears
import g1 from "../assets/accessories/gear/bombosurvivalknife.webp";
import g2 from "../assets/accessories/gear/fromthevaultdozensofdinosaurs.webp";
import g3 from "../assets/accessories/gear/gravitycoil.webp";
import g4 from "../assets/accessories/gear/ice dragon slayer.webp";
import g5 from "../assets/accessories/gear/korbloxmagestaff.webp";
import g6 from "../assets/accessories/gear/redhyperlasergun.webp";
import g7 from "../assets/accessories/gear/prettyprincessscepter.webp";
import g8 from "../assets/accessories/gear/rainowperiastronomega.webp";
import g9 from "../assets/accessories/gear/silverninjastar.webp";

// src\assets\accessories\gear\rainowperiastronomega.webp

const accessories=[
    {
        title:"Head",
        image:a1,
        color:"bg-purple-500",
        slug:"heads"
    },
    {
        title:"Face",
        image:a2,
        color:"bg-pink-500",
        slug:"faces"
    },
    {
        title:"Neck",
        image:a3,
        color:"bg-lime-500",
        slug:"necks"
    },
    {
        title:"Shoulder",
        image:a4,
        color:"bg-teal-500",
        slug:"shoulders"
    },
    {
        title:"Waist",
        image:a5,
        color:"bg-yellow-500",
        slug:"waists"
    },
    {
        title:"Gear",
        image:a6,
        color:"bg-red-500",
        slug:"gears"
    }
]

const heads = [
    {
        title: "Elf Ears w White Piercings",
        image: h1,
        color: "bg-orange-50"
    },
    {
        title: "Fluffy Earmuffs in White",
        image: h2,
        color: "bg-orange-50"
    },
    {
        title: "Gaming Kitty Headphones",
        image: h3,
        color: "bg-orange-50"
    },
    {
        title: "Holiday Crown",
        image: h4,
        color: "bg-orange-50"
    },
    {
        title: "Kitty Ears",
        image: h5,
        color: "bg-orange-50"
    },
    {
        title: "Rainbow Fun Fedora",
        image: h6,
        color: "bg-orange-50"
    },
    {
        title: "Spiked White Rose Crown",
        image: h7,
        color: "bg-orange-50"
    },
    {
        title: "Violet Valkyrie",
        image: h8,
        color: "bg-orange-50"
    }
]

const faces = [
    {
        title: "Bandit",
        image: f1,
        color: "bg-orange-50"
    },
    {
        title: "Black XYZ Cyberstar Glasses",
        image: f2,
        color: "bg-orange-50"
    },
    {
        title: "Clout Goggles",
        image: f3,
        color: "bg-orange-50"
    },
    {
        title: "Deal With It",
        image: f4,
        color: "bg-orange-50"
    },
    {
        title: "Emotimask Cute",
        image: f5,
        color: "bg-orange-50"
    },
    {
        title: "Joy Blush Mask",
        image: f6,
        color: "bg-orange-50"
    },
    {
        title: "Medical Mask",
        image: f7,
        color: "bg-orange-50"
    },
    {
        title: "Nerd Glasses",
        image: f8,
        color: "bg-orange-50"
    },
    {
        title: "Psycho Mask",
        image: f9,
        color: "bg-orange-50"
    },
    {
        title: "Red Eye Glare",
        image: f10,
        color: "bg-orange-50"
    }
]

const necks = [
    {
        title: "Black Hoodie",
        image: n1,
        color: "bg-orange-50"
    },
    {
        title: "Black Spiky Goth Necklace",
        image: n2,
        color: "bg-orange-50"
    },
    {
        title: "Crescent Moon Necklace",
        image: n3,
        color: "bg-orange-50"
    },
    {
        title: "Instant Camera",
        image: n4,
        color: "bg-orange-50"
    },
    {
        title: "Necklace Gold and White",
        image: n5,
        color: "bg-orange-50"
    },
    {
        title: "Pearls",
        image: n6,
        color: "bg-orange-50"
    },
    {
        title: "Punk Necklace 3.0",
        image: n7,
        color: "bg-orange-50"
    },
    {
        title: "Silver Cross Necklace 3.0",
        image: n8,
        color: "bg-orange-50"
    },
    {
        title: "Silver Link Chain",
        image: n9,
        color: "bg-orange-50"
    },
    {
        title: "Stars & Moon Charm Necklace",
        image: n10,
        color: "bg-orange-50"
    }
]

const shoulders = [
    {
        title: "Brown Bear",
        image: s1,
        color: "bg-orange-50"
    },
    {
        title: "Dark Shoulder Wing Set",
        image: s2,
        color: "bg-orange-50"
    },
    {
        title: "Goldrow",
        image: s3,
        color: "bg-orange-50"
    },
    {
        title: "Headrow",
        image: s4,
        color: "bg-orange-50"
    },
    {
        title: "Neon Flame Aura - Top",
        image: s5,
        color: "bg-orange-50"
    },
    {
        title: "Overseer Overseeper Terrible Teddy",
        image: s6,
        color: "bg-orange-50"
    },
    {
        title: "Rainbow Cursed Chains",
        image: s7,
        color: "bg-orange-50"
    },
    {
        title: "Rainbow Flame Aura - Top",
        image: s8,
        color: "bg-orange-50"
    },
    {
        title: "Spring Fairy",
        image: s9,
        color: "bg-orange-50"
    }
]

const waists = [
    {
        title: "80s Hanging Suspenders",
        image: w1,
        color: "bg-orange-50"
    },
    {
        title: "Black Pleated Skirt",
        image: w2,
        color: "bg-orange-50"
    },
    {
        title: "Bunny Tail",
        image: w3,
        color: "bg-orange-50"
    },
    {
        title: "Grey Cat Tail",
        image: w4,
        color: "bg-orange-50"
    },
    {
        title: "Party Unicorn Floatie",
        image: w5,
        color: "bg-orange-50"
    },
    {
        title: "Realistic Capybara Mount",
        image: w6,
        color: "bg-orange-50"
    },
    {
        title: "Sakura Aura",
        image: w7,
        color: "bg-orange-50"
    },
    {
        title: "Wheelchair",
        image: w8,
        color: "bg-orange-50"
    },
    {
        title: "White Chibi Skirt Tutu",
        image: w9,
        color: "bg-orange-50"
    },
    {
        title: "Wolf Tail",
        image: w10,
        color: "bg-orange-50"
    }
]

const gears = [
    {
        title: "Bomb's Survival Knife",
        image: g1,
        color: "bg-orange-50"
    },
    {
        title: "From the Vault Dozens of Dinosaurs",
        image: g2,
        color: "bg-orange-50"
    },
    {
        title: "Gravity Coil",
        image: g3,
        color: "bg-orange-50"
    },
    {
        title: "Ice Dragon Slayer",
        image: g4,
        color: "bg-orange-50"
    },
    {
        title: "Korblox Mage Staff",
        image: g5,
        color: "bg-orange-50"
    },
    {
        title: "Red Hyperlaser Gun",
        image: g6,
        color: "bg-orange-50"
    },
    {
        title: "Pretty Princess Scepter",
        image: g7,
        color: "bg-orange-50"
    },
    {
        title: "Rainbow Periastron Omega",
        image: g8,
        color: "bg-orange-50"
    },
    {
        title: "Silver Ninja Star",
        image: g9,
        color: "bg-orange-50"
    }
]

const accessoryItems = {
    heads: heads,
    faces: faces,
    necks: necks,
    shoulders: shoulders,
    waists: waists,
    gears: gears
}
export { accessories, accessoryItems }