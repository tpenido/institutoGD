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
        titulo: '“A coisa mais importante para um ser humano é a sua narrativa, o seu propósito. Sem narrativa, somos como um ator no palco sem saber o roteiro.” – Gilberto Dimenstein',
        subtitulo:'Em breve lançaremos o Instituto Gilberto Dimenstein. Foram tantas as ideia, aprendizados e iniciativas transformadoras que precisamos da ajuda de cada um para conseguir mapear sua influência na vida das pessoas e o impacto de suas realizações.',
          
        participe: 'Participe',
        conheca: 'Conheça',
        video: 'Veja o vídeo',
        videoID: '3HwhE7PTkaE',
      },
      en: {
        titulo: 'This is the movement to free our future',
        subtitulo:
          'Bring your five proposals, ask your questions, imagine answers to the future post-pandemic',
        video: 'Watch video',
        conheca: 'About',
        participe: 'Join Us',
        videoID: 'vs4gwdQO56E',
      },
      es: {
        titulo: 'Este és el movimiento para liberar el futuro',
        subtitulo:
          'Trae tus cinco propuestas, haz tus preguntas, imagina respuestas para el futuro pos pandemia',
        video: 'Ver el video',
        conheca: 'Sobre',
        participe: 'Participar',
        videoID: '-I6OnQfn9Ik',
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
    participe: {
      pt: {
        menuTitle: 'Participe',
        titulo: 'Participe',
        subtitulo: 'Como participar',
        content: (
          <div>
            <h3>Como participar</h3>
            <ol>
              <li>
                Divulgar o movimento #LiberteoFuturo #FreeTheFuture nas suas
                redes;
              </li>
              <li>
                Grave o vídeo e divulgue-o nas suas redes com as #LiberteoFuturo
                #FreeTheFuture;
              </li>
              <li>Grave o vídeo, divulgue-o e planeje ações para o futuro;</li>
              <li>
                Grave o vídeo e divulgue-o, planeje ações para o futuro e
                execute-as no presente.
              </li>
            </ol>
            <h3>Como gravar seu vídeo</h3>
            <ul>
              <li>Procure um lugar com luminosidade boa;</li>
              <li>
                Grave na horizontal ou vertical, como preferir, de acordo com a
                rede social escolhida;
              </li>
              <li>
                Os vídeos devem ser de 1 min (para cada resposta/reflexão);
              </li>
              <li>
                Sempre começar sua fala com seu nome e de onde você é (em cada
                um dos vídeos que escolher fazer!);
              </li>
              <li>
                São 5 vídeos no total, portanto, mas vc não precisa fazer todos
                se não se sentir confortável - faça apenas aquilo que fizer
                sentido e te inspirar;
              </li>
              <li>
                Estas 5 provocações são pontos de partida, mas seja livre! Use a
                arte e a criatividade, faça do seu jeito.
                <ol>
                  <li>
                    Antídotos contra o fim do mundo: imagine como quer viver.
                    (ouse! sonhe, crie, extrapole a razão.);
                  </li>
                  <li>
                    Democracia: proponha políticas públicas, assim como mudanças
                    nas leis e nas normas, para reduzir as desigualdades de
                    raça, gênero e classe e para que a democracia seja mais do
                    que votar a cada eleição. (ouse! e seja objetivo.);
                  </li>
                  <li>
                    Consumo: indique alternativas para eliminar as práticas de
                    consumo que escravizam a nossa e as outras espécies. (ouse!
                    e seja específico.);
                  </li>
                  <li>
                    Emergência Climática: sugira ações para impedir a destruição
                    da natureza, garantindo a continuidade de todas as formas de
                    vida no planeta. (ouse! e seja combatente.);
                  </li>
                  <li>
                    Insurreição: defina a melhor ação de desobediência civil
                    para criar o futuro onde você quer viver. (ouse!).
                  </li>
                </ol>
              </li>
              <li>
                Os vídeos devem ser postados em redes sociais (Instagram,
                Twitter, Facebook, Tik Tok) com a hashtag #LiberteoFuturo ou
                enviados por Whatsapp para +55 (11) 975579830.
              </li>
              <li>
                O material produzido não pertence a ninguém em particular, será
                público e é de todas e todos nós coletivamente. Você pode
                divulgar, analisar e realizar ações.
              </li>
            </ul>
            <hr />
            <Link to="/laboratorio">PARTICIPE DOS LABORATÓRIOS SOCIAIS</Link>
            <hr />
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                [Antiformulário]
              </a>
            </p>
          </div>
        ),
      },
      en: {
        menuTitle: 'Join us',
        titulo: 'Join us',
        subtitulo: 'Ways to join',
        content: (
          <div>
            <h3>Ways to join</h3>
            <ol>
              <li>
                Post about the #LiberteoFuturo #FreeTheFuture movement on social
                media;
              </li>
              <li>
                Record your video and share it #LiberteoFuturo #FreeTheFuture;
              </li>
              <li>
                Record your video, share it, and plan actions for the future;
              </li>
              <li>
                Record your video, share it, plan actions for the future, and
                act in the present.
              </li>
            </ol>
            <h3>Tips to record your video</h3>
            <ul>
              <li>Search for a well illuminated place;</li>
              <li>
                Record your video on horizontal or vertical, as you wish,
                according to the social media network you’ve chosen to share
                your video;
              </li>
              <li>
                Videos must last a maximum of 1 minute (to each answer,
                reflection);
              </li>
              <li>
                Always start by saying who you are and where you are from (in
                every video you choose to record!);
              </li>
              <li>
                Considering our propositions, there would be a total of 5
                videos, but you don’t have to do all if you don’t feel
                comfortable - just do what you feel that makes sense and, most
                of all, talk about the propositions that really inspire you;
              </li>
              <li>
                These are the 5 propositions you can use as a starting point,
                but be free! Use art, creativity and do it on your own way;
                <ol>
                  <li>
                    Antidotes against the end of the world: imagine how you want
                    to live. (dare! dream, create, extrapolate reason.);
                  </li>
                  <li>
                    Democracy: propose public policies and legislative and
                    normative changes that will reduce racial, gender, and class
                    inequalities and take democracy beyond the mere act of
                    voting every election. (Dare! And be objective.);
                  </li>
                  <li>
                    Consumption: suggest ways of eliminating the consumption
                    habits that enslave our species and others as well. (Dare!
                    And be specific.);
                  </li>
                  <li>
                    Climate: suggest actions to stop the destruction of nature
                    and guarantee the continuity of all forms of life on the
                    planet. (Dare! And be a fighter.);
                  </li>
                  <li>
                    Insurrection: define the best form of civil disobedience for
                    creating the future in which you want to live. (Dare!).
                  </li>
                </ol>
              </li>
              <li>
                Videos should be posted on social media (Instagram, Twitter,
                Facebook, Tik Tok) with the hashtag #FreeTheFuture or sent via
                WhatsApp to the number +55 (11) 975579830;
              </li>
              <li>
                The material you produce belongs to no one in particular. It
                will be public and it is owned by all of us collectively. You
                can share, analyse and take action.
              </li>
            </ul>
            <hr />
            <Link to="/laboratorio">
              PARTICIPE IN THE SOCIAL LABORATORIES/WORKSHOP
            </Link>
            <hr />
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                [Antiformulário]
              </a>
            </p>
          </div>
        ),
      },
      es: {
        menuTitle: 'Participa',
        titulo: 'Participa',
        subtitulo: 'Como participar',
        content: (
          <div>
            <h3>Como participar</h3>
            <ol>
              <li>Promueva el movimiento #LiberaElFuturo en tus redes;</li>
              <li>
                Graba el video y publícalo en tus redes con #LiberaElFuturo;
              </li>
              <li>Graba el video, publícalo y crea acciones para el futuro;</li>
              <li>
                Graba el video, publícalo, crea acciones para el futuro y hazlas
                ahora.
              </li>
            </ol>
            <h3>Para grabar tu video</h3>
            <ul>
              <li>Busca un lugar con buena luz.</li>
              <li>
                Graba horizontal o verticalmente, según prefieras, de acuerdo
                con la red social elegida.
              </li>
              <li>
                Los videos deben durar 1 minuto (para cada respuesta /
                reflexión)
              </li>
              <li>
                Siempre empieza tu discurso con tu nombre y de dónde eres (en
                cada uno de los videos que elijas hacer)
              </li>
              <li>
                Son 5 videos en total, por lo tanto, no es necesario hacerlos
                todos si no te sientes cómodo - sólo haz lo que tenga sentido
                para tí y te inspire.
              </li>
              <li>
                Estos son los 5 temas que debes tener como punto de partida,
                ¡pero sé libre! Usa el arte y la creatividad, hazlo a tu manera.
                <ol>
                  <li>
                    Antídotos contra el fin del mundo: imagínate cómo quieres
                    vivir (¡atrévete! sueña, crea, ve más allá de la razón).
                  </li>
                  <li>
                    Democracia: Propón políticas públicas, así como el cambio de
                    leyes y regulaciones, para reducir las desigualdades de
                    raza, género y clase, y para que la democracia sea más que
                    sólo votar (¡atrévete! y ve por tu objetivo).
                  </li>
                  <li>
                    Consumo: Señala alternativas para eliminar las prácticas de
                    consumo que esclavizan a nuestra sociedad (¡atrévete! y sé
                    específico).
                  </li>
                  <li>
                    Emergencia Climática: Sugiere acciones para impedir la
                    destrucción de la naturaleza, asegurándote de la protección
                    de todas las formas de vida en el planeta (¡atrévete! y sé
                    combatiente).
                  </li>
                  <li>
                    Insurrección: ¡Define la mejor acción de desobediencia civil
                    para crear el futuro donde quieres vivir. (¡atrévete!)
                  </li>
                </ol>
              </li>
              <li>
                Los vídeos deben publicarse en las redes sociales (Instagram,
                Twitter, Facebook, Tik Tok) con el hashtag #liberaelfuturo o
                enviarse por WhatsApp al +55 (11) 975579830.
              </li>
              <li>
                El material producido no pertenece a nadie en particular, será
                público y pertenece a todos colectivamente. Tu puedes divulgar,
                analizar y llevar a cabo las acciones.
              </li>
            </ul>
            <hr />
            <Link to="/laboratorio">
              PARTICIPA DE LOS LABORATORIOS SOCIALES
            </Link>
            <hr />
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc74-rSYZuEfts-7xkj_oh5AFmdY-WUJWkTIgQicyo5w7vhGA/viewform"
                target="_blank"
              >
                [Antiformulário]
              </a>
            </p>
          </div>
        ),
      },
    },
  },
};

export default data;
