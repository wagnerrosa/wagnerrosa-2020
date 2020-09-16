---
layout: blogpost
title: Conectar Formulário HTML 5 com Google Forms
subhead: Descobri. Sim! It's possible.
permalink: /formulario-html5-para-google-forms/
---


Descobri. Sim! It's possible.   
Criar um formulário em HTML5 onde as informações captadas são enviadas para um e-mail e ainda ficam guardadas em uma planilha para controle e análise dos dados???   

Sim! E sem conectar com um banco de dados! (otimizando o desempenho do site!)

Dessa forma é possível ter um formulário em servidores que não suportam PHP como o [GitHub Pages](https://pages.github.com/) utilizando [website em Jekyll](wagnerrosa.com/artigos/criar-blog-jekyll-github-pages/).

E eu vou tentar resumir aqui de um jeito bem raso o processo, até porque é o jeito que eu sei fazer mesmo. ;)

## Qual era a ideia?

![Formulário de contato em HTML5](/assets/img/post3/formulario-contato-html5.png){: .half .right}

Nesta última semana estava precisando criar um formulário de contato básico com __Nome, E-mail, Empresa e Mensagem__. Mas com uma __"ousadia diferente"__: além de receber a mensagem do remetente haveria uma pergunta com _"escolha em lista"_, onde o usuário marcaria "onde nos encontrou". __Parecia uma ideia simples.__  

Porém, na hora de colocar em prática não encontrava soluções para isso. Apenas sugestões em fóruns e artigos de utilizar a opção ``":mailto"``, ou criar uma página em PHP programada para enviar o conteúdo para o seu e-mail, e bla bla bla. Quase desisti e me contentei com um __mailto:__ envie um email __clicando aqui__.

## Resolução  

Após passar um dia quebrando a cabeça tive a ideia do [Google Forms](https://www.google.com/forms/about/). Não a ideia de usar o formulário do google em si _(pois já havia pensado antes e não me agrada o resultado do simples embed no site)_, mas utilizar o serviço de armazenamento das informações. Dessa forma teria um ficheiro online guardando toda a informação que capto através do formulário e ainda criando automaticamente uma análise nas respostas da minha pergunta de escolha em lista. 

Eu já havia criado o meu formulário em HTM5 (como mostrado na imagem acima) então bastou o seguinte:  

- Criei um formulário igual no Google Forms,
- Alterei os valores do formulário em HTML 5 pelos do Google Forms (Action e Names),
- Instalei um complemento de notificação por e-mail.   
   

![Formulário de contato em HTML5](/assets/img/post3/formulario-contato-google.png)


### Valores Action e Names

O grande truque da jogada, que eu __não havia pensado antes__, é como cruzar para que o meu __formulário em HTML5 envie as informações para o Google Forms__. Para isso lembrei de como funciona no [Mail Chimp](http://mailchimp.com/), onde também posso utilizar o meu próprio formulário para captar o e-mail dos visitantes e enviar para o banco de dados no Mail Chimp para futuramente enviar _e-mails marketing_. 

Para isso, bastava __publicar online o Formulário do Google__ e inspecionar a página exibindo o __código fonte__. Os valores que eu estava em busca eram o ``<form action="">`` e o ``<input name="">``

[![Form Action - Google Formulário](/assets/img/post3/formulario-contato-google-action.png){: .half .right}](http://wagnerrosa.com/img/post3/formulario-contato-google-action.png)
Encontrei o ``<form action="">``, copiei e colei no meu formulário em html. 

[![Form Name - Google Formulário](/assets/img/post3/formulario-contato-google-name.png){: .half .right}](http://wagnerrosa.com/img/post3/formulario-contato-google-name.png)

Em seguida busquei pelos ``<input name="">``, que para cada pergunta havia um. Copiei todos e substituí os que haviam no meu formulário em html, de acordo com cada input (Nome, E-mail, Empresa, Onde nos encontrou e Mensangem).  

Os ``<input name="">`` estavam com valores ``entry.19xxxx`` que deve ser o padrão do google.

_É possível visualizar melhor as imagens clicando, para facilitar a leitura da sintaxe em html._   

O meu HTML com os valores do google forms ficou assim:

{% highlight html %}
{% raw %}

<!-- Google Action -->
<form action="https://docs.google.com/forms/d/1A6(...)" target="_self" onsubmit="">
   
<!-- Google Name -->	
	<input name="entry.19727xxx1" placeholder="Nome" type="text"/>
	<input name="entry.19727xxx2" placeholder="E-mail" type="email">
	<input name="entry.19727xxx3" placeholder="Empresa" type="text">
	<select name="entry.19727xxx4" id="entry_1861727890">
		<option value="">- Onde nos encontrou? -</option>
		<option value="entry.19727xxx5">Pesquisas na internet</option>
		<option value="entry.19727xxx6">Indicação</option>
		<option value="entry.19727xxx7">Outros anúncios</option>
	</select>

{% endraw %}
{% endhighlight %}

### Enviar informações por e-mail

Obviamente dessa forma o formulário capta as informações e apenas guarda em um ficheiro no Google Drive. Porém desejo ser avisado toda vez que alguém enviar um formulário, pois o motivo principal é o __envio da mensagem__. 

Além da opção do Google Planilhas em __Ferramentas > Regras de Notificação__, também é possível a __instalação de complementos__. Então pesquisei e encontrei um complemento chamado [Simply Send](https://chrome.google.com/webstore/detail/simply-send/dfpmmnbflloldgmcbmpcgiklcckibeff?utm_source=permalink), que pôde ser configurado para que __toda vez que um formulário é encaminhado eu receba um e-mail com as informações inseridas__. 

## Conclusão

A partir de agora, __sem interferir no desempenho do site__, o simples formulário criado em HTML5 consegue cumprir as função de:

1. Enviar a mensagem do cliente para o meu e-mail;
2. Guardar informações (Nome, E-mail, Empresa) como uma _"Cartela de Clientes"_;
3. E ainda analisar os dados de forma fácil e resumidamente.

![Resumo das Respostas do Google Form](/assets/img/post3/formulario-contato-google-resumo-respostas.png)
_Imagem do Resumo das Respostas disponível no Google Form_
