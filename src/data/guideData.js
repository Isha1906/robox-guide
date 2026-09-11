const guideSteps = {
    level: {
        title: "SELECT LEVEL",
        options: [
            { title: "Beginner" },
            { title: "Intermediate" },
            { title: "Advanced" },
            { title: "Professional" }
        ],
        next: "rbx-count"
    },
    "rbx-count": {
        title: "SELECT YOUR RBX COUNT",
        options: [
            { title: "0 - 50" },
            { title: "51 - 100" },
            { title: "101 - 400" },
            { title: "400 - 1000" },
            { title: "1001 - 5000" },
            { title: "5001 - 20000" }
        ],
        next: "age"
    },
    age: {
        title: "SELECT AGE",
        options: [
            { title: "5 - 12" },
            { title: "13 - 18" },
            { title: "19 - 25" },
            { title: "26 - 40" },
            { title: "41 - 60" }
        ],
        next: "playtime"
    },
    playtime: {
        title: "SELECT PLAYTIME",
        options: [
            { title: "Less than 1 hour" },
            { title: "1 - 2 hours" },
            { title: "2 - 4 hours" },
            { title: "4 - 6 hours" },
            { title: "More than 6 hours" }
        ],
        next: "success"
    }
}
export default guideSteps;