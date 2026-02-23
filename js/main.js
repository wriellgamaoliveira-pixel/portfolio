/**
 * Portfolio Comercial - Wriell Gama Oliveira
 * JavaScript Principal
 */

// Atualiza o ano atual no rodapé
document.addEventListener('DOMContentLoaded', function() {
  // Atualiza ano no copyright
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // Adiciona animações de scroll
  initScrollAnimations();
  
  // Adiciona funcionalidade de smooth scroll para links internos
  initSmoothScroll();
  
  // Adiciona lazy loading para imagens
  initLazyLoad();
});

/**
 * Inicializa animações ao scroll
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observa todos os cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

/**
 * Inicializa smooth scroll para links internos
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Verifica se é um link interno válido
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Inicializa lazy loading para imagens
 */
function initLazyLoad() {
  // Verifica se o navegador suporta IntersectionObserver
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Para imagens com data-src
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // Para vídeos com data-src
          if (img.tagName === 'VIDEO' && img.dataset.src) {
            const source = img.querySelector('source');
            if (source) {
              source.src = source.dataset.src;
              source.removeAttribute('data-src');
              img.load();
            }
          }
          
          imageObserver.unobserve(img);
        }
      });
    });

    // Observa todas as imagens e vídeos com loading="lazy"
    const lazyImages = document.querySelectorAll('img[loading="lazy"], video[data-lazy]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

/**
 * Adiciona efeito de hover nos cards de preços
 */
function initPriceTableEffects() {
  const tableRows = document.querySelectorAll('tbody tr');
  
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.01)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    row.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Inicializa efeitos da tabela quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPriceTableEffects);
} else {
  initPriceTableEffects();
}

/**
 * Adiciona tracking de cliques (opcional - pode ser conectado ao Google Analytics)
 */
function trackClick(category, action, label) {
  // Placeholder para tracking analytics
  console.log('Track:', category, action, label);
  
  // Se tiver Google Analytics configurado:
  // gtag('event', action, {
  //   'event_category': category,
  //   'event_label': label
  // });
}

// Adiciona tracking aos botões de CTA
document.addEventListener('DOMContentLoaded', function() {
  const ctaButtons = document.querySelectorAll('.btn-primary');
  
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      trackClick('CTA', 'click', buttonText);
    });
  });
});
