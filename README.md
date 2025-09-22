# 🚀 TodusTech - Modern Angular Corporate Website

[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen.svg)](https://github.com/yourusername/todus-tech)

> **Uma landing page corporativa moderna e responsiva desenvolvida em Angular, apresentando soluções tecnológicas inovadoras com design profissional e animações interativas.**

## 🌟 Visão Geral

**TodusTech** é uma aplicação web desenvolvida para demonstrar habilidades avançadas em desenvolvimento frontend moderno. O projeto simula uma empresa de tecnologia que oferece soluções em desenvolvimento de software, consultoria em TI e serviços em nuvem.

### 🎯 Propósito do Projeto
- **Demonstração de Skills**: Showcase de competências em Angular, TypeScript e design responsivo
- **Arquitetura Moderna**: Implementação de melhores práticas de desenvolvimento frontend
- **UX/UI Avançado**: Interface moderna com animações e interações fluidas
- **Código Limpo**: Estrutura organizada e reutilizável para fácil manutenção

## ✨ Features Principais

### 🎨 Design & UX
- **Design Responsivo**: Layout adaptativo para desktop, tablet e mobile
- **Tema Claro/Escuro**: Alternância dinâmica entre temas com persistência
- **Animações CSS**: Transições suaves e efeitos hover profissionais
- **Visualizações Interativas**: Gráficos animados e ícones flutuantes
- **Paleta de Cores Moderna**: Esquema visual consistente e profissional

### ⚡ Funcionalidades Técnicas
- **Arquitetura Modular**: Componentes Angular reutilizáveis e bem estruturados
- **Standalone Components**: Utilização da nova arquitetura standalone do Angular
- **Service Pattern**: Gerenciamento de estado com serviços dedicados
- **TypeScript**: Tipagem forte e código mais seguro
- **CSS Custom Properties**: Variáveis CSS para tematização dinâmica

### 📱 Componentes Implementados

#### 🧭 Header Component
- Navegação fixa com logo personalizado
- Menu dropdown interativo
- Toggle de tema claro/escuro
- Menu hamburger responsivo para mobile
- Efeitos hover e transições suaves

#### 🎯 Hero Section
- Slogan impactante: "Inove, Conecte, Explore"
- Visualização de dados animada
- Ícones tecnológicos flutuantes
- Call-to-action buttons
- Layout flexível e responsivo

#### 🛠️ Services Section
- Cards interativos para cada serviço
- Hover effects com elevação 3D
- Listas de features detalhadas
- Ícones temáticos para cada área
- Design consistente e profissional

#### 📧 Footer Component
- Links organizados por categoria
- Informações de contato
- Redes sociais (preparado para integração)
- Design minimalista e funcional

## 🛠️ Stack Tecnológico

### Frontend Framework
- **Angular 20.0.0** - Framework principal
- **TypeScript 5.8.2** - Linguagem de programação
- **RxJS 7.8.0** - Programação reativa

### Desenvolvimento & Build
- **Angular CLI 20.0.4** - Ferramentas de desenvolvimento
- **Angular Build 20.0.4** - Sistema de build otimizado
- **Prettier** - Formatação de código

### Testes
- **Jasmine 5.7.0** - Framework de testes
- **Karma 6.4.0** - Test runner
- **Coverage Reports** - Relatórios de cobertura

### Styling & Design
- **CSS3** com Custom Properties
- **Flexbox** e **CSS Grid**
- **Mobile-First** responsive design
- **CSS Animations** e **Transitions**

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Angular CLI (opcional, mas recomendado)

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/yourusername/todus-tech.git

# Navegue para o diretório
cd todus-tech

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm start
# ou
ng serve

# Acesse no navegador
# http://localhost:4200
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm start                 # Inicia servidor de desenvolvimento
npm run watch            # Build em modo watch

# Build
npm run build            # Build de produção
npm run build:dev        # Build de desenvolvimento

# Testes
npm test                 # Executa testes unitários
npm run test:coverage    # Testes com relatório de cobertura

# Linting e Formatação
npm run lint             # Executa linting
npm run format           # Formata código com Prettier
```

## 📁 Estrutura do Projeto

```
todus-tech/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes da aplicação
│   │   │   ├── header/         # Navegação principal
│   │   │   ├── hero/           # Seção principal
│   │   │   ├── services/       # Seção de serviços
│   │   │   └── footer/         # Rodapé
│   │   ├── services/           # Serviços Angular
│   │   │   └── theme.ts        # Gerenciamento de tema
│   │   ├── app.config.ts       # Configuração da aplicação
│   │   ├── app.routes.ts       # Rotas (preparado para expansão)
│   │   └── app.ts              # Componente raiz
│   ├── styles.css              # Estilos globais
│   └── index.html              # HTML principal
├── public/                     # Assets estáticos
├── package.json               # Dependências e scripts
└── angular.json              # Configuração do Angular
```

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-blue: #1E3B82    /* Azul corporativo */
--primary-green: #A3D977   /* Verde tecnológico */
--accent-cyan: #00BCD4     /* Ciano de destaque */

/* Temas */
Light Theme: #F8F9FA (background), #212529 (text)
Dark Theme: #1a1a1a (background), #ffffff (text)
```

## 📊 Características Técnicas

### Performance
- **Lazy Loading**: Componentes carregados sob demanda
- **Tree Shaking**: Bundle otimizado sem código não utilizado
- **Minificação**: CSS e JS minificados para produção
- **Caching**: Estratégias de cache para assets estáticos

### Acessibilidade
- **Semantic HTML**: Estrutura HTML semântica
- **ARIA Labels**: Atributos de acessibilidade
- **Keyboard Navigation**: Navegação por teclado
- **Contrast Ratio**: Contraste adequado em ambos os temas

### SEO Ready
- **Meta Tags**: Preparado para otimização SEO
- **Structured Data**: Estrutura preparada para dados estruturados
- **Open Graph**: Meta tags para redes sociais

## 🔮 Próximas Implementações

- [ ] **Internacionalização (i18n)**: Suporte multi-idioma
- [ ] **PWA**: Progressive Web App features
- [ ] **Animações Avançadas**: Angular Animations API
- [ ] **Formulário de Contato**: Integração com backend
- [ ] **Blog Section**: Sistema de blog integrado
- [ ] **Portfolio Cases**: Showcase de projetos
- [ ] **Testes E2E**: Cypress ou Playwright integration

## 👨‍💻 Sobre o Desenvolvimento

Este projeto foi desenvolvido como demonstração de competências em:

- **Angular Framework**: Utilização de recursos modernos e melhores práticas
- **TypeScript**: Programação orientada a objetos e tipagem forte  
- **Responsive Design**: Layout adaptativo e mobile-first
- **UI/UX Design**: Interface moderna e experiência de usuário fluida
- **Clean Code**: Código limpo, organizado e bem documentado
- **Performance**: Otimizações para carregamento e experiência do usuário

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Desenvolvido por:** [Rhayron]
- 📧 Email: [rhayron.nogueira@gmail.com]
- 💼 LinkedIn: [https://www.linkedin.com/in/rhayron/]

---
