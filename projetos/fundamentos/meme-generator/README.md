# Demo
![](demo.png)

![](cert.png)

---

# Requisitos Obrigatórios

⚠️ Leia-os os requisitos atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

## 1. Crie um input de texto

<details>

  <summary>Crie um elemento input para que a pessoa usuária possa inserir o texto, de modo que o texto inserido apareça no _preview_ de visualização do meme a ser gerado.</summary><br/>

  - O input de texto deve possuir o `ID` `text-input`;
  - O preview de visualização deve ser um _"container"_ para a **imagem** e para o **texto** do meme. Este elemento deve ter o `ID` `meme-image-container`;
  - O preview de visualização deve possuir outro elemento que mostre o texto digitado. Esse elemento de texto deve estar inserido no container e ter o `ID` `meme-text`;
  - O texto dentro do preview deve estar visível mesmo se não houver imagem inserida.

  **O que será testado:**

  - O input deve possuir o `ID` `text-input`;
  - O input deve permitir inserção de texto;
  - O texto digitado no input deve estar visível na tela;
  - O preview de visualização deve possuir o `ID` `meme-image-container`;
  - O preview de visualização deve possuir um elemento dentro com `ID` `meme-text`;
  - O elemento de texto dentro do preview deve mostrar o mesmo texto digitado no input;

</details>

## 2. Crie uma função que execute upload de imagem

<details>

  <summary>Cria uma função que execute o upload de uma imagem de seu computador.</summary><br/>

  - O elemento que faz o upload da imagem deve possuir o `ID` `meme-insert`;
  - O preview de visualização deve possuir outro elemento para mostrar a imagem selecionada. Este elemento deve possuir o `ID` `meme-image`;
  - A imagem deve estar totalmente contida dentro do preview de visualização. ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~;
  - O texto inserido no elemento `text-input` deve estar visível por cima da imagem escolhida `meme-image`.

  **O que será testado:**

  - O elemento para upload de imagens deve possuir o `ID` `meme-insert`;
  - A imagem carregada é exibida dentro do preview de visualização;
  - O texto dentro do preview é inserido corretamente sobre a imagem.

</details>

## 3. Adicione uma moldura no preview de visualização

<details>

  <summary>Adicione uma moldura no preview de visualização. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.</summary><br/>

  - O preview de visualização deve ter a cor de fundo branca;
  - O preview de visualização deve ter uma borda preta, sólida, com 1 pixel de largura;
  - A imagem deve estar totalmente contida no elemento identificado como `meme-image-container` ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container).

  **O que será testado:**

  - O preview de visualização deve possuir a cor de fundo branca;
  - O preview de visualização deve possuir borda preta, sólida, com 1 pixel de largura;
  - A imagem deve estar totalmente contida no preview de visualização `meme-image-container`.

</details>

## 4. Adicione o texto que será inserido sobre a imagem

<details>

  <summary>Adicione o texto no preview de visualização sobre a imagem. O texto deve ter cor, sombra e tamanho específicos.</summary><br/>

  - O texto do elemento `meme-text` deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
  - O texto deve possuir fonte com o tamanho de 30 pixels;
  - O texto deve possuir cor branca.

  **O que será testado:**

  - O texto do elemento `meme-text` deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
  - O texto do elemento `meme-text` deve ter a fonte com o tamanho de 30 pixels;
  - O texto do elemento `meme-text` deve estar na cor branca.

</details>

## 5. Limite o tamanho do texto do meme

<details>

  <summary>Limite o tamanho do texto que a pessoa usuária pode inserir</summary><br/>

  - O input de texto deve possuir a quantidade máxima de 60 caracteres.

  **O que será testado:**

  - O input de texto de `ID` `text-input` não deve ultrapassar 60 caracteres.

</details>

# Requisitos Bônus

## 6. Crie três botões que alterem as cores da borda dos memes

<details>

  <summary>Crie três botões diferentes, que ao serem clicados devem trocar a borda ao redor do container de acordo com suas respectivas cores</summary><br/>

  - Os três botões devem ser elementos do tipo `button`;
  - Os botões devem possuir cor de fundo da mesma cor da moldura a ser colocada no container;
  - As bordas devem ser acrescentadas ao preview de visualização;
  - Um dos botões deve possuir o `ID` `fire` e deve estilizar o container da imagem com uma borda de 3 pixels, _dashed_ e vermelha (`rgb(255, 0, 0)`);
  - Um dos botões deve possuir o `ID` `water` deve estilizar o container da imagem com uma borda azul (`rgb(0, 0, 255)`), com 5 pixels do tipo _double_;
  - Um dos botões deve possuir o `ID` `earth` deve estilizar o container da imagem com uma borda do tipo _groove_, verde (`rgb(0, 128, 0)`) e com 6 pixels;
  - A borda padrão especificada no requisito 3 não deve mais aparecer após clicar em qualquer um dos botões.

  **O que será testado:**
  - Cada um dos três botões possuem os `ID` `fire`, `water` e `earth` respectivamente;
  - O botão de `ID` `fire` altera a borda para 3 pixels de espessura, tipo _dashed_ e cor vermelha (`rgb(255, 0, 0)`);
  - O botão de `ID` `water` altera a borda para 5 pixels de espessura, tipo _double_ e cor azul (`rgb(0, 0, 255)`);
  - O botão de `ID` `earth` altera a borda para 6 pixels de espessura, tipo _groove_ e cor verde (`rgb(0, 128, 0)`);

</details>

## 7. Crie um conjunto de quatro imagens pré prontas que permita que a pessoa usuária possa escolher.

<details>

  <summary>Crie miniaturas de imagens que ao receberem o clique da pessoa usuária, devam aparecer no preview de visualização.</summary><br/>

  - As miniaturas dos memes (imagens) devem ser identificadas com `id` `meme-1` para o primeiro meme, `meme-2` para o segundo meme, `meme-3` para o terceiro meme e `meme-4` para o quarto meme;
  - As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado `imgs` com os respectivos nomes `meme1.png`, `meme2.png`, `meme3.png` e `meme4.png`. ⚠️ Atenção também para o formato das imagens! 
  - As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.

  **O que será testado:**

  - Cada uma das miniaturas devem possuir os `ID` `meme-1`, `meme-2`, `meme-3`, `meme-4` respectivamente;
  - As imagens devem estar salvas no diretório `imgs` na raiz do projeto;
  - As imagens devem possuir nome `meme1.png`, `meme2.png`, `meme3.png` e `meme4.png`;
  - As imagens devem aparecer no preview de visualização conforme clicadas.

</details>
