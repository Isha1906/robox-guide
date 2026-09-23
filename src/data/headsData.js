import g from "../assets/headItems/gojo.webp"
import he from "../assets/headItems/heads.webp"
import f from "../assets/headItems/face.webp"

// Hairs
import h1 from "../assets/headItems/hairs/pigtail.webp"
import h2 from "../assets/headItems/hairs/pigtail.webp"
import h3 from "../assets/headItems/hairs/messy.webp"
import h4 from "../assets/headItems/hairs/brb.webp"
import h5 from "../assets/headItems/hairs/flowy.webp"
import h6 from "../assets/headItems/hairs/wrb.webp"
import h7 from "../assets/headItems/hairs/shiny.webp"
import h8 from "../assets/headItems/hairs/cool.webp"
import h9 from "../assets/headItems/hairs/crimson.webp"

// Heads
import p1 from "../assets/headItems/heads/vampire.webp"
import p2 from "../assets/headItems/heads/blush.webp"
import p3 from "../assets/headItems/heads/demonic.webp"
import p4 from "../assets/headItems/heads/bored.webp"
import p5 from "../assets/headItems/heads/silly.webp"
import p6 from "../assets/headItems/heads/siren.webp"
import p7 from "../assets/headItems/heads/droop.webp"
import p8 from "../assets/headItems/heads/sqiggle.webp"
import p9 from "../assets/headItems/heads/stunned.webp"
import p10 from "../assets/headItems/heads/wuh.webp"

// Faces
import f1 from "../assets/headItems/faces/sukuna.webp"
import f2 from "../assets/headItems/faces/blue.webp"
import f3 from "../assets/headItems/faces/vampire.webp"
import f4 from "../assets/headItems/faces/heart.webp"
import f5 from "../assets/headItems/faces/meanie.webp"
import f6 from "../assets/headItems/faces/mr.webp"
import f7 from "../assets/headItems/faces/play.webp"
import f8 from "../assets/headItems/faces/roblox.webp"
import f9 from "../assets/headItems/faces/sick.webp"
import f10 from "../assets/headItems/faces/happy.webp"

const heads=[
    {
        title:"Hairs",
        image:g,
        color:"bg-lime-500",
        slug:"hairs"
    },
    {
        title:"Heads",
        image:he,
        color:"bg-teal-500",
        slug:"heads"
    },
    {
        title:"Faces",
        image:f,
        color:"bg-amber-500",
        slug:"faces"
    }
]

const hairs = [
    {
        image: h1,
        title: "Aesthetic Low Pigtails in Blonde"
    },
    {
        image: h2,
        title: "Beautiful Hair for Beautiful People"
    },
    {
        image: h3
        ,
        title: "Black Messy Bun Hairstyle"
    },
    {
        image: h4,
        title: "Black Royal Braid"
    },
    {
        image: h5,
        title: "Blonde Flowy Pigtails"
    },
    {
        image: h6,
        title: "Blonde Royal Braid"
    },
    {
        image: h7,
        title: "Clean Shiny Spikes"
    
    },
    {
        image: h8,
        title: "Cool Boy Hair"
        
    },
    {
       image: h9,
        title: "Crimson Shaggy 2.0"
        
    },
]

const head=[
    {
        image: p1,
        title: "Animated Chibi Vampire Face"
    },
    {
        image: p2,
        title: "Animated Cute Blush Face"
    },
    {
        image: p3,
        title: "Demonic Creature Evolution"
    },
    {
       image: p4,
        title: "Miss Bored 2.0"
    },
    {
        image: p5,
        title: "Silly Smile"
    },
    {
        image: p6,
        title: "Siren Eye Chibi Girl"
    },
    {
        image: p7,
        title: "Animated Droop Ears"
    },
    {
       image: p8,
        title: "Squiggle Mouth"
    },
    {
        image: p9,
        title: "Stunned Dazed Scene Face"
    },
    {
        image: p10,
        title: "WUH Cat"
    }
]

const faces=
[
    {
        image: f1,
        title: "Face Tattoo"
    },
    {
        image: f2,
        title: "Blue Wistful Wink"
        
    },
    {
        image: f3,
        title: "Classic Vampire"
    },
    {
        image: f4,
        title: "Heart Gaze-Zara Larsson"
    },
    {
        image: f5,
        title: "Meanie"
    },
    {
        image: f6,
        title: "Mr. Chuckles"
    },
    {
        image: f7,
        title: "Playful Vampire"
    },
    {
        image: f8,
        title: "ROBLOX Madness Face"
    },
    {
        image: f9,
        title: "Sick Day"
    },
    {
        image: f10,
        title: "Super Super Happy Face"
    }
]

const headItems={
    hairs,
    heads: head,
    faces
}
export {heads, headItems };