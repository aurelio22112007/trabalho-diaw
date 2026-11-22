import paysimples from "../assets/projects/paysimples.gif";
import api from "../assets/projects/api-produtos.gif";
import oficina from "../assets/projects/oficina-java.gif";
import catalogo from "../assets/projects/catalogo-react.gif";

// Ordem do mais antigo ao mais recente (linha do tempo).
export const projects = [
  {
    id: "paysimples",
    name: "PaySimples",
    description: {
      pt: "Sistema de intermediação de pagamentos para microempresas: cadastro, login, depósito, transferência entre usuários e histórico de transações. Roda no navegador e salva os dados no localStorage.",
      en: "Payment intermediation system for small businesses: sign-up, login, deposits, transfers between users and transaction history. Runs in the browser and stores data in localStorage.",
    },
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    repo: "https://github.com/aurelio22112007/paysimples",
    image: paysimples,
    alt: { pt: "Demonstração do PaySimples com login, depósito e transferência", en: "PaySimples demo with login, deposit and transfer" },
  },
  {
    id: "api-produtos",
    name: "API de Produtos",
    description: {
      pt: "API RESTful com Node.js e Express para gerenciar produtos, com rotas de listagem, consulta, cadastro, alteração e remoção. Publicada no Render e testada com uma coleção do Postman.",
      en: "RESTful API with Node.js and Express to manage products, with routes to list, fetch, create, update and delete. Deployed on Render and tested with a Postman collection.",
    },
    tech: ["Node.js", "Express", "REST", "Postman", "Render"],
    repo: "https://github.com/aurelio22112007/api-produtos-",
    image: api,
    alt: { pt: "Demonstração das rotas da API de Produtos", en: "Products API routes demo" },
  },
  {
    id: "oficina",
    name: "Gerenciador de Boxes e Ordens de Serviço",
    description: {
      pt: "Sistema em Java para uma oficina mecânica: cadastra ordens de serviço, associa mecânicos a boxes e controla a capacidade e o tipo de serviço de cada box, com menu no console.",
      en: "Java system for a car repair shop: registers service orders, assigns mechanics to bays and controls each bay's capacity and service type, with a console menu.",
    },
    tech: ["Java", "POO", "ArrayList", "Scanner"],
    repo: "https://github.com/aurelio22112007/atividade_avaliativa",
    image: oficina,
    alt: { pt: "Demonstração do menu em Java no terminal", en: "Java console menu demo" },
  },
  {
    id: "catalogo",
    name: "Catálogo de Jogos",
    description: {
      pt: "Atividade prática em React: catálogo de jogos feito com componentes reutilizáveis. É o meu projeto mais recente e o primeiro com front-end em React.",
      en: "React practice project: a game catalog built with reusable components. It is my most recent project and my first React front-end.",
    },
    tech: ["React", "JavaScript"],
    repo: "https://github.com/aurelio22112007/atividade-react-catalogo",
    image: catalogo,
    alt: { pt: "Demonstração do catálogo de jogos em React", en: "React game catalog demo" },
  },
];
