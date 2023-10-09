export default {
  global: {
    componenteFormativo: 'Caracterización de eventos',
    descripcionCurso:
      'Para la planeación de un evento es necesario tener claridad sobre cuál será su propósito y el público al cual va dirigido, esto obliga a caracterizar el evento determinando si es empresarial, cultural, social o deportivo, entre otros, con el fin de establecer una buena técnica de comunicación y dar cumplimiento al objetivo estipulado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Naturaleza y tipología de eventos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tendencias de eventos: diseño y tecnología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recolección de información primaria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Marco legal de los eventos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipología de los eventos',
      referencia:
        'Fundación Universitas. (Sin fecha). <i>Tipología y clasificación de los eventos</i>. Fundación Universitas.',
      tipo: 'Documento',
      link:
        'https://rrppfu.files.wordpress.com/2012/08/lectura-nc2ba-2-1-tipologia-y-clasificacic3b3n-de-los-eventos.pdf',
    },
    {
      tema: 'Tipología de los eventos',
      referencia:
        'Equipo Ecosistema de Recursos Digitales SENA. (2021) <i>Tipos de formatos para eventos.</i>',
      tipo: 'Vídeo',
      link: 'https://youtu.be/Tyu8s3GEMuo',
    },
    {
      tema: 'Elementos comunicación',
      referencia: 'Elementos de la comunicación',
      tipo: 'Vídeo',
      link: 'https://youtu.be/rM4nZhhn3v8',
    },
    {
      tema: 'Eventos Digitales',
      referencia:
        'Equipo de Penta Marketing. 2020. <i>La guía completa para eventos virtuales inmersivos 3D. Pentamarketing</i>.',
      tipo: 'artículo',
      link:
        'https://www.revistapym.com.co/articulos/comunicacion/36176/penta-marketing-lanza-el-primer-ebook-gratuito-sobre-eventos-virtuales-3d',
    },
    {
      tema: 'Recolección de información ',
      referencia:
        'Equipo Ecosistema de Recursos Digitales SENA. (2020) <i>Recolección de la información</i>.',
      tipo: 'Vídeo',
      link: 'https://youtu.be/D_ltPN5Akvo',
    },
    {
      tema: 'Marco legal de los eventos',
      referencia:
        'Equipo Información Jurídica, tributaria y empresarial. (Sin fecha). <i>Reglamento organización de eventos.</i> Vlex.',
      tipo: 'Artículos',
      link: 'https://vlex.com.co/tags/reglamento-organizacion-eventos-225922',
    },
    {
      tema: 'Marco legal de los eventos',
      referencia:
        'Equipo Función Pública. (Sin fecha). <i>Decreto 1276 de 2020</i>. Función Pública.',
      tipo:
        'Decreto 1276 de 2020. Requisitos para la realización de espectáculos públicos de las artes escénicas, y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=142462',
    },
  ],
  glosario: [
    {
      termino: 'Aglomerar',
      significado:
        'Reunir de forma desordenada un gran número de personas o cosas.',
    },
    {
      termino: 'Complejidad',
      significado:
        'Grado de dificultad que está determinado por el número de acciones o elementos que se requiere para alcanzar un fin.',
    },
    {
      termino: 'Digital',
      significado:
        'Todo lo que se puede realizar mediante el uso de herramientas tecnológicas.',
    },
    {
      termino: 'Espectáculo',
      significado:
        'Evento cuyo fin es el entretenimiento, diversión, disfrute o goce de quien participa como espectador.',
    },
    {
      termino: 'Indicador',
      significado:
        'Herramienta que permite la medición de cumplimiento de una meta asociada a un objetivo de forma cualitativa o cuantitativa.',
    },
    {
      termino: 'Inmersión',
      significado:
        'Participación total y completa en la temática desarrollada en un evento que permite a los participantes adquirir todo el conocimiento y sumergirse en él.',
    },
    {
      termino: 'Logística de eventos',
      significado:
        'Conjunto de acciones encaminadas al éxito en el desarrollo de un evento que incluyen su planeación, organización, ejecución, clausura y desmonte.',
    },
    {
      termino: 'Masivo',
      significado:
        'Se refiere a multitudes, muchedumbre. El fin es alcanzar a las masas o un gran número de personas.',
    },
    {
      termino: 'Negociación',
      significado:
        'Acuerdo entre dos o más partes que buscan el beneficio mutuo a partir de un intercambio de intereses.',
    },
    {
      termino: 'Organizador',
      significado:
        'Encargado de liderar, ordenar, administrar y delegar funciones para alcanzar el objetivo en un evento.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de normas o reglas de conducta, etiqueta, formalidad o cortesía que permiten la correcta interacción social.',
    },
    {
      termino: 'Tendencia',
      significado:
        'referencia que marca o muestra un gusto, preferencia, inclinación de un gran porcentaje de la población; en pocas palabras, lo que está de moda.',
    },
    {
      termino: 'Tipología',
      significado:
        'Clasificación de los eventos según sus características, temática, el objetivo o propósito que se quiere cumplir al desarrollarlo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ana Cristina Córdoba Castaño. (2017). <i>Origen e historia de los eventos en el mundo y en Colombia.</i> Prezi.',
      link:
        'https://prezi.com/rb6nljzxlrzk/origen-e-historia-de-los-eventos-en-el-mundo-y-en-colombia/',
    },
    {
      referencia:
        'Angie Catalina. (2013). <i>Normatividad aplicada en eventos.</i> Prezi.',
      link: 'https://prezi.com/qopdmgue8rjz/normatividad-aplicada-en-eventos/',
    },
    {
      referencia:
        'Equipo de Bantu Group. (2020). <i>Las 6 etapas del procesamiento y análisis de datos</i>. BantuGroup.',
      link:
        'https://www.bantugroup.com/blog/etapas-del-procesamiento-y-analisis-de-datos',
    },
    {
      referencia:
        'Equipo Impact Hub Madrid. (2022). <i>Eventos híbridos y virtuales: pros y contras</i>. Impact Hub Madrid.',
      link:
        'https://madrid.impacthub.net/2022/01/04/eventos-hibridos-y-virtuales/',
    },
    {
      referencia:
        'Equipo Instituto Mediterráneo Estudios de Protocolo. (Sin fecha). <i>¿Qué es un evento y cómo se puede clasificar?</i> Protocolo Imep.',
      link:
        'https://www.protocoloimep.com/articulos/que-es-un-evento-y-clasificacion/#comments',
    },
    {
      referencia:
        'Equipo Plataforma. (Sin fecha). <i>Eventos híbridos y virtuales.</i> Plataforma.',
      link: 'https://plataformaav.com/es/eventos-hibridos-y-virtuales/',
    },
    {
      referencia:
        'Equipo Servicio Psicológico - Bienestar Institucional Universidad de San Buenaventura Medellín. (2020). <i>Comunicación asertiva y empatía.</i> Universidad de San Buenaventura Medellín.',
      link:
        'https://usbmed.edu.co/noticias/ampliacion-informacion/artmid/1732/articleid/4674/comunicacion-asertiva-y-empatia#:~:text=La%20comunicaci%C3%B3n%20asertiva%20se%20basa,la%20comunicaci%C3%B3n%20entre%20las%20personas%2C',
    },
    {
      referencia:
        'Laura. (Sin fecha). <i>¿Qué es un evento? Tipos y características de cada uno de ellos.</i> Neoeventos.',
      link: 'https://neoeventos.es/que-es-un-evento',
    },
    {
      referencia:
        'Martínez Altamirano, Úrsula. Organización de Eventos. Primera Edición. ed. México: Editorial Trillas, 2017.',
    },
    {
      referencia:
        'Montedeoca López, R. (2016). Organización de reuniones y eventos (UFO0325). IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44531',
    },
    {
      referencia:
        'Rico, D. G. (2017). Gestión de eventos de marketing y comunicación. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7127',
    },
    {
      referencia:
        'Roberto Espinosa. (Sin fecha). <i>Elementos de la comunicación: tipos y ejemplos.</i> Roberto Espinosa.',
      link: 'https://robertoespinosa.es/elementos-de-la-comunicacion/',
    },
    {
      referencia:
        'Rosario Peiro. (Sin fecha). <i>Tipos de Comunicación.</i> Economipedia.',
      link: 'https://economipedia.com/definiciones/tipos-de-comunicacion.html',
    },
    {
      referencia:
        'Equipo QuestionPro (Sin fecha). <i>Métodos y técnicas de recolección de datos más efectivos.</i> QuestionPro.',
      link:
        'https://www.questionpro.com/blog/es/metodos-de-recoleccion-de-datos/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
