// ============================================================
//  PORTFOLIO CONTENT — edit this file only!
//  Changes here automatically update BOTH retro and modern views.
// ============================================================

const PORTFOLIO = {

    // ── PERSONAL INFO ────────────────────────────────────────
    name: "Thomas Peregrine Shalosky",
    title: "Game Developer | Technical Artist | Graphics Programmer",
    photo: "images/profile-photo.jpg",   // your headshot
    email: "Shalosky@usc.edu",
    linkedin: "https://www.linkedin.com/in/thomas-shalosky/",
    resume: "pdfs/Thomas Shalosky Technical Game Design Resume.docx.pdf",

    // ── WELCOME ──────────────────────────────────────────────
    welcome: {
        intro: "Hi, I'm Thomas Shalosky — a game developer, tech artist, and graphics programmer.",
        // Add a sentence or two about yourself / what visitors will find:
        description: "[Add a sentence or two about who you are and what visitors will find here.]",
    },

    // ── ABOUT / BIO ──────────────────────────────────────────
    bio: "[Add your bio here — background, education, what drives you, etc.]",

    skills: [
        "Game Design & Systems Design",
        "C++ Graphics Programming (OpenGL)",
        "Unity & Unreal Engine",
        "3D Modeling, Rigging, and Animating (Blender, Maya)",
        "Adobe Suite, DaVinci Resolve, Affinity",
    ],

    // ── GRAPHICS / TECH ART ──────────────────────────────────
    cpp: [
        {
            title: "Project 1: [Name]",
            description: "[Description of the project, techniques used, etc.]",
            images: [
                // { src: "images/cpp1-a.jpg", alt: "Screenshot 1" },
                // { src: "images/cpp1-b.jpg", alt: "Screenshot 2" },
            ],
            // youtubeId: "VIDEO_ID",   // uncomment + fill in to show a video
            github: "",                 // e.g. "https://github.com/you/repo"
        },
        {
            title: "Project 2: [Name]",
            description: "[Description]",
            images: [],
            github: "",
        },
        // Add more C++ projects by copying the block above ↑
    ],

    caustics: {
        title: "Water Caustics and God Rays",
        description: "This project simulates water caustics and god rays using volumetric ray marching and 3D Worley noise inside Unity's shader graph and custom HLSL.",
        images: [
            // { src: "images/caustics-1.jpg", alt: "Caustics 1" },
            // { src: "images/caustics-2.jpg", alt: "Caustics 2" },
            // { src: "images/caustics-3.jpg", alt: "Caustics 3" },
            // { src: "images/caustics-4.jpg", alt: "Caustics 4" },
        ],
        github: "https://github.com/raihansyahdean/Water-Light-Graphics-Project",
    },

    // ── GAME DESIGN ──────────────────────────────────────────
    purpleTeam: {
        title: "Purple Team",
        description: "[Add your description of Purple Team here — genre, gameplay, your role, etc.]",
        images: [
            // { src: "images/pt-1.jpg", alt: "Purple Team Screenshot 1" },
            // { src: "images/pt-2.jpg", alt: "Purple Team Screenshot 2" },
            // { src: "images/pt-3.jpg", alt: "Purple Team Screenshot 3" },
            // { src: "images/pt-4.jpg", alt: "Purple Team Screenshot 4" },
        ],
        itchUrl: "https://tshalosky13.itch.io/purple-team",
        downloadUrl: "downloads/PurpleTeam-Windows.zip",  // or "" to hide the button
    },

    boardGames: [
        {
            title: "[Board Game 1 Title]",
            description: "[Brief description of mechanics, theme, player count, etc.]",
            images: [
                // { src: "images/bg1-a.jpg", alt: "Photo 1" },
                // { src: "images/bg1-b.jpg", alt: "Photo 2" },
                // { src: "images/bg1-c.jpg", alt: "Photo 3" },
            ],
            rulesUrl: "pdfs/bg1-rules.pdf",     // or "" to hide button
            journalUrl: "pdfs/bg1-journal.pdf", // or "" to hide button
        },
        {
            title: "[Board Game 2 Title]",
            description: "[Description]",
            images: [],
            rulesUrl: "pdfs/bg2-rules.pdf",
            journalUrl: "pdfs/bg2-journal.pdf",
        },
        {
            title: "[Board Game 3 Title]",
            description: "[Description]",
            images: [],
            rulesUrl: "pdfs/bg3-rules.pdf",
            journalUrl: "pdfs/bg3-journal.pdf",
        },
        // Add more board games by copying a block above ↑
    ],

    // ── 3D ART ───────────────────────────────────────────────
    scenes: [
        {
            title: "Scene 1: [Project Name]",
            description: "[Description — software used, techniques, etc.]",
            sketchfabId: "",  // paste model ID from sketchfab embed URL, e.g. "abc123def456"
            images: [
                // { src: "images/scene1-a.jpg", alt: "Render 1" },
                // { src: "images/scene1-b.jpg", alt: "Render 2" },
            ],
            downloadUrl: "", // or "downloads/scene1.zip"
        },
        {
            title: "Scene 2: [Project Name]",
            description: "[Description]",
            sketchfabId: "",
            images: [],
            downloadUrl: "",
        },
        // Add more scenes by copying a block above ↑
    ],

    animations: [
        {
            title: "Brand New Broom",
            description: "[Add description of the Brand New Broom animation — character, story, techniques used.]",
            youtubeId: "zZGdN4yVD6E",
        },
        {
            title: "A Fox and His Ball",
            description: "[Add description of A Fox and His Ball — mood, rigging notes, software used, etc.]",
            youtubeId: "YYwnx12hpyw",
        },
        // Add more animations by copying a block above ↑
    ],

};