$("#btn1").click(function () {
  Swal.fire("Ejemplo básico con Sweet alert 2");
});

$("#btn2").click(function () {
  Swal.fire({
    icon: "success",
    title: "Mensaje",
    text: "texto de prueba",
  });
});

$("#btn3").click(function () {
  Swal.fire({
    imageUrl: "imagenes/imagen.png",
    imageHeight: 200,
    imageAlt: "A tall image",
  });
});

$("#btn4").click(function () {
  Swal.fire({
    position: "bottom-end",
    icon: "success",
    title: "Trabajo guardado",
    showConfirmButton: false, //no hace aparecer el boton
    timer: 2000, //se cierra a los 2seg
  });
});

$("#btn5").click(function () {
  Swal.fire({
    title: "Animacion con animate.css",
    showClass: {
      popup: "animate__animated animate__tada", //La funcion tada se puede sacar de https://animate.style/
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});

$("#btn6").click(function () {
  Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/imagenes/formas.png)",
    backdrop: `
    rgba(0,0,123,0.4)
    url("/imagenes/nyan-cat.gif")
    center left
    no-repeat
  `,
  });
});

$("#btn7").click(function () {
  Swal.mixin({
    input: "text",
    confirmButtonText: "Siguiente &rarr;",
    showCancelButton: true,
    progressSteps: ["1", "2", "3"],
  })
    .queue([
      {
        title: "Pregunta1?",
        text: "Color Favorito?",
      },
      {
        title: "Pregunta2?",
        text: "Animal Favorito?",
      },
      {
        title: "Pregunta3?",
        text: "Pais Favorito?",
      },
    ])
    .then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Completado!",
          html:
            "Tus respuestas: <pre><code>" +
            JSON.stringify(result.value) +
            "</code></pre>",
          confirmButtonText: "ok",
        });
      }
    });
});

let timerInterval

$("#btn8").click(function () {
    Swal.fire({
        title: 'Alerta de cierre automatico!',
        html: 'Se cerrara en <b></b> millisegundos.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      });
});

//ICONOS PUEDEN SER: success, error, warning, info, question
//LAS POSICIONES PUEDEN SER: 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'
