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
            title: "Bayer Filter",
            description: "A C++ implementation of a Bayer filter, the same color filtering process used in real " +
                "digital camera sensors. The program takes an input image and copies only the red, green, or blue " +
                "channel of each pixel according to the Bayer pattern, simulating how a photo sensor captures color " +
                "by recording only one wavelength per pixel. The filtered image is then reconstructed back into a " +
                "full color image by averaging the surrounding pixel values for each color channel. The trickiest " +
                "part was handling edge cases at the image border, which required 22 unique scenarios to account " +
                "for every possible pixel position and channel combination.",
            images: [
                { src: "images/cpp/bayer/image12.png", alt: "Initial Image" },
                { src: "images/cpp/bayer/image1.png", alt: "Bayer Filter Applied" },
                { src: "images/cpp/bayer/image3.png", alt: "Reconstructed Image" },
            ],
            github: "",
        },
        {
            title: "Shaders",
            description: "A C++ and GLSL implementation of five different shading models applied to a 3D scanned " +
                "mesh: normal, distance, spotlight, toon, and hemisphere shading. The phong model serves as the " +
                "foundation, with each shader building on it in a different direction. Toon shading uses dot product " +
                "thresholds to create a cel shaded appearance, hemisphere shading interpolates between warm and cool " +
                "colors based on a warmth coefficient, and the spotlight shader uses an angle check against a defined " +
                "cone to determine when to display. Each shader is implemented as its own GLSL file and swapped " +
                "in through the C++ side.",
            images: [
                { src: "images/cpp/shader/image3.png", alt: "Normal Shader" },
                { src: "images/cpp/shader/image6.png", alt: "Distance Shader" },
                { src: "images/cpp/shader/image4.png", alt: "Spotlight Shader" },
                { src: "images/cpp/shader/image14.png", alt: "Hemisphere Shader" },
                { src: "images/cpp/shader/image8.png", alt: "Toon Shader" },
            ],
            github: "",
        },
        {
            title: "Bezier and Chaikin Curves",
            description: "A C++ implementation of two curve generation algorithms: Chaikin and Bezier. Chaikin " +
                "curves work iteratively, taking a series of points connected by line segments and repeatedly cutting " +
                "corners by placing new points 25% and 75% along each segment, converging toward a smooth curve over " +
                "several iterations. Bezier curves work by finding a point n% along every connecting segment and " +
                "repeating the process recursively until a single point is found, tracing out the curve as n " +
                "increases from 0 to 1.",
            images: [
                { src: "images/cpp/curves/image12.png", alt: "Chaikin Curve Initial Points" },
                { src: "images/cpp/curves/image10.png", alt: "Chaikin Curve Initial Line" },
                { src: "images/cpp/curves/image2.png", alt: "Chaikin Curve Iteration" },
                { src: "images/cpp/curves/image17.png", alt: "Bezier Curve Initial Points" },
                { src: "images/cpp/curves/image6.png", alt: "Chaikin Curve Final Result" },
                { src: "images/cpp/curves/image11.png", alt: "Bezier Curve 3 Control Points" },
                { src: "images/cpp/curves/image9.png", alt: "Bezier Curve 8 Control Points" },
            ],
            github: "",
        },
        {
            title: "Rasterization",
            description: "A C++ implementation of triangle rasterization from scratch using the midpoint " +
                "algorithm, scanline algorithm, and barycentric interpolation. The midpoint algorithm handles " +
                "drawing the edges pixel by pixel by checking the line slope against four cases using the implicit " +
                "line formula. The scanline algorithm then evaluates every pixel in the image to determine if it " +
                "falls inside the triangle. Finally barycentric interpolation colors the interior by calculating " +
                "the areas of three sub triangles per pixel to blend smoothly between the three corner colors.",
            images: [
                { src: "images/cpp/raster/image2.png", alt: "Interpolated Triangle 1" },
                { src: "images/cpp/raster/image1.png", alt: "Interpolated Triangle 2" },
            ],
            github: "",
        },
        {
            title: "Particle Systems",
            description: "A C++ and GLSL implementation of a particle system capable of simulating large " +
                "collections of small objects like smoke, fire, and sparks. Particles emit from a configurable " +
                "emitter with controllable properties including spawn rate, lifetime, color, size, transparency, " +
                "and initial velocity. The implementation includes several emitter configurations: a sin wave, a " +
                "filled sin wave, a circle, and two cylinder variations based on random x and y offsets. Random " +
                "per particle values are passed from the C++ side to the vertex shader via separate VBOs.",
            images: [
                { src: "images/cpp/particle/image2.png", alt: "Increased Particles" },
                { src: "images/cpp/particle/image4.png", alt: "Line" },
                { src: "images/cpp/particle/image8.png", alt: "Sin Wave" },
                { src: "images/cpp/particle/image7.png", alt: "Cylinder" },
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
        description: [
            "This is a 1v1 king of the hill movement FPS built alongside two teammates in my final semester at UNCW for our game development class. The concept was a cybersecurity themed shooter where the players are people inside a computer, either trying to break in or defend it, which informed everything from the abilities to the art direction. It was my first time back in Unreal in years, with my teammates having no experience in it, and I ended up taking on most of the core systems as a result.",

            "For the movement I aimed for a fluid system implementing sliding, wall running, wall climbing, and clambering in UE5 blueprints. I also built the base projectile weapon everything else was built off of, handled player scoring, death and respawning, built the king of the hill objective, and put together the movement section of our tutorial area.",

            "For the abilities I designed the gameplay of both offensive and defensive pickups around cybersecurity concepts, things like a DDoS that covers your opponent's screen, malware that reverses their controls, and a firewall that places a physical wall in the level. The art direction was where I had the most fun, landing on a Windows 95 aesthetic for the menus and UI to match the cybersecurity theme and adding graffiti style typography to give it a unique spin. The scope ended up being too large for our team and timeline, but it was a great lesson in making hard calls under a deadline and shipping something even when it is not where you wanted it to be.",
        ],
        images: [
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 1" },
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 2" },
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 3" },
            { src: "images/purple_team/temp.jpg", alt: "Purple Team Screenshot 4" },
        ],
        itchUrl: "https://tshalosky13.itch.io/purple-team",
        downloadUrl: "downloadables/Purple Team.zip",  // or "" to hide the button

        reflection: [
            "Looking back, Purple Team was a hard project but one I am genuinely proud of shipping. Seeing players " +
            "at the UNCW computing showcase actually having fun with it, and getting positive feedback from " +
            "professors, meant a lot given how difficult the development process was. The parts I am most proud " +
            "of are the ability design, which I think are unique and pretty fun to play around with, and the art " +
            "direction, the Windows 95 aesthetic felt like a perfect fit for the concept and was not something I " +
            "had seen a lot of at the time.",

            "If I were to do it again I would scope it way down, or maybe pick a simpler game concept entirely. " +
            "Multiplayer was by far the hardest part of the project and ate up a huge amount of time that could " +
            "have gone toward polish. For example, I had spent a week and a half out of the semester implementing " +
            "a full LAN system for people on other PCs to play together that ended up getting cut for being too " +
            "difficult to implement. A tighter single player experience probably would have led to a much more " +
            "finished feeling game. That said, even in its rough state there is genuine fun to be had when you sit " +
            "down with someone and play it, and fun was always the most important goal to me.",
        ],
    },

    boardGames: [
        {
            title: "Undead Dash",
            description: [
                "My game, Undead Dash, is a mod of the board game Up the River that I made with 3 teammates " +
                "during my first semester at USC. Changes include deck building mechanics, a retooled board, " +
                "and role cards. All four of us collaboratively contributed to the design, and I think that " +
                "showed a lot in how well the game turned out. My individual contributions, separate from " +
                "designing with the group, included making and drawing the art for the board, as well as " +
                "sourcing and decorating the box and pieces.",

                "We iterated through countless versions of different cards as we playtested, honing in on " +
                "what we believed to be the best version of our deck. Our process was to playtest internally, " +
                "discuss proposed changes and the reasoning behind them, then playtest again before opening it " +
                "up to external playtesters. One persistent issue was game length, we were targeting 12 minutes " +
                "but consistently hit 20+. To address this we removed the tile recycling mechanic and shrunk " +
                "the ending bunker, forcing players to rush and act more aggressively. We also wanted players " +
                "interacting and betraying one another rather than just playing in parallel, which we achieved " +
                "by introducing role cards that incentivized helping or hurting other players to gain extra " +
                "points at the end of the game.",
            ],
            images: [
                { src: "images/board_games/undead/temp.jpg", alt: "Undead Dash Photo 1" },
                { src: "images/board_games/undead/temp.jpg", alt: "Undead Dash Photo 2" },
                { src: "images/board_games/undead/temp.jpg", alt: "Undead Dash Photo 3" },
            ],
            rulesUrl: "pdfs/UndeadRules.pdf",     // or "" to hide button
            journalUrl: "pdfs/UndeadPhotoJournal.pdf", // or "" to hide button
        },
        {
            title: "Love and War",
            description: [
                "Love and War is a 3 player tile conquest game centered around fighting for your love interest " +
                "that I made with 3 teammates during my first semester at USC. The board is a heart shape I " +
                "designed to place all three players equidistant from each other, and each player draws a suitor " +
                "card at the start with unique trait requirements they must meet to win. Traits are strength, wit, " +
                "and charm, and combat between players works like rock paper scissors using dice rolls modified " +
                "by each trait. Players conquer tiles to gain trait points, with NPC pawn spaces offering a " +
                "higher bonus than standard tiles.",

                "My main role was playtesting, running surveys after each session and analyzing the feedback to " +
                "inform our design decisions. Beyond that I contributed several ideas to the design, including " +
                "the heart shaped board, a love interest per player system to solve an early elimination problem " +
                "we were having, and the trait trackers players use to keep count during the game. The most " +
                "striking finding from playtesting was how much the art mattered. Before we had art players were " +
                "going through the motions, but once illustrated suitor cards and styled tiles were added " +
                "engagement jumped noticeably. Players got attached to their suitors and actually wanted to win " +
                "for them. It was a clear lesson in how much presentation shapes how invested someone feels " +
                "in a game.",
            ],
            images: [
                { src: "images/board_games/love_war/temp.jpg", alt: "Love and War Photo 1" },
                { src: "images/board_games/love_war/temp.jpg", alt: "Love and War Photo 2" },
                { src: "images/board_games/love_war/temp.jpg", alt: "Love and War Photo 3" },
            ],
            rulesUrl: "pdfs/LoveWarRules.pdf",
            journalUrl: "pdfs/LoveWarPhotoJournal.pdf",
        },
        {
            title: "Museum Mischief",
            description: [
                "Museum Mischief is a 2v2 party game I designed with 3 teammates during my first semester at " +
                "USC. One player on each team acts as the director, guiding their partner to collect a specific " +
                "sequence of gems from a shared pile, but neither player can just do it the straightforward way. " +
                "Every round both players draw challenge cards that restrict how they can communicate or act, " +
                "things like only using nouns, running a lap around the table before picking up a gem, or only " +
                "saying hot or cold.",

                "The concept started as untangling Christmas lights in unconventional ways before we landed on " +
                "gem sorting, which gave us more flexibility for the kinds of restrictions we could layer on. " +
                "A lot of the early design was just us sitting around a table trying to pick up gems in weird " +
                "ways and seeing what was fun. We also added fairness cards that the winning team of each round " +
                "has to abide by, giving them a handicap to keep things competitive, and a buzzer for winners " +
                "to hit after playing another team's game and watching how much players just loved hitting a " +
                "buzzer. I was the lead designer on the project, responsible for the core mechanic, writing the " +
                "rules, and refining the game through each round of playtesting with my team.",
            ],
            images: [
                { src: "images/board_games/museum/temp.jpg", alt: "Museum Mischief Photo 1" },
                { src: "images/board_games/museum/temp.jpg", alt: "Museum Mischief Photo 2" },
                { src: "images/board_games/museum/temp.jpg", alt: "Museum Mischief Photo 3" },
            ],
            rulesUrl: "pdfs/MuseumRules.pdf",
            journalUrl: "pdfs/MuseumPhotoJournal.pdf",
        },
        // Add more board games by copying a block above ↑
    ],

    // ── 3D ART ───────────────────────────────────────────────
    scenes: [
        {
            title: "Bedroom",
            description: [
                "Bedroom is a 3D scene built around the prompt of recreating your dream childhood bedroom, " +
                "modeled and textured entirely in Maya during my senior year at UNCW. I based it off of my " +
                "older brother's friend's room, which was a fun room I spent a good amount of time in growing " +
                "up because it had a TV and a GameCube in it that we'd play all the time. That became the " +
                "centerpiece, a CRT TV with a GameCube set up, surrounded by the kinds of things you would " +
                "find in a kid's room like bean bags, a baseball bat, a couch. I also added in some things " +
                "that are more me now, like three snowboards on the wall and a large geometric mountain " +
                "as wall art.",

                "It was my first time modeling anything and I was surprised by how much I enjoyed it. A lot " +
                "of the process was just seeing an object I wanted in the scene and figuring out how to build " +
                "it, which kept it fun throughout. The scene has around 40 individual objects and is textured " +
                "entirely with ambient occlusion maps, a constraint that ended up giving everything a " +
                "distinctive baked look that I think suits the scene well.",
            ],
            sketchfabId: "",  // paste model ID from sketchfab embed URL, e.g. "abc123def456"
            images: [
                { src: "images/3d_scenes/bedroom/temp.jpg", alt: "Bedroom Render 1" },
                { src: "images/3d_scenes/bedroom/temp.jpg", alt: "Bedroom Render 2" },
            ],
            downloadUrl: "", // or "downloads/scene1.zip"
        },
        {
            title: "Ski Town",
            description: [
                "Ski Town is a miniature diorama style 3D scene modeled entirely in Maya and textured in Substance " +
                "Painter during my senior year at UNCW, " +
                "built to look like something you would find in a museum or natural " +
                "park welcome center. The scene is divided into four quadrants: a mountain with pine trees and " +
                "ski lifts, a large lodge with a parking lot at the base, a pond surrounded by benches, and a " +
                "small town with a bank, apartment buildings, and rows of storefronts. Smaller details like " +
                "trashcans, bushes, and light posts fill out the scene. Everything is fully textured with a " +
                "slightly plastic look to sell the diorama aesthetic.",

                "This project taught me a lot about scope. I had planned a much more diverse layout but ended " +
                "up with four unique building types because I had not accounted for how long the full pipeline " +
                "from reference gathering to modeling to texturing to placement actually takes per object. Rows " +
                "of the same building helped fill the town without having to model everything from scratch, " +
                "which was itself a practical lesson in working smarter within constraints.",
            ],
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
            description: [
                "A Fox and His Ball is a 3D animation I made during my senior year at UNCW for an assignment " +
                "centered around a bioluminescent animal. The story follows a stuffed fox in a yellow room " +
                "who is jumping around playing with a tennis ball, only to knock it into a dark cracked open " +
                "room. He looks over the posters on his wall, showing movie and game foxes and a motivational " +
                "\"believe\" poster. After a few head tilts and a cat style pounce crouch, he walks in after " +
                "it with his white patches glowing an emissive blue.",

                "The assignment was meant to get our feet wet in animation using deformers but I wanted to " +
                "jump straight into rigging and taught myself how to do it instead. It was my first time " +
                "animating anything and looking back at the full piece it shows a little, but there are moments " +
                "I am still proud of, especially the head tilts and the little mannerisms before the pounce. " +
                "Getting those small idle movements to feel natural was harder than I expected and more " +
                "satisfying to land than any of the bigger moments. Modeled and animated in Maya " +
                "textured in Substance Painter, and composited in After Effects.",
            ],
            youtubeId: "zZGdN4yVD6E",
        },
        {
            title: "A Fox and His Ball",
            description: [
                "Brand New Broom is a 3D animation I made during my senior year at UNCW for a fantasy inspired " +
                "rigging assignment. It follows a kid wizard in wizard school trying to make his skateboard fly " +
                "on the end of a broom. The aesthetic is arts and crafts, everything is meant to look like it " +
                "was made from clay, cardboard, or yarn, with the skateboard modeled as a popsicle stick and " +
                "the character's hair made using a MASH system to simulate sewn thread.",

                "My process began with a loose storyboard and a sketchbook page filled with small world " +
                "building and my initial idea of the character. I then got into my rhythm of modeling, " +
                "texturing, rigging, and animating before rendering it all out. I lastly did my compositing " +
                "in After Effects, where I also added a CRT filter for some added flair. Compared to my " +
                "earlier fox animation this one has a more developed story, more refined animation, and a " +
                "clearer sense of direction. Modeled and animated in Maya, textured in Substance Painter, " +
                "composited in After Effects.",
            ],
            youtubeId: "YYwnx12hpyw",
        },
        // Add more animations by copying a block above ↑
    ],

};