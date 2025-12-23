/**
 * --------------------------------------------------------------------------
 * DATA LAYER (Updated per dd.json)
 * --------------------------------------------------------------------------
 */
const SITE_CONFIG = {
    name: "Rahmad Sains",
    role: "Student",
    status: {
        label: "School Holiday",
        state: "holiday", // 'holiday' (green) or 'active' (red)
        note: "Manually updated by Rahmad"
    },
    social: {
        email: "rsainsalhafidz@gmail.com",
        instagram: "rahmdsai"
    }
};

const INTERESTS_DATA = [
    { id: "motorsports", label: "Motorsports", icon: "flag", desc: "F1 & Racing Culture", rotation: "-2deg" },
    { id: "sports", label: "Sports", icon: "activity", desc: "Football & Basketball", rotation: "2deg" },
    { id: "coding", label: "Coding", icon: "terminal", desc: "Learning by Building", rotation: "-1deg" },
    { id: "tech", label: "Technology", icon: "cpu", desc: "Modern Gadgets", rotation: "3deg" },
    { id: "coffee", label: "Coffee", icon: "coffee", desc: "Fuel for Thought", rotation: "-3deg" }
];

const IDOLS_DATA = [
    { name: "Cristiano Ronaldo", role: "Al Nassr", icon: "⚽", link: "https://www.transfermarkt.com/cristiano-ronaldo/profil/spieler/8198" },
    { name: "Max Verstappen", role: "Red Bull Racing", icon: "🏎️", link: "https://www.formula1.com/en/drivers/max-verstappen.html" },
    { name: "Carlos Sainz", role: "Williams", icon: "🏎️", note: "Name similarity!", link: "https://www.formula1.com/en/drivers/carlos-sainz.html" }
];

const PROJECTS_DATA = [
    {
        id: 1,
        title: "School Info Portal",
        category: "Technology",
        status: "Completed",
        desc: "A simple information board for my class schedule and assignments.",
        learning: "Understanding CRUD operations and Firebase basics.",
        link: "#"
    },
    {
        id: 2,
        title: "F1 Race Tracker",
        category: "Motorsports",
        status: "In Progress",
        desc: "Tracking race calendars and driver standings using public APIs.",
        learning: "Fetching complex JSON data and handling API rate limits.",
        link: "#"
    },
    {
        id: 3,
        title: "Palembang Guide",
        category: "Technology",
        status: "Completed",
        desc: "A curated list of best coffee spots and hidden gems in my city.",
        learning: "Responsive grid layouts and image optimization.",
        link: "#"
    },
    {
        id: 4,
        title: "Personal Wiki",
        category: "Coding",
        status: "Archived",
        desc: "Collection of snippets and notes from my learning journey.",
        learning: "Markdown parsing and static site generation concepts.",
        link: "#"
    }
];

const BLOG_DATA = [
    {
        id: 1,
        title: "Why I Idolise Max Verstappen?",
        category: "Motorsports",
        mood: "Analysis",
        date: "23 Dec 2024",
        readTime: "4 min",
        pinned: true, 
        excerpt: "It's not just about the speed. It's about the relentless mentality to be P1 every single session.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.

        Max Verstappen is a force of nature. Watching him drive gives me a sense of what absolute focus looks like. As a student, I try to apply this 'push to the limit' mentality to my exams and my code.
        
        It's about finding the gap that exists, not just in racing, but in problem-solving.`
    },
    {
        id: 2,
        title: "Balancing School and Code",
        category: "Coding",
        mood: "Reflection",
        date: "10 Dec 2024",
        readTime: "3 min",
        excerpt: "Chemical equations in the morning, React components at night. The chaotic life of a Grade 12 student.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.

        School is demanding. Grade 12 is no joke. But coding is my escape. It's the one place where if something breaks, I know there's a logical reason for it (usually).`
    },
    {
        id: 3,
        title: "Real Madrid 2012: The Perfect Counter",
        category: "Football",
        mood: "Opinion",
        date: "05 Nov 2024",
        readTime: "5 min",
        excerpt: "Mourinho's Madrid was efficient, direct, and ruthless. A tactical analysis from a fan's perspective.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.

        I love efficient systems. Whether it's a well-optimized function or a 10-second counter-attack goal.`
    },
    {
        id: 4,
        title: "My Coffee Routine",
        category: "Coffee & Thoughts",
        mood: "Chill",
        date: "01 Nov 2024",
        readTime: "2 min",
        excerpt: "Why I switched to manual brew and how it helps me think clearly before starting homework.",
        content: `Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.`
    }
];

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
            isLoading: true,
            isScrolled: false,
            mobileMenuOpen: false
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
        this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
    }
    addVisitedTab(tab) {
        if (tab === 'blog-detail') return;
        const newSet = new Set(this.state.visitedTabs);
        newSet.add(tab);
        this.setState({ visitedTabs: newSet });
    }
    subscribe(listener) { this.listeners.push(listener); return () => { this.listeners = this.listeners.filter(l => l !== listener); }; }
    notify(oldState) { this.listeners.forEach(listener => listener(this.state, oldState)); }
}

const appStore = new Store();
const navigateTo = (path) => {
    try { window.location.hash = path; } catch (e) { console.warn("Sandbox limitation"); }
    const { page, id } = parseRoute(path);
    appStore.setState({ 
        activeTab: page === 'blog' && id ? 'blog' : page, 
        route: { page, id },
        mobileMenuOpen: false // Close menu on navigate
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

/**
 * --------------------------------------------------------------------------
 * UI COMPONENTS
 * --------------------------------------------------------------------------
 */
const Icons = {
    home: `<i data-lucide="home" class="w-4 h-4"></i>`,
    projects: `<i data-lucide="grid" class="w-4 h-4"></i>`,
    blog: `<i data-lucide="book" class="w-4 h-4"></i>`,
    about: `<i data-lucide="user" class="w-4 h-4"></i>`,
    contact: `<i data-lucide="mail" class="w-4 h-4"></i>`
};

// Navbar
const getNavbarHTML = (state) => {
    const navLinks = Object.keys(Icons).map(key => {
        const isActive = state.activeTab === key;
        return `
            <button onclick="navigateTo('${key}')" 
                class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group 
                ${isActive ? 'text-accent-600 dark:text-accent-500 font-bold bg-stone-100 dark:bg-stone-800' : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800/50'}">
                ${Icons[key]}
                <span class="capitalize">${key}</span>
            </button>
        `;
    }).join('');

    const paddingClass = state.isScrolled ? 'py-3' : 'py-5'; 
    const bgClass = state.isScrolled ? 'bg-stone-50/95 dark:bg-stone-950/95 shadow-sm' : 'bg-transparent';

    return `
        <div class="w-full backdrop-blur-md border-b border-stone-200 dark:border-stone-800 px-6 md:px-8 transition-all duration-300 ${paddingClass} ${bgClass}">
            <div class="w-full flex justify-between items-center relative">
                <div class="flex items-center gap-3 justify-start cursor-pointer group touch-target" onclick="navigateTo('home')">
                    <div class="w-9 h-9 overflow-hidden rounded-full border border-stone-200 dark:border-stone-800 group-hover:border-accent-500 transition-colors">
                        <div class="w-full h-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-700 dark:text-stone-300">RS</div> 
                    </div>
                    <span class="font-bold text-lg text-stone-900 dark:text-stone-100 tracking-tight">Rahmad<span class="text-stone-400">Sains</span></span>
                </div>
                
                <div class="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2">
                    <div class="flex items-center bg-white dark:bg-stone-900 px-1.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm gap-1">
                        ${navLinks}
                    </div>
                </div>
                
                <div class="flex items-center justify-end gap-3">
                    <div class="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-stone-900 rounded-full border border-stone-200 dark:border-stone-800 cursor-help group relative shadow-sm">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full ${SITE_CONFIG.status.state === 'holiday' ? 'bg-green-400' : 'bg-red-400'} opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 ${SITE_CONFIG.status.state === 'holiday' ? 'bg-green-500' : 'bg-red-500'}"></span>
                        </span>
                        <div class="absolute top-full mt-2 right-0 bg-stone-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">${SITE_CONFIG.status.note}</div>
                    </div>
                    
                    <button onclick="appStore.toggleTheme()" class="touch-target p-2 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-accent-300 dark:hover:border-accent-700 text-stone-500 dark:text-stone-400 transition-all shadow-sm">
                        <i data-lucide="${state.theme === 'dark' ? 'sun' : 'moon'}" class="w-4 h-4"></i>
                    </button>
                    
                    <button class="md:hidden touch-target text-stone-600 dark:text-stone-300 p-2" onclick="appStore.toggleMobileMenu()">
                        <i data-lucide="${state.mobileMenuOpen ? 'x' : 'menu'}" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>

            ${state.mobileMenuOpen ? `
                <div class="absolute top-full right-4 mt-2 w-56 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl p-2 flex flex-col gap-1 z-50 animate-dropdown mobile-dropdown">
                    ${Object.keys(Icons).map(key => `
                        <button onclick="navigateTo('${key}')" 
                            class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 text-left transition-colors ${state.activeTab === key ? 'bg-stone-100 dark:bg-stone-800 text-accent-600 dark:text-accent-500 font-bold' : 'text-stone-600 dark:text-stone-300'}">
                            ${Icons[key]} 
                            <span class="capitalize text-sm">${key}</span>
                        </button>
                    `).join('')}
                    <div class="h-px bg-stone-200 dark:bg-stone-800 my-1"></div>
                    <div class="flex items-center gap-2 p-3 text-xs text-stone-400 font-medium">
                        <span class="w-2 h-2 rounded-full ${SITE_CONFIG.status.state === 'holiday' ? 'bg-green-500' : 'bg-red-500'}"></span>
                        ${SITE_CONFIG.status.label}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
};

const renderHome = () => `
    <div id="hero-section" class="max-w-4xl mx-auto space-y-20 py-20 animate-fade-up px-6 md:px-8">
        <section class="flex flex-col gap-6 text-center items-center z-10 relative">
            <h1 class="text-5xl md:text-7xl font-bold leading-tight text-stone-900 dark:text-stone-100 tracking-tight">
                Hi, I'm <span class="text-accent-600 dark:text-accent-500 relative inline-block">
                    Rahmad Sains
                    <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent-200 dark:text-accent-800 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" /></svg>
                </span>.
            </h1>
            <p class="text-lg md:text-xl text-stone-600 dark:text-stone-300 font-medium italic font-serif">"I write and build to understand, not to impress."</p>
            <p class="text-base text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed font-light">
                A Grade 12 student exploring the web, one <code class="bg-stone-200 dark:bg-stone-800 px-1 py-0.5 rounded text-sm font-mono text-stone-700 dark:text-stone-300">&lt;div&gt;</code> at a time.
                I build things to learn how they work.
            </p>
            <div class="flex flex-wrap gap-4 mt-6 justify-center">
                <button onclick="navigateTo('projects')" class="touch-target px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold rounded-full hover:bg-accent-600 dark:hover:bg-accent-500 hover:text-white dark:hover:text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-1">See My Work</button>
                <a href="https://instagram.com/${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="touch-target px-6 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-bold rounded-full hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">Say Hello</a>
            </div>
        </section>
        <section>
            <div class="flex flex-col items-center mb-8">
                <h2 class="text-xs font-bold text-stone-400 uppercase tracking-widest text-center mb-2">Obsessions & Interests</h2>
                <div class="w-8 h-0.5 bg-accent-500 rounded-full"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-4">
                ${INTERESTS_DATA.map(item => `
                    <div class="hover-rotate-random flex items-center gap-2 px-5 py-3 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm hover:border-accent-400 hover:shadow-md transition-all cursor-default" style="--rotation: ${item.rotation}">
                        <i data-lucide="${item.icon}" class="w-5 h-5 text-stone-400"></i>
                        <div>
                            <span class="block text-sm font-bold text-stone-800 dark:text-stone-200">${item.label}</span>
                            <span class="block text-[10px] text-stone-500 uppercase tracking-wider">${item.desc}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    </div>
`;

const renderProjects = () => `
    <div class="max-w-5xl mx-auto py-12 px-6 md:px-8 animate-fade-up">
        <div class="mb-12 text-left">
            <h2 class="text-3xl font-bold mb-3 text-stone-900 dark:text-stone-100">Projects</h2>
            <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-4"></div>
            <p class="text-stone-500 dark:text-stone-400">Code I wrote instead of studying for exams.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${PROJECTS_DATA.map(project => `
                <div class="bg-white dark:bg-stone-900 rounded-3xl p-7 border border-stone-200 dark:border-stone-800 hover:border-accent-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 group flex flex-col h-full relative overflow-hidden">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2.5 bg-stone-100 dark:bg-stone-800 rounded-xl text-stone-600 dark:text-stone-300"><i data-lucide="grid" class="w-6 h-6"></i></div>
                        <span class="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-[10px] uppercase font-bold text-stone-500 tracking-wider">${project.status}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-accent-600 transition-colors">${project.title}</h3>
                    <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">${project.desc}</p>
                    <div class="mt-auto mb-6 p-3 bg-stone-50 dark:bg-stone-950/50 rounded-xl border border-stone-100 dark:border-stone-800/50">
                        <p class="text-xs text-stone-500 dark:text-stone-400"><strong class="text-stone-700 dark:text-stone-300">Learning:</strong> ${project.learning}</p>
                    </div>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="touch-target mt-2 w-full py-3 bg-stone-100 dark:bg-stone-800 rounded-xl text-stone-900 dark:text-white text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-accent-500 group-hover:text-white transition-all">
                        Visit Site <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                    </a>
                </div>
            `).join('')}
        </div>
    </div>
`;

// [UPDATED] Render About with Stacked Photos & Reveal Effect
const renderAbout = () => `
    <div class="max-w-3xl mx-auto space-y-16 py-12 px-6 md:px-8 animate-fade-up">
        
        <!-- [NEW] Photo Stack Section -->
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="relative w-48 h-64 flex-shrink-0 group cursor-pointer perspective-1000" onclick="this.classList.toggle('reveal')">
                <!-- Helper text -->
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Tap to reveal</div>
                
                <!-- Bottom Photo (Rotated Right) -->
                <div class="absolute inset-0 w-full h-full rounded-2xl shadow-lg border-4 border-white dark:border-stone-800 bg-stone-200 overflow-hidden transform transition-all duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-12 group-[.reveal]:rotate-6 group-[.reveal]:translate-x-12 origin-bottom-right z-10">
                    <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400" alt="Rahmad Coding" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-[.reveal]:opacity-100">
                </div>
                
                <!-- Middle Photo (Rotated Left) -->
                <div class="absolute inset-0 w-full h-full rounded-2xl shadow-lg border-4 border-white dark:border-stone-800 bg-stone-300 overflow-hidden transform transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:-translate-x-12 group-[.reveal]:-rotate-6 group-[.reveal]:-translate-x-12 origin-bottom-left z-0">
                    <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" alt="Rahmad Gaming" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-[.reveal]:opacity-100">
                </div>
                
                <!-- Top Photo (Center) -->
                <div class="relative w-full h-full rounded-2xl shadow-xl border-4 border-white dark:border-stone-800 bg-stone-100 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-4 group-[.reveal]:-translate-y-4 z-20">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400" alt="Rahmad Portrait" class="w-full h-full object-cover">
                </div>
            </div>

            <div class="prose prose-stone dark:prose-invert prose-lg text-left">
                <h2 class="text-3xl font-bold text-stone-900 dark:text-white mb-4">Just a Student.</h2>
                <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-6"></div>
                <p class="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">I'm Rahmad. I don't have a fancy job title. I'm just a high school student who enjoys the logic behind code and the thrill of a good F1 race.</p>
                <p class="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">My goal right now is simple: Learn as much as I can, graduate, and maybe build something useful along the way.</p>
            </div>
        </div>

        <div class="border-t border-stone-200 dark:border-stone-800 pt-8">
            <h3 class="text-sm font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-6 text-left">People I Look Up To</h3>
            <div class="grid gap-4">
                ${IDOLS_DATA.map(idol => `
                    <a href="${idol.link}" target="_blank" rel="noopener noreferrer" class="touch-target flex items-center justify-between p-4 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-accent-500/50 transition-colors group">
                        <div class="flex items-center gap-4"><span class="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">${idol.icon}</span><div><h4 class="font-bold text-stone-900 dark:text-white group-hover:text-accent-600 transition-colors">${idol.name}</h4><p class="text-xs text-stone-500">${idol.role}</p></div></div>
                        <i data-lucide="external-link" class="w-4 h-4 text-stone-300 group-hover:text-accent-500"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    </div>
`;

const renderBlog = (state) => {
    const categories = ['All', 'Technology', 'Motorsports', 'Football', 'Coffee & Thoughts'];
    const filteredPosts = BLOG_DATA.filter(post => {
        const matchesCategory = state.filterCategory === 'All' || post.category === state.filterCategory;
        const matchesSearch = post.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return `
        <div class="max-w-3xl mx-auto py-12 px-6 md:px-8 animate-fade-up">
            <div class="mb-10 text-left">
                <h2 class="text-3xl font-bold mb-2 text-stone-900 dark:text-white">Journal</h2>
                <div class="w-10 h-0.5 bg-accent-500 rounded-full mb-4"></div>
                <p class="text-xl text-stone-600 dark:text-stone-300 font-serif italic mb-2">"This is where I think out loud."</p>
                <p class="text-stone-500 dark:text-stone-400 text-sm">Personal thoughts. No expert advice here.</p>
                <div class="mt-8 space-y-4">
                    <input type="text" placeholder="Search..." id="search-input" value="${state.searchTerm}" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-shadow text-sm dark:text-white">
                    <div class="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        ${categories.map(cat => `<button data-cat="${cat}" class="category-btn touch-target px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap border ${state.filterCategory === cat ? 'bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 border-transparent' : 'border-stone-200 dark:border-stone-800 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800'}">${cat}</button>`).join('')}
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                ${filteredPosts.length > 0 ? filteredPosts.map((post) => `
                    <div onclick="navigateTo('blog/${post.id}')" class="group block p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-accent-500/50 cursor-pointer transition-all ${post.pinned ? 'ring-1 ring-accent-200 dark:ring-accent-900 bg-accent-50/50 dark:bg-accent-900/10' : ''}">
                        ${post.pinned ? '<div class="flex items-center gap-1 text-[10px] font-bold text-accent-600 mb-2"><i data-lucide="pin" class="w-3 h-3"></i> START HERE</div>' : ''}
                        <div class="flex items-center gap-3 mb-3"><span class="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[10px] font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">${post.mood}</span><span class="text-[10px] text-stone-400">•</span><span class="text-[10px] text-stone-400">${post.readTime} read</span></div>
                        <h3 class="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-accent-600 transition-colors">${post.title}</h3>
                        <p class="text-stone-500 dark:text-stone-400 text-sm line-clamp-2 leading-relaxed">${post.excerpt}</p>
                    </div>
                `).join('') : '<div class="text-center py-12 text-stone-400"><p>Nothing found.</p></div>'}
            </div>
            <div class="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 text-center"><p class="text-xs text-stone-400 italic">Disclaimer: All articles reflect my personal thoughts, opinions, and learning journey.</p></div>
        </div>
    `;
};

const renderBlogDetail = (id) => {
    const post = BLOG_DATA.find(p => p.id === parseInt(id));
    if (!post) { setTimeout(() => navigateTo('blog'), 0); return ''; }
    return `
        <article class="max-w-2xl mx-auto py-12 px-6 md:px-8 animate-fade-up">
            <button onclick="navigateTo('blog')" class="touch-target flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 mb-8 transition-colors"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</button>
            <header class="mb-8 text-left">
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
    <div class="max-w-2xl mx-auto py-12 px-6 md:px-8 animate-fade-up text-left">
        <div class="mb-10"><h2 class="text-3xl font-bold mb-4 text-stone-900 dark:text-white">Get In Touch</h2><p class="text-stone-500 dark:text-stone-400">Want to discuss F1 strategies or code bugs? Drop a message.</p></div>
        <div class="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <a href="mailto:${SITE_CONFIG.social.email}" class="block mb-8"><div class="w-16 h-16 bg-accent-50 dark:bg-stone-800 rounded-2xl flex items-center justify-center text-accent-600 mb-4"><i data-lucide="mail" class="w-8 h-8"></i></div><p class="text-lg font-bold text-stone-900 dark:text-white hover:underline">${SITE_CONFIG.social.email}</p><p class="text-sm text-stone-500">Email Me</p></a>
            <div class="flex justify-start gap-4"><a href="https://instagram.com/${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" class="touch-target flex items-center gap-2 px-5 py-2.5 bg-stone-50 dark:bg-stone-800 rounded-full text-sm font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"><i data-lucide="instagram" class="w-4 h-4"></i> Instagram</a></div>
        </div>
    </div>
`;

// [UPDATED] Footer with "Let's Talk" Button
const renderFooter = () => `
    <div class="w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <!-- Left: Brand -->
            <div class="text-left max-w-sm">
                <h2 class="text-xl font-bold text-stone-900 dark:text-white tracking-tight">Rahmad<span class="text-stone-400">Sains</span></h2>
                <p class="text-sm md:text-base font-medium text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">Built slowly between homework, coffee, and late nights.</p>
                <p class="text-[10px] text-stone-400 mt-2 opacity-60">* Please don’t copy without context.</p>
            </div>

            <!-- Right: Links & CTA -->
            <div class="flex flex-col items-end gap-6">
                <!-- Navigation -->
                <div class="flex gap-6 text-base font-medium text-stone-600 dark:text-stone-400">
                    <a onclick="navigateTo('home')" class="touch-target cursor-pointer hover:text-accent-600 transition-colors">Home</a>
                    <span class="text-stone-300 dark:text-stone-700 flex items-center">·</span>
                    <a onclick="navigateTo('projects')" class="touch-target cursor-pointer hover:text-accent-600 transition-colors">Projects</a>
                    <span class="text-stone-300 dark:text-stone-700 flex items-center">·</span>
                    <a onclick="navigateTo('blog')" class="touch-target cursor-pointer hover:text-accent-600 transition-colors">Journal</a>
                </div>

                <!-- [NEW] Let's Talk Button -->
                <a href="https://instagram.com/${SITE_CONFIG.social.instagram}" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full font-bold text-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all">
                    <i data-lucide="instagram" class="w-4 h-4"></i>
                    <span>Let's talk with me</span>
                </a>
            </div>
        </div>
    </div>
`;

/**
 * --------------------------------------------------------------------------
 * APP BOOTSTRAP
 * --------------------------------------------------------------------------
 */

const renderApp = (state, oldState) => {
    // Only re-render what changed
    const mounts = {
        navbar: document.getElementById('navbar-mount'),
        main: document.getElementById('main-mount'),
        footer: document.getElementById('footer-mount')
    };

    // 1. Navbar
    if (!oldState || state.activeTab !== oldState.activeTab || state.isScrolled !== oldState.isScrolled || state.theme !== oldState.theme || state.mobileMenuOpen !== oldState.mobileMenuOpen) {
        mounts.navbar.innerHTML = getNavbarHTML(state);
    }

    // 2. Main Content
    if (!oldState || state.activeTab !== oldState.activeTab || state.route.id !== oldState.route.id || state.filterCategory !== oldState.filterCategory || state.searchTerm !== oldState.searchTerm) {
        const { page, id } = state.route;
        let mainHTML = '';
        switch(page) {
            case 'home': mainHTML = renderHome(); break;
            case 'projects': mainHTML = renderProjects(); break;
            case 'about': mainHTML = renderAbout(); break;
            case 'blog': mainHTML = id ? renderBlogDetail(id) : renderBlog(state); break;
            case 'contact': mainHTML = renderContact(); break;
            default: mainHTML = renderHome();
        }
        mounts.main.innerHTML = mainHTML;
        
        // Re-attach listeners
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
    }

    // 3. Footer
    if (!oldState) {
        mounts.footer.innerHTML = renderFooter();
    }

    // 4. Loading State
    if (state.isLoading) {
        setTimeout(() => {
            const loader = document.getElementById('initial-loader');
            if (loader) {
                loader.style.opacity = '0';
                loader.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    loader.remove();
                    appStore.setState({ isLoading: false });
                }, 600);
            }
        }, 800); 
    }

    // Init icons
    lucide.createIcons();
};

// Initialize
appStore.subscribe(renderApp);

// Routing
window.addEventListener('hashchange', () => {
    const { page, id } = parseRoute(getSafeHash());
    appStore.setState({ activeTab: page === 'blog' && id ? 'blog' : page, route: { page, id }, mobileMenuOpen: false });
    appStore.addVisitedTab(page);
});

// Start
renderApp(appStore.state);