# Desafio Front-End da Desbravador Software

**Como executar a aplicação:**  

* Ter o Node instalado e Yarn são pre-requisitos
* Na pasta raiz do projeto execute `yarn` para instalar as dependencias
* Para executar a aplicação rode o comando `yarn start`


**Proposta:**  
Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios mais populares de um determinado usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

**API**: [https://developer.github.com/v3/](https://developer.github.com/v3/)

### **Requisitos técnicos** ###
* **Preferencialmente não utilizar frameworks** Vue, Angular, etc.
* * Utilizar React não será eliminatório
* É obrigatório o uso de rotas.
* Pode usar jquery ou Fetch API, porém **axios** é mais legal.
* O layout deve ser responsivo, seguindo os padrões Bootstrap.

### **Requisitos de negócio** ###

* Eu, como usuário, desejo **buscar** por um usuário do GitHub;
* Eu, como usuário, desejo **ver os detalhes do usuário** buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
* Eu, como usuário, desejo **ver a listagem dos repositórios** desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;
* Eu, como usuário, desejo poder **alterar a ordem da listagem** de repositórios;
* Eu, como usuário, desejo ver uma **página com os detalhes** de um repositório (nome, descrição, ,número de estrelas, linguagem e um link externo para a página do repositório no GitHub), que pode ser clicado na listagem dos repositórios;

### **Critérios de Avaliação** ###

* **Organização do projeto**: Avalia a estrutura do projeto, documentação e uso de controle de versão;
* **Inovação tecnológica**: Avalia o uso de tecnologias mais recentes, como novas características ES6 da linguagem;
* **Coerência**: Avalia se os requisitos foram atendidos;
* **Boas práticas**: Avalia se o projeto segue boas práticas de desenvolvimento, incluindo segurança e otimização;


### **Observação** ###
A performance e a adequação dos recursos serão considerados durante o processo de avaliação. Alem disso, a avaliação ocorrerá em todos os componentes do projeto (JavaScript, HTML e CSS).

As APIs a serem consumidas são:
* Detalhes de um usuário: [https://api.github.com/users/{username}](https://api.github.com/users/{username})
* Repositórios de um usuário: [https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)
* Detalhes de um repositório: [https://api.github.com/repos/{full_name}](https://api.github.com/repos/{full_name})

### **Processo de submissão** ###

O desafio deve ser entregue pelo [GitHub](http://github.com/), com README de instalação, start do projeto e visualização da demo.

A aplicação deve estar hospedada (bônus) ([Heroku](https://www.heroku.com/), [Firebase](https://www.firebase.com/), [Plunker](https://plnkr.co/), [Surge](http://surge.sh/), etc) As URLs deve ser enviada por email.

Qualquer dúvida em relação ao desafio, responderemos por e-mail.

Bom trabalho!
