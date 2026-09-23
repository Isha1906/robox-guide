import bun from "../assets/animation/bundle.webp"
import emote from "../assets/animation/emote.webp"

// Bundles
import b1 from "../assets/animation/bundles/bubbly.webp";
import b2 from "../assets/animation/bundles/levitation.webp";
import b3 from "../assets/animation/bundles/nfl.webp";
import b4 from "../assets/animation/bundles/ninja.webp";
import b5 from "../assets/animation/bundles/oldschool.webp";
import b6 from "../assets/animation/bundles/stylish.webp";
import b7 from "../assets/animation/bundles/toyanimation.webp";
import b8 from "../assets/animation/bundles/vampire.webp";

// emotes
import e1 from "../assets/animation/emotes/baby.webp";
import e2 from "../assets/animation/emotes/curtsy.webp";
import e3 from "../assets/animation/emotes/godlike.webp";
import e4 from "../assets/animation/emotes/happy.webp";
import e5 from "../assets/animation/emotes/herolanding.webp";
import e6 from "../assets/animation/emotes/monkey.webp";
import e7 from "../assets/animation/emotes/quitewaves.webp";
import e8 from "../assets/animation/emotes/shy.webp";
import e9 from "../assets/animation/emotes/twirl.webp";
const animation=[
    {
        title:"Bundles",
        image:bun,
        color:"bg-purple-500",
        slug:"bundles",
        h:"h-45"
    },
    {
        title:"Emotes",
        image:emote,
        color:"bg-red-500",
        slug:"emotes",
        h:"h-30"
    }
]

const bundles = [
    {
        title: "Bubbly Animation Package",
        image: b1
    },
    {
        title: "Levitation Animation Pack",
        image: b2
    },
    {
        title: "NFL Animation Pack",
        image: b3
    },
    {
        title: "Ninja Animation Package",
        image: b4
    },
    {
        title: "Oldschool Animation Pack",
        image: b5
    },
    {
        title: "Stylish Animation Pack",
        image: b6
    },
    {
        title: "Toy Animation Pack",
        image: b7
    },
    {
        title: "Vampire Animation",
        image: b8
    }
]

const emotes = [
    {
        title: "Baby Dance",
        image: e1
    },
    {
        title: "Curtsy",
        image: e2
    },
    {
        title: "Godlike",
        image: e3
    },
    {
        title: "Happy",
        image: e4
    },
    {
        title: "Hero Landing",
        image: e5
    },
    {
        title: "Monkey",
        image: e6
    },
    {
        title: "Quiet Waves",
        image: e7
    },
    {
        title: "Shy",
        image: e8
    },
    {
        title: "Twirl",
        image: e9
    }
]

const animationItems={
    bundles: bundles,
    emotes: emotes
}

export { animation, animationItems }