---
layout: blogpost
title: Como eu criei facilmente um Blog Minimalista usando Jekyll e Github Pages.
subhead: MUITO SIMPLES. ELEGANTE. WOW.
permalink: /criar-blog-jekyll-github-pages/
---

Eu recentemente criei alguns blogs em [Wordpress](http://wordpress.org/) para amigos, conhecidos, clientes, etc. Possuo um leve conhecimento na lógica do sistema em Wordpress que aprendi lendo muitos tutoriais, do restante apenas:


* como comprar e apontar o domínio, 
* modificar arquivos e organizar (HTML, CSS),
* e transferir os arquivos em FTP para o servidor usando um software como [FilleZilla](https://filezilla-project.org). 


Porém, nunca achei atraente ter que modificar ou arrumar os problemas que surgem em `PHP`. E já me perguntaram muitas vezes o porque de eu não ter um Wordpress para mim. Na minha cabeça essa resposta era muito clara:  


* O editor de texto WYSIWYG presente no Wordpress torna muito difícil de saber como o seu texto vai ficar quando transformado em HTML (e se acrescentar imagens junto, pior),
* Eu achava o sistema de plugins muito confuso e a cada adição de um novo ou atualização é um verdadeiro pavor para não dar algum _crash_ com a base de dados,
* O processo de Backup é cansativo e preocupante para um usuário _normal_,
* A ideia de ter um banco de dados com todo o meu conteúdo nele só me dava preocupações após as experiências más que tive em ter de migrar um Wordpress,
* E sempre que eu realizasse alguma alteração no site estava com medo de acontecer alguma mudança a mais sem eu ter a menor ideia do que aconteceu.


Então, caso tenha caído nesse Artigo pensando que irei ensinar ou dar dicas de como criar, hospedar/alojar um site/blog em Wordpress você está no lugar errado. Se tiver essa intenção aconselho dar uma olhada no [WP Total](https://www.wptotal.com/), nesse site há tutoriais de qualidade para diversos assuntos envolvedo Wordpress e eu não tenho paciência nem competência para o mesmo.

### Sobre o [Jekyll](https://jekyllrb.com/)

Então, eu estava na última semana estudando _Ruby on Rails_ já com a intenção de ter a capacidade de construir [websites com CMS](https://en.wikipedia.org/wiki/Web_content_management_system) (Sistema de Gestão de Conteúdos) sem ficar refém do Wordpress e não ter mais que forçadamente ver o tal do PHP. Os estudos de Ruby on Rails foram uma janela para descobrir ferramentas que desconhecia para elaboração de Aplicações para a Web e encontrar uma _"comunidade"_ online de pessoas agindo de forma colaborativa em construção de projetos incríveis. Dentre eles o [Bootstrap](http://getbootstrap.com/)... e o próprio [JEKYLL](https://jekyllrb.com/).

Quando eu li sobre a simplicidade e ideia por trás do Jekyll fiquei impressionado como essa ferramenta pode mudar totalmente a forma de ter um blog online. Dessa forma, todo o conteúdo do blog é um conjunto de arquivos estáticos. Os artigos podem ser escritos em qualquer editor de texto, até mesmo no seu celular/telemóvel, e-mail, bloco de notas, através do [Markdown](https://daringfireball.net/projects/markdown/). Além de toda essa simplicidade, realizar backups assim é muito mais fácil e muito mais seguro em comparação com os erros comuns causados pela execução de sites dinâmicos.

Isso tudo vêm acompanhado de um __grande DIFERENCIAL__, o GitHub oferece __[hospedagem gratuita para blogs Jekyll](https://pages.github.com/)__ (no caso _alojamento_ gratuito para quem está em Portugal). Com base na minha experiência, as alternativas para ter um blog em Wordpress hospedado/alojado com qualidade de forma gratuita são muito pequenas e o que melhor tive resultados foi o [Hostinger](www.hostinger.com.). Porém, o servidor apresentava muitos problemas (conexão com a base de dados e velocidade dessa conexão) e _delays_, quando _logado_ em _backoffice_, eram constantes. Dessa forma, com o GitHub eu posso economizar uns 20 euros por ano em hospedagem, além de poder realizar um controle de versão automático do blog. Com esse meio, é possível usar o editor web do GitHub para escrever posts online - ou realizar alterações - e ainda conectá-lo diretamente ao meu domínio pessoal (wagnerrosa.com).

### Como funciona?

Tá bom. Você de alguma forma conseguiu concordar comigo, ou está curioso em testar novidades - ou apenas está entediado -, e o motivo de eu estar escrevendo este artigo é que quando fui realizar todo o processo só encontrei Websites com explicações e opiniões em inglês. Então, caso você tenha facilidade para ler em inglês e queira um artigo mais detalhado e especializado de alguém que realmente passa mais credibilidade do que eu, aconselho ler o do [Barry Clark](http://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/), que inclusive [criou um template de Jekyll](http://www.barryclark.co/introducing-jekyll-now/) muito elegante e completo.

Então, como havia mencionado acima, Jekyll é uma ferramenta em open source que cria um website estático com dinámicos componentes, etc. 

> _"Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through Markdown (or Textile) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server." -ANAND MANI SANKAR_

Jekyll pode ser configurado utilizando um editor de texto simples e quando você realiza alguma alteração na "parte interna" ele automáticamente realiza as mudanças e acrescenta/ou modifica os arquivos na pasta que fica disponível ao público. Dessa forma, os arquivos disponíveis ao público são vistos como um simples website estático, inclusive os artigos (não necessitando de uma base de dados). Então, considerando que o Github roda o Jekyll internamente já é o suficiente para você ter um blog de forma rápida e simples e com a possibilidade de utilizar templates e atualizar quando quiser com novos posts.

### Como fazer?

A forma mais fácil e rápida de ter o seu Website/Blog em Jekyll online é utilizando diretamente a plataforma do GitHub. E para isso basta ir ao site e criar uma conta. Após a conta criada vêm os seguintes passos, que demora aproximadamente 5 minutos:

#### 1. Escolha um template e dê um Fork
Acesse o site [JekyllThemes](http://jekyllthemes.org/) e escolha um dos vários templates disponíveis para utilização. Após escolhido o template, selecione a opção __Fork__ disponível na parte inferior esquerda da tela, como demonstrado na imagem a baixo.

![Dar um Fork](/assets/img/post02/img4.png)

Ao selecionar o opção __Fork__, você __criará uma cópia do Projeto__ (template escolhido) em um novo __repositório na sua página de perfil do Github__. Portanto, se houver a pergunta "onde você deseja realizar o Fork" apenas selecione seu perfil e aguarde realizar a cópia.

A partir de agora, você possui em seu perfil uma cópia do template escolhido e ele encontra-se nos __SEUS REPOSITÓRIOS__.  Então, basta ir na opção __Settings__ e __alterar o nome do repositório__ para __seunomedeusuário.github.io__. Este será o seu futuro domínio, no meu caso ficou _wagnerrosa_.github.io.

![Dar um Fork](/assets/img/post02/img5.png)


Após isso, o seu site ficará imediatamente disponível através do nome do seu repositório, que no caso será __seunomedeusuário__.github.io. Acesse para testar. (Se não estiver, o próximo passo forçará isso).

#### 2. Altere os arquivos

Nos arquivos disponíveis dentro do repositório você irá perceber que eles possuem básicamente a seguinte estrutura:

{% highlight html %}
{% raw %}
		.
		|
		|-- _config.yml
		|
		|-- _includes
		|       |
		|       |-- head.html
		|       |-- ...
		|
		|-- _layouts
		|       |
		|       |-- page.html
		|       |-- post.html
		|       |-- ...
		|
		|-- _posts
		|       |
		|       |-- 2014-01-01-blog.md
		|       |-- ...
		|
		|-- index.html
{% endraw %}
{% endhighlight %}
No arquivo _config.yml é onde se contra as configurações principais do Website. Clique em cima dele para poder acessar a sua página de edição. Clique no lápis para poder alterar as informações e substitua pelo seus dados. Lembrando que a página url deve ser __seunomedeusuario.github.io__. (se o exemplo do template possui na frente do domínio o __http://__ mantenha também no seu.)

![Editar o _config.yml](/assets/img/post02/img6.png)

Após realizar as alterações necessárias, role a página um pouco para a baixo e encontre a opção de __Commit Changes__. 

> O _Commit_ funciona como um controle das alterações que você realiza no seu repositório. Cada mudança realizada é marcada com um Commit. Você pode nomear e até mesmo descrever quais foram as mudanças que fez, tendo assim um controle de versões dos arquivos do seu Site/Blog. Esse sistema será utilizado em qualquer modificação/adição/remoção de arquivos dentro do GitHub, incluse na criação de Posts. 


![Dê um Commit](/assets/img/post02/img7.png)

#### 3. Crie um Post

Para a criação de um Post, Artigo, _Whatever_... basta ir a pasta `_posts`, criar/ou alterar um novo arquivo e salvar no mesmo sistema de _Commits_ como descrito no passo anterior. Tenha __atenção no nome que salva o arquivo__ de Post. Geralmente, por padrão, o Jekyll ordena e reconhece esses arquivos pelo nome __ano-mês-dia-nome-do-post.formato__. Antes de realizar alterações observe atentamente os Artigos que já existem originalmente no template, o nome, formato, etc. E sempre que for realizar um novo Post mantenha a __mesma estrutura__. 

Como exemplo, o cabeçalho do arquivo de um artigo (que é um [Front Matter em YAML](http://jekyllrb.com/docs/frontmatter/) no Jekyll), geralmente possui (no minímo) as seguintes informações:

{% highlight html %}
{% raw %}

---
layout: post
title: Título do seu Artigo
---

{% endraw %}
{% endhighlight %}

Já o texto do artigo é escrito em [Markdown](https://daringfireball.net/projects/markdown/), então caso queira saber as regras para poder dar ênfase ao texto com negrito, itálico, criar títulos, subtítulos, listas,... dê uma olhada em [tutoriais que explicam as regras](http://web.fcm.unl.pt/moodle/help.php?file=markdown.html) de escrita.

>Bom, se você chegou até aqui e não possui um domínio personalizado (seudominio.com), pode dar um tapinha nas próprias costas e comemorar. Seu website/blog está pronto e basta continuar alimentando ele com as edições necessárias diretamente no GitHub realizando novas Commits. 

#### 4. Aponte seu domínio (Opcional)

Para apontar o seu domínio para o GitHub há um [tutorial diretamente na página oficial](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/). Mas, _caso ainda não tenha mudado_, quando eu realizei o apontamento alterei o domínio __wagnerrosa.github.io__ para __wagnerrosa.com__ com os seguintes  passsos:

1. Criei um arquivo no meu repositório nomeado CNAME (o nome deve ser em _Capslook_)
2. No arquivo CNAME digitei apenas o meu domínio wagnerrosa.com (sem http:// ou www)
3. Fui até meu serviço de domínio (no meu caso o [GoDaddy](https://www.godaddy.com/
)) e apontei o __host @__ para os servidores __192.30.252.153__ e __192.30.252.154__.

Você pode olhar diretamente o [meu repositório](https://github.com/wagnerrosa/wagnerrosa.github.io/blob/master/CNAME) e ter como referência.



### Rodar diretamente no computador (Opcional)

Eu gostaria de ter o projeto em meu computador para poder modificar, customizar, realizar testes e apenas com algumas linhas no comando do Git atualizá-lo com o repositório hospedado no GitHub.

Basicamente, para iniciar o projeto e colocá-lo online eu realizei os seguintes passos:

1. Instalar o Ruby e a GEM do Jekyll,
2. Testar o Jekyll no Computador,
3. Mandar o projeto para o GitHub.



#### 1. Instalar o Ruby
Pelo que percebi, o Jekyll necessita da linguagem __Ruby__ instalada no computador em no mínimo __versão 2.0__ (eu estava com a v-1.9.3 que usava com ruby on rails e tive de atualizar) . Caso você não tenha instalado o Ruby, basta acessar o site [Ruby Installer](http://rubyinstaller.org/) baixar o arquivo e apertar seguinte, seguinte, seguinte... Existe um excelente tutorial sobre [como instalar Ruby, Rails, Git e MySQL](https://nandovieira.com.br/configurando-ruby-rails-mysql-e-git-no-windows) no windows escrito pelo Nando Vieira. Caso não saiba como fazer vale dar uma olhada.

Após ter instalado o Ruby é necessário ter a GEM do Jekyll instalada no computador. As GEMs são como bibliotecas criadas por terceiros reusáveis que facilita a criação de novos projetos. Um exemplo de GEM é o próprio _On Rails_. Uma GEM criada para facilitar a programção em Ruby. Para instalar o GEM do Jekyll basta abrir seu terminal e digitar:

	~ $ gem install jekyll

Caso tenha algum erro, falte algo - ou aconteça algum problema -, irá aparecer alguma mensagem no seu terminal dizendo qual o problema está acontecendo e como solucioná-lo (incluindo o quê deve fazer/instalar e em qual site encontrar). Aconteceu comigo, no caso necessitando de um novo DEVKIT, como eu havia realizado um Update no meu Ruby para o 2.0 ele estava desatualizado. Mas o mesmo você encontra no site [Ruby Installer](http://rubyinstaller.org/). É realmente um processo bem intuitivo.

#### 2. Testar o Jekyll no Computador

Após toda aquela "burocracia" chegou o momento de testar esse negócio e colocar para funcionar. No terminal com os seguintes comandos é possível criar um projeto e já colocar ele online em um servidor local. Nesse caso o Jekyll usa o [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

	~ $ jekyll new nome-projeto
	~ $ cd nome-projeto
	~/nome-projeto $ jekyll serve

O Jekyll possui diversos comandos, e funções. Caso você queira aprender outros, há toda a documentação no próprio [site do Jekyll](https://jekyllrb.com/docs/usage/).

__DICA:__ o comando `jekyll serve --w` permite levantar o servidor do Jekyll apresentando as modificações em tempo real. É atualmente o que mais estou utilizando para realizar modificações e testes no layout e pré visualizar como vão ficar as formatações dos Artigos.

#### 3. Mandar o projeto para o GitHub

Para mandar o projeto ao GitHub basta realizar simples comandos no Terminal na pasta onde se encontra o seu projeto. Aconselho dar uma olhada no [Guia Prático de Git do Roger Dudle](http://rogerdudler.github.io/git-guide/index.pt_BR.html) caso não conheça os comandos do Git. 

Existem dois cenários possíveis, mas é praticamente o seguinte raciocínio:

#### 3.1 [cenário 1] Já realizou o Fork no Github
Se você já realizou o Fork do Template/Tema do Site e ele já se encontra na sua conta do Github, então você deve fazer um "Clone" - uma cópia- do arquivo para o seu computador. Para isso, navegue até o local do seu computador onde deseja realizar a cópia pelo Terminal e use o comando:  

`git clone usuário@servidor:/caminho/para/o/repositório`.

#### 3.2 [cenário 2] Está com o site apenas no Computador
Se você não fez nenhum Fork, apenas baixou os arquivos/ficheiros do template para o seu computador -ou criou um template do zero-, você deve criar um novo repositório no site do github e dar o comando de iniciação de um novo controle de versões em git, através do comando:

`~ $ git init`

#### 3.3 Enviando alterações ao GitHub

Após ter realizado umas das opções acima, dependendo da situação (3.1 ou a 3.2), é só enviar as alterações ao Github. Os comandos são basicamente o seguinte:  

`~ $ git add *` - Para adicionar os arquivos ao Git (localmente)  
`~ $ git commit -m "comentários das alterações"` - para salvar as alterações que adicionou ao Git  
`~ $ git push origin master` - Enviar as alterações ao GitHub  


__DICA:__ Você deve estar com o Git instalado no seu computador, se não o terminal não reconhecerá os comandos do Git. Além disso, eu no momento da instalação devo ter marcado algo que não permiti o acoplamento dos comandos em meu Terminal padrão, dessa forma o git não funciona em um Prompt de Comando padrão do sistema e devo sempre utilizar o próprio terminal do Git (estou com preguiça para re-instalar e não me perturba ter de ser assim).

### Conclusão

Simplicidade. Esse é um dos grandes fatores que diferem o Jekyll quando, a partir de agora, penso em criação de um pequeno blog/site voltado mais ao conteúdo do que _style_. Com o mínimo possível você pode iniciar um blog e não ter centenas de arquivos em `.php`, com códigos difíceis de entender inicialmente e sem dependência de um banco de dados (tornando o tempo de carregamento da página consideravelmente mais rápido e sem depender de ter um servidor que suporte o banco necessário.) 

Dá para perceber que o público em foco que utiliza Jekyll atualmente são desenvolvedores, mas com a possibilidade de hospedagem do Github Pages - tornando assim possível a criação de um "site" apenas possuindo uma conta na plataforma e apertando em "Fork" - é uma grande facilidade para um "usuário intermediário" com apenas __paciência__ para aprender uma nova ferramenta criar o seu Blog de forma rápida. 

#### Leituras recomendadas sobre o Assunto
* [Guia Prático de Git do Roger Dudle](http://rogerdudler.github.io/git-guide/index.pt_BR.html).  
* [Como instalar Ruby, Rails, Git e MySQL, por Nando Vieira](https://nandovieira.com.br/configurando-ruby-rails-mysql-e-git-no-windows).  
* [Documentação do Jekyll, no site oficial](https://jekyllrb.com/docs/home/).  


