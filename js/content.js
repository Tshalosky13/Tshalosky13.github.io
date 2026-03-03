// ============================================================
//  PORTFOLIO CONTENT — edit this file only!
//  Changes here automatically update BOTH retro and modern views.
// ============================================================

const PORTFOLIO = {

    // ── PERSONAL INFO ────────────────────────────────────────
    name: "Thomas Peregrine Shalosky",
    title: "Game Developer | Technical Artist | Graphics Programmer",
    photo: "images/temp.jpg",   // your headshot
    email: "Shalosky@usc.edu",
    linkedin: "https://www.linkedin.com/in/thomas-shalosky/",
    github: "https://github.com/Tshalosky13",
    itch: "https://tshalosky13.itch.io",
    sketchfab: "https://sketchfab.com/tshalots",
    resume: "pdfs/Thomas Shalosky Technical Game Design Resume.docx.pdf",

    // ── WELCOME ──────────────────────────────────────────────
    welcome: {
        intro: "Hi, I'm Thomas Shalosky, a game developer, graphics programmer, and technical artist.",
        description: "This is my portfolio, a collection of game, programming, and art projects I've worked on. " +
            "Each icon on the home screen opens a section of my portfolio for a closer look at each project. " +
            "If you'd like a more streamlined layout, you can switch to the modern view in the taskbar. " +
            "Have fun looking around!",
        bullets: [
            { label: "Graphics Programming / Technical Art", detail: "C++ graphics projects and Unity shaders" },
            { label: "Game Design", detail: "Video and board game projects" },
            { label: "3D Art", detail: "Modeled scenes and animations" },
        ],
        tip: "Tip: Drag and resize windows just like a real desktop! Open the Start menu to access Settings and Music.",
        credits: "Icons sourced from https://win98icons.alexmeub.com/.",
    },

    // ── ABOUT / BIO ──────────────────────────────────────────
    bio: [
        "I was born and raised in Charlotte, North Carolina and completed my undergrad at UNC Wilmington in " +
        "computer science with a focus and minor in digital arts. I'm currently living in LA and working through " +
        "my master's in computer science and game development at USC.",

        "While I was growing up, it was hard to find me without a game in my hands. I was always reading about " +
        "upcoming releases, watching development coverage, and digging into how games changed from their early " +
        "builds to what shipped. I even cut a DS out of a magazine that I pretended to play on before I had one." +
        " That passion has shifted from viewing games as a player into developer as I learn everything I can about " +
        "actually making games.",

        "Outside of playing and making games, I love spending my free time snowboarding, mountain biking, " +
        "swimming, backpacking, drawing, and listening to music.",
    ],
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
                { src: "images/cpp/temp.jpg", alt: "Screenshot 1" },
                { src: "images/cpp/temp.jpg", alt: "Screenshot 2" },
            ],
            // youtubeId: "VIDEO_ID",   // uncomment + fill in to show a video
            github: "",                 // e.g. "https://github.com/you/repo"
        },
        {
            title: "Project 2: [Name]",
            description: "[Description]",
            images: [
                { src: "images/cpp/temp.jpg", alt: "Screenshot 1" },
                { src: "images/cpp/temp.jpg", alt: "Screenshot 2" },
            ],
            github: "",
        },
        // Add more C++ projects by copying the block above ↑
    ],

    caustics: {
        title: "Water Caustics and God Rays",
        description: [
            "This is a collaborative project with three teammates that simulates water caustics and volumetric " +
            "god rays in Unity. One other teammate and I were responsible for the caustics side of the project. " +
            "Since we had done a previous assignment on different procedural noise generation techniques for the " +
            "same class, we decided to expand on that lesson by using Voronoi noise as the basis for our pattern.",

            "Our approach centered on generating a 3D cube of Voronoi noise and sampling a 2D slice from it each " +
            "frame to use as a shifting texture. My partner handled the programming side of our methodology, while " +
            "I was responsible for integrating it into Unity. My biggest challenge was getting the material to " +
            "project onto every object in the scene, which I solved by discovering Unity's decal system, using " +
            "it to define a volume that would apply the caustic material to any object inside it.",

            "Once our caustics and our other teammates' god rays were working, I assembled the scene for our final " +
            "render. I populated it with coral, a treasure chest, a sandcastle, SpongeBob houses, and an old-timey " +
            "diver helmet to show how the caustics interacted dynamically with different objects the way real " +
            "underwater light would.",
        ],
        images: [
            { src: "images/caustics/temp.jpg", alt: "Caustics 1" },
            { src: "images/caustics/temp.jpg", alt: "Caustics 2" },
            { src: "images/caustics/temp.jpg", alt: "Caustics 3" },
            { src: "images/caustics/temp.jpg", alt: "Caustics 4" },
        ],
        github: "https://github.com/raihansyahdean/Water-Light-Graphics-Project",
    },

    // ── GAME DESIGN ──────────────────────────────────────────
    purpleTeam: {
        title: "Purple Team",
        description: "A semester-long FPS built with two teammates in my final semester at UNCW. The concept was a cybersecurity-themed Titanfall-inspired movement shooter — so the movement system I implemented covers sliding, wall running, wall climbing, clambering, and standard WASD movement, all tuned to feel fast and fluid. For the art direction I leaned into the cybersecurity concept and landed on Windows 95 as the visual language. The map is set in an old office, and the menus carry that through with a simulated Win95 desktop as the main menu background, UI windows that recreate the original Win95 chrome, and icons pulled from the original asset pack. I layered in some graffiti-style typography on top to give it a bit of edge.",
        images: [
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 1" },
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 2" },
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 3" },
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 4" },
        ],
        itchUrl: "https://tshalosky13.itch.io/purple-team",
        downloadUrl: "downloads/PurpleTeam-Windows.zip",  // or "" to hide the button
    },

    boardGames: [
        {
            title: "Undead Dash",
            description: "A redesign of the classic game Up the River, expanded with a card and deck system across a modified board. The most interesting design problem was balancing — small changes in any card's value had an outsized effect on how players behaved, and early versions of the deck created too much drag, slowing the game down with incremental movement cards that felt like filler. We cut those and added role cards instead, giving each player a secret condition that unlocked bonus points at the end, like being the sole survivor or getting all of your pieces across. That shift encouraged communication and temporary alliances without forcing them. We also had a pacing problem — players weren't feeling urgency. We solved that by changing the board so a tile drops every round rather than recycling like in the original, which put a ticking clock under every decision.",
            images: [
                { src: "images/board_games/undead/temp.jpg", alt: "Undead Dash Photo 1" },
                { src: "images/board_games/undead/temp.jpg", alt: "Undead Dash Photo 2" },
                { src: "images/board_games/undead/temp.jpg", alt: "Undead Dash Photo 3" },
            ],
            rulesUrl: "pdfs/bg1-rules.pdf",     // or "" to hide button
            journalUrl: "pdfs/bg1-journal.pdf", // or "" to hide button
        },
        {
            title: "Love and War",
            description: "A player-vs-system tile-based territory control game with a romance theme. Players start in their corner, draw a suitor card with unique trait requirements, and race to conquer tiles that boost those traits to the levels needed to win. I led playtesting for the four-person team, running surveys after each session and analyzing the results. The most memorable finding: after our first round of playtests we got middling scores across the board, and the feedback was hard to pin down. We added art as our only change before the next session — illustrated suitor cards, styled tiles — and engagement jumped noticeably. Players got attached to their suitors and actually wanted to win for them. It was a pretty clear lesson in how much visual presentation shapes how invested someone feels in a game.",
            images: [
                { src: "images/board_games/love_war/temp.jpg", alt: "Love and War Photo 1" },
                { src: "images/board_games/love_war/temp.jpg", alt: "Love and War Photo 2" },
                { src: "images/board_games/love_war/temp.jpg", alt: "Love and War Photo 3" },
            ],
            rulesUrl: "pdfs/bg2-rules.pdf",
            journalUrl: "pdfs/bg2-journal.pdf",
        },
        {
            title: "Museum Mischief",
            description: "A 2v2 party game where one player on each team must guide their partner to collect a specific sequence of gems from a shared pile — but can't just tell them directly. Every round players draw a debuff card that restricts how they can communicate: no talking, eyes closed when picking up, and so on. I was the lead designer on the project, responsible for the core mechanic, writing the rules, and refining the game through playtesting feedback.",
            images: [
                { src: "images/board_games/museum/temp.jpg", alt: "Museum Mischief Photo 1" },
                { src: "images/board_games/museum/temp.jpg", alt: "Museum Mischief Photo 2" },
                { src: "images/board_games/museum/temp.jpg", alt: "Museum Mischief Photo 3" },
            ],
            rulesUrl: "pdfs/bg3-rules.pdf",
            journalUrl: "pdfs/bg3-journal.pdf",
        },
        // Add more board games by copying a block above ↑
    ],

    // ── 3D ART ───────────────────────────────────────────────
    scenes: [
        {
            title: "Bedroom",
            description: "A 3D scene built around the prompt of recreating your dream childhood bedroom, containing around 40 individual objects textured entirely with ambient occlusion maps. This was my first modeling project, so a lot of the work was just learning to trust the process — Maya's controls were unforgiving early on and it was easy to lose progress on a mesh without understanding why. I eventually settled into a rhythm of pulling heavy reference before touching anything and building incrementally off of it. The AO-only texturing was a constraint that ended up giving the scene a lot of character.",
            sketchfabId: "",  // paste model ID from sketchfab embed URL, e.g. "abc123def456"
            images: [
                { src: "images/3d_scenes/bedroom/temp.jpg", alt: "Bedroom Render 1" },
                { src: "images/3d_scenes/bedroom/temp.jpg", alt: "Bedroom Render 2" },
            ],
            downloadUrl: "", // or "downloads/scene1.zip"
        },
        {
            title: "Ski Town",
            description: "A miniature diorama-style model of a ski town, built in the style of something you'd find in a museum welcome center. Fully modeled and textured from scratch with 30-40 unique objects. The project taught me a lot about scope — I had planned a much more diverse set of buildings but ended up with four unique ones, because I hadn't accounted for how long the full pipeline from reference gathering to final texture and placement actually takes per object. That lesson has informed how I scope 3D work ever since.",
            sketchfabId: "",
            images: [
                { src: "images/3d_scenes/city/temp.jpg", alt: "Ski Town Render 1" },
                { src: "images/3d_scenes/city/temp.jpg", alt: "Ski Town Render 2" },
            ],
            downloadUrl: "",
        },
        // Add more scenes by copying a block above ↑
    ],

    animations: [
        {
            title: "Brand New Broom",
            description: "A longer animation following a kid wizard in wizard school who's trying to make a broom fly. The aesthetic is arts and crafts — clay, cardboard, yarn, with the board modeled as a popsicle stick. The story opens on a slow pan across a bookshelf, then cuts to the wizard's feet struggling under some weight as he mutters in Animal Crossing gibberish with subtitles. He sets up his book, levitates it, casts a spell on the broom — there's a loud boom, the screen goes white, and he's knocked flat. He gets up to find the broom floating. He moves it around with his wand, reaches out to touch it, and the moment his hand makes contact it launches off screen taking him with it. You just hear the crash. Compared to the fox animation this one has a more developed story, more refined animation, and a clearer sense of what it's trying to be.",
            youtubeId: "zZGdN4yVD6E",
        },
        {
            title: "A Fox and His Ball",
            description: "A 3D animation of a stuffed fox playing with a tennis ball — modeling, texturing, and animation all done by me. It was my first time animating anything, and looking back at the full piece it shows. But there are moments I'm still proud of, especially the head tilts when the fox sits and looks up at the posters on its wall. Getting those small idle mannerisms to feel natural was harder than I expected and more satisfying to land than any of the bigger movements.",
            youtubeId: "YYwnx12hpyw",
        },
        // Add more animations by copying a block above ↑
    ],

};