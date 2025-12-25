/**
 * --------------------------------------------------------------------------
 * DATA LAYER
 * --------------------------------------------------------------------------
 */
const SITE_CONFIG = {
    name: "Rahmad Sains",
    role: "Student",
    status: {
        label: "School Holiday",
        state: "holiday",
        note: "Manually updated by Rahmad Sains"
    },
    social: {
        email: "rsainsalhafidz@gmail.com",
        instagram: "rahmdsai"
    },
    quote: "Stay curious, stay humble."
};

// [SEPARATED] Data khusus untuk 3 foto tumpuk di halaman About
const ABOUT_STACK_DATA = [
    "./foto/a1.webp"
];

// [UPDATED] Data Galeri dengan dukungan Video & Deskripsi
const GALLERY_DATA = {
    title: "Gallery",
    description: "Moments, places, and details I find interesting.",
    items: [
{
    id: 1,
    type: "image",
    src: "./foto/1.png",
    alt: "Memories...",
    caption: "Moment 1",
    desc: "Small detail from my daily life."
},

{
    id: 2,
    type: "image",
    src: "./foto/2.jpg",
    alt: "Memories...",
    caption: "Moment 2",
    desc: "Small detail from my daily life."
},

{
    id: 3,
    type: "image",
    src: "./foto/3.jpeg",
    alt: "Memories...",
    caption: "Moment 3",
    desc: "Small detail from my daily life."
},

{
    id: 4,
    type: "image",
    src: "./foto/4.jpg",
    alt: "Memories...",
    caption: "Moment 4",
    desc: "Small detail from my daily life."
},


{
    id: 6,
    type: "image",
    src: "./foto/5.jpg",
    alt: "Memories...",
    caption: "Moment 5",
    desc: "Small detail from my daily life."
},

{
    id: 7,
    type: "image",
    src: "./foto/6.jpg",
    alt: "Memories...",
    caption: "Moment 6",
    desc: "Small detail from my daily life."
},

{
    id: 9,
    type: "image",
    src: "./foto/7.jpg",
    alt: "Memories...",
    caption: "Moment 7",
    desc: "Small detail from my daily life."
},

{
    id: 11,
    type: "image",
    src: "./foto/8.jpg",
    alt: "Memories...",
    caption: "Moment 8",
    desc: "Small detail from my daily life."
},

{
    id: 12,
    type: "image",
    src: "./foto/9.jpg",
    alt: "Memories...",
    caption: "Moment 9",
    desc: "Small detail from my daily life."
},

{
    id: 13,
    type: "image",
    src: "./foto/10.jpg",
    alt: "Memories...",
    caption: "Moment 10",
    desc: "Small detail from my daily life."
},

{
    id: 14,
    type: "image",
    src: "./foto/11.jpg",
    alt: "Memories...",
    caption: "Moment 11",
    desc: "Small detail from my daily life."
},

{
    id: 15,
    type: "image",
    src: "./foto/12.jpg",
    alt: "Memories...",
    caption: "Moment 12",
    desc: "Small detail from my daily life."
},

{
    id: 16,
    type: "image",
    src: "./foto/13.jpg",
    alt: "Memories...",
    caption: "Moment 13",
    desc: "Small detail from my daily life."
},

{
    id: 17,
    type: "image",
    src: "./foto/14.jpg",
    alt: "Memories...",
    caption: "Moment 14",
    desc: "Small detail from my daily life."
},

{
    id: 18,
    type: "image",
    src: "./foto/15.jpg",
    alt: "Memories...",
    caption: "Moment 15",
    desc: "Small detail from my daily life."
},

{
    id: 19,
    type: "image",
    src: "./foto/16.jpg",
    alt: "Memories...",
    caption: "Moment 16",
    desc: "Small detail from my daily life."
},

{
    id: 21,
    type: "image",
    src: "./foto/17.jpg",
    alt: "Memories...",
    caption: "Moment 17",
    desc: "Small detail from my daily life."
},

{
    id: 22,
    type: "image",
    src: "./foto/18.jpg",
    alt: "Memories...",
    caption: "Moment 18",
    desc: "Small detail from my daily life."
},

{
    id: 23,
    type: "image",
    src: "./foto/19.jpg",
    alt: "Memories...",
    caption: "Moment 19",
    desc: "Small detail from my daily life."
},

{
    id: 24,
    type: "image",
    src: "./foto/20.jpg",
    alt: "Memories...",
    caption: "Moment 20",
    desc: "Small detail from my daily life."
},

{
    id: 25,
    type: "image",
    src: "./foto/21.jpg",
    alt: "Memories...",
    caption: "Moment 21",
    desc: "Small detail from my daily life."
},

{
    id: 26,
    type: "image",
    src: "./foto/22.jpg",
    alt: "Memories...",
    caption: "Moment 22",
    desc: "Small detail from my daily life."
},

{
    id: 27,
    type: "image",
    src: "./foto/23.jpg",
    alt: "Memories...",
    caption: "Moment 23",
    desc: "Small detail from my daily life."
},

{
    id: 28,
    type: "image",
    src: "./foto/24.jpg",
    alt: "Memories...",
    caption: "Moment 24",
    desc: "Small detail from my daily life."
},

{
    id: 29,
    type: "image",
    src: "./foto/25.jpg",
    alt: "Memories...",
    caption: "Moment 25",
    desc: "Small detail from my daily life."
},

{
    id: 30,
    type: "image",
    src: "./foto/26.jpg",
    alt: "Memories...",
    caption: "Moment 26",
    desc: "Small detail from my daily life."
},

{
    id: 31,
    type: "image",
    src: "./foto/27.jpg",
    alt: "Memories...",
    caption: "Moment 27",
    desc: "Small detail from my daily life."
},

{
    id: 32,
    type: "image",
    src: "./foto/28.jpg",
    alt: "Memories...",
    caption: "Moment 28",
    desc: "Small detail from my daily life."
},

{
    id: 33,
    type: "image",
    src: "./foto/29.jpg",
    alt: "Memories...",
    caption: "Moment 29",
    desc: "Small detail from my daily life."
},

{
    id: 34,
    type: "image",
    src: "./foto/30.jpg",
    alt: "Memories...",
    caption: "Moment 30",
    desc: "Small detail from my daily life."
},

{
    id: 35,
    type: "image",
    src: "./foto/31.jpg",
    alt: "Memories...",
    caption: "Moment 31",
    desc: "Small detail from my daily life."
},

{
    id: 36,
    type: "image",
    src: "./foto/32.jpeg",
    alt: "Memories...",
    caption: "Moment 32",
    desc: "Small detail from my daily life."
},

{
    id: 37,
    type: "image",
    src: "./foto/33.jpg",
    alt: "Memories...",
    caption: "Moment 33",
    desc: "Small detail from my daily life."
},

{   
    id: 38,
    type: "image",
    src: "./foto/34.jpg",
    alt: "Memories...",
    caption: "Moment 34",
    desc: "Small detail from my daily life."
},

{
    id: 39,
    type: "image",
    src: "./foto/dancok.jpeg",
    alt: "Memories...",
    caption: "Moment 35",
    desc: "Small detail from my daily life."
}

]

};

// [UPDATED] Data Pop-up dari rrrttt.json
const POPUP_DATA = {
    setup_and_gear: {
        linux: {
            title: "Why Linux",
            intro: "Linux gives me freedom, control, and clarity. I don’t want my system to think for me.",
            points: [
                "Control: I decide what runs on my machine.",
                "Stability: Fewer surprises, more consistency.",
                "Learning: You actually understand what’s happening."
            ],
            footer: "A computer should be a tool, not a boss."
        },
        endeavouros: {
            title: "Why EndeavourOS",
            intro: "EndeavourOS feels like Arch Linux without unnecessary pain.",
            points: [
                "Minimal by default, powerful by choice.",
                "No bloat, no forced workflow.",
                "Perfect balance between DIY and usability."
            ],
            footer: "Arch power, human-friendly."
        },
        wayland: {
            title: "Why Wayland",
            intro: "Wayland feels modern and smooth, especially for daily use.",
            points: [
                "Smoother animations.",
                "Better touchpad behaviour.",
                "Cleaner display pipeline."
            ],
            footer: "Once you adapt, X11 feels old."
        },
        browser: { 
            title: "Why Zen Browser",
            intro: "I like Zen Browser because it’s lightweight, privacy-focused, and doesn’t try to act smarter than me.",
            points: ["Built on Firefox.", "No telemetry nonsense.", "Zen Mods."],
            footer: "A browser should browse, not spy."
        },
        keyboard: {
            title: "Why Vortex Mono 75%",
            intro: "Compact but still productive. No wasted space.",
            points: ["75% layout keeps essential keys.", "Better ergonomics for long sessions.", "Clean desk, focused workflow."],
            footer: "Small desk, big efficiency."
        },
        gamepad: {
            title: "Why 8BitDo Ultimate 2C",
            intro: "A controller that just works, especially on Linux.",
            points: ["Plug and play.", "Comfortable for long sessions.", "Reliable build quality."],
            footer: "No drivers drama."
        },
        device: {
            title: "Why Acer and Samsung",
            intro: "A budget device with cool features",
            points: ["Budget friendly.", "Comfortable for long term use.", "Reliable build quality."],
            footer: "Increase creativity"
        },
        storage: {
            title: "Why Adata",
            intro: "storage with good read and write capabilities",
            points: ["Gift from my brothers", "Still usable for anything", "Reliable build quality."],
            footer: "No need to panic because the storage is full"
        },
        
    },
    obsessions_and_interests: {
        motorsports: {
            title: "Why Motorsports",
            intro: "Motorsports is pressure at extreme speed.",
            points: [
                "Mental strength matters more than talent.",
                "One mistake changes everything.",
                "Precision under pressure."
            ],
            footer: "This is where mindset gets exposed."
        },
        sports: {
            title: "Why Sports",
            intro: "Sports are stories, not just scores.",
            points: [
                "Big moments reveal true mentality.",
                "Failure is part of growth.",
                "Pressure creates legends."
            ],
            footer: "Stats don’t tell the whole story."
        },
        coding: {
            title: "Why Coding",
            intro: "Coding teaches you how to think, not just what to build.",
            points: ["Break problems into pieces.", "Patience beats speed.", "Small mistakes have big consequences."],
            footer: "Logic first, ego later."
        },
        technology: {
            title: "Why Technology",
            intro: "I like knowing how things work under the hood.",
            points: ["Understanding beats consuming.", "Good tech disappears when it works.", "Bad design always shows."],
            footer: "Tools should serve people."
        },
        coffee: {
            title: "Why Coffee",
            intro: "Coffee is a ritual, not a rush.",
            points: ["Forces patience.", "Creates thinking space.", "Slows the pace."],
            footer: "Not everything needs to be fast."
        }
    }
};

const TECH_STACK_DATA = [
    { label: "OS", value: "Linux", popupId: "linux" },
    { label: "Distro", value: "EndeavourOS", popupId: "endeavouros" },
    { label: "Display", value: "Wayland", popupId: "wayland" },
    { label: "Browser", value: "Zen Browser", popupId: "browser" },
    { label: "Keyboard", value: "Vortex Mono 75%", popupId: "keyboard" },
    { label: "Gamepad", value: "8BitDo Ultimate 2C", popupId: "gamepad" },
    { label: "Device", value: "Acer & Samsung", popupId: "device" }, 
    { label: "Storage", value: "ADATA", popupId: "storage" }       
];

const INTERESTS_DATA = [
    { id: "motorsports", label: "Motorsports", icon: "flag", desc: "Pure Competition", rotation: "-2deg", popupId: "motorsports" },
    { id: "sports", label: "Sports", icon: "activity", desc: "Pressure & Redemption", rotation: "2deg", popupId: "sports" },
    { id: "coding", label: "Coding", icon: "terminal", desc: "Logic & Patience", rotation: "-1deg", popupId: "coding" },
    { id: "tech", label: "Technology", icon: "cpu", desc: "Under the Hood", rotation: "3deg", popupId: "technology" }, 
    { id: "coffee", label: "Coffee", icon: "coffee", desc: "The Ritual", rotation: "-3deg", popupId: "coffee" }
];

const IDOLS_DATA = [
    { name: "Cristiano Ronaldo", role: "Al Nassr", icon: "⚽", link: "https://www.transfermarkt.com/cristiano-ronaldo/profil/spieler/8198" },
    { name: "Max Verstappen", role: "Red Bull Racing", icon: "🏎️", link: "https://www.formula1.com/en/drivers/max-verstappen.html" },
    { name: "Carlos Sainz", role: "Williams", icon: "🏎️", note: "Name similarity!", link: "https://www.formula1.com/en/drivers/carlos-sainz.html" }
];

const PROJECTS_DATA = [
    {
        id: 1,
        title: "AIO Calculator",
        category: "Technology",
        status: "Completed",
        desc: "AIO Calculator is a multi-purpose, browser-based calculator designed to provide users with a flexible and user-friendly interface.",
        learning: "Basic logic",
        link: "https://rahmdscience.github.io/kalkulator-serbaguna/",
        image: "./foto/aiocalculator.webp" 
    },
    {
        id: 2,
        title: "AIO File Suit",
        category: "Technology",
        status: "Completed",
        desc: "A lightweight file utility to help users manage, analyze, and process files directly within a web environment.",
        learning: "Fetching complex JSON data and handling API rate limits.",
        link: "https://rahmdscience.github.io/all-in-one-file-suit/",
        image: "./foto/aiofile.webp"
    },
    {
        id: 3,
        title: "Daily Puzzle",
        category: "Technology",
        status: "Completed",
        desc: "A browser-based interactive game designed to engage users with a new challenge on a regular basis.",
        learning: "Responsive grid layouts and image optimization.",
        link: "https://rahmdscience.github.io/daily-puzzle/",
        image: "./foto/puzzle.webp"
    },
    {
        id: 4,
        title: "Scoreboard",
        category: "Sports",
        status: "Completed",
        desc: "Browser-based web application designed to assist users in tracking and displaying scores for multiple participants.",
        learning: "Markdown parsing and static site generation concepts.",
        link: "https://rahmdscience.github.io/score-board/",
        image: "./foto/scoreboard.webp"
    }
];

const BLOG_DATA = [
    {
        id: 1,
        title: "Why I Idolise Max Verstappen?",
        category: "Motorsports",
        mood: "Analysis",
        date: "23 Dec 2021",
        readTime: "4 min",
        pinned: true, 
        excerpt: "Max Verstappen isn’t here to be liked—he’s here to win. Ruthless, focused, and unapologetic.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.

        I idolise Max Verstappen because he represents raw, no-nonsense racing in its purest form. He doesn’t try to be liked, doesn’t play the PR game, and honestly doesn’t give a d*mn about outside noise. When Max gets into the car, everything else disappears—no excuses, no drama, just pure intent to win. That kind of focus is rare, especially in a sport full of media pressure and fake politeness.

        People love saying he’s too aggressive, but that’s honestly bllsht. Formula 1 isn’t about being nice; it’s about commitment, confidence, and having the guts to send it when others hesitate. Max races on the limit because he trusts himself more than anyone else on the grid. He doesn’t back out, he doesn’t flinch, and that mentality is exactly why he breaks rivals mentally before the race is even over.

        What I respect most is how quiet and direct he is. No long speeches, no overhyped celebrations—just results. Win or lose, he stays the same: calm, cold, and already thinking about the next race. His loyalty to Red Bull and his ability to turn dominance into something that looks effortless prove that his success isn’t luck. It’s control.

        Max Verstappen isn’t here to be a hero for everyone, and that’s the whole point. He’s here to be the best, even if that means being hated. In a world full of fake energy and empty talk, Max is brutally honest performance—and yeah, that’s f***ing inspiring.`,
        image: "./foto/max.webp"
    },
    {
        id: 2,
        title: "Why Football Manager Is So Addictive",
        category: "Technology",
        mood: "Reflection",
        date: "1 Jan 2025",
        readTime: "5 min",
        excerpt: "Football Manager isn’t just a game, it’s a trap built on control, emotion, and endless hope.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.

        My first experience with Football Manager was FM 2017. Back then, it was interesting, but not life-changing. I played it casually, messed around with tactics, did a few seasons, then left it there. It felt complex, sure, but I hadn’t fully fallen into the rabbit hole yet. I didn’t realise at the time that FM was just warming me up.

        Everything changed with FM 21. That’s when the game stopped feeling like “just a football game” and started feeling personal. The depth hit harder, the realism felt sharper, and suddenly every decision mattered more than I expected. I wasn’t just clicking buttons anymore—I was thinking, planning, worrying. One bad result stayed in my head, one good run made me feel untouchable. That’s when FM properly got its hooks into me.

        What FM 21 did brilliantly was make me care. Players weren’t just names; they were projects. Youngsters I trusted, veterans I relied on, deadwood I couldn’t get rid of. Wins felt earned, losses felt like my fault, and that’s a dangerous combo. Instead of quitting after failure, I stayed up later trying to fix it, convinced I was one tweak away from greatness. That mindset is addictive as h*ll.

        From that point on, FM stopped being something I played and became something I committed to. Seasons blended together, rebuilds felt necessary, and stopping mid-save felt wrong. FM didn’t force me to play—it convinced me that I wanted to. And once a game does that, you’re already done.

        Football Manager didn’t grab me instantly. It waited. FM 2017 introduced me, but FM 21 locked me in. And honestly? I don’t even mind. Some addictions come with trophies, memories, and stories you’ll never forget—and this one’s worth every lost hour.`,
        image: "assets/blog/coding-school.jpg"
    },
    {
        id: 3,
        title: "Real Madrid’s Impossible Road to the 2022 Champions League",
        category: "Football",
        mood: "Opinion",
        date: "05 Jul 2025",
        readTime: "5 min",
        excerpt: "Real Madrid’s 2022 Champions League run defied logic from start to finish.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.

        Real Madrid’s 2022 Champions League win wasn’t about tactics, possession, or pretty football. It was about belief that refused to die. This wasn’t a clean campaign. It was messy, brutal, and absolutely insane. From start to finish, Madrid lived on the edge, surviving when they had no right to, winning when logic said it was over. This wasn’t a title run—it was a football miracle stretched over 13 matches.

        Against PSG, Madrid were dead and buried. Dominated, outplayed, written off. Then Karim Benzema decided reality was optional. One mistake, one goal, then suddenly the Bernabéu woke up and PSG collapsed like a house of cards. Same story against Chelsea. Madrid were cruising, then completely lost control. Stamford Bridge went quiet, Madrid were panicking, and still—one Luka Modrić assist that made no sense flipped the entire tie. At that point, it was clear this team wasn’t running on tactics alone. Something else was carrying them.

        Then came Manchester City. Peak Guardiola football. Control, possession, dominance. Madrid barely touched the ball. City were better, faster, sharper—and with minutes left at the Bernabéu, it was over. Literally over. The win probability was around 1%. One. Percent. Any normal team dies there. Real Madrid? They laughed at the numbers.

        Rodrygo scored. Then scored again. Ninety seconds. Absolute chaos. City froze, Madrid smelled blood, and the stadium turned into madness. Extra time came, Benzema buried the penalty, and just like that, one of the best teams in Europe was mentally destroyed. It wasn’t skill anymore—it was aura. Pure Champions League heritage doing its thing.

        The final against Liverpool felt almost calm in comparison. Madrid suffered, yes, but they were comfortable in suffering. Courtois turned into a wall, Valverde ran himself into the ground, and Vinícius finished the job. One goal. That’s all Madrid needed. Because when you’ve survived hell, finals don’t scare you.

        This Champions League wasn’t won with dominance. It was won with refusal. Refusal to accept defeat, refusal to follow logic, refusal to die quietly. Real Madrid didn’t have the best squad, the best stats, or the best odds. What they had was belief—and in this competition, belief beats everything.

        2022 wasn’t just another Champions League. It was proof that as long as there’s time on the clock, Real Madrid are never finished. Even at 1%. Especially at 1%.`,
        image: "./foto/rm.webp"
    },
    {
        id: 4,
        title: "Why European Countries Look So Different",
        category: "Thoughts",
        mood: "Opinion",
        date: "30 Nov 2025",
        readTime: "5 min",
        excerpt: "To people from the tropics, European countries often look unreal—softer light, quieter streets...",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.
        
        People from tropical countries often feel something strange when looking at photos of Europe. It’s not just “nice” or “beautiful”—it feels different. Almost unreal. Calm streets, soft colours, quiet skies. And no, it’s not just because Europe is richer. There’s more going on, and it messes with our perception more than we realise.

        First, it’s the climate. Tropical life is loud—bright sun, harsh shadows, intense colours, constant heat. Europe, especially in autumn and winter, looks softer. Muted tones, grey skies, longer shadows. To our eyes, used to high contrast and strong light, Europe feels cinematic. Like a movie still rather than real life.

        Then there’s architecture and space. European cities are old. Really old. Streets weren’t built for speed, but for walking, living, and time. Stone buildings, narrow roads, uneven layouts—it all screams history. For people raised around modern concrete blocks and rapid development, that kind of age feels foreign, almost romantic.

        Another reason is how “quiet” Europe looks in photos. Fewer signs, fewer cables, less visual chaos. Tropical cities are alive but messy—crowded signs, tangled wires, movement everywhere. Europe, in comparison, looks clean and organised, even when it’s not. Our brains read that as “peaceful”, even if reality says otherwise.

        There’s also media bias, let’s be honest. We mostly see Europe through curated photos: golden-hour streets, old towns, snow, cafés, and empty roads. We don’t see the boring suburbs, the rain, the grind. Just like people abroad don’t see our real daily chaos either. It’s selective beauty, and it works.

        So when people from tropical countries look at Europe, we’re not just seeing a place—we’re seeing contrast. Different light, different rhythm, different history. It feels distant because it is distant, not just geographically, but visually and emotionally.

        Europe isn’t a dreamland. The tropics aren’t chaos. They’re just different worlds, and difference is powerful. That’s why one photo can hit harder than expected.`,
        image: "./foto/eu.webp"
    }
];

/**
 * --------------------------------------------------------------------------
 * ANIMATION ENGINE
 * --------------------------------------------------------------------------
 */
let revealObserver;

const initRevealObserver = () => {
    if (revealObserver) return; 

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'blur-[6px]', 'translate-y-4');
                entry.target.classList.add('opacity-100', 'blur-0', 'translate-y-0');
                revealObserver.unobserve(entry.target); 
            }
        });
    }, { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
};

const attachRevealObservers = () => {
    if (!revealObserver) initRevealObserver();
    setTimeout(() => {
        const elements = document.querySelectorAll('.reveal-node');
        if (elements.length > 0) {
            elements.forEach(el => revealObserver.observe(el));
        }
    }, 100);
};

const REVEAL_CLASS = "opacity-0 blur-[6px] translate-y-4 transition-all duration-[420ms] ease-out will-change-transform";

/**
 * --------------------------------------------------------------------------
 * CORE ARCHITECTURE
 * --------------------------------------------------------------------------
 */
const getSafeHash = () => { try { return window.location.hash.slice(1); } catch (e) { return ''; } };
const parseRoute = (hash) => { const parts = hash.split('/'); return { page: parts[0] || 'home', id: parts[1] || null }; };

class Store {
    constructor() {
        const initialRoute = parseRoute(getSafeHash());
        this.state = {
            theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
            visitedTabs: new Set(['home']),
            activeTab: initialRoute.page,
            route: initialRoute,
            searchTerm: '',
            filterCategory: 'All',
            showIntro: true,
            isScrolled: false,
            mobileMenuOpen: false,
            easterEggRevealed: false,
            activeModal: null,
            modalData: null
        };
        this.listeners = [];
        this.initTheme();
    }

    initTheme() {
        if (this.state.theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }

    setState(newState) { 
        const oldState = { ...this.state };
        this.state = { ...this.state, ...newState };
        this.notify(oldState); 
    }

    toggleTheme() {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({ theme: newTheme });
        localStorage.setItem('theme', newTheme);
        this.initTheme();
    }

    toggleMobileMenu() {
        const isOpen = !this.state.mobileMenuOpen;
        this.setState({ mobileMenuOpen: isOpen });
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    setModal(modalType, data = null) {
        this.setState({ activeModal: modalType, modalData: data });
        document.body.style.overflow = modalType ? 'hidden' : '';
    }

    triggerEasterEgg() {
        this.setState({ easterEggRevealed: !this.state.easterEggRevealed });
    }

    addVisitedTab(tab) {
        if (tab === 'blog-detail') return;
        const newSet = new Set(this.state.visitedTabs);
        newSet.add(tab);
        this.setState({ visitedTabs: newSet });
    }

    subscribe(listener) { 
        this.listeners.push(listener); 
        return () => { this.listeners = this.listeners.filter(l => l !== listener); }; 
    }

    notify(oldState) { 
        this.listeners.forEach(listener => listener(this.state, oldState)); 
    }
}

const appStore = new Store();
window.appStore = appStore;

window.navigateTo = (path) => {
    try { window.location.hash = path; } catch (e) { console.warn("Sandbox limitation"); }
    const { page, id } = parseRoute(path);
    
    if (appStore.state.mobileMenuOpen) {
        document.body.style.overflow = '';
    }

    appStore.setState({ 
        activeTab: page === 'blog' && id ? 'blog' : page, 
        route: { page, id },
        mobileMenuOpen: false 
    });
    appStore.addVisitedTab(page);
    window.scrollTo(0, 0); 
};

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== appStore.state.isScrolled) {
        appStore.setState({ isScrolled });
    }
});

window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch(e.key.toLowerCase()) {
        case 'h': navigateTo('home'); break;
        case 'p': navigateTo('projects'); break;
        case 'j': navigateTo('blog'); break;
        case 'g': navigateTo('gallery'); break;
        case 'a': navigateTo('about'); break;
        case 'c': navigateTo('contact'); break;
    }
});

/**
 * --------------------------------------------------------------------------
 * UI COMPONENTS
 * --------------------------------------------------------------------------
 */
const Icons = {
    home: `<i data-lucide="home" class="w-4 h-4"></i>`,
    projects: `<i data-lucide="grid" class="w-4 h-4"></i>`,
    blog: `<i data-lucide="book" class="w-4 h-4"></i>`,
    gallery: `<i data-lucide="image" class="w-4 h-4"></i>`,
    about: `<i data-lucide="user" class="w-4 h-4"></i>`,
    contact: `<i data-lucide="mail" class="w-4 h-4"></i>`
};

// --- MODAL COMPONENTS ---

const renderModal = (state) => {
    if (!state.activeModal) return '';

    let content = '';

    if (state.activeModal === 'photo_stack') {
        content = `
            <div class="space-y-6">
                <h3 class="text-2xl font-bold text-stone-900 dark:text-white">Snapshots</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${ABOUT_STACK_DATA.map(src => `
                        <div class="rounded-2xl overflow-hidden shadow-sm">
                             <img src="${src}" class="w-full h-auto object-cover" alt="Snapshot">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (state.activeModal === 'bio_stack') {
        content = `
            <div class="space-y-6">
                <h3 class="text-2xl font-bold text-stone-900 dark:text-white">The "Why"</h3>
                <div class="prose prose-stone dark:prose-invert">
                    <p>My journey isn't about being the smartest person in the room. It's about being the most curious.</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>Curiosity:</strong> I break things just to see how to fix them.</li>
                        <li><strong>Discipline:</strong> Whether it's coding or gym, consistency wins.</li>
                        <li><strong>Balance:</strong> Code needs Logic, Life needs Rhythm.</li>
                    </ul>
                    <p class="mt-4">Currently focused on:</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span class="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-bold">Graduating High School</span>
                        <span class="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-bold">Rust Lang</span>
                        <span class="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-bold">System Architecture</span>
                    </div>
                </div>
            </div>
        `;
    } else if (state.activeModal === 'detail_popup' && state.modalData) {
        const data = state.modalData;
        content = `
            <div class="space-y-6">
                <div class="border-b border-stone-200 dark:border-stone-800 pb-4">
                    <h3 class="text-2xl font-bold text-stone-900 dark:text-white">${data.title}</h3>
                    <p class="text-stone-600 dark:text-stone-400 mt-2 text-sm leading-relaxed">${data.intro}</p>
                </div>
                <ul class="space-y-3">
                    ${data.points.map(point => `
                        <li class="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300">
                            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                            <span>${point}</span>
                        </li>
                    `).join('')}
                </ul>
                <div class="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800 text-center">
                    <p class="text-xs font-medium text-accent-600 dark:text-accent-400 uppercase tracking-widest">"${data.footer}"</p>
                </div>
            </div>
        `;
    } else if (state.activeModal === 'gallery_detail' && state.modalData) {
        // [NEW] Gallery Detail Modal
        const item = state.modalData;
        const isVideo = item.type === 'video';
        
        content = `
            <div class="space-y-6">
                <div class="rounded-2xl overflow-hidden shadow-md bg-stone-100 dark:bg-stone-800">
                    ${isVideo ? `
                        <video controls class="w-full h-auto max-h-[60vh] object-contain">
                            <source src="${item.videoSrc}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    ` : `
                        <img src="${item.src}" alt="${item.alt}" class="w-full h-auto max-h-[60vh] object-contain">
                    `}
                </div>
                <div>
                    <h3 class="text-xl font-bold text-stone-900 dark:text-white mb-2">${item.caption}</h3>
                    <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">${item.desc}</p>
                </div>
            </div>
        `;
    }

    return `
        <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-stone-900/80 backdrop-blur-md transition-opacity" onclick="appStore.setModal(null)"></div>
            <div class="relative w-full max-w-3xl bg-white dark:bg-stone-950 rounded-3xl shadow-2xl p-6 md:p-8 animate-fade-up max-h-[95vh] overflow-y-auto border border-stone-200 dark:border-stone-800">
                <button onclick="appStore.setModal(null)" class="absolute top-4 right-4 p-2 bg-stone-100 dark:bg-stone-800 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors z-10">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
                ${content}
            </div>
        </div>
    `;
};

// --- RENDERERS ---

const renderIntro = () => `
    <div class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950 text-white transition-opacity duration-500" id="intro-screen">
        <div class="space-y-6 text-center w-64">
            <h1 class="text-3xl font-bold tracking-tight animate-[fadeIn_0.4s_ease-out]">Rahmad Sains</h1>
            <div class="h-[3px] w-full bg-stone-800 rounded-full overflow-hidden">
                <div class="h-full bg-[#ff8c42] w-0 animate-[fillProgress_1.5s_ease-in-out_forwards]"></div>
            </div>
        </div>
        <style>
            @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
            @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

        </style>
    </div>
`;

const getNavbarHTML = (state) => {
    const navLinks = Object.keys(Icons).map(key => {
        const isActive = state.activeTab === key;
        return `
            <button onclick="navigateTo('${key}')" 
                aria-label="Navigate to ${key}"
                class="active:scale-95 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-accent-500 ${isActive ? 'text-accent-600 dark:text-accent-500 font-bold bg-stone-100 dark:bg-stone-800' : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800/50'}">
                ${Icons[key]} <span class="capitalize">${key}</span>
            </button>
        `;
    }).join('');
    
    const paddingClass = 'py-4'; 
    const bgClass = 'bg-stone-50/90 dark:bg-stone-950/90 shadow-sm backdrop-blur-md';

    return `
        <div class="w-full border-b border-stone-200 dark:border-stone-800 px-6 md:px-8 transition-all duration-300 ${paddingClass} ${bgClass}">
            <div class="w-full flex justify-between items-center relative">
                <div class="flex items-center gap-3 justify-start cursor-pointer group active:scale-95 transition-transform" onclick="navigateTo('home')">
                    <div class="w-9 h-9 overflow-hidden rounded-full border border-stone-200 dark:border-stone-800 group-hover:border-accent-500 transition-colors">
                        <div class="w-full h-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-700 dark:text-stone-300">RS</div> 
                    </div>
                    <span class="font-bold text-lg text-stone-900 dark:text-stone-100 tracking-tight">Rahmad<span class="text-stone-400">Sains</span></span>
                </div>
                <div class="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2">
                    <div class="flex items-center bg-white dark:bg-stone-900 px-1.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm gap-1">${navLinks}</div>
                </div>
                <div class="flex items-center justify-end gap-3">
                    <button onclick="appStore.toggleTheme()" class="active:scale-95 p-2 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-accent-300 dark:hover:border-accent-700 text-stone-500 dark:text-stone-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500"><i data-lucide="${state.theme === 'dark' ? 'sun' : 'moon'}" class="w-4 h-4"></i></button>
                    <button class="md:hidden active:scale-95 text-stone-600 dark:text-stone-300 p-2" onclick="appStore.toggleMobileMenu()"><i data-lucide="${state.mobileMenuOpen ? 'x' : 'menu'}" class="w-6 h-6"></i></button>
                </div>
            </div>
        </div>
    `;
};

const getMobileMenuHTML = (state) => {
    if (!state.mobileMenuOpen) return '';
    return `
        <div class="fixed inset-0 z-[999] bg-stone-50 dark:bg-stone-950 flex flex-col items-center justify-center animate-fade-in md:hidden touch-none" onclick="appStore.toggleMobileMenu()">
            <button class="absolute top-6 right-6 p-4 text-stone-600 dark:text-stone-300" onclick="event.stopPropagation(); appStore.toggleMobileMenu()"><i data-lucide="x" class="w-8 h-8"></i></button>
            <div class="flex flex-col gap-6 text-center" onclick="event.stopPropagation()">
                ${Object.keys(Icons).map(key => `<button onclick="navigateTo('${key}')" class="text-3xl font-bold text-stone-900 dark:text-white capitalize hover:text-accent-500 transition-colors">${key}</button>`).join('')}
            </div>
            <div class="mt-12 text-sm text-stone-500 font-medium">${SITE_CONFIG.status.label} <span class="ml-2 ${SITE_CONFIG.status.state === 'holiday' ? 'text-green-500' : 'text-red-500'}">●</span></div>
        </div>
    `;
};

const renderTechStack = () => `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        ${TECH_STACK_DATA.map(item => `
            <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-3 shadow-sm hover:border-accent-500/50 transition-colors cursor-pointer active:scale-95" 
                title="${item.fact || ''}"
                onclick="${item.popupId ? `appStore.setModal('detail_popup', POPUP_DATA.setup_and_gear['${item.popupId}'])` : ''}">
                <span class="block text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-1">${item.label}</span>
                <span class="block text-xs font-medium text-stone-800 dark:text-stone-200 truncate">${item.value}</span>
            </div>
        `).join('')}
    </div>
`;

const renderHome = (state) => `
    <div id="hero-section" class="max-w-4xl mx-auto space-y-20 py-20 px-6 md:px-8">
        <section class="flex flex-col gap-6 text-center items-center z-10 relative ${REVEAL_CLASS} reveal-node">
            <div onclick="appStore.triggerEasterEgg()" class="cursor-pointer group select-none">
                <h1 class="text-5xl md:text-7xl font-bold leading-tight text-stone-900 dark:text-stone-100 tracking-tight transition-transform group-active:scale-95">
                    Hi, I'm <span class="text-accent-600 dark:text-accent-500 relative inline-block">Rahmad Sains <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent-200 dark:text-accent-800 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" /></svg></span>.
                </h1>
                <p class="h-6 text-sm font-medium text-accent-600 dark:text-accent-400 mt-2 transition-opacity duration-300 ${state.easterEggRevealed ? 'opacity-100' : 'opacity-0'}">"${SITE_CONFIG.quote}"</p>
            </div>
            <p class="text-lg md:text-xl text-stone-600 dark:text-stone-300 font-medium italic font-serif">"I write and build to understand, not to impress."</p>
            <p class="text-base text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed font-light">A Grade 12 student figuring things out on the web, one <code class="bg-stone-200 dark:bg-stone-800 px-1 py-0.5 rounded text-sm font-mono text-stone-700 dark:text-stone-300">&lt;div&gt;</code> at a time.</p>
            <div class="flex flex-wrap gap-4 mt-6 justify-center">
                <button onclick="navigateTo('projects')" class="active:scale-95 touch-target px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold rounded-full hover:bg-accent-600 dark:hover:bg-accent-500 hover:text-white dark:hover:text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-1">See My Work</button>
                <a href="https://instagram.com/${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="active:scale-95 touch-target px-6 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-bold rounded-full hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">Say Hello</a>
            </div>
        </section>
        
        <section class="${REVEAL_CLASS} reveal-node" style="transition-delay: 120ms">
            <div class="mb-12 p-6 border border-stone-200 dark:border-stone-800 rounded-2xl bg-stone-100/50 dark:bg-stone-900/50 text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                <div class="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-xl text-accent-600 dark:text-accent-400"><i data-lucide="zap" class="w-6 h-6"></i></div>
                <div><h3 class="text-sm font-bold text-stone-900 dark:text-white mb-1">Currently Experimenting With</h3><p class="text-sm text-stone-600 dark:text-stone-400">Trying to build a custom mechanical keyboard firmware using Rust. It's... challenging.</p></div>
            </div>
            <div class="mb-16"><div class="flex items-center justify-center gap-4 mb-6"><div class="h-px bg-stone-200 dark:bg-stone-800 flex-1"></div><h2 class="text-xs font-bold text-stone-400 uppercase tracking-widest">Setup & Gear</h2><div class="h-px bg-stone-200 dark:bg-stone-800 flex-1"></div></div>${renderTechStack()}</div>
            <div class="flex flex-col items-center mb-8"><h2 class="text-xs font-bold text-stone-400 uppercase tracking-widest text-center mb-2">Obsessions & Interests</h2><div class="w-8 h-0.5 bg-accent-500 rounded-full mb-8"></div></div>
            <div class="flex flex-wrap justify-center gap-4">
                ${INTERESTS_DATA.map(item => `
                    <div title="${item.fact || ''}" class="hover-rotate-random flex items-center gap-2 px-5 py-3 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm hover:border-accent-400 hover:shadow-md transition-all cursor-pointer" 
                         style="--rotation: ${item.rotation}"
                         onclick="${item.popupId ? `appStore.setModal('detail_popup', POPUP_DATA.obsessions_and_interests['${item.popupId}'])` : ''}">
                        <i data-lucide="${item.icon}" class="w-5 h-5 text-stone-400"></i>
                        <div><span class="block text-sm font-bold text-stone-800 dark:text-stone-200">${item.label}</span><span class="block text-[10px] text-stone-500 uppercase tracking-wider">${item.desc}</span></div>
                    </div>
                `).join('')}
            </div>
        </section>
    </div>
`;

const renderProjects = () => `
    <div class="max-w-5xl mx-auto py-12 px-6 md:px-8">
        <div class="mb-12 text-left ${REVEAL_CLASS} reveal-node">
            <h2 class="text-3xl font-bold mb-3 text-stone-900 dark:text-stone-100">Projects</h2>
            <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-4"></div>
            <p class="text-stone-500 dark:text-stone-400">Code I wrote instead of studying for exams.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${PROJECTS_DATA.map((project, idx) => `
                <div class="bg-white dark:bg-stone-900 rounded-3xl p-7 border border-stone-200 dark:border-stone-800 hover:border-accent-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 group flex flex-col h-full relative overflow-hidden ${REVEAL_CLASS} reveal-node" style="transition-delay: ${idx * 100}ms">
                    <div class="h-48 overflow-hidden rounded-xl mb-6 bg-stone-100 dark:bg-stone-800 relative">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" loading="lazy">
                        <div class="absolute top-3 right-3 px-3 py-1 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold rounded-full uppercase tracking-wider">${project.status}</div>
                    </div>
                    <div class="flex justify-between items-start mb-4"><span class="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-[10px] uppercase font-bold text-stone-500 tracking-wider text-accent-600 dark:text-accent-400">${project.category}</span></div>
                    <h3 class="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-accent-600 transition-colors">${project.title}</h3>
                    <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">${project.desc}</p>
                    <div class="mt-auto mb-6 p-3 bg-stone-50 dark:bg-stone-950/50 rounded-xl border border-stone-100 dark:border-stone-800/50"><p class="text-xs text-stone-500 dark:text-stone-400"><strong class="text-stone-700 dark:text-stone-300">Learning:</strong> ${project.learning}</p></div>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="active:scale-95 touch-target mt-2 w-full py-3 bg-stone-100 dark:bg-stone-800 rounded-xl text-stone-900 dark:text-white text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-accent-500 group-hover:text-white transition-all">Visit Site <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
                </div>
            `).join('')}
        </div>
    </div>
`;

// [UPDATED] Gallery Page: Image or Video
const renderGallery = () => `
    <div class="max-w-5xl mx-auto py-12 px-6 md:px-8">
        <div class="mb-12 text-left ${REVEAL_CLASS} reveal-node">
            <h2 class="text-3xl font-bold mb-3 text-stone-900 dark:text-stone-100">${GALLERY_DATA.title}</h2>
            <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-4"></div>
            <p class="text-stone-500 dark:text-stone-400">${GALLERY_DATA.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${GALLERY_DATA.items.map((item, idx) => `
                 <div class="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${REVEAL_CLASS} reveal-node group" 
                      style="transition-delay: ${idx * 100}ms"
                      onclick="appStore.setModal('gallery_detail', { ...GALLERY_DATA.items[${idx}] })">
                    <div class="relative w-full h-64 overflow-hidden bg-stone-200 dark:bg-stone-800">
                        ${item.type === 'video' 
                            ? `<div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"><div class="bg-black/50 rounded-full p-3 backdrop-blur-sm"><i data-lucide="play" class="w-6 h-6 text-white fill-white"></i></div></div><img src="${item.src}" alt="${item.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`
                            : `<img src="${item.src}" alt="${item.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">`
                        }
                    </div>
                    <div class="p-4">
                        <p class="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">${item.caption}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

const renderAbout = () => `
    <div class="max-w-3xl mx-auto space-y-16 py-12 px-6 md:px-8">
        <div class="flex flex-col md:flex-row gap-12 items-center ${REVEAL_CLASS} reveal-node">
            
            <!-- 1. PHOTO STACK (Using Separate ABOUT_STACK_DATA) -->
            <div class="relative w-48 h-64 flex-shrink-0 group cursor-pointer perspective-1000" onclick="appStore.setModal('photo_stack')">
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 font-medium uppercase tracking-widest opacity-100 transition-opacity whitespace-nowrap">Click to view</div>
                <!-- Stacked Images -->
                <div class="relative w-full h-full rounded-2xl shadow-xl border-4 border-white dark:border-stone-800 bg-stone-100 z-20 transition-transform group-hover:-translate-y-2">
                    <img src="${ABOUT_STACK_DATA[0]}" class="w-full h-full object-cover">
                </div>
            </div>
            
            <div class="prose prose-stone dark:prose-invert prose-lg text-left flex flex-col items-start">
                <h2 class="text-3xl font-bold text-stone-900 dark:text-white mb-4">I'm Rahmad Sains.</h2>
                <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-6"></div>
                <p class="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">I am Rahmad Sains, a 12th-grade high school student based in Palembang with a strong and growing interest in computer technology, motorsports, and football. I am particularly drawn to behind-the-scenes processes and analytical perspectives that offer deeper insight beyond what is typically seen on the surface.</p>
                
                <!-- 2. INFO STACK -->
                <div class="mt-6 relative group cursor-pointer" onclick="appStore.setModal('bio_stack')">
                    <div class="absolute inset-0 bg-accent-100 dark:bg-accent-900/30 rounded-xl rotate-3 transition-transform group-hover:rotate-6"></div>
                    <div class="absolute inset-0 bg-stone-100 dark:bg-stone-800 rounded-xl -rotate-2 transition-transform group-hover:-rotate-4"></div>
                    <div class="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 rounded-xl shadow-sm flex items-center gap-3 transition-transform group-hover:-translate-y-1">
                        <div class="p-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-stone-600 dark:text-stone-300"><i data-lucide="sparkles" class="w-5 h-5"></i></div>
                        <div>
                            <p class="text-xs text-stone-400 font-bold uppercase tracking-wider">The Philosophy</p>
                            <p class="text-sm font-bold text-stone-900 dark:text-white">Why I do what I do</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="border-t border-stone-200 dark:border-stone-800 pt-8 ${REVEAL_CLASS} reveal-node">
            <h3 class="text-sm font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-6 text-left">People I Look Up To</h3>
            <div class="grid gap-4">
                ${IDOLS_DATA.map(idol => `
                    <a href="${idol.link}" target="_blank" rel="noopener noreferrer" class="active:scale-95 touch-target flex items-center justify-between p-4 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-accent-500/50 transition-colors group">
                        <div class="flex items-center gap-4"><span class="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">${idol.icon}</span><div><h4 class="font-bold text-stone-900 dark:text-white group-hover:text-accent-600 transition-colors">${idol.name}</h4><p class="text-xs text-stone-500">${idol.role}</p></div></div>
                        <i data-lucide="external-link" class="w-4 h-4 text-stone-300 group-hover:text-accent-500"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    </div>
`;

const renderBlog = (state) => {
    const categories = ['All', 'Tech', 'Motorsports', 'Football', 'Coffee', 'Thoughts'];
    const filteredPosts = BLOG_DATA.filter(post => {
        const matchesCategory = state.filterCategory === 'All' || post.category === state.filterCategory;
        const matchesSearch = post.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return `
        <div class="max-w-3xl mx-auto py-12 px-6 md:px-8">
            <div class="mb-10 text-left ${REVEAL_CLASS} reveal-node">
                <h2 class="text-3xl font-bold mb-2 text-stone-900 dark:text-white">Journal</h2>
                <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-4"></div>
                <p class="text-xl text-stone-600 dark:text-stone-300 font-serif italic mb-2">"This is where I think out loud."</p>
                <div class="mt-8 space-y-4">
                    <input type="text" placeholder="Search..." id="search-input" value="${state.searchTerm}" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-shadow text-sm dark:text-white">
                    <div class="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        ${categories.map(cat => `<button data-cat="${cat}" class="category-btn active:scale-95 touch-target px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap border ${state.filterCategory === cat ? 'bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 border-transparent' : 'border-stone-200 dark:border-stone-800 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800'}">${cat}</button>`).join('')}
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                ${filteredPosts.length > 0 ? filteredPosts.map((post, idx) => `
                    <div onclick="navigateTo('blog/${post.id}')" class="group block p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-accent-500/50 cursor-pointer transition-all ${post.pinned ? 'ring-1 ring-accent-200 dark:ring-accent-900 bg-accent-50/50 dark:bg-accent-900/10' : ''} ${REVEAL_CLASS} reveal-node active:scale-[0.98]" style="transition-delay: ${idx * 100}ms">
                        ${post.pinned ? '<div class="flex items-center gap-1 text-[10px] font-bold text-accent-600 mb-2"><i data-lucide="pin" class="w-3 h-3"></i> START HERE</div>' : ''}
                        <div class="flex items-center gap-3 mb-3"><span class="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">${post.mood}</span><span class="text-[10px] text-stone-400">•</span><span class="text-[10px] text-stone-400">${post.readTime} read</span></div>
                        <h3 class="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-accent-600 transition-colors">${post.title}</h3>
                        <p class="text-stone-500 dark:text-stone-400 text-sm line-clamp-2 leading-relaxed">${post.excerpt}</p>
                    </div>
                `).join('') : '<div class="text-center py-12 text-stone-400"><p>Nothing found.</p></div>'}
            </div>
        </div>
    `;
};

const renderBlogDetail = (id) => {
    const post = BLOG_DATA.find(p => p.id === parseInt(id));
    if (!post) { setTimeout(() => navigateTo('blog'), 0); return ''; }
    return `
        <article class="max-w-2xl mx-auto py-12 px-6 md:px-8 animate-fade-up">
            <button onclick="navigateTo('blog')" class="active:scale-95 touch-target flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 mb-8 transition-colors"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</button>
            <header class="mb-8 text-left">
                <div class="w-full h-64 md:h-80 overflow-hidden rounded-3xl mb-8 bg-stone-100 dark:bg-stone-800">
                    <img src="${post.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex gap-2 mb-4"><span class="px-2 py-1 bg-accent-50 dark:bg-stone-800 text-accent-700 dark:text-accent-400 rounded text-xs font-bold uppercase tracking-wider">${post.category}</span><span class="px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-xs font-medium text-stone-500">${post.mood}</span></div>
                <h1 class="text-3xl md:text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100 leading-tight">${post.title}</h1>
                <div class="flex items-center gap-3 text-sm text-stone-500"><span>${post.date}</span><span>•</span><span>${post.readTime} read</span></div>
            </header>
            <div class="prose prose-stone dark:prose-invert prose-lg text-left"><div class="whitespace-pre-line text-stone-700 dark:text-stone-300 leading-relaxed">${post.content}</div></div>
            <div class="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex items-center gap-3"><div class="w-10 h-10 bg-stone-200 dark:bg-stone-800 rounded-full flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">RS</div><div><p class="text-sm font-bold text-stone-900 dark:text-white">Written by Rahmad Sains</p><p class="text-xs text-stone-500">Student & Learner</p></div></div>
        </article>
    `;
};

const renderContact = () => `
    <div class="max-w-2xl mx-auto py-12 px-6 md:px-8 ${REVEAL_CLASS} reveal-node text-left">
        <div class="mb-10"><h2 class="text-3xl font-bold mb-4 text-stone-900 dark:text-white">Get In Touch</h2><p class="text-stone-500 dark:text-stone-400">Want to discuss F1 strategies or code bugs? Drop a message.</p></div>
        <div class="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <a href="mailto:${SITE_CONFIG.social.email}" class="block mb-8"><div class="w-16 h-16 bg-accent-50 dark:bg-stone-800 rounded-2xl flex items-center justify-center text-accent-600 mb-4"><i data-lucide="mail" class="w-8 h-8"></i></div><p class="text-lg font-bold text-stone-900 dark:text-white hover:underline">${SITE_CONFIG.social.email}</p><p class="text-sm text-stone-500">Email Me</p></a>
            <div class="flex justify-start gap-4"><a href="https://instagram.com/${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="active:scale-95 touch-target flex items-center gap-2 px-5 py-2.5 bg-stone-50 dark:bg-stone-800 rounded-full text-sm font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"><i data-lucide="instagram" class="w-4 h-4"></i> Instagram</a></div>
        </div>
    </div>
`;

const renderFooter = () => `
    <div class="w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div class="text-left max-w-sm">
                <h2 class="text-xl font-bold text-stone-900 dark:text-white tracking-tight">Rahmad<span class="text-stone-400">Sains</span></h2>
                <p class="text-sm md:text-base font-medium text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">Built slowly between homework, coffee, and late nights.</p>
                <p class="text-[10px] text-stone-400 mt-2 opacity-60">* Please don’t copy without context.</p>
            </div>
            <div class="flex flex-col items-end gap-6">
                <div class="flex gap-6 text-base font-medium text-stone-600 dark:text-stone-400">
                    <a onclick="navigateTo('home')" class="active:scale-95 touch-target cursor-pointer hover:text-accent-600 transition-colors">Home</a>
                    <span class="text-stone-300 dark:text-stone-700 flex items-center">·</span>
                    <a onclick="navigateTo('projects')" class="active:scale-95 touch-target cursor-pointer hover:text-accent-600 transition-colors">Projects</a>
                    <span class="text-stone-300 dark:text-stone-700 flex items-center">·</span>
                    <a onclick="navigateTo('blog')" class="active:scale-95 touch-target cursor-pointer hover:text-accent-600 transition-colors">Journal</a>
                </div>
                <a href="https://instagram.com/${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" 
                   class="active:scale-95 flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full font-bold text-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all">
                    <i data-lucide="instagram" class="w-4 h-4"></i>
                    <span>Let's talk with me</span>
                </a>
            </div>
        </div>
    </div>
`;

/**
 * --------------------------------------------------------------------------
 * APP BOOTSTRAP (REFACTORED ARCHITECTURE)
 * --------------------------------------------------------------------------
 */

const renderNavbar = (state, mounts) => {
    mounts.navbar.innerHTML = getNavbarHTML(state);
}

const renderMain = (state, mounts) => {
    const { page, id } = state.route;
    let mainHTML = '';
    switch(page) {
        case 'home': mainHTML = renderHome(state); break;
        case 'projects': mainHTML = renderProjects(); break;
        case 'about': mainHTML = renderAbout(); break;
        case 'blog': mainHTML = id ? renderBlogDetail(id) : renderBlog(state); break;
        case 'gallery': mainHTML = renderGallery(); break; // Added Gallery Route
        case 'contact': mainHTML = renderContact(); break;
        default: mainHTML = renderHome(state);
    }
    mounts.main.innerHTML = mainHTML;
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => appStore.setState({ searchTerm: e.target.value }));
        if (state.searchTerm) {
            searchInput.focus();
            const val = searchInput.value; searchInput.value = ''; searchInput.value = val;
        }
    }
    const catBtns = document.querySelectorAll('.category-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => appStore.setState({ filterCategory: btn.dataset.cat }));
    });

    attachRevealObservers();
}

const handleIntroScreen = (state, mounts) => {
    if (state.showIntro) {
        if (!document.getElementById('intro-screen')) {
            const introDiv = document.createElement('div');
            introDiv.innerHTML = renderIntro();
            mounts.app.appendChild(introDiv.firstElementChild);
            
            setTimeout(() => {
                const introEl = document.getElementById('intro-screen');
                if (introEl) {
                    introEl.style.opacity = '0';
                    setTimeout(() => {
                        introEl.remove();
                        appStore.setState({ showIntro: false });
                    }, 500); 
                }
            }, 1800);
        }
    }
}

const renderApp = (state, oldState) => {
    const mounts = {
        navbar: document.getElementById('navbar-mount'),
        main: document.getElementById('main-mount'),
        footer: document.getElementById('footer-mount'),
        app: document.getElementById('app')
    };
    
    if (!mounts.navbar || !mounts.main || !mounts.footer || !mounts.app) {
        setTimeout(() => renderApp(state, oldState), 10);
        return;
    }

    handleIntroScreen(state, mounts);

    let modalLayer = document.getElementById('modal-layer');
    if (!modalLayer) {
        modalLayer = document.createElement('div');
        modalLayer.id = 'modal-layer';
        document.body.appendChild(modalLayer);
    }
    if (!oldState || state.activeModal !== oldState.activeModal) {
         modalLayer.innerHTML = renderModal(state);
         if (state.activeModal) lucide.createIcons();
    }

    if (!oldState || state.activeTab !== oldState.activeTab || state.isScrolled !== oldState.isScrolled || state.theme !== oldState.theme || state.mobileMenuOpen !== oldState.mobileMenuOpen) {
        renderNavbar(state, mounts);
    }

    if (!oldState || state.activeTab !== oldState.activeTab || state.route.id !== oldState.route.id || state.filterCategory !== oldState.filterCategory || state.searchTerm !== oldState.searchTerm || state.easterEggRevealed !== oldState.easterEggRevealed) {
        renderMain(state, mounts);
    }

    if (!oldState) {
        mounts.footer.innerHTML = renderFooter();
    }

    const loader = document.getElementById('initial-loader');
    if (loader && !state.isLoading && !state.showIntro) loader.remove();

    if (!state.mobileMenuOpen) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => lucide.createIcons());
        } else {
            lucide.createIcons();
        }
    } else {
        lucide.createIcons();
    }
    
    const mobileMenuMount = document.getElementById('mobile-menu-container');
    if (state.mobileMenuOpen) {
        if (!mobileMenuMount) {
            const div = document.createElement('div');
            div.id = 'mobile-menu-container';
            div.innerHTML = getMobileMenuHTML(state);
            document.body.appendChild(div);
            lucide.createIcons();
        }
    } else {
        if (mobileMenuMount) mobileMenuMount.remove();
    }
};

appStore.subscribe(renderApp);
window.addEventListener('hashchange', () => {
    const { page, id } = parseRoute(getSafeHash());
    appStore.setState({ activeTab: page === 'blog' && id ? 'blog' : page, route: { page, id }, mobileMenuOpen: false });
    appStore.addVisitedTab(page);
});

setTimeout(() => { appStore.setState({ isLoading: false }); }, 100);

renderApp(appStore.state);