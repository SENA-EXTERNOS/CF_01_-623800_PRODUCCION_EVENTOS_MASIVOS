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
          p(data-aos="fade-down").mb-0 Como en todos los sectores de la producción, en los eventos que pertenecen al sector de comercio y servicios, es necesario realizar una investigación previa para que se logre determinar con base en el objetivo de este. Este debe llenar las expectativas del público, si no que se cuente con el impacto necesario, para ello, es importante realizar una recolección de datos primarios con los cuales se realiza un análisis y se nutre, se dinamiza para que se logre lo propuesto. Con base en esto analizaremos las técnicas de recolección de información, instrumentos de recolección de datos y procesamiento de la información.

        p(data-aos="fade-down").mb-0 En el siguiente vídeo se profundiza un poco más sobre la recolección de información. Ecosistema de Recursos Educativos digitales SENA. <i>Recolección de la información.</i> 
          a(href="https://youtu.be/D_ltPN5Akvo" target="_blank") https://youtu.be/D_ltPN5Akvo             
           
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.png', alt='')  

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Técnicas de recolección 

    p(data-aos="fade-down").mb-5 Las técnicas de recolección nos hablan de recoger una serie de datos para realizar un estudio previo con base en un objetivo propuesto, analizar la información obtenida de primera mano para planear un evento de cualquier naturaleza, buscando que su ejecución no quede detalle suelto y se logre con éxito lo propuesto.

    h5(data-aos="fade-down").mb-5.text-center Existen algunas técnicas de recolección de información para este primer análisis, el cual representa la base del evento. Estas son:

    ImagenInfografica.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/img24.svg', alt='técnicas de recolección de información para este primer análisis')

      .tarjeta.color-acento-botones.p-3(x="39%" y="44%" numero="1")
        h4.text-center.mb-2 Encuesta
        p.mb-0 Utiliza los cuestionarios previamente establecidos como medio para acercarse a las unidades de observación, existen variedad de encuestas para aplicar bien sean: telefónicas, correo, personal u online.  
      .tarjeta.color-acento-botones.p-3(x="57.5%" y="55%" numero="2")
        h4.text-center.mb-2 Entrevista
        p Esta técnica permite una interrelación o diálogo entre el entrevistador y el entrevistado, las cuales pueden ser: entrevista asistemática o libre, estructurada, focalizada, simultánea o sucesiva.
        p.mb-0 Equipo QuestionPro. <i>Métodos y técnicas de recolección de datos más efectivos</i>. QuestionPro. 
          a(href="https://www.questionpro.com/blog/es/metodos-de-recoleccion-de-datos/" target="_blank") https://www.questionpro.com/blog/es/metodos-de-recoleccion-de-datos/  
           
      .tarjeta.color-acento-botones.p-3(x="79.5%" y="48%" numero="3")
        h4.text-center.mb-2 Análisis documental
        p.mb-0 Esta técnica acude a fuentes secundarias como libros, periódicos, folletos, revistas o boletines. Para recoger información sobre variables de intereses utiliza un instrumento que son las fichas de registro de datos.    
      .tarjeta.color-acento-botones.p-3(x="18.5%" y="39%" numero="4")
        p #[b Observación:] esta puede ser No experimental. Es una técnica que se utiliza para profundizar lo observado y el comportamiento que se dio en la exploración, por ejemplo: estudiar el impacto que tuvo el evento en los participantes cogiendo una pequeña muestra y aplicando una guía de observación.

        p #[b Experimental:] es diferente esta técnica a la observación no experimental ya que en ella elabora datos en condiciones controladas por quien está realizando la investigación, pudiendo manipular las variables, aunque también utilice el registro de datos.

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Instrumentos de recolección

    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-4
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Entre los instrumentos de recolección que más se utilizan están cuestionarios y escalas de actitudes. Estos instrumentos se construyen con base en preguntas que se sujetan a las variables de medición, estas preguntas son construidas de acuerdo con el objetivo de la investigación.
      .col-lg-8
        h5(data-aos="fade-down").mb-5.text-center A continuación se determinan las características de cada uno de ellos:
        .row.justify-content-center.align-items-center           
          .col-lg-6(data-aos="fade-right")      
            .tarjeta-avatar.h-100
              img(src='@/assets/curso/temas/img25.svg' alt='Cuestionarios')
              .tarjeta.color-acento-botones
                .text-white.p-4.pt-5
                  h2.text-center Cuestionarios
                  p Está destinado a recoger, procesar y analizar información por medio de preguntas aplicadas a poblaciones muestra para obtener datos que permitan el análisis del objetivo de la investigación.         
          .col-lg-6(data-aos="fade-right")
            .tarjeta-avatar.h-100
              img(src='@/assets/curso/temas/img26.svg' alt='Escala de actitudes')
              .tarjeta.color-acento-botones
                .text-white.p-4.pt-5
                  h2.text-center Escala de actitudes
                  p Se encarga de medir la escala de actitud de la población muestra en forma objetiva, de acuerdo con una escala de valores cuantitativos que mide el grado de aceptación o rechazo con base en el objetivo propuesto.

    .cajon.color-acento-contenido.p-4(data-aos="flip-down")
      h5(data-aos="fade-down") Procesamiento de la información

      p(data-aos="fade-down") Es la transformación de los datos recolectados para hacerlos comprensibles por medio de gráficos, tablas o documentos, entre otros, para quienes realicen el estudio para tomar decisiones y crear estrategias de acuerdo con el objetivo propuesto.

      p(data-aos="fade-down").mb-0 Para que este procesamiento de datos sea efectivo es necesario que la información esté actualizada y en óptimas condiciones, para ello se debe hacer una limpieza de los datos para que al procesarlos se cuente con los datos que verdaderamente sirven y dan confiabilidad.                              
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
