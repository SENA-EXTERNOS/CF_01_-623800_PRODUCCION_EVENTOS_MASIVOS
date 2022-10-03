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
          p(data-aos="fade-down").mb-0 La comunicación es la base de todo evento por esto es necesario conocer desde sus elementos, tipos, el lenguaje verbal, no verbal, la comunicación asertiva y la programación neurolingüística. Cabe resaltar que en la actualidad, sirviéndose de la virtud de la tecnología, los eventos se realizan con diferentes tipos de comunicación haciendo de algunos ellos la manifestación de la creatividad y de la innovación.
        p(data-aos="fade-down").mb-0 Existen algunos elementos en la comunicación sin los cuales no se podría producir, cada uno cumple un papel fundamental en la misma.
           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0.text-center Dentro de dichos elementos, encontramos:       
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='')                 
      .col-lg-5.my-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Emisor")
            .col-lg-11
              p.mb-0 Este es el encargado de expresar o emitir el mensaje. 
          .row.justify-content-center.align-items-center(titulo="Receptor")
            .col-lg-11
              p.mb-0 Es quien recibe el mensaje. 
          .row.justify-content-center.align-items-center(titulo="Código")
            .col-lg-11
              p.mb-0 Son las señales o signos que forman el mensaje.
          .row.justify-content-center.align-items-center(titulo="Mensaje")
            .col-lg-11
              p.mb-0 Lo que se quiere expresar.
          .row.justify-content-center.align-items-center(titulo="Canal de comunicación")
            .col-lg-11
              p.mb-0 El medio por donde se manifiesta el mensaje. 
          .row.justify-content-center.align-items-center(titulo="Ruido")
            .col-lg-11
              p.mb-0 Lo que interfiere y distorsiona el proceso de comunicación.
          .row.justify-content-center.align-items-center(titulo="Retroalimentación")
            .col-lg-11
              p.mb-0 Respuesta de quien recibe el mensaje.

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
      p(data-aos="fade-down") Le invitamos a ver el siguiente video Elementos de la comunicación para que tenga mayor claridad en cada uno de ellos. 

      p(data-aos="fade-down").mb-0 Ahora bien, los tipos de comunicación tienen dos subcategorías: verbal y no verbal, estas condicionan la forma en que puede realizarse un evento, bien sea híbrido o digital.

    p(data-aos="fade-down").mb-5 A continuación se presentan las características de la comunicación verbal, no verbal además del concepto de comunicación asertiva y programación neurolingüística:

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

            p Se puede utilizar para intercambio de conocimientos es decir que es vital en la educación, es decir, enseñanza- aprendizaje, como también en la interacción con las otras personas.     
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img20.png', alt='') 
        .row.justify-content-center.align-items-center
          .col-lg-4
            h5 Comunicación asertiva
            p La comunicación asertiva se fundamenta en la forma como se puede expresar un mensaje en forma adecuada quitando todo tipo de tonos sarcásticos, palabras de reproche o acusación que deterioran la comunicación.  Esta es una habilidad que se manifiesta en algunos individuos, los cuales saben expresar su punto de vista y escuchar el de los otros sin entrar en controversia 

            p Al hablar de asertividad nos referimos a expresar a otro las emociones y pensamientos en forma correcta para que haya una fluidez entre el emisor, el receptor y el resultado de este proceso comunicativo lleve a términos de acuerdo de entendimiento y reconciliación en caso dado.     
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img21.png', alt='') 
        .row.justify-content-center.align-items-center
          .col-lg-4
            h5 Programación neurolingüística
            p Es conocida como #[b PNL], la cual piensa en forma efectiva a través de técnicas, habilidades y modelos con base en estructuras lingüísticas, patrones de comportamiento, mapas mentales de aquellas personas que han llegado a la excelencia en su campo, es decir, trabajadores con éxito.

            p El #[b PNL] marca patrones organizativos en el pensamiento para que se llegue a la excelencia enmarcando a la persona en una forma de ser y de pensar, imitando a otro que ya tuvo éxito. Se refiere a #[b Neuro] dado que toman las experiencias de vida como base para crear patrones y #[b Lingüística] dada la traducción a un lenguaje para dar a conocer las impresiones que rigen los sentidos y estos dos momentos se toman para realizar una #[b Programación] de la cual resultan patrones de comportamiento y marcos de conducta que organizan las ideas y define los comportamientos para lograr imitar el éxito.    
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
