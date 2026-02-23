# 🚀 Guia de Deploy - GitHub Pages

## Passo a Passo Rápido

### 1️⃣ Preparação (Atualizações Finais)

Antes de fazer o deploy, **atualize os links placeholder**:

#### No arquivo `index.html`, `SOBRE.html` e `planos.html`:

**LinkedIn** (linha ~252 nos arquivos):
```html
<!-- Trocar isto: -->
<a href="https://linkedin.com/in/wriell-oliveira" ...>

<!-- Por seu link real, exemplo: -->
<a href="https://linkedin.com/in/wriell-gama-oliveira" ...>
```

**Currículo Lattes** (linha ~261 nos arquivos):
```html
<!-- Trocar isto: -->
<a href="http://lattes.cnpq.br/" ...>

<!-- Por seu link real, exemplo: -->
<a href="http://lattes.cnpq.br/1234567890123456" ...>
```

---

### 2️⃣ Inicializar Git (Se ainda não fez)

```bash
cd /home/ubuntu/portfolio_melhorado

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "Initial commit: Portfolio profissional otimizado"
```

---

### 3️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Nome do repositório**: `wrielloliveira.github.io`
   - ⚠️ **IMPORTANTE**: Use exatamente esse nome para GitHub Pages funcionar como site principal
3. **Descrição**: "Portfólio Comercial - Consultor em Tecnologia Contábil"
4. Deixe como **Público**
5. **NÃO** marque "Add README" (já temos)
6. Clique em **Create repository**

---

### 4️⃣ Conectar e Enviar para GitHub

Copie os comandos que aparecem na tela do GitHub, algo como:

```bash
# Conectar ao repositório remoto
git remote add origin https://github.com/wrielloliveira/wrielloliveira.github.io.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar arquivos
git push -u origin main
```

**Alternativa com token de acesso:**
Se pedir autenticação, use um Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. Selecione: `repo` (acesso completo)
3. Use o token como senha no git push

---

### 5️⃣ Ativar GitHub Pages

1. Vá ao repositório no GitHub
2. Clique em **Settings** (no topo)
3. No menu lateral, clique em **Pages**
4. Em **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**
6. Aguarde 1-2 minutos

🎉 **Pronto!** Seu site estará disponível em:
```
https://wrielloliveira.github.io/
```

---

## 🔄 Atualizações Futuras

Quando quiser atualizar o site:

```bash
cd /home/ubuntu/portfolio_melhorado

# Fazer suas alterações nos arquivos...

# Adicionar mudanças
git add .

# Criar commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push origin main
```

As alterações aparecem no site em 1-2 minutos.

---

## 📋 Checklist Pré-Deploy

Antes de fazer o deploy final, confira:

- [ ] Links do LinkedIn atualizados
- [ ] Link do Lattes atualizado
- [ ] Número de WhatsApp correto
- [ ] Email correto
- [ ] Links do Instagram verificados
- [ ] Imagens todas carregando
- [ ] Vídeo funcionando
- [ ] Testar em mobile (Chrome DevTools)

---

## 🌐 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio (ex: `wrielloliveira.com.br`):

1. Compre o domínio (Registro.br, GoDaddy, etc.)
2. Configure os DNS:
   ```
   Tipo A  → 185.199.108.153
   Tipo A  → 185.199.109.153
   Tipo A  → 185.199.110.153
   Tipo A  → 185.199.111.153
   ```
3. No GitHub Pages, adicione o domínio customizado
4. Marque "Enforce HTTPS"

Leia mais: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 🔧 Solução de Problemas

### Site não aparece após 5 minutos:
- Verifique se o repositório é **público**
- Confirme que GitHub Pages está ativado
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Imagens não carregam:
- Verifique se os caminhos são `imagens/` (minúsculo)
- Confirme que as imagens foram commitadas

### CSS não aplicado:
- Verifique se `css/style.css` existe no repositório
- Teste abrindo o arquivo diretamente no navegador

---

## 📊 Analytics (Opcional)

Para acompanhar visitas:

1. Crie conta no Google Analytics
2. Pegue o código de tracking
3. Adicione no `<head>` de cada HTML:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 📱 Teste Final

Após deploy, teste:
- ✅ Site carrega rápido
- ✅ Links internos funcionam
- ✅ Links externos abrem em nova aba
- ✅ WhatsApp funciona
- ✅ Formulário de contato (se implementado)
- ✅ Responsivo em mobile
- ✅ Todas as páginas acessíveis

---

## 🎯 SEO Pós-Deploy

1. **Google Search Console**:
   - Cadastre o site: https://search.google.com/search-console
   - Envie o sitemap (criar depois)

2. **Redes Sociais**:
   - Compartilhe no LinkedIn, Instagram
   - Adicione no perfil das redes sociais

3. **Backlinks**:
   - Adicione em diretórios profissionais
   - Link em assinatura de email

---

## 📞 Suporte

Problemas? Consulte:
- GitHub Pages Docs: https://docs.github.com/pages
- Stack Overflow: busque "github pages"
- GitHub Community: https://github.community

---

**Boa sorte com seu portfólio profissional! 🚀**

© 2026 Wriell Oliveira Consultor
