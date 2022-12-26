/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    logins: ['emilynicole', 'guilhermecastello'],
    senhas: ['mnb3698', '@Usuario10.'],
    palavras: [
      { dica: "Nossa série favorita. Não escreva corretamente!", data: "2022-12-24 ", palavra: "Tilêndi" },
      { dica: "Ama creminho gostoso, é roxo e foi um dos nossos primeiros apelidos!", data: "2022-12-25 ", palavra: "Tinky Winky" },
      { dica: "Um apelido que falamos pra pessoas pequenas.", data: "2022-12-26 ", palavra: "Quiança" },
      { dica: "Obrigado amigo, você é um amigo, amigo!.", data: "2022-12-27 ", palavra: "Amiagu" },
      { dica: "Um lugar onde vai ficar pra sempre nas nossas memórias! Pertinho de casa e com muitas crianças!", data: "2022-12-28 ", palavra: "Morcegão" },
      { dica: "Uma mini vida que não sai do nosso pé!", data: "2022-12-29 ", palavra: "July Tucker" },
      { dica: "Uma das coisas que você mais ama fazer na vida, e que você é muito boa!", data: "2022-12-30 ", palavra: "Design" },
      { dica: "Eu e você no Valorant somos amigos de ... !", data: "2022-12-31 ", palavra: "Amigos de Passe" },
      { dica: "A data que mudou tudo!", data: "2023-01-01 ", palavra: "12/09/2020" },
      { dica: "Dancinha do ... hã hã", data: "2023-01-02 ", palavra: "Dancinha do Elevador" },
      { dica: "A personagem que mais se parece com você no Valorant!", data: "2023-01-03 ", palavra: "Sage" },
      { dica: "A melhor palavra que já inventamos, e serve pra tudo!", data: "2023-01-04 ", palavra: "Polski" },
    ],
    MONGODB_URL: 'mongodb+srv://guilhermecastello:<password>@cluster0.55jdgsh.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
