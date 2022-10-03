<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Marco legal de los eventos

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6.my-3
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Considerando que los eventos y espectáculos tienen consigo un gran compromiso social, es importante conocer el marco legal de los mismos, donde se busca garantizar la efectividad de los principios, derechos y deberes de las personas, como también establecer una normativa que permita el desarrollo de los  eventos o espectáculos con homogeneidad, facilitando su gestión y ejecución y a su vez proporcionando seguridad humana y condiciones de igualdad para todo tipo de evento a partir de su naturaleza y tipología.
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.png', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)             

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img28.svg', alt='')              
      .col-lg-6.my-3
        p(data-aos="fade-down").mb-0 Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros.  

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
