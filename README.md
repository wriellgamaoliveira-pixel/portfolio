# 📊 Portfólio Comercial - Wriell Gama Oliveira

> Consultor Especialista em Tecnologia Contábil | Domínio Sistemas | Thomson Reuters

---

## 🎯 Sobre o Projeto

Este é o portfólio comercial profissional de **Wriell Gama Oliveira**, desenvolvido para apresentar serviços de consultoria especializada em tecnologia contábil, com foco em parametrização do Domínio Sistemas (Thomson Reuters), treinamentos e automação de processos.

### 👤 Público-Alvo
- Escritórios de contabilidade
- Contadores e empresas contábeis
- Profissionais do mercado de automação de sistemas contábeis
- Empresas que utilizam Domínio Sistemas

---

## ✨ Melhorias Implementadas (Versão Otimizada)

### 🔧 Problemas Corrigidos

#### 1. **Estrutura HTML**
- ✅ Tags HTML corretamente fechadas e aninhadas
- ✅ Uso de HTML5 semântico (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`, `<address>`)
- ✅ Estrutura consistente entre todas as páginas
- ✅ Caminhos de imagens corrigidos (de `Imagens/` para `imagens/`)

#### 2. **Responsividade Mobile**
- ✅ Media queries para tablets (769px-1024px) e mobile (<768px)
- ✅ Grid flexível que se adapta a diferentes tamanhos de tela
- ✅ Botões responsivos com largura 100% em mobile
- ✅ Tabelas com scroll horizontal em telas pequenas
- ✅ Tipografia responsiva com `clamp()`
- ✅ Imagens e vídeos adaptáveis

#### 3. **SEO (Search Engine Optimization)**
- ✅ Meta tags essenciais (description, keywords, author)
- ✅ Open Graph tags para redes sociais (Facebook, Twitter)
- ✅ Canonical URLs para evitar conteúdo duplicado
- ✅ JSON-LD Structured Data (Schema.org)
- ✅ Títulos únicos e descritivos para cada página
- ✅ Atributos `alt` descritivos em todas as imagens

#### 4. **Acessibilidade (WCAG)**
- ✅ ARIA landmarks (`role`, `aria-label`, `aria-labelledby`)
- ✅ Skip to content link para navegação por teclado
- ✅ Foco visível em elementos interativos
- ✅ Contraste de cores adequado
- ✅ Estrutura semântica clara
- ✅ Atributos `scope` em tabelas
- ✅ Links descritivos com `aria-label`

#### 5. **Código Organizado**
- ✅ CSS extraído para arquivo externo (`css/style.css`)
- ✅ JavaScript separado (`js/main.js`)
- ✅ Comentários explicativos em todo o código
- ✅ Nomenclatura consistente de classes
- ✅ Estrutura de pastas organizada

#### 6. **Performance**
- ✅ Lazy loading para imagens
- ✅ Preconnect para recursos externos
- ✅ JavaScript com `defer` para carregamento otimizado
- ✅ CSS minificável e otimizado
- ✅ Animações suaves com `will-change` e `transform`

---

## 🎨 Novas Funcionalidades

### Animações e Transições
- Fade in suave ao carregar a página
- Animações de hover em cards e botões
- Transições suaves em todos os elementos interativos
- Scroll animations com Intersection Observer
- Efeito ripple nos botões

### JavaScript Enhancements
- Atualização automática do ano no copyright
- Smooth scroll para links internos
- Lazy loading inteligente para imagens
- Efeitos interativos na tabela de preços
- Preparado para Google Analytics (tracking)

### CSS Avançado
- Sistema de grid responsivo
- Variáveis CSS para fácil customização
- Suporte para impressão otimizada
- Estados de loading
- Animações keyframes personalizadas

---

## 📁 Estrutura de Arquivos

```
portfolio_melhorado/
│
├── index.html           # Página principal
├── SOBRE.html           # Sobre o consultor
├── planos.html          # Planos e preços
├── README.md            # Documentação
│
├── css/
│   └── style.css        # Estilos principais
│
├── js/
│   └── main.js          # JavaScript principal
│
└── imagens/
    ├── FOTO-CRC.jpg
    ├── FOTO-ESCRITORIO.jpg
    ├── FOTO-PONTE.jpg
    ├── FOTO-DIGITAL.png
    ├── QR-WHATSAPP.jpg
    └── VIDEO-EVENTO.mp4
```

---

## 🚀 Como Usar

### Deploy no GitHub Pages

1. **Criar repositório no GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio profissional"
```

2. **Conectar ao GitHub**
```bash
git remote add origin https://github.com/wrielloliveira/wrielloliveira.github.io.git
git branch -M main
git push -u origin main
```

3. **Configurar GitHub Pages**
- Vá em Settings > Pages
- Source: Deploy from branch `main`
- Folder: `/ (root)`
- Save

4. **Acessar o site**
- URL: `https://wrielloliveira.github.io/`

### Desenvolvimento Local

Para visualizar localmente, você pode usar qualquer servidor web local:

```bash
# Usando Python 3
python3 -m http.server 8000

# Ou usando Node.js (se tiver o npx)
npx http-server

# Ou usando PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

---

## 🔄 Atualizações Futuras (Opcional)

### Recomendações para próximos passos:

1. **Adicionar Favicon**
   - Criar um ícone profissional (.ico, .png)
   - Adicionar as tags no `<head>`

2. **Google Analytics**
   - Criar conta no Google Analytics
   - Adicionar tracking code

3. **Formulário de Contato**
   - Implementar formulário funcional
   - Integrar com serviço de email (EmailJS, Formspree)

4. **Blog/Artigos**
   - Adicionar seção de blog
   - Compartilhar conhecimento sobre Domínio Sistemas

5. **Certificados e Depoimentos**
   - Seção com certificações profissionais
   - Testemunhos de clientes

6. **PWA (Progressive Web App)**
   - Adicionar manifest.json
   - Implementar service worker
   - Tornar o site instalável

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript ES6+** - Funcionalidades interativas
- **Schema.org** - Dados estruturados
- **Open Graph** - Compartilhamento em redes sociais

---

## 📋 Checklist de Qualidade

### ✅ SEO
- [x] Meta tags completas
- [x] Open Graph e Twitter Cards
- [x] JSON-LD Structured Data
- [x] URLs canônicas
- [x] Sitemap.xml (recomendado adicionar)
- [x] robots.txt (recomendado adicionar)

### ✅ Performance
- [x] Lazy loading de imagens
- [x] CSS e JS otimizados
- [x] Imagens comprimidas
- [x] Preconnect para recursos externos

### ✅ Acessibilidade
- [x] ARIA landmarks
- [x] Skip to content
- [x] Contraste adequado
- [x] Navegação por teclado
- [x] Alt text em imagens

### ✅ Responsividade
- [x] Mobile first
- [x] Tablet otimizado
- [x] Desktop full
- [x] Testado em múltiplos dispositivos

---

## 📞 Contato

**Wriell Gama Oliveira**  
Consultor Especialista em Tecnologia Contábil

- 📱 WhatsApp: [+55 63 99203-8278](https://wa.me/message/BM4GUNJSSCSEH1)
- 📧 Email: [wriellconsultor@gmail.com](mailto:wriellconsultor@gmail.com)
- 📷 Instagram: [@wrielloliveira](https://www.instagram.com/wrielloliveira/)

---

## 📄 Licença

© 2026 Wriell Oliveira Consultor. Todos os direitos reservados.

---

## 🎓 Notas de Desenvolvimento

### Links a Atualizar

Antes do deploy final, atualize os seguintes links placeholder:

1. **LinkedIn**: Substituir `https://linkedin.com/in/wriell-oliveira` pelo link real
2. **Lattes**: Substituir `http://lattes.cnpq.br/` pelo link completo do currículo
3. **Canonical URL**: Atualizar para o domínio final se não for GitHub Pages

### Otimizações de Imagens

As imagens atuais podem ser ainda mais otimizadas:
- Converter para WebP para navegadores modernos
- Criar versões responsivas com `srcset`
- Comprimir vídeo para reduzir tamanho

### Testes Recomendados

- [ ] Google PageSpeed Insights
- [ ] Google Mobile-Friendly Test
- [ ] WAVE Accessibility Checker
- [ ] W3C HTML Validator
- [ ] W3C CSS Validator

---

**Desenvolvido com ❤️ para profissionais da contabilidade**
