# Mão na massa

# Exercícios

**⚠️ Atenção**: A documentação para a `API` que vamos utilizar esta disponível nesse [link](https://docs.coincap.io/).

- Seu objetivo é tentar descobrir qual url vamos utilizar para buscar as informações das quais precisamos, neste caso um `array` que tenha uma listagem das crypto moedas.

Aviso: Caso tenha ficado alguma dúvida, veja a dica a seguir <strong>(spoiler alert!)</strong>
> **Dica**: Por se tratar de uma API pública, a quantidade de requisições a ela é limitada. Com isso, caso se depare com o seguinte erro: `FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0`, significa que você foi bloqueado temporariamente. Para resolver isso, basta esperar 1 ou 2 minutos que poderá voltar a usá-la normalmente.

> **Dica 2**: Sempre que for lidar com requisições, lembre-se de tratar as possíveis falhas utilizando um bloco `try... catch` ou um `.catch()`. Afinal, se falhar sua requisição, como saberemos o que aconteceu? :point_left:

## 1 . Vamos consultar uma `API` que fornece os valores de crypto moedas

<details>
  <summary>Dentro da função <code> fetchCoins</code>, implemente uma requisição que vai consumir a <code>API</code> crypto moedas</summary><br />

Tente identificar qual é o end point que você deverá usar, para isso leia a [documentação](https://docs.coincap.io/)
  
<details>
<summary><strong> De olho na dica 👀 </strong></summary><br />

```
url: `https://api.coincap.io/v2/assets`
```
</details>


  - Dentro do arquivo `apiCoins.js`, faça uma requisição para consumir a `API` dentro da função `fetchCoins`. 
  > Dica: Utilize o `console.log` para verificar se a requisição deu certo.
  

<details>
    <summary><strong> Exemplo de como deve ficar na tela: </strong></summary><br />
  
```javascript
[
   {
    id:"bitcoin",
    rank:"1",
    symbol: "BTC",
    name: "Bitcoin",
    outros...,
    priceUsd: "21913.4381395693292358",
  },
  {
    id:"ethereum",
    rank:"2",
    symbol: "USDT",
    name: "Tether",
    outros...,
    priceUsd: "1.0001155957689619",
  },
   etc...
 ]
```
</details> 


  - Pronto! Agora temos um `array` com os dados das moedas e um esqueleto do HTML.
  
</details>

  
 ## 2. Agora, vamos fazer com que as moedas apareçam na tela. 
 
 <details>
  <summary> Dentro da <code> ul</code> com id <code>coins-list</code>, crie uma <code>li</code> para cada moeda da requisição com base nas orientações a seguir: </summary>
  
  - Todas as <code>li</code> devem estar dentro do <code>ul</code> com id <code>coins-list</code>;

  - Utilize o seguinte formato: `Nome da moeda (símbolo da moeda): valor em dólares`; 
  > Exemplo: `Bitcoin (BTC): 46785.06`.

  ***Dica***: O template ***strings*** mostra na tela `name`, `symbol` e `priceUsd`;

  ***Dica***: O [`toFixed`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) deixa o `priceUsd` com duas casas decimais
</details>  
  
  ## 3. Mostrando somente as 10 primeiras moedas da requisição
  
 <details>
  <summary> Você conseguiu mostrar as moedas na tela? Agora, que tal filtrar o array das moedas para mostrar apenas as 10 primeiras? </summary><br />

   <details>
    <summary><strong> De olho na dica 👀 </strong></summary><br />

     Pesquise no google: "exibir os primeiros elementos de um array javascript".
   </details> 
 </details> 
  
---

# Exercício extra (esse não é testado pelo avaliador)

 <details>
  <summary>Que tal usarmos uma API para converter o preço das criptomoedas em nossa moeda local (R$)? Para isso, crie mais uma lista mas, dessa vez, com os valores em Real.</summary><br />

Aviso: Vamos utilizar a [Currency API](https://github.com/fawazahmed0/currency-api#readme). 

Tente descobrir qual url retorna os dados necessários para este exercício, mas, caso fique na dúvida, pode consultar a dica abaixo:

  <details>
  <summary><strong> De olho na dica 👀 </strong></summary><br />

```js
  baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`  
  endpoint: `/currencies/usd.min.json`
```
  </details> 
 </details> 

---
# (OPCIONAL) Depois de terminar os exercícios

- Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).
