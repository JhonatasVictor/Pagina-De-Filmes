
document.getElementById('showMonthly').addEventListener('click', function() {
    // Ativar visualização mensal
    document.getElementById('showMonthly').classList.add('active');
    document.getElementById('showAnnual').classList.remove('active');
    
    // Mostrar cards mensais e esconder anuais
    document.querySelectorAll('.monthly-plan').forEach(card => {
        card.style.display = 'block';
    });
    document.querySelectorAll('.annual-plan').forEach(card => {
        card.style.display = 'none';
    });
});

document.getElementById('showAnnual').addEventListener('click', function() {
    // Ativar visualização anual
    document.getElementById('showAnnual').classList.add('active');
    document.getElementById('showMonthly').classList.remove('active');
    
    // Mostrar cards anuais e esconder mensais
    document.querySelectorAll('.annual-plan').forEach(card => {
        card.style.display = 'block';
    });
    document.querySelectorAll('.monthly-plan').forEach(card => {
        card.style.display = 'none';
    });
})

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio
    limparMensagensErro(); // Limpa mensagens anteriores

        // Captura dos valores
        const nome = document.getElementById('username');
        const senha = document.getElementById('password');
        
        let formularioValido = true;
        
        // Validação do nome
        if (nome.value.trim() === '') {
          mostrarErro(nome, 'Por favor, preencha o nome ou Email válidos');
          formularioValido = false;
        }
        
        // Validação do email
        if (!senha.value.trim) {
          mostrarErro(senha, 'Por favor, insira uma senha válida');
          formularioValido = false;
        }
        
        // Se tudo estiver válido, envia o formulário
        if (formularioValido) {
          this.submit();
        }
      });

      function mostrarErro(group, mensagem) {
        const erroId = group.id + '-erro';
        const elementoErro = document.getElementById(erroId);
        elementoErro.textContent = mensagem;
        group.classList.add('invalido');
      }
      
      function limparMensagensErro() {
        // Limpa todas as mensagens de erro
        const mensagensErro = document.querySelectorAll('.mensagem-erro');
        mensagensErro.forEach(erro => erro.textContent = '');
        
        // Remove a classe 'invalido' de todos os campos
        const camposInvalidos = document.querySelectorAll('.invalido');
        camposInvalidos.forEach(group => group.classList.remove('invalido'));
      }


