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

## Tecnologias

- **HTML5** — Semântico e acessível
- **CSS3** — Variables, Flexbox, Grid, Mobile First
- **JavaScript** — Vanilla, Intersection Observer, DOM
- **Fonte:** Inter (Google Fonts)

## Contato

- GitHub: [Matheus-webdev](https://github.com/Matheus-webdev)
- LinkedIn: [matheusleonardp](https://www.linkedin.com/in/matheusleonardp/)
- E-mail: matheusleonardoo2008@gmail.com
