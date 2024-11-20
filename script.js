
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 170, 
      behavior: 'smooth' 
    });
  });
});


const boxes = document.querySelectorAll('.box-img-text');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(0.9)'; 
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)'; 
  });
});

//links 

document.querySelector(".btn-contato").addEventListener("click", function() {
  const numeroWhatsApp = "557999598829"; // Substitua pelo seu número
  const mensagem = "Olá!%20Vim%20pelo%20seu%20profile.%20Gostaria%20de%20conversar."; 
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  
  window.open(url, "_blank"); 
});


const projetos = document.querySelectorAll(".projeto");


projetos.forEach(projetoDiv => {
    projetoDiv.addEventListener("mouseenter", function() {
        projetoDiv.classList.add("zoom"); 
    });

    projetoDiv.addEventListener("mouseleave", function() {
        projetoDiv.classList.remove("zoom"); 
    });
});




  