(function () {
  "use strict";
  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log("As letras do seu nome:");
  let name = "gabriel";
  for (let i = 0, size = name.length; i < size; i++) {
    console.log(`${name[i]} é a ${i + 1}ª letra do meu nome`);
  }

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log("\nNome convertido à partir de um slug:");
  let fullName = "gabriel-felipe-almeida";
  let newFullName = fullName
    .split("-")
    .map(function (name) {
      return name[0].toUpperCase() + name.slice(1);
    })
    .join(" ");
  console.log(fullName);
  console.log(newFullName);

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log("\nMeus amigos:");
  let listName = ["gabriel", "felipe", "giacomo", "guilherme", "emilly"];
  let toString = listName.reduce((acc, curr, index) => {
    let and = listName.length - 1 === index ? " e " : " , ";
    return acc + and + curr;
  });
  console.log(toString);

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log('\nEra "Roberto", agora é:');
  let was = "Roberto";
  let is = was.replace("to", "ta");
  console.log(is);

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log("\nParte de uma string:");
  let final = "fernando";
  console.log(final.slice(3));

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log("\nNome com letras intercaladas entre caixa alta e baixa:");
  let myName = "gabriel";
  var myNewName = [];
  for (var i = 0, len = myName.length; i < len; i++) {
    myNewName.push(
      i % 3 === 0 ? myName[i].toUpperCase() : myName[i].toLowerCase()
    );
  }
  console.log(myNewName.join(""));
})();
