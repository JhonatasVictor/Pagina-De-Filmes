
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

