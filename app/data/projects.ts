export type Project = {
  id: string;
  title: string;
  image: string;
  video: string;
  demoUrl: string;
  repoUrl?: string;
  description: string;
  techIcons: string[];
};

export const projects: Project[] = [
  {
    id: "Portfoliomarcos",
    title: "Projeto Portfólio React Marcos",
    image: "/img/marcos.png",
    video: "/videos/portfolio-marcos.mp4",
    demoUrl: "https://portfolio-nextjs-marcos-bizzarri.vercel.app/",
    repoUrl: "https://github.com/MarcosBizzarri/Portfolio-Marcos-Bizzarri-React",
    description:
      "O projeto Portfólio é uma aplicação web desenvolvida em React.",
    techIcons: ["/languages/react.svg", "/languages/css.svg"],
  },
  {
    id: "portfoliojessica",
    title: "Projeto Portfólio Jessica Logística",
    image: "/img/jessica.png",
    video: "/videos/portfolio-jessica.mp4",
    demoUrl: "https://portfolio-jessica-logistica.vercel.app/",
    repoUrl: "https://github.com/MarcosBizzarri/portfolio-jessica-logistica",
    description:
      "O projeto Portfólio Jessica é uma aplicação web desenvolvida em Nextjs.",
    techIcons: ["/languages/next.png", "/languages/tailwind.png"],
  },
  {
    id: "treinodiario",
    title: "Projeto Treinos diários",
    image: "/img/treinos.png",
    video: "/videos/treino.mp4",
    demoUrl: "https://training-evolution.vercel.app",
    description:
      "O projeto Treinos diários é uma aplicação web desenvolvida em Nextjs",
    techIcons: ["/languages/next.png", "/languages/tailwind.png"],
  },
  {
    id: "controle",
    title: "Projeto Controle financeiro",
    image: "/img/controle.png",
    video: "/videos/controlefinanceiro.mp4",
    demoUrl: "https://controle-financeiro-ten-alpha.vercel.app/",
    description:
      "O projeto Controle Financeiro é uma aplicação web desenvolvida em Nextjs.",
    techIcons: ["/languages/next.png", "/languages/tailwind.png"],
  },
  {
    id: "bizzarriFlights",
    title: "Projeto Bizzarri Flights",
    image: "/img/avioes.png",
    video: "/videos/bizzarriflights.mkv",
    demoUrl: "https://bizzarri-flights-2bb60.web.app/",
    description:
      "O projeto Bizzarri Flights é uma aplicação web desenvolvida em React.",
    techIcons: [
      "/languages/react.svg",
      "/languages/html.svg",
      "/languages/css.svg",
      "/languages/bootstrap.svg",
    ],
  },
  {
    id: "casamento",
    title: "Projeto do meu casamento",
    image: "/img/casorio.png",
    video: "/videos/casamento.mp4",
    demoUrl: "https://casamento-one-roan.vercel.app/",
    repoUrl: "https://github.com/MarcosBizzarri/casamento",
    description:
      "O projeto Casamento é uma aplicação web desenvolvida em Next.js e Tailwind.",
    techIcons: ["/languages/next.png", "/languages/tailwind.png"],
  },
  {
    id: "busca",
    title: "Busca de restaurantes",
    image: "/img/bsuca-restaurantes.png",
    video: "/videos/buscarestaurantes.mp4",
    demoUrl: "https://buscas-de-restaurantes.vercel.app",
    repoUrl: "https://github.com/MarcosBizzarri/Buscas-de-restaurantes",
    description:
      "O projeto Busca de restaurantes é desenvolvido com Next.js, Node.js e Tailwind.",
    techIcons: [
      "/languages/next.png",
      "/languages/node.png",
      "/languages/tailwind.png",
    ],
  },
  {
    id: "sobreMarcos",
    title: "Projeto sobre Marcos Bizzarri",
    image: "/img/trabalho-uninter-bizzarri.png",
    video: "/videos/sobre-marcos.mkv",
    demoUrl: "https://marcosbizzarri.github.io/Portfolio-Marcos-Bizzarri/#",
    repoUrl: "https://github.com/MarcosBizzarri/Portfolio-Marcos-Bizzarri",
    description:
      "Projeto feito sobre Marcos Bizzarri, uma aplicação web desenvolvida em HTML, CSS e JavaScript.",
    techIcons: [
      "/languages/html.svg",
      "/languages/css.svg",
      "/languages/javascrip.svg",
    ],
  },
  {
    id: "perguntas",
    title: "Quiz sobre HTML, CSS e JS",
    image: "/img/perguntas.png",
    video: "/videos/perguntas-js.mp4",
    demoUrl: "https://marcosbizzarri.github.io/perguntas-html-css-js/",
    repoUrl: "https://github.com/MarcosBizzarri/perguntas-html-css-js",
    description:
      "O projeto Perguntas é uma aplicação web desenvolvida em HTML, CSS e JavaScript.",
    techIcons: [
      "/languages/html.svg",
      "/languages/css.svg",
      "/languages/javascrip.svg",
    ],
  },
  {
    id: "santander",
    title: "Projeto Banco Santander",
    image: "/img/projeto-santander.png",
    video: "/videos/santander.mkv",
    demoUrl: "https://marcosbizzarri.github.io/projeto-santander/",
    repoUrl: "https://github.com/MarcosBizzarri/projeto-santander",
    description:
      "O projeto Santander é uma aplicação web desenvolvida em HTML e CSS.",
    techIcons: ["/languages/html.svg", "/languages/css.svg"],
  },
  {
    id: "facebook",
    title: "Facebook com cores do Instagram",
    image: "/img/facebook-insta.png",
    video: "/videos/facebook-clone.mkv",
    demoUrl: "https://marcosbizzarri.github.io/facebook-pagina/",
    repoUrl: "https://github.com/MarcosBizzarri/facebook-pagina",
    description:
      "O projeto Facebook Clone é uma aplicação web desenvolvida em HTML e CSS.",
    techIcons: ["/languages/html.svg", "/languages/css.svg"],
  },
  {
    id: "academia",
    title: "Gerenciador de Academia",
    image: "/img/academia-gestao.png",
    video: "/videos/academia-gestao.mp4",
    demoUrl: "https://marcosbizzarri.github.io/gestao-academia/",
    repoUrl: "https://github.com/MarcosBizzarri/gestao-academia",
    description:
      "O projeto Gerenciador de Academia é uma aplicação web desenvolvida em HTML, CSS e JavaScript.",
    techIcons: [
      "/languages/html.svg",
      "/languages/css.svg",
      "/languages/javascrip.svg",
    ],
  },
  {
    id: "quizeducacional",
    title: "Quiz Educacional",
    image: "/img/quiz.png",
    video: "/videos/quiz-educacional.mp4",
    demoUrl: "https://quiz-educacional-7a06f.web.app/",
    repoUrl: "https://github.com/MarcosBizzarri/Quiz-Educacional",
    description:
      "O projeto Quiz Educacional é uma aplicação web desenvolvida em React.",
    techIcons: [
      "/languages/react.svg",
      "/languages/html.svg",
      "/languages/css.svg",
      "/languages/bootstrap.svg",
      "/languages/javascrip.svg",
    ],
  },
  {
    id: "crud",
    title: "Sistema sobre CRUD",
    image: "/img/cadastro.png",
    video: "/videos/cadastro-crud.mp4",
    demoUrl: "https://sistema-de-cadastro-bizzarri.web.app/",
    repoUrl: "https://github.com/MarcosBizzarri/Crud-sistema",
    description:
      "Projeto sobre CRUD, uma aplicação web desenvolvida em React.",
    techIcons: [
      "/languages/react.svg",
      "/languages/html.svg",
      "/languages/css.svg",
      "/languages/bootstrap.svg",
      "/languages/javascrip.svg",
    ],
  },
];