export const strings = {
  bg: {
    nav: {
      home: 'Начало',
      experience: 'Опит',
      education: 'Образование',
      courses: 'Курсове',
      projects: 'Проекти',
      papers: 'Статии / News',
      contact: 'Контакт',
      download: 'CV',
    },
    header: {
      subtitle: 'Data Engineer & SQL Database Developer',
    },
    basic: {
      hello: 'Здравей, аз съм',
      title: 'Dimitar Stefanov Ivanov',
      lead:
        'Софтуерен инженер, който изгражда надеждни .NET API-та, оптимизира SQL и автоматизира данни и репорти. Работя с реални бизнес процеси и ценя ясната архитектура.',
      location: 'София, България',
      age: (years) => `${years} години`,
      buttons: {
        contact: 'Контакт',
        download: 'Download CV',
      },
      badge: 'Data Engineer & SQL Database Developer',
      links: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'Building reliable backends and data flows.',
      body:
        'Аз съм Dimitar Ivanov – софтуерен инженер, фокусиран върху .NET, SQL и изграждане на надеждни бекенд системи. Харесвам данни, автоматизации и чист код. Работя по API-та, оптимизация на заявки и интеграции с реални бизнес процеси. В момента базиран в София.',
      tags: ['.NET 8', 'MS SQL / PostgreSQL', 'EF Core', 'CI/CD', 'FastAPI'],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Shipping production features with clear processes.',
      items: [
        {
          title: 'Data Engineer & SQL Developer',
          company: 'Inspirit LTD',
          period: 'октомври 2025 – сега',
          bullets: [
            'SQL Server development.',
            'Оптимизация на заявки, индекси и execution plans.',
            'SSIS data flows и SSRS репорти (schedule, delivery).',
            'ETL / ELT процеси за аналитика и репорти.',
          ],
        },
        {
          title: 'SQL Developer',
          company: 'eDynamix LTD',
          period: 'юли 2023 – септември 2025',
          bullets: [
            'SQL Server development: T-SQL, stored procedures, функции, тригери.',
            'REST API заявки към външни системи и интеграции.',
            'SSRS репорти, оптимизация на заявки и индекси.',
          ],
        },
        {
          title: 'Intern Java Developer',
          company: 'Infinno LLC',
          period: 'юли 2022 – ноември 2022',
          bullets: [
            'OOP с Java, основи на SQL и REST API.',
            'Изграждане на малки услуги и свързване към бази данни.',
            'Практика с екипни процеси и code reviews.',
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Стъпки в образованието и специализацията.',
      items: [
        {
          logoSrc: '/logos/sofia-university.png',
          logo: 'SO',
          org: 'Sofia University St. Kliment Ohridski',
          degree: "Master's degree, Big Data Technologies",
          period: 'Sep 2025 – Feb 2027',
          activities:
            'Activities and societies: Big Data, Data Science, Data Engineering, Machine Learning, AI.',
          extra: '',
          skills: ['Big Data', 'Data Science', 'Data Engineering', 'Machine Learning', 'Artificial Intelligence (AI)'],
        },
        {
          logoSrc: '/logos/plovdiv-university.png',
          logo: 'PU',
          org: 'University of Plovdiv "Paisii Hilendarski"',
          degree: "Bachelor's degree, Informatics",
          period: 'Sep 2021 – Jul 2025',
          activities:
            'Activities and societies: Programming, Software Development, Maths, English, AI.',
          extra: '',
          skills: [
            '.NET Framework',
            'C#',
            'SQL',
            'Java',
            'C++',
            'ASP.NET',
            'React.js',
            'JavaScript',
            'Core Java',
            'HTML',
            'CSS',
            'Mathematics',
            'Maths',
          ],
        },
        {
          logoSrc: '/logos/geo-milev.png',
          logo: 'GM',
          org: 'School of Maths and Science “Geo Milev” Stara Zagora',
          degree: 'High School Diploma, Informatics',
          period: 'Sep 2013 – May 2021',
          activities:
            'Activities and societies: Mathematics competitions, Olympiads, Programming, Science.',
          extra: 'Advanced focus on Maths and Informatics; участия в олимпиади и състезания.',
          skills: ['C++', 'Maths', 'Mathematics'],
        },
      ],
    },
    courses: {
      eyebrow: 'Courses I teach',
      title: '????????? ????? ?? ???????????? ? ????????.',
      cta: '??? ???????',
      items: [
        {
          title: '????????? ?????',
          year: 'Soon',
          org: '',
          summary: '????? ?? ?????? ????????? ???.',
          link: '#',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected builds and experiments.',
      cta: 'View project',
      items: [
        {
          title: '????????? ?????',
          stack: '',
          summary: '????? ?? ?????? ??????? ???.',
          link: '#',
        },
      ],
    },
    papers: {
      eyebrow: 'Paper / News',
      title: 'Articles, talks, and appearances.',
      cta: 'See more',
      items: [
        {
          title: '????????? ?????',
          date: '',
          type: 'News',
          summary: '????? ?? ?????? ?????? ? ??????? ???.',
          link: '#',
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      education: 'Education',
      courses: 'Courses',
      projects: 'Projects',
      papers: 'Papers / News',
      contact: 'Contact',
      download: 'CV',
    },
    header: {
      subtitle: 'Data Engineer & SQL Database Developer',
    },
    basic: {
      hello: "Hello, I'm",
      title: 'Dimitar Stefanov Ivanov',
      lead:
        'Software engineer building reliable .NET APIs, optimizing SQL, and automating data and reporting. I work with real business processes and care about clear architecture.',
      location: 'Sofia, Bulgaria',
      age: (years) => `${years} years`,
      buttons: {
        contact: 'Contact me',
        download: 'Download CV',
      },
      badge: 'Data Engineer & SQL Database Developer',
      links: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'Building reliable backends and data flows.',
      body:
        'I am Dimitar Ivanov – a software engineer focused on .NET, SQL, and building dependable backend systems. I like data, automation, and clean code. I work on APIs, query optimization, and integrations tied to real business processes. Based in Sofia.',
      tags: ['.NET 8', 'MS SQL / PostgreSQL', 'EF Core', 'CI/CD', 'FastAPI'],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Shipping production features with clear processes.',
      items: [
        {
          title: 'Data Engineer & SQL Developer',
          company: 'Inspirit LTD',
          period: 'Oct 2025 - present',
          bullets: [
            'SQL Server development with T-SQL and database design.',
            'Performance optimization (queries, indexes, execution plans).',
            'SSIS packages and data flows; SSRS reports and scheduling.',
            'ETL / ELT pipelines for analytics and reporting.',
          ],
        },
        {
          title: 'SQL Developer',
          company: 'eDynamix LTD',
          period: 'Jul 2023 - Sep 2025',
          bullets: [
            'SQL Server development: T-SQL, stored procedures, functions, triggers.',
            'REST API calls to external systems and integrations.',
            'SSRS reports, query and index optimization.',
          ],
        },
        {
          title: 'Intern Java Developer',
          company: 'Infinno LLC',
          period: 'Jul 2022 - Nov 2022',
          bullets: [
            'OOP with Java, fundamentals of SQL and REST APIs.',
            'Built small services and database connections.',
            'Practiced team processes and code reviews.',
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Steps in education and specialization.',
      items: [
        {
          logoSrc: '/logos/sofia-university.png',
          logo: 'SO',
          org: 'Sofia University St. Kliment Ohridski',
          degree: "Master's degree, Big Data Technologies",
          period: 'Sep 2025 – Feb 2027',
          activities:
            'Activities and societies: Big Data, Data Science, Data Engineering, Machine Learning, AI.',
          extra: '',
          skills: ['Big Data', 'Data Science', 'Data Engineering', 'Machine Learning', 'Artificial Intelligence (AI)'],
        },
        {
          logoSrc: '/logos/plovdiv-university.png',
          logo: 'PU',
          org: 'University of Plovdiv "Paisii Hilendarski"',
          degree: "Bachelor's degree, Informatics",
          period: 'Sep 2021 – Jul 2025',
          activities:
            'Activities and societies: Programming, Software Development, Maths, English, AI.',
          extra: '',
          skills: [
            '.NET Framework',
            'C#',
            'SQL',
            'Java',
            'C++',
            'ASP.NET',
            'React.js',
            'JavaScript',
            'Core Java',
            'HTML',
            'CSS',
            'Mathematics',
            'Maths',
          ],
        },
        {
          logoSrc: '/logos/geo-milev.png',
          logo: 'GM',
          org: 'School of Maths and Science “Geo Milev” Stara Zagora',
          degree: 'High School Diploma, Informatics',
          period: 'Sep 2013 – May 2021',
          activities:
            'Activities and societies: Mathematics competitions, Olympiads, Programming, Science.',
          extra: 'Advanced focus on Maths and Informatics; participated in Olympiads and competitions.',
          skills: ['C++', 'Maths', 'Mathematics'],
        },
      ],
    },
    courses: {
      eyebrow: 'Courses I teach',
      title: 'Practical learning for developers and engineers.',
      cta: 'See details',
      items: [
        {
          title: 'Coming soon',
          year: 'Soon',
          org: '',
          summary: 'Courses will be added here soon.',
          link: '#',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected builds and experiments.',
      cta: 'View project',
      items: [
        {
          title: 'Coming soon',
          stack: '',
          summary: 'Projects will be added here soon.',
          link: '#',
        },
      ],
    },
    papers: {
      eyebrow: 'Paper / News',
      title: 'Articles, talks, and appearances.',
      cta: 'See more',
      items: [
        {
          title: 'Coming soon',
          date: '',
          type: 'News',
          summary: 'Articles and appearances will be added here soon.',
          link: '#',
        },
      ],
    },
  },
};
