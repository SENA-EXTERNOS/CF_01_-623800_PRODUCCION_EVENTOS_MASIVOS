<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Técnicas de comunicación

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7.my-3
        .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La comunicación es la base de todo evento, por esto es necesario conocer los elementos que la componen y los tipos de comunicación que existen, como son el lenguaje verbal, no verbal, la comunicación asertiva y la programación neurolingüística. Cabe resaltar que, en la actualidad, sirviéndose de la virtud de la tecnología, los eventos se realizan con diferentes tipos de comunicación, logrando que en muchos de ellos se manifieste la creatividad y la innovación al igual que la accesibilidad.

        p(data-aos="fade-down") Existen algunos elementos en la comunicación sin los cuales esta no se podría producir, cada uno cumple un papel fundamental en la misma.

        p Dentro de los elementos que componen a la comunicación, encontramos:

      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='')                 
      .col-lg-5.my-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Emisor")
            .col-lg-11
              p.mb-0 Es el encargado de expresar o emitir el mensaje.

          .row.justify-content-center.align-items-center(titulo="Receptor")
            .col-lg-11
              p.mb-0 Es quien recibe el mensaje.
          .row.justify-content-center.align-items-center(titulo="Código")
            .col-lg-11
              p.mb-0 Es el conjunto de las señales o signos que forman el mensaje.
          .row.justify-content-center.align-items-center(titulo="Mensaje")
            .col-lg-11
              p.mb-0 Es lo que se quiere expresar.
          .row.justify-content-center.align-items-center(titulo="Canal de comunicación")
            .col-lg-11
              p.mb-0 Es el medio por donde se manifiesta el mensaje.
          .row.justify-content-center.align-items-center(titulo="Ruido")
            .col-lg-11
              p.mb-0 Es lo que interfiere y distorsiona el proceso de comunicación.
          .row.justify-content-center.align-items-center(titulo="Retroalimentación")
            .col-lg-11
              p.mb-0 Es la respuesta de quien recibe el mensaje.

    .row.justify-content-center
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down") Le invitamos a ver el siguiente video <b>Elementos de la comunicación </b>
            a(href="https://youtu.be/rM4nZhhn3v8" target="_blank") https://youtu.be/rM4nZhhn3v8,
            span para que tenga mayor claridad en cada uno de ellos. 

    .row.mt-5
      h3 Tipos de comunicación

      p(data-aos="fade-down") Los tipos de comunicación tienen dos subcategorías: verbal y no verbal, estas condicionan la forma en que puede realizarse un evento, bien sea híbrido o digital.

      p(data-aos="fade-down") A continuación, se presentan las características de la comunicación verbal, no verbal además de los conceptos de comunicación asertiva y programación neurolingüística: 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-4
            h5 Lenguaje no verbal
            p Como su nombre lo indica es donde la forma de comunicarse no verbaliza, es decir que se expresa a través de gestos, señales, signos y en las posturas corporales y manifestaciones gestuales, ya sea en una mirada o expresión del rostro. 

            p Este tipo de lenguaje también se conoce como quinésica, en donde los movimientos corporales o gestuales como la mirada, expresan sin verbalizar.

          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img19.png', alt='') 
        .row.justify-content-center.align-items-center
          .col-lg-4
            h5 Lenguaje verbal
            p El lenguaje verbal es aquel que se expresa con palabras, en este encontramos el lenguaje escrito y el oral, como los mensajes del texto en cualquier medio electrónico o las llamadas telefónicas.

            p Esta manifestación del lenguaje verbal se evidencia a través de signos para expresar sentimientos, emociones, pensamientos.

            p Se puede utilizar para intercambio de conocimientos por lo que es vital en la educación, es decir, en el proceso enseñanza- aprendizaje, como también en la interacción con las otras personas.


          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img20.png', alt='') 
        .row.justify-content-center.align-items-center
          .col-lg-4
            h5 Comunicación asertiva
            p La comunicación asertiva se fundamenta en la forma en que se puede expresar un mensaje de forma adecuada al remover todo tipo de tonos sarcásticos, palabras de reproche o acusación que deterioran la comunicación.  Esta es una habilidad que se manifiesta en algunos individuos, los cuales saben expresar su punto de vista y escuchar el de los otros sin entrar en controversia.

            p Al hablar de asertividad nos referimos a expresar a otro las emociones y pensamientos en forma correcta para que haya fluidez entre el emisor, el receptor, y que el resultado de este proceso comunicativo lleve a términos de entendimiento, de acuerdo y reconciliación en el proceso de la comunicación.

          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img21.png', alt='') 
        .row.justify-content-center.align-items-center
          .col-lg-4
            h5 Programación neurolingüística
            p La comunicación asertiva se fundamenta en la forma en que se puede expresar un mensaje de forma adecuada al remover todo tipo de tonos sarcásticos, palabras de reproche o acusación que deterioran la comunicación.  Esta es una habilidad que se manifiesta en algunos individuos, los cuales saben expresar su punto de vista y escuchar el de los otros sin entrar en controversia.

            p Al hablar de asertividad nos referimos a expresar a otro las emociones y pensamientos en forma correcta para que haya fluidez entre el emisor, el receptor, y que el resultado de este proceso comunicativo lleve a términos de entendimiento, de acuerdo y reconciliación en el proceso de la comunicación.

          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img22.png', alt='')                                         
</template>

<script>
export default {
  name: 'Tema3',
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
