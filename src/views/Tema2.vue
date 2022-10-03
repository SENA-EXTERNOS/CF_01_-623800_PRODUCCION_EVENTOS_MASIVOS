<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Tendencias de eventos: diseño y tecnología

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6.my-3
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Las tendencias y diseños de los eventos han venido evolucionando de la mano con la globalización y la tecnología, de tal forma que si antes se diseñaban solo eventos presenciales, hoy se han mezclado con las redes sociales y las aplicaciones que permiten de forma más global llegar a todos los rincones de la tierra, dinamizando diseños, logística y permitiendo la participación de los que buscan por afinidad este tipo de espacios para compartir sus intereses.
           
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.png', alt='')  

    h5(data-aos="fade-down").mb-5.text-center A continuación se explican las características de los eventos híbridos y digitales.

    .row.justify-content-center.align-items-stretch.mb-5           
      .col-lg-6.bg4.p-5(data-aos="fade-right")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/img14.png', alt='')
        #t_2_1
        h5(data-aos="fade-down").mb-3.text-center 2.1 Eventos híbridos
        p(data-aos="fade-down") Tipo de evento interactivo donde se mezcla la virtualidad con lo presencial, dando lugar a la participación, el crecimiento, el comercio electrónico que une la venta y el cierre de venta y filtrando lo digital con lo presencial. De igual forma, favorece el encuentro con individuos en todos los puntos de la tierra fortaleciendo las redes sociales, académicas y deportivas creadas con este fin.

        p(data-aos="fade-down") Ventajas:
        p.ps-3(data-aos="fade-down") • Mayor alcance y cobertura porque permite la conectividad de personas de diferentes locaciones.
        p.ps-3(data-aos="fade-down") • Los costos para el desarrollo de estos eventos no son muy elevados y beneficia a los organizadores, participantes e invitados.
        p.ps-3(data-aos="fade-down") • Mayor audiencia nacional e internacional.
        p.ps-3(data-aos="fade-down") • Mayor impacto en redes sociales.
        p.ps-3(data-aos="fade-down") • Facilidad de conexión desde un móvil, un portátil, una Tablet, PC, entre otros. 

      .col-lg-6.bg5.p-5(data-aos="fade-left")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')
        #t_2_2
        h5(data-aos="fade-down").mb-3.text-center 2.2 Eventos digitales
        p(data-aos="fade-down") Este es un evento que es netamente digital o virtual donde todo se realiza por medio tecnológico. Han tomado mucha fuerza en estos últimos años, otorgando beneficios como reducción de costos en la producción de los eventos. 

        p(data-aos="fade-down") Una logística que facilita el encuentro con una plataforma inmersiva y eficiente con menor impacto en el medio ambiente, rompiendo todas las barreras geográficas existentes para llevar el mensaje sin un límite a menos que este sea exigible y midiendo el impacto del evento de forma más confiable. 

        p(data-aos="fade-down") Este tipo de evento por ser digital abre las oportunidades a la creatividad y a la innovación por su versatilidad y constante desarrollo tecnológico.

        p(data-aos="fade-down") Ventajas: 
        p.ps-3(data-aos="fade-down") • Mayor alcance y cobertura.
        p.ps-3(data-aos="fade-down") • Disminución de costos.
        p.ps-3(data-aos="fade-down") • Su planeación es mucho más fácil y en menor tiempo.

        p(data-aos="fade-down") Le invitamos a consultar en el material complementario una guía completa para eventos virtuales inmersivos 3D. 

</template>

<script>
export default {
  name: 'Tema2',
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
