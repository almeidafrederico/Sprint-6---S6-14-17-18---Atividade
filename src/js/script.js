let body = document.querySelector('body')

let tag = document.createElement('p');
tag.innerText  = "Olá, eu sou um tag criada pelo JS";
body.appendChild(tag);

let TagInput = document.createElement('input');
TagInput.placeholder = "Digite um texto";
let form = document.createElement('form');
form.appendChild(TagInput);
body.appendChild(form);

let article     = document.createElement('article');
let h1          = document.createElement('h1');
let p           = document.createElement('p');
let a           = document.createElement('a');

h1.innerText    = "Título do Post";
p.innerText     = "Descrição do Post";
a.innerText     = "Ver post completo";

article.append(h1, p, a);
body.appendChild(article);