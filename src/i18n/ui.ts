export const LANGS = ["en", "es"] as const;

export type Lang = (typeof LANGS)[number];

export const LANG_FLAGS: Record<Lang, string> = {
    en: "🇬🇧",
    es: "🇪🇸",
};

export const LANG_NAMES: Record<Lang, string> = {
    en: "English",
    es: "Español",
};

export const homeUrl = (lang: Lang) => (lang === "es" ? "/es/" : "/");

export const hashUrl = (lang: Lang, hash: string) => `${homeUrl(lang)}#${hash}`;

export const ui = {
    en: {
        meta: {
            title: "Portfolio of Matias Franco - Developer and web programmer",
            description: "Hire Matias Franco for your next project.",
        },
        nav: {
            experience: "Experience",
            projects: "Projects",
            about: "About me",
            contact: "Contact",
        },
        hero: {
            greeting: "Hey, I'm Matias Franco",
            badge: "Available for hire",
            summary: [
                "+13 years of experience.",
                "Fullstack developer.",
                "From Montevideo, Uruguay 🇺🇾.",
                "Specialized in web development.",
            ],
        },
        sections: {
            experience: "Work experience",
            projects: "Projects",
            about: "About me",
        },
        experience: {
            learnMore: "Learn more",
            items: [
                {
                    date: "Apr 2024 - Present",
                    title: "Booster Software - Full Stack Developer",
                    description:
                        "Migration of a legacy system to a modern web platform for a fintech company. Tech stack: .NET, C#, Angular, MSSQL, PL/SQL and Azure.",
                    link: "https://www.linkedin.com/in/mat%C3%ADas-franco-4913015b/",
                },
                {
                    date: "Mar 2022 - Apr 2024",
                    title: "Vangwe - Full Stack Developer",
                    description:
                        "Development and maintenance of a payments platform for betting houses. Tech stack: Java, Angular, MySQL, Node.js, Nest.js and AWS.",
                },
                {
                    date: "Sep 2021 - Dec 2021",
                    title: "HEX Atlanta - Frontend Developer",
                    description:
                        "Development and maintenance of the frontend for an events platform. Tech stack: React.js, PostgreSQL and GraphQL.",
                },
                {
                    date: "May 2021 - Aug 2021",
                    title: "BBVA Uruguay S.A. - Full Stack Developer",
                    description:
                        "Development and maintenance of several banking services. Tech stack: C#, Java and PL/SQL with DB2.",
                },
                {
                    date: "Jun 2019 - May 2021",
                    title: "Technisys - Full Stack Developer",
                    description:
                        "Development and maintenance of APIs, frontend and backend for a CDP platform used by different banks. Tech stack: React.js, Redux, JavaScript, Java, JSP, MySQL, Oracle, MsSQL and Azure.",
                },
                {
                    date: "Jun 2015 - Jun 2019",
                    title: "Nuevo Siglo - Developer",
                    description:
                        "Development and maintenance of the Android app for the NsNow streaming service, ChromeCast integration, PHP backend development and support tasks. Tech stack: Android, PHP, JavaScript, MySQL, CakePHP, Laravel and Firebase.",
                },
                {
                    date: "Jun 2013 - May 2015",
                    title: "Mario C. Macri S.A. - Programmer",
                    description:
                        "Development work on the company's internal software, including improvements, bug fixing and testing. Tech stack: Visual Basic .NET and Oracle.",
                },
            ],
        },
        projects: [
            {
                title: "myFixtu.re - Soccer fixtures in your calendar",
                description:
                    "Created with Astro and Tailwind CSS, this project allows users to download and subscribe to soccer fixtures, making it easy to follow matches from their calendar.",
                link: "https://myfixtu.re/",
                github: "https://github.com/m-franco/calendars",
                image: "/projects/myfixture.jpg",
            },
        ],
        about: [
            "I’m Matías Franco, working in software development from Montevideo, Uruguay 🇺🇾. I’ve been involved in different projects and technologies, always looking for the best approach to each challenge.",
            "Over the years I’ve worked in environments that required versatility, from financial systems to fast-moving startups, with the goal of building software that is both useful and sustainable.",
            "I value clarity in ideas and the challenge of designing solutions that simplify both code and people’s lives.",
        ],
        footer: {
            rights: "All Rights Reserved.",
            about: "About",
            contact: "Contact",
        },
    },
    es: {
        meta: {
            title: "Portfolio de Matías Franco - Desarrollador y programador web",
            description: "Contrata a Matías Franco para tu próximo proyecto.",
        },
        nav: {
            experience: "Experiencia",
            projects: "Proyectos",
            about: "Sobre mí",
            contact: "Contacto",
        },
        hero: {
            greeting: "Hola, soy Matías Franco",
            badge: "Disponible para trabajar",
            summary: [
                "+13 años de experiencia.",
                "Desarrollador fullstack.",
                "Desde Montevideo, Uruguay 🇺🇾.",
                "Especializado en desarrollo web.",
            ],
        },
        sections: {
            experience: "Experiencia laboral",
            projects: "Proyectos",
            about: "Sobre mí",
        },
        experience: {
            learnMore: "Ver más",
            items: [
                {
                    date: "Abr 2024 - Actualidad",
                    title: "Booster Software - Desarrollador Full Stack",
                    description:
                        "Migración de sistemas viejos a una plataforma web moderna en una fintech y desarrollo de software para bancos. Tecnologías: .NET, C#, Angular, MSSQL, PL/SQL y Azure.",
                    link: "https://www.linkedin.com/in/mat%C3%ADas-franco-4913015b/",
                },
                {
                    date: "Mar 2022 - Abr 2024",
                    title: "Vangwe - Desarrollador Full Stack",
                    description:
                        "Desarrollo y mantenimiento en diferentes servicios de una plataforma de pagos. Tecnologías: Java, Angular, MySQL, Node.js y Nest.js.",
                },
                {
                    date: "Sep 2021 - Dic 2021",
                    title: "HEX Atlanta - Desarrollador Frontend",
                    description:
                        "Desarrollo y mantenimiento de frontend para una plataforma de eventos. Tecnologías: React.js, PostgreSQL y GraphQL.",
                },
                {
                    date: "May 2021 - Ago 2021",
                    title: "BBVA Uruguay S.A. - Desarrollador Full Stack",
                    description:
                        "Desarrollo y mantenimiento en diferentes servicios del banco. Tecnologías: C#, Java y PL/SQL con DB2.",
                },
                {
                    date: "Jun 2019 - May 2021",
                    title: "Technisys - Desarrollador Full Stack",
                    description:
                        "Desarrollo, adaptación y mantenimiento en API, frontend y backend de la plataforma CDP. Tecnologías: React.js, Redux, JavaScript, Java, JSP, MySQL, Oracle y MsSQL.",
                },
                {
                    date: "Jun 2015 - Jun 2019",
                    title: "Nuevo Siglo - Desarrollador",
                    description:
                        "Desarrollo y mantenimiento de la aplicación Android de NsNow, integración con ChromeCast, desarrollo en backends PHP y tareas de retén. Tecnologías: Android, PHP, JavaScript, MySQL, CakePHP, Laravel y Firebase.",
                },
                {
                    date: "Jun 2013 - May 2015",
                    title: "Mario C. Macri S.A. - Programador",
                    description:
                        "Programación en el software de la empresa, mejoras, corrección de errores y testeo. Tecnologías: Visual Basic .NET y Oracle.",
                },
            ],
        },
        projects: [
            {
                title: "myFixtu.re - Fixture de fútbol en tu calendario",
                description:
                    "Creado con Astro y Tailwind CSS, este proyecto permite descargar y suscribirse a fixtures de fútbol para seguir partidos desde el calendario.",
                link: "https://myfixtu.re/es/",
                github: "https://github.com/m-franco/calendars",
                image: "/projects/myfixture.jpg",
            },
        ],
        about: [
            "Soy Matías Franco, trabajo en desarrollo de software desde Montevideo, Uruguay 🇺🇾. He participado en distintos proyectos y con diversas tecnologías, siempre buscando el mejor enfoque para cada desafío.",
            "A lo largo de los años trabajé en entornos que exigían versatilidad, desde sistemas financieros hasta startups dinámicas, con el objetivo de crear software útil y sostenible.",
            "Me interesa la claridad en las ideas y el desafío de diseñar soluciones que simplifiquen tanto el código como la vida de las personas.",
        ],
        footer: {
            rights: "Todos los derechos reservados.",
            about: "Sobre mí",
            contact: "Contacto",
        },
    },
} satisfies Record<Lang, any>;
