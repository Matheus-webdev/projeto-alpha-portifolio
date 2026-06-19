# Matheus Souza — Portfólio Pessoal

Portfólio profissional desenvolvido como trabalho acadêmico, demonstrando domínio de HTML5, CSS3 e JavaScript Vanilla com foco em semântica, responsividade e boas práticas.

**Acesse:** [matheus-webdev.github.io/projeto-alpha-portifolio](https://matheus-webdev.github.io/projeto-alpha-portifolio)

---

## Histórico de Commits

### `feat: add initial project structure`

Arquitetura base do projeto com HTML5 semântico, CSS3 com design system via variáveis, e JavaScript Vanilla modular. Estrutura de diretórios limpa com separação de responsabilidades.

- `index.html` — Estrutura semântica completa (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `style.css` — CSS Variables, reset, container, tipografia e botões
- `script.js` — Estrutura modular para funcionalidades futuras
- Paleta: `#0f1115` (bg), `#181c24` (cards), `#242938` (bordas), `#4f8cff` (destaque)

---

### `feat: add hero and about sections`

Seção de apresentação principal e seção "Sobre Mim" com layout responsivo em grid.

- Hero com título, subtítulo, descrição e dois CTAs
- Sobre Mim com grid de duas colunas (texto + card de abordagem)
- Botões com variantes `primary`, `secondary` e `ghost`
- Animações de entrada via Intersection Observer

---

### `feat: add education and skills sections`

Seção de formação acadêmica e seção de habilidades técnicas com cards categorizados.

- Card da Alpha EdTech com período e itens de destaque
- Grid de tecnologias (HTML5, CSS3, JavaScript)
- Grid de ferramentas (Git, GitHub, Vercel, VS Code)
- Seção "Atualmente Aprendendo" com indicador pulsante
- Responsividade dos grids (2 → 3 → 4 colunas)

---

### `feat: add projects and journey sections`

Seção de projetos em destaque e roadmap visual de aprendizado.

- Cards de projeto com imagem, tags, descrição e links (demo + repositório)
- Projeto "Jogo Pelicanos Azuis" com destaque especial
- Projeto "Paixão Suplementos" com badge "Em desenvolvimento"
- Jornada em 4 colunas: Concluído → Estudando → Próximos Passos → Objetivo Futuro
- Cybersegurança como objetivo futuro apenas

---

### `feat: add contact section and footer`

Seção de contato com links para GitHub, LinkedIn e e-mail, além do rodapé.

- Links de contato com ícones SVG inline (zero dependências externas)
- Ícones de redes sociais no footer
- Footer com nome, frase e ano dinâmico via JavaScript

---

### `feat: add scroll animations and intersection observer`

Sistema de animações baseado em Intersection Observer para revelar elementos durante o scroll.

- Fade-in suave para seções ao entrar na viewport
- Fade-in-up para cards individuais
- Stagger effect para grids de cards (delay progressivo)
- Hero com entrada escalonada (tag → título → descrição → CTAs)
- Section headers com fade sequencial (tag → título)
- Active nav link highlighting baseado na seção visível

---

### `feat: add responsive design and mobile menu`

Layout mobile-first com navegação adaptativa e menu hamburger animado.

- Breakpoints: 320px, 379px, 600px, 768px, 1024px, 1280px, 1920px
- Mobile menu com slide-in lateral e overlay escuro
- Hamburger animado (3 linhas → X)
- Grid layouts adaptativos (1 → 2 → 3 → 4 colunas)
- Botões em coluna no mobile, em linha no desktop
- `prefers-reduced-motion` para acessibilidade

---

### `style: add hover effects and transitions`

Micro-interações e refinamentos visuais para melhor experiência do usuário.

- Hover com elevação em cards de projeto (`translateY(-3px)`)
- Hover com destaque em skill cards
- Botão primário com glow effect no hover
- Nav links com underline animado via `::after`
- Transições suaves em todos os elementos interativos
- Hover nos links de contato com inversão de cor do ícone

---

### `style: add animated hero gradient, floating glow, grid background, and noise texture`

Background animado no hero com gradiente em movimento e glow flutuante, grid tecnológico sutil no fundo e granulação (noise) para profundidade visual.

- Gradiente animado no hero com `background-size: 400%` e animação `gradientShift`
- Glow desfocado (`500px`, `blur(120px)`) animado com `floatBlob`
- Grid de linhas finas (`rgba(255,255,255,0.02)`) como textura de fundo
- Noise overlay com SVG `feTurbulence` e `mix-blend-mode: overlay`

---

### `feat: add 4 real project cards with descriptions and update counter to 5`

Substituição dos placeholders por projetos reais com descrições completas e contadores atualizados.

- Cards: Cookies Boho (profissional), Jogo Pelicanos Azuis, Paixão Suplementos, Matuto Dev
- Cada card com tags, descrição e links (demo + repositório)
- Projeto em destaque com borda accent (`projeto-card--featured`)
- Contadores da seção Jornada atualizados para refletir projetos e tecnologias reais

---

### `fix: email ultrapassando card de contato`

Correção de overflow do e-mail na seção de contato — o texto ultrapassava a área do card em telas menores.

- `word-break: break-all` para quebrar o e-mail longo em qualquer caractere
- `overflow-wrap: break-word` como fallback
- `max-width: 100%` para limitar ao tamanho do container

---

### `fix: email ultrapassando — min-width: 0 e width: 100% no handle`

Ajuste fino no layout flex para garantir que o handle do e-mail respeite os limites do card de contato.

- `min-width: 0` no `.contato__link-handle` para permitir encolhimento em flex container
- `width: 100%` no breakpoint desktop (768px+) para ocupar largura total no layout em coluna

---

### `update: habilidades atualmente aprendendo`

Substituição dos itens da seção "Atualmente Aprendendo" e criação de nova categoria "Aprendizados Pessoais".

- Novos itens em aprendizado: Agents de IA, Engenharia de Prompt, Arquitetura de Dados, Manipulação de DOM Avançado
- Itens removidos (React, Node.js, Banco de Dados, Cybersegurança) movidos para novo grupo "Aprendizados Pessoais"

---

### `update: tags profissional e em desenvolvimento`

Marcação dos projetos comerciais como profissionais e em desenvolvimento.

- Cookies Boho: adicionada tag "Em Desenvolvimento"
- Paixão Suplementos: adicionadas tags "Profissional" e "Em Desenvolvimento"

---

### `update: botoes ver codigo alterados para em desenvolvimento`

Substituição dos botões "Ver Código" por "Em Desenvolvimento" nos projetos profissionais.

- Cookies Boho: botão "Ver Código" substituído por "Em Desenvolvimento" (desabilitado)
- Paixão Suplementos: botão "Ver Código" substituído por "Em Desenvolvimento" (desabilitado)
- Indicação visual de que o código ainda não está disponível publicamente

---

### `fix: remove tags em desenvolvimento amarelas e adiciona btn--warning`

Remoção das tags "Em Desenvolvimento" (amarelas) dos cards de projeto e estilização dos botões correspondentes na cor amarela.

- Tags "Em Desenvolvimento" removidas dos cards Cookies Boho e Paixão Suplementos
- Novo estilo `btn--warning` com fundo amarelo translúcido e borda amarela
- Botões "Em Desenvolvimento" agora usam `btn--warning` no lugar de `btn--disabled`

---

### `update: substitui matuto dev por pelicanos azuis fc (sitep.a)`

Substituição do projeto Matuto Dev pelo site institucional do time Pelicanos Azuis FC.

- Projeto removido: Matuto Dev (site educacional)
- Projeto adicionado: Pelicanos Azuis FC — site com elenco, fotos e frases dos jogadores
- Repositório: `Matheus-webdev/sitep.a`
- Links atualizados para demo e código

---

### `fix: atualiza contador de projetos de 5 para 4`

Correção do contador de projetos na seção Jornada para refletir o número atual de projetos no portfólio.

---

## Tecnologias

- **HTML5** — Semântico e acessível
- **CSS3** — Variables, Flexbox, Grid, Mobile First
- **JavaScript** — Vanilla, Intersection Observer, DOM
- **Fonte:** Inter (Google Fonts)

## Contato

- GitHub: [Matheus-webdev](https://github.com/Matheus-webdev)
- LinkedIn: [matheusleonardp](https://www.linkedin.com/in/matheusleonardp/)
- E-mail: matheusleonardoo2008@gmail.com
