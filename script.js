    // Funcionalidade para mostrar nome do arquivo selecionado
    const fileInput = document.getElementById('file');
    const fileName = document.querySelector('.file-name');
    
    if (fileInput && fileName) {
      fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
          fileName.textContent = this.files[0].name;
          fileName.style.opacity = '1';
          fileName.style.fontWeight = '500';
        } else {
          fileName.textContent = 'Nenhum arquivo escolhido';
          fileName.style.opacity = '0.7';
          fileName.style.fontWeight = '400';
        }
      });
    }

    // Scroll suave para os links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

