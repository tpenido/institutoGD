import React from 'react';
import { Link } from 'react-router-dom';

const data = {
  categories: {
    inspiracional: {
      slug: 'inspiracional',
      pt: {
        titulo: 'Histórias Inspiradoras',
        subtitulo:
          '',
        descricao:
          '',
      },
      en: {
        titulo: 'Inspirational Videos',
        subtitulo: '',
        descricao:
          '',
      },
    },
  },
  pages: {
    home: {
      pt: {
        titulo: " “A coisa mais importante para um ser humano é a sua narrativa, o seu propósito. Sem narrativa, somos como um ator no palco sem saber o roteiro.” – Gilberto Dimenstein",
        subtitulo: "Fiel ao seu propósito, Gilberto criou e apoiou diversas iniciativas sociais nas áreas de educação, comunicação, cultura, gentilezas urbanas e economia criativa. Seu legado segue pulsando, inspirando e impulsionando transformações.",
        subtitulo2: "Em breve lançaremos o Instituto Gilberto Dimenstein. Foram tantas as ideias, aprendizados e projetos que precisamos da ajuda de cada um para conseguir mapear sua influência na vida das pessoas e o impacto de suas realizações.",
        video: 'Veja o vídeo',
        conheca: 'Conheça',
        participe: 'Participe',
        conheca: 'Conheça',
        video: 'Veja o vídeo',
        videoID: '3HwhE7PTkaE',
      },
    },
    categories: {
      pt: {
        menuTitle: '',
      },
      
    },
    laboratorio: {
      pt: {
        menuTitle: '',
        titulo: 'Laboratórios Sociais',
        subtitulo: 'Cinco propostas para adiar o fim do mundo',
        content: (
          <div>
            <img
              src={require('../assets/headers/HOME_DESTAQUE_4.jpg')}
              alt=""
            />
            <p>
              Os "Laboratórios Sociais: Liberte o Futuro" são jornadas
              colaborativas de encontros online entre pessoas que protagonizam
              inovações para criar futuros, a partir do chamado das "Cinco
              Propostas para Adiar o Fim do Mundo". É o momento de
              aprofundamento, de planejar ações para o futuro e executá-las no
              presente. É uma invocação da responsabilidade coletiva expressada
              pela equação da rebelião: eu+1+ (criação do pescador e poeta do
              Xingu Élio Alves da Silva).
            </p>
            <p>
              A metodologia do Lab #LiberteoFuturo tem como objetivo, a partir
              do entendimento sistêmico dos problemas, estimular ideias, ações,
              protótipos e propostas que promovam a cultura em rede, novas
              incidências na vida coletiva e pautas interativistas,
              possibilitando a ampliação e o fortalecimento de vínculos, assim
              como a criação de estratégias de convergência entre pessoas que
              protagonizam inovações.
            </p>
            <p>
              O Lab #LiberteoFuturo é um processo dialógico de mudança
              envolvendo pessoas interessadas em construir um futuro promissor
              e/ou iniciativas destinadas a abordar os problemas pela raiz,
              acelerar a transformação, convergir ações e contribuir para a
              promoção do bem comum.
            </p>
            <p>
              Serão 12 encontros virtuais - uma vez por semana, durante três
              meses - com duração de duas horas cada, entre encontros com
              convidados, de cocriação e alinhamento do grupo. O compromisso é
              com o processo, com a experimentação e com a colaboração, mas a
              intenção é despertar o interesse das pessoas e coletivos para a
              ideação e a ação.
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                Inscreva-se aqui!
              </a>
            </p>
          </div>
        ),
      },
      en: {
        menuTitle: 'Laboratory',
        titulo: 'Social Labs',
        subtitulo: 'Five proposals for postponing the end of the world',
        content: (
          <div>
            <img
              src={require('../assets/headers/HOME_DESTAQUE_4.jpg')}
              alt=""
            />
            <p>
              The "Social Labs: Free the Future" are made of collaborative
              journeys of online encounters among people who feature innovations
              to create futures, taking as a basis what we call "5 proposals for
              postponing the end of the world". It is time to dive in deep, to
              plan actions for the future and make them happen right now. It’s a
              call to collective responsibility expressed by the equation of
              rebellion: me+1+ (created by Élio Alves da Silva, fisher and poet
              from Xingu, in the Amazon forest).
            </p>
            <p>
              The Lab method #FreeTheFuture has as its objective, through the
              systemic comprehension of problems, stimulate new ideas, actions,
              prototypes and propositions that promote net culture, new
              incidencies in collective life and interactivist matters, allowing
              the expansion and the strengthening of ties, just as the creation
              of convergence strategies between people who patronise
              innovations.
            </p>
            <p>
              The Lab #FreeTheFuture is a dialogical process of change involving
              people interested in building a bright future and/or promoting
              initiatives destined to approach problems by their origin,
              accelerate transformation, converge actions and contribute for the
              promotion of common good.
            </p>
            <p>
              There will be 12 virtual encounters (that will last two hours
              each) once a week, during three months, among encounters with
              guests, about co-creation and group orientation. The compromise is
              with the process, with experimentation and collaboration, but the
              key intention is to raise the interest of people and collectives
              to ideation and action.
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                Join here!
              </a>
            </p>
          </div>
        ),
      },
      es: {
        menuTitle: 'Laboratorio',
        titulo: 'Laboratorios Sociales',
        subtitulo: 'Cinco propuestas para posponer el fin de mundo',
        content: (
          <div>
            <img
              src={require('../assets/headers/HOME_DESTAQUE_4.jpg')}
              alt=""
            />
            <p>
              Los “Laboratorios Sociales: Libera el Futuro” son días de
              colaboración de reuniones virtuales entre personas que
              protagonizan innovaciones para crear futuros basados en el llamado
              de las “Cinco Propuestas para Posponer el Fin del Mundo”. Es el
              momento de profundizar, de planificar acciones para el futuro y
              ejecutarlas en el presente. Es una invocación de responsabilidad
              colectiva expresada por la ecuación de la rebelión: Yo+1+
              (creación del pescador y poeta del Xingu Elio Alves da Silva, de
              la selva amazónica).
            </p>
            <p>
              La metodología del Laboratorio #Liberaelfuturo tiene como
              objetivo, desde de la comprensión sistémica de los problemas,
              estimular ideas, acciones, prototipos y propuestas que promuevan
              la cultura en red , nuevas incidencias en la vida colectiva y
              pautas interactivas, permitiéndose la ampliación y el
              fortalecimiento de lazos, tan como la creación de estrategias de
              convergencia entre personas que lideran innovaciones.
            </p>
            <p>
              El laboratorio #LiberaElFuturo es un proceso diálogo de cambios
              que involucra personas interesadas en construir un futuro
              prometedor y/o iniciativas destinadas a abordar los problemas
              desde la raíz, acelerar la transformación, converger acciones y
              contribuir a la promoción del bien común.
            </p>
            <p>
              Habrá 12 reuniones virtuales - una vez por semana, por três meses.
              - com la duración de dos horas cada una, entre reuniones con
              invitados, co-creación y alineación del grupo. El compromiso es
              con el proceso, con la experimentación y con la colaboración, pero
              la intención es despertar el interés de las personas y coletivos
              por la ideación y la acción.
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                Regístrese aquí
              </a>
            </p>
          </div>
        ),
      },
    },
    movimento: {
      pt: {
        menuTitle: '',
        titulo: '',
        subtitulo: '',
        content: (
          <div>
            <p>
            <h1><strong>“Preocupado em disseminar a força da palavra, do conhecimento e da rebeldia, virei jornalista e comunicador.” (Gilberto Dimenstein)</strong></h1>
            </p>
            <p>
As palavras de Gilberto Dimenstein tomaram forma e se concretizaram em uma série de projetos e iniciativas sociais que promovem a educação, a cultura e os direitos humanos em cidades educadoras, mais justas e acolhedoras a todos os indivíduos. Seu legado segue pulsando, inspirando e impulsionando transformações. Conheça algumas dessas palavras inspiradoras neste mural de histórias contadas algumas pessoas mobilizadas por elas. 

              </p>
          </div>
        ),
      },
      es: {
        menuTitle: 'El movimento',
        titulo: 'Nuestro movimento',
        subtitulo: 'Libera el futuro',
        content: (
          <div>
            <p>
              Muchas personas han repetido que el mundo no será el mismo después
              de la pandemia ocasionada por el nuevo coronavirus. No lo será.
              Pero podrá ser aún peor.
            </p>
            <p>
              Hoy, solo 2.153 personas concentran más riqueza material que el
              60% de los otros 7.790.000.000 seres humanos que habitan el
              planeta. Estos multimillonarios representan una fracción tan
              insignificante de la población global en su conjunto que los
              números no logran hacerlos visibles como un porcentaje. Sin
              embargo, la desigualdad racial, social, de género y especies es
              brutalmente visible.
            </p>
            <p>Queremos un mundo para el 99,99%.</p>
            <p>
              No podemos rendirnos ante la normalidad que corrompe la naturaleza
              y condena a miles de millones de personas a la pobreza y al
              agotamiento de sus corpos. No podemos permitir que continúen
              destruyendo la Amazonía que está cada vez más cerca del punto sin
              retorno. Necesitamos usar de la suspensión de las actividades
              económicas impuestas por el virus para volver a imaginar un futuro
              donde podamos y queramos vivir. Mantenemos un distanciamiento
              físico, pero no un aislamiento social. Las ideas tienen que
              circular. Imaginar el futuro es empezar a crearlo.
            </p>
            <p>
              ¿Por qué lanzamos este movimiento? Porque queremos un mundo para
              los humanos y sus futuras generaciones - y todos los seres no
              humanos que habitan la Tierra. Tenemos que unirnos en torno a esta
              urgencia. Si no nos movemos, tendremos solo un futuro hostil, en
              un planeta devorado por el capitalismo y por la crisis climática
              ocasionada por un modo de producción incompatible con la vida. La
              destrucción de la naturaleza, de la cual la mayoría de los humanos
              se ha despegado trágicamente, causará cada vez más pandemias y
              está sobrecalentando el planeta.
            </p>
            <p>
              Lanzamos este movimiento porque no queremos ser sacrificados como
              ganado. Ya sea en el campo o en la ciudad, queremos vivir como
              selva - de pie - y luchar.
            </p>
            <h3>Como funciona</h3>
            <p>
              Te invitamos a elaborar cinco propuestas para posponer el fin del
              mundo, imaginándote posibilidades de futuros pos pandemia de la
              covid-19. Creemos que las preguntas son tan importantes como las
              respuestas. Para ayudarte en este ejercicio de imaginación,
              sugerimos cinco puntos en la continuación. Los temas son
              desencadenantes para que puedas crear tus preguntas y luego
              responderlas.
            </p>
            <ol>
              <li>
                Antídotos contra el fin del mundo: imagínate cómo quieres vivir
                (¡atrévete! sueña, crea, ve más allá de la razón).
              </li>
              <li>
                Democracia: Propón políticas públicas, así como el cambio de
                leyes y regulaciones, para reducir las desigualdades de raza,
                género y clase, y para que la democracia sea más que sólo votar
                (¡atrévete! y ve por tu objetivo).
              </li>
              <li>
                Consumo: Señala alternativas para eliminar las prácticas de
                consumo que esclavizan a nuestra sociedad (¡atrévete! y sé
                específico).
              </li>
              <li>
                Emergencia Climática: Sugiere acciones para impedir la
                destrucción de la naturaleza, asegurándote de la protección de
                todas las formas de vida en el planeta (¡atrévete! y sé
                combatiente).
              </li>
              <li>
                Insurrección: ¡Define la mejor acción de desobediencia civil
                para crear el futuro donde quieres vivir. (¡atrévete!)
              </li>
            </ol>
            <p>
              Las propuestas deben enviarse en videos de un minuto cada uno. En
              el inicio del video, díganos tu nombre, tu ciudad y país que
              vives. Los videos, grabados en posición horizontal, deben
              publicarse en las redes sociales con el hashtag #liberaelfuturo o
              encaminarse por WhatsApp +55 (11) 975579830. Estos videos se
              subirán en esta plataforma digital abierta. El material producido
              no pertenece a nadie en particular, sino a todos colectivamente.
              Tu puedes divulgarlos, analizarlos y llevarlos a cabo acciones.
            </p>
            <p>
              Sabemos que pensar sobre lo que queremos y exponer nuestros
              pensamientos para el mundo puede ser difícil. Es realmente difícil
              intentar cambiar el mundo. Cuando empiezas, te darás cuenta de que
              el gesto de imaginar - solo o con tu grupo de amigos, comunidad,
              colectivo, organización o empresa - ya está cambiándote. Imaginar
              es una fuerza poderosa. Si no quieras partir de los temas
              propuestos, solo contéstanos una pregunta:
            </p>
            <p>
              ¿Que futuro quieres libertar? No desistas. Desistir de luchar por
              el futuro, en este momento histórico, puede significar desistir
              del presente.
            </p>
            <p>
              “El futuro está aquí y ahora, puede que no haya el año que viene”,
              advierte Ailton Krenak.
            </p>
            <img
              src={require('../assets/headers/HOME_DESTAQUE_13.jpg')}
              alt=""
            />
            <h3>Quiénes somos</h3>
            <p>
              Somos yo+1+. Somos un movimiento para la liberación del futuro. Y
              en movimiento crecemos todos los días. No hay autoría, no hay
              captura. Te invitamos a contribuir con una reflexión crítica y
              dinámica sobre el momento posterior a la pandemia y sobre otros
              mundos posibles. En esta red somos Rio y calle, imaginación y
              realidad, somos humanos y más que humanos. La forma que el mundo
              giraba hasta la crisis del nuevo coronavirus es una catástrofe
              anunciada. Tenemos una de las últimas oportunidades para
              desviarnos de la ruta que nos lleva rápidamente al abismo y que ya
              ha inaugurado el tiempo de las pandemias.
            </p>
            <p>
              Creemos importante registrar nuestra presencia y nuestra
              imaginación. Esto ayudará a comprender quiénes somos y lo que
              queremos. También nos permite la creación de un documento vivo
              para las generaciones futuras y una fuente de investigación para
              comprender ese momento limitante del planeta. A continuación,
              creamos un antiformulario con preguntas que ayúdate a comprenderlo
              mejor y, al comprenderlo, podemos comprender mejor el mundo en que
              vivimos.
            </p>
            <p>
              Si desea componer este movimiento con nosotros, te pedimos que
              complete el antiformulario como deseas - todo o solo en parte.
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                [link para el formulario]
              </a>
            </p>
          </div>
        ),
      },
    },
  },
};

export default data;
