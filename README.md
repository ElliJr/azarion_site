⚡ Azairon 

Este é um projeto de demonstração e conceito para uma loja virtual de moda, especializada em camisetas Oversize. O foco está na autenticidade, design moderno e uma experiência de usuário fluida, com autenticação integrada via Firebase.

👕 A Proposta de Valor da Azairon (Foco na Loja)

A Azairon nasceu da cultura urbana e da paixão por peças que combinam conforto extremo com atitude. Não vendemos apenas roupas; oferecemos uma identidade visual forte e despojada.

Produto Central: Camisetas Oversize (modelagem ampla), que garantem caimento relaxado e estilo contemporâneo.

Estilo & Conceito: Foco em estampas minimalistas e gráficas que representam a cultura Streetwear e o lifestyle urbano.

Público-Alvo: Entusiastas de moda urbana, jovens adultos que valorizam o conforto sem abrir mão da autenticidade.

Experiência de Compra: O site foi desenhado com um Dark-Mode elegante, usando o amarelo (#f7d541) como cor de destaque, remetendo a uma estética noturna e moderna. A navegação é intuitiva para que o usuário encontre rapidamente o que procura.

✨ Funcionalidades Principais

Loja Virtual (Shop):

Exibição de produtos em destaque em um layout de grid responsivo.

Detalhes do produto (nome, preço, avaliações, tamanhos disponíveis).

Funcionalidades de e-commerce (Botões Comprar, Lista de Desejos - Wishlist).

Mecanismo de Busca Inteligente: Inclui um Input de pesquisa/filtro para localizar rapidamente peças por nome, cor ou tema da estampa.

Autenticação Completa (Firebase Auth):

Cadastro e Login com Email e Senha.

Login social com Google.

Manutenção de sessão e Logout.

Design Moderno e Responsivo:

Estilo Dark-Mode com cores de destaque (var(--primary-color): #f7d541).

Design totalmente adaptável a dispositivos móveis e desktop, priorizando a visualização do produto.

Animações de rolagem (ScrollReveal) para maior dinamismo visual.

Notificações: Sistema de Toast para feedback de ações (sucesso no login, logout, etc.).

Landing Page: Seções de conteúdo para usuários deslogados ("Como funciona?", "Por que escolher a Azairon?"), funcionando como um catálogo para instigar o cadastro.

🛠️ Tecnologias Utilizadas

Tecnologia

Função

HTML5 / CSS3

Estrutura e Estilização Base (CSS customizado).

JavaScript (ES6+)

Lógica da aplicação, manipulação do DOM e integração com a API.

Firebase Authentication

Gerenciamento de usuários, login e segurança.

Tailwind CSS (CDN)

Classes de utilidade para layouts rápidos.

ScrollReveal

Biblioteca para animações de rolagem.

Font Awesome / Material Symbols

Ícones para UI.

📐 Estrutura do Projeto (index.html)

O projeto é estruturado em um único arquivo index.html para simplificar a implantação, seguindo as melhores práticas de layout moderno:

<header> (Hero Section): Contém a área de boas-vindas, o título principal (H1), a interface de usuário (perfil e botão de Sair/Login) e o modal de autenticação.

<div id="loja-main-content">: Contém a seção de produtos (.shop-section), visível somente após o usuário estar logado. Inclui o Input de Filtro posicionado acima do .product-grid.

section.how e section.features: Conteúdo da landing page para usuários deslogados.

section.cta-final: Chamada final para Ação, incentivando o cadastro.

<footer>: Rodapé com links sociais (Instagram, WhatsApp) e informações de copyright.

🚀 Como Executar Localmente

Para que a Autenticação Firebase funcione corretamente, você precisará de uma configuração válida no seu ambiente:

Clone ou Salve: Salve o conteúdo do index.html em sua máquina.

Configuração Firebase (Necessário!):

Crie um novo projeto no Console do Firebase.

Ative o Firebase Authentication para Email/Senha e Google Sign-In.

Obtenha as chaves de configuração do seu app web.

Variáveis de Ambiente: No ambiente de execução deste código (como o Canvas), as configurações do Firebase e o token de autenticação são injetados automaticamente pelas variáveis globais __firebase_config e __initial_auth_token.

Servidor Local: Para rodar o index.html e garantir que o Firebase funcione, abra o arquivo em um navegador usando um servidor web local (como o Live Server do VS Code).
