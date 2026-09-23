// clothing
import cl from "../assets/clothing/cl.webp"
import c2 from "../assets/clothing/tshirt.webp"
import c3 from '../assets/clothing/sweater.webp'
import c4 from "../assets/clothing/jacket.webp"
import c5 from "../assets/clothing/pant.webp"
import c6 from "../assets/clothing/dress.webp"
import c7 from "../assets/clothing/shorts.webp"
import c8 from "../assets/clothing/shoes.webp"

// shirts images
import s1 from "../assets/clothing/shirts/baby-shark.webp"
import s2 from "../assets/clothing/shirts/goofy-cat.webp"
import s3 from "../assets/clothing/shirts/vl.webp"
import s4 from "../assets/clothing/shirts/muscular.webp"
import s5 from "../assets/clothing/shirts/black-tie.webp"
import s6 from "../assets/clothing/shirts/off.webp"
import s7 from "../assets/clothing/shirts/cinch.webp"
import s8 from "../assets/clothing/shirts/winter.webp"
import s9 from "../assets/clothing/shirts/peanut.webp"

//T-shirt images
import t1 from "../assets/clothing/tshirts/black-red.webp"
import t2 from "../assets/clothing/tshirts/chain.webp"
import t3 from "../assets/clothing/tshirts/purple.webp"
import t4 from "../assets/clothing/tshirts/black.webp"
import t5 from "../assets/clothing/tshirts/white.webp"

//shoes images
import sh2 from "../assets/clothing/shoes/black.webp"
import sh3 from "../assets/clothing/shoes/formal.webp"
import sh4 from "../assets/clothing/shoes/white.webp"
import sh5 from "../assets/clothing/shoes/grass.webp"
import sh6 from "../assets/clothing/shoes/military.webp"
import sh7 from "../assets/clothing/shoes/pink.webp"
import sh8 from "../assets/clothing/shoes/red.webp"
import sh9 from "../assets/clothing/shoes/black1.webp"
import sh10 from "../assets/clothing/shoes/brown.webp"

// Sweaters Images
import sw4 from "../assets/clothing/sweaters/pink.webp"
import sw5 from "../assets/clothing/sweaters/black.webp"
import sw3 from "../assets/clothing/sweaters/bnw.webp"
import sw1 from "../assets/clothing/sweaters/cable.webp"
import sw2 from "../assets/clothing/sweaters/dino.webp"
import sw6 from "../assets/clothing/sweaters/offwhite.webp"
import sw7 from "../assets/clothing/sweaters/white.webp"
import sw8 from "../assets/clothing/sweaters/y2k.webp"

// Jackets Images
import j1 from "../assets/clothing/jackets/j1.webp"
import j2 from "../assets/clothing/jackets/j2.webp"
import j3 from "../assets/clothing/jackets/j3.webp"
import j4 from "../assets/clothing/jackets/cat.webp"
import j5 from "../assets/clothing/jackets/j5.webp"
import j6 from "../assets/clothing/jackets/j6.webp"
import j7 from "../assets/clothing/jackets/crewneck.webp"
import j8 from "../assets/clothing/jackets/rainbow.webp"
import j9 from "../assets/clothing/jackets/j9.webp"
import j10 from "../assets/clothing/jackets/j10.webp"

// Pants Images
import p1 from "../assets/clothing/pants/alien.webp"
import p2 from "../assets/clothing/pants/black-pant.webp"
import p3 from "../assets/clothing/pants/para.webp"
import p4 from "../assets/clothing/pants/y2k.webp"
import p5 from "../assets/clothing/pants/tattoo.webp"
import p6 from "../assets/clothing/pants/gradient.webp"
import p7 from "../assets/clothing/pants/denim.webp"

// Dresses Images
import d1 from "../assets/clothing/dress/pink.webp"
import d2 from "../assets/clothing/dress/white-m.webp"
import d3 from "../assets/clothing/dress/wizard.webp"
import d4 from "../assets/clothing/dress/anime1.webp"
import d5 from "../assets/clothing/dress/blackL.webp"
import d6 from "../assets/clothing/dress/whiteL.webp"
import d7 from "../assets/clothing/dress/anime2.webp"
import d8 from "../assets/clothing/dress/maid.webp"

//Shorts Images
import a1 from "../assets/clothing/shorts/demin-ripped.webp"
import a2 from "../assets/clothing/shorts/dolphin.webp"
import a3 from "../assets/clothing/shorts/farmer.webp"
import a4 from "../assets/clothing/shorts/frog.webp"
import a5 from "../assets/clothing/shorts/light.webp"
import a6 from "../assets/clothing/shorts/punk.webp"
import a7 from "../assets/clothing/shorts/pink.webp"
import a8 from "../assets/clothing/shorts/bag.webp"

const clothes = [
    {
        image:cl,
        title: "Shirts",
        slug: "shirts",
        color: "bg-teal-500",
        path: "/rbx-tools/clothing/shirts"
    },
    {
        image: c2,
        title: "T-Shirts",
        slug: "tshirts",
        color: "bg-lime-500",
        path: "/rbx-tools/clothing/tshirts"
    },
    {
        image: c3,
        title: "Sweaters",
        slug: "sweaters",
         color: "bg-red-500",
        path: "/rbx-tools/clothing/sweaters"
    },
    {
        image: c4,
        title: "Jackets",
        slug: "jackets",
         color: "bg-purple-500",
        path: "/rbx-tools/clothing/jackets"
    },
    {
        image: c5,
        title: "Pants",
        slug: "pants",
         color: "bg-yellow-500",
        path: "/rbx-tools/clothing/pants"
    },
    {
        image: c6,
        title: "Dresses",
        slug: "dresses",
         color: "bg-emerald-500",
        path: "/rbx-tools/clothing/dresses"
    },
    {
        image: c7,
        title: "Shorts",
        slug: "shorts",
         color: "bg-pink-500",
        path: "/rbx-tools/clothing/shorts"
    },
    {
        image: c8,
        title: "Shoes",
        slug: "shoes",
         color: "bg-blue-900",
        path: "/rbx-tools/clothing/shoes"
    }
]

// Shirts
const shirts = [
    {
        image: s9,
        title: "Peanut Suit"
    },
    {
        image: s1,
        title: "Baby Shark Suit"
    },
    {
        image: s2,
        title: "Goofy Suit"
    },
    {
        image:s3,
        title:"Luxury VL"
    },
    {
        image: s4,
        title: "Realistic Muscle Suit"
    },
    {
        image: s5,
        title: "Shirt with Black Tie"
    },
    {
        image: s6,
        title: "White Bow Off Shoulder"
    },
    {
        image: s7,
        title: "Black Cinch Tube Top"
    },
    {
        image: s8,
        title: "Winter Pomeranian"
    }
]

// T-clothing/shirts
const tshirts = [
    { title: "Dark Red Waist-tied flannel tshirt", image: t1 },
    { title: "Emo Black Chained Top", image: t2 },
    { title: "Coquette Star Corset Top w/ Ribbons (Purple)", image: t3 },
    { title: "iBLOX - Black Urban Graffiti Oversize Shirt", image: t4 },
    { title: "CRCL T-SHIRT X JEANS Y2K BOY", image: t5 }
]

// Sweaters
const sweaters = [
    {
        title: "Beige Oversized Cableknit Crop-top",
        image: sw1
    },
    {
        title: "Cozy Dino Sweater",
        image: sw2
    },
    {
        title: "Oversized Knitted Rock Band Sweater Black",
        image: sw3
    },
    {
        title: "Pink Oversized Off Shoulder Sweater",
        image: sw4
    },
    {
        title: "Tactical Operator Kit",
        image: sw5
    },
    {
        title: "Posed Off Shoulder Oversized Sweater",
        image: sw6
    },
    {
        title: "White Oversized Crop Off Shoulder Sweater",
        image: sw7
    },
    {
        title: "Y2K Oversized Jbitted Candy Sweater Beige",
        image: sw8
    }
]

// Jackets
const jackets = [
    {
        title: "Dark Puffer Jacket",
        image: j1
    },
    {
        title: "Cropped Crewneck-Miami",
        image: j2
    },
    {
        title: "Demonic Shadow Aura Outline",
        image: j3
    },
    {
        title: "El Gato Cat",
        image: j4
    },
    {
        title: "Off Shoulder Jacket Pink",
        image: j5
    },
    {
        title: "Off Shoulder Raincoat Black",
        image: j6
    },
    {
        title: "Oversized Crewneck Black & Red",
        image: j7
    },
    {
        title: "Oversized Cardigan Kawaii Rainbow Cloud Bar",
        image: j8
    },
    {
        title: "Skeleton Rib Jacket",
        image: j9
    },
    {
        title: "Tokyo Deliquent Coat",
        image: j10
    }
]

// Pants
const pants = [
    {
        title: "Alien Carrying You Costume",
        image: p1
    },
    {
        title: "Black Pants",
        image: p2
    },
    {
        title: "Fashionable Paratrooper Pants",
        image: p3
    },
    {
        title: "Black Y2K Cargo Pants",
        image: p4
    },
    {
        title: "Grunge Tattoo High Wasited Baggy Denim Jeans",
        image: p5
    },

    {
        title: "Karblox Gradient Pants",
        image: p6
    },
    {
        title: "High Waisted Baggy Denim Jeans",
        image: p7
    },
]

const shorts = [
    { title: "Denim Ripped Shorts - Black", image: a1 },
    { title: "Black Dolphin Shorts", image: a2 },
    { title: "Farmer's Jumpsuit Shorts - Denim", image: a3 },
    { title: "Frog Overalls", image: a4 },
    { title: "Jean Shorts - Light Wash", image: a5 },
    { title: "Punk Spike Belts", image: a6 },
    { title: "Pink Star Studded Cowboy Hat", image: a7 },
    { title: "Black Silver Archival Vkei Holster Dual Bags", image: a8 }
]

const dresses = [
    { title: "Adorable Pink Princess Gown", image: d1 },
    { title: "Adorable White Princess Gown", image: d2 },
    { title: "Ancient Little Wizard Dress", image: d3 },
    { title: "Black Anime School Dress I", image: d4 },
    { title: "Gothic Victorian Gown", image: d5 },
    { title: "Dainty Cottage Lace Dress White", image: d6 },
    { title: "Pink Anime School Dress I", image: d7 },
    { title: "Maid Dress - Black", image: d8 }
]

const shoes = [
    { title: "Adidas Black Campus 00S Shoes", image: sh2 },
    { title: "Dress Shoes - Black", image: sh3 },
    { title: "Adidas White Samba OG Shoes", image: sh4 },
    { title: "Grass Shoes - George Era", image: sh5 },
    { title: "Military Boots - Black", image: sh6 },
    { title: "Roblox Sneakers - Pink", image: sh7 },
    { title: "Roblox Running Shoes - Red", image: sh8 },
    { title: "Work Boots - Black", image: sh9 },
    { title: "Work Boots - Brown", image: sh10 }
]

const clothingItems = {
    shirts,
    tshirts,
    pants,
    shorts,
    pants,
    jackets,
    sweaters,
    dresses,
    shoes
}

export { clothes, clothingItems }