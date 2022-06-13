const closealerta = () => {
    const close = document.querySelector("#fechar");
    const mensagem = document.querySelector(".mensagem");

    close.addEventListener("click", () => {
        mensagem.style.display = "none";

    });
    setTimeout(() => {
        mensagem.style.display ="none";
        
      }, 5000);
};

const viewbotao = () => {
    const buttons = document.querySelectorAll(".botao");
    buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
    const editar2= event.path[2].children[1];
    
    editar2.classList.toggle("active")
    
    if (editar2.classList.contains("active")){
        editar2.style.display = "block";
    } else {
        editar2.style.display= "none";
    }

    editar2.addEventListener("mouseleave", () => {
        editar2.classList.remove("active");
        if (!editar2.classList.contains("active")){
            editar2.style.display = "none";
        }
    })

    })
})
};

viewbotao();
closealerta();
