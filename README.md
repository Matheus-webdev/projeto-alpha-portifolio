# Portfólio — Matheus Souza

> Portfólio profissional com tema escuro, design system próprio e animações refinadas. Desenvolvido como trabalho acadêmico para demonstrar domínio de HTML5, CSS3 e JavaScript Vanilla com foco em semântica, responsividade e boas práticas.

**🔗 Aplicação em produção:** [matheus-webdev.github.io/projeto-alpha-portifolio](https://matheus-webdev.github.io/projeto-alpha-portifolio)

**📌 Status do projeto:** `Em desenvolvimento` — Melhorias contínuas de UI/UX e conteúdo.

---

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Matheus-webdev/projeto-alpha-portifolio.git

# 2. Entre no diretório
cd projeto-alpha-portifolio

# 3. Abra o index.html no navegador
#    (você pode dar duplo clique no arquivo ou usar um live server)
```

> **Requisitos:** Nenhum — o projeto é 100% estático (HTML + CSS + JS). Basta um navegador moderno.

Para iniciar um servidor local rápido (opcional):

```bash
# Com Python (já vem instalado na maioria dos sistemas):
python -m http.server 8000

# Ou com Node.js e npx:
npx live-server
```

Depois acesse `http://localhost:8000` no navegador.

---

## Ambiente do Projeto

| Item | Especificação |
|------|--------------|
| **Linguagens** | HTML5, CSS3, JavaScript (Vanilla) |
| **Fonte** | Inter (Google Fonts) |
| **Design System** | CSS Custom Properties (variáveis) |
| **Layout** | Flexbox, CSS Grid, Mobile First |
| **Animações** | CSS `@keyframes`, Intersection Observer, `requestAnimationFrame` |
| **Ícones** | SVG inline (zero dependências externas) |
| **Controle de versão** | Git + GitHub |
| **Deploy** | GitHub Pages |
| **Ferramenta de design** | [Stitch — Design with AI](https://stitch.withgoogle.com/) (Google) |

---

## Inspiração — Google Stitch

O design system deste portfólio foi gerado e inspirado pelo **[Stitch](https://stitch.withgoogle.com/)**, uma ferramenta de design com IA do Google. Através do Stitch, foi criado o arquivo [`DESIGN.md`](./DESIGN.md), que define:

- **Paleta de cores** "Deep Space" com tema escuro de alto contraste
- **Tipografia** baseada em Inter com hierarquia via peso e tracking
- **Sistema de espaçamento** de 8px e grid fluido
- **Elevação** por camadas tonais e outlines de baixo contraste
- **Curvatura** "Soft Technical" (bordas arredondadas suaves)

O prompt original utilizado no Stitch pode ser acessado em:
[https://stitch.withgoogle.com/projects/1360378203330341220](https://stitch.withgoogle.com/projects/1360378203330341220)

---

## Animações Utilizadas

### 1. Gradiente Animado no Hero (`gradientShift`)
- **Arquivo:** `style.css:430`
- Gradiente linear de 4 cores no fundo do hero com `background-size: 400%`
- Movimento cíclico suave em 15s (`ease infinite`)
- Cria uma sensação de profundidade e movimento sutil

### 2. Glow Flutuante (`floatBlob`)
- **Arquivo:** `style.css:450`
- Elemento `::before` com `blur(120px)` de 500px de diâmetro atrás do conteúdo do hero
- Flutua lentamente (`translate`) em 10s (`ease-in-out infinite`)
- Adiciona um ponto focal dinâmico ao fundo

### 3. Grid Tecnológico e Noise (granulação)
- **Arquivo:** `style.css:58` (`body::before`) e `style.css:72` (`body::after`)
- Grid de linhas finas `rgba(255,255,255,0.02)` com `background-size: 50px`
- Noise overlay com SVG `feTurbulence` e `mix-blend-mode: overlay` (opacidade 2%)
- Texturas de fundo fixas que criam profundidade visual

### 4. Fade-in com Intersection Observer
- **Arquivo:** `style.css:1084` e `script.js:65`
- Seções e elementos ganham classe `visible` ao entrar na viewport
- Transição de `opacity: 0` + `translateY(30px)` para `opacity: 1` + `translateY(0)`
- Root margin de `-60px` para ativar um pouco antes do elemento aparecer

### 5. Stagger Effect em Grids (`stagger-children`)
- **Arquivo:** `style.css:1107`
- Filhos de grids (skills, projetos, formação, jornada) entram com delay progressivo
- Delays de 0.1s a 0.5s conforme o índice (`:nth-child`)
- Animação `fadeUp` de 0.6s com `ease`

### 6. Hero Stagger (`hero-stagger`)
- **Arquivo:** `style.css:1123`
- Entrada escalonada dos elementos do hero (tag → título → subtítulo → descrição → CTAs)
- Delays de 0.1s a 0.6s com `heroFadeIn` de 0.6s

### 7. Section Header Stagger (`section-header-stagger`)
- **Arquivo:** `style.css:1140`
- Tag e título de cada seção entram sequencialmente (delays 0.05s e 0.15s)
- Animação `fadeUp` de 0.5s

### 8. Indicador Pulsante (`pulse-dot`)
- **Arquivo:** `style.css:1159`
- Bolinha amarela nos cards "Atualmente Aprendendo"
- Escala 1 → 0.8 e opacidade 1 → 0.5 em 2s (`ease-in-out infinite`)

### 9. Animação de Contadores
- **Arquivo:** `script.js:137`
- Contadores (Projetos, Tecnologias, Formação) animam do 0 ao valor alvo
- 1.5s de duração com easing cúbico (`easeOutCubic`) via `requestAnimationFrame`
- Acionados por Intersection Observer ao entrar na viewport (threshold 50%)

### 10. Progress Bar de Leitura
- **Arquivo:** `style.css:247` e `script.js:126`
- Barra fixa no topo que preenche conforme o scroll da página
- Transição suave de `width` (0.1s linear)

### 11. Header com Blur ao Scroll
- **Arquivo:** `style.css:270` e `script.js:116`
- Header ganha fundo `rgba(15,17,21,0.85)` + `backdrop-filter: blur(12px)` ao passar de 60px de scroll
- Transição suave de 0.3s

### 12. Menu Mobile com Slide-in
- **Arquivo:** `style.css:335` e `script.js:4`
- Navegação slide-in da direita (`right: -100%` → `right: 0`) em 0.35s
- Overlay escuro (`rgba(0,0,0,0.5)`) com fade de 0.25s
- Hamburger animado (3 linhas → X) com rotação de 45°

### 13. Hover Effects com Transições
- **Arquivo:** `style.css` (múltiplos seletores)
- Cards de projeto: `translateY(-8px)` + `box-shadow` + spotlight radial gradient seguindo o mouse
- Skill cards: `translateY(-8px)` com sombra
- Botão primário: glow com `box-shadow` azul
- Nav links: underline animado via `::after` com `scaleX(0)` → `scaleX(1)`
- Links de contato: `translateY(-2px)` + inversão de cor do ícone
- Footer social links: `translateY(-2px)` com mudança de cor
- Todas as transições: 0.25s `cubic-bezier(0.4, 0, 0.2, 1)`

### 14. Smooth Scroll
- **Arquivo:** `style.css:42` e `script.js:48`
- Navegação âncora com `scroll-behavior: smooth`
- JavaScript com `window.scrollTo({ behavior: 'smooth' })` e offset de 80px para o header fixo

### 15. Spotlight Hover em Projetos
- **Arquivo:** `script.js:174`
- Radial gradient nos cards de projeto que segue o cursor do mouse
- Ativado apenas em dispositivos com hover (`matchMedia('(hover: hover)')`)

### 16. Acessibilidade — `prefers-reduced-motion`
- **Arquivo:** `style.css:1369`
- Usuários que preferem movimento reduzido têm todas as animações e transições desabilitadas
- `animation-duration: 0.01ms` e `transition-duration: 0.01ms`
- `scroll-behavior: auto`

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

### `fix: atualiza contador de projetos de 4 para 5`

Correção do contador de projetos na seção Jornada para refletir o número atual de projetos no portfólio.

---

## Tecnologias

- **HTML5** — Semântico e acessível
- **CSS3** — Variables, Flexbox, Grid, Mobile First
- **JavaScript** — Vanilla, Intersection Observer, DOM
- **Fonte:** Inter (Google Fonts)
- opencode (assistente  de IA)

## Contato

- GitHub: [Matheus-webdev](https://github.com/Matheus-webdev)
- LinkedIn: [matheusleonardp](https://www.linkedin.com/in/matheusleonardp/)
- E-mail: matheusleonardoo2008@gmail.com
