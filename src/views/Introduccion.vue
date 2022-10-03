<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="zoom-in-left")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Bienvenido querido aprendiz, En este componente formativo tendrá la oportunidad de conocer los conceptos  básicos pero esenciales,  que  le introducirán al mundo de los eventos, su organización y proyección dentro del mercado, con el fin de que reconozca la actividad como una empresa más en el sector de comercio y servicios en Colombia. Lo invitamos a ver el siguiente vídeo en donde podrá ampliar la temática que va a estudiar y la importancia de su formación como organizador de eventos. Le deseamos muchos éxitos en este proceso de aprendizaje.     
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.png', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)               
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
