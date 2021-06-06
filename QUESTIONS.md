### Perguntas de Javascript

1. Explique com suas palavras a diferença entre a utilização de var, const e let.

   Todas as opções são utilizadas para declaração de variáveis no javascript, mas elas se diferem em escopo e atribuição de valores. A palavra *var* é utilizada para declarar variáveis em escopo global e de funções, e não em escopo de blocos, como a palavra *let*. Ambas podem ser declaradas sem inicialização. Os escopos de bloco e de função podem ser vistos no exemplo abaixo:

   ```javascript
   function testScope() {
     if(someCondition) {
       var functionScope = 'function';
       let blockScope = 'block';
       console.log(blockScope); // block
     }
     console.log(functionScope); // function
     console.log(blockScope); // variável desconhecida
   }
   console.log(functionScope); // variável desconhecida
   ```

   Por fim, a palavra *const* indica que a variável criada deve ser inicializada no momento de sua declaração e não pode ter seu valor modificado posteriormente: é uma *constante*.

   ```javascript
   const emptyConstant; // erro
   const constant = 32;
   constant = 20; // erro
   ```

---

2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions.

 - [ ] Funções normais não guardam escopo  
 - [x] Funções normais guardam escopo  
 - [ ] Arrow function são mais rápidas  
 - [ ] Arrow function podem ser instanciadas  
 - [x] Arrow function não guardam escopo  

---

3. qual o valor da constante name após a execução da função?

```javascript
 content = {
  name: "John",
  getName: function() {
    this.name = "James"
    return this.name
  }
}

userData = {
  name: "Luke",
  getName: content.getName
}
this.name = "Walter"
const name = userData.getName()

```
 - [ ] John
 - [ ] Luke
 - [x] James
 - [ ] Walter

---

4. Qual o retorno da função event.getTitle()

```javascript
function Event(name, day) {
  this.date = day
  this.name = name

  this.getName = function() {
    return this.name
  }
  this.getDate = function() {
    return this.date
  }
}

const event = new Event("04/02/2019", "Event Test")

Event.prototype.getTitle = function() {
  return `The event ${this.name} will take place on ${this.date} `
}
event.getTitle()

```

 - [x] The event 04/02/2019 will take place on Event Test
 - [ ] The event undefined will take place on undefined
 - [ ] Uncaught TypeError
 - [ ] The event null will take place on null

---

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

   Elementos podem ser acessados através de alguns métodos disponíveis no objeto *document* e também por outro elemento, que seja um elemento pai do elemento desejado. O objeto *document* acessado diretamente pelo escopo global do javascript (objeto window) possui os seguintes métodos:

   - document.getElementById(id) - retorna o elemento que possui o ID especificado nos parâmetros. Como ID é único, retorna somente um elemento;

   - document.getElementsByClassName(class) - retorna o elemento que possui a classe especificada nos parâmetros. Como mais de um elemento pode possuir a mesma classe, retorna uma lista;
   - document.getElementsByTagName(tag) - retorna o elemento pela tag especificada nos parâmetros. Exemplos de tags: p, div, span, etc. Também retorna uma lista, pelo DOM poder possuir vários elementos de mesma tag. É um seletor mais genérico. 
   - document.getElementsByName(name) - retorna o elemento pelo valor do atributo name, especificado nos parâmetros. Retorna uma lista, pois campos podem ter o mesmo name

   - document.querySelector(seletor) - método utilizado para retornar o primeiro elemento que cumpra com o parâmetro. Seu parâmetro deve ser uma string com um ou mais seletores CSS, separados por vírgula. Ex: ".class", "#id", "div.class", etc.
   - document.querySelectorAll(seletor) - mesma característica do método anterior, com exceção ao fato que retorna uma lista de elementos que cumpram com o seletor especificado no parâmetro, e não somente o primeiro.

---

6. Como inserir um evento em determinado elemento?

   Os eventos pré-definidos (como "click" e "onload") podem ser "escutados" para que determinados códigos sejam executados quando os eventos são disparados. Isso é possível através do método Element.addEventListener(). Basicamente, para inserir um callback, basta definir qual evento deve ser escutado (primeiro parâmetro) e a função de callback que deve ser chamada quando o evento for disparado (segundo parâmetro).

   ```javascript
   function callback() {}
   
   elemento.addEventListener("click", callback);
   ```

   Toda vez que o elemento for clicado, o callback será chamado.

   Para *inserir eventos* customizados no elemento (que não os pré-definidos), é preciso criar seu evento com a classe CustomEvent e então dispará-lo com elemento.dispatchEvent(evento).

---

7. Como remover um evento em determinado elemento?

   Para remover eventos adicionados, basta utilizar o método Element.removeEventListener() com os mesmos parâmetros utilizados no método Element.addEventListener(), para que seja especificado qual o exato *listener* a ser removido, já que diversos callbacks podem ser definidos para o mesmo evento e mesmo elemento

---

8. Descreva com suas palavras o que é event bubbling.

   É um efeito de *event listeners* do javascript onde a interação com um elemento filho é propagada para os elementos pai, até chegar ao último elemento aninhado. Ex: Em um cenário que possui 2 elementos aninhados (pai e filho), e ambos possuem um *listener* no click, quando o elemento filho for clicado, o *listener* do elemento pai também será ativado. Para evitar esse comportamento, o callback do *listener* filho deve conter uma chamada ao método event.stopPropagation()

---

9. Descreva qual a diferença nos métodos de declaração de objetos.

```javascript
const object = {}
const object = new Object()
const object = Object.create()
```

---

10. Qual a diferença no uso de XMLHttpRequest e Fetch? E qual devemos usar atualmente?

---

11. O que são Promises? Como podemos declarar uma promise em javascript?

---

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles.

---

13. Quando utilizar map, reduce ou filter?

---

14. Qual o método do Array é mais indicado para remover elementos?

---

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

---

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage.

---

17. Qual a melhor forma para definir um cookie utilizando javascript?

---

18. Quais os tipos de Loops existentes em javascript?

---

19. Descreva com suas palavras o que é hoisting?

---

20. Em um ambiente do browser, qual o valor do this utilizando "use-strict"?

 - [ ] window
 - [ ] global
 - [x] undefined
 - [ ] null

---

21. Quando eu posso utilizar o "Use-strict" no meu código?

 - [ ] No ínicio do meu código
 - [ ] No inicio do block if
 - [ ] No inicio de um loop
 - [ ] no inicio de uma função