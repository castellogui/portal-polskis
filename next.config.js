/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    logins: ['emilynicole', 'guilhermecastello'],
    senhas: ['mnb3698', '@Usuario10.'],
    frases: [{ dica: "Nossa série favorita. Não escreva corretamente! <3", data: "2022-12-25", palavra: "Tinky Winky" }]
  }
}

module.exports = nextConfig
