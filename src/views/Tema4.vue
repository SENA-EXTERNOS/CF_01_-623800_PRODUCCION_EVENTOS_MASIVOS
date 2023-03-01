<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Recolección de información primaria

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6.my-3
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Como en todos los sectores de la producción, en los eventos que pertenecen al sector de comercio y servicios es necesario realizar una investigación previa para determinar el objetivo de este, que llene las expectativas del público y cuente con el impacto necesario. Para esto, es importante realizar una recolección de datos primarios con los cuales se realiza un análisis y se dinamiza para lograr lo propuesto. Con base en ello, se analizan las técnicas de recolección de información, los instrumentos de recolección de datos y el procesamiento de la información.

        p(data-aos="fade-down").mb-0 En el siguiente vídeo se profundiza más sobre la recolección de información. Ecosistema de Recursos Educativos digitales SENA. <i>Recolección de la información </i>
          a(href="https://youtu.be/D_ltPN5Akvo" target="_blank") https://youtu.be/D_ltPN5Akvo              
           
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.png', alt='')  

    .row.mt-5
      h3 Técnicas de recolección

    p(data-aos="fade-down").mb-5 Las técnicas de recolección nos hablan de recoger una serie de datos para realizar un estudio previo con base en un objetivo propuesto, también analizar la información obtenida de primera mano para planear un evento de cualquier naturaleza, de manera que durante su ejecución no queden cabos sueltos y se cumplan exitosamente todos los objetivos propuestos. 

    p(data-aos="fade-down").mb-5 Existen algunas técnicas de recolección de información para este primer análisis, el cual representa la base del evento. Estas son:

    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/img24.svg', alt='técnicas de recolección de información para este primer análisis')

      .tarjeta.color-acento-botones.p-3(x="39%" y="44%" numero="1")
        h4.text-center.mb-2 Encuesta
        p.mb-0 Utiliza los cuestionarios previamente establecidos como medio para acercarse a las unidades de observación; existe una variedad de encuestas para aplicar, bien sean telefónicas, por correo, personales o encuestas en línea.

      .tarjeta.color-acento-botones.p-3(x="57.5%" y="55%" numero="2")
        h4.text-center.mb-2 Entrevista
        p.mb-0 Esta técnica permite una interrelación o diálogo entre el entrevistador y el entrevistado; existen diferentes tipos: entrevista asistemática o libre, estructurada, focalizada, simultánea o sucesiva.
        p Equipo <i>QuestionPro</i>. Métodos y técnicas de recolección de datos más efectivos. <i>QuestionPro</i>.

        p.mb-0 Equipo <em>QuestionPro</em>.Métodos y técnicas de recolección de datos más efectivos. <em>QuestionPro</em>. 
          a(href="https://www.questionpro.com/blog/es/metodos-de-recoleccion-de-datos/" target="_blank") https://www.questionpro.com/blog/es/metodos-de-recoleccion-de-datos/ 
           
      .tarjeta.color-acento-botones.p-3(x="79.5%" y="48%" numero="3")
        h4.text-center.mb-2 Análisis documental
        p.mb-0 Esta técnica acude a fuentes secundarias como libros, periódicos, folletos, revistas o boletines. Para recoger información sobre variables de interés, hace uso de las fichas de registro de datos, las cuales recopilan la información de las fuentes en los diferentes recintos o lugares de almacenamiento. 

      .tarjeta.color-acento-botones.p-3(x="18.5%" y="39%" numero="4")
        h4.text-center.mb-2 Observación

        p Esta puede ser no experimental o experimental.

        p #[b No experimental:] es una técnica que se utiliza para profundizar lo observado y el comportamiento que se dio en la exploración, por ejemplo: estudiar el impacto que tuvo el evento en los participantes tomando una pequeña muestra y aplicando una guía de observación.

        p #[b Experimental:] esta técnica es diferente a la observación no experimental, ya que en ella se elaboran datos en condiciones controladas por quien está realizando la investigación, de manera que puede manipular las variables, aunque también utilice el registro de datos.

    .row.mt-5
      h3 Instrumentos de recolección

      p Entre los instrumentos de recolección que más se utilizan están cuestionarios y escalas de actitudes. Estos instrumentos se construyen con base en preguntas que se sujetan a las variables de medición; dichas preguntas son construidas de acuerdo con el objetivo de la investigación.

      p A continuación, se define cada uno de los instrumentos de recolección:

    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-8
        .row.justify-content-center.align-items-center           
          .col-lg-6(data-aos="fade-right")      
            .tarjeta-avatar.h-100
              img(src='@/assets/curso/temas/tema4/img1.svg' alt='Cuestionarios')
              .tarjeta.color-acento-botones
                .text-white.p-4.pt-5
                  h2.text-center Cuestionarios
                  p Están destinados a recoger, procesar y analizar información por medio de preguntas aplicadas a poblaciones muestra para obtener datos que permitan el análisis del objetivo de la investigación.

          .col-lg-6(data-aos="fade-right")
            .tarjeta-avatar.h-100
              img(src='@/assets/curso/temas/tema4/img2.svg' alt='Escala de actitudes')
              .tarjeta.color-acento-botones
                .text-white.p-4.pt-5
                  h2.text-center Escala de actitudes
                  p Se encarga de medir la inclinación o actitud de la población muestra hacia algo en particular de forma objetiva, de acuerdo con una escala de valores cuantitativos que mide el grado de aceptación o rechazo con base en el objetivo propuesto.

    .cajon.color-acento-contenido.p-4(data-aos="flip-down")
      h5(data-aos="fade-down") Procesamiento de la información

      p(data-aos="fade-down") Es la transformación de los datos recolectados para hacerlos comprensibles por medio de gráficos, tablas o documentos, entre otros, para que quienes realicen el estudio tomen decisiones y creen estrategias de acuerdo con el objetivo propuesto.

      p(data-aos="fade-down").mb-0 Para que este procesamiento de datos sea efectivo es necesario que la información esté actualizada y en óptimas condiciones, por lo tanto debe hacerse una limpieza de los datos para que al procesarlos se cuente con los que verdaderamente sirven y dan confiabilidad.


</template>

<script>
export default {
  name: 'Tema4',
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
