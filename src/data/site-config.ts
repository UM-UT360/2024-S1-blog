export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Service Design & Urban Needs',
    subtitle: 'Class blog for UT360',
    description: 'Notes, updates & project artifacts from the class',
    image: {
        src: '',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Urban Tech website',
            href: 'https://taubmancollege.umich.edu/academics/urban-and-regional-planning/bachelor-of-science-in-urban-technology/'
        }
    ],
    socialLinks: [
        {
            text: 'Program Newsletter',
            href: 'https://urbantechnology.substack.com/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/taubmancollege'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/TaubmanCollege'
        }
    ],
    hero: {
        title: 'Welcome to our class blog',
        text: "Throughout the semester, we'll be posting dispatches from our research and project working with the MEDC Grow Michigan team, as we examine the idea of onboarding new residents to Michigan",
        image: {
            src: '/,
            alt: ''
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
