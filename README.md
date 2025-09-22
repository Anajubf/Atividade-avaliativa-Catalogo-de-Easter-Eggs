const readmeContent = `# 🐣 Catálogo de Easter Eggs

Este é um catálogo de **easter eggs**, segredos e referências ocultas encontrados em diversas mídias, como jogos, filmes e softwares. Cada entrada foi cuidadosamente coletada para oferecer uma visão detalhada desses tesouros escondidos.

---

## 🎯 Objetivo

O principal objetivo deste projeto é criar um banco de dados organizado e fácil de consultar para entusiastas de **easter eggs** e segredos de cultura pop. O catálogo serve como uma fonte de pesquisa para quem busca descobrir ou verificar referências em suas mídias favoritas.

---

## 💾 Estrutura do Projeto

O catálogo é estruturado em um formato de dados simples e direto, facilitando a integração em diferentes plataformas e aplicações. As informações são organizadas em um array de objetos, onde cada objeto contém os seguintes campos:

* \`id\`: Identificador único da entrada.
* \`titulo\`: Nome do **easter egg**.
* \`midia\`: A mídia em que o segredo foi encontrado (ex: "Grand Theft Auto V", "Matrix").
* \`tipo\`: Classificação do **easter egg** (ex: "Referência Cultural", "Segredo / Jogo").
* \`descricao\`: Descrição detalhada do **easter egg** e como ele é encontrado.
* \`dificuldade\`: Nível de dificuldade para encontrar o segredo (ex: "Fácil", "Média", "Difícil").
* \`descoberto\`: Ano em que o segredo foi descoberto.
* \`autor\`: O criador ou estúdio responsável pela obra.
* \`verificado\`: Um booleano que indica se a informação foi confirmada.

---

## ⚡️ Como Usar

Para usar os dados, basta copiar o conteúdo do arquivo e integrá-lo ao seu projeto. Você pode usar uma linguagem de programação como **JavaScript** para ler e manipular os dados.

### Exemplo de Uso em JavaScript

\`\`\`javascript
const catalogoEasterEggs = [
  {
    "id": "001",
    "titulo": "A Caça ao Pé Grande",
    "midia": "Grand Theft Auto V",
    "tipo": "Referência Oculta / Segredo",
    "descricao": "Depois de completar 100% do jogo, é possível iniciar uma caçada para encontrar o lendário Pé Grande (Bigfoot) na floresta de Paleto Bay, sob condições específicas.",
    "dificuldade": "Média",
    "descoberto": "2014",
    "autor": "Rockstar North",
    "verificado": true
  }
];

// Exemplo de como acessar uma entrada
console.log(catalogoEasterEggs[0].titulo);
\`\`\`

---

## 📝 Contribuições

Contribuições são bem-vindas! Se você conhece um **easter egg** que não está na lista ou encontrou uma informação incorreta, por favor, abra um **Pull Request** com as devidas alterações. Certifique-se de que todas as informações estejam corretas antes de enviar sua contribuição.

---

## ⚖️ Licença

Este projeto está licenciado sob a Licença MIT.
`;

console.log(readmeContent);