import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Menu, X, ChevronLeft, ChevronRight, ChevronDown, Bookmark, Languages, Quote, Lightbulb, NotebookPen, Sparkles, Volume2, RotateCcw, Check, Clock, Zap, BookText, Library, ListTree, MessageSquare, GraduationCap, Compass } from 'lucide-react';
import { CANCIONES_SONGS } from './canciones.js';

/* =============================================================
   SPANISH — A Personal Reading Book
   Designed as a quiet, editorial reading space.
   Two ink colors echo the original sketch: forest green + sienna.
   ============================================================= */

const LEVELS = ['A1', 'A2', 'B1', 'B2'];

// Icon for each section — used in sidebar nav and chapter headers
const SECTION_ICONS = {
  tiempos: Clock,           // five tenses — time
  verbos: Zap,              // top 10 verbs — energy / action
  verbos2: Zap,             // top 10 part 2
  gramatica: ListTree,      // grammar rules — structure
  lectura: Library,         // reading — library
  vocabulario: BookText,    // word lists
  palabras: GraduationCap,  // 5000-word memorization lab
  frases: MessageSquare,    // useful phrases — speech bubble
  tips: Lightbulb,          // strategy tips
  resumen: Compass,         // takeaways — orientation
};

function SectionIcon({ id, size = 18, className = '' }) {
  const Ico = SECTION_ICONS[id] || BookOpen;
  return <Ico size={size} className={className} />;
}

const SECTIONS = [
  {
    id: 'tiempos',
    label: 'Tiempos',
    sublabel: 'Los cinco tiempos',
    chapters: [
      // ============= LOS CINCO TIEMPOS — creative tense explainer =============
      {
        id: 'tiempos',
        level: 'A2',
        title: 'Los Cinco Tiempos',
        subtitle: 'Cinco modos de habitar el tiempo',
        intro: 'Spanish does not have many tenses by accident — each one is a different way of standing in time. Before learning the 10 verbs, learn the 5 rooms each verb lives in: Presente, Pretérito, Imperfecto, Condicional, Futuro. Read this chapter once. Come back to it whenever a tense feels confusing.',
        blocks: [
          // ---------- PRESENTE ----------
          {
            type: 'lesson-section',
            heading: 'Presente — la ventana abierta',
            paragraphs: [
              'The present tense is a window you keep open. Through it you see what is true right now, what is true always, and what is true habitually. It is the only tense that does triple duty — and that is why beginners learn it first.',
              'Spanish presente covers three different English meanings. "Hablo español" can mean "I speak Spanish" (in general, a fact about you), "I am speaking Spanish" (right now, this conversation), or even "I will speak Spanish at the meeting" (near future, scheduled). One verb form, three time-flavors. Context makes the choice.',
            ],
          },
          {
            type: 'lesson-section',
            heading: 'When to use Presente',
            text: 'Use it for habits, universal truths, things happening right now, near-future plans, ordering food, and hypothetical statements with "si".',
            examples: [
              { es: 'Trabajo en un banco.', en: 'I work at a bank. (habit)' },
              { es: 'El sol sale por el este.', en: 'The sun rises in the east. (universal truth)' },
              { es: 'Estudio para mi examen.', en: 'I am studying for my exam. (right now)' },
              { es: 'Mañana voy a Madrid.', en: 'Tomorrow I am going to Madrid. (near future)' },
              { es: 'Quiero un café, por favor.', en: 'I would like a coffee, please. (ordering)' },
              { es: 'Si llueve, no salimos.', en: 'If it rains, we do not go out. (hypothetical)' },
            ],
          },
          {
            type: 'lesson-section',
            heading: 'How to form it — regular endings',
            text: 'Drop the -ar, -er, or -ir from the infinitive. Add the ending that matches the subject. Three sets — one per verb family. The endings appear in blue throughout this chapter — that is the part you add to the verb stem to mark the tense.',
            table: {
              headers: ['Persona', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
              rows: [
                ['yo', 'habl{o}', 'com{o}', 'viv{o}'],
                ['tú', 'habl{as}', 'com{es}', 'viv{es}'],
                ['él/ella/Ud.', 'habl{a}', 'com{e}', 'viv{e}'],
                ['nosotros', 'habl{amos}', 'com{emos}', 'viv{imos}'],
                ['vosotros', 'habl{áis}', 'com{éis}', 'viv{ís}'],
                ['ellos/Uds.', 'habl{an}', 'com{en}', 'viv{en}'],
              ],
            },
          },
          {
            type: 'tip',
            text: 'Spanish drops subject pronouns most of the time. The ending of the verb already tells you who is doing the action. "Hablo" already means "I speak" — saying "yo hablo" only adds emphasis.',
          },
          // ---------- PRETÉRITO ----------
          {
            type: 'lesson-section',
            heading: 'Pretérito — la puerta cerrada',
            paragraphs: [
              'If presente is an open window, pretérito is a door that just closed. The action happened, it ended, and now it lives in a sealed past. This is the tense of stories, of dates, of events with clear edges.',
              'When you say "Ayer hablé con mi madre", you are reporting a transaction that started, completed, and finished. The clock ran, then it stopped. That is what pretérito does — it puts an action between two walls in time.',
            ],
          },
          {
            type: 'lesson-section',
            heading: 'When to use Pretérito',
            text: 'Use it for completed actions, specific dates and times, sequences of events, and things that began or ended.',
            examples: [
              { es: 'Ayer hablé con mi padre.', en: 'Yesterday I spoke with my father.' },
              { es: 'En 2018 viví en Marruecos.', en: 'In 2018 I lived in Morocco.' },
              { es: 'Empezó a llover a las cinco.', en: 'It started to rain at five. (a beginning)' },
              { es: 'La película terminó muy tarde.', en: 'The movie ended very late. (an ending)' },
              { es: 'Llegué, vi, vencí.', en: 'I came, I saw, I conquered. (sequence)' },
            ],
          },
          {
            type: 'lesson-section',
            heading: 'How to form it — regular endings',
            text: 'Note the accent marks on yo and él forms — they carry the stress. -er and -ir verbs share one set of endings.',
            table: {
              headers: ['Persona', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
              rows: [
                ['yo', 'habl{é}', 'com{í}', 'viv{í}'],
                ['tú', 'habl{aste}', 'com{iste}', 'viv{iste}'],
                ['él/ella/Ud.', 'habl{ó}', 'com{ió}', 'viv{ió}'],
                ['nosotros', 'habl{amos}', 'com{imos}', 'viv{imos}'],
                ['vosotros', 'habl{asteis}', 'com{isteis}', 'viv{isteis}'],
                ['ellos/Uds.', 'habl{aron}', 'com{ieron}', 'viv{ieron}'],
              ],
            },
          },
          {
            type: 'tip',
            text: 'The nosotros form of -ar and -ir verbs is the same in Presente and Pretérito (hablamos, vivimos). Only context tells them apart — words like "ayer", "hoy", "siempre" do the work the verb cannot.',
          },
          // ---------- IMPERFECTO ----------
          {
            type: 'lesson-section',
            heading: 'Imperfecto — la película en bucle',
            paragraphs: [
              'Imperfecto is a movie that loops. No clear start, no clear end — just an ongoing scene. If pretérito is a snapshot, imperfecto is the slow-motion footage of childhood, of routines, of weather, of how things used to be.',
              'When you say "Cuando era niño, jugaba en el parque", you are not reporting a single event. You are painting a backdrop — the years of your childhood, the parks you played in. The action has duration but no edges.',
            ],
          },
          {
            type: 'lesson-section',
            heading: 'When to use Imperfecto',
            text: 'Use it for past habits, descriptions, age, time and weather in the past, and for "background" actions that were going on when something else happened.',
            examples: [
              { es: 'De niño jugaba al fútbol.', en: 'As a child I used to play soccer. (past habit)' },
              { es: 'La casa era grande y blanca.', en: 'The house was big and white. (description)' },
              { es: 'Tenía diez años entonces.', en: 'I was ten years old then. (age in the past)' },
              { es: 'Eran las tres de la tarde.', en: 'It was three in the afternoon. (time in the past)' },
              { es: 'Llovía cuando salí de casa.', en: 'It was raining when I left home. (background + foreground)' },
            ],
          },
          {
            type: 'lesson-section',
            heading: 'How to form it — only two endings',
            text: 'The imperfecto is one of the kindest tenses to learn — almost no irregulars (only ser, ir, ver). Two ending sets cover everything else.',
            table: {
              headers: ['Persona', 'hablar (-ar)', 'comer (-er)', 'vivir (-ir)'],
              rows: [
                ['yo', 'habl{aba}', 'com{ía}', 'viv{ía}'],
                ['tú', 'habl{abas}', 'com{ías}', 'viv{ías}'],
                ['él/ella/Ud.', 'habl{aba}', 'com{ía}', 'viv{ía}'],
                ['nosotros', 'habl{ábamos}', 'com{íamos}', 'viv{íamos}'],
                ['vosotros', 'habl{abais}', 'com{íais}', 'viv{íais}'],
                ['ellos/Uds.', 'habl{aban}', 'com{ían}', 'viv{ían}'],
              ],
            },
          },
          {
            type: 'tip',
            text: 'The hardest skill in Spanish past tenses is choosing between Pretérito and Imperfecto. Ask: did the action have a clear start or end (Pretérito) or was it a backdrop / habit / description (Imperfecto)? "Ayer leí un libro" — finished it. "Leía un libro cuando llamaste" — was in the middle of reading it.',
          },
          // ---------- CONDICIONAL ----------
          {
            type: 'lesson-section',
            heading: 'Condicional — el mapa de los "si"',
            paragraphs: [
              'Condicional is what you would do — under the right circumstances, in another universe, in a politer voice. It is the tense of imagination, of unrealized plans, of soft requests.',
              'The English giveaway is "would". "I would buy a house if I had money" — comprar would be condicional. "Could you pass the salt?" — pasar would be condicional. Whenever you slip into the imagined or polite, Spanish reaches for this tense.',
            ],
          },
          {
            type: 'lesson-section',
            heading: 'When to use Condicional',
            text: 'Hypothetical actions, polite requests, suggestions, and probability about the past.',
            examples: [
              { es: 'Si fuera rico, viajaría más.', en: 'If I were rich, I would travel more. (hypothetical)' },
              { es: '¿Podrías ayudarme?', en: 'Could you help me? (polite request)' },
              { es: 'Yo en tu lugar no diría nada.', en: 'In your place, I would not say anything. (suggestion)' },
              { es: 'Serían las diez cuando llegó.', en: 'It must have been around ten when he arrived. (probability about the past)' },
              { es: 'Me gustaría un café, por favor.', en: 'I would like a coffee, please. (polite wish)' },
            ],
          },
          {
            type: 'lesson-section',
            heading: 'How to form it — endings on the infinitive',
            text: 'Take the WHOLE infinitive (hablar, comer, vivir) and add the ending. All three verb families share the same set of endings — the easiest pattern in Spanish to memorize.',
            table: {
              headers: ['Persona', 'hablar', 'comer', 'vivir'],
              rows: [
                ['yo', 'hablar{ía}', 'comer{ía}', 'vivir{ía}'],
                ['tú', 'hablar{ías}', 'comer{ías}', 'vivir{ías}'],
                ['él/ella/Ud.', 'hablar{ía}', 'comer{ía}', 'vivir{ía}'],
                ['nosotros', 'hablar{íamos}', 'comer{íamos}', 'vivir{íamos}'],
                ['vosotros', 'hablar{íais}', 'comer{íais}', 'vivir{íais}'],
                ['ellos/Uds.', 'hablar{ían}', 'comer{ían}', 'vivir{ían}'],
              ],
            },
          },
          {
            type: 'tip',
            text: 'The 12 verbs that have irregular Futuro stems share those exact same stems in Condicional. If you know "tendré, tendrás, tendrá" (Futuro), you know "tendría, tendrías, tendría" (Condicional). Learn one set; you get the other free.',
          },
          // ---------- FUTURO ----------
          {
            type: 'lesson-section',
            heading: 'Futuro — la promesa al horizonte',
            paragraphs: [
              'Futuro is a promise you throw toward the horizon. "Iré" is more declarative than "voy a ir" — it carries weight, intention, sometimes prediction. It is also the tense of hypothesis about the present: "Serán las diez" — "It must be around ten."',
              'In daily speech, Spanish prefers "ir + a + infinitivo" for plans (voy a comer, vas a trabajar). The simple Futuro shows up in writing, in formal speech, in promises, and crucially, in guesses about right now.',
            ],
          },
          {
            type: 'lesson-section',
            heading: 'When to use Futuro',
            text: 'Future plans (formal), predictions, promises, and probability about the present.',
            examples: [
              { es: 'Mañana hablaré con él.', en: 'Tomorrow I will speak with him. (future plan)' },
              { es: 'Te llamaré cuando llegue.', en: 'I will call you when I arrive. (promise)' },
              { es: '¿Dónde estará Juan?', en: 'Where could Juan be? (probability about the present)' },
              { es: 'Tendrás hambre, ¿no?', en: 'You must be hungry, right? (probability about the present)' },
              { es: 'Algún día seré abogado.', en: 'Someday I will be a lawyer. (prediction)' },
            ],
          },
          {
            type: 'lesson-section',
            heading: 'How to form it — endings on the infinitive',
            text: 'Same trick as Condicional — take the whole infinitive and add the endings. One set works for all three verb families. Note that every form except nosotros carries a written accent.',
            table: {
              headers: ['Persona', 'hablar', 'comer', 'vivir'],
              rows: [
                ['yo', 'hablar{é}', 'comer{é}', 'vivir{é}'],
                ['tú', 'hablar{ás}', 'comer{ás}', 'vivir{ás}'],
                ['él/ella/Ud.', 'hablar{á}', 'comer{á}', 'vivir{á}'],
                ['nosotros', 'hablar{emos}', 'comer{emos}', 'vivir{emos}'],
                ['vosotros', 'hablar{éis}', 'comer{éis}', 'vivir{éis}'],
                ['ellos/Uds.', 'hablar{án}', 'comer{án}', 'vivir{án}'],
              ],
            },
          },
          {
            type: 'lesson-section',
            heading: 'The 12 irregular Futuro stems',
            text: 'Most verbs use the full infinitive. These twelve change the stem before adding the ending. The endings stay regular. Memorize the stems and you have unlocked all 12 of them — plus their Condicional forms.',
            table: {
              headers: ['Verbo', 'Stem', 'Ejemplo (yo)'],
              rows: [
                ['decir', 'dir-', 'dir{é}'],
                ['hacer', 'har-', 'har{é}'],
                ['poder', 'podr-', 'podr{é}'],
                ['poner', 'pondr-', 'pondr{é}'],
                ['querer', 'querr-', 'querr{é}'],
                ['saber', 'sabr-', 'sabr{é}'],
                ['salir', 'saldr-', 'saldr{é}'],
                ['tener', 'tendr-', 'tendr{é}'],
                ['valer', 'valdr-', 'valdr{é}'],
                ['venir', 'vendr-', 'vendr{é}'],
                ['caber', 'cabr-', 'cabr{é}'],
                ['haber', 'habr-', 'habr{é}'],
              ],
            },
          },
          // ---------- The big picture ----------
          {
            type: 'lesson-section',
            heading: 'Las cinco habitaciones — un resumen',
            text: 'A single mental map: each tense is a different way of standing in time. Memorize the metaphors first, the endings second.',
            table: {
              headers: ['Tiempo', 'Metáfora', 'En una palabra'],
              rows: [
                ['Presente', 'la ventana abierta', 'now / always / habitual'],
                ['Pretérito', 'la puerta cerrada', 'completed in the past'],
                ['Imperfecto', 'la película en bucle', 'ongoing / habitual past'],
                ['Condicional', 'el mapa de los "si"', 'would / could / polite'],
                ['Futuro', 'la promesa al horizonte', 'will / probably is'],
              ],
            },
          },
          {
            type: 'takeaway',
            text: 'You do not memorize tenses. You inhabit them. Once each metaphor is in your head — open window, closed door, looping film, map of ifs, promise to the horizon — choosing the right tense becomes a feeling, not a calculation. Come back to this chapter whenever a verb form feels foreign. The endings will follow once the meaning is clear.',
          },
        ],
      },
    ],
  },
  {
    id: 'verbos',
    label: 'Verbos',
    sublabel: 'Top 10',
    chapters: [
      // 1. HABER
      {
        id: 'haber',
        level: 'A2',
        title: 'Haber',
        subtitle: 'auxiliar — "to have"',
        rank: 1,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'habiendo', past: 'habido' },
            tenseGroups: [
              ['Presente', 'Pretérito', 'Imperfecto'],
              ['Condicional', 'Futuro'],
            ],
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: '[he]' },
                { p: 'tú', f: '[has]' },
                { p: 'él/ella/Ud.', f: '[ha]' },
                { p: 'nosotros', f: '[hemos]' },
                { p: 'vosotros', f: 'habéis' },
                { p: 'ellos/Uds.', f: '[han]' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[hub]e' },
                { p: 'tú', f: '[hub]iste' },
                { p: 'él/ella/Ud.', f: '[hub]o' },
                { p: 'nosotros', f: '[hub]imos' },
                { p: 'vosotros', f: '[hub]isteis' },
                { p: 'ellos/Uds.', f: '[hub]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'había' },
                { p: 'tú', f: 'habías' },
                { p: 'él/ella/Ud.', f: 'había' },
                { p: 'nosotros', f: 'habíamos' },
                { p: 'vosotros', f: 'habíais' },
                { p: 'ellos/Uds.', f: 'habían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[habr]ía' },
                { p: 'tú', f: '[habr]ías' },
                { p: 'él/ella/Ud.', f: '[habr]ía' },
                { p: 'nosotros', f: '[habr]íamos' },
                { p: 'vosotros', f: '[habr]íais' },
                { p: 'ellos/Uds.', f: '[habr]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[habr]é' },
                { p: 'tú', f: '[habr]ás' },
                { p: 'él/ella/Ud.', f: '[habr]á' },
                { p: 'nosotros', f: '[habr]emos' },
                { p: 'vosotros', f: '[habr]éis' },
                { p: 'ellos/Uds.', f: '[habr]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo auxiliar',
                note: 'usado en tiempos compuestos',
                senses: [
                  {
                    n: '1',
                    meaning: 'to have',
                    examples: [
                      { es: 'Nunca habían ido a Costa Rica antes del verano pasado.', en: 'They had never been to Costa Rica before last summer.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo modal',
                note: 'con la preposición "de" — expresa obligación',
                senses: [
                  {
                    n: '2a',
                    meaning: 'to have to',
                    examples: [
                      { es: 'He de ir al trabajo el sábado.', en: 'I have to go into work on Saturday.' },
                    ],
                  },
                  {
                    n: '2b',
                    meaning: 'must',
                    examples: [
                      { es: 'Has de hacer tu tarea esta noche.', en: 'You must do your homework tonight.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo impersonal',
                note: 'forma fija — hay, había, hubo, habrá',
                senses: [
                  {
                    n: '3',
                    meaning: 'to be (used with "there")',
                    subnote: 'expresa existencia',
                    examples: [
                      { es: 'No hay azúcar.', en: 'There is no sugar.' },
                      { es: 'No hubo tiempo para saludar a todos en la fiesta.', en: "There wasn't enough time to say hi to everyone at the party." },
                    ],
                  },
                  {
                    n: '4a',
                    meaning: 'must',
                    subnote: 'con "que" — obligación general',
                    examples: [
                      { es: 'Hay que lavar todos los platos después de cenar.', en: 'We must wash all the dishes after dinner.' },
                    ],
                  },
                  {
                    n: '4b',
                    meaning: 'should',
                    subnote: 'con "que" — recomendación',
                    examples: [
                      { es: 'Hay que hacer reservaciones para el hotel.', en: 'We should make reservations for the hotel.' },
                    ],
                  },
                  {
                    n: '5',
                    meaning: '— sin traducción directa',
                    subnote: 'usado para expresar tiempo',
                    examples: [
                      { es: 'No sé si habrá tiempo para comer algo.', en: "I don't know if there will be enough time to eat something." },
                      { es: 'Tiempo ha del terremoto.', en: 'The earthquake occurred a long time ago.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo transitivo',
                note: 'uso literario o formal',
                senses: [
                  {
                    n: '6',
                    meaning: 'to bear',
                    examples: [
                      { es: 'Los hijos habidos de la aventura no fueron reconocidos por su padre.', en: 'The children borne of the affair were not recognized by their father.' },
                    ],
                  },
                  {
                    n: '7',
                    meaning: '— suceder, ocurrir',
                    subnote: 'sin traducción directa',
                    examples: [
                      { es: 'El espectáculo habido esta semana está completamente vendido.', en: "This week's performance is totally sold out." },
                      { es: 'El accidente habido ayer resultó en dos fatalidades.', en: "Yesterday's accident resulted in two fatalities." },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo masculino',
                note: 'el haber',
                senses: [
                  {
                    n: '8',
                    meaning: 'asset',
                    subnote: 'patrimonio, propiedades',
                    examples: [
                      { es: 'Su haber consistía en la empresa familiar y dos mansiones.', en: 'Her assets consist of the family business and two mansions.' },
                    ],
                  },
                  {
                    n: '9',
                    meaning: 'credit side',
                    subnote: 'contabilidad',
                    examples: [
                      { es: 'El total del deber y del haber tienen que ser iguales.', en: 'The debit and credit side totals must be equal.' },
                    ],
                  },
                  {
                    n: '10',
                    meaning: 'credit',
                    subnote: 'logro, mérito',
                    examples: [
                      { es: 'Tiene tres artículos publicados a su haber.', en: 'She has three published articles to her credit.' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo plural',
                note: 'los haberes',
                senses: [
                  {
                    n: '11',
                    meaning: 'earnings',
                    subnote: 'pago, retribución',
                    examples: [
                      { es: 'Todavía no me han pagado los haberes del mes pasado.', en: "I still haven't been paid last month's earnings." },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'haberse',
                senses: [
                  {
                    n: '12',
                    meaning: 'to have it out with somebody',
                    subnote: 'enfrentarse',
                    examples: [
                      { es: 'Se las va a haber con su hermano si no paran de discutir.', en: "He's going to have it out with his brother if they don't stop arguing." },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 2. SER
      {
        id: 'ser',
        level: 'A1',
        title: 'Ser',
        subtitle: 'to be — essence, identity',
        rank: 2,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'siendo', past: 'sido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: '[soy]' },
                { p: 'tú', f: '[eres]' },
                { p: 'él/ella/Ud.', f: '[es]' },
                { p: 'nosotros', f: '[somos]' },
                { p: 'vosotros', f: '[sois]' },
                { p: 'ellos/Uds.', f: '[son]' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[fu]i' },
                { p: 'tú', f: '[fu]iste' },
                { p: 'él/ella/Ud.', f: '[fu]e' },
                { p: 'nosotros', f: '[fu]imos' },
                { p: 'vosotros', f: '[fu]isteis' },
                { p: 'ellos/Uds.', f: '[fu]eron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: '[er]a' },
                { p: 'tú', f: '[er]as' },
                { p: 'él/ella/Ud.', f: '[er]a' },
                { p: 'nosotros', f: '[ér]amos' },
                { p: 'vosotros', f: '[er]ais' },
                { p: 'ellos/Uds.', f: '[er]an' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'sería' },
                { p: 'tú', f: 'serías' },
                { p: 'él/ella/Ud.', f: 'sería' },
                { p: 'nosotros', f: 'seríamos' },
                { p: 'vosotros', f: 'seríais' },
                { p: 'ellos/Uds.', f: 'serían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'seré' },
                { p: 'tú', f: 'serás' },
                { p: 'él/ella/Ud.', f: 'será' },
                { p: 'nosotros', f: 'seremos' },
                { p: 'vosotros', f: 'seréis' },
                { p: 'ellos/Uds.', f: 'serán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo copulativo',
                note: 'Define identidad, profesión, características',
                senses: [
                  { n: '1', meaning: 'to be',
                    examples: [
                      { es: 'Es alto y rubio.', en: 'He\u2019s tall and blond.' },
                      { es: 'Mi abuela es profesora.', en: 'My grandma is a teacher.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '2', meaning: 'to be', subnote: 'usado para indicar origen',
                    examples: [
                      { es: 'Soy de Nueva York.', en: 'I\u2019m from New York.' },
                    ],
                  },
                  { n: '3', meaning: 'to be', subnote: 'para servir como',
                    examples: [
                      { es: 'El l\u00e1piz es para escribir, no para lanzar.', en: 'Pencils are for writing, not for throwing.' },
                    ],
                  },
                  { n: '4', meaning: 'to be', subnote: 'usado al hablar de precios',
                    examples: [
                      { es: '\u00bfCu\u00e1nto es el total? \u2014 Son diez d\u00f3lares.', en: 'How much does it come to? \u2014 It\u2019s ten dollars.' },
                    ],
                  },
                  { n: '5', meaning: 'to be made of', subnote: 'usado para indicar composici\u00f3n',
                    examples: [
                      { es: 'El casillero antiguo de mi abuela es de roble.', en: 'My grandma\u2019s antique dresser is made of oak.' },
                    ],
                  },
                  { n: '6', meaning: 'to be (belong to)', subnote: 'usado para indicar posesi\u00f3n',
                    examples: [
                      { es: 'Este reloj es de mi madre.', en: 'This watch is my mother\u2019s.' },
                    ],
                  },
                  { n: '7', meaning: 'to be (take place)',
                    examples: [
                      { es: 'La fiesta ser\u00e1 en mi casa.', en: 'The party will be at my place.' },
                    ],
                  },
                  { n: '8', meaning: 'to root for', subnote: 'asociaci\u00f3n \u2014 usado con "de"',
                    examples: [
                      { es: 'Yo soy del mejor equipo del mundo: FC Barcelona.', en: 'I root for the best team in the world: FC Barcelona.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo impersonal',
                note: 'Forma fija \u2014 usado para expresar el tiempo',
                senses: [
                  { n: '9', meaning: 'to be',
                    examples: [
                      { es: 'Son las siete de la ma\u00f1ana.', en: 'It is seven in the morning.' },
                      { es: 'Era de noche cuando llegaron.', en: 'It was night when they arrived.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo auxiliar',
                note: 'Forma la voz pasiva',
                senses: [
                  { n: '10', meaning: 'to be',
                    examples: [
                      { es: 'El edificio fue dise\u00f1ado por un equipo de arquitectos.', en: 'The building was designed by a team of architects.' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo masculino',
                note: 'el ser',
                senses: [
                  { n: '11', meaning: 'being', subnote: 'entidad',
                    examples: [
                      { es: 'Hay un ser vivo en el lago, pero no s\u00e9 qu\u00e9 es.', en: 'There\u2019s a living being in the lake, but I don\u2019t know what it is.' },
                    ],
                  },
                  { n: '12', meaning: 'person', subnote: 'humano',
                    examples: [
                      { es: 'Su pap\u00e1 es un ser muy agradable.', en: 'Her dad is a very nice person.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 3. ESTAR
      {
        id: 'estar',
        level: 'A1',
        title: 'Estar',
        subtitle: 'to be — state, location',
        rank: 3,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'estando', past: 'estado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'est[oy]' },
                { p: 'tú', f: 'est[ás]' },
                { p: 'él/ella/Ud.', f: 'est[á]' },
                { p: 'nosotros', f: 'estamos' },
                { p: 'vosotros', f: 'estáis' },
                { p: 'ellos/Uds.', f: 'est[án]' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[estuv]e' },
                { p: 'tú', f: '[estuv]iste' },
                { p: 'él/ella/Ud.', f: '[estuv]o' },
                { p: 'nosotros', f: '[estuv]imos' },
                { p: 'vosotros', f: '[estuv]isteis' },
                { p: 'ellos/Uds.', f: '[estuv]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'estaba' },
                { p: 'tú', f: 'estabas' },
                { p: 'él/ella/Ud.', f: 'estaba' },
                { p: 'nosotros', f: 'estábamos' },
                { p: 'vosotros', f: 'estabais' },
                { p: 'ellos/Uds.', f: 'estaban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'estaría' },
                { p: 'tú', f: 'estarías' },
                { p: 'él/ella/Ud.', f: 'estaría' },
                { p: 'nosotros', f: 'estaríamos' },
                { p: 'vosotros', f: 'estaríais' },
                { p: 'ellos/Uds.', f: 'estarían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'estaré' },
                { p: 'tú', f: 'estarás' },
                { p: 'él/ella/Ud.', f: 'estará' },
                { p: 'nosotros', f: 'estaremos' },
                { p: 'vosotros', f: 'estaréis' },
                { p: 'ellos/Uds.', f: 'estarán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo copulativo',
                note: 'Describe estado, cualidad o emoci\u00f3n',
                senses: [
                  { n: '1', meaning: 'to be', subnote: 'usado para expresar una cualidad',
                    examples: [
                      { es: 'Este pastel de chocolate est\u00e1 delicioso.', en: 'This chocolate cake is delicious.' },
                      { es: 'Este hotel est\u00e1 muy concurrido.', en: 'This hotel is very popular.' },
                    ],
                  },
                  { n: '1b', meaning: 'to look',
                    examples: [
                      { es: 'Est\u00e1s muy guapa hoy. \u00bfAd\u00f3nde vas?', en: 'You look very nice today. Where are you going?' },
                    ],
                  },
                  { n: '2', meaning: 'to be', subnote: 'usado para expresar una emoci\u00f3n o estado',
                    examples: [
                      { es: 'Estoy enojada porque me acaban de dar una multa de estacionamiento.', en: 'I am angry because I just got a parking ticket.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '3', meaning: 'to be', subnote: 'para indicar ubicaci\u00f3n',
                    examples: [
                      { es: 'La casa est\u00e1 delante de la iglesia.', en: 'The house is in front of the church.' },
                    ],
                  },
                  { n: '4', meaning: 'to be (present)',
                    examples: [
                      { es: 'No est\u00e1 en casa.', en: 'He\u2019s not home.' },
                    ],
                  },
                  { n: '5a', meaning: 'to be on (vacation, trip, call)', subnote: 'usado con "de"',
                    examples: [
                      { es: 'Estaremos de vacaciones en Europa el verano entero.', en: 'We\u2019re going to be on vacation in Europe all summer long.' },
                    ],
                  },
                  { n: '5b', meaning: 'to be in (luck)',
                    examples: [
                      { es: '\u00a1Est\u00e1s de suerte! Me queda un par en ese color.', en: 'You\u2019re in luck! I have one pair left in that color.' },
                    ],
                  },
                  { n: '5c', meaning: 'to be working as',
                    examples: [
                      { es: 'Est\u00e1 de recepcionista hasta que consiga un mejor trabajo.', en: 'He\u2019s working as a receptionist until he finds something better.' },
                    ],
                  },
                  { n: '6', meaning: 'to be (feel)',
                    examples: [
                      { es: 'Est\u00e1 triste ahora que no tiene novia.', en: 'He is sad now that he doesn\u2019t have a girlfriend.' },
                    ],
                  },
                  { n: '7', meaning: 'to look (appear)',
                    examples: [
                      { es: '\u00a1Est\u00e1s genial con las gafas nuevas!', en: 'You look great with your new glasses!' },
                    ],
                  },
                  { n: '8', meaning: 'to stay (visit)',
                    examples: [
                      { es: 'Gabriel est\u00e1 con su padre esta noche.', en: 'Gabriel is staying with his father tonight.' },
                    ],
                  },
                  { n: '9', meaning: 'to be ready', subnote: 'estar terminado',
                    examples: [
                      { es: 'La comida ya est\u00e1. \u00a1Comamos!', en: 'The food is ready. Let\u2019s eat!' },
                    ],
                  },
                  { n: '10', meaning: 'to be (exist)',
                    examples: [
                      { es: 'Luego est\u00e1 el trabajo que queda por hacer.', en: 'Then there is the work that still needs to be done.' },
                    ],
                  },
                  { n: '11', meaning: 'to be in the mood for', subnote: 'usado con "para"',
                    examples: [
                      { es: 'No estoy para tus estupideces a estas horas.', en: 'I am not in the mood for your nonsense at this time of night.' },
                    ],
                  },
                  { n: '12', meaning: 'to have (illness)', subnote: 'usado con "con"',
                    examples: [
                      { es: 'Est\u00e1 con gripe desde el lunes.', en: 'He\u2019s had the flu since Monday.' },
                    ],
                  },
                  { n: '13', meaning: 'to be (fit, look)',
                    examples: [
                      { es: '\u00bfEsta falda queda bien o est\u00e1 muy apretada?', en: 'Does this skirt look good or is it too tight?' },
                    ],
                  },
                  { n: '14', meaning: '\u00bfest\u00e1? \u00bfestamos?', subnote: 'forma de pregunta \u2014 \u00bfentendido?',
                    examples: [
                      { es: 'No quiero que camines sola por la noche, \u00bfest\u00e1?', en: 'I don\u2019t want you walking alone at night, understood?' },
                      { es: 'Nos encontraremos a las siete para ir al cine, \u00bfestamos?', en: 'We\u2019ll meet at seven to go to the movie, all right?' },
                    ],
                  },
                  { n: '15', meaning: 'to be in favor of', subnote: 'usado con "por"',
                    examples: [
                      { es: 'Los estudiantes est\u00e1n por un aumento en ayuda financiera de parte de la universidad.', en: 'The students are in favor of the university providing more financial aid.' },
                    ],
                  },
                  { n: '16', meaning: 'to agree with', subnote: 'usado con "con"',
                    examples: [
                      { es: 'Estoy con Ana Sof\u00eda; no quiero escuchar m\u00e1s peleas entre ustedes.', en: 'I agree with Ana Sof\u00eda. I don\u2019t want to hear any more fighting between the two of you.' },
                    ],
                  },
                  { n: '17', meaning: 'to be (temperature)', subnote: 'usado con "a"',
                    examples: [
                      { es: '\u00a1El term\u00f3metro dice que est\u00e1 a 25 grados Fahrenheit pero que se siente como 6!', en: 'The thermometer says it\u2019s 25 degrees Fahrenheit out but that it feels like 6!' },
                    ],
                  },
                  { n: '18', meaning: 'to be (date)', subnote: 'usado con "a"',
                    examples: [
                      { es: 'Estamos a martes, 5 de enero.', en: 'It is Tuesday, January 5th.' },
                    ],
                  },
                  { n: '19', meaning: 'to be (season)', subnote: 'usado con "en"',
                    examples: [
                      { es: 'Mientras el hemisferio norte est\u00e1 en invierno, el hemisferio sur est\u00e1 en verano.', en: 'While the Northern Hemisphere is in winter, the Southern Hemisphere is in summer.' },
                    ],
                  },
                  { n: '20', meaning: 'to be (distance)', subnote: 'usado con "a"',
                    examples: [
                      { es: 'El banco est\u00e1 a tres cuadras de la plaza central.', en: 'The bank is three blocks from the town square.' },
                    ],
                  },
                  { n: '21', meaning: 'to remain to be', subnote: 'usado con "por" + infinitivo',
                    examples: [
                      { es: 'Est\u00e1 por verse si llover\u00e1 en la tarde.', en: 'It remains to be seen whether it will rain this afternoon.' },
                    ],
                  },
                  { n: '22', meaning: 'to be going to', subnote: 'inminencia \u2014 "por" + infinitivo',
                    examples: [
                      { es: 'Las nubes en la distancia indican que estar\u00e1 por llover esta noche.', en: 'The clouds in the distance indicate that it is going to rain tonight.' },
                    ],
                  },
                  { n: '23', meaning: 'still to be done', subnote: 'usado con "sin" + infinitivo',
                    examples: [
                      { es: 'Tengo tres libros que est\u00e1n sin terminar.', en: 'I have three books that I still have to finish reading.' },
                      { es: 'Estoy sin comer desde temprano esta ma\u00f1ana.', en: 'I haven\u2019t eaten anything since early this morning.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo auxiliar',
                senses: [
                  { n: '24', meaning: 'to be (-ing)', subnote: 'usado con gerundio',
                    examples: [
                      { es: 'Est\u00e1 limpiando la casa.', en: 'He\u2019s cleaning the house.' },
                    ],
                  },
                  { n: '25', meaning: 'to be (done)', subnote: 'usado con participio',
                    examples: [
                      { es: 'El cuarto est\u00e1 organizado, \u00a1as\u00ed que no hagas desorden!', en: 'The room is organized. Don\u2019t make a mess!' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo reflexivo',
                note: 'estarse',
                senses: [
                  { n: '26a', meaning: 'to stay (remain)',
                    examples: [
                      { es: 'Estate quieto y no digas ni una palabra.', en: 'Stay still and don\u2019t say a word.' },
                    ],
                  },
                  { n: '26b', meaning: 'to be (still)',
                    examples: [
                      { es: '\u00bfNo puedes estarte quieta ni un minuto?', en: 'Can\u2019t you be still for just a minute?' },
                    ],
                  },
                  { n: '26c', meaning: 'to keep',
                    examples: [
                      { es: 'Diles a los ni\u00f1os que se est\u00e9n callados un rato, que quiero escuchar las noticias.', en: 'Tell the kids to keep quiet a minute; I want to listen to the news.' },
                    ],
                  },
                  { n: '26d', meaning: 'to be (set phrases)', subnote: 'estate tranquilo, estate atento',
                    examples: [
                      { es: 'Estate tranquilo; yo lo soluciono.', en: 'Don\u2019t worry; I\u2019ll sort it out.' },
                      { es: 'Estate atento porque solo llaman el n\u00famero una vez.', en: 'Pay attention because they only call out the number once.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 4. HACER
      {
        id: 'hacer',
        level: 'A2',
        title: 'Hacer',
        subtitle: 'to do, to make',
        rank: 4,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'haciendo', past: '[hecho]' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'ha[go]' },
                { p: 'tú', f: 'haces' },
                { p: 'él/ella/Ud.', f: 'hace' },
                { p: 'nosotros', f: 'hacemos' },
                { p: 'vosotros', f: 'hacéis' },
                { p: 'ellos/Uds.', f: 'hacen' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[hic]e' },
                { p: 'tú', f: '[hic]iste' },
                { p: 'él/ella/Ud.', f: '[hiz]o' },
                { p: 'nosotros', f: '[hic]imos' },
                { p: 'vosotros', f: '[hic]isteis' },
                { p: 'ellos/Uds.', f: '[hic]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'hacía' },
                { p: 'tú', f: 'hacías' },
                { p: 'él/ella/Ud.', f: 'hacía' },
                { p: 'nosotros', f: 'hacíamos' },
                { p: 'vosotros', f: 'hacíais' },
                { p: 'ellos/Uds.', f: 'hacían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[har]ía' },
                { p: 'tú', f: '[har]ías' },
                { p: 'él/ella/Ud.', f: '[har]ía' },
                { p: 'nosotros', f: '[har]íamos' },
                { p: 'vosotros', f: '[har]íais' },
                { p: 'ellos/Uds.', f: '[har]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[har]é' },
                { p: 'tú', f: '[har]ás' },
                { p: 'él/ella/Ud.', f: '[har]á' },
                { p: 'nosotros', f: '[har]emos' },
                { p: 'vosotros', f: '[har]éis' },
                { p: 'ellos/Uds.', f: '[har]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                note: 'Acci\u00f3n, creaci\u00f3n, transformaci\u00f3n',
                senses: [
                  { n: '1', meaning: 'to do',
                    examples: [
                      { es: 'Haz los deberes.', en: 'Do your homework.' },
                    ],
                  },
                  { n: '2a', meaning: 'to make', subnote: 'producir',
                    examples: [
                      { es: 'Hice la comida de mis hijos.', en: 'I made my children\u2019s lunch.' },
                    ],
                  },
                  { n: '2b', meaning: 'to prepare',
                    examples: [
                      { es: 'Nos reuniremos este fin de semana para hacer la presentaci\u00f3n.', en: 'We will meet this weekend to prepare the presentation.' },
                    ],
                  },
                  { n: '3', meaning: 'to make (create)',
                    examples: [
                      { es: 'Hoy les ense\u00f1ar\u00e9 a hacer su propio sitio web.', en: 'Today I\u2019ll show you how to make your own website.' },
                    ],
                  },
                  { n: '4', meaning: 'to make (carry out)',
                    examples: [
                      { es: 'Estoy ocupado haciendo los preparativos para la fiesta.', en: 'I\u2019m busy making preparations for the party.' },
                    ],
                  },
                  { n: '5', meaning: 'to do (substituting another verb)',
                    examples: [
                      { es: 'Me mand\u00f3 que lavara los platos pero ya lo hab\u00eda hecho.', en: 'He told me to wash the dishes but I had already done it.' },
                    ],
                  },
                  { n: '6', meaning: 'to make (acquire)',
                    examples: [
                      { es: 'Hizo una nueva amiga en el colegio.', en: 'He made a new friend at school.' },
                    ],
                  },
                  { n: '7', meaning: 'to make (cause)',
                    examples: [
                      { es: 'La hizo llorar.', en: 'He made her cry.' },
                    ],
                  },
                  { n: '8', meaning: 'to think (imagine)',
                    examples: [
                      { es: 'Hac\u00eda la casa sola.', en: 'I thought there was nobody at home.' },
                    ],
                  },
                  { n: '9', meaning: 'to make (transform)',
                    examples: [
                      { es: 'El dolor hizo mi vida miserable.', en: 'The pain made my life a misery.' },
                    ],
                  },
                  { n: '10', meaning: 'to do (obey)',
                    examples: [
                      { es: 'Haz lo que te digo.', en: 'Do as I say.' },
                    ],
                  },
                  { n: '11', meaning: 'to make look',
                    examples: [
                      { es: 'Ese peinado te hace m\u00e1s vieja.', en: 'That hairstyle makes you look older.' },
                    ],
                  },
                  { n: '12', meaning: 'to act (behave)',
                    examples: [
                      { es: '\u00a1No hagas el mono en el colegio!', en: 'Don\u2019t act the fool at school!' },
                    ],
                  },
                  { n: '13a', meaning: 'to make (gross)',
                    examples: [
                      { es: 'Se dice que el doctor hace hasta seis cifras.', en: 'They say the doctor makes at least six figures.' },
                    ],
                  },
                  { n: '13b', meaning: 'to earn',
                    examples: [
                      { es: 'Mi hermanito hizo una fortuna vendiendo limonada.', en: 'My little brother earned a fortune selling lemonade.' },
                    ],
                  },
                  { n: '14', meaning: 'to take (time)',
                    examples: [
                      { es: 'Les hizo dos semanas manejar a California.', en: 'It took them two weeks to drive to California.' },
                    ],
                  },
                  { n: '15a', meaning: 'to do (cover distance)',
                    examples: [
                      { es: 'Hicimos 150 millas en el \u00faltimo viaje.', en: 'We did 150 miles on the last vacation.' },
                    ],
                  },
                  { n: '15b', meaning: 'to cover',
                    examples: [
                      { es: 'Podemos hacer m\u00e1s distancia si salimos de noche.', en: 'We can cover more distance if we leave at night.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo impersonal',
                note: 'Forma fija \u2014 tiempo cronol\u00f3gico y meteorol\u00f3gico',
                senses: [
                  { n: '16', meaning: 'it has been', subnote: 'tiempo transcurrido',
                    examples: [
                      { es: 'Hace mucho tiempo que no te veo.', en: 'It has been a long time since I\u2019ve seen you.' },
                    ],
                  },
                  { n: '17', meaning: 'to be (weather)',
                    examples: [
                      { es: 'En invierno hace fr\u00edo.', en: 'It\u2019s cold in winter.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo reflexivo',
                note: 'hacerse \u2014 para uno mismo',
                senses: [
                  { n: '18', meaning: 'to make oneself', subnote: 'crear para uno mismo',
                    examples: [
                      { es: 'Se hizo un vestido de seda.', en: 'She made herself a silk dress.' },
                    ],
                  },
                  { n: '19', meaning: 'to make oneself', subnote: 'cocinar para uno mismo',
                    examples: [
                      { es: 'Creo que voy a hacerme un pur\u00e9 de zanahorias esta noche.', en: 'I think I\u2019m going to make myself some carrot soup tonight.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'hacerse',
                senses: [
                  { n: '20a', meaning: 'to pretend', subnote: 'fingir',
                    examples: [
                      { es: 'No te hagas el santo; t\u00fa tambi\u00e9n te equivocas.', en: 'Don\u2019t pretend to be a saint; you make mistakes, too.' },
                    ],
                  },
                  { n: '20b', meaning: 'to act',
                    examples: [
                      { es: 'No te hagas el tonto conmigo.', en: 'Don\u2019t act the fool with me.' },
                    ],
                  },
                  { n: '21', meaning: 'to become', subnote: 'transformarse',
                    examples: [
                      { es: 'Su sue\u00f1o era hacerse dentista.', en: 'His dream was to become a dentist.' },
                    ],
                  },
                  { n: '22', meaning: 'to have something done', subnote: 'usado con infinitivo',
                    examples: [
                      { es: 'Ya va siendo hora de que se haga cortar el pelo.', en: 'It\u2019s about time he had his hair cut.' },
                      { es: 'Vamos a hacernos pintar la casa despu\u00e9s del verano.', en: 'We\u2019re going to have the house painted after the summer.' },
                    ],
                  },
                  { n: '23', meaning: 'to manage to', subnote: 'hacerse ver / o\u00edr',
                    examples: [
                      { es: 'Daniela solo ayuda en clase para hacerse ver.', en: 'Daniela only helps out in class to get noticed.' },
                      { es: 'Deber\u00edamos darle una oportunidad para hacerse o\u00edr.', en: 'We should give him a chance to be heard.' },
                    ],
                  },
                  { n: '24', meaning: 'to get used to', subnote: 'usado con "a"',
                    examples: [
                      { es: 'Pues no soy capaz de hacerme a la idea.', en: 'Well, I can\u2019t get used to the idea.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo de percepci\u00f3n',
                note: 'hacerse \u2014 para expresar c\u00f3mo se percibe algo',
                senses: [
                  { n: '25a', meaning: 'to feel (seem)',
                    examples: [
                      { es: 'Hoy se me hizo muy largo esperando los resultados de la prueba.', en: 'Today felt really long waiting for my test results.' },
                    ],
                  },
                  { n: '25b', meaning: 'to find / to seem',
                    examples: [
                      { es: 'El curso se me est\u00e1 haciendo aburrido.', en: 'I\u2019m finding the course boring.' },
                      { es: 'La pel\u00edcula se me hizo interminable.', en: 'The movie seemed interminable.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 5. IR
      {
        id: 'ir',
        level: 'A1',
        title: 'Ir',
        subtitle: 'to go',
        rank: 5,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: '[yendo]', past: 'ido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: '[voy]' },
                { p: 'tú', f: '[vas]' },
                { p: 'él/ella/Ud.', f: '[va]' },
                { p: 'nosotros', f: '[vamos]' },
                { p: 'vosotros', f: '[vais]' },
                { p: 'ellos/Uds.', f: '[van]' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[fu]i' },
                { p: 'tú', f: '[fu]iste' },
                { p: 'él/ella/Ud.', f: '[fu]e' },
                { p: 'nosotros', f: '[fu]imos' },
                { p: 'vosotros', f: '[fu]isteis' },
                { p: 'ellos/Uds.', f: '[fu]eron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: '[iba]' },
                { p: 'tú', f: '[ibas]' },
                { p: 'él/ella/Ud.', f: '[iba]' },
                { p: 'nosotros', f: '[íbamos]' },
                { p: 'vosotros', f: '[ibais]' },
                { p: 'ellos/Uds.', f: '[iban]' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'iría' },
                { p: 'tú', f: 'irías' },
                { p: 'él/ella/Ud.', f: 'iría' },
                { p: 'nosotros', f: 'iríamos' },
                { p: 'vosotros', f: 'iríais' },
                { p: 'ellos/Uds.', f: 'irían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'iré' },
                { p: 'tú', f: 'irás' },
                { p: 'él/ella/Ud.', f: 'irá' },
                { p: 'nosotros', f: 'iremos' },
                { p: 'vosotros', f: 'iréis' },
                { p: 'ellos/Uds.', f: 'irán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo intransitivo',
                note: 'Movimiento, direcci\u00f3n, estado',
                senses: [
                  { n: '1', meaning: 'to go', subnote: 'usado para indicar movimiento',
                    examples: [
                      { es: 'Ayer Ana y yo fuimos al cine.', en: 'Yesterday, Ana and I went to the movies.' },
                    ],
                  },
                  { n: '2', meaning: 'to go', subnote: 'usado para hablar de direcciones',
                    examples: [
                      { es: 'Por aqu\u00ed no se va a la estaci\u00f3n.', en: 'This is not the way to go to the station.' },
                    ],
                  },
                  { n: '3', meaning: 'to be (visit, stay)',
                    examples: [
                      { es: '\u00bfHas ido alguna vez a Chile?', en: 'Have you ever been to Chile?' },
                    ],
                  },
                  { n: '4', meaning: 'to go (progress)',
                    examples: [
                      { es: '\u00bfC\u00f3mo te van los estudios?', en: 'How\u2019s college going?' },
                    ],
                  },
                  { n: '5', meaning: 'to go (place)',
                    examples: [
                      { es: 'Los platos van en el armario.', en: 'Dishes go in the cupboard.' },
                    ],
                  },
                  { n: '6', meaning: 'to go (range of time)',
                    examples: [
                      { es: 'El festival va del primero de abril hasta el primero de mayo.', en: 'The festival goes from April first to May first.' },
                    ],
                  },
                  { n: '7a', meaning: 'to wear (have on)',
                    examples: [
                      { es: 'Iba con botas amarillas.', en: 'She wore yellow boots.' },
                    ],
                  },
                  { n: '7b', meaning: 'to be dressed in (color)',
                    examples: [
                      { es: 'Iba de verde por el d\u00eda de San Patricio.', en: 'She was dressed in green for St. Patrick\u2019s Day.' },
                    ],
                  },
                  { n: '8a', meaning: 'to work (function)',
                    examples: [
                      { es: 'El port\u00e1til va bien.', en: 'The laptop works well.' },
                    ],
                  },
                  { n: '8b', meaning: 'to run',
                    examples: [
                      { es: 'Mi carro ha ido sin problema durante a\u00f1os.', en: 'My car has run without an issue for years.' },
                    ],
                  },
                  { n: '9', meaning: 'to be on (process)', subnote: 'usado con "por"',
                    examples: [
                      { es: 'Voy por la p\u00e1gina 50 de "San Manuel Bueno, m\u00e1rtir".', en: 'I\u2019m on page 50 of "San Manuel Bueno, Martyr."' },
                    ],
                  },
                  { n: '10', meaning: 'to study to be', subnote: 'usado con "para" \u2014 Espa\u00f1a',
                    examples: [
                      { es: 'Mi primo va para cocinero.', en: 'My cousin is studying to be a cook.' },
                    ],
                  },
                  { n: '11', meaning: 'to go (attend)',
                    examples: [
                      { es: 'Mi hermana va a la primaria al lado de la estaci\u00f3n de bomberos.', en: 'My sister goes to the elementary school next to the firestation.' },
                    ],
                  },
                  { n: '12', meaning: 'to look (appear)',
                    examples: [
                      { es: '\u00a1Vas muy guapa! Me encanta tu vestido.', en: 'You look gorgeous! I love your dress.' },
                    ],
                  },
                  { n: '13', meaning: 'to go with (match)',
                    examples: [
                      { es: 'Esa camisa roja no le va a ese pantal\u00f3n amarillo.', en: 'That red shirt doesn\u2019t go with those yellow pants.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo auxiliar',
                note: 'Construye tiempos perif\u00e1sticos',
                senses: [
                  { n: '14', meaning: 'to go (going to)', subnote: 'futuro \u2014 ir + a + infinitivo',
                    examples: [
                      { es: '\u00a1Pap\u00e1 va a cocinar una cena espectacular!', en: 'Dad is going to cook a wonderful dinner!' },
                    ],
                  },
                  { n: '15', meaning: 'to be (-ing)', subnote: 'progresivo \u2014 ir + gerundio',
                    examples: [
                      { es: 'Voy planificando la fiesta.', en: 'I am planning the party.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'irse',
                senses: [
                  { n: '16a', meaning: 'to leave',
                    examples: [
                      { es: 'El alumno se fue de la biblioteca muy tarde.', en: 'The student left the library very late.' },
                    ],
                  },
                  { n: '16b', meaning: 'to go',
                    examples: [
                      { es: '\u00a1V\u00e1monos! El cami\u00f3n nos va a dejar.', en: 'Let\u2019s go! The bus is going to leave us behind.' },
                    ],
                  },
                  { n: '17', meaning: 'to leak / to escape',
                    examples: [
                      { es: 'A la piscina se le fue todo el agua.', en: 'All the water leaked from the pool.' },
                      { es: 'A la llanta se le fue el aire.', en: 'The tire went flat.' },
                    ],
                  },
                  { n: '18', meaning: 'to die (pass away)',
                    examples: [
                      { es: 'Se nos fue muy joven.', en: 'He died too young.' },
                    ],
                  },
                  { n: '19', meaning: 'to go away (take away)',
                    examples: [
                      { es: 'Con esta pastilla se te ir\u00e1 el dolor.', en: 'This pill will make the pain go away.' },
                    ],
                  },
                  { n: '20', meaning: 'to forget (not remember)',
                    examples: [
                      { es: '\u00bfC\u00f3mo se llama ese hombre? Lo sab\u00eda, pero se me fue.', en: 'What\u2019s that man\u2019s name? I knew it, but I forgot.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 6. TENER
      {
        id: 'tener',
        level: 'A1',
        title: 'Tener',
        subtitle: 'to have, to possess',
        rank: 6,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'teniendo', past: 'tenido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'ten[go]' },
                { p: 'tú', f: 't[ie]nes' },
                { p: 'él/ella/Ud.', f: 't[ie]ne' },
                { p: 'nosotros', f: 'tenemos' },
                { p: 'vosotros', f: 'tenéis' },
                { p: 'ellos/Uds.', f: 't[ie]nen' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[tuv]e' },
                { p: 'tú', f: '[tuv]iste' },
                { p: 'él/ella/Ud.', f: '[tuv]o' },
                { p: 'nosotros', f: '[tuv]imos' },
                { p: 'vosotros', f: '[tuv]isteis' },
                { p: 'ellos/Uds.', f: '[tuv]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'tenía' },
                { p: 'tú', f: 'tenías' },
                { p: 'él/ella/Ud.', f: 'tenía' },
                { p: 'nosotros', f: 'teníamos' },
                { p: 'vosotros', f: 'teníais' },
                { p: 'ellos/Uds.', f: 'tenían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[tendr]ía' },
                { p: 'tú', f: '[tendr]ías' },
                { p: 'él/ella/Ud.', f: '[tendr]ía' },
                { p: 'nosotros', f: '[tendr]íamos' },
                { p: 'vosotros', f: '[tendr]íais' },
                { p: 'ellos/Uds.', f: '[tendr]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[tendr]é' },
                { p: 'tú', f: '[tendr]ás' },
                { p: 'él/ella/Ud.', f: '[tendr]á' },
                { p: 'nosotros', f: '[tendr]emos' },
                { p: 'vosotros', f: '[tendr]éis' },
                { p: 'ellos/Uds.', f: '[tendr]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                note: 'Posesi\u00f3n, caracter\u00edsticas, estados f\u00edsicos',
                senses: [
                  { n: '1a', meaning: 'to have', subnote: 'poseer',
                    examples: [
                      { es: 'Tengo tres coches.', en: 'I have three cars.' },
                    ],
                  },
                  { n: '1b', meaning: 'to have got',
                    examples: [
                      { es: 'Mary tiene una casa en el campo.', en: 'Mary\u2019s got a house in the country.' },
                    ],
                  },
                  { n: '2a', meaning: 'to have', subnote: 'llevar consigo',
                    examples: [
                      { es: '\u00bfTienes efectivo?', en: 'Do you have cash?' },
                    ],
                  },
                  { n: '2b', meaning: 'to have got',
                    examples: [
                      { es: '\u00bfTienen sus pasaportes?', en: 'Have you got your passports?' },
                    ],
                  },
                  { n: '3a', meaning: 'to have', subnote: 'caracter\u00edsticas f\u00edsicas',
                    examples: [
                      { es: 'Tiene los ojos verdes.', en: 'She has green eyes.' },
                    ],
                  },
                  { n: '3b', meaning: 'to have got',
                    examples: [
                      { es: 'Susana tiene el cabello oscuro.', en: 'Susana\u2019s got dark hair.' },
                    ],
                  },
                  { n: '4a', meaning: 'to have (wear)',
                    examples: [
                      { es: 'La chica que busco tiene lentes de sol y una bufanda.', en: 'The girl I\u2019m looking for has sunglasses and a scarf.' },
                    ],
                  },
                  { n: '4b', meaning: 'to have on',
                    examples: [
                      { es: '\u00bfPor qu\u00e9 tiene zapatos tu perro?', en: 'Why does your dog have shoes on?' },
                    ],
                  },
                  { n: '5', meaning: 'to be (age)',
                    examples: [
                      { es: 'Mi hermana tiene 33 a\u00f1os.', en: 'My sister is 33 years old.' },
                    ],
                  },
                  { n: '6a', meaning: 'to have (planned)',
                    examples: [
                      { es: 'El lunes tengo una cita con el dentista.', en: 'I have a dentist appointment on Monday.' },
                    ],
                  },
                  { n: '6b', meaning: 'to have got',
                    examples: [
                      { es: 'Ma\u00f1ana tenemos junta en la tarde.', en: 'We\u2019ve got a meeting tomorrow afternoon.' },
                    ],
                  },
                  { n: '7', meaning: 'to be (feel)',
                    examples: [
                      { es: 'Si tienes fr\u00edo, ponte un abrigo.', en: 'If you are cold, put on a coat.' },
                    ],
                  },
                  { n: '8', meaning: 'to have (be ill with)',
                    examples: [
                      { es: 'Mi hijo tiene sarampi\u00f3n.', en: 'My child has measles.' },
                    ],
                  },
                  { n: '9a', meaning: 'to hold',
                    examples: [
                      { es: 'Ten la bandeja.', en: 'Hold the tray.' },
                    ],
                  },
                  { n: '9b', meaning: 'to take',
                    examples: [
                      { es: 'Ten esta caja, por favor.', en: 'Take this box, please.' },
                    ],
                  },
                  { n: '9c', meaning: 'here is / here are', subnote: 'al entregar',
                    examples: [
                      { es: 'Tengan sus boletos.', en: 'Here are your tickets.' },
                      { es: 'Ten tu bolsa.', en: 'Here is your bag.' },
                    ],
                  },
                  { n: '10', meaning: 'to be (measure)',
                    examples: [
                      { es: 'Esta maleta tiene 20 cent\u00edmetros de ancho.', en: 'This suitcase is 20 centimeters wide.' },
                    ],
                  },
                  { n: '11', meaning: 'to have (give birth to)',
                    examples: [
                      { es: 'Mi perra tuvo seis cachorros.', en: 'My dog had six puppies.' },
                    ],
                  },
                  { n: '12', meaning: 'to have (receive)',
                    examples: [
                      { es: 'Todav\u00eda no tuve el correo electr\u00f3nico de confirmaci\u00f3n de la empresa.', en: 'I haven\u2019t had a confirmation email from the company yet.' },
                    ],
                  },
                  { n: '13', meaning: 'to have (state)', subnote: 'con participio',
                    examples: [
                      { es: 'Ten\u00eda la casa recogida cuando llegu\u00e9.', en: 'He had the house cleaned up by the time I arrived.' },
                    ],
                  },
                  { n: '14', meaning: 'to have (possibility)',
                    examples: [
                      { es: 'Realmente no tiene soluci\u00f3n este problema.', en: 'This problem really has no solution.' },
                    ],
                  },
                  { n: '15', meaning: 'to consider (think of)',
                    examples: [
                      { es: 'Siempre tuve a Rodolfo por honesto.', en: 'I\u2019ve always considered Rodolfo to be honest.' },
                    ],
                  },
                  { n: '16', meaning: 'duration', subnote: 'Latinoam\u00e9rica',
                    examples: [
                      { es: 'Tengo dos a\u00f1os sin verlo.', en: 'I haven\u2019t seen him for two years.' },
                      { es: 'Mis abuelos tienen 40 a\u00f1os de casados.', en: 'My grandparents have been married for 40 years.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo auxiliar',
                note: 'Obligaci\u00f3n, suposici\u00f3n, reproche',
                senses: [
                  { n: '17a', meaning: 'to have to', subnote: 'obligaci\u00f3n \u2014 con "que"',
                    examples: [
                      { es: 'Tengo que terminar mis deberes antes de salir a la fiesta.', en: 'I have to finish my homework before going to the party.' },
                    ],
                  },
                  { n: '17b', meaning: 'must',
                    examples: [
                      { es: 'Tienes que comer todo en tu plato si quieres postre.', en: 'You must eat everything on your plate if you want dessert.' },
                    ],
                  },
                  { n: '18', meaning: 'must (suposition)', subnote: 'con "que"',
                    examples: [
                      { es: '\u00a1Tienes que tener calor con tanta ropa puesta!', en: 'You must be hot with so many clothes on!' },
                    ],
                  },
                  { n: '19', meaning: 'should (reproach)', subnote: 'con "que"',
                    examples: [
                      { es: 'Ten\u00edas que haberme marcado antes de salir.', en: 'You should have called me before leaving.' },
                    ],
                  },
                  { n: '20', meaning: 'before past participle', subnote: 'tener pensado / entendido',
                    examples: [
                      { es: 'Tengo pensado ir al mercado ma\u00f1ana.', en: 'I think I\u2019ll go to the market tomorrow.' },
                      { es: 'Tenemos entendido que piensas dejar la escuela.', en: 'We understand that you\u2019re thinking of leaving school.' },
                    ],
                  },
                  { n: '21', meaning: 'to make (before adjective)',
                    examples: [
                      { es: 'La noticia sobre el hurac\u00e1n me tiene muy nervioso.', en: 'The news about the hurricane is making me nervous.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo reflexivo',
                note: 'tenerse',
                senses: [
                  { n: '22a', meaning: 'to stand (remain upright)',
                    examples: [
                      { es: 'Este adorno no se tiene sin apoyarlo contra algo.', en: 'This ornament won\u2019t stand without leaning it on something.' },
                    ],
                  },
                  { n: '22b', meaning: 'can barely stand',
                    examples: [
                      { es: 'Estaba tan mareado que no me ten\u00eda de pie.', en: 'I was so dizzy that I couldn\u2019t stand up.' },
                      { es: 'No me tengo de sue\u00f1o.', en: 'I\u2019m so tired I can barely stand.' },
                    ],
                  },
                  { n: '23a', meaning: 'to consider oneself',
                    examples: [
                      { es: 'Miguel se tiene por muy listo.', en: 'Miguel considers himself really clever.' },
                    ],
                  },
                  { n: '23b', meaning: 'to think one is',
                    examples: [
                      { es: 'Este muchacho se tiene por muy guapo.', en: 'That kid thinks he\u2019s so attractive.' },
                      { es: '\u00bfPor qui\u00e9n se tiene tu prima?', en: 'Who does your cousin think she is?' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 7. DECIR
      {
        id: 'decir',
        level: 'A2',
        title: 'Decir',
        subtitle: 'to say, to tell',
        rank: 7,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'd[i]ciendo', past: '[dicho]' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'd[ig]o' },
                { p: 'tú', f: 'd[i]ces' },
                { p: 'él/ella/Ud.', f: 'd[i]ce' },
                { p: 'nosotros', f: 'decimos' },
                { p: 'vosotros', f: 'decís' },
                { p: 'ellos/Uds.', f: 'd[i]cen' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[dij]e' },
                { p: 'tú', f: '[dij]iste' },
                { p: 'él/ella/Ud.', f: '[dij]o' },
                { p: 'nosotros', f: '[dij]imos' },
                { p: 'vosotros', f: '[dij]isteis' },
                { p: 'ellos/Uds.', f: '[dij]eron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'decía' },
                { p: 'tú', f: 'decías' },
                { p: 'él/ella/Ud.', f: 'decía' },
                { p: 'nosotros', f: 'decíamos' },
                { p: 'vosotros', f: 'decíais' },
                { p: 'ellos/Uds.', f: 'decían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[dir]ía' },
                { p: 'tú', f: '[dir]ías' },
                { p: 'él/ella/Ud.', f: '[dir]ía' },
                { p: 'nosotros', f: '[dir]íamos' },
                { p: 'vosotros', f: '[dir]íais' },
                { p: 'ellos/Uds.', f: '[dir]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[dir]é' },
                { p: 'tú', f: '[dir]ás' },
                { p: 'él/ella/Ud.', f: '[dir]á' },
                { p: 'nosotros', f: '[dir]emos' },
                { p: 'vosotros', f: '[dir]éis' },
                { p: 'ellos/Uds.', f: '[dir]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                note: 'Habla, opini\u00f3n, narraci\u00f3n',
                senses: [
                  { n: '1a', meaning: 'to say',
                    examples: [
                      { es: '\u00bfQu\u00e9 dijiste? No te escuch\u00e9.', en: 'What did you say? I couldn\u2019t hear you.' },
                    ],
                  },
                  { n: '1b', meaning: 'to tell',
                    examples: [
                      { es: '\u00bfJura decir la verdad?', en: 'Do you swear to tell the truth?' },
                    ],
                  },
                  { n: '2a', meaning: 'to say (give an opinion)',
                    examples: [
                      { es: '\u00bfQu\u00e9 dices de la nueva ley de transporte?', en: 'What do you say about the new law on transportation?' },
                    ],
                  },
                  { n: '2b', meaning: 'to think',
                    examples: [
                      { es: '\u00bfY qu\u00e9 dices t\u00fa del asunto?', en: 'What do you think about the whole issue?' },
                    ],
                  },
                  { n: '2c', meaning: 'to believe',
                    examples: [
                      { es: '\u00bfQui\u00e9n hubiera dicho que Juliana y Gustavo acabar\u00edan juntos?', en: 'Who would have believed that Juliana and Gustavo would end up together?' },
                    ],
                  },
                  { n: '3', meaning: 'to say (be rumored)',
                    examples: [
                      { es: 'Dicen que va a nevar ma\u00f1ana.', en: 'They say it\u2019s going to snow tomorrow.' },
                    ],
                  },
                  { n: '4a', meaning: 'to tell (transmit orders)',
                    examples: [
                      { es: 'Dile a tu hermano que haga sus tareas.', en: 'Tell your brother to do his homework.' },
                    ],
                  },
                  { n: '4b', meaning: 'to say',
                    examples: [
                      { es: 'Mam\u00e1 dijo que nos ten\u00edamos que acostar.', en: 'Mom said we had to go to sleep.' },
                    ],
                  },
                  { n: '5', meaning: 'to recite (narrate)',
                    examples: [
                      { es: 'Ahora voy a decir un poema nuevo que escrib\u00ed sobre el amor perdido.', en: 'Now I will recite a poem I wrote about lost love.' },
                    ],
                  },
                  { n: '6', meaning: 'to tell (signify)',
                    examples: [
                      { es: 'El que no le interese planear la boda me dice que Jorge no est\u00e1 listo para casarse.', en: 'The fact that he\u2019s not interested in planning the wedding tells me Jorge\u2019s not ready to get married.' },
                    ],
                  },
                  { n: '7', meaning: 'to say (in text)',
                    examples: [
                      { es: 'La Biblia dice que uno debe amar al pr\u00f3jimo.', en: 'The Bible says we should love our neighbor.' },
                    ],
                  },
                  { n: '8', meaning: 'to say (mass)', subnote: 'religioso',
                    examples: [
                      { es: 'Despu\u00e9s de decir la homil\u00eda, el sacerdote reparte la comuni\u00f3n.', en: 'After the priest says the homily, he hands out Communion.' },
                    ],
                  },
                  { n: '9', meaning: 'go ahead (invite to speak)',
                    examples: [
                      { es: '\u00bfLe puedo pedir un favor? \u2014 \u00a1Claro! Dime, \u00bfen qu\u00e9 lo puedo ayudar?', en: 'Can I ask a favor of you? \u2014 Of course! Go ahead, how can I help you?' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '10', meaning: 'hello (on the phone)', subnote: 'interjecci\u00f3n \u2014 Espa\u00f1a',
                    examples: [
                      { es: '\u00bfDiga?', en: 'Hello!' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo masculino',
                note: 'el decir',
                senses: [
                  { n: '11', meaning: 'saying (proverb)',
                    examples: [
                      { es: '"De tal palo, tal astilla" es un decir popular.', en: '"Like father, like son" is a popular saying.' },
                    ],
                  },
                  { n: '12', meaning: 'manner of speaking',
                    examples: [
                      { es: '\u00a1No te enfades, mujer! Es solo un decir.', en: 'Come on, don\u2019t get annoyed! It\u2019s just a manner of speaking.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo reflexivo',
                note: 'decirse \u2014 expresar a uno mismo',
                senses: [
                  { n: '13a', meaning: 'to tell oneself',
                    examples: [
                      { es: 'Me dije que no volver\u00eda a empezar a fumar.', en: 'I told myself that I wouldn\u2019t start smoking again.' },
                    ],
                  },
                  { n: '13b', meaning: 'to say to oneself',
                    examples: [
                      { es: 'Me dije a m\u00ed misma, esto no parece estar bien.', en: 'I said to myself, this doesn\u2019t feel right.' },
                    ],
                  },
                  { n: '13c', meaning: 'to think to oneself',
                    examples: [
                      { es: 'Me sigo diciendo, \u00bfqu\u00e9 hubiera pasado si hubiera aceptado ese trabajo?', en: 'I keep thinking to myself, what would have happened had I taken that job?' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 8. PODER
      {
        id: 'poder',
        level: 'A2',
        title: 'Poder',
        subtitle: 'to be able to, can',
        rank: 8,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'p[u]diendo', past: 'podido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'p[ue]do' },
                { p: 'tú', f: 'p[ue]des' },
                { p: 'él/ella/Ud.', f: 'p[ue]de' },
                { p: 'nosotros', f: 'podemos' },
                { p: 'vosotros', f: 'podéis' },
                { p: 'ellos/Uds.', f: 'p[ue]den' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[pud]e' },
                { p: 'tú', f: '[pud]iste' },
                { p: 'él/ella/Ud.', f: '[pud]o' },
                { p: 'nosotros', f: '[pud]imos' },
                { p: 'vosotros', f: '[pud]isteis' },
                { p: 'ellos/Uds.', f: '[pud]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'podía' },
                { p: 'tú', f: 'podías' },
                { p: 'él/ella/Ud.', f: 'podía' },
                { p: 'nosotros', f: 'podíamos' },
                { p: 'vosotros', f: 'podíais' },
                { p: 'ellos/Uds.', f: 'podían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[podr]ía' },
                { p: 'tú', f: '[podr]ías' },
                { p: 'él/ella/Ud.', f: '[podr]ía' },
                { p: 'nosotros', f: '[podr]íamos' },
                { p: 'vosotros', f: '[podr]íais' },
                { p: 'ellos/Uds.', f: '[podr]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[podr]é' },
                { p: 'tú', f: '[podr]ás' },
                { p: 'él/ella/Ud.', f: '[podr]á' },
                { p: 'nosotros', f: '[podr]emos' },
                { p: 'vosotros', f: '[podr]éis' },
                { p: 'ellos/Uds.', f: '[podr]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo auxiliar',
                note: 'Capacidad, permiso, posibilidad',
                senses: [
                  { n: '1a', meaning: 'can (capability)',
                    examples: [
                      { es: 'Mi novia puede bailar salsa.', en: 'My girlfriend can dance the salsa.' },
                    ],
                  },
                  { n: '1b', meaning: 'to be able to',
                    examples: [
                      { es: 'Necesito mis gafas para poder ver.', en: 'I need my glasses to be able to see.' },
                    ],
                  },
                  { n: '2a', meaning: 'can (request)',
                    examples: [
                      { es: '\u00bfMe puedes pasar ese l\u00e1piz?', en: 'Can you pass me that pencil?' },
                      { es: '\u00bfPodr\u00eda ver un men\u00fa, por favor?', en: 'Could I see a menu, please?' },
                    ],
                  },
                  { n: '2b', meaning: 'may (permission)',
                    examples: [
                      { es: '\u00bfPuedo usar el ba\u00f1o?', en: 'May I use the bathroom?' },
                    ],
                  },
                  { n: '2c', meaning: 'to be allowed to',
                    examples: [
                      { es: '\u00bfPodemos traer alcohol al concierto?', en: 'Are we allowed to bring alcohol to the concert?' },
                    ],
                  },
                  { n: '3a', meaning: 'may (possibility)',
                    examples: [
                      { es: 'Puede que Aurora haya pensado que nos encontrar\u00edamos en el cine.', en: 'Aurora may have thought we were going to meet at the movies.' },
                    ],
                  },
                  { n: '3b', meaning: 'can (general possibility)',
                    examples: [
                      { es: 'No se puede fumar en la sala.', en: 'You cannot smoke inside the theater.' },
                    ],
                  },
                  { n: '4', meaning: 'can (moral obligation)',
                    examples: [
                      { es: 'No podemos rechazar a los refugiados de la guerra.', en: 'We cannot turn away war refugees.' },
                    ],
                  },
                  { n: '5a', meaning: 'can (in reproaches)',
                    examples: [
                      { es: '\u00bfC\u00f3mo podr\u00edas decirme cosas tan crueles?', en: 'How could you say such cruel things to me?' },
                    ],
                  },
                  { n: '5b', meaning: 'might',
                    examples: [
                      { es: 'Podr\u00edas haberme dicho que tu hermana se quedar\u00eda con nosotros.', en: 'You might have told me your sister was going to stay with us.' },
                    ],
                  },
                  { n: '6a', meaning: 'can (suggestions)',
                    examples: [
                      { es: 'No s\u00e9 si comer una sopa o un s\u00e1ndwich. \u2014 Podr\u00edas pedir el combo que trae mitad de un s\u00e1ndwich y una sopa.', en: 'I don\u2019t know if I should have soup or a sandwich. \u2014 You could get the half-sandwich and soup combo.' },
                    ],
                  },
                  { n: '6b', meaning: 'may (suggestions)',
                    examples: [
                      { es: 'Podr\u00edas llamar de nuevo al hotel a ver si tienen tu bufanda.', en: 'You may want to call the hotel again to see if they found your scarf.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '7a', meaning: 'to stand (tolerate)', subnote: 'usado con "con"',
                    examples: [
                      { es: 'No puedo m\u00e1s con mi jefe.', en: 'I can\u2019t stand my boss.' },
                    ],
                  },
                  { n: '7b', meaning: 'to put up with',
                    examples: [
                      { es: 'No puedo m\u00e1s contigo. Me est\u00e1s volviendo loca.', en: 'I can\u2019t put up with you any longer. You\u2019re driving me crazy.' },
                    ],
                  },
                  { n: '8', meaning: 'to manage', subnote: 'capacidad \u2014 con "con"',
                    examples: [
                      { es: '\u00c9l no puede con tanto trabajo.', en: 'He can\u2019t manage so much work.' },
                    ],
                  },
                  { n: '9', meaning: 'to upset (hurt)', subnote: 'M\u00e9xico',
                    examples: [
                      { es: 'Me pudo mucho lo que me dijiste.', en: 'What you said really upset me.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo impersonal',
                note: 'Forma fija \u2014 puede que',
                senses: [
                  { n: '10', meaning: 'may (possibility)',
                    examples: [
                      { es: 'Puede que no venga a la fiesta.', en: 'He may not come to the party.' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo masculino',
                note: 'el poder',
                senses: [
                  { n: '11', meaning: 'power (ability)',
                    examples: [
                      { es: 'Mi hermanita cree que tiene poderes m\u00e1gicos.', en: 'My little sister thinks she has magic powers.' },
                    ],
                  },
                  { n: '12a', meaning: 'power (control)',
                    examples: [
                      { es: '\u00c9l tiene todo el poder en esa relaci\u00f3n.', en: 'He has all the power in that relationship.' },
                    ],
                  },
                  { n: '12b', meaning: 'influence',
                    examples: [
                      { es: 'Ella es la que tiene todo el poder, as\u00ed que mejor habla con ella.', en: 'She\u2019s the one with all the influence, so you\u2019d better talk to her.' },
                    ],
                  },
                  { n: '13', meaning: 'power (political)',
                    examples: [
                      { es: 'El poder del presidente incluye vetar cualquier legislaci\u00f3n pasada por el Congreso.', en: 'Among the president\u2019s powers is the ability to veto any legislation passed by Congress.' },
                    ],
                  },
                  { n: '14', meaning: 'possession (in someone\u2019s care)',
                    examples: [
                      { es: 'Tengo en mi poder un certificado que prueba la autenticidad de la pintura.', en: 'I have in my possession a letter that proves the painting\u2019s authenticity.' },
                    ],
                  },
                  { n: '15', meaning: 'power (mechanical)',
                    examples: [
                      { es: '\u00bfCu\u00e1nto poder tiene el motor de este carro?', en: 'How much power does this car\u2019s engine have?' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo transitivo',
                note: 'coloquial \u2014 derrotar',
                senses: [
                  { n: '16a', meaning: 'to beat',
                    examples: [
                      { es: '\u00a1Vamos! \u00a1T\u00fa le puedes!', en: 'Come on! You can beat him!' },
                    ],
                  },
                  { n: '16b', meaning: 'to be stronger than',
                    examples: [
                      { es: 'El forzudo ret\u00f3 a cualquiera a ver si le pueden.', en: 'The strongman challenged anyone to prove they\u2019re stronger than him.' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo plural',
                note: 'los poderes \u2014 autoridad legal',
                senses: [
                  { n: '17a', meaning: 'powers',
                    examples: [
                      { es: 'A Daniel le confirieron los poderes para gestionar la empresa tras la muerte de su padre.', en: 'After the death of his father, all the business\u2019 powers were passed to Daniel.' },
                    ],
                  },
                  { n: '17b', meaning: 'authority',
                    examples: [
                      { es: 'El comit\u00e9 no tiene los poderes para confirmar el nombramiento.', en: 'The committee doesn\u2019t have the authority to confirm the appointment.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 9. DAR
      {
        id: 'dar',
        level: 'A1',
        title: 'Dar',
        subtitle: 'to give',
        rank: 9,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'dando', past: 'dado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'd[oy]' },
                { p: 'tú', f: 'das' },
                { p: 'él/ella/Ud.', f: 'da' },
                { p: 'nosotros', f: 'damos' },
                { p: 'vosotros', f: 'dais' },
                { p: 'ellos/Uds.', f: 'dan' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[di]' },
                { p: 'tú', f: '[diste]' },
                { p: 'él/ella/Ud.', f: '[dio]' },
                { p: 'nosotros', f: '[dimos]' },
                { p: 'vosotros', f: '[disteis]' },
                { p: 'ellos/Uds.', f: '[dieron]' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'daba' },
                { p: 'tú', f: 'dabas' },
                { p: 'él/ella/Ud.', f: 'daba' },
                { p: 'nosotros', f: 'dábamos' },
                { p: 'vosotros', f: 'dabais' },
                { p: 'ellos/Uds.', f: 'daban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'daría' },
                { p: 'tú', f: 'darías' },
                { p: 'él/ella/Ud.', f: 'daría' },
                { p: 'nosotros', f: 'daríamos' },
                { p: 'vosotros', f: 'daríais' },
                { p: 'ellos/Uds.', f: 'darían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'daré' },
                { p: 'tú', f: 'darás' },
                { p: 'él/ella/Ud.', f: 'dará' },
                { p: 'nosotros', f: 'daremos' },
                { p: 'vosotros', f: 'daréis' },
                { p: 'ellos/Uds.', f: 'darán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                note: 'Entregar, generar, celebrar, ense\u00f1ar',
                senses: [
                  { n: '1a', meaning: 'to give (hand over)',
                    examples: [
                      { es: 'Dame las llaves.', en: 'Give me the keys.' },
                    ],
                  },
                  { n: '1b', meaning: 'can I have / I\u2019ll take', subnote: 'al pedir en una tienda',
                    examples: [
                      { es: '\u00bfMe das una libra de queso y dos libras de jam\u00f3n?', en: 'Can I have one pound of cheese and two pounds of ham?' },
                      { es: '\u00bfCu\u00e1ntos tomates quiere? \u2014 Deme dos kilos, por favor.', en: 'How many tomatoes do you want? \u2014 I\u2019ll take two kilos, please.' },
                    ],
                  },
                  { n: '2a', meaning: 'to give (generate)',
                    examples: [
                      { es: 'Necesito que me des una idea para el tema de la fiesta.', en: 'I need you to give me a good idea for the party\u2019s theme.' },
                    ],
                  },
                  { n: '2b', meaning: 'to yield',
                    examples: [
                      { es: 'Este tratamiento da buenos resultados.', en: 'This treatment yields good results.' },
                    ],
                  },
                  { n: '2c', meaning: 'to produce',
                    examples: [
                      { es: 'Este manzano da m\u00e1s manzanas de las que podr\u00edamos comer.', en: 'This apple tree produces more apples than we can possibly eat.' },
                    ],
                  },
                  { n: '2d', meaning: 'to bear (fruit)',
                    examples: [
                      { es: 'Los perales dan peras.', en: 'Pear trees bear pears.' },
                    ],
                  },
                  { n: '3a', meaning: 'to hold (celebrate)',
                    examples: [
                      { es: 'Esta es la lista de los eventos que se dieron este mes.', en: 'This is the list of events held this month.' },
                    ],
                  },
                  { n: '3b', meaning: 'to have (a party)',
                    examples: [
                      { es: 'Mi compa\u00f1\u00eda da una fiesta de Navidad todos los a\u00f1os.', en: 'My company has a Christmas party every year.' },
                    ],
                  },
                  { n: '3c', meaning: 'to throw (a party)',
                    examples: [
                      { es: 'Le dieron una fiesta sorpresa para celebrar su graduaci\u00f3n.', en: 'They threw him a surprise party to celebrate his graduation.' },
                    ],
                  },
                  { n: '4', meaning: 'to teach (educate)',
                    examples: [
                      { es: 'No dan mi asignatura favorita en la escuela.', en: 'My favorite subject is not taught in school.' },
                    ],
                  },
                  { n: '5', meaning: 'to give (a coat)', subnote: 'aplicar barniz, pintura',
                    examples: [
                      { es: 'Le voy a dar otra capa de barniz a esta mesa.', en: 'I\u2019m going to give this table another coat of varnish.' },
                      { es: 'Esta pared necesita que le des otra pasada de pintura.', en: 'This wall needs another coat of paint.' },
                    ],
                  },
                  { n: '6', meaning: 'to award (grant)',
                    examples: [
                      { es: 'Me dieron una beca para ir a la universidad.', en: 'I was awarded a scholarship to go to university.' },
                    ],
                  },
                  { n: '7', meaning: 'to give (a flavor)',
                    examples: [
                      { es: 'La hoja de laurel le da un sabor \u00fanico a la sopa.', en: 'Bay leaf gives a unique taste to the soup.' },
                    ],
                  },
                  { n: '8a', meaning: 'to say (thanks, greetings)',
                    examples: [
                      { es: 'Sra. Garc\u00eda, le quiero dar las gracias por una cena magn\u00edfica.', en: 'Mrs. Garc\u00eda, I just want to say thank you for a wonderful dinner.' },
                    ],
                  },
                  { n: '8b', meaning: 'to give (thanks)',
                    examples: [
                      { es: 'El D\u00eda de Acci\u00f3n de Gracias es un d\u00eda para dar las gracias por todo lo que tenemos.', en: 'Thanksgiving Day is a day to give thanks for all that we have.' },
                    ],
                  },
                  { n: '9', meaning: 'to take (an action)',
                    examples: [
                      { es: '\u00bfQuieres dar un paseo por el r\u00edo?', en: 'Would you like to take a walk by the river?' },
                    ],
                  },
                  { n: '10', meaning: 'to deal (cards)',
                    examples: [
                      { es: '\u00bfQui\u00e9n va a dar esta ronda?', en: 'Who\u2019s going to deal this round?' },
                    ],
                  },
                  { n: '11', meaning: 'to show (film, TV)',
                    examples: [
                      { es: 'El cine independiente est\u00e1 dando un marat\u00f3n de pel\u00edculas cl\u00e1sicas.', en: 'The independent movie theater is showing a classic film marathon.' },
                    ],
                  },
                  { n: '12', meaning: 'to strike (clock)',
                    examples: [
                      { es: 'El reloj dio las doce de la noche y Cenicienta huy\u00f3 del palacio.', en: 'The clock struck midnight and Cinderella fled the palace.' },
                    ],
                  },
                  { n: '13', meaning: 'to make (feel)',
                    examples: [
                      { es: 'No puedo tomar caf\u00e9 caliente en este clima; me da demasiado calor.', en: 'I can\u2019t drink hot coffee in this weather; it makes me too hot.' },
                      { es: 'Me da miedo quedarme sola en la casa.', en: 'I get scared staying at home alone.' },
                    ],
                  },
                  { n: '14', meaning: 'to consider', subnote: 'usado con "por"',
                    examples: [
                      { es: 'Necesito que termines el proyecto. \u2014 Dalo por hecho.', en: 'I need you to finish the project. \u2014 Consider it done.' },
                    ],
                  },
                  { n: '15', meaning: 'to ruin (spoil)', subnote: 'coloquial \u2014 Espa\u00f1a',
                    examples: [
                      { es: 'Me dio la pel\u00edcula al decirme el final.', en: 'He ruined the movie for me when he spoiled the ending.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                note: 'Sucesos, orientaci\u00f3n, golpes',
                senses: [
                  { n: '16a', meaning: 'to feel (sudden)',
                    examples: [
                      { es: 'Me dieron ganas de vomitar cuando vi el insecto en mi comida.', en: 'I felt like throwing up when I saw the bug in my food.' },
                    ],
                  },
                  { n: '16b', meaning: 'to have (a stroke, etc.)',
                    examples: [
                      { es: 'Al pap\u00e1 de Gabriela le dio un derrame cerebral.', en: 'Gabriela\u2019s father had a stroke.' },
                    ],
                  },
                  { n: '17', meaning: 'me da igual / lo mismo', subnote: 'no importar',
                    examples: [
                      { es: '\u00bfQuieres ir a la playa o a la piscina? \u2014 Me da lo mismo.', en: 'Do you want to go to the beach or to the pool? \u2014 It\u2019s all the same to me.' },
                      { es: 'Me da igual si comemos pasta o pescado esta noche.', en: 'It doesn\u2019t matter to me whether we have pasta or fish tonight.' },
                    ],
                  },
                  { n: '18a', meaning: 'to overlook',
                    examples: [
                      { es: 'El balc\u00f3n del hotel da hacia el mar.', en: 'The hotel balcony overlooks the ocean.' },
                    ],
                  },
                  { n: '18b', meaning: 'to face',
                    examples: [
                      { es: 'Mi apartamento da hacia el sur.', en: 'My apartment faces south.' },
                    ],
                  },
                  { n: '18c', meaning: 'to look onto',
                    examples: [
                      { es: 'El restaurante da al parque.', en: 'The restaurant looks onto the park.' },
                    ],
                  },
                  { n: '19', meaning: 'to press (activate)',
                    examples: [
                      { es: 'Da al bot\u00f3n para prender la computadora.', en: 'Press the button to turn on the computer.' },
                    ],
                  },
                  { n: '20a', meaning: 'to hit (strike)',
                    examples: [
                      { es: 'El boxeador le dio en la cara a su oponente y gan\u00f3 la pelea.', en: 'The boxer hit his opponent in the face and won the fight.' },
                    ],
                  },
                  { n: '20b', meaning: 'to kick (a ball)',
                    examples: [
                      { es: 'Trat\u00f3 de darle a la bola pero fall\u00f3.', en: 'She tried to kick the ball but missed.' },
                    ],
                  },
                  { n: '21a', meaning: 'to find (discover)', subnote: 'dar con',
                    examples: [
                      { es: 'Despu\u00e9s de a\u00f1os de investigaci\u00f3n, por fin dio con la soluci\u00f3n.', en: 'After years of research, she finally found the solution.' },
                    ],
                  },
                  { n: '21b', meaning: 'to hit upon',
                    examples: [
                      { es: 'Hasta el d\u00eda de hoy, nadie ha dado con la respuesta al acertijo.', en: 'So far, no one has hit upon the answer to the riddle.' },
                    ],
                  },
                  { n: '21c', meaning: 'to come up with',
                    examples: [
                      { es: 'El equipo a\u00fan no ha dado con una soluci\u00f3n al problema.', en: 'The team still hasn\u2019t come up with a solution to the problem.' },
                    ],
                  },
                  { n: '22', meaning: 'to take to (be inclined)',
                    examples: [
                      { es: 'Desde que supo que consigui\u00f3 el trabajo, le ha dado con ir de compras todo el tiempo.', en: 'Ever since he found out that he got the job, he\u2019s taken to nonstop shopping.' },
                      { es: 'Me ha dado con tomarme una copa de vino con la cena.', en: 'I\u2019ve started having a glass of wine with my dinner.' },
                    ],
                  },
                  { n: '23', meaning: 'to be enough', subnote: 'usado con "para"',
                    examples: [
                      { es: 'No s\u00e9 si esta pizza dar\u00e1 para todos.', en: 'I\u2019m not sure if this pizza will be enough for everyone.' },
                    ],
                  },
                  { n: '24', meaning: 'to give (motivate)',
                    examples: [
                      { es: 'Los sucesos de hoy me dieron qu\u00e9 pensar.', en: 'Today\u2019s events have given me something to think about.' },
                    ],
                  },
                  { n: '25', meaning: 'to hit (shine)',
                    examples: [
                      { es: 'De este \u00e1ngulo el sol me da en los ojos y no puedo ver.', en: 'From this angle, the sun hits my eyes and I can\u2019t see.' },
                    ],
                  },
                  { n: '26', meaning: 'to deal (cards \u2014 intransitive)',
                    examples: [
                      { es: 'Ya el repartido dio, as\u00ed que te toca jugar.', en: 'The dealer already dealt so it\u2019s your turn to play.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'darse',
                senses: [
                  { n: '27', meaning: 'to grow (thrive)',
                    examples: [
                      { es: 'Esta variedad de lechuga se da en cualquier sitio.', en: 'This lettuce variety can grow anywhere.' },
                    ],
                  },
                  { n: '28a', meaning: 'to hit (oneself)', subnote: 'usado con "con"',
                    examples: [
                      { es: 'Me di en el codo con la mesa y ahora est\u00e1 dormido.', en: 'I hit my elbow on the table and now it\u2019s numb.' },
                    ],
                  },
                  { n: '28b', meaning: 'to crash',
                    examples: [
                      { es: 'Por estar texteando mientras conduc\u00eda, se dio con la pared del t\u00fanel.', en: 'He crashed into the tunnel wall because he was texting while driving.' },
                    ],
                  },
                  { n: '28c', meaning: 'to bump',
                    examples: [
                      { es: 'Prende la luz, que no me quiero dar con la esquina de la cama.', en: 'Turn on the light; I don\u2019t want to bump into the corner of the bed.' },
                    ],
                  },
                  { n: '29a', meaning: 'to happen (occur)',
                    examples: [
                      { es: 'Una luna de sangre no se da muy a menudo.', en: 'A blood moon doesn\u2019t happen that often.' },
                    ],
                  },
                  { n: '29b', meaning: 'to present itself',
                    examples: [
                      { es: 'Una oportunidad as\u00ed no se da muy a menudo.', en: 'Such an opportunity does not present itself very often.' },
                    ],
                  },
                  { n: '30', meaning: 'to take to (start)', subnote: 'usado con "a"',
                    examples: [
                      { es: 'Estoy preocupado porque Javier se ha dado a fumar demasiado.', en: 'I\u2019m worried because Javier has taken to smoking too much.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo reflexivo',
                note: 'Hacerse da\u00f1o, rendirse',
                senses: [
                  { n: '31', meaning: 'to hit oneself',
                    examples: [
                      { es: '\u00bfD\u00f3nde te diste?', en: 'Where did you hit yourself?' },
                    ],
                  },
                  { n: '32', meaning: 'to give up (surrender)', subnote: 'M\u00e9xico',
                    examples: [
                      { es: 'Vas a perder, \u00bfte das?', en: 'You are going to lose. Do you give up?' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 10. VER
      {
        id: 'ver',
        level: 'A1',
        title: 'Ver',
        subtitle: 'to see',
        rank: 10,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'viendo', past: '[visto]' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'v[eo]' },
                { p: 'tú', f: 'ves' },
                { p: 'él/ella/Ud.', f: 've' },
                { p: 'nosotros', f: 'vemos' },
                { p: 'vosotros', f: 'veis' },
                { p: 'ellos/Uds.', f: 'ven' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'vi' },
                { p: 'tú', f: 'viste' },
                { p: 'él/ella/Ud.', f: 'vio' },
                { p: 'nosotros', f: 'vimos' },
                { p: 'vosotros', f: 'visteis' },
                { p: 'ellos/Uds.', f: 'vieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'v[e]ía' },
                { p: 'tú', f: 'v[e]ías' },
                { p: 'él/ella/Ud.', f: 'v[e]ía' },
                { p: 'nosotros', f: 'v[e]íamos' },
                { p: 'vosotros', f: 'v[e]íais' },
                { p: 'ellos/Uds.', f: 'v[e]ían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'vería' },
                { p: 'tú', f: 'verías' },
                { p: 'él/ella/Ud.', f: 'vería' },
                { p: 'nosotros', f: 'veríamos' },
                { p: 'vosotros', f: 'veríais' },
                { p: 'ellos/Uds.', f: 'verían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'veré' },
                { p: 'tú', f: 'verás' },
                { p: 'él/ella/Ud.', f: 'verá' },
                { p: 'nosotros', f: 'veremos' },
                { p: 'vosotros', f: 'veréis' },
                { p: 'ellos/Uds.', f: 'verán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                note: 'Percibir, observar, comprender',
                senses: [
                  { n: '1', meaning: 'to see',
                    examples: [
                      { es: '\u00bfQuieres ver mi carro nuevo?', en: 'Do you want to see my new car?' },
                    ],
                  },
                  { n: '2a', meaning: 'to watch',
                    examples: [
                      { es: 'Se sentaron en el sof\u00e1 a ver su programa de televisi\u00f3n favorito.', en: 'They sat on the sofa to watch their favorite television program.' },
                    ],
                  },
                  { n: '2b', meaning: 'to look at',
                    examples: [
                      { es: 'Me gusta ir a ver los cuadros en el museo.', en: 'I like to go look at paintings in the museum.' },
                    ],
                  },
                  { n: '2c', meaning: 'to see (a film)',
                    examples: [
                      { es: 'He le\u00eddo el libro, pero no he visto la pel\u00edcula. \u00bfEs buena?', en: 'I\u2019ve read the book but haven\u2019t seen the movie. Is it any good?' },
                    ],
                  },
                  { n: '3', meaning: 'to see (notice)',
                    examples: [
                      { es: '\u00bfT\u00fa ves la diferencia entre esta camisa y la azul?', en: 'Do you see the difference between this shirt and the blue one?' },
                    ],
                  },
                  { n: '4a', meaning: 'to see (verify)',
                    examples: [
                      { es: 'Ve a ver qui\u00e9n est\u00e1 en la puerta.', en: 'Go see who\u2019s at the door.' },
                    ],
                  },
                  { n: '4b', meaning: 'to check',
                    examples: [
                      { es: 'Tengo que ver cu\u00e1nto dinero tengo en el banco.', en: 'I have to check how much money I have in the bank.' },
                    ],
                  },
                  { n: '5a', meaning: 'to see (be witness to)',
                    examples: [
                      { es: 'Este campo vio la muerte de muchos durante la guerra.', en: 'This field saw the death of many during the war.' },
                    ],
                  },
                  { n: '5b', meaning: 'to witness',
                    examples: [
                      { es: 'Esta ciudad ha visto tiempos buenos y malos.', en: 'This city has witnessed good times and bad.' },
                    ],
                  },
                  { n: '5c', meaning: 'to live through',
                    examples: [
                      { es: 'Mi abuelo ha visto cuatro guerras y sigue siendo optimista.', en: 'My grandfather has lived through four wars, and he\u2019s still an optimist.' },
                    ],
                  },
                  { n: '6', meaning: 'to see (recognize)',
                    examples: [
                      { es: 'No le veo nada de chistoso a esto.', en: 'I don\u2019t see anything funny about this.' },
                    ],
                  },
                  { n: '7a', meaning: 'to see (comprehend)',
                    examples: [
                      { es: '\u00bfVes lo que te digo?', en: 'Do you see what I\u2019m saying?' },
                    ],
                  },
                  { n: '7b', meaning: 'to understand',
                    examples: [
                      { es: 'No veo por qu\u00e9 tengo que trabajar.', en: 'I don\u2019t understand why I have to work.' },
                    ],
                  },
                  { n: '8a', meaning: 'to see (picture)',
                    examples: [
                      { es: 'No la veo viviendo en otro pa\u00eds.', en: 'I can\u2019t see her living in another country.' },
                    ],
                  },
                  { n: '8b', meaning: 'to imagine',
                    examples: [
                      { es: 'Todav\u00eda los puedo ver como si fuera ayer.', en: 'I can still imagine you guys like it was yesterday.' },
                    ],
                  },
                  { n: '9a', meaning: 'to see (meet)',
                    examples: [
                      { es: 'Voy a ver al doctor esta tarde.', en: 'I\u2019m going to see the doctor this afternoon.' },
                    ],
                  },
                  { n: '9b', meaning: 'to meet with',
                    examples: [
                      { es: 'Tienes que ver al cliente ma\u00f1ana.', en: 'You have to meet with the client tomorrow.' },
                    ],
                  },
                  { n: '10a', meaning: 'to hear (legal)',
                    examples: [
                      { es: 'Tu caso se ver\u00e1 en el tribunal el mes entrante.', en: 'Your case will be heard in court next month.' },
                    ],
                  },
                  { n: '10b', meaning: 'to try (a case)',
                    examples: [
                      { es: 'El caso de la Mataviejitas ser\u00e1 visto en el capital.', en: 'The case of the Old Lady Killer will be tried in the capital.' },
                    ],
                  },
                  { n: '11', meaning: 'to look at (study)',
                    examples: [
                      { es: 'El semestre que viene veremos el impacto de las empresas sobre el medioambiente.', en: 'Next semester we will look at the impact of companies on the environment.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '12', meaning: 'to see (perceive)',
                    examples: [
                      { es: 'Amanec\u00ed esta ma\u00f1ana y no pod\u00eda ver.', en: 'I woke up this morning and I couldn\u2019t see.' },
                    ],
                  },
                  { n: '13', meaning: 'to watch (observe)',
                    examples: [
                      { es: 'Mam\u00e1, \u00a1ve! Puedo manejar el carro yo solito.', en: 'Mom, watch! I can drive the car all by myself.' },
                    ],
                  },
                  { n: '14', meaning: 'to see (verify)',
                    examples: [
                      { es: '\u00bfTenemos papel sanitario? D\u00e9jame ver.', en: 'Do we have toilet paper? Let me see.' },
                    ],
                  },
                  { n: '15', meaning: 'to see (consider)',
                    examples: [
                      { es: '\u00bfPodemos ir a la playa ma\u00f1ana? \u2014 Veremos.', en: 'Can we go to the beach tomorrow? \u2014 We\u2019ll see.' },
                    ],
                  },
                  { n: '16', meaning: 'to see (comprehend)',
                    examples: [
                      { es: '\u00bfYa ves? \u2014 No, no veo. Expl\u00edcame de nuevo la situaci\u00f3n.', en: 'You see? \u2014 No, I don\u2019t see. Explain the situation to me again.' },
                    ],
                  },
                  { n: '17', meaning: 'to see about', subnote: 'usado con "de"',
                    examples: [
                      { es: 'Veremos de arreglar el fregadero ma\u00f1ana.', en: 'We\u2019ll see about fixing the sink tomorrow.' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo masculino',
                note: 'el ver',
                senses: [
                  { n: '18', meaning: 'good-looking', subnote: 'tener buen ver \u2014 apariencia',
                    examples: [
                      { es: 'Ese actor no es de mal ver, pero a m\u00ed no me gusta.', en: 'That actor isn\u2019t bad-looking, but I don\u2019t find him attractive.' },
                      { es: '\u00bfC\u00f3mo es tu prima? \u2014 Es inteligente, trabajadora, y adem\u00e1s tiene buen ver.', en: 'What\u2019s your cousin like? \u2014 She\u2019s smart, hardworking, and she\u2019s also good-looking.' },
                    ],
                  },
                  { n: '19', meaning: 'view (opinion)', subnote: 'en mi ver',
                    examples: [
                      { es: 'Bueno, en mi ver, la educaci\u00f3n debe ser gratis para todos.', en: 'Well, in my view, education should be free for everyone.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo reflexivo / pronominal',
                note: 'verse',
                senses: [
                  { n: '20', meaning: 'to see oneself',
                    examples: [
                      { es: 'Me quiero ver en el espejo a ver c\u00f3mo me queda el corte de pelo.', en: 'I want to see myself in the mirror to see how my haircut looks.' },
                    ],
                  },
                  { n: '21a', meaning: 'to see oneself (imagine)',
                    examples: [
                      { es: 'No me veo trabajando aqu\u00ed de por vida.', en: 'I don\u2019t see myself working here for the rest of my life.' },
                    ],
                  },
                  { n: '21b', meaning: 'to picture oneself',
                    examples: [
                      { es: 'No me puedo ver casado.', en: 'I don\u2019t picture myself married.' },
                    ],
                  },
                  { n: '22', meaning: 'to find oneself (in a situation)',
                    examples: [
                      { es: '\u00c9l se vio rodeado de enemigos.', en: 'He found himself surrounded by enemies.' },
                    ],
                  },
                  { n: '23', meaning: 'to look (seem)',
                    examples: [
                      { es: '\u00bfTe hiciste algo? \u00a1Te ves fant\u00e1stica!', en: 'Is there something different about you? You look fantastic!' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo rec\u00edproco',
                note: 'verse \u2014 encontrarse mutuamente',
                senses: [
                  { n: '24', meaning: 'to see each other',
                    examples: [
                      { es: 'Nos vimos en la fiesta de anoche.', en: 'We saw each other at last night\u2019s party.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'verbos2',
    label: 'Verbos',
    sublabel: 'Top 10 — Parte 2',
    chapters: [
      // 11. DEJAR
      {
        id: 'dejar',
        level: 'A2',
        title: 'Dejar',
        subtitle: 'to leave, to let, to allow',
        rank: 11,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'dejando', past: 'dejado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'dejo' },
                { p: 'tú', f: 'dejas' },
                { p: 'él/ella/Ud.', f: 'deja' },
                { p: 'nosotros', f: 'dejamos' },
                { p: 'vosotros', f: 'dejáis' },
                { p: 'ellos/Uds.', f: 'dejan' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'dejé' },
                { p: 'tú', f: 'dejaste' },
                { p: 'él/ella/Ud.', f: 'dejó' },
                { p: 'nosotros', f: 'dejamos' },
                { p: 'vosotros', f: 'dejasteis' },
                { p: 'ellos/Uds.', f: 'dejaron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'dejaba' },
                { p: 'tú', f: 'dejabas' },
                { p: 'él/ella/Ud.', f: 'dejaba' },
                { p: 'nosotros', f: 'dejábamos' },
                { p: 'vosotros', f: 'dejabais' },
                { p: 'ellos/Uds.', f: 'dejaban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'dejaría' },
                { p: 'tú', f: 'dejarías' },
                { p: 'él/ella/Ud.', f: 'dejaría' },
                { p: 'nosotros', f: 'dejaríamos' },
                { p: 'vosotros', f: 'dejaríais' },
                { p: 'ellos/Uds.', f: 'dejarían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'dejaré' },
                { p: 'tú', f: 'dejarás' },
                { p: 'él/ella/Ud.', f: 'dejará' },
                { p: 'nosotros', f: 'dejaremos' },
                { p: 'vosotros', f: 'dejaréis' },
                { p: 'ellos/Uds.', f: 'dejarán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to leave (an object, a place)',
                    examples: [
                      { es: 'Dejé las llaves en la mesa.', en: 'I left the keys on the table.' },
                      { es: 'Dejó su trabajo el mes pasado.', en: 'He left his job last month.' },
                    ],
                  },
                  { n: '2', meaning: 'to let / to allow',
                    examples: [
                      { es: 'Mis padres no me dejan salir hasta tarde.', en: 'My parents don\u2019t let me stay out late.' },
                    ],
                  },
                  { n: '3', meaning: 'to lend',
                    examples: [
                      { es: '\u00bfMe dejas tu bol\u00edgrafo un momento?', en: 'Will you lend me your pen for a moment?' },
                    ],
                  },
                  { n: '4', meaning: 'to stop doing', subnote: 'dejar de + infinitivo',
                    examples: [
                      { es: 'Dej\u00e9 de fumar el a\u00f1o pasado.', en: 'I stopped smoking last year.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'dejarse',
                senses: [
                  { n: '5', meaning: 'to let oneself / to allow oneself',
                    examples: [
                      { es: 'No te dejes enga\u00f1ar por sus palabras.', en: 'Don\u2019t let yourself be fooled by his words.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 12. PONER
      {
        id: 'poner',
        level: 'A2',
        title: 'Poner',
        subtitle: 'to put, to place',
        rank: 12,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'poniendo', past: '[puesto]' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'pon[go]' },
                { p: 'tú', f: 'pones' },
                { p: 'él/ella/Ud.', f: 'pone' },
                { p: 'nosotros', f: 'ponemos' },
                { p: 'vosotros', f: 'ponéis' },
                { p: 'ellos/Uds.', f: 'ponen' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[pus]e' },
                { p: 'tú', f: '[pus]iste' },
                { p: 'él/ella/Ud.', f: '[pus]o' },
                { p: 'nosotros', f: '[pus]imos' },
                { p: 'vosotros', f: '[pus]isteis' },
                { p: 'ellos/Uds.', f: '[pus]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'ponía' },
                { p: 'tú', f: 'ponías' },
                { p: 'él/ella/Ud.', f: 'ponía' },
                { p: 'nosotros', f: 'poníamos' },
                { p: 'vosotros', f: 'poníais' },
                { p: 'ellos/Uds.', f: 'ponían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[pondr]ía' },
                { p: 'tú', f: '[pondr]ías' },
                { p: 'él/ella/Ud.', f: '[pondr]ía' },
                { p: 'nosotros', f: '[pondr]íamos' },
                { p: 'vosotros', f: '[pondr]íais' },
                { p: 'ellos/Uds.', f: '[pondr]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[pondr]é' },
                { p: 'tú', f: '[pondr]ás' },
                { p: 'él/ella/Ud.', f: '[pondr]á' },
                { p: 'nosotros', f: '[pondr]emos' },
                { p: 'vosotros', f: '[pondr]éis' },
                { p: 'ellos/Uds.', f: '[pondr]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to put / to place',
                    examples: [
                      { es: 'Pon los platos en la mesa.', en: 'Put the plates on the table.' },
                    ],
                  },
                  { n: '2', meaning: 'to turn on (TV, radio)',
                    examples: [
                      { es: '\u00bfPuedes poner la tele?', en: 'Can you turn on the TV?' },
                    ],
                  },
                  { n: '3', meaning: 'to give (a name)',
                    examples: [
                      { es: 'Le pusieron el nombre de su abuelo.', en: 'They gave him his grandfather\u2019s name.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'ponerse',
                senses: [
                  { n: '4', meaning: 'to put on (clothing)',
                    examples: [
                      { es: 'Me puse el abrigo porque hac\u00eda fr\u00edo.', en: 'I put on my coat because it was cold.' },
                    ],
                  },
                  { n: '5', meaning: 'to become', subnote: 'cambio de estado emocional',
                    examples: [
                      { es: 'Se puso triste cuando le contamos la noticia.', en: 'He became sad when we told him the news.' },
                    ],
                  },
                  { n: '6', meaning: 'to start to', subnote: 'ponerse a + infinitivo',
                    examples: [
                      { es: 'Se puso a llorar sin motivo.', en: 'He started to cry for no reason.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 13. SABER
      {
        id: 'saber',
        level: 'A2',
        title: 'Saber',
        subtitle: 'to know (facts, skills)',
        rank: 13,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'sabiendo', past: 'sabido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: '[sé]' },
                { p: 'tú', f: 'sabes' },
                { p: 'él/ella/Ud.', f: 'sabe' },
                { p: 'nosotros', f: 'sabemos' },
                { p: 'vosotros', f: 'sabéis' },
                { p: 'ellos/Uds.', f: 'saben' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[sup]e' },
                { p: 'tú', f: '[sup]iste' },
                { p: 'él/ella/Ud.', f: '[sup]o' },
                { p: 'nosotros', f: '[sup]imos' },
                { p: 'vosotros', f: '[sup]isteis' },
                { p: 'ellos/Uds.', f: '[sup]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'sabía' },
                { p: 'tú', f: 'sabías' },
                { p: 'él/ella/Ud.', f: 'sabía' },
                { p: 'nosotros', f: 'sabíamos' },
                { p: 'vosotros', f: 'sabíais' },
                { p: 'ellos/Uds.', f: 'sabían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[sabr]ía' },
                { p: 'tú', f: '[sabr]ías' },
                { p: 'él/ella/Ud.', f: '[sabr]ía' },
                { p: 'nosotros', f: '[sabr]íamos' },
                { p: 'vosotros', f: '[sabr]íais' },
                { p: 'ellos/Uds.', f: '[sabr]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[sabr]é' },
                { p: 'tú', f: '[sabr]ás' },
                { p: 'él/ella/Ud.', f: '[sabr]á' },
                { p: 'nosotros', f: '[sabr]emos' },
                { p: 'vosotros', f: '[sabr]éis' },
                { p: 'ellos/Uds.', f: '[sabr]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to know (a fact, information)',
                    examples: [
                      { es: 'No s\u00e9 d\u00f3nde est\u00e1 mi tel\u00e9fono.', en: 'I don\u2019t know where my phone is.' },
                      { es: '\u00bfSabes la respuesta?', en: 'Do you know the answer?' },
                    ],
                  },
                  { n: '2', meaning: 'to know how to', subnote: 'saber + infinitivo',
                    examples: [
                      { es: 'Mi hijo ya sabe leer.', en: 'My son already knows how to read.' },
                    ],
                  },
                  { n: '3', meaning: 'to find out', subnote: 'en preterite',
                    examples: [
                      { es: 'Supe la verdad ayer.', en: 'I found out the truth yesterday.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '4', meaning: 'to taste (like)', subnote: 'saber a',
                    examples: [
                      { es: 'Esta sopa sabe a ajo.', en: 'This soup tastes like garlic.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 14. DEBER
      {
        id: 'deber',
        level: 'A2',
        title: 'Deber',
        subtitle: 'must, should, to owe',
        rank: 14,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'debiendo', past: 'debido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'debo' },
                { p: 'tú', f: 'debes' },
                { p: 'él/ella/Ud.', f: 'debe' },
                { p: 'nosotros', f: 'debemos' },
                { p: 'vosotros', f: 'debéis' },
                { p: 'ellos/Uds.', f: 'deben' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'debí' },
                { p: 'tú', f: 'debiste' },
                { p: 'él/ella/Ud.', f: 'debió' },
                { p: 'nosotros', f: 'debimos' },
                { p: 'vosotros', f: 'debisteis' },
                { p: 'ellos/Uds.', f: 'debieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'debía' },
                { p: 'tú', f: 'debías' },
                { p: 'él/ella/Ud.', f: 'debía' },
                { p: 'nosotros', f: 'debíamos' },
                { p: 'vosotros', f: 'debíais' },
                { p: 'ellos/Uds.', f: 'debían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'debería' },
                { p: 'tú', f: 'deberías' },
                { p: 'él/ella/Ud.', f: 'debería' },
                { p: 'nosotros', f: 'deberíamos' },
                { p: 'vosotros', f: 'deberíais' },
                { p: 'ellos/Uds.', f: 'deberían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'deberé' },
                { p: 'tú', f: 'deberás' },
                { p: 'él/ella/Ud.', f: 'deberá' },
                { p: 'nosotros', f: 'deberemos' },
                { p: 'vosotros', f: 'deberéis' },
                { p: 'ellos/Uds.', f: 'deberán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo auxiliar',
                senses: [
                  { n: '1', meaning: 'must / to have to', subnote: 'obligaci\u00f3n \u2014 deber + infinitivo',
                    examples: [
                      { es: 'Debes estudiar para el examen.', en: 'You must study for the exam.' },
                    ],
                  },
                  { n: '2', meaning: 'should', subnote: 'consejo \u2014 condicional',
                    examples: [
                      { es: 'Deber\u00edas descansar m\u00e1s.', en: 'You should rest more.' },
                    ],
                  },
                  { n: '3', meaning: 'must (probability)', subnote: 'deber de + infinitivo',
                    examples: [
                      { es: 'Deben de ser las cinco ya.', en: 'It must be five o\u2019clock by now.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '4', meaning: 'to owe',
                    examples: [
                      { es: 'Te debo cincuenta euros.', en: 'I owe you fifty euros.' },
                    ],
                  },
                ],
              },
              {
                label: 'Sustantivo masculino',
                note: 'el deber / los deberes',
                senses: [
                  { n: '5', meaning: 'duty',
                    examples: [
                      { es: 'Cumpli\u00f3 con su deber.', en: 'He fulfilled his duty.' },
                    ],
                  },
                  { n: '6', meaning: 'homework', subnote: 'plural \u2014 los deberes',
                    examples: [
                      { es: 'Los ni\u00f1os est\u00e1n haciendo los deberes.', en: 'The kids are doing their homework.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 15. QUERER
      {
        id: 'querer',
        level: 'A1',
        title: 'Querer',
        subtitle: 'to want, to love',
        rank: 15,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'queriendo', past: 'querido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'qu[ie]ro' },
                { p: 'tú', f: 'qu[ie]res' },
                { p: 'él/ella/Ud.', f: 'qu[ie]re' },
                { p: 'nosotros', f: 'queremos' },
                { p: 'vosotros', f: 'queréis' },
                { p: 'ellos/Uds.', f: 'qu[ie]ren' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: '[quis]e' },
                { p: 'tú', f: '[quis]iste' },
                { p: 'él/ella/Ud.', f: '[quis]o' },
                { p: 'nosotros', f: '[quis]imos' },
                { p: 'vosotros', f: '[quis]isteis' },
                { p: 'ellos/Uds.', f: '[quis]ieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'quería' },
                { p: 'tú', f: 'querías' },
                { p: 'él/ella/Ud.', f: 'quería' },
                { p: 'nosotros', f: 'queríamos' },
                { p: 'vosotros', f: 'queríais' },
                { p: 'ellos/Uds.', f: 'querían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: '[querr]ía' },
                { p: 'tú', f: '[querr]ías' },
                { p: 'él/ella/Ud.', f: '[querr]ía' },
                { p: 'nosotros', f: '[querr]íamos' },
                { p: 'vosotros', f: '[querr]íais' },
                { p: 'ellos/Uds.', f: '[querr]ían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: '[querr]é' },
                { p: 'tú', f: '[querr]ás' },
                { p: 'él/ella/Ud.', f: '[querr]á' },
                { p: 'nosotros', f: '[querr]emos' },
                { p: 'vosotros', f: '[querr]éis' },
                { p: 'ellos/Uds.', f: '[querr]án' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to want',
                    examples: [
                      { es: 'Quiero un caf\u00e9, por favor.', en: 'I want a coffee, please.' },
                      { es: '\u00bfQu\u00e9 quieres hacer esta noche?', en: 'What do you want to do tonight?' },
                    ],
                  },
                  { n: '2', meaning: 'to love',
                    examples: [
                      { es: 'Te quiero mucho.', en: 'I love you very much.' },
                      { es: 'Mis padres me quieren tal como soy.', en: 'My parents love me just as I am.' },
                    ],
                  },
                  { n: '3', meaning: 'to mean', subnote: 'querer decir',
                    examples: [
                      { es: '\u00bfQu\u00e9 quiere decir esta palabra?', en: 'What does this word mean?' },
                    ],
                  },
                  { n: '4', meaning: 'to refuse', subnote: 'no querer en pret\u00e9rito',
                    examples: [
                      { es: 'No quiso venir a la fiesta.', en: 'He refused to come to the party.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 16. SEGUIR
      {
        id: 'seguir',
        level: 'B1',
        title: 'Seguir',
        subtitle: 'to follow, to continue',
        rank: 16,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 's[i]guiendo', past: 'seguido' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'si[g]o' },
                { p: 'tú', f: 's[i]gues' },
                { p: 'él/ella/Ud.', f: 's[i]gue' },
                { p: 'nosotros', f: 'seguimos' },
                { p: 'vosotros', f: 'seguís' },
                { p: 'ellos/Uds.', f: 's[i]guen' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'seguí' },
                { p: 'tú', f: 'seguiste' },
                { p: 'él/ella/Ud.', f: 's[i]guió' },
                { p: 'nosotros', f: 'seguimos' },
                { p: 'vosotros', f: 'seguisteis' },
                { p: 'ellos/Uds.', f: 's[i]guieron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'seguía' },
                { p: 'tú', f: 'seguías' },
                { p: 'él/ella/Ud.', f: 'seguía' },
                { p: 'nosotros', f: 'seguíamos' },
                { p: 'vosotros', f: 'seguíais' },
                { p: 'ellos/Uds.', f: 'seguían' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'seguiría' },
                { p: 'tú', f: 'seguirías' },
                { p: 'él/ella/Ud.', f: 'seguiría' },
                { p: 'nosotros', f: 'seguiríamos' },
                { p: 'vosotros', f: 'seguiríais' },
                { p: 'ellos/Uds.', f: 'seguirían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'seguiré' },
                { p: 'tú', f: 'seguirás' },
                { p: 'él/ella/Ud.', f: 'seguirá' },
                { p: 'nosotros', f: 'seguiremos' },
                { p: 'vosotros', f: 'seguiréis' },
                { p: 'ellos/Uds.', f: 'seguirán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to follow',
                    examples: [
                      { es: 'S\u00edgueme por aqu\u00ed.', en: 'Follow me this way.' },
                      { es: 'Sigo a varios chefs en redes sociales.', en: 'I follow several chefs on social media.' },
                    ],
                  },
                  { n: '2', meaning: 'to take (a path, course)',
                    examples: [
                      { es: 'Sigue las indicaciones del m\u00e9dico.', en: 'Follow the doctor\u2019s instructions.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '3', meaning: 'to continue / to keep on', subnote: 'seguir + gerundio',
                    examples: [
                      { es: 'Sigue lloviendo.', en: 'It keeps raining.' },
                      { es: 'Sigo trabajando en el proyecto.', en: 'I\u2019m still working on the project.' },
                    ],
                  },
                  { n: '4', meaning: 'to still be',
                    examples: [
                      { es: '\u00bfSigues enfermo?', en: 'Are you still sick?' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 17. LLEGAR
      {
        id: 'llegar',
        level: 'A1',
        title: 'Llegar',
        subtitle: 'to arrive, to reach',
        rank: 17,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'llegando', past: 'llegado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'llego' },
                { p: 'tú', f: 'llegas' },
                { p: 'él/ella/Ud.', f: 'llega' },
                { p: 'nosotros', f: 'llegamos' },
                { p: 'vosotros', f: 'llegáis' },
                { p: 'ellos/Uds.', f: 'llegan' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'lle[gu]é' },
                { p: 'tú', f: 'llegaste' },
                { p: 'él/ella/Ud.', f: 'llegó' },
                { p: 'nosotros', f: 'llegamos' },
                { p: 'vosotros', f: 'llegasteis' },
                { p: 'ellos/Uds.', f: 'llegaron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'llegaba' },
                { p: 'tú', f: 'llegabas' },
                { p: 'él/ella/Ud.', f: 'llegaba' },
                { p: 'nosotros', f: 'llegábamos' },
                { p: 'vosotros', f: 'llegabais' },
                { p: 'ellos/Uds.', f: 'llegaban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'llegaría' },
                { p: 'tú', f: 'llegarías' },
                { p: 'él/ella/Ud.', f: 'llegaría' },
                { p: 'nosotros', f: 'llegaríamos' },
                { p: 'vosotros', f: 'llegaríais' },
                { p: 'ellos/Uds.', f: 'llegarían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'llegaré' },
                { p: 'tú', f: 'llegarás' },
                { p: 'él/ella/Ud.', f: 'llegará' },
                { p: 'nosotros', f: 'llegaremos' },
                { p: 'vosotros', f: 'llegaréis' },
                { p: 'ellos/Uds.', f: 'llegarán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '1', meaning: 'to arrive',
                    examples: [
                      { es: 'Llegamos al aeropuerto a las ocho.', en: 'We arrived at the airport at eight.' },
                    ],
                  },
                  { n: '2', meaning: 'to reach (a place, a level)',
                    examples: [
                      { es: 'El agua le llega hasta las rodillas.', en: 'The water reaches up to his knees.' },
                    ],
                  },
                  { n: '3', meaning: 'to manage to', subnote: 'llegar a + infinitivo',
                    examples: [
                      { es: 'Lleg\u00f3 a ser director de la empresa.', en: 'He managed to become director of the company.' },
                    ],
                  },
                  { n: '4', meaning: 'to be enough', subnote: 'llegar para',
                    examples: [
                      { es: 'El dinero no llega para todo.', en: 'The money isn\u2019t enough for everything.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 18. LLEVAR
      {
        id: 'llevar',
        level: 'A1',
        title: 'Llevar',
        subtitle: 'to take, to carry, to wear',
        rank: 18,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'llevando', past: 'llevado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'llevo' },
                { p: 'tú', f: 'llevas' },
                { p: 'él/ella/Ud.', f: 'lleva' },
                { p: 'nosotros', f: 'llevamos' },
                { p: 'vosotros', f: 'lleváis' },
                { p: 'ellos/Uds.', f: 'llevan' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'llevé' },
                { p: 'tú', f: 'llevaste' },
                { p: 'él/ella/Ud.', f: 'llevó' },
                { p: 'nosotros', f: 'llevamos' },
                { p: 'vosotros', f: 'llevasteis' },
                { p: 'ellos/Uds.', f: 'llevaron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'llevaba' },
                { p: 'tú', f: 'llevabas' },
                { p: 'él/ella/Ud.', f: 'llevaba' },
                { p: 'nosotros', f: 'llevábamos' },
                { p: 'vosotros', f: 'llevabais' },
                { p: 'ellos/Uds.', f: 'llevaban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'llevaría' },
                { p: 'tú', f: 'llevarías' },
                { p: 'él/ella/Ud.', f: 'llevaría' },
                { p: 'nosotros', f: 'llevaríamos' },
                { p: 'vosotros', f: 'llevaríais' },
                { p: 'ellos/Uds.', f: 'llevarían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'llevaré' },
                { p: 'tú', f: 'llevarás' },
                { p: 'él/ella/Ud.', f: 'llevará' },
                { p: 'nosotros', f: 'llevaremos' },
                { p: 'vosotros', f: 'llevaréis' },
                { p: 'ellos/Uds.', f: 'llevarán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to take / to bring',
                    examples: [
                      { es: 'Llevo a los ni\u00f1os al colegio cada ma\u00f1ana.', en: 'I take the children to school every morning.' },
                    ],
                  },
                  { n: '2', meaning: 'to carry',
                    examples: [
                      { es: 'Lleva una mochila pesada.', en: 'He\u2019s carrying a heavy backpack.' },
                    ],
                  },
                  { n: '3', meaning: 'to wear',
                    examples: [
                      { es: 'Lleva un vestido azul.', en: 'She\u2019s wearing a blue dress.' },
                    ],
                  },
                  { n: '4', meaning: 'to have been (duration)', subnote: 'llevar + tiempo + gerundio',
                    examples: [
                      { es: 'Llevo dos horas esperando.', en: 'I\u2019ve been waiting for two hours.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'llevarse',
                senses: [
                  { n: '5', meaning: 'to get along with',
                    examples: [
                      { es: 'Me llevo bien con mi hermana.', en: 'I get along well with my sister.' },
                    ],
                  },
                  { n: '6', meaning: 'to take away',
                    examples: [
                      { es: 'Se llev\u00f3 todos sus libros cuando se mud\u00f3.', en: 'He took all his books when he moved.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 19. ENCONTRAR
      {
        id: 'encontrar',
        level: 'A2',
        title: 'Encontrar',
        subtitle: 'to find',
        rank: 19,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'encontrando', past: 'encontrado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'enc[ue]ntro' },
                { p: 'tú', f: 'enc[ue]ntras' },
                { p: 'él/ella/Ud.', f: 'enc[ue]ntra' },
                { p: 'nosotros', f: 'encontramos' },
                { p: 'vosotros', f: 'encontráis' },
                { p: 'ellos/Uds.', f: 'enc[ue]ntran' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'encontré' },
                { p: 'tú', f: 'encontraste' },
                { p: 'él/ella/Ud.', f: 'encontró' },
                { p: 'nosotros', f: 'encontramos' },
                { p: 'vosotros', f: 'encontrasteis' },
                { p: 'ellos/Uds.', f: 'encontraron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'encontraba' },
                { p: 'tú', f: 'encontrabas' },
                { p: 'él/ella/Ud.', f: 'encontraba' },
                { p: 'nosotros', f: 'encontrábamos' },
                { p: 'vosotros', f: 'encontrabais' },
                { p: 'ellos/Uds.', f: 'encontraban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'encontraría' },
                { p: 'tú', f: 'encontrarías' },
                { p: 'él/ella/Ud.', f: 'encontraría' },
                { p: 'nosotros', f: 'encontraríamos' },
                { p: 'vosotros', f: 'encontraríais' },
                { p: 'ellos/Uds.', f: 'encontrarían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'encontraré' },
                { p: 'tú', f: 'encontrarás' },
                { p: 'él/ella/Ud.', f: 'encontrará' },
                { p: 'nosotros', f: 'encontraremos' },
                { p: 'vosotros', f: 'encontraréis' },
                { p: 'ellos/Uds.', f: 'encontrarán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '1', meaning: 'to find',
                    examples: [
                      { es: 'Encontr\u00e9 las llaves debajo del sof\u00e1.', en: 'I found the keys under the sofa.' },
                    ],
                  },
                  { n: '2', meaning: 'to think / to find', subnote: 'opini\u00f3n',
                    examples: [
                      { es: 'Encuentro este libro muy interesante.', en: 'I find this book very interesting.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'encontrarse',
                senses: [
                  { n: '3', meaning: 'to feel',
                    examples: [
                      { es: '\u00bfC\u00f3mo te encuentras hoy?', en: 'How are you feeling today?' },
                    ],
                  },
                  { n: '4', meaning: 'to meet (by chance)',
                    examples: [
                      { es: 'Me encontr\u00e9 con un viejo amigo en la calle.', en: 'I ran into an old friend on the street.' },
                    ],
                  },
                  { n: '5', meaning: 'to be located',
                    examples: [
                      { es: 'El museo se encuentra en el centro.', en: 'The museum is located downtown.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 20. PASAR
      {
        id: 'pasar',
        level: 'A1',
        title: 'Pasar',
        subtitle: 'to pass, to happen, to spend',
        rank: 20,
        blocks: [
          {
            type: 'verb-table',
            participles: { present: 'pasando', past: 'pasado' },
            tenses: [
              { name: 'Presente', forms: [
                { p: 'yo', f: 'paso' },
                { p: 'tú', f: 'pasas' },
                { p: 'él/ella/Ud.', f: 'pasa' },
                { p: 'nosotros', f: 'pasamos' },
                { p: 'vosotros', f: 'pasáis' },
                { p: 'ellos/Uds.', f: 'pasan' },
              ]},
              { name: 'Pretérito', forms: [
                { p: 'yo', f: 'pasé' },
                { p: 'tú', f: 'pasaste' },
                { p: 'él/ella/Ud.', f: 'pasó' },
                { p: 'nosotros', f: 'pasamos' },
                { p: 'vosotros', f: 'pasasteis' },
                { p: 'ellos/Uds.', f: 'pasaron' },
              ]},
              { name: 'Imperfecto', forms: [
                { p: 'yo', f: 'pasaba' },
                { p: 'tú', f: 'pasabas' },
                { p: 'él/ella/Ud.', f: 'pasaba' },
                { p: 'nosotros', f: 'pasábamos' },
                { p: 'vosotros', f: 'pasabais' },
                { p: 'ellos/Uds.', f: 'pasaban' },
              ]},
              { name: 'Condicional', forms: [
                { p: 'yo', f: 'pasaría' },
                { p: 'tú', f: 'pasarías' },
                { p: 'él/ella/Ud.', f: 'pasaría' },
                { p: 'nosotros', f: 'pasaríamos' },
                { p: 'vosotros', f: 'pasaríais' },
                { p: 'ellos/Uds.', f: 'pasarían' },
              ]},
              { name: 'Futuro', forms: [
                { p: 'yo', f: 'pasaré' },
                { p: 'tú', f: 'pasarás' },
                { p: 'él/ella/Ud.', f: 'pasará' },
                { p: 'nosotros', f: 'pasaremos' },
                { p: 'vosotros', f: 'pasaréis' },
                { p: 'ellos/Uds.', f: 'pasarán' },
              ]},
            ],
          },
          {
            type: 'verb-uses',
            heading: 'Usos y significados',
            categories: [
              {
                label: 'Verbo intransitivo',
                senses: [
                  { n: '1', meaning: 'to happen',
                    examples: [
                      { es: '\u00bfQu\u00e9 pas\u00f3? \u2014 Nada importante.', en: 'What happened? \u2014 Nothing important.' },
                    ],
                  },
                  { n: '2', meaning: 'to pass / to go by',
                    examples: [
                      { es: 'El tiempo pasa muy r\u00e1pido.', en: 'Time goes by very fast.' },
                    ],
                  },
                  { n: '3', meaning: 'to come in',
                    examples: [
                      { es: 'Pasa, por favor. Est\u00e1s en tu casa.', en: 'Come in, please. Make yourself at home.' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo transitivo',
                senses: [
                  { n: '4', meaning: 'to spend (time)',
                    examples: [
                      { es: 'Pasamos las vacaciones en la playa.', en: 'We spent our vacation at the beach.' },
                    ],
                  },
                  { n: '5', meaning: 'to pass (an object)',
                    examples: [
                      { es: '\u00bfMe pasas la sal, por favor?', en: 'Can you pass me the salt, please?' },
                    ],
                  },
                ],
              },
              {
                label: 'Verbo pronominal',
                note: 'pasarse',
                senses: [
                  { n: '6', meaning: 'to go too far / to overdo',
                    examples: [
                      { es: 'Te pasaste con la sal.', en: 'You overdid it with the salt.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gramatica',
    label: 'Gramática',
    sublabel: '8 lecciones esenciales',
    chapters: [
      {
        id: 'gramatica-all',
        level: 'A1',
        title: 'Gramática Esencial',
        subtitle: 'Toca el título para abrir o cerrar cada lección',
        intro: 'Eight lessons — from the pronouns that appear in every sentence to the prepositions that hold them together. Open one lesson, read it slowly, close it. Come back to the next one tomorrow. That pace works better than reading all eight at once.',
        blocks: [
          {
            type: 'foldable-grammar',
            lessons: [
              {
                id: 'gl1',
                level: 'A2',
                title: 'Direct Object Pronouns',
                subtitle: 'lo, la, los, las — pronombres de objeto directo',
                intro: 'A direct object pronoun replaces a noun that directly receives the action of the verb. Ask "what?" or "whom?" — the answer is the direct object. The pronoun must match the noun it replaces in gender and number.',
                sections: [
                  {
                    heading: 'The six pronouns',
                    table: {
                      headers: ['Persona', 'Singular', 'Plural'],
                      rows: [
                        ['1ª', 'me  (me)', 'nos  (us)'],
                        ['2ª', 'te  (you)', 'os  (you all — Spain)'],
                        ['3ª masc.', 'lo  (him, it, you formal m.)', 'los  (them, you all m.)'],
                        ['3ª fem.', 'la  (her, it, you formal f.)', 'las  (them, you all f.)'],
                      ],
                    },
                  },
                  {
                    heading: 'Replacing people and things',
                    text: 'The pronoun must match the gender and number of the noun it replaces. Unlike indirect pronouns, the third-person forms change for gender.',
                    examples: [
                      { es: 'Llamaron a mi mamá. → La llamaron.', en: 'They called my mother. → They called her.' },
                      { es: 'Sandra tiró la pelota. → Sandra la tiró.', en: 'Sandra threw the ball. → Sandra threw it.' },
                      { es: 'Los niños leen muchos libros. → Los niños los leen.', en: 'The boys read many books. → The boys read them.' },
                      { es: 'Veo el coche. → Lo veo.', en: 'I see the car. → I see it.' },
                      { es: '¿Tienes las llaves? — Sí, las tengo.', en: 'Do you have the keys? — Yes, I have them.' },
                      { es: 'Te quiero mucho.', en: 'I love you very much.' },
                      { es: 'Nos llaman cada domingo.', en: 'They call us every Sunday.' },
                      { es: '¿Me escuchas?', en: 'Are you listening to me?' },
                    ],
                  },
                  {
                    heading: 'Position — before the verb or attached',
                    text: 'Direct object pronouns go BEFORE a conjugated verb. They attach to the END of an infinitive, gerund, or affirmative command. Both positions are valid when there is an infinitive + main verb construction.',
                    examples: [
                      { es: 'Lo veo todos los días.', en: 'I see him every day. (before conjugated verb)' },
                      { es: 'Quiero verlo. / Lo quiero ver.', en: 'I want to see it. (both correct)' },
                      { es: 'Estoy leyéndolo. / Lo estoy leyendo.', en: 'I am reading it. (both correct)' },
                      { es: '¡Cómpralo!', en: 'Buy it! (attached to affirmative command)' },
                      { es: '¡No lo compres!', en: 'Don\'t buy it! (before negative command)' },
                      { es: 'Hay que hacerlo hoy.', en: 'It has to be done today. (attached to infinitive)' },
                    ],
                  },
                  {
                    heading: 'Personal "a"',
                    text: 'When the direct object is a specific person or pet, Spanish places "a" before the noun. The "a" disappears when you replace the noun with a pronoun.',
                    examples: [
                      { es: 'Veo a mi hermano. → Lo veo.', en: 'I see my brother. → I see him.' },
                      { es: 'Esperan a sus amigos. → Los esperan.', en: 'They wait for their friends. → They wait for them.' },
                      { es: 'Visitamos a la abuela. → La visitamos.', en: 'We visit grandma. → We visit her.' },
                      { es: '¿Conoces a Juan? → ¿Lo conoces?', en: 'Do you know Juan? → Do you know him?' },
                      { es: 'Busco a alguien que hable árabe.', en: 'I am looking for someone who speaks Arabic.' },
                    ],
                  },
                  {
                    tip: 'Spain often uses "le" instead of "lo" for a male person — leísmo. "Le veo" (Spain) vs "Lo veo" (Latin America). Both are correct in their regions.',
                    takeaway: 'Direct object pronouns answer "what?" or "whom?". They must match the replaced noun in gender and number. Master their position and you will stop repeating nouns like a beginner.',
                  },
                ],
              },
              {
                id: 'gl2',
                level: 'A2',
                title: 'Indirect Object Pronouns',
                subtitle: 'me, te, le, nos, os, les — pronombres de objeto indirecto',
                intro: 'An indirect object pronoun tells you to whom or for whom an action is done. None of them change for gender. Le and les cover him, her, and formal you equally — context or an added "a + person" resolves ambiguity.',
                sections: [
                  {
                    heading: 'The six pronouns',
                    table: {
                      headers: ['Persona', 'Singular', 'Plural'],
                      rows: [
                        ['1ª', 'me  (to/for me)', 'nos  (to/for us)'],
                        ['2ª', 'te  (to/for you)', 'os  (to/for you all — Spain)'],
                        ['3ª', 'le  (to/for him, her, you formal)', 'les  (to/for them, you all formal)'],
                      ],
                    },
                  },
                  {
                    heading: 'Finding the indirect object',
                    text: 'Ask "to whom?" or "for whom?". In Spanish it is very common to use BOTH the pronoun and the noun together — the pronoun comes first, the noun is introduced with "a + person". This is not redundant; it is the standard pattern.',
                    examples: [
                      { es: 'Gabriel le compró una rosa a Anita.', en: 'Gabriel bought a rose for Anita.' },
                      { es: 'Gabriel le compró una rosa.', en: 'Gabriel bought a rose for her.' },
                      { es: 'Samuel le tiró la pelota a Juan.', en: 'Samuel threw the ball to Juan.' },
                      { es: 'Le escribí una carta a mi abuela.', en: 'I wrote a letter to my grandmother.' },
                      { es: '¿Me puedes pasar la sal?', en: 'Can you pass me the salt?' },
                      { es: 'Te traje un café.', en: 'I brought you a coffee.' },
                      { es: 'Nos enviaron las invitaciones por correo.', en: 'They sent us the invitations by mail.' },
                      { es: 'Les expliqué el problema a los clientes.', en: 'I explained the problem to the clients.' },
                    ],
                  },
                  {
                    heading: 'Verbs that commonly take an indirect object',
                    table: {
                      headers: ['Spanish', 'English'],
                      rows: [
                        ['comprarle algo', 'to buy something for someone'],
                        ['contarle algo', 'to tell something to someone'],
                        ['darle algo', 'to give something to someone'],
                        ['decirle algo', 'to say something to someone'],
                        ['escribirle algo', 'to write something to someone'],
                        ['mandarle algo', 'to send something to someone'],
                        ['mostrarle algo', 'to show something to someone'],
                        ['pedirle algo', 'to ask something of someone'],
                        ['regalarle algo', 'to give a gift to someone'],
                        ['servirle algo', 'to serve something to someone'],
                        ['traerle algo', 'to bring something to someone'],
                      ],
                    },
                  },
                  {
                    heading: 'Verbs like gustar — backwards from English',
                    text: 'The thing that pleases / hurts / interests is the SUBJECT. The person who feels it is the INDIRECT OBJECT. Think "it pleases me" rather than "I like it".',
                    examples: [
                      { es: 'Me gusta el café.', en: 'I like coffee. (lit. coffee pleases me)' },
                      { es: 'Le encanta bailar.', en: 'She loves dancing.' },
                      { es: 'Nos duele la cabeza.', en: 'Our heads hurt.' },
                      { es: 'Les interesa la política.', en: 'They are interested in politics.' },
                      { es: '¿Te molesta el ruido?', en: 'Does the noise bother you?' },
                      { es: 'Me hacen falta más horas.', en: 'I need more hours.' },
                      { es: 'Le quedan dos días.', en: 'He has two days left.' },
                      { es: 'No me apetece salir.', en: 'I don\'t feel like going out.' },
                    ],
                  },
                  {
                    tip: 'When "le" or "les" is ambiguous, add "a + person" at the end: "Se lo di a ella" means I gave it to HER specifically. This is standard Spanish, not optional.',
                    takeaway: 'Indirect object pronouns answer "to/for whom?". They never change for gender. Use the pronoun even when the noun is in the sentence — that is the standard pattern, not a mistake.',
                  },
                ],
              },
              {
                id: 'gl3',
                level: 'B1',
                title: 'Direct + Indirect Object Pronouns Together',
                subtitle: 'Dos pronombres — el orden fijo y la regla le → se',
                intro: 'When a sentence has both a direct and an indirect object, Spanish uses both pronouns together. The order is always fixed, and there is one critical spelling change that trips up learners at every level.',
                sections: [
                  {
                    heading: 'The order: indirect before direct — always',
                    text: 'The indirect pronoun ALWAYS comes first. Both pronouns sit before a conjugated verb, or both attach to the end of an infinitive, gerund, or affirmative command.',
                    examples: [
                      { es: 'Me lo dio.', en: 'He gave it to me.' },
                      { es: 'Te la mandé ayer.', en: 'I sent it to you yesterday.' },
                      { es: 'Nos los regalaron.', en: 'They gave them to us as a gift.' },
                      { es: 'Os lo explico ahora.', en: 'I will explain it to you all now.' },
                      { es: 'Quiero dártelo.', en: 'I want to give it to you. (attached to infinitive)' },
                      { es: 'Te lo quiero dar.', en: 'I want to give it to you. (before main verb)' },
                      { es: '¡Dámelo!', en: 'Give it to me! (attached to command)' },
                      { es: 'No me lo digas.', en: 'Don\'t tell it to me. (before negative command)' },
                    ],
                  },
                  {
                    heading: 'The le → se rule',
                    text: 'When two pronouns starting with L meet (le + lo, le + la, les + los, les + las), the first one becomes "se". This is a sound rule — "le lo" is never used.',
                    table: {
                      headers: ['❌ Incorrecto', '✓ Correcto', 'Significado'],
                      rows: [
                        ['le lo doy', 'se lo doy', 'I give it to him/her/you'],
                        ['le la mando', 'se la mando', 'I send it to him/her/you'],
                        ['les los enseño', 'se los enseño', 'I show them to them/you all'],
                        ['les las traigo', 'se las traigo', 'I bring them to them/you all'],
                      ],
                    },
                  },
                  {
                    heading: 'Disambiguating "se"',
                    text: 'Because "se" replaced le and les, "se lo" could mean to him, to her, to you, to them. Add "a + person" to remove all ambiguity.',
                    examples: [
                      { es: 'Se lo di a él.', en: 'I gave it to him.' },
                      { es: 'Se lo di a ella.', en: 'I gave it to her.' },
                      { es: 'Se lo di a usted.', en: 'I gave it to you (formal).' },
                      { es: 'Se lo di a ellos.', en: 'I gave it to them.' },
                      { es: 'Se la expliqué a mi jefe.', en: 'I explained it to my boss.' },
                      { es: '¿La carta? Ya se la mandé al cliente.', en: 'The letter? I already sent it to the client.' },
                      { es: 'Se lo voy a decir a María mañana.', en: 'I am going to tell it to María tomorrow.' },
                    ],
                  },
                  {
                    tip: 'Memory hook: I.D. — Indirect before Direct. When two L-pronouns meet, the first becomes "se". These two rules solve every double-pronoun sentence in Spanish.',
                    takeaway: '"Se lo di" is the hallmark of fluent Spanish. Beginners say the full noun; advanced speakers use both pronouns without thinking. Drill the substitution: pick any sentence with two noun objects and replace both with pronouns until it is automatic.',
                  },
                ],
              },
              {
                id: 'gl4',
                level: 'A2',
                title: 'Reflexive Verbs and Pronouns',
                subtitle: 'me, te, se, nos, os, se — verbos reflexivos',
                intro: 'A reflexive verb describes an action where the subject acts on itself. In the dictionary, these verbs end in "-se" (lavarse, vestirse, levantarse). They always pair with a reflexive pronoun that matches the subject.',
                sections: [
                  {
                    heading: 'The reflexive pronouns',
                    table: {
                      headers: ['Persona', 'Singular', 'Plural'],
                      rows: [
                        ['1ª', 'me  (myself)', 'nos  (ourselves)'],
                        ['2ª', 'te  (yourself)', 'os  (yourselves — Spain)'],
                        ['3ª', 'se  (himself, herself, yourself)', 'se  (themselves, yourselves)'],
                      ],
                    },
                  },
                  {
                    heading: 'Daily routine — the most common reflexive verbs',
                    text: 'These verbs describe what you do to your own body. Learn them as a cluster — together they describe a full day from waking to sleeping.',
                    examples: [
                      { es: 'Me despierto a las siete.', en: 'I wake up at seven.' },
                      { es: 'Me levanto enseguida.', en: 'I get up right away.' },
                      { es: 'Me ducho antes del desayuno.', en: 'I shower before breakfast.' },
                      { es: 'Me visto rápidamente.', en: 'I get dressed quickly.' },
                      { es: 'Te cepillas los dientes después de comer.', en: 'You brush your teeth after eating.' },
                      { es: 'Él se afeita cada mañana.', en: 'He shaves every morning.' },
                      { es: 'Nos acostamos tarde los viernes.', en: 'We go to bed late on Fridays.' },
                      { es: 'Se duermen viendo la televisión.', en: 'They fall asleep watching TV.' },
                    ],
                  },
                  {
                    heading: 'Reflexive vs. non-reflexive — same verb, different meaning',
                    table: {
                      headers: ['Sin reflexivo', 'Con reflexivo', 'Diferencia'],
                      rows: [
                        ['lavar (to wash sth.)', 'lavarse (to wash oneself)', 'object → self'],
                        ['ir (to go)', 'irse (to leave / go away)', 'movement → departure'],
                        ['dormir (to sleep)', 'dormirse (to fall asleep)', 'state → onset'],
                        ['poner (to put)', 'ponerse (to put on / become)', 'placement → self'],
                        ['acordar (to agree)', 'acordarse (to remember)', 'pact → memory'],
                        ['quedar (to remain)', 'quedarse (to stay)', 'position → decision'],
                        ['llamar (to call)', 'llamarse (to be named)', 'action → identity'],
                        ['sentir (to feel sth.)', 'sentirse (to feel a way)', 'object → state'],
                      ],
                    },
                  },
                  {
                    heading: 'Reflexive for emotional and physical change',
                    text: 'A large family of reflexive verbs describe becoming — a change of state. English uses "get" or "become"; Spanish uses the reflexive.',
                    examples: [
                      { es: 'Me enojo cuando mienten.', en: 'I get angry when people lie.' },
                      { es: 'Se enamoró de ella al instante.', en: 'He fell in love with her at once.' },
                      { es: 'Nos cansamos muy rápido.', en: 'We get tired very quickly.' },
                      { es: 'Se aburrieron en la reunión.', en: 'They got bored during the meeting.' },
                      { es: 'Me preocupo por ti.', en: 'I worry about you.' },
                      { es: 'Se puso nervioso antes del examen.', en: 'He got nervous before the exam.' },
                      { es: '¿Te alegras de verme?', en: 'Are you happy to see me?' },
                      { es: 'Me sorprendí cuando lo supe.', en: 'I was surprised when I found out.' },
                    ],
                  },
                  {
                    heading: 'Position of reflexive pronouns',
                    text: 'Same rules as object pronouns: before conjugated verbs, attached to infinitives / gerunds / affirmative commands. The pronoun must match the subject — change the "-se" from the dictionary form.',
                    examples: [
                      { es: 'Me quiero duchar. / Quiero ducharme.', en: 'I want to shower. (both correct)' },
                      { es: 'Estoy duchándome. / Me estoy duchando.', en: 'I am showering. (both correct)' },
                      { es: '¡Levántate!', en: 'Get up! (affirmative command)' },
                      { es: 'No te levantes todavía.', en: 'Don\'t get up yet. (negative command)' },
                    ],
                  },
                  {
                    tip: 'Body parts use the definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',
                    takeaway: 'Reflexive verbs are everywhere in spoken Spanish. Learn the daily-routine cluster first, then the emotional-change verbs. Together they let you describe a full day and how you felt about it.',
                  },
                ],
              },
              {
                id: 'gl5',
                level: 'B1',
                title: 'Reciprocal Pronouns',
                subtitle: 'nos, os, se — "each other"',
                intro: 'Reciprocal pronouns express mutual action — when two or more people do something TO each other. Spanish uses the same forms as reflexive pronouns (nos, os, se), but the meaning shifts from "oneself" to "each other".',
                sections: [
                  {
                    heading: 'The pronouns — plural only',
                    text: 'Reciprocal action needs at least two people, so only plural forms apply.',
                    table: {
                      headers: ['Pronombre', 'Sujeto', 'Significado'],
                      rows: [
                        ['nos', 'nosotros / nosotras', 'each other (us)'],
                        ['os', 'vosotros / vosotras', 'each other (you all — Spain)'],
                        ['se', 'ellos / ellas / ustedes', 'each other (them, you all)'],
                      ],
                    },
                  },
                  {
                    heading: 'Reciprocal in action',
                    examples: [
                      { es: 'Nos miramos en silencio.', en: 'We looked at each other in silence.' },
                      { es: 'Se besaron en la estación.', en: 'They kissed each other at the station.' },
                      { es: 'Os llamáis todos los días.', en: 'You call each other every day.' },
                      { es: 'Mis hermanos se ayudan mucho.', en: 'My brothers help each other a lot.' },
                      { es: 'No se hablan desde el accidente.', en: 'They haven\'t spoken to each other since the accident.' },
                      { es: 'Nos escribimos cartas durante años.', en: 'We wrote letters to each other for years.' },
                      { es: 'Se conocieron en Madrid.', en: 'They met each other in Madrid.' },
                      { es: 'Nos vemos los martes.', en: 'We see each other on Tuesdays.' },
                    ],
                  },
                  {
                    heading: 'Reciprocal vs. reflexive — disambiguation',
                    text: '"Se miran" can mean they look at themselves (reflexive) OR they look at each other (reciprocal). Context usually resolves it. When it does not, use the clarifier.',
                    examples: [
                      { es: 'Se miran en el espejo.', en: 'They look at themselves in the mirror. (reflexive)' },
                      { es: 'Se miran el uno al otro.', en: 'They look at each other. (reciprocal — explicit)' },
                      { es: 'Se aman a sí mismos.', en: 'They love themselves. (reflexive — explicit)' },
                      { es: 'Se aman el uno al otro.', en: 'They love each other. (reciprocal — explicit)' },
                    ],
                  },
                  {
                    heading: 'The clarifier — el uno al otro',
                    table: {
                      headers: ['Forma', 'Cuándo usar'],
                      rows: [
                        ['el uno al otro', 'two males or mixed group'],
                        ['la una a la otra', 'two females'],
                        ['los unos a los otros', 'three or more (masc./mixed)'],
                        ['las unas a las otras', 'three or more (all female)'],
                      ],
                    },
                  },
                  {
                    tip: 'In everyday speech the clarifier is dropped unless there is real ambiguity. Native speakers rely on context — add "el uno al otro" only when the sentence could genuinely be misread.',
                    takeaway: 'Reciprocal pronouns let you describe relationships in motion. Once you hear "se" as "each other" rather than "himself", a whole layer of how Spanish describes people opens up.',
                  },
                ],
              },
              {
                id: 'gl6',
                level: 'A1',
                title: 'Possessive Adjectives and Pronouns',
                subtitle: 'mi, tu, su — el mío, el tuyo, el suyo',
                intro: 'Spanish has two sets of possessives. Short forms go BEFORE the noun — they are the everyday form. Long forms go AFTER the noun or stand alone as pronouns — they add emphasis. Both agree with the thing possessed, never with the possessor.',
                sections: [
                  {
                    heading: 'Short possessive adjectives — before the noun',
                    table: {
                      headers: ['Persona', 'Singular', 'Plural'],
                      rows: [
                        ['yo', 'mi  (my)', 'mis'],
                        ['tú', 'tu  (your)', 'tus'],
                        ['él / ella / Ud.', 'su  (his, her, your)', 'sus'],
                        ['nosotros', 'nuestro/a  (our)', 'nuestros/as'],
                        ['vosotros', 'vuestro/a  (your all — Spain)', 'vuestros/as'],
                        ['ellos / Uds.', 'su  (their, your all)', 'sus'],
                      ],
                    },
                  },
                  {
                    heading: 'Short possessives in action',
                    examples: [
                      { es: 'Mi casa es tu casa.', en: 'My house is your house.' },
                      { es: 'Sus hijos estudian en Madrid.', en: 'His/her/their children study in Madrid.' },
                      { es: 'Nuestra empresa tiene cien empleados.', en: 'Our company has a hundred employees.' },
                      { es: 'Tus llaves están sobre la mesa.', en: 'Your keys are on the table.' },
                      { es: 'Mis padres viven en Casablanca.', en: 'My parents live in Casablanca.' },
                      { es: 'Su despacho está en el segundo piso.', en: 'His/her office is on the second floor.' },
                      { es: 'Vuestro español es muy bueno.', en: 'Your Spanish is very good.' },
                      { es: '¿Es tu primera vez en España?', en: 'Is it your first time in Spain?' },
                    ],
                  },
                  {
                    heading: 'Long (stressed) possessives — after the noun or as pronouns',
                    text: 'These emphasize the possessor. As pronouns (replacing the whole noun phrase) they take a definite article: el mío, la tuya, los nuestros.',
                    table: {
                      headers: ['Persona', 'Masc. sg.', 'Fem. sg.', 'Masc. pl.', 'Fem. pl.'],
                      rows: [
                        ['yo', 'mío', 'mía', 'míos', 'mías'],
                        ['tú', 'tuyo', 'tuya', 'tuyos', 'tuyas'],
                        ['él/ella/Ud.', 'suyo', 'suya', 'suyos', 'suyas'],
                        ['nosotros', 'nuestro', 'nuestra', 'nuestros', 'nuestras'],
                        ['vosotros', 'vuestro', 'vuestra', 'vuestros', 'vuestras'],
                        ['ellos/Uds.', 'suyo', 'suya', 'suyos', 'suyas'],
                      ],
                    },
                  },
                  {
                    heading: 'Long possessives in action',
                    examples: [
                      { es: 'Es un amigo mío.', en: 'He is a friend of mine.' },
                      { es: '¡Madre mía!', en: 'Oh my goodness! (lit. mother of mine)' },
                      { es: 'Esta casa es nuestra.', en: 'This house is ours.' },
                      { es: 'Mi coche es viejo. El tuyo es nuevo.', en: 'My car is old. Yours is new.' },
                      { es: 'Las maletas son suyas.', en: 'The suitcases are hers/his/theirs.' },
                      { es: 'Los míos están en el armario.', en: 'Mine are in the closet.' },
                      { es: 'Un colega suyo me llamó ayer.', en: 'A colleague of his called me yesterday.' },
                    ],
                  },
                  {
                    heading: 'Disambiguating "su" and "suyo"',
                    text: 'Because "su" can mean his/her/your/their, Spanish uses "de + person" to be precise, especially in writing.',
                    examples: [
                      { es: 'Su libro → el libro de él.', en: 'His book → the book of his.' },
                      { es: 'Su madre → la madre de ella.', en: 'Her mother.' },
                      { es: 'Sus problemas → los problemas de ellos.', en: 'Their problems.' },
                    ],
                  },
                  {
                    tip: 'Body parts and clothing take a definite article, not a possessive. "Me lavo las manos" — not "mis manos". Spanish assumes the hands you wash belong to you.',
                    takeaway: 'Short forms before the noun, long forms after or alone. Both agree with the thing possessed, not the possessor. Once "su" feels comfortable for his/her/their, you have unlocked half of all spoken Spanish.',
                  },
                ],
              },
              {
                id: 'gl7',
                level: 'A2',
                title: 'Prepositional Pronouns',
                subtitle: 'mí, ti, sí — pronombres después de preposición',
                intro: 'After a preposition (a, de, para, con, sin, por...) Spanish uses a special set of pronouns. Most look like subject pronouns — except the first and second person singular, which become mí and ti. And three of them fuse with "con" into a single word.',
                sections: [
                  {
                    heading: 'The pronouns',
                    text: 'Note the accent on "mí" — it distinguishes the pronoun from the possessive "mi" (my).',
                    table: {
                      headers: ['Persona', 'Singular', 'Plural'],
                      rows: [
                        ['1ª', 'mí  (me)', 'nosotros / nosotras  (us)'],
                        ['2ª', 'ti  (you)', 'vosotros / vosotras  (you all — Spain)'],
                        ['3ª', 'él, ella, usted, sí', 'ellos, ellas, ustedes, sí'],
                      ],
                    },
                  },
                  {
                    heading: 'Prepositional pronouns in action',
                    examples: [
                      { es: 'Este regalo es para ti.', en: 'This gift is for you.' },
                      { es: 'No quiero ir sin ella.', en: 'I don\'t want to go without her.' },
                      { es: 'Hablan de mí a mis espaldas.', en: 'They talk about me behind my back.' },
                      { es: 'Iremos con ustedes.', en: 'We will go with you all.' },
                      { es: 'Confío en ti completamente.', en: 'I trust you completely.' },
                      { es: 'El libro es de él, no de ella.', en: 'The book is his, not hers.' },
                      { es: 'Todo depende de ti.', en: 'Everything depends on you.' },
                      { es: 'Piensa mucho en ella.', en: 'He thinks about her a lot.' },
                    ],
                  },
                  {
                    heading: 'The con-fusions — obligatory contractions',
                    text: 'When "con" meets mí, ti, or sí, they fuse into a single word. These contractions are OBLIGATORY — never say "con mí" or "con ti".',
                    table: {
                      headers: ['Forma', 'Significado'],
                      rows: [
                        ['conmigo', 'with me'],
                        ['contigo', 'with you'],
                        ['consigo', 'with himself / herself / themselves'],
                      ],
                    },
                    examples: [
                      { es: '¿Vienes conmigo?', en: 'Are you coming with me?' },
                      { es: 'Quiero hablar contigo.', en: 'I want to talk with you.' },
                      { es: 'Lleva el dinero consigo.', en: 'He carries the money with him.' },
                      { es: 'No está contento consigo mismo.', en: 'He is not happy with himself.' },
                    ],
                  },
                  {
                    heading: 'Exceptions — when subject pronouns take over',
                    text: 'After entre, según, excepto, salvo, menos, incluso (when meaning "even"), Spanish uses yo and tú instead of mí and ti.',
                    examples: [
                      { es: 'Entre tú y yo, no me cae bien.', en: 'Between you and me, I don\'t like him.' },
                      { es: 'Según tú, ¿qué deberíamos hacer?', en: 'According to you, what should we do?' },
                      { es: 'Todos vinieron excepto yo.', en: 'Everyone came except me.' },
                      { es: 'Hasta yo lo entiendo.', en: 'Even I understand it.' },
                    ],
                  },
                  {
                    tip: '"Mí" with an accent = prepositional pronoun (for me). "Mi" without = possessive (my). "Es para mí" vs "Es mi casa". Get this right in writing — it is a basic literacy marker.',
                    takeaway: 'After any preposition, mí and ti replace yo and tú. Everyone else uses the subject form. The three contractions (conmigo, contigo, consigo) are obligatory — memorize them as a block, they are among the highest-frequency irregular forms in Spanish.',
                  },
                ],
              },
              {
                id: 'gl8',
                level: 'A1',
                title: 'Basic Spanish Prepositions',
                subtitle: 'a, de, en, para, por, con, sin, hasta, desde...',
                intro: 'Prepositions are the connective tissue of Spanish — small words that show how nouns relate to each other in space, time, and logic. The top ten prepositions appear in almost every sentence you will ever read. Do not translate them one-to-one from English; learn each one in context.',
                sections: [
                  {
                    heading: 'The core prepositions',
                    table: {
                      headers: ['Preposición', 'Significados principales'],
                      rows: [
                        ['a', 'to, at — direction, time, personal "a"'],
                        ['de', 'of, from — origin, possession, material, topic'],
                        ['en', 'in, on, at — location, time inside'],
                        ['para', 'for, in order to — goal, recipient, deadline'],
                        ['por', 'for, by, through — cause, means, path, duration'],
                        ['con', 'with'],
                        ['sin', 'without'],
                        ['sobre', 'on, about, above'],
                        ['hasta', 'until, up to, as far as'],
                        ['desde', 'from, since'],
                        ['hacia', 'toward'],
                        ['entre', 'between, among'],
                        ['durante', 'during'],
                        ['según', 'according to'],
                        ['contra', 'against'],
                      ],
                    },
                  },
                  {
                    heading: 'A — direction, time, personal object',
                    examples: [
                      { es: 'Voy a Madrid mañana.', en: 'I am going to Madrid tomorrow. (direction)' },
                      { es: 'Llegamos a las nueve en punto.', en: 'We arrive at nine on the dot. (time)' },
                      { es: 'Veo a María todos los días.', en: 'I see María every day. (personal a)' },
                      { es: 'Dale el libro a Juan.', en: 'Give the book to Juan.' },
                      { es: 'Aprendí a leer a los cinco años.', en: 'I learned to read at age five.' },
                      { es: 'Está a tres kilómetros de aquí.', en: 'It is three kilometres from here.' },
                    ],
                  },
                  {
                    heading: 'De — origin, possession, material, topic',
                    examples: [
                      { es: 'Soy de Marruecos.', en: 'I am from Morocco. (origin)' },
                      { es: 'Es el coche de mi padre.', en: 'It is my father\'s car. (possession)' },
                      { es: 'Una mesa de madera.', en: 'A wooden table. (material)' },
                      { es: 'Un libro de derecho.', en: 'A law book. (topic)' },
                      { es: 'Murió de cáncer.', en: 'He died of cancer. (cause)' },
                      { es: 'Vengo de la oficina.', en: 'I am coming from the office.' },
                    ],
                  },
                  {
                    heading: 'En — location and time inside',
                    examples: [
                      { es: 'Vivo en España desde hace dos años.', en: 'I have lived in Spain for two years.' },
                      { es: 'El libro está en la mesa.', en: 'The book is on the table.' },
                      { es: 'Te veo en la oficina a las diez.', en: 'I will see you at the office at ten.' },
                      { es: 'En verano hace mucho calor.', en: 'In summer it is very hot.' },
                      { es: 'Llegué en tren desde Barcelona.', en: 'I arrived by train from Barcelona.' },
                      { es: 'Pienso en ti constantemente.', en: 'I think about you constantly.' },
                    ],
                  },
                  {
                    heading: 'Por vs Para — the most important contrast',
                    text: 'POR looks backward at cause, means, path, or duration. PARA looks forward at goal, recipient, or deadline. Ask: is this sentence pointing at a cause, or at a goal?',
                    table: {
                      headers: ['POR — la causa, el camino', 'PARA — el destino, el fin'],
                      rows: [
                        ['Gracias por tu ayuda.', 'Este regalo es para ti.'],
                        ['Caminé por el parque.', 'Salimos para Madrid.'],
                        ['Pagué cien euros por el libro.', 'Lo necesito para el lunes.'],
                        ['Estudio por la mañana.', 'Estudio para ser abogado.'],
                        ['Hablan por teléfono.', 'Es demasiado difícil para mí.'],
                        ['Lo hizo por amor.', 'Esta nota es para ti.'],
                      ],
                    },
                  },
                  {
                    heading: 'Desde / Hasta — the pair of endpoints',
                    examples: [
                      { es: 'Trabajo desde las nueve hasta las cinco.', en: 'I work from nine until five.' },
                      { es: 'Vivo aquí desde 2020.', en: 'I have lived here since 2020.' },
                      { es: 'El tren va hasta Sevilla.', en: 'The train goes as far as Seville.' },
                      { es: 'Desde aquí se ve el mar.', en: 'You can see the sea from here.' },
                      { es: 'Hasta luego.', en: 'See you later. (lit. until later)' },
                      { es: 'No he dormido desde el martes.', en: 'I haven\'t slept since Tuesday.' },
                    ],
                  },
                  {
                    heading: 'Verb + preposition fixed phrases — learn as single units',
                    table: {
                      headers: ['Verbo + preposición', 'English'],
                      rows: [
                        ['pensar en', 'to think about'],
                        ['soñar con', 'to dream of / about'],
                        ['enamorarse de', 'to fall in love with'],
                        ['casarse con', 'to get married to'],
                        ['depender de', 'to depend on'],
                        ['confiar en', 'to trust in'],
                        ['acordarse de', 'to remember'],
                        ['olvidarse de', 'to forget'],
                        ['tratar de', 'to try to'],
                        ['empezar a', 'to begin to'],
                        ['dejar de', 'to stop doing'],
                        ['tardar en', 'to take time to'],
                      ],
                    },
                  },
                  {
                    tip: 'Never translate prepositions one-to-one from English. "Pensar EN" (not sobre), "soñar CON" (not sobre), "casarse CON" (not a). The preposition is part of the verb — learn them as a single fixed pair from the very first encounter.',
                    takeaway: 'Master the top ten prepositions (a, de, en, para, por, con, sin, sobre, hasta, desde) and 90% of Spanish sentences become parseable. The verb+preposition fixed phrases are the remaining 10% — those must be memorized one by one, like vocabulary.',
                  },
                ],
              },
            ],
          },
          {
            type: 'takeaway',
            text: 'Grammar is the skeleton — invisible when it works, painful when it breaks. These eight lessons cover the pronouns and prepositions that appear in almost every Spanish sentence. Open one lesson at a time, read it slowly, close it. Come back to the next one tomorrow.',
          },
        ],
      },
    ],
  },
  {
    id: 'lectura',
    label: 'Lectura',
    sublabel: 'Cuentos, poemas y canciones',
    chapters: [
      {
        id: 'stories',
        level: 'A1',
        title: 'Diez Cuentos',
        subtitle: 'Toca el título para abrir o cerrar cada cuento',
        intro: 'Below are ten short readings — three drawn from earlier chapters of this book and seven written for you. They are arranged in rough order of difficulty, from A1 to B2. Tap any title to open or close its text. Read them in any order. The hardest one will not get easier by avoiding it; the easiest one will not get harder by reading it twice.',
        blocks: [
          {
            type: 'foldable-stories',
            stories: [
              {
                level: 'A1',
                title: 'La Familia Pérez',
                paragraphs: [
                  'Los Pérez son una familia pequeña. Viven en Sevilla, en una casa blanca cerca del río. El padre se llama Antonio y trabaja en un banco. La madre se llama Carmen y es profesora de matemáticas.',
                  'Tienen dos hijos: Lucía, que tiene quince años, y Miguel, que tiene doce. Lucía estudia mucho y quiere ser médica. Miguel prefiere el fútbol; juega cada tarde en el parque con sus amigos.',
                  'Los domingos, toda la familia come junta. Carmen prepara una paella grande. Después, pasean por el centro de Sevilla y toman un helado.',
                ],
              },
              {
                level: 'A1',
                title: 'El Café de la Esquina',
                paragraphs: [
                  'Cada mañana, Othman va al café de la esquina. El café se llama "La Buena Hora". El camarero se llama Pablo y siempre lleva una camisa blanca.',
                  'Othman pide un café con leche y un cruasán. Lee el periódico durante veinte minutos. A veces escucha la conversación de las otras mesas. Le gusta el ruido suave del café por la mañana.',
                  'A las ocho y media paga, sale del café y camina hacia su oficina. Pablo le dice "hasta mañana" y Othman sonríe. Es el mejor momento de su día.',
                ],
              },
              {
                level: 'A2',
                title: 'Un Día en Casablanca',
                paragraphs: [
                  'El sábado pasado fui a Casablanca con mi hermano. Salimos muy temprano porque el viaje es largo. En el coche escuchamos música y hablamos de la familia.',
                  'Llegamos a la ciudad a las once. Primero visitamos la mezquita Hassan II. Es enorme, y desde allí se puede ver el mar. Luego comimos en un restaurante cerca del puerto. Pedí pescado a la plancha y mi hermano una tajine de pollo.',
                  'Por la tarde caminamos por la Corniche. Hacía calor pero el viento del Atlántico era fresco. Compré un libro pequeño en una librería antigua. El librero me preguntó de dónde era y me recomendó un poeta marroquí.',
                  'Volvimos a casa por la noche, cansados pero contentos.',
                ],
              },
              {
                level: 'A2',
                title: 'El Cliente Difícil',
                paragraphs: [
                  'Don Ramón llega a la oficina cada lunes a las nueve. Siempre lleva un traje gris y un maletín de cuero. Es un cliente difícil porque pregunta todo, escribe todo y no confía en nadie.',
                  '— Quiero leer cada palabra del contrato — dice siempre.',
                  'Yo le explico el documento despacio. Él toma notas en una libreta pequeña. Después pregunta otra vez sobre las cláusulas que ya hemos discutido.',
                  'A veces estoy cansado, pero entiendo a Don Ramón. Su empresa es el trabajo de toda su vida. Para él, cada palabra importa.',
                  'Cuando termina la reunión, me da la mano y dice: "Gracias, abogado. Hasta el lunes." Y yo respondo: "Hasta el lunes, Don Ramón."',
                ],
              },
              {
                level: 'B1',
                title: 'La Carta del Abuelo',
                paragraphs: [
                  'Querido nieto: Cuando leas esta carta yo ya estaré lejos. No quiero que te pongas triste — solo quiero que sepas algunas cosas que tu padre nunca tuvo tiempo de decirte.',
                  'La vida no es una línea recta. Es un río que cambia de cauce. Yo crucé el mar dos veces, perdí la casa donde nací, y aprendí tres idiomas que ya no hablo. Y a pesar de todo, aquí estoy, escribiéndote.',
                  'Te pido una sola cosa: que leas. Lee todo lo que puedas. Lee a los que piensan distinto, lee a los muertos, lee a los enemigos. Un hombre que lee no se queda solo nunca, aunque viva en un desierto.',
                  'Te quiere, tu abuelo.',
                ],
              },
              {
                level: 'B1',
                title: 'El Tribunal Vacío',
                paragraphs: [
                  'Llegué al tribunal a las siete y media de la mañana. La audiencia no empezaba hasta las diez, pero quería revisar mis notas en silencio.',
                  'El edificio estaba casi vacío. Solo el conserje, don Felipe, barría el suelo del pasillo principal. Me saludó con la cabeza y siguió trabajando.',
                  'Entré en la sala de audiencias y me senté en mi sitio. La luz entraba por las ventanas altas y formaba largas líneas en el suelo de madera. Había algo solemne en aquel silencio — como si las paredes recordaran cada caso, cada testigo, cada sentencia.',
                  'Pensé en mi cliente. Era un hombre joven, asustado, que no entendía bien el sistema. Yo había preparado el caso durante semanas. Sabía que la verdad estaba de nuestro lado, pero también sabía que la verdad, en un tribunal, no siempre gana.',
                  'Saqué mis papeles. Empecé a leer otra vez. A las nueve y media empezaron a llegar los demás abogados. A las diez en punto, el juez entró por la puerta del fondo. La audiencia comenzó.',
                ],
              },
              {
                level: 'B1',
                title: 'La Llave Perdida',
                paragraphs: [
                  'Carmen llevaba veinte años viviendo en el mismo apartamento. Conocía cada rincón, cada ruido, cada vecino. Pero aquella tarde, al volver del mercado, no pudo encontrar la llave.',
                  'Buscó en el bolso. Buscó en los bolsillos del abrigo. Buscó dos veces, tres veces, cinco veces. Nada. La llave había desaparecido.',
                  'Llamó a la puerta de su vecina, doña Inés, que tenía una copia. Pero doña Inés estaba en casa de su hija y no volvería hasta el domingo.',
                  'Carmen se sentó en el escalón, frente a su propia puerta. Eran las seis de la tarde. El edificio estaba en silencio. Por la ventana del pasillo entraba una luz suave, anaranjada.',
                  'De pronto recordó algo. Por la mañana, antes de salir, había dejado la llave en la mesa de la cocina porque sonaba el teléfono. No la había perdido. La llave estaba dentro, esperándola.',
                  'Carmen se rió sola. Llamó a un cerrajero. Mientras esperaba, pensó que a veces las cosas no se pierden — solo nos olvidan.',
                ],
              },
              {
                level: 'B2',
                title: 'Macondo (fragmento simplificado)',
                paragraphs: [
                  'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro construidas a la orilla de un río de aguas claras que se precipitaban por un lecho de piedras pulidas.',
                  'El mundo era tan reciente que muchas cosas no tenían nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos plantaba su carpa cerca del pueblo y, con un grande alboroto de pitos y timbales, daban a conocer los nuevos inventos.',
                  'Primero llevaron el imán. Un gitano corpulento, de barba salvaje, que se presentó con el nombre de Melquíades, hizo una demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia.',
                ],
              },
              {
                level: 'B2',
                title: 'El Testigo',
                paragraphs: [
                  'El testigo entró en la sala con paso lento. Era un hombre mayor, de unos setenta años, con manos que temblaban ligeramente. Llevaba una chaqueta vieja pero limpia, y un pañuelo gris doblado en el bolsillo.',
                  'Le pidieron que jurara decir la verdad. Lo hizo en voz baja, casi sin mirar al juez. Después se sentó.',
                  'Yo conocía aquel rostro. Era el panadero del pueblo donde había crecido mi cliente — el mismo panadero que cada mañana, durante años, le había regalado una barra de pan cuando los padres no podían comprarla. Pero el testigo no me reconoció a mí.',
                  '— Conozco al acusado desde que era un niño — dijo —. Si hubiera sabido que algún día yo estaría aquí, en este tribunal, hablando de él... no lo habría creído. Nunca le vi hacer nada malo. Nunca.',
                  'El fiscal intentó interrumpir. El juez le dejó continuar. El panadero siguió hablando, despacio, eligiendo cada palabra. Habló de un niño que ayudaba en la panadería los sábados. De un joven que cuidaba a su madre enferma. De un hombre que, en su opinión, no era capaz del crimen del que se le acusaba.',
                  'Cuando terminó, hubo un silencio largo. Yo cerré los ojos un instante. Tres frases de un panadero podían valer más que tres meses de trabajo legal — si quien las decía era honesto, y si quien las escuchaba sabía escuchar.',
                ],
              },
              {
                level: 'B2',
                title: 'El Viaje a Granada',
                paragraphs: [
                  'Decidí ir a Granada un jueves de marzo, sin razón clara. Había dormido mal varias noches y necesitaba salir de la ciudad. Compré un billete de tren para esa misma tarde.',
                  'El viaje duró cinco horas. Por la ventana pasaron olivares, pueblos blancos, montañas grises. Leí poco. Pensé mucho. A veces, cuando uno cruza un paisaje en silencio, se cruza también con uno mismo.',
                  'Llegué de noche. La ciudad olía a jazmín, aunque era pronto para los jazmines. Caminé hasta el Albaicín por calles estrechas, empedradas, que subían sin piedad. El aire era frío. Las casas tenían las ventanas cerradas, pero detrás de las cortinas se adivinaban familias cenando, voces, una televisión.',
                  'Encontré una pensión pequeña cerca de San Nicolás. La dueña, una mujer de unos sesenta años, me dio una taza de té sin que se la pidiera. "Para el viaje", dijo, aunque el viaje ya había terminado.',
                  'Aquella noche subí al mirador. La Alhambra estaba iluminada al otro lado del valle, dorada contra la oscuridad. No había nadie más, solo un gato y el silencio. Me senté en un muro y miré.',
                  'No pensé en nada importante. No tomé ninguna decisión. Pero algo, en algún sitio, se ordenó por dentro — como cuando uno guarda los libros que llevan meses fuera de su sitio. Volví a la pensión sin prisa.',
                  'A la mañana siguiente, cogí el primer tren de vuelta. Granada me había hecho lo que tenía que hacerme. No hacía falta más.',
                ],
              },
            ],
          },
          {
            type: 'takeaway',
            text: 'Reading is the most patient teacher you will ever have. Open one story today, even if you only finish a paragraph. Open another tomorrow. In a month, sentences that look like a wall today will read like a path.',
          },
        ],
      },
      {
        id: 'biografias',
        level: 'A1',
        title: 'Biografías',
        subtitle: 'Filósofos y escritores — nivel B1',
        intro: 'Two philosophers whose ideas still echo in every serious conversation about how to live. Each biography is written in four levels — A1 to B2 — so you can start at your current level and climb. Tap a biography to open it, then read one level at a time.',
        blocks: [
          {
            type: 'foldable-bios',
            bios: [
              {
                title: 'Arthur Schopenhauer',
                subtitle: 'Filósofo alemán del pesimismo y la voluntad',
                dates: '1788 — 1860',
                levels: [
                  {
                    level: 'A1',
                    heading: '¿Quién fue Schopenhauer?',
                    paragraphs: [
                      'Arthur Schopenhauer fue un filósofo alemán. Nació en 1788 en Danzig, una ciudad de Europa. Murió en 1860 en Fráncfort, Alemania.',
                      'Era un hombre muy inteligente. Escribió libros muy importantes. Le gustaba leer y pensar mucho. No tenía muchos amigos. Era solitario y serio.',
                      'Su libro más famoso se llama El mundo como voluntad y representación. Es un libro muy difícil, pero muy importante en la historia de la filosofía.',
                    ],
                    vocab: 'nació · murió · escribió · filósofo · libro · importante',
                  },
                  {
                    level: 'A2',
                    heading: 'Su vida y su familia',
                    paragraphs: [
                      'Arthur Schopenhauer nació el 22 de febrero de 1788 en Danzig, que hoy se llama Gdańsk y está en Polonia. Su padre, Heinrich Floris, era un rico comerciante. Su madre, Johanna, era escritora y muy conocida en la sociedad alemana de su tiempo.',
                      'Cuando Arthur era joven, su familia viajó mucho por Europa. Vivió en Francia, en Inglaterra y en otros países. Por eso aprendió a hablar varios idiomas: alemán, francés, inglés, italiano y español.',
                      'La relación con su madre fue muy difícil. Ellos no se llevaban bien. Johanna tenía muchos amigos y le gustaba la vida social, pero Arthur prefería estar solo y estudiar. Se separaron cuando Arthur tenía unos veinte años y no se vieron más.',
                      'Su padre murió de manera misteriosa en 1805. Algunos piensan que fue un suicidio. Esto afectó mucho a Arthur y lo puso muy triste. Sin embargo, heredó dinero de su padre, y ese dinero le permitió estudiar y escribir sin necesidad de trabajar.',
                    ],
                    vocab: 'comerciante · heredar · relación difícil · preferir estar solo · afectar',
                  },
                  {
                    level: 'B1',
                    heading: 'Sus ideas filosóficas',
                    paragraphs: [
                      'Schopenhauer estudió filosofía en la Universidad de Berlín, donde también enseñaba el famoso filósofo Georg Wilhelm Friedrich Hegel. Los dos hombres no se llevaban bien. Schopenhauer pensaba que Hegel era un charlatán y decidió dar sus clases a la misma hora que Hegel para competir con él. Pero los estudiantes preferían a Hegel, y Schopenhauer terminó enseñando en un salón casi vacío. Fue una humillación que no olvidó jamás.',
                      'En 1818, publicó su obra principal: El mundo como voluntad y representación. En este libro, Schopenhauer propone que el mundo que vemos no es la realidad verdadera, sino solo una "representación", es decir, una imagen que crea nuestra mente. Detrás de esa imagen existe una fuerza ciega e irracional que él llamó "la Voluntad". Esta Voluntad no tiene propósito ni fin; simplemente existe y nos impulsa a desear, a luchar, a sufrir.',
                      'Para Schopenhauer, el deseo es la causa principal del sufrimiento humano. Cuando deseamos algo y no lo conseguimos, sufrimos. Cuando lo conseguimos, dejamos de desearlo y sentimos aburrimiento. Por eso, según él, la vida humana es esencialmente un ciclo de sufrimiento sin fin.',
                      'Sin embargo, Schopenhauer también propuso formas de escapar, aunque sea temporalmente, de este sufrimiento. Una de ellas es el arte, especialmente la música, que él consideraba la forma más pura de expresión porque no representa objetos del mundo sino la Voluntad misma. Otra forma es la compasión hacia los demás, que nos permite salir del egoísmo natural y conectar con el sufrimiento ajeno.',
                    ],
                    vocab: 'charlatán · humillación · representación · fuerza ciega · compasión · egoísmo · impulsar',
                  },
                  {
                    level: 'B2',
                    heading: 'Su influencia y legado',
                    paragraphs: [
                      'Durante gran parte de su vida, Schopenhauer fue un filósofo ignorado por la academia y por el público en general. Sus contemporáneos preferían el idealismo hegeliano, con su visión optimista del progreso histórico, a la visión sombría y desencantada que ofrecía Schopenhauer. Sin embargo, a finales de su vida, alrededor de los años 1850, empezó a ganar reconocimiento. Para cuando murió en 1860, ya era considerado uno de los pensadores más originales de su época.',
                      'Su influencia posterior fue extraordinaria y se extendió mucho más allá de los círculos filosóficos. Friedrich Nietzsche, uno de los filósofos más importantes del siglo XIX, reconoció abiertamente la deuda que tenía con Schopenhauer, aunque más tarde se distanció de su pesimismo y desarrolló una filosofía radicalmente opuesta. Richard Wagner, el compositor alemán cuyas óperas revolucionaron la música occidental, leyó El mundo como voluntad y representación con enorme entusiasmo y declaró que ese libro había transformado su manera de entender el arte y la vida.',
                      'En el campo de la psicología, Sigmund Freud reconoció que muchas de sus ideas sobre el inconsciente y los instintos tenían precedentes en la filosofía de Schopenhauer, aunque aseguró no haberla leído en detalle antes de formular sus propias teorías. La noción schopenhaueriana de una fuerza irracional que gobierna la conducta humana anticipó en décadas los conceptos centrales del psicoanálisis.',
                      'En literatura, escritores como Leo Tolstói, Marcel Proust, Thomas Hardy y Samuel Beckett absorbieron su visión trágica de la existencia. La famosa obra teatral de Beckett Esperando a Godot, por ejemplo, refleja con claridad el universo schopenhaueriano: personajes atrapados en una espera sin sentido, sin progreso posible, sin redención a la vista.',
                      'Hoy en día, el pensamiento de Schopenhauer experimenta un renovado interés tanto en la academia como en la cultura popular. Sus ideas sobre el sufrimiento, la ilusión del deseo y la importancia de la compasión resuenan con fuerza en un mundo donde la ansiedad, el consumismo y la búsqueda de sentido ocupan un lugar central en la experiencia contemporánea. Schopenhauer no fue un filósofo que ofreciera consuelo fácil, pero sí uno que tuvo el valor de mirar la condición humana sin adornos ni ilusiones, y esa honestidad radical es precisamente lo que sigue haciéndolo tan relevante más de ciento cincuenta años después de su muerte.',
                    ],
                    vocab: 'desencantado · precedentes · psicoanálisis · redención · consumismo · condición humana · resonar',
                  },
                ],
              },
              {
                title: 'Friedrich Nietzsche',
                subtitle: 'El filósofo del martillo',
                dates: '1844 — 1900',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Los primeros años',
                    paragraphs: [
                      'Friedrich Wilhelm Nietzsche nació el 15 de octubre de 1844 en Röcken, un pequeño pueblo de Prusia, en lo que hoy es Alemania. Su padre, Karl Ludwig, era pastor protestante. Era un hombre tranquilo y muy querido por la comunidad. Su madre, Franziska, era una mujer fuerte y religiosa. Nietzsche también tenía una hermana menor llamada Elisabeth, con quien tuvo una relación muy importante durante toda su vida, aunque también muy complicada.',
                      'Cuando Nietzsche tenía solo cinco años, su padre murió de una enfermedad cerebral. Fue un momento muy difícil para la familia. Después de esta pérdida, la madre se mudó con los hijos a Naumburgo, una ciudad más grande. Allí, el joven Friedrich creció en una casa llena de mujeres: su madre, su hermana, su abuela y dos tías. Esta situación influyó mucho en su carácter y en su manera de ver el mundo.',
                      'Desde niño, Nietzsche fue un estudiante brillante. Le gustaba mucho leer, escribir poesía y tocar el piano. A los catorce años, recibió una beca para estudiar en la prestigiosa escuela de Pforta, conocida por su excelente nivel académico. Allí aprendió latín, griego antiguo, literatura y filosofía clásica. Fue en esa época cuando empezó a sentir una gran pasión por los textos de los griegos antiguos.',
                    ],
                    vocab: 'beca · prestigiosa · pérdida · influyó · complicada',
                  },
                  {
                    level: 'B1',
                    heading: 'El joven profesor',
                    paragraphs: [
                      'Después de terminar la escuela, Nietzsche fue a la Universidad de Bonn para estudiar teología y filología clásica. Sin embargo, pronto abandonó la teología porque había perdido la fe religiosa. Se trasladó a la Universidad de Leipzig, donde se concentró en la filología, que es el estudio de los textos y las lenguas antiguas.',
                      'En Leipzig tuvo dos experiencias que cambiaron su vida para siempre. La primera fue descubrir, casi por accidente, el libro El mundo como voluntad y representación de Arthur Schopenhauer. Lo leyó de principio a fin en pocos días y quedó completamente fascinado. Las ideas de Schopenhauer sobre el sufrimiento, la voluntad y el arte lo impresionaron profundamente. Aunque después Nietzsche se alejó de estas ideas, Schopenhauer fue su primer gran maestro filosófico.',
                      'La segunda experiencia fue conocer al compositor Richard Wagner. Los dos hombres se hicieron muy amigos. Wagner era famoso, apasionado y lleno de energía. Nietzsche lo admiraba enormemente y los dos pasaban horas hablando de música, filosofía y arte. Pero esta amistad también terminó años más tarde, cuando Nietzsche rechazó las ideas de Wagner y lo criticó en sus libros.',
                      'Nietzsche era tan talentoso que la Universidad de Basilea, en Suiza, le ofreció un puesto de profesor a los veinticuatro años, antes incluso de terminar su doctorado. Fue algo muy raro y excepcional. Allí enseñó filología clásica durante varios años y publicó su primer libro importante: El nacimiento de la tragedia, en 1872. En este libro, Nietzsche analizaba la cultura griega antigua y proponía que había dos fuerzas opuestas en el arte: lo apolíneo, que representa el orden y la razón, y lo dionisíaco, que representa la pasión y el caos.',
                    ],
                    vocab: 'filología · se alejó · doctorado · apolíneo / dionisíaco · opuestas',
                  },
                  {
                    level: 'B1',
                    heading: 'Sus ideas principales',
                    paragraphs: [
                      'Nietzsche es famoso por sus ideas filosóficas, que fueron muy diferentes y provocadoras para su época. No escribía como los filósofos tradicionales, con largos textos sistemáticos. Prefería escribir en aforismos, que son frases o párrafos cortos y muy intensos, llenos de ideas. Su estilo era literario, poético y a veces muy difícil de interpretar. Por eso, su obra ha sido leída e interpretada de maneras muy distintas a lo largo de los años.',
                      'Una de sus ideas más famosas es la "muerte de Dios". En su libro La gaya ciencia (1882), Nietzsche escribió que Dios había muerto y que los seres humanos lo habían matado. Pero esto no era una afirmación religiosa simple. Lo que Nietzsche quería decir es que la fe en Dios y en los valores tradicionales del cristianismo ya no era posible en el mundo moderno. La ciencia, la razón y el pensamiento crítico habían destruido esa fe. Para Nietzsche, esto era a la vez una liberación y un problema enorme, porque si Dios no existe, ¿quién decide lo que es bueno o malo? ¿Qué da sentido a la vida?',
                      'Para responder a estas preguntas, Nietzsche propuso la figura del Übermensch, que en español se traduce como "superhombre". El superhombre no es un ser físicamente superior, sino una persona que es capaz de crear sus propios valores, vivir con libertad y afirmar la vida con toda su complejidad, incluyendo el dolor y el sufrimiento. El superhombre no necesita la religión ni las normas sociales para encontrar un propósito. Él mismo decide quién quiere ser.',
                      'Otra idea central es la "voluntad de poder". Para Nietzsche, el impulso más fundamental de los seres vivos no es la búsqueda de placer ni la evitación del dolor, como pensaba Schopenhauer. Es la voluntad de crecer, de superarse, de expresar la propia fuerza. Esta idea se aplica tanto a las personas individuales como a las culturas y las sociedades.',
                      'Nietzsche también desarrolló el concepto del "eterno retorno". Imaginaba que toda la vida, con cada detalle, se repite infinitamente para siempre. Esta idea es más un experimento mental que una teoría científica. Nietzsche la usaba como una prueba moral: si supieras que vas a vivir tu vida exactamente igual infinitas veces, ¿la vivirías de la misma manera? ¿Serías capaz de decir "sí" a tu vida tal como es?',
                      'Finalmente, Nietzsche criticó fuertemente la moral tradicional, especialmente la cristiana. En su libro Más allá del bien y del mal (1886) y en La genealogía de la moral (1887), argumentó que los valores morales como la humildad, la compasión y el sacrificio no son valores universales y eternos, sino que fueron inventados históricamente por los débiles para controlar a los fuertes. Llamó a esto "moral de rebaño". Nietzsche no proponía ser cruel, sino rechazar los valores que niegan la vida y encontrar unos nuevos que la celebren.',
                    ],
                    vocab: 'aforismos · provocadoras · superhombre · voluntad de poder · moral de rebaño · eterno retorno · superarse',
                  },
                  {
                    level: 'B1',
                    heading: 'La enfermedad y el fin',
                    paragraphs: [
                      'Desde joven, Nietzsche tuvo problemas de salud muy serios. Sufría de fuertes dolores de cabeza, problemas de visión y dificultad para dormir. Por estas razones, tuvo que dejar su puesto de profesor en Basilea en 1879, solo con treinta y cuatro años. A partir de ese momento, vivió como un filósofo independiente, sin trabajo fijo ni casa propia. Pasaba los inviernos en el norte de Italia y los veranos en Suiza, siempre buscando un clima que mejorara su salud.',
                      'A pesar de todo esto, fue durante estos años de enfermedad y soledad cuando Nietzsche escribió sus obras más importantes y originales. Escribía con una energía y una concentración extraordinarias, como si supiera que el tiempo se acababa. Entre 1883 y 1885 escribió su obra más poética y conocida, Así habló Zaratustra, un libro escrito en forma de parábolas y discursos del profeta Zaratustra, que transmite sus ideas sobre el superhombre, la voluntad de poder y el eterno retorno.',
                      'En enero de 1889, en Turín, Nietzsche sufrió un colapso mental del que nunca se recuperó. Según la historia más conocida, vio cómo un cochero golpeaba a un caballo en la calle, y se lanzó a abrazar al animal llorando. Después de ese momento, perdió la razón completamente. Los médicos diagnosticaron una enfermedad mental grave, aunque los historiadores todavía discuten cuál fue exactamente la causa. Algunas teorías hablan de sífilis, otras de una enfermedad genética, otras de los efectos de los medicamentos que tomaba.',
                      'Durante los once años siguientes, Nietzsche vivió sin consciencia de lo que había sido. Primero estuvo en una clínica psiquiátrica, y después su madre y, tras la muerte de esta, su hermana Elisabeth lo cuidaron. Murió el 25 de agosto de 1900 en Weimar, Alemania. Tenía cincuenta y cinco años.',
                    ],
                    vocab: 'colapso mental · se recuperó · parábolas · cochero · clínica psiquiátrica · a pesar de',
                  },
                  {
                    level: 'B1',
                    heading: 'Su legado',
                    paragraphs: [
                      'Después de su muerte, la influencia de Nietzsche fue enorme, pero también estuvo llena de malentendidos y abusos. Su hermana Elisabeth, que era nacionalista y antisemita, tomó control de sus manuscritos y los editó de manera deshonesta para hacer creer que Nietzsche apoyaba las ideas nacionalistas alemanas. Esta manipulación fue una tragedia intelectual, porque Nietzsche en sus textos originales criticaba duramente el nacionalismo, el antisemitismo y el racismo.',
                      'Más tarde, el régimen nazi usó algunas frases de Nietzsche de manera selectiva y fuera de contexto para justificar su ideología. Esto dañó mucho la reputación del filósofo durante décadas. Sin embargo, con el tiempo, los historiadores y filósofos recuperaron la obra real de Nietzsche y demostraron que sus ideas no tenían nada que ver con el nazismo.',
                      'Hoy en día, Nietzsche es considerado uno de los filósofos más importantes e influyentes de la historia occidental. Sus ideas han afectado profundamente a la filosofía, la literatura, la psicología y el arte del siglo XX. En filosofía, pensadores como Martin Heidegger, Michel Foucault, Gilles Deleuze y Jacques Derrida trabajaron con sus ideas y las desarrollaron de maneras nuevas. En literatura, escritores como André Gide, Hermann Hesse, Thomas Mann y Albert Camus fueron profundamente influenciados por su visión del mundo.',
                      'Hoy en día, Nietzsche sigue siendo muy leído, no solo en las universidades sino también por personas jóvenes que buscan una manera de pensar más libre e independiente. Sus preguntas siguen siendo relevantes: ¿Cómo vivir una vida con sentido sin religión? ¿Cómo crear valores propios en un mundo que ha perdido las certezas del pasado? ¿Cómo decir "sí" a la vida incluso cuando es difícil y dolorosa? No hay respuestas fáciles, pero el valor de Nietzsche fue atreverse a hacer estas preguntas con total honestidad y sin miedo.',
                    ],
                    vocab: 'malentendidos · manuscritos · autosuperación · certezas · atreverse',
                  },
                ],
              },
              // KAFKA
              {
                title: 'Franz Kafka',
                subtitle: 'El escritor del laberinto',
                dates: '1883 — 1924',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Praga y los orígenes',
                    paragraphs: [
                      'Franz Kafka nació el 3 de julio de 1883 en Praga, una ciudad que en esa época formaba parte del Imperio Austrohúngaro y que hoy es la capital de la República Checa. Praga era una ciudad compleja y llena de tensiones: convivían diferentes culturas, lenguas y religiones. Había checos, alemanes, judíos y otros grupos que muchas veces no se entendían bien entre sí.',
                      'Kafka creció en el seno de una familia judía de clase media. Su lengua materna era el alemán. Esta situación de estar entre culturas diferentes, de no pertenecer completamente a ningún grupo, marcó profundamente su personalidad y su escritura. La Praga de Kafka era una ciudad oscura y hermosa al mismo tiempo, con callejones estrechos, edificios antiguos y una historia llena de misterio.',
                    ],
                    vocab: 'Imperio Austrohúngaro · convivían · seno de una familia · pertenecer · callejones estrechos · opresivo',
                  },
                  {
                    level: 'B1',
                    heading: 'La familia y el padre',
                    paragraphs: [
                      'Para entender a Kafka, es necesario hablar de su padre, Hermann Kafka. Era un hombre físicamente grande, fuerte, enérgico y dominante. Franz, en cambio, era delgado, sensible, introvertido y lleno de dudas. Desde pequeño, sintió que no podía satisfacer las expectativas de su padre.',
                      'En 1919, Kafka escribió un texto muy largo y famoso conocido como la Carta al padre. En este texto, que nunca llegó a entregar, Kafka describía cómo se había sentido durante toda su vida: aplastado por la personalidad de su padre, incapaz de sentirse digno de su amor, atrapado entre la admiración y el miedo. Especialmente con su hermana Ottla mantuvo una amistad profunda durante toda su vida.',
                    ],
                    vocab: 'dominante · inadecuación · aplastado · digno · entregar · cariñosa · cercana',
                  },
                  {
                    level: 'B1',
                    heading: 'Los estudios y el trabajo',
                    paragraphs: [
                      'Kafka estudió derecho en la Universidad Alemana de Praga. En la universidad conoció a Max Brod, que se convertiría en su mejor amigo y en la persona más importante de su vida literaria. Sin Max Brod, probablemente no existiría ninguna obra de Kafka.',
                      'Después de terminar el doctorado en derecho, Kafka trabajó en el Instituto de Seguros de Accidentes de Trabajadores de Praga. Era muy bueno en su trabajo y fue ascendido varias veces. Pero al mismo tiempo, odiaba la oficina con toda su alma. Vivía entre dos mundos: el mundo gris de la burocracia durante el día y el mundo extraño de su literatura durante la noche.',
                    ],
                    vocab: 'aplicado · bufete de abogados · burocrático · ascendido · superiores · le robaba',
                  },
                  {
                    level: 'B1',
                    heading: 'Sus obras principales',
                    paragraphs: [
                      'Kafka publicó muy poco durante su vida. Sus tres novelas más importantes quedaron sin terminar y sin publicar cuando murió. El proceso es la historia de Josef K., un hombre acusado de un crimen que nunca se explica. El sistema judicial es completamente absurdo e incomprensible. Al final, Josef K. es ejecutado sin haber entendido nada.',
                      'En El castillo, el protagonista K. intenta durante toda la novela llegar al castillo o hablar con sus autoridades, pero siempre encuentra obstáculos. La novela no tiene final porque Kafka murió antes de terminarla. Su cuento más famoso, La metamorfosis (1915), comienza con Gregor Samsa despertándose convertido en un insecto gigante. La historia explora con una mezcla de humor negro y horror la reacción de su familia ante esta transformación.',
                    ],
                    vocab: 'perfeccionista · colonia penitenciaria · acusado · tribunales · agrimensor · obstáculos · metamorfosis',
                  },
                  {
                    level: 'B1',
                    heading: 'El mundo kafkiano y el legado',
                    paragraphs: [
                      'El adjetivo "kafkiano" existe hoy en muchos idiomas del mundo. Cuando decimos que una situación es "kafkiana", queremos decir que es absurda, burocrática, imposible de resolver. Kafka describe situaciones completamente absurdas con un lenguaje muy preciso y neutro, como si fueran situaciones normales. Este contraste crea una sensación perturbadora y a veces casi cómica.',
                      'Antes de morir, Kafka le pidió a su amigo Max Brod que destruyera todos sus manuscritos no publicados. Max Brod prometió hacerlo, pero no cumplió su promesa. Gracias a esa decisión, hoy podemos leer El proceso, El castillo y todas las demás obras de Kafka. Cuando Kafka murió en 1924, era prácticamente desconocido. Pero en las décadas siguientes su fama creció de manera extraordinaria.',
                    ],
                    vocab: 'kafkiano · impotencia · sobrio · perturbadora · individuo frente a · todopoderoso · vigilancia · grandeza',
                  },
                ],
              },
              // DESCARTES
              {
                title: 'René Descartes',
                subtitle: 'El padre de la filosofía moderna',
                dates: '1596 — 1650',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Los orígenes y la educación jesuita',
                    paragraphs: [
                      'René Descartes nació el 31 de marzo de 1596 en La Haye en Touraine, un pequeño pueblo del centro de Francia. Su madre murió de tuberculosis cuando René tenía solo catorce meses. El bebé heredó una tos crónica y una salud tan frágil que los médicos pensaban que tampoco él viviría mucho tiempo.',
                      'En 1607 fue enviado al colegio La Flèche, uno de los mejores centros educativos de Francia, dirigido por los jesuitas. Aunque la educación era excelente, Descartes llegó a una conclusión sorprendente al terminar: casi todo lo que había aprendido era incierto. Solo las matemáticas le parecían completamente seguras. Esta experiencia plantó en él una pregunta que lo acompañaría toda su vida: ¿es posible construir un conocimiento tan sólido como las matemáticas, pero aplicado a la filosofía?',
                    ],
                    vocab: 'nobleza · tuberculosis · heredó · tos crónica · fragilidad · enfermizo · jesuitas · incierto',
                  },
                  {
                    level: 'B1',
                    heading: 'El soldado, los sueños y los Países Bajos',
                    paragraphs: [
                      'Después de sus estudios, Descartes se alistó como soldado voluntario, no por vocación militar sino para ver el mundo. La noche más importante de su vida ocurrió el 10 de noviembre de 1619 en Ulm, Alemania. Tuvo tres sueños que él mismo describió como una experiencia casi mística. Al despertar, estaba convencido de haber descubierto los fundamentos de una nueva ciencia universal.',
                      'En 1628, Descartes se instaló en los Países Bajos, donde vivió durante veinte años. Eligió este país por su tolerancia intelectual. En 1635 tuvo una hija llamada Francine, quien murió de escarlatina a los cinco años. Fue el dolor más grande de su vida. Fue también en los Países Bajos donde publicó sus obras más importantes: el Discurso del método (1637) y las Meditaciones metafísicas (1641).',
                    ],
                    vocab: 'alistarse · vocación · peculiar · reforzó · estufa · mística · peregrinación · escarlatina',
                  },
                  {
                    level: 'B1',
                    heading: 'La duda metódica y el Cogito',
                    paragraphs: [
                      'El punto de partida de la filosofía de Descartes es poner en duda todo lo que uno cree saber, de manera sistemática, hasta encontrar algo absolutamente imposible de dudar. Dudó de los sentidos porque nos engañan. Dudó de si la vida entera es un sueño. Llegó a su duda más extrema: la hipótesis del "genio maligno", un ser poderoso que nos engaña constantemente.',
                      'Después de dudar de absolutamente todo, Descartes encontró algo imposible de negar: el hecho de que estaba dudando. Y si estaba dudando, estaba pensando. Y si estaba pensando, tenía que existir. Esta es la famosa conclusión: cogito ergo sum — "pienso, luego existo". Con ella encontró el punto absolutamente indudable sobre el que construir todo el conocimiento.',
                    ],
                    vocab: 'duda metódica · certeza · engañan · ilusión · hipótesis · genio maligno · escepticismo · fundamento · cogito',
                  },
                  {
                    level: 'B1',
                    heading: 'La mente, el cuerpo y el legado',
                    paragraphs: [
                      'Para Descartes, el ser humano está compuesto por dos sustancias completamente diferentes: la mente, que piensa pero no ocupa espacio, y el cuerpo, que ocupa espacio pero no piensa. Esta división se llama "dualismo cartesiano". Creó un problema enorme: si son tan diferentes, ¿cómo se comunican? Descartes propuso que se comunican a través de la glándula pineal, solución que hoy sabemos incorrecta, aunque el problema sigue siendo uno de los más difíciles de la filosofía.',
                      'En matemáticas, Descartes inventó la geometría analítica: el sistema de coordenadas que usamos hoy en cualquier gráfico. En 1649 viajó a Suecia para dar clases a la reina Cristina, quien insistía en recibirlas a las cinco de la mañana. Aquel invierno Descartes contrajo una neumonía y murió el 11 de febrero de 1650. La influencia de Descartes fue tan grande que muchos dividen la historia de la filosofía en antes y después de él.',
                    ],
                    vocab: 'dualismo · glándula pineal · mecanicista · invocar · biología · geometría analítica · neumonía · racionalismo',
                  },
                ],
              },
              // SPINOZA
              {
                title: 'Baruch Spinoza',
                subtitle: 'El filósofo de Dios y la naturaleza',
                dates: '1632 — 1677',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Ámsterdam, los orígenes y el gran exilio',
                    paragraphs: [
                      'Baruch Spinoza nació el 24 de noviembre de 1632 en Ámsterdam. En el siglo XVII, Ámsterdam era una de las ciudades más ricas y cosmopolitas de Europa. La familia de Spinoza era judía de origen sefardí: sus antepasados habían vivido en la península ibérica hasta que fueron expulsados y emigraron buscando tolerancia. Spinoza recibió una educación religiosa muy sólida y sus profesores veían en él a un futuro gran rabino.',
                      'El 27 de julio de 1656, cuando Spinoza tenía veintitrés años, la comunidad judía lo expulsó con el castigo más severo de la ley judía: el cherem, una excomunión total. El documento usa un lenguaje extraordinariamente duro, aunque nunca especifica qué había dicho exactamente. Spinoza aceptó su expulsión con calma y continuó su camino filosófico de manera completamente independiente.',
                    ],
                    vocab: 'cosmopolitas · sefardí · antepasados · expulsaron · sinagoga · herejías · excomunión · restricciones',
                  },
                  {
                    level: 'B1',
                    heading: 'La vida del pulidor de lentes y Dios-naturaleza',
                    paragraphs: [
                      'Para ganarse la vida, Spinoza aprendió el oficio de pulidor de lentes ópticas. Vivía de manera muy sencilla, rechazando toda ayuda económica para mantener su independencia intelectual. Rechazó una pensión del gobierno de Francia y una cátedra en la Universidad de Heidelberg. Prefería la pobreza a cualquier forma de dependencia intelectual.',
                      'La idea más radical de Spinoza es su concepto de Dios. Para él, Dios y la naturaleza son la misma cosa, expresado con la fórmula latina Deus sive Natura. Todo lo que existe es simplemente una expresión de esa única sustancia divina. Este panteísmo fue considerado ateísmo por las autoridades religiosas de su tiempo. Para Spinoza, además, no existe el libre albedrío ni en Dios ni en los seres humanos: todo sucede de manera necesaria según leyes eternas.',
                    ],
                    vocab: 'pulidor de lentes · artesanal · hábil · cátedra · dependencia · panteísmo · Deus sive Natura · libre albedrío',
                  },
                  {
                    level: 'B1',
                    heading: 'La libertad, la política y la Ética',
                    paragraphs: [
                      'Para Spinoza, somos esclavos cuando actuamos guiados por emociones sin entenderlas. La verdadera libertad consiste en entender las causas de lo que sentimos. Cuando comprendemos nuestras emociones, estas pierden su poder sobre nosotros. Analizó con gran precisión emociones como el amor, el odio, la esperanza y el miedo, anticipando en muchos aspectos la psicología moderna.',
                      'En 1670 publicó el Tratado teológico-político, en el que argumentó que la Biblia debe interpretarse como cualquier otro texto histórico y defendió con fuerza la libertad de pensamiento y expresión. Su obra más importante, la Ética, la trabajó durante toda su vida adulta y fue publicada por sus amigos después de su muerte en 1677. Está escrita siguiendo el método geométrico: definiciones, axiomas y demostraciones, como Euclides. Spinoza murió ese mismo año a los cuarenta y cuatro años, probablemente a causa de la tuberculosis.',
                    ],
                    vocab: 'esclavos · pasiones · marionetas · comprendemos · al alcance de · axiomas · sabiduría · serenidad',
                  },
                ],
              },
              // KANT
              {
                title: 'Immanuel Kant',
                subtitle: 'El filósofo de la razón pura',
                dates: '1724 — 1804',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Königsberg y el profesor de rutinas exactas',
                    paragraphs: [
                      'Immanuel Kant nació el 22 de abril de 1724 en Königsberg, una ciudad de Prusia Oriental. Kant no solo nació allí, sino que pasó prácticamente toda su vida en esa ciudad. Nunca viajó lejos de ella. Y sin embargo, desde ese rincón del mundo, produjo una de las filosofías más influyentes de la historia humana.',
                      'Como profesor, su vida siguió una rutina tan precisa que se convirtió en leyenda. Se levantaba a las cinco de la mañana. Daba un paseo diario por los mismos caminos, siempre a la misma hora. Los habitantes de Königsberg decían que podían poner en hora sus relojes cuando veían pasar a Kant. Solo en dos ocasiones conocidas se retrasó: cuando leyó el Emilio de Rousseau y cuando recibió la noticia de la Revolución Francesa.',
                    ],
                    vocab: 'rincón · artesano · pietismo · sencillez · huella · rutina · precisa · retrasó · apasionante',
                  },
                  {
                    level: 'B1',
                    heading: 'El sueño dogmático y la Crítica de la razón pura',
                    paragraphs: [
                      'Durante sus primeros años, Kant trabajó dentro del racionalismo de Leibniz y Wolff. Pero al descubrir la filosofía de David Hume, todo cambió. Hume argumentaba que la razón sola no puede demostrarnos cosas como la causalidad. Estas afirmaciones sacudieron profundamente a Kant. En una frase famosa, dijo que Hume lo despertó de su "sueño dogmático".',
                      'En 1781, con cincuenta y siete años, publicó la Crítica de la razón pura. Su argumento central es una revolución: no es nuestra mente la que se adapta a la realidad, sino la realidad que conocemos la que está organizada por nuestra mente. Kant llamó a esto la "revolución copernicana" de la filosofía. Una consecuencia es que nunca podemos conocer las cosas tal como son en sí mismas, solo los fenómenos tal como aparecen ante nuestra mente.',
                    ],
                    vocab: 'racionalismo · causalidad · sacudieron · empirismo · superar · revolución copernicana · noúmeno · fenómenos',
                  },
                  {
                    level: 'B1',
                    heading: 'La moral, la paz y el legado',
                    paragraphs: [
                      'Para Kant, la moral no depende de las consecuencias ni de los sentimientos. Una acción es moralmente buena porque es lo que la razón nos exige. El principio central es el "imperativo categórico": actúa solo según una regla que puedas querer que sea ley universal para todos. También lo formuló así: trata siempre a las personas como fines en sí mismas, nunca solo como medios. Esta idea es la base filosófica del concepto moderno de dignidad humana.',
                      'En 1795 publicó La paz perpetua, en que argumentaba que es posible construir una paz duradera si los Estados se organizan como repúblicas y crean una federación de naciones que resuelvan sus conflictos mediante el diálogo. Muchos historiadores ven en este texto un antecedente directo de las Naciones Unidas. Kant murió el 12 de febrero de 1804. Sus últimas palabras fueron: "Es gut" — "Está bien".',
                    ],
                    vocab: 'imperativo categórico · ley universal · deber · dignidad · fines · medios · paz perpetua · federación',
                  },
                ],
              },
              // LOCKE
              {
                title: 'John Locke',
                subtitle: 'El padre del liberalismo político',
                dates: '1632 — 1704',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Los orígenes y el exilio en los Países Bajos',
                    paragraphs: [
                      'John Locke nació el 29 de agosto de 1632 en Wrington, un pequeño pueblo del suroeste de Inglaterra. Su padre era abogado que había luchado del lado del Parlamento durante la guerra civil inglesa. Esta experiencia inculcó en el joven John una desconfianza hacia el poder absoluto y una valoración de los derechos individuales.',
                      'En 1683, Locke huyó a los Países Bajos, el rincón más tolerante de Europa, donde vivió seis años en el exilio. Paradójicamente, fueron años muy productivos: fue allí donde terminó el Ensayo sobre el entendimiento humano y los Dos tratados sobre el gobierno civil. Cuando en 1688 se produjo la Gloriosa Revolución, Locke regresó a Inglaterra en el mismo barco que trajo a la nueva reina.',
                    ],
                    vocab: 'puritana · inculcó · desconfianza · guerra civil · exilio · paradójicamente · monarquía constitucional · consentimiento',
                  },
                  {
                    level: 'B1',
                    heading: 'La mente como página en blanco',
                    paragraphs: [
                      'La respuesta de Locke a la pregunta "¿de dónde viene nuestro conocimiento?" es radicalmente opuesta a los racionalistas. Para él, la mente humana en el momento del nacimiento es como una página en blanco, una tabula rasa completamente vacía. Todo lo que la mente llega a conocer viene de la experiencia: por un lado, la sensación a través de los cinco sentidos; por otro, la reflexión, la capacidad de observar las propias operaciones de la mente.',
                      'Locke también distinguió entre cualidades primarias (tamaño, forma, movimiento — propiedades reales del objeto) y cualidades secundarias (color, sabor, olor — que dependen de la interacción con nuestros sentidos). Esta distinción sugiere que la ciencia matemática nos da un conocimiento más objetivo que la experiencia sensorial cotidiana.',
                    ],
                    vocab: 'tabula rasa · sensación · reflexión · saboreamos · abstrayendo · empirismo · epistemología · cualidades primarias',
                  },
                  {
                    level: 'B1',
                    heading: 'El gobierno, los derechos y el legado',
                    paragraphs: [
                      'Para Locke, incluso sin gobierno, los seres humanos tienen derechos naturales que nadie puede quitarles: el derecho a la vida, la libertad y la propiedad. Estos derechos son inalienables. El gobierno existe para protegerlos. Si no lo hace, los ciudadanos tienen el derecho de resistirse y cambiarlo. Esta idea era extremadamente radical en el siglo XVII.',
                      'Thomas Jefferson, al redactar la Declaración de Independencia de los Estados Unidos en 1776, se inspiró directamente en Locke. La frase sobre el derecho a la "vida, la libertad y la búsqueda de la felicidad" es una adaptación de la triada lockiana. Locke también defendió la tolerancia religiosa y escribió influyentes ideas sobre educación, proponiendo el aprendizaje activo sobre la memorización mecánica.',
                    ],
                    vocab: 'inalienables · estado de naturaleza · contrato social · tiranía · poder legislativo · poder ejecutivo · tolerancia · tabula rasa',
                  },
                ],
              },
              // HUME
              {
                title: 'David Hume',
                subtitle: 'El gran escéptico de la Ilustración',
                dates: '1711 — 1776',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Edimburgo y el joven filósofo',
                    paragraphs: [
                      'David Hume nació el 7 de mayo de 1711 en Edimburgo, la capital de Escocia. Su padre murió cuando David tenía apenas dos años. La Escocia del siglo XVIII vivía lo que los historiadores llaman la "Ilustración escocesa", un período extraordinario de producción intelectual. Adam Smith, el padre de la economía moderna, era amigo cercano de Hume.',
                      'Hume abandonó la universidad sin terminar sus estudios formales y decidió educarse a sí mismo. A los dieciocho años tuvo una crisis intelectual intensa: se obsesionó con los grandes problemas filosóficos con tal concentración que su salud se resintió. Para recuperarse, fue brevemente a trabajar como empleado de un comerciante en Bristol, fracaso total. Después tomó la decisión más importante de su vida: se fue a Francia para escribir el libro de filosofía que llevaba años planeando.',
                    ],
                    vocab: 'Ilustración escocesa · efervescente · despierto · melancólico · agotamiento nervioso · fracaso · ambiciosa',
                  },
                  {
                    level: 'B1',
                    heading: 'Las impresiones, las ideas y la causalidad',
                    paragraphs: [
                      'Hume distinguió entre dos tipos de contenido mental. Las "impresiones": experiencias directas e inmediatas cuando vemos, oímos o sentimos. Y las "ideas": copias más débiles que la mente conserva después. Para Hume, toda idea genuina debe poder rastrearse hasta una impresión original. Si alguien usa una palabra sin poder señalar ninguna impresión que la origine, esa palabra es un sonido vacío.',
                      'La idea más famosa de Hume es su análisis de la causalidad. Cuando observamos que el fuego produce calor, ¿qué vemos exactamente? Vemos el fuego, vemos el calor, vemos que van juntos. Pero la supuesta "conexión necesaria" entre causa y efecto nunca la vemos directamente. Lo único que observamos es que en nuestra experiencia pasada ciertos eventos han ido seguidos de otros. Lo que llamamos ley natural es en realidad hábito y expectativa, no necesidad lógica demostrable.',
                    ],
                    vocab: 'impresiones · ideas · rastrearse · señalar · causalidad · causa y efecto · hábito · expectativa · perturbadora',
                  },
                  {
                    level: 'B1',
                    heading: 'El yo, la religión, la moral y el legado',
                    paragraphs: [
                      'Cuando Hume buscó en su propia mente el "yo" permanente, no lo encontró. Solo halló una serie de percepciones que se suceden rápidamente: sensaciones, recuerdos, pensamientos. Concluyó que el "yo" es un "haz de percepciones", una ficción útil construida por el hábito, no una entidad real. Sus ideas sobre la religión fueron las más polémicas: argumentó que nunca estamos justificados para creer en un milagro y que los argumentos tradicionales para demostrar la existencia de Dios son débiles.',
                      'Para la moral, Hume rechazó la idea de que la razón nos dice qué es correcto. Lo que produce nuestros juicios morales son los sentimientos. Resumió esto con la frase: "La razón es, y solo debe ser, la esclava de las pasiones." Hume murió el 25 de agosto de 1776, el mismo año de La riqueza de las naciones de Adam Smith y de la Declaración de Independencia. Afrontó la muerte con una serenidad que asombró a todos.',
                    ],
                    vocab: 'haz de percepciones · identidad personal · milagro · violación · juicios morales · esclava · pasiones · ecuanimidad · serenidad',
                  },
                ],
              },
              // DOSTOIEVSKI
              {
                title: 'Fiódor Dostoievski',
                subtitle: 'El novelista del alma humana',
                dates: '1821 — 1881',
                levels: [
                  {
                    level: 'B1',
                    heading: 'Infancia, primeros éxitos y Siberia',
                    paragraphs: [
                      'Fiódor Dostoievski nació el 11 de noviembre de 1821 en Moscú. Su padre era médico en un hospital para personas pobres. Desde niño, Dostoievski veía cada día a los enfermos y a los pobres. Esta experiencia temprana del sufrimiento humano influyó profundamente en los temas que exploraría en sus novelas.',
                      'En 1845 publicó su primera novela, Pobres gentes, y el famoso crítico Belinski declaró que había nacido un nuevo gran escritor ruso. Sin embargo, en 1849 fue arrestado por participar en círculos políticos prohibidos. El 22 de diciembre de ese año fue llevado a una plaza para ser ejecutado. En el último momento llegó un mensajero con un cambio de condena: cuatro años de trabajos forzados en Siberia. Esta experiencia de esperar la muerte durante varios minutos marcó a Dostoievski de manera irreversible.',
                    ],
                    vocab: 'autoritario · pérdida · influyó · academia militar · epistolar · condenado a muerte · trabajos forzados · agotador',
                  },
                  {
                    level: 'B1',
                    heading: 'Las deudas, el juego y las grandes novelas',
                    paragraphs: [
                      'Uno de los aspectos más dramáticos de la vida de Dostoievski fue su adicción al juego. Jugaba compulsivamente en los casinos de Europa, perdía todo su dinero, pedía préstamos y prometía no volver a jugar. En 1866, en una situación desesperada, contrató a una taquígrafa llamada Anna para dictarle una novela en menos de un mes. Los dos se enamoraron y se casaron. Anna fue la gran estabilizadora de su vida y gracias a ella Dostoievski superó la adicción.',
                      'Sus cuatro grandes novelas maestras fueron escritas entre 1866 y 1880. Crimen y castigo explora la culpa de un estudiante que asesina a una anciana creyendo ser un ser superior. El idiota presenta a un Cristo moderno en el mundo real, con resultado trágico. Los demonios analiza los movimientos nihilistas con mirada crítica. Los hermanos Karamázov, su obra maestra, explora la fe, la duda, la libertad y la culpa colectiva. El capítulo de "El gran inquisidor" es uno de los textos más comentados de la literatura mundial.',
                    ],
                    vocab: 'adicción · ruleta · préstamos · deudas · taquígrafa · usurera · aplastante · redención · nihilistas · obra maestra',
                  },
                  {
                    level: 'B1',
                    heading: 'Sus ideas y el legado',
                    paragraphs: [
                      'Dostoievski creía que el sufrimiento no es simplemente algo malo que hay que evitar, sino una experiencia que puede purificar el alma. Sus novelas están llenas de personajes que sufren enormemente, pero que a través de ese sufrimiento encuentran un camino hacia la redención y el amor. Al mismo tiempo, era muy consciente de la dificultad de la fe en el mundo moderno. Sus personajes más inteligentes plantean los argumentos más poderosos contra Dios.',
                      'Dostoievski murió el 28 de enero de 1881. Su funeral fue multitudinario: miles de personas salieron a las calles de San Petersburgo para despedirlo. Hoy es considerado, junto a Tolstói, el más grande novelista ruso de todos los tiempos. Ningún otro escritor ha explorado con tanta profundidad los rincones más oscuros del alma humana. Sus personajes mienten, sufren, dudan y buscan desesperadamente el amor y la redención. En ellos reconocemos algo de nosotros mismos.',
                    ],
                    vocab: 'ortodoxo · purificar · redención · plantea argumentos · sagrado · colectiva · profundidad · rincones · familiares',
                  },
                ],
              },
            ],
          },
          {
            type: 'takeaway',
            text: 'Philosophy is a conversation across centuries. These two men argued across a single lifetime — Schopenhauer shaped Nietzsche, and Nietzsche spent years both worshipping and escaping him. Reading them in Spanish adds a third layer: you are not just following their ideas, you are training your mind to do it in another language.',
          },
        ],
      },
      {
        id: 'poemas',
        level: 'B2',
        title: 'Poemas',
        subtitle: 'Pablo Neruda — dos poemas de amor',
        intro: 'Poetry is the hardest Spanish you will read — and the most rewarding. A poem compresses into ten lines what a novel takes three hundred pages to say. Read each poem twice: once for sound, once for meaning. The paraphrase below follows the original structure stanza by stanza. The English sits beside it. Read them together, then cover the English and read the Spanish again.',
        blocks: [
          {
            type: 'foldable-poems',
            poems: [
              {
                title: 'Te Amo',
                attribution: 'Atribuido a Pablo Neruda',
                level: 'B1',
                opening: '«Te amo de una manera inexplicable, de una forma inconfesable.»',
                note: 'Este poema es un catálogo de contradicciones. El hablante no puede explicar su amor — y esa imposibilidad de explicarlo es precisamente lo que lo hace real. Cada estrofa añade una nueva capa de honestidad.',
                stanzas: [
                  {
                    es: 'Te amo de un modo que no tiene nombre, de una forma que no se puede confesar, de manera contradictoria. Te amo con todos mis estados de ánimo — que son muchos y cambian sin aviso — porque ya conoces lo inevitable: el tiempo, la vida, la muerte.',
                    en: 'I love you in a way that has no name, in a form that cannot be confessed, in a contradictory manner. I love you with all my moods — which are many and shift without warning — because you already know the inevitable: time, life, death.',
                  },
                  {
                    es: 'Te amo con el mundo que no entiendo, con la gente que no me comprende, con la ambivalencia de mi alma, con la incoherencia de mis actos, con la fatalidad del destino y la ambigüedad de todo lo que hacemos.',
                    en: 'I love you with the world I do not understand, with the people who do not understand me, with the ambivalence of my soul, with the incoherence of my actions, with the fatality of destiny and the ambiguity of everything we do.',
                  },
                  {
                    es: 'Incluso cuando te digo que no te amo, te amo. Incluso cuando te engaño, no te estoy engañando — en el fondo estoy trazando un plan para amarte mejor.',
                    en: 'Even when I tell you I do not love you, I love you. Even when I deceive you, I am not truly deceiving you — deep down I am drawing up a plan to love you better.',
                  },
                  {
                    es: 'Te amo sin reflexionar, inconscientemente, de manera irresponsable, involuntaria, por instinto, por impulso, de forma irracional. No tengo ningún argumento lógico — ni siquiera improvisado — para justificar este amor que surgió misteriosamente de la nada, que no ha resuelto mágicamente nada, y que sin embargo, de a poco, con poco y nada, ha mejorado lo peor de mí.',
                    en: 'I love you without thinking, unconsciously, irresponsibly, involuntarily, by instinct, by impulse, irrationally. I have no logical argument — not even an improvised one — to justify this love that arose mysteriously from nothing, that has resolved nothing by magic, and that nevertheless, little by little, with little and nothing, has improved the worst parts of me.',
                  },
                  {
                    es: 'Te amo con un cuerpo que no piensa, con un corazón que no razona, con una cabeza que no coordina. Te amo incomprensiblemente, sin preguntarme por qué, sin importarme por qué, sin cuestionarme por qué. Te amo sencillamente porque te amo. Yo mismo no sé por qué.',
                    en: 'I love you with a body that does not think, with a heart that does not reason, with a mind that does not coordinate. I love you incomprehensibly, without asking myself why, without caring why, without questioning why. I love you simply because I love you. I myself do not know why.',
                  },
                ],
                vocab: [
                  { es: 'inconfesable', en: 'unspeakable, too private to confess' },
                  { es: 'ambivalencia', en: 'ambivalence — feeling two opposite things at once' },
                  { es: 'incoherencia', en: 'incoherence, inconsistency' },
                  { es: 'fatalidad del destino', en: 'the fatality / inevitability of fate' },
                  { es: 'de a poco', en: 'little by little (Latin American Spanish)' },
                  { es: 'fundamentar', en: 'to ground, to justify, to give a foundation to' },
                  { es: 'surgió', en: 'it arose, it emerged (from surgir)' },
                ],
                learningNote: 'Notice how Neruda builds the poem through repetition and accumulation — "Te amo... Te amo... Te amo". This technique is called anáfora (anaphora). Each repetition adds a new layer, like painting the same subject from a slightly different angle each time. The final admission — "yo mismo no sé por qué te amo" — lands with weight precisely because it follows so many failed attempts to explain.',
              },
              {
                title: 'Poema 20',
                attribution: 'Pablo Neruda — de Veinte poemas de amor y una canción desesperada (1924)',
                level: 'B2',
                opening: '«Puedo escribir los versos más tristes esta noche.»',
                note: 'Este es quizás el poema de amor más famoso en lengua española. Fue escrito por Neruda a los diecinueve años. Su fuerza viene de su honestidad brutal: el hablante no sabe con certeza si todavía ama o no. Esa duda lo convierte en un poema de toda una vida, no solo de una noche.',
                stanzas: [
                  {
                    es: 'Puedo escribir esta noche los versos más tristes. Puedo escribir, por ejemplo, que la noche está llena de estrellas y que los astros tiemblan azules en la distancia. El viento gira en el cielo de la noche y canta. Y yo puedo escribir los versos más tristes esta noche.',
                    en: 'Tonight I can write the saddest lines. I can write, for example, that the night is starry, and that the stars, blue and shivering, tremble in the distance. The night wind revolves in the sky and sings. And I can write the saddest lines tonight.',
                  },
                  {
                    es: 'Yo la quise, y a veces ella también me quiso. En noches como esta la tuve entre mis brazos. La besé tantas veces bajo el cielo infinito. Ella me quiso, a veces yo también la quería. Cómo no haber amado sus grandes ojos quietos.',
                    en: 'I loved her, and sometimes she loved me too. Through nights like this one I held her in my arms. I kissed her again and again under the endless sky. She loved me, sometimes I loved her too. How could one not have loved her great still eyes.',
                  },
                  {
                    es: 'Puedo escribir los versos más tristes esta noche. Pensar que no la tengo. Sentir que la he perdido. Oír la noche, que sin ella es más inmensa todavía. Y el verso cae al alma como cae el rocío al pasto.',
                    en: 'Tonight I can write the saddest lines. To think that I do not have her. To feel that I have lost her. To hear the immense night, still more immense without her. And the verse falls to the soul like dew to the pasture.',
                  },
                  {
                    es: 'Qué importa que mi amor no pudiera guardarla. La noche está estrellada y ella no está conmigo. Eso es todo. A lo lejos alguien canta. Mi alma no puede resignarse a haberla perdido. Mi mirada la busca para acercarla. Mi corazón la busca. Pero ella no está conmigo.',
                    en: 'What does it matter that my love could not keep her. The night is starry, and she is not with me. That is all. In the distance someone is singing. My soul is not resigned to having lost her. My gaze seeks her to bring her closer. My heart looks for her. But she is not with me.',
                  },
                  {
                    es: 'La misma noche que blanquea los mismos árboles. Nosotros, los de entonces, ya no somos los mismos. Ya no la quiero, es cierto, pero cuánto la quise. Mi voz buscaba el viento para tocar su oído. De otro. Será de otro. Como antes fue de mis besos. Su voz, su cuerpo claro. Sus ojos infinitos.',
                    en: 'The same night whitening the same trees. We, of that time, are no longer the same. I no longer love her, that is certain, but how much I loved her. My voice tried to find the wind to touch her hearing. Another\'s. She will be another\'s. As she was before my kisses. Her voice, her bright body. Her infinite eyes.',
                  },
                  {
                    es: 'Ya no la quiero, es cierto, pero tal vez la quiero. Es tan corto el amor, y es tan largo el olvido. Porque en noches como ésta la tuve entre mis brazos, mi alma no puede resignarse a haberla perdido. Aunque éste sea el último dolor que ella me cause, y éstos sean los últimos versos que le escribo.',
                    en: 'I no longer love her, that\'s certain, but maybe I love her. Love is so short, forgetting is so long. Because through nights like this one I held her in my arms my soul is not satisfied that it has lost her. Though this be the last pain that she makes me suffer and these the last verses that I write for her.',
                  },
                ],
                vocab: [
                  { es: 'tiritan', en: 'they shiver / tremble (from tiritar — rare, poetic)' },
                  { es: 'astros', en: 'stars, heavenly bodies (more poetic than estrellas)' },
                  { es: 'el rocío', en: 'the dew' },
                  { es: 'el pasto', en: 'the grass, the pasture' },
                  { es: 'oído', en: 'hearing, ear (inner ear — more intimate than oreja)' },
                  { es: 'el olvido', en: 'forgetting, oblivion' },
                  { es: 'a lo lejos', en: 'in the distance, far away' },
                  { es: 'no se contenta', en: 'is not satisfied / cannot resign itself' },
                ],
                learningNote: 'The central tension of Poema 20 is in one line: "Ya no la quiero, es cierto, pero tal vez la quiero." — "I no longer love her, that is certain, but maybe I love her." Neruda contradicts himself in the same breath. The poem does not resolve this contradiction because the speaker cannot. This is why the poem remains alive after a century: it describes a feeling everyone recognizes but no one can name. Watch for the refrain "Puedo escribir los versos más tristes esta noche" — it appears three times. Like the night itself, it returns.',
              },
            ],
          },
          {
            type: 'takeaway',
            text: 'A poem is a question that refuses to answer itself. Read these again in a week and they will mean something different. That is not because the poem changed — it is because you did.',
          },
        ],
      },
      {
        id: 'canciones',
        level: 'A2-B1',
        title: 'Canciones',
        subtitle: 'Letras organizadas, traducidas y sin repeticiones',
        intro: 'This songbook sits under Lectura after the poems. Each song from Canciones.docx is organized into clear learning sections, with repeated chorus ideas condensed so you study the meaning once and move on.',
        blocks: [
          {
            type: 'foldable-songs',
            songs: CANCIONES_SONGS,
          },
          {
            type: 'takeaway',
            text: 'Songs are memory machines. Read one section, listen to it, repeat the vocabulary, then close the English and try to explain the song in your own Spanish.',
          },
        ],
      },
    ],
  },
  {
    id: 'palabras',
    label: 'Palabras',
    sublabel: '5000 palabras agrupadas',
    chapters: [
      {
        id: 'palabras-5000',
        level: 'A1-B2',
        alwaysVisible: true,
        title: 'Banco de Palabras',
        subtitle: 'Read, reveal, repeat',
        intro: 'The full vocabulary bank from your grouped document. The original three groups stay intact, and topic decks like Trabajo y Profesiones and Emociones y Sentimientos reuse the same entries without repeating words.',
        blocks: [
          {
            type: 'vocab-lab',
          },
        ],
      },
    ],
  },
  {
    id: 'frases',
    label: 'Frases',
    sublabel: 'Expresiones útiles',
    chapters: [
      {
        id: 'f1',
        level: 'A1',
        title: 'Saludos y Cortesía',
        subtitle: 'The first words you need',
        intro: 'These are the phrases that open every conversation. Learn them by ear, repeat them out loud, and use them at every chance.',
        blocks: [
          {
            type: 'phraselist',
            phrases: [
              { es: 'Hola, ¿qué tal?', en: 'Hi, how are you?' },
              { es: 'Buenos días.', en: 'Good morning.' },
              { es: 'Buenas tardes.', en: 'Good afternoon.' },
              { es: 'Buenas noches.', en: 'Good evening / good night.' },
              { es: 'Mucho gusto.', en: 'Pleased to meet you.' },
              { es: 'Encantado / encantada.', en: 'Delighted (to meet you).' },
              { es: '¿Cómo te llamas?', en: 'What is your name?' },
              { es: 'Me llamo Othman.', en: 'My name is Othman.' },
              { es: '¿De dónde eres?', en: 'Where are you from?' },
              { es: 'Soy de Marruecos.', en: 'I am from Morocco.' },
              { es: 'Por favor.', en: 'Please.' },
              { es: 'Gracias. — De nada.', en: 'Thank you. — You are welcome.' },
              { es: 'Perdón. / Disculpe.', en: 'Sorry. / Excuse me.' },
              { es: 'Hasta luego.', en: 'See you later.' },
              { es: 'Hasta mañana.', en: 'See you tomorrow.' },
            ],
          },
          {
            type: 'takeaway',
            text: 'These twenty phrases are the entry door. Repeat each one ten times before moving on. They will be the foundation of every spoken interaction.',
          },
        ],
      },
      {
        id: 'f2',
        level: 'B1',
        title: 'Expresar Opiniones',
        subtitle: 'Joining the conversation',
        intro: 'At B1, you stop reciting and start participating. These are the connectors that let you share an opinion, agree, disagree, and qualify your thoughts.',
        blocks: [
          {
            type: 'phraselist',
            phrases: [
              { es: 'Creo que...', en: 'I think that...' },
              { es: 'En mi opinión...', en: 'In my opinion...' },
              { es: 'Desde mi punto de vista...', en: 'From my point of view...' },
              { es: 'Estoy de acuerdo contigo.', en: 'I agree with you.' },
              { es: 'No estoy de acuerdo.', en: 'I disagree.' },
              { es: 'Por un lado... por otro lado...', en: 'On one hand... on the other hand...' },
              { es: 'Lo que pasa es que...', en: 'The thing is that...' },
              { es: 'A decir verdad...', en: 'To tell the truth...' },
              { es: 'Hasta cierto punto.', en: 'Up to a point.' },
              { es: 'No me parece bien.', en: 'It does not seem right to me.' },
              { es: 'Vale la pena.', en: 'It is worth it.' },
              { es: 'Sin lugar a dudas.', en: 'Without a doubt.' },
            ],
          },
          {
            type: 'tip',
            text: 'After "creo que" and "pienso que", use indicative. After "no creo que" and "no pienso que", switch to subjunctive. The negation flips the mood.',
          },
          {
            type: 'takeaway',
            text: 'Connectors are what make speech sound mature. Without them, you sound like a list of facts. With them, you sound like a person thinking aloud.',
          },
        ],
      },
    ],
  },
  {
    id: 'tips',
    label: 'Tips',
    sublabel: 'Estrategias',
    chapters: [
      {
        id: 't1',
        level: 'A2',
        title: 'Cómo Memorizar Verbos',
        subtitle: 'A practical method',
        intro: 'Verbs are the engine of Spanish. The conjugation tables can feel endless, but with the right method you can lock in a verb in three sittings.',
        blocks: [
          {
            type: 'steps',
            steps: [
              { title: 'Sesión 1 — el contorno', text: 'Say all six forms aloud, in order: yo, tú, él, nosotros, vosotros, ellos. Do this five times. Do not write anything yet. Your ear is the first memory.' },
              { title: 'Sesión 2 — el ejemplo', text: 'Build one short sentence for each form. "Yo hablo con mi padre. Tú hablas mucho. Él habla rápido..." Now the verb has context.' },
              { title: 'Sesión 3 — la prueba', text: 'Twenty-four hours later, cover the table and recite from memory. Whatever you forgot, that is your weak form. Drill that one alone.' },
            ],
          },
          {
            type: 'takeaway',
            text: 'Spaced repetition beats cramming. Three short sessions across two days lock a verb in better than one long session. Trust the spacing — it works.',
          },
        ],
      },
      {
        id: 't2',
        level: 'B2',
        title: 'Pensar en Español',
        subtitle: 'Crossing the line into fluency',
        intro: 'At some point, translation has to stop. You cannot reach B2 fluency while running every sentence through Arabic or English first. Your brain needs new wiring.',
        blocks: [
          {
            type: 'steps',
            steps: [
              { title: 'Narra tu día', text: 'Spend five minutes a day describing what you are doing — silently, in Spanish. "Estoy preparando café. La taza es azul. Hace calor afuera." Boring on purpose.' },
              { title: 'Cambia tus consumos', text: 'Replace one daily input with Spanish: a podcast, a YouTube channel, a news site. Not all of them — just one. Consistency beats volume.' },
              { title: 'Lee en voz alta', text: 'Ten minutes a day reading Spanish out loud. The sound of your own voice in Spanish builds confidence faster than any silent practice.' },
              { title: 'Acepta los errores', text: 'You will make mistakes for years. So does every educated person in their second language. Speak through the discomfort.' },
            ],
          },
          {
            type: 'takeaway',
            text: 'Fluency is not perfection. It is the point at which Spanish stops being a translation and starts being its own voice in your head. That switch happens — but only with daily, low-stakes use.',
          },
        ],
      },
    ],
  },
  {
    id: 'resumen',
    label: 'Resumen',
    sublabel: 'Lo que te llevas',
    chapters: [
      {
        id: 'r1',
        level: 'B1',
        title: 'Lo Esencial',
        subtitle: 'A handful of rules that carry the rest',
        intro: 'If you only remember a few things from this book, remember these. They are the load-bearing walls of Spanish.',
        blocks: [
          {
            type: 'big-takeaways',
            items: [
              { n: '01', title: 'Ser para esencia, estar para estado.', text: 'Two verbs for "to be". Identity vs. condition. Get this one right and half your sentences sound natural.' },
              { n: '02', title: 'Aprende cada sustantivo con su artículo.', text: 'Never just "casa". Always "la casa". The article carries the gender, and the gender will haunt you if you skip it.' },
              { n: '03', title: 'El subjuntivo es el modo de lo no real.', text: 'Wishes, doubts, emotions, unrealized futures — they all take subjunctive. Listen for the triggers: que, ojalá, cuando, aunque.' },
              { n: '04', title: 'Por mira atrás, para mira adelante.', text: 'POR is the cause, the path. PARA is the goal, the recipient. One question — which direction is the sentence pointing? — solves most errors.' },
              { n: '05', title: 'Si + imperfecto subjuntivo, condicional.', text: 'The hypothetical pattern. Memorize the formula. It unlocks the conditional sentences that fluent speakers build constantly.' },
              { n: '06', title: 'Lee en voz alta, todos los días.', text: 'Ten minutes a day, out loud. No app, no flashcards. Just your voice and a Spanish text. This is the single highest-leverage habit.' },
            ],
          },
          {
            type: 'takeaway',
            text: 'Six rules. One habit. Everything else is detail. Come back to this page whenever you feel lost in the forest of grammar — these are the trees that hold the canopy.',
          },
        ],
      },
    ],
  },
];

// =============================================================
// FORM PARSER — turns "[hub]e" into [{text:'hub',irreg:true},{text:'e',irreg:false}]
// =============================================================
function parseForm(s) {
  const parts = [];
  let buf = '';
  let mode = 'normal'; // 'normal' | 'irreg' | 'ending'
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '[') {
      if (buf) parts.push({ text: buf, mode });
      buf = '';
      mode = 'irreg';
    } else if (c === ']') {
      if (buf) parts.push({ text: buf, mode: 'irreg' });
      buf = '';
      mode = 'normal';
    } else if (c === '{') {
      if (buf) parts.push({ text: buf, mode });
      buf = '';
      mode = 'ending';
    } else if (c === '}') {
      if (buf) parts.push({ text: buf, mode: 'ending' });
      buf = '';
      mode = 'normal';
    } else {
      buf += c;
    }
  }
  if (buf) parts.push({ text: buf, mode });
  return parts;
}

function RenderForm({ raw }) {
  return (
    <>
      {parseForm(raw).map((p, i) => {
        const cls = p.mode === 'irreg' ? 'irreg' : p.mode === 'ending' ? 'ending' : '';
        return <span key={i} className={cls}>{p.text}</span>;
      })}
    </>
  );
}

// Strip the [bracket] and {brace} markers used in verb tables before speaking
function stripMarkers(s) {
  return String(s || '').replace(/[\[\]{}]/g, '');
}

// =============================================================
// EXAMPLE PAIR — Spanish + translation
// Only renders inline ("Spanish. (Translation.)") when BOTH sides
// are short enough to fit on a single line of a 6-inch e-ink screen.
// On a 6-inch screen at 18-20px, a line holds ~35-40 chars.
// Combined "Spanish (Translation)" must fit comfortably under that.
// =============================================================
// =============================================================
// VERB PRACTICE — quiz mode for conjugations
// Picks N random forms across all tenses, hides them, asks the user to type each one
// Strips accents for forgiving matching, shows correct answer on miss
// =============================================================
function normalizeForCompare(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accents
    .replace(/[\[\]{}]/g, '')          // strip markers
    .replace(/[^a-z\sáéíóúñü]/g, '')   // keep letters
    .trim();
}

function VerbPractice({ tenses, verbName }) {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect' | null
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function buildQuiz() {
    // Flatten all forms across all tenses
    const all = [];
    for (const t of tenses) {
      for (const row of (t.forms || [])) {
        all.push({
          tense: t.name,
          pronoun: row.p,
          answer: stripMarkers(row.f),
        });
      }
    }
    // Shuffle and pick 8
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(8, shuffled.length));
  }

  function startQuiz() {
    setQuestions(buildQuiz());
    setCurrent(0);
    setInput('');
    setFeedback(null);
    setScore(0);
    setDone(false);
    setOpen(true);
  }

  function checkAnswer(e) {
    if (e) e.preventDefault();
    if (feedback) return; // already answered, ignore
    const q = questions[current];
    const correct = normalizeForCompare(input) === normalizeForCompare(q.answer);
    setFeedback(correct ? 'correct' : 'incorrect');
    if (correct) setScore(s => s + 1);
  }

  function nextQuestion() {
    if (current + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setCurrent(c => c + 1);
    setInput('');
    setFeedback(null);
  }

  function close() {
    window.speechSynthesis?.cancel();
    setOpen(false);
  }

  const q = questions[current];
  const total = questions.length;

  return (
    <>
      <button className="quiz-trigger-btn" onClick={startQuiz}>
        <Sparkles size={14} />
        Practicar
      </button>

      {open && (
        <div className="quiz-overlay" onClick={close}>
          <div className="quiz-modal" onClick={e => e.stopPropagation()}>
            <header className="quiz-header">
              <div>
                <div className="quiz-eyebrow">Practicar conjugación</div>
                <h2 className="quiz-title">{verbName}</h2>
              </div>
              <button className="quiz-close" onClick={close} aria-label="Close">
                <X size={18} />
              </button>
            </header>

            {!done ? (
              <>
                <div className="quiz-progress">
                  <div className="quiz-progress-text">
                    Pregunta {current + 1} de {total}
                  </div>
                  <div className="quiz-progress-bar">
                    <div
                      className="quiz-progress-fill"
                      style={{ width: `${((current) / total) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="quiz-question">
                  <div className="quiz-tense-label">{q.tense}</div>
                  <div className="quiz-prompt">
                    <span className="quiz-pronoun">{q.pronoun}</span>
                    <span className="quiz-blank">________</span>
                  </div>
                  <div className="quiz-instruction">
                    Conjuga el verbo <em>{verbName.toLowerCase()}</em> para esta persona.
                  </div>
                </div>

                <form onSubmit={checkAnswer} className="quiz-form">
                  <input
                    type="text"
                    className={`quiz-input ${feedback || ''}`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Escribe tu respuesta…"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    disabled={!!feedback}
                  />
                  {!feedback && (
                    <button type="submit" className="quiz-check-btn" disabled={!input.trim()}>
                      Comprobar
                    </button>
                  )}
                </form>

                {feedback && (
                  <div className={`quiz-feedback ${feedback}`}>
                    {feedback === 'correct' ? (
                      <>
                        <div className="quiz-feedback-icon"><Check size={18} /></div>
                        <div>
                          <div className="quiz-feedback-title">¡Correcto!</div>
                          <div className="quiz-feedback-answer">{q.answer}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="quiz-feedback-icon"><X size={18} /></div>
                        <div>
                          <div className="quiz-feedback-title">No es correcto</div>
                          <div className="quiz-feedback-answer">
                            La respuesta es: <strong>{q.answer}</strong>
                          </div>
                        </div>
                      </>
                    )}
                    <SpeakBtn text={q.answer} size="md" className="quiz-feedback-speak" />
                  </div>
                )}

                {feedback && (
                  <button className="quiz-next-btn" onClick={nextQuestion}>
                    {current + 1 >= total ? 'Ver resultados' : 'Siguiente'}
                    <ChevronRight size={16} />
                  </button>
                )}

                <div className="quiz-score-line">
                  Puntuación: <strong>{score}</strong> / {current + (feedback ? 1 : 0)}
                </div>
              </>
            ) : (
              <div className="quiz-results">
                <div className="quiz-results-circle">
                  <div className="quiz-results-pct">{Math.round((score / total) * 100)}%</div>
                  <div className="quiz-results-fraction">{score} / {total}</div>
                </div>
                <h3 className="quiz-results-title">
                  {score === total ? '¡Perfecto!' :
                    score >= total * 0.75 ? 'Muy bien' :
                    score >= total * 0.5 ? 'Sigue practicando' :
                    'Vamos a repasar'}
                </h3>
                <p className="quiz-results-msg">
                  {score === total
                    ? 'Conjugaste todas las formas correctamente. Estás listo para el siguiente verbo.'
                    : score >= total * 0.5
                    ? 'Buen progreso. Repite la práctica unas veces más para dominar las formas que fallaste.'
                    : 'Vuelve a leer la tabla, escucha cada forma en voz alta, y vuelve a la práctica en cinco minutos.'}
                </p>
                <div className="quiz-results-actions">
                  <button className="quiz-retry-btn" onClick={startQuiz}>
                    <RotateCcw size={14} />
                    Otra vez
                  </button>
                  <button className="quiz-done-btn" onClick={close}>
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// =============================================================
// SPEAK BUTTON — uses browser's built-in speechSynthesis
// Free, offline, no API. Picks the best Spanish voice available.
// =============================================================
let _spanishVoice = null;
let _voicesLoaded = false;
let _audioWarmedUp = false;

function loadVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices() || [];
}

function getSpanishVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  if (_spanishVoice) return _spanishVoice;
  const voices = loadVoices();
  if (voices.length === 0) return null;
  _voicesLoaded = true;
  // Prefer es-ES, then es-MX, then any Spanish
  const order = ['es-ES', 'es-MX', 'es-US', 'es-AR', 'es-CO', 'es-419', 'es'];
  for (const code of order) {
    const v = voices.find(x => x.lang && x.lang.toLowerCase().startsWith(code.toLowerCase()));
    if (v) { _spanishVoice = v; return v; }
  }
  // Last resort: any voice with "Spanish" or "español" in its name
  const v2 = voices.find(x => /spanish|español/i.test(x.name || ''));
  if (v2) { _spanishVoice = v2; return v2; }
  return null;
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  // Some browsers fire voiceschanged when voices arrive
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    _spanishVoice = null;
    getSpanishVoice();
  });
  // Try once on load, and again after a delay (mobile Safari & some Android)
  getSpanishVoice();
  setTimeout(getSpanishVoice, 250);
  setTimeout(getSpanishVoice, 1000);
}

// Mobile browsers (especially iOS Safari and Chrome Android) require the FIRST
// speechSynthesis call to happen during a user gesture. This warmup primes the
// audio engine inside the click handler with a silent utterance.
function warmupAudio() {
  if (_audioWarmedUp) return;
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    // Speak a single space at zero volume to unlock the audio engine.
    // Must happen synchronously inside the click handler.
    const primer = new SpeechSynthesisUtterance(' ');
    primer.volume = 0;
    primer.rate = 1;
    window.speechSynthesis.speak(primer);
    _audioWarmedUp = true;
  } catch (_) {}
}

function speak(text, opts = {}) {
  if (typeof window === 'undefined' || !window.speechSynthesis || !text) {
    if (opts.onerror) opts.onerror({ error: 'no-speechSynthesis' });
    return null;
  }
  try {
    window.speechSynthesis.cancel(); // stop anything currently playing
    const utt = new SpeechSynthesisUtterance(text);
    const v = getSpanishVoice();
    if (v) utt.voice = v;
    utt.lang = v?.lang || 'es-ES';
    utt.rate = opts.rate ?? 0.78;
    utt.pitch = opts.pitch ?? 1.0;
    utt.volume = 1.0;
    if (opts.onend) utt.onend = opts.onend;
    if (opts.onerror) utt.onerror = (e) => {
      console.warn('[speech] error:', e?.error || 'unknown', { text: text.slice(0, 30), voice: v?.name });
      opts.onerror(e);
    };
    if (opts.onboundary) utt.onboundary = opts.onboundary;
    if (opts.onstart) utt.onstart = opts.onstart;
    window.speechSynthesis.speak(utt);

    // Some Android browsers freeze the queue after a few seconds. The classic
    // workaround: pause/resume every 14 seconds keeps it alive.
    const keepalive = setInterval(() => {
      if (!window.speechSynthesis.speaking) { clearInterval(keepalive); return; }
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 14000);
    const origOnEnd = utt.onend;
    utt.onend = (e) => { clearInterval(keepalive); if (origOnEnd) origOnEnd(e); };

    return utt;
  } catch (e) {
    console.warn('[speech] threw:', e);
    if (opts.onerror) opts.onerror({ error: e.message });
    return null;
  }
}

// =============================================================
// KARAOKE TEXT — highlights each word as the audio reads it
// Uses speechSynthesis onboundary events. Falls back gracefully
// on browsers that don't fire word boundaries reliably.
// =============================================================
function KaraokeText({ text, paragraphClass = 'reading-paragraph', firstParagraph = false }) {
  // 1. Tokenize text — words separated from whitespace/punctuation
  const tokens = useMemo(() => {
    const result = [];
    let charPos = 0;
    const regex = /([a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)|([^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]+)/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      const isWord = !!m[1];
      result.push({ text: m[0], isWord, charStart: charPos });
      charPos += m[0].length;
    }
    return result;
  }, [text]);

  // 2. Group tokens into sentences (split on . ! ? ; :) for natural prosody
  //    Each sentence carries: spoken text, the words inside it (with commaAfter flag)
  const sentences = useMemo(() => {
    const result = [];
    let curSpoken = '';
    let curWords = [];
    let lastWordIdx = -1; // index in curWords of the last added word

    function flush() {
      if (curWords.length > 0) {
        result.push({ spokenText: curSpoken.trim(), words: curWords });
      }
      curSpoken = '';
      curWords = [];
      lastWordIdx = -1;
    }

    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];
      curSpoken += tok.text;
      if (tok.isWord) {
        curWords.push({ tokenIdx: i, text: tok.text, commaAfter: false });
        lastWordIdx = curWords.length - 1;
      } else {
        // Mark trailing comma on the previous word (for pause estimation)
        if (/,/.test(tok.text) && lastWordIdx >= 0) {
          curWords[lastWordIdx].commaAfter = true;
        }
        // Sentence-ending punctuation flushes the current sentence
        if (/[.!?;:]/.test(tok.text)) {
          flush();
        }
      }
    }
    flush();
    return result;
  }, [tokens]);

  const [activeWordIdx, setActiveWordIdx] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const wordRefs = React.useRef([]);
  const timersRef = React.useRef([]);
  const stopRef = React.useRef(false);

  // Calibrated speech rate — milliseconds per character.
  // Starts on the slow side (110 ms/char ≈ 9 chars/sec) so the first sentence's
  // highlights err BEHIND the voice rather than running ahead.
  // After each sentence, this gets calibrated from the actual measured duration.
  const msPerCharRef = React.useRef(110);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  function handlePlay(e) {
    e.stopPropagation();

    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('Tu navegador no soporta lectura en voz alta.');
      return;
    }
    // Critical for mobile: warm up audio engine synchronously inside the click
    warmupAudio();

    if (playing) {
      stopRef.current = true;
      window.speechSynthesis?.cancel();
      clearTimers();
      setPlaying(false);
      setActiveWordIdx(-1);
      return;
    }

    if (sentences.length === 0) return;

    window.speechSynthesis?.cancel();
    clearTimers();
    stopRef.current = false;
    setPlaying(true);
    msPerCharRef.current = 110; // reset calibration each play

    let sentenceIdx = 0;

    function speakSentence() {
      if (stopRef.current) return;
      if (sentenceIdx >= sentences.length) {
        setPlaying(false);
        setActiveWordIdx(-1);
        return;
      }

      const sentence = sentences[sentenceIdx];
      if (!sentence || sentence.words.length === 0) {
        sentenceIdx++;
        speakSentence();
        return;
      }

      // Pre-highlight first word so the user has instant visual feedback
      // even before the audio engine actually starts producing sound
      setActiveWordIdx(sentence.words[0].tokenIdx);

      const utt = new SpeechSynthesisUtterance(sentence.spokenText);
      const v = getSpanishVoice();
      if (v) utt.voice = v;
      utt.lang = v?.lang || 'es-ES';
      utt.rate = 0.85;
      utt.pitch = 1.0;

      let onstartFired = false;
      let onendHandled = false;
      let utteranceStartTime = 0;
      // Constants used in BOTH scheduling and calibration — they must match
      const INTER_WORD_MS = 30;
      const COMMA_PAUSE_MS = 200;

      function scheduleHighlights() {
        let elapsed = 0;
        for (let wi = 0; wi < sentence.words.length; wi++) {
          const word = sentence.words[wi];
          const myDelay = elapsed;
          const t = setTimeout(() => {
            if (!stopRef.current) setActiveWordIdx(word.tokenIdx);
          }, myDelay);
          timersRef.current.push(t);
          elapsed += word.text.length * msPerCharRef.current + INTER_WORD_MS;
          if (word.commaAfter) elapsed += COMMA_PAUSE_MS;
        }
      }

      utt.onstart = () => {
        if (onstartFired) return;
        onstartFired = true;
        utteranceStartTime = performance.now();
        scheduleHighlights();
      };

      // Fallback: if onstart never fires (some engines skip it), kick off after 500 ms
      const onstartFallback = setTimeout(() => {
        if (!onstartFired && !stopRef.current) {
          onstartFired = true;
          utteranceStartTime = performance.now();
          scheduleHighlights();
        }
      }, 500);
      timersRef.current.push(onstartFallback);

      function handleSentenceEnd() {
        if (onendHandled) return;
        onendHandled = true;
        if (stopRef.current) return;

        // Calibrate msPerChar from the actual measured duration of this sentence.
        // Strip out our estimated overhead (inter-word gaps + comma pauses) to get
        // pure speech time, then divide by total word characters.
        if (utteranceStartTime > 0) {
          const actualMs = performance.now() - utteranceStartTime;
          const totalWordChars = sentence.words.reduce((s, w) => s + w.text.length, 0);
          const commaCount = sentence.words.filter(w => w.commaAfter).length;
          const overheadMs = sentence.words.length * INTER_WORD_MS + commaCount * COMMA_PAUSE_MS;
          const speechMs = Math.max(100, actualMs - overheadMs);
          if (totalWordChars > 0) {
            const measured = speechMs / totalWordChars;
            // Sanity: ignore wildly improbable values (e.g., utterance was cancelled)
            if (measured >= 40 && measured <= 300) {
              // Light EMA smoothing — 60% new, 40% old — to absorb noise from short sentences
              msPerCharRef.current = measured * 0.6 + msPerCharRef.current * 0.4;
            }
          }
        }

        // Drop any unfired highlight timers for this sentence
        clearTimers();

        sentenceIdx++;
        // Tiny gap between sentences — the engine adds its own ~50–100ms gap too
        const gapTimer = setTimeout(speakSentence, 30);
        timersRef.current.push(gapTimer);
      }

      utt.onend = handleSentenceEnd;
      utt.onerror = handleSentenceEnd;

      // Hard safety: if onend never fires, force-advance after a generous bound
      const safetyMs = Math.max(5000, sentence.spokenText.length * 220);
      const safety = setTimeout(handleSentenceEnd, safetyMs);
      timersRef.current.push(safety);

      window.speechSynthesis.speak(utt);
    }

    speakSentence();
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRef.current = true;
      clearTimers();
      if (playing) window.speechSynthesis?.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll active word into view when it goes near the edge
  useEffect(() => {
    if (activeWordIdx < 0) return;
    const el = wordRefs.current[activeWordIdx];
    if (!el || typeof el.getBoundingClientRect !== 'function') return;
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom > viewportH - 100 || rect.top < 80) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeWordIdx]);

  if (typeof window !== 'undefined' && !window.speechSynthesis) {
    // Still render the paragraph with a button — but the button shows an alert when tapped
    return (
      <p className={paragraphClass}>
        <button
          className="speak-btn speak-btn-sm paragraph-speak"
          onClick={(e) => { e.stopPropagation(); alert('Tu navegador no soporta lectura en voz alta.'); }}
          aria-label="Audio not supported"
          title="Audio no disponible"
        >
          <Volume2 size={12} />
        </button>
        {text}
      </p>
    );
  }

  return (
    <p className={`${paragraphClass} karaoke-paragraph ${playing ? 'is-playing' : ''}`}>
      <button
        className={`speak-btn speak-btn-sm paragraph-speak ${playing ? 'playing' : ''}`}
        onClick={handlePlay}
        onPointerDown={e => e.stopPropagation()}
        aria-label={playing ? 'Stop' : 'Play audio with highlighting'}
        title={playing ? 'Detener' : 'Escuchar con resaltado'}
      >
        <Volume2 size={12} />
      </button>
      {tokens.map((tok, i) => {
        if (!tok.isWord) {
          return <span key={i} className="kt-space">{tok.text}</span>;
        }
        const isActive = i === activeWordIdx;
        return (
          <span
            key={i}
            ref={el => wordRefs.current[i] = el}
            className={`kt-word ${isActive ? 'kt-active' : ''}`}
          >
            {tok.text}
          </span>
        );
      })}
    </p>
  );
}

function SpeakBtn({ text, size = 'sm', className = '' }) {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('Tu navegador no soporta lectura en voz alta.');
      return;
    }
    // Critical for mobile: must call speechSynthesis synchronously inside the
    // click handler to unlock the audio engine. Warmup primes it.
    warmupAudio();
    if (playing) {
      window.speechSynthesis?.cancel();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(text, {
      onend: () => setPlaying(false),
      onerror: (e) => {
        setPlaying(false);
        if (e?.error && e.error !== 'canceled' && e.error !== 'interrupted') {
          alert('Error al leer: ' + e.error + '. Asegúrate de tener una voz en español instalada.');
        }
      },
    });
  }
  return (
    <button
      className={`speak-btn speak-btn-${size} ${playing ? 'playing' : ''} ${className}`}
      onClick={handleClick}
      onPointerDown={e => e.stopPropagation()}
      aria-label={playing ? 'Stop' : 'Play audio'}
      title={playing ? 'Detener' : 'Escuchar'}
    >
      <Volume2 size={size === 'sm' ? 12 : 14} />
    </button>
  );
}

function ExamplePair({ es, en, esClass = 'vu-ex-es', enClass = 'vu-ex-en' }) {
  const esLen = (es || '').length;
  const enLen = (en || '').length;
  // Strict: each side ≤ 18 chars, combined ≤ 36 chars
  const isShort = esLen <= 18 && enLen <= 18 && (esLen + enLen) <= 36;
  if (isShort) {
    return (
      <div className={`${esClass} inline-pair`}>
        <SpeakBtn text={es} />
        {es} <span className={`${enClass} inline-en`}>({en})</span>
      </div>
    );
  }
  return (
    <>
      <div className={esClass}>
        <SpeakBtn text={es} />
        {es}
      </div>
      <div className={enClass}>{en}</div>
    </>
  );
}

// =============================================================
// FOLDABLE GRAMMAR — list of collapsible grammar lessons
// Each lesson has sections with headings, text, tables, examples, tips
// =============================================================
function GrammarSection({ s }) {
  return (
    <div className="gl-section">
      {s.heading && <h3 className="gl-heading">{s.heading}</h3>}
      {s.text && <p className="gl-text">{s.text}</p>}
      {s.table && (
        <div className="lesson-table-wrap">
          <table className="lesson-table gl-table">
            {s.table.headers && (
              <thead>
                <tr>{s.table.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {s.table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>
                      {ci === 0 ? cell : <RenderForm raw={String(cell)} />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.examples && (
        <ul className="gl-examples">
          {s.examples.map((ex, ei) => (
            <li key={ei}>
              <ExamplePair es={ex.es} en={ex.en} esClass="gl-ex-es" enClass="gl-ex-en" />
            </li>
          ))}
        </ul>
      )}
      {s.tip && (
        <aside className="gl-tip">
          <Lightbulb size={16} className="gl-tip-icon" />
          <p>{s.tip}</p>
        </aside>
      )}
      {s.takeaway && (
        <aside className="gl-takeaway">
          <div className="gl-takeaway-label"><NotebookPen size={12} /> Lo que te llevas</div>
          <p>{s.takeaway}</p>
        </aside>
      )}
    </div>
  );
}

// =============================================================
// FOLDABLE BIOGRAPHIES — two-level accordion
// Top level: biography card (open/close)
// Inside: level sections (A1, A2, B1, B2) stacked with badges
// =============================================================
const LEVEL_COLORS = {
  A1: { bg: '#EAF3DE', color: '#3B6D11', border: '#C0DD97' },
  A2: { bg: '#E6F1FB', color: '#185FA5', border: '#B5D4F4' },
  B1: { bg: '#FAEEDA', color: '#854F0B', border: '#FAC775' },
  B2: { bg: '#EEEDFE', color: '#534AB7', border: '#CECBF6' },
};

function BioBadge({ level }) {
  const c = LEVEL_COLORS[level] || {};
  return (
    <span className="bio-level-badge" style={{ background: c.bg, color: c.color, borderColor: c.border }}>
      {level}
    </span>
  );
}

// =============================================================
// FOLDABLE POEMS — two-column stanza layout (ES | EN)
// Each poem folds open showing stanzas, vocab, and learning note
// =============================================================
function FoldablePoemsBlock({ poems }) {
  const [openIndex, setOpenIndex] = useState(null);
  function toggle(i) { setOpenIndex(prev => prev === i ? null : i); }
  return (
    <section className="block foldable-poems">
      {poems.map((poem, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`poem-item ${isOpen ? 'open' : 'closed'}`}>
            <button className="poem-toggle" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="poem-toggle-inner">
                <span className="poem-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="poem-toggle-text">
                  <span className="poem-title-line">{poem.title}</span>
                  <span className="poem-attribution">{poem.attribution}</span>
                </div>
              </div>
              <div className="poem-toggle-right">
                <span className="poem-level-tag">{poem.level}</span>
                <ChevronDown size={18} className={`poem-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>
            {isOpen && (
              <div className="poem-body">
                {poem.note && (
                  <p className="poem-intro-note">{poem.note}</p>
                )}
                {poem.opening && (
                  <blockquote className="poem-opening-quote">
                    <SpeakBtn text={poem.opening} size="md" className="poem-quote-speak" />
                    {poem.opening}
                  </blockquote>
                )}
                <div className="poem-tools">
                  <SpeakBtn text={poem.stanzas.map(s => s.es).join('. ')} size="md" />
                  <span className="poem-speak-label">Escuchar el poema</span>
                </div>
                <div className="poem-stanzas">
                  {poem.stanzas.map((s, si) => (
                    <div key={si} className="poem-stanza">
                      <div className="poem-stanza-num">{si + 1}</div>
                      <KaraokeText text={s.es} paragraphClass="poem-stanza-es" />
                      <div className="poem-stanza-en">{s.en}</div>
                    </div>
                  ))}
                </div>
                {poem.vocab && poem.vocab.length > 0 && (
                  <div className="poem-vocab-block">
                    <div className="poem-vocab-label">Vocabulario poético</div>
                    <div className="poem-vocab-grid">
                      {poem.vocab.map((v, vi) => (
                        <div key={vi} className="poem-vocab-row">
                          <span className="poem-vocab-es">{v.es}</span>
                          <span className="poem-vocab-dash">—</span>
                          <span className="poem-vocab-en">{v.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {poem.learningNote && (
                  <aside className="poem-learning-note">
                    <div className="poem-learning-label"><Lightbulb size={14} /> Nota de lectura</div>
                    <p>{poem.learningNote}</p>
                  </aside>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function FoldableSongsBlock({ songs }) {
  const [openIndex, setOpenIndex] = useState(null);
  function toggle(i) { setOpenIndex(prev => prev === i ? null : i); }

  return (
    <section className="block foldable-poems foldable-songs">
      {songs.map((song, i) => {
        const isOpen = openIndex === i;
        const speakText = song.sections.map((section) => section.es).join('. ');
        return (
          <div key={song.title} className={`poem-item song-item ${isOpen ? 'open' : 'closed'}`}>
            <button className="poem-toggle" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="poem-toggle-inner">
                <span className="poem-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="poem-toggle-text">
                  <span className="poem-title-line">{song.title}</span>
                  <span className="poem-attribution">{song.attribution}</span>
                </div>
              </div>
              <div className="poem-toggle-right">
                <span className="poem-level-tag">{song.level}</span>
                <ChevronDown size={18} className={`poem-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>

            {isOpen && (
              <div className="poem-body song-body">
                <p className="poem-intro-note">{song.note}</p>
                <div className="poem-tools">
                  <SpeakBtn text={speakText} size="md" />
                  <span className="poem-speak-label">Escuchar secciones</span>
                </div>
                <div className="song-sections">
                  {song.sections.map((section, si) => (
                    <div key={section.label} className="song-section">
                      <div className="song-section-label">{String(si + 1).padStart(2, '0')} · {section.label}</div>
                      <div className="song-section-grid">
                        <KaraokeText text={section.es} paragraphClass="song-lyric-es" />
                        <p className="song-lyric-en">{section.en}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {song.vocab && song.vocab.length > 0 && (
                  <div className="poem-vocab-block song-vocab-block">
                    <div className="poem-vocab-label">Vocabulario de la canción</div>
                    <div className="poem-vocab-grid">
                      {song.vocab.map((v, vi) => (
                        <div key={vi} className="poem-vocab-row">
                          <span className="poem-vocab-es">{v.es}</span>
                          <span className="poem-vocab-dash">—</span>
                          <span className="poem-vocab-en">{v.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {song.learningNote && (
                  <aside className="poem-learning-note">
                    <div className="poem-learning-label"><Lightbulb size={14} /> Nota de canción</div>
                    <p>{song.learningNote}</p>
                  </aside>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function FoldableBiosBlock({ bios }) {
  const [openIndex, setOpenIndex] = useState(null);
  function toggle(i) { setOpenIndex(prev => prev === i ? null : i); }
  return (
    <section className="block foldable-bios">
      {bios.map((bio, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`bio-item ${isOpen ? 'open' : 'closed'}`}>
            <button className="bio-toggle" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="bio-toggle-left">
                <span className="bio-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="bio-toggle-text">
                  <span className="bio-name">{bio.title}</span>
                  <span className="bio-subtitle-line">{bio.subtitle}</span>
                  <span className="bio-dates">{bio.dates}</span>
                </div>
              </div>
              <div className="bio-toggle-right">
                <div className="bio-level-pills">
                  {[...new Set(bio.levels.map(l => l.level))].map(lv => (
                    <BioBadge key={lv} level={lv} />
                  ))}
                </div>
                <ChevronDown size={18} className={`bio-chevron ${isOpen ? 'open' : ''}`} />
              </div>
            </button>
            {isOpen && (
              <div className="bio-body">
                {bio.levels.map((section, si) => (
                  <div key={si} className="bio-section">
                    <div className="bio-section-header">
                      <BioBadge level={section.level} />
                      <h3 className="bio-section-title">{section.heading}</h3>
                      <SpeakBtn text={section.paragraphs.join(' ')} size="md" className="bio-section-speak" />
                    </div>
                    {section.paragraphs.map((p, pi) => (
                      <KaraokeText key={pi} text={p} paragraphClass="bio-paragraph" />
                    ))}
                    {section.vocab && (
                      <div className="bio-vocab">
                        <span className="bio-vocab-label">Vocabulario</span>
                        {section.vocab}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function FoldableGrammarBlock({ lessons }) {
  const [openIndex, setOpenIndex] = useState(null);
  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }
  return (
    <section className="block foldable-grammar">
      {lessons.map((lesson, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`gl-item ${isOpen ? 'open' : 'closed'}`}>
            <button
              className="gl-toggle"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              touch-action="manipulation"
            >
              <span className="gl-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="gl-level-badge">{lesson.level}</span>
              <div className="gl-toggle-text">
                <span className="gl-title">{lesson.title}</span>
                <span className="gl-subtitle">{lesson.subtitle}</span>
              </div>
              <ChevronDown size={18} className={`gl-chevron ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
              <div className="gl-body">
                {lesson.intro && <p className="gl-intro">{lesson.intro}</p>}
                {lesson.sections.map((s, si) => (
                  <GrammarSection key={si} s={s} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

// =============================================================
// FOLDABLE STORIES — list of collapsible reading texts
// Each story title is a button. Click to expand/collapse the body.
// =============================================================
function FoldableStoriesBlock({ stories }) {
  const [openIndex, setOpenIndex] = useState(null);
  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }
  return (
    <section className="block foldable-stories">
      {stories.map((s, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`fold-item ${isOpen ? 'open' : 'closed'}`}>
            <button
              className="fold-toggle"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="fold-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="fold-level">{s.level}</span>
              <span className="fold-title">{s.title}</span>
              <ChevronDown size={18} className={`fold-chevron ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
              <div className="fold-body">
                <div className="story-tools">
                  <SpeakBtn text={s.paragraphs.join(' ')} size="md" className="story-speak-all" />
                  <span className="story-speak-label">Escuchar el cuento</span>
                </div>
                {s.paragraphs.map((p, pi) => (
                  <KaraokeText key={pi} text={p} paragraphClass="reading-paragraph" />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

// =============================================================
// PALABRAS LAB - grouped vocabulary study deck
// =============================================================
const PALABRAS_PROGRESS_KEY = 'palabras-progress-v1';
const DAY_MS = 24 * 60 * 60 * 1000;

function palabraKey(groupId, entry) {
  return `${groupId}::${entry.rank}::${entry.spanish}`;
}

function getEntryGroupId(group, entry) {
  return entry.sourceGroupId || group.id;
}

function getEntryProgressKey(group, entry) {
  return palabraKey(getEntryGroupId(group, entry), entry);
}

function normalizeVocabularyTerm(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()"']/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '')
    .trim();
}

const TOPIC_VOCABULARY_GROUPS = [
  {
    id: 'topic-work-professions',
    title: 'Trabajo y Profesiones',
    description: 'A focused work-life deck merged into the vocabulary bank without repeating existing entries.',
    terms: [
      { spanish: 'el trabajo', english: 'work, job' },
      { spanish: 'la oficina', english: 'office' },
      { spanish: 'el despacho', english: 'private office, study' },
      { spanish: 'la reunión', english: 'meeting' },
      { spanish: 'el cliente', english: 'client' },
      { spanish: 'el contrato', english: 'contract' },
      { spanish: 'el abogado', english: 'lawyer' },
      { spanish: 'el juez', english: 'judge' },
      { spanish: 'el tribunal', english: 'court' },
      { spanish: 'la demanda', english: 'lawsuit, claim' },
      { spanish: 'el sueldo', english: 'salary' },
      { spanish: 'el horario', english: 'schedule' },
      { spanish: 'el jefe', english: 'boss' },
      { spanish: 'el empleado', english: 'employee' },
      { spanish: 'la empresa', english: 'company' },
      { spanish: 'el negocio', english: 'business' },
      { spanish: 'el plazo', english: 'deadline, term' },
      { spanish: 'la firma', english: 'signature' },
    ],
  },
  {
    id: 'topic-emotions-feelings',
    title: 'Emociones y Sentimientos',
    description: 'A focused feelings deck merged into the vocabulary bank without repeating existing entries.',
    terms: [
      { spanish: 'la alegría', english: 'joy' },
      { spanish: 'la tristeza', english: 'sadness' },
      { spanish: 'el miedo', english: 'fear' },
      { spanish: 'la rabia', english: 'rage' },
      { spanish: 'el orgullo', english: 'pride' },
      { spanish: 'la vergüenza', english: 'shame' },
      { spanish: 'la culpa', english: 'guilt' },
      { spanish: 'el alivio', english: 'relief' },
      { spanish: 'la nostalgia', english: 'nostalgia' },
      { spanish: 'la añoranza', english: 'longing' },
      { spanish: 'el cariño', english: 'affection' },
      { spanish: 'el rencor', english: 'resentment' },
      { spanish: 'la esperanza', english: 'hope' },
      { spanish: 'la duda', english: 'doubt' },
      { spanish: 'la ilusión', english: 'excitement, hope' },
      { spanish: 'el desánimo', english: 'discouragement' },
    ],
  },
];

function buildTopicVocabularyGroups(baseGroups) {
  const entryByTerm = new Map();

  for (const group of baseGroups || []) {
    for (const entry of group.entries || []) {
      const key = normalizeVocabularyTerm(entry.spanish);
      if (!entryByTerm.has(key)) {
        entryByTerm.set(key, {
          ...entry,
          sourceGroupId: group.id,
          sourceGroupTitle: group.title,
        });
      }
    }
  }

  return TOPIC_VOCABULARY_GROUPS.map((topic) => {
    const seenTerms = new Set();
    const entries = topic.terms.map((term, index) => {
      const key = normalizeVocabularyTerm(term.spanish);
      if (seenTerms.has(key)) return null;
      seenTerms.add(key);

      const match = entryByTerm.get(key);
      const fallbackSpanish = term.spanish.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, '').trim();

      return {
        ...(match || {
          rank: `T${index + 1}`,
          spanish: fallbackSpanish,
          english: term.english,
          sourceGroupId: topic.id,
          sourceGroupTitle: topic.title,
        }),
        topicTerm: term.spanish,
        topicEnglish: term.english,
        topicOrder: index + 1,
      };
    }).filter(Boolean);

    return {
      id: topic.id,
      title: topic.title,
      description: topic.description,
      entries,
      isTopic: true,
    };
  });
}

function getDisplaySpanish(entry) {
  return entry.topicTerm || entry.spanish;
}

function getDisplayEnglish(entry) {
  return entry.topicEnglish || entry.english;
}

function clampInt(n, min, max) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

function schedulePalabraReview(previous, rating, now = Date.now()) {
  const oldInterval = previous?.intervalDays || 0;
  const oldEase = previous?.ease || 2.35;
  const oldReps = previous?.reps || 0;
  const ratingConfig = {
    again: { label: 'Again', easeDelta: -0.18, minDays: 10 / 1440, multiplier: 0.2 },
    hard: { label: 'Hard', easeDelta: -0.08, minDays: 1, multiplier: 1.15 },
    good: { label: 'Good', easeDelta: 0.02, minDays: oldReps ? 2 : 1, multiplier: oldEase },
    easy: { label: 'Easy', easeDelta: 0.12, minDays: oldReps ? 4 : 3, multiplier: oldEase + 0.7 },
  }[rating] || { label: 'Good', easeDelta: 0, minDays: 1, multiplier: oldEase };
  const ease = Math.max(1.35, Math.min(3.2, oldEase + ratingConfig.easeDelta));
  const intervalDays = rating === 'again'
    ? ratingConfig.minDays
    : Math.max(ratingConfig.minDays, (oldInterval || 1) * ratingConfig.multiplier);

  return {
    ...previous,
    ease,
    intervalDays,
    dueAt: now + intervalDays * DAY_MS,
    reps: rating === 'again' ? 0 : oldReps + 1,
    lapses: rating === 'again' ? (previous?.lapses || 0) + 1 : previous?.lapses || 0,
    seen: true,
    mastered: rating === 'easy' || intervalDays >= 7,
    lastRating: ratingConfig.label,
    reviewedAt: now,
  };
}

function getPalabraProgressStats(groups, progress, now = Date.now()) {
  const stats = { total: 0, seen: 0, due: 0, mastered: 0, byGroup: {} };
  const countedProgressKeys = new Set();
  for (const group of groups || []) {
    const groupStats = { total: group.entries.length, seen: 0, due: 0, mastered: 0 };
    for (const entry of group.entries) {
      const progressKey = getEntryProgressKey(group, entry);
      const state = progress[progressKey];
      const alreadyCounted = countedProgressKeys.has(progressKey);

      if (!alreadyCounted) {
        countedProgressKeys.add(progressKey);
        stats.total++;
      }

      if (state?.seen) {
        groupStats.seen++;
        if (!alreadyCounted) stats.seen++;
        if (state.mastered) {
          groupStats.mastered++;
          if (!alreadyCounted) stats.mastered++;
        }
        if ((state.dueAt || 0) <= now) {
          groupStats.due++;
          if (!alreadyCounted) stats.due++;
        }
      }
    }
    stats.byGroup[group.id] = groupStats;
  }
  return stats;
}

function makePalabraExample(entry, groupId) {
  const word = entry.spanish.split(',')[0].trim();
  if (groupId === 'topic-work-professions') {
    return {
      es: `En mi trabajo uso "${word}" con frecuencia.`,
      en: `At work I use "${word}" often.`,
    };
  }
  if (groupId === 'topic-emotions-feelings') {
    return {
      es: `Hoy puedo nombrar "${word}" con calma.`,
      en: `Today I can name "${word}" calmly.`,
    };
  }
  if (groupId === 'function-words') {
    return {
      es: `Uso "${word}" para unir una idea con otra.`,
      en: `"${word}" helps connect one idea to another.`,
    };
  }
  if (/^to /.test(entry.english)) {
    return {
      es: `Hoy necesito ${word} en una frase clara.`,
      en: `Today I need "${word}" in a clear sentence.`,
    };
  }
  return {
    es: `Escribo "${word}" en mi cuaderno de espanol.`,
    en: `"${word}" means ${getDisplayEnglish(entry)}.`,
  };
}

function PalabrasLab({ onSaveWord, progress = {}, onProgressChange }) {
  const [groups, setGroups] = useState(null);
  const [activeGroupId, setActiveGroupId] = useState('');
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const [revealed, setRevealed] = useState({});
  const [showEnglish, setShowEnglish] = useState(false);
  const [dueOnly, setDueOnly] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  const [browserScrollTop, setBrowserScrollTop] = useState(0);
  const [listenMode, setListenMode] = useState(false);
  useEffect(() => {
    let alive = true;
    import('./vocab-groups.json').then((module) => {
      if (!alive) return;
      const loadedGroups = module.default || [];
      const mergedGroups = [...loadedGroups, ...buildTopicVocabularyGroups(loadedGroups)];
      setGroups(mergedGroups);
      setActiveGroupId((current) => current || mergedGroups[0]?.id || '');
    });
    return () => { alive = false; };
  }, []);

  const isLoading = !groups;
  const activeGroup = groups?.find((g) => g.id === activeGroupId) || groups?.[0] || {
    id: 'loading',
    title: 'Cargando palabras',
    description: '',
    entries: [],
  };
  const filteredEntries = useMemo(() => {
    const q = normalizeVocabularyTerm(query);
    const base = q ? activeGroup.entries.filter((entry) => [
      entry.spanish,
      entry.english,
      entry.topicTerm,
      entry.topicEnglish,
      String(entry.rank),
    ].some((value) => normalizeVocabularyTerm(value || '').includes(q))) : activeGroup.entries;
    if (!dueOnly) return base;
    const now = Date.now();
    return base.filter((entry) => {
      const state = progress[getEntryProgressKey(activeGroup, entry)];
      return state?.seen && (state.dueAt || 0) <= now;
    });
  }, [activeGroup, query, dueOnly, progress]);
  const deckSize = 24;
  const deckStart = Math.min(cursor, Math.max(0, filteredEntries.length - 1));
  const deck = filteredEntries.slice(deckStart, deckStart + deckSize);
  const deckText = deck.map((entry) => getDisplaySpanish(entry)).join('. ');
  const progressStats = useMemo(() => getPalabraProgressStats(groups || [], progress), [groups, progress]);
  const activeStats = progressStats.byGroup[activeGroup.id] || { total: activeGroup.entries.length, seen: 0, due: 0, mastered: 0 };
  const rowHeight = 74;
  const browserHeight = 420;
  const browserStart = Math.max(0, Math.floor(browserScrollTop / rowHeight) - 4);
  const browserEnd = Math.min(filteredEntries.length, browserStart + Math.ceil(browserHeight / rowHeight) + 10);
  const browserRows = filteredEntries.slice(browserStart, browserEnd);

  useEffect(() => {
    setCursor(0);
    setRevealed({});
    setBrowserScrollTop(0);
  }, [activeGroupId, query, dueOnly]);

  if (isLoading) {
    return (
      <section className="block palabras-lab">
        <div className="palabras-empty">
          <Sparkles size={24} />
          <p>Cargando palabras...</p>
        </div>
      </section>
    );
  }

  function nextDeck() {
    setCursor((prev) => (prev + deckSize >= filteredEntries.length ? 0 : prev + deckSize));
    setRevealed({});
  }

  function surpriseDeck() {
    const maxStart = Math.max(0, filteredEntries.length - deckSize);
    setCursor(Math.floor(Math.random() * (maxStart + 1)));
    setRevealed({});
  }

  function toggleReveal(entry) {
    const key = `${activeGroup.id}-${entry.rank}-${entry.spanish}`;
    setRevealed((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function rateEntry(entry, rating) {
    const sourceGroupId = getEntryGroupId(activeGroup, entry);
    const key = palabraKey(sourceGroupId, entry);
    const next = {
      ...progress,
      [key]: {
        ...schedulePalabraReview(progress[key], rating),
        groupId: sourceGroupId,
        displayGroupId: activeGroup.id,
        topicId: activeGroup.isTopic ? activeGroup.id : undefined,
        spanish: getDisplaySpanish(entry),
        english: getDisplayEnglish(entry),
        rank: entry.rank,
      },
    };
    onProgressChange?.(next);
    setRevealed((prev) => ({ ...prev, [`${activeGroup.id}-${entry.rank}-${entry.spanish}`]: true }));
  }

  function playActiveListening() {
    if (!deck.length) return;
    warmupAudio();
    if (listenMode) {
      window.speechSynthesis?.cancel();
      setListenMode(false);
      return;
    }
    const lines = deck.flatMap((entry) => {
      const example = makePalabraExample(entry, activeGroup.id);
      return [getDisplaySpanish(entry), example.es, getDisplaySpanish(entry)];
    });
    setListenMode(true);
    speak(lines.join('. '), {
      onend: () => setListenMode(false),
      onerror: () => setListenMode(false),
    });
  }

  function saveEntry(entry) {
    const sourceGroupId = getEntryGroupId(activeGroup, entry);
    const sourceLabel = activeGroup.isTopic && entry.sourceGroupTitle ? `Source ${entry.sourceGroupTitle}` : null;
    onSaveWord?.({
      word: getDisplaySpanish(entry),
      translation: getDisplayEnglish(entry),
      pos: activeGroup.isTopic ? `${activeGroup.title} topic` : activeGroup.title,
      extras: [`Rank ${entry.rank}`, activeGroup.description, sourceLabel].filter(Boolean),
      tags: ['palabras', activeGroup.id, sourceGroupId].filter(Boolean),
      savedAt: Date.now(),
    });
  }

  return (
    <section className="block palabras-lab">
      <div className="palabras-toolbar">
        <div className="palabras-group-tabs" role="tablist" aria-label="Vocabulary groups">
          {groups.map((group) => (
            <button
              key={group.id}
              className={`palabras-tab ${group.id === activeGroup.id ? 'active' : ''}`}
              onClick={() => setActiveGroupId(group.id)}
              role="tab"
              aria-selected={group.id === activeGroup.id}
            >
              <span>{group.title.replace(/^Group /, 'G')}</span>
              <strong>{group.entries.length}</strong>
            </button>
          ))}
        </div>
        <label className="palabras-search">
          <span>Buscar</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="palabra, meaning, rank..."
          />
        </label>
      </div>

      <div className="palabras-stage">
        <div className="palabras-stage-copy">
          <div className="palabras-stage-kicker">{activeGroup.isTopic ? 'Tema integrado' : 'Grupo intacto'}</div>
          <h2>{activeGroup.title}</h2>
          <p>{activeGroup.description}</p>
        </div>
        <div className="palabras-stage-stats">
          <div>
            <span>Mostrando</span>
            <strong>{deck.length}</strong>
          </div>
          <div>
            <span>Filtradas</span>
            <strong>{filteredEntries.length}</strong>
          </div>
          <div>
            <span>Entrada</span>
            <strong>{filteredEntries.length ? deckStart + 1 : 0}</strong>
          </div>
          <div>
            <span>Vencidas</span>
            <strong>{activeStats.due}</strong>
          </div>
          <div>
            <span>Vistas</span>
            <strong>{activeStats.seen}</strong>
          </div>
          <div>
            <span>Dominadas</span>
            <strong>{activeStats.mastered}</strong>
          </div>
        </div>
      </div>

      <div className="palabras-actions">
        <SpeakBtn text={deckText} size="md" className="palabras-read-btn" />
        <button className={`palabras-action-btn ${listenMode ? 'active' : ''}`} onClick={playActiveListening}>
          {listenMode ? 'Escuchando...' : 'Escucha activa'}
        </button>
        <button className={`palabras-action-btn ${dueOnly ? 'active' : ''}`} onClick={() => setDueOnly((prev) => !prev)}>
          {dueOnly ? 'Todas' : 'Vencidas'}
        </button>
        <button className="palabras-action-btn" onClick={() => setShowEnglish((prev) => !prev)}>
          {showEnglish ? 'Ocultar ingles' : 'Mostrar ingles'}
        </button>
        <button className="palabras-action-btn" onClick={nextDeck}>Siguiente ronda</button>
        <button className="palabras-action-btn" onClick={surpriseDeck}>Barajar</button>
        <button className={`palabras-action-btn ${showBrowser ? 'active' : ''}`} onClick={() => setShowBrowser((prev) => !prev)}>
          Lista completa
        </button>
      </div>

      {deck.length ? (
        <div className="palabras-grid">
          {deck.map((entry) => {
            const key = `${activeGroup.id}-${entry.rank}-${entry.spanish}`;
            const isRevealed = showEnglish || revealed[key];
            const reviewState = progress[getEntryProgressKey(activeGroup, entry)];
            const example = makePalabraExample(entry, activeGroup.id);
            return (
              <article key={key} className={`palabra-card ${isRevealed ? 'revealed' : ''}`}>
                <button className="palabra-main" onClick={() => toggleReveal(entry)}>
                  <span className="palabra-rank">#{entry.rank}</span>
                  <span className="palabra-es">{getDisplaySpanish(entry)}</span>
                  <span className="palabra-en">{isRevealed ? getDisplayEnglish(entry) : '...'}</span>
                  {isRevealed && (
                    <span className="palabra-example">
                      <span>{example.es}</span>
                      <em>{example.en}</em>
                    </span>
                  )}
                </button>
                <div className="palabra-card-actions">
                  <SpeakBtn text={getDisplaySpanish(entry)} />
                  <button className="palabra-save" onClick={() => saveEntry(entry)}>
                    <Bookmark size={13} />
                    Memoria
                  </button>
                </div>
                <div className="palabra-review-actions">
                  {['again', 'hard', 'good', 'easy'].map((rating) => (
                    <button key={rating} onClick={() => rateEntry(entry, rating)}>
                      {rating === 'again' ? 'Again' : rating === 'hard' ? 'Hard' : rating === 'good' ? 'Good' : 'Easy'}
                    </button>
                  ))}
                </div>
                {reviewState?.seen && (
                  <div className="palabra-review-state">
                    {reviewState.mastered ? 'Dominada' : `Due ${new Date(reviewState.dueAt || Date.now()).toLocaleDateString()}`}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="palabras-empty">
          <Sparkles size={24} />
          <p>No words match this search in the selected group.</p>
        </div>
      )}

      {showBrowser && (
        <div className="palabras-browser">
          <div className="palabras-browser-head">
            <span>Lista virtual</span>
            <strong>{filteredEntries.length} palabras</strong>
          </div>
          <div
            className="palabras-virtual-list"
            style={{ height: browserHeight }}
            onScroll={(e) => setBrowserScrollTop(e.currentTarget.scrollTop)}
          >
            <div style={{ height: filteredEntries.length * rowHeight, position: 'relative' }}>
              <div style={{ transform: `translateY(${browserStart * rowHeight}px)` }}>
                {browserRows.map((entry) => {
                  const state = progress[getEntryProgressKey(activeGroup, entry)];
                  return (
                    <div key={`${entry.rank}-${entry.spanish}`} className="palabras-virtual-row" style={{ height: rowHeight }}>
                      <span className="palabra-rank">#{entry.rank}</span>
                      <strong>{getDisplaySpanish(entry)}</strong>
                      <span>{getDisplayEnglish(entry)}</span>
                      <button onClick={() => rateEntry(entry, 'good')}>{state?.seen ? 'Actualizar' : 'Visto'}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// =============================================================
// CHAPTER RENDERER - book-style content blocks
// =============================================================
function ChapterContent({ chapter, sectionId, onSaveWord, palabrasProgress, onPalabrasProgressChange }) {
  return (
    <article className="chapter-body">
      <header className="chapter-header">
        <div className="chapter-icon-row">
          {sectionId && (
            <div className="chapter-icon-wrap">
              <SectionIcon id={sectionId} size={22} />
            </div>
          )}
          <div className="chapter-level-tag">
            {chapter.rank ? `Nº ${String(chapter.rank).padStart(2, '0')} · ` : ''}Nivel {chapter.level}
          </div>
        </div>
        <h1 className="chapter-title">{chapter.title}</h1>
        {chapter.subtitle && <p className="chapter-subtitle">{chapter.subtitle}</p>}
        <div className="chapter-rule" />
      </header>

      {chapter.intro && <p className="chapter-intro drop-cap">{chapter.intro}</p>}

      {chapter.blocks.map((block, i) => {
        switch (block.type) {
          case 'conjugation':
            return (
              <section key={i} className="block">
                <h2 className="block-heading">{block.title}</h2>
                <div className="conjugation-grid">
                  {block.verbs.map((v, j) => (
                    <div key={j} className="conjugation-card">
                      <div className="conjugation-verb">{v.name}</div>
                      <ul className="conjugation-list">
                        {v.forms.map((f, k) => (
                          <li key={k}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'examples':
            return (
              <section key={i} className="block">
                <h2 className="block-heading">{block.title}</h2>
                <ul className="examples-list">
                  {block.pairs.map((p, j) => (
                    <li key={j} className="example-item">
                      <ExamplePair es={p.es} en={p.en} esClass="example-es" enClass="example-en" />
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'rule':
            return (
              <section key={i} className="block">
                <dl className="rule-list">
                  {block.items.map((it, j) => (
                    <div key={j} className="rule-row">
                      <dt>{it.label}</dt>
                      <dd>{it.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          case 'reading':
            return (
              <section key={i} className="block reading-block">
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="reading-paragraph">
                    <SpeakBtn text={p} className="paragraph-speak" />
                    {p}
                  </p>
                ))}
              </section>
            );
          case 'foldable-poems':
            return <FoldablePoemsBlock key={i} poems={block.poems} />;
          case 'foldable-songs':
            return <FoldableSongsBlock key={i} songs={block.songs} />;
          case 'foldable-bios':
            return <FoldableBiosBlock key={i} bios={block.bios} />;
          case 'foldable-grammar':
            return <FoldableGrammarBlock key={i} lessons={block.lessons} />;
          case 'foldable-stories':
            return <FoldableStoriesBlock key={i} stories={block.stories} />;
          case 'glossary':
            return (
              <section key={i} className="block">
                <h2 className="block-heading"><Languages size={16} className="inline-icon" /> Glosario</h2>
                <div className="glossary-grid">
                  {block.words.map((w, j) => (
                    <div key={j} className="glossary-row">
                      <span className="glossary-es">{w.es}</span>
                      <span className="glossary-dash">—</span>
                      <span className="glossary-en">{w.en}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'vocab':
            return (
              <section key={i} className="block">
                <div className="vocab-grid">
                  {block.columns.map((w, j) => (
                    <div key={j} className="vocab-row">
                      <SpeakBtn text={w.es} />
                      <span className="vocab-es">{w.es}</span>
                      <span className="vocab-en">{w.en}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'vocab-lab':
            return (
              <PalabrasLab
                key={i}
                onSaveWord={onSaveWord}
                progress={palabrasProgress}
                onProgressChange={onPalabrasProgressChange}
              />
            );
          case 'phraselist':
            return (
              <section key={i} className="block">
                <ul className="phrase-list">
                  {block.phrases.map((p, j) => (
                    <li key={j} className="phrase-item">
                      <span className="phrase-num">{String(j + 1).padStart(2, '0')}</span>
                      <div className="phrase-content">
                        <p className="phrase-es">
                          <SpeakBtn text={p.es} className="paragraph-speak" />
                          {p.es}
                        </p>
                        <p className="phrase-en">{p.en}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'steps':
            return (
              <section key={i} className="block">
                <ol className="steps-list">
                  {block.steps.map((s, j) => (
                    <li key={j} className="step-item">
                      <div className="step-num">{j + 1}</div>
                      <div>
                        <h3 className="step-title">{s.title}</h3>
                        <p className="step-text">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            );
          case 'big-takeaways':
            return (
              <section key={i} className="block">
                <div className="big-takeaways">
                  {block.items.map((it, j) => (
                    <div key={j} className="big-takeaway-card">
                      <div className="big-takeaway-num">{it.n}</div>
                      <h3 className="big-takeaway-title">{it.title}</h3>
                      <p className="big-takeaway-text">{it.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'tip':
            return (
              <aside key={i} className="block tip-block">
                <Lightbulb size={18} className="tip-icon" />
                <p>{block.text}</p>
              </aside>
            );
          case 'takeaway':
            return (
              <aside key={i} className="block takeaway-block">
                <div className="takeaway-label"><NotebookPen size={14} /> Lo que te llevas</div>
                <p>{block.text}</p>
              </aside>
            );
          case 'verb-table': {
            const tenseByName = Object.fromEntries(block.tenses.map((t) => [t.name, t]));
            const groups = block.tenseGroups || [
              ['Presente', 'Pretérito', 'Imperfecto'],
              ['Condicional', 'Futuro'],
            ];
            return (
              <section key={i} className="block verb-table-block">
                {block.participles && (
                  <div className="participles">
                    <div className="participles-label">Participios</div>
                    <div className="participles-rows">
                      <div className="participles-row">
                        <span className="participles-key">Presente</span>
                        <span className="participles-val"><RenderForm raw={block.participles.present} /></span>
                      </div>
                      <div className="participles-row">
                        <span className="participles-key">Pasado</span>
                        <span className="participles-val"><RenderForm raw={block.participles.past} /></span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="verb-table-header">
                  <h2 className="verb-table-title">Indicativo de <em>"{chapter.title.toLowerCase()}"</em></h2>
                  <VerbPractice tenses={block.tenses} verbName={chapter.title} />
                </div>
                <div className="tense-stack">
                  {groups.map((names, gi) => {
                    const tenses = names.map((n) => tenseByName[n]).filter(Boolean);
                    if (tenses.length === 0) return null;
                    if (tenses.length === 1) {
                      const t = tenses[0];
                      return (
                        <div key={gi} className="tense-block">
                          <div className="tense-name-row">
                            <h3 className="tense-name">{t.name}</h3>
                            <SpeakBtn
                              text={t.forms.map(r => `${r.p} ${stripMarkers(r.f)}`).join('. ')}
                              size="md"
                              className="tense-speak-all"
                            />
                          </div>
                          <div className="tense-rows">
                            {t.forms.map((row, ri) => (
                              <React.Fragment key={ri}>
                                <span className="tense-pronoun">{row.p}</span>
                                <span className="tense-form">
                                  <RenderForm raw={row.f} />
                                  <SpeakBtn text={stripMarkers(row.f)} className="conjugation-speak" />
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <table key={gi} className="tense-group-table">
                        <thead>
                          <tr>
                            <th aria-hidden="true"></th>
                            {tenses.map((t, ti) => (
                              <th key={ti} scope="col">
                                <div className="tg-th-inner">
                                  <span>{t.name}</span>
                                  <SpeakBtn
                                    text={t.forms.map(r => `${r.p} ${stripMarkers(r.f)}`).join('. ')}
                                  />
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tenses[0].forms.map((_, ri) => (
                            <tr key={ri}>
                              <th scope="row" className="tg-pronoun">{tenses[0].forms[ri].p}</th>
                              {tenses.map((t, ti) => (
                                <td key={ti} className="tg-form">
                                  <RenderForm raw={t.forms[ri].f} />
                                  <SpeakBtn text={stripMarkers(t.forms[ri].f)} className="conjugation-speak" />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    );
                  })}
                </div>
                <div className="verb-legend">Las irregularidades aparecen en <span className="irreg">rojo</span>.</div>
              </section>
            );
          }
          case 'verb-uses':
            return (
              <section key={i} className="block verb-uses-block">
                {block.heading && <h2 className="verb-uses-heading">{block.heading}</h2>}
                {block.categories.map((cat, ci) => (
                  <div key={ci} className="vu-category">
                    <div className="vu-category-head">
                      <div className="vu-category-label">{cat.label}</div>
                      {cat.note && <div className="vu-category-note">{cat.note}</div>}
                    </div>
                    <div className="vu-senses">
                      {cat.senses.map((s, si) => (
                        <div key={si} className="vu-sense">
                          <div className="vu-sense-num">{s.n}</div>
                          <div className="vu-sense-body">
                            <div className="vu-sense-meaning">{s.meaning}</div>
                            {s.subnote && <div className="vu-sense-subnote">{s.subnote}</div>}
                            <ul className="vu-examples">
                              {s.examples.map((ex, ei) => (
                                <li key={ei}>
                                  <ExamplePair es={ex.es} en={ex.en} esClass="vu-ex-es" enClass="vu-ex-en" />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            );
          case 'lesson-section':
            return (
              <section key={i} className="block lesson-section">
                {block.heading && <h2 className="lesson-heading">{block.heading}</h2>}
                {block.text && <p className="lesson-text">{block.text}</p>}
                {block.paragraphs && block.paragraphs.map((p, pi) => (
                  <p key={pi} className="lesson-text">{p}</p>
                ))}
                {block.table && (
                  <div className="lesson-table-wrap">
                    <table className="lesson-table">
                      {block.table.headers && (
                        <thead>
                          <tr>
                            {block.table.headers.map((h, hi) => (
                              <th key={hi}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {block.table.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci}>
                                {ci === 0 ? cell : <RenderForm raw={String(cell)} />}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {block.examples && (
                  <ul className="lesson-examples">
                    {block.examples.map((ex, ei) => (
                      <li key={ei}>
                        <ExamplePair es={ex.es} en={ex.en} esClass="lesson-ex-es" enClass="lesson-ex-en" />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}

// =============================================================
// MAIN APP
// =============================================================
// =============================================================
// DICTIONARY POPUP — tap/select any Spanish word to translate
// API: MyMemory (free, no key) + SpanishDict deep link
// =============================================================
// =============================================================
// SHARED TRANSLATION HELPERS (used by both DictionaryPopup and Memoria)
// =============================================================
function _cleanWord(raw) {
  return raw.trim().replace(/[«»""''¡!¿?.,;:()[\]{}<>*_/\\—–\-]+/g, '').trim().toLowerCase();
}

async function translateWord(word) {
  const errors = [];
  const w = encodeURIComponent(word);
  const timeout = (ms) => (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) ? AbortSignal.timeout(ms) : undefined;

  // ===== TIER 1: LINGUEE =====
  try {
    const r = await fetch(`https://linguee-api.fly.dev/api/v2/translations?query=${w}&src=es&dst=en`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      if (Array.isArray(data) && data.length > 0) {
        const lemma = data[0];
        const main = lemma?.translations?.[0]?.text?.trim();
        if (main) {
          const extras = (lemma.translations || [])
            .slice(1, 5)
            .map(t => t.text?.trim())
            .filter(Boolean);
          const examples = [];
          for (const tr of (lemma.translations || [])) {
            for (const ex of (tr.examples || [])) {
              if (ex.src && ex.dst && examples.length < 2) {
                examples.push({ es: ex.src, en: ex.dst });
              }
            }
            if (examples.length >= 2) break;
          }
          return { main, extras, pos: lemma.pos || lemma.translations?.[0]?.pos || '', examples, source: 'Linguee' };
        }
      }
    } else { errors.push(`Linguee: HTTP ${r.status}`); }
  } catch (e) { errors.push(`Linguee: ${e.message}`); }

  // ===== TIER 2: GLOSBE =====
  try {
    const r = await fetch(`https://glosbe.com/gapi/translate?from=spa&dest=eng&format=json&phrase=${w}&pretty=true`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      const tucs = data?.tuc || [];
      const phrases = tucs.map(t => t?.phrase?.text?.trim()).filter(Boolean);
      const meanings = tucs.flatMap(t => (t?.meanings || []).map(m => m?.text?.trim())).filter(Boolean);
      if (phrases.length > 0) {
        const main = phrases[0];
        const extras = phrases.slice(1, 5).filter(p => p.toLowerCase() !== main.toLowerCase());
        return { main, extras, pos: '', meanings: meanings.slice(0, 3), source: 'Glosbe' };
      }
    } else { errors.push(`Glosbe: HTTP ${r.status}`); }
  } catch (e) { errors.push(`Glosbe: ${e.message}`); }

  // ===== TIER 3: FREE DICTIONARY =====
  try {
    const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${w}`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      if (Array.isArray(data) && data.length > 0) {
        const entry = data[0];
        const meaning = entry?.meanings?.[0];
        const def = meaning?.definitions?.[0]?.definition?.trim();
        if (def) {
          return { main: def, extras: [], pos: meaning?.partOfSpeech || '', source: 'Diccionario', isDefinition: true };
        }
      }
    } else { errors.push(`FreeDict: HTTP ${r.status}`); }
  } catch (e) { errors.push(`FreeDict: ${e.message}`); }

  // ===== TIER 4: GOOGLE / MYMEMORY (last resort) =====
  try {
    const r = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&dj=1&q=${w}`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      const main = data?.sentences?.[0]?.trans?.trim();
      if (main && main.toLowerCase() !== word.toLowerCase()) {
        return { main, extras: [], pos: '', source: 'Google' };
      }
    }
  } catch (e) { errors.push(`Google: ${e.message}`); }

  try {
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${w}&langpair=es|en`, { signal: timeout(4000) });
    if (r.ok) {
      const data = await r.json();
      const main = data?.responseData?.translatedText?.trim();
      if (main && main.toLowerCase() !== word.toLowerCase() && !/PLEASE|MYMEMORY|INVALID|QUOTA/i.test(main)) {
        return { main, extras: [], pos: '', source: 'MyMemory' };
      }
    }
  } catch (e) { errors.push(`MyMemory: ${e.message}`); }

  if (errors.length) console.warn('Lookup failed for', word, errors);
  return null;
}

function DictionaryPopup({ savedWords, onSave, onRemove }) {
  const [popup, setPopup] = useState(null);
  const popupRef = React.useRef(null);

  const cleanWord = _cleanWord;
  const translate = translateWord;

  // --- Two-stage flow: selection shows a floating Translate button.
  //     Tapping the button opens the full popup. This prevents conflicts with
  //     the BOOX system text-selection menu and lets the user dismiss easily.
  const [floatingBtn, setFloatingBtn] = useState(null); // {word, x, y}

  useEffect(() => {
    let lastSelection = '';

    async function openPopupForWord(word, x, y) {
      setFloatingBtn(null);
      setPopup({ word, x, y, loading: true, result: null, error: false });
      try {
        const result = await translate(word);
        setPopup(prev => prev && prev.word === word ? { ...prev, loading: false, result, error: !result } : prev);
      } catch (_) {
        setPopup(prev => prev && prev.word === word ? { ...prev, loading: false, error: true } : prev);
      }
    }

    function handleSelectionChange() {
      // Debounce — wait until selection is stable
      clearTimeout(handleSelectionChange._t);
      handleSelectionChange._t = setTimeout(() => {
        const sel = window.getSelection();
        const raw = sel?.toString() || '';
        const word = cleanWord(raw);

        if (!word || word.length < 2 || word.split(/\s+/).length > 3) {
          if (lastSelection) setFloatingBtn(null);
          lastSelection = '';
          return;
        }
        if (word === lastSelection) return;
        lastSelection = word;

        let x = window.innerWidth / 2, y = 120;
        try {
          const range = sel.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top - 6; // float ABOVE the selection so the button is reachable
        } catch (_) {}

        // Keep button on-screen
        const BTN_W = 96;
        x = Math.max(BTN_W / 2 + 8, Math.min(x, window.innerWidth - BTN_W / 2 - 8));
        if (y < 50) y = 50;

        setFloatingBtn({ word, x, y });
      }, 200);
    }

    function handleOutsideClick(e) {
      // If the user taps somewhere outside the popup AND outside the button,
      // dismiss everything.
      const insidePopup = popupRef.current && popupRef.current.contains(e.target);
      const insideBtn = e.target.closest && e.target.closest('.dict-floating-btn');
      if (!insidePopup && !insideBtn) {
        setPopup(null);
        setFloatingBtn(null);
        lastSelection = '';
      }
    }

    // Expose openPopupForWord on the popup container so the floating button can call it
    window.__bookOpenPopup = openPopupForWord;

    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('pointerdown', handleOutsideClick);
      delete window.__bookOpenPopup;
    };
  }, []);

  if (!popup && !floatingBtn) return null;

  // Render the floating Translate button when there's a selection but no popup
  if (!popup && floatingBtn) {
    return (
      <button
        className="dict-floating-btn"
        style={{
          left: floatingBtn.x,
          top: floatingBtn.y + window.scrollY,
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (window.__bookOpenPopup) {
            window.__bookOpenPopup(floatingBtn.word, floatingBtn.x, floatingBtn.y + 50);
          }
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <Languages size={14} />
        <span>Traducir</span>
      </button>
    );
  }

  const POPUP_W = 290;
  const safeX = Math.max(POPUP_W / 2 + 8, Math.min(popup.x, window.innerWidth - POPUP_W / 2 - 8));
  const belowViewport = popup.y + 220 > window.innerHeight;
  const topStyle = belowViewport ? 'auto' : popup.y + window.scrollY;
  const bottomStyle = belowViewport ? window.innerHeight - popup.y - window.scrollY + 12 : 'auto';
  const isSaved = savedWords.some(w => w.word === popup.word);

  function handleSaveToggle() {
    if (isSaved) {
      onRemove(popup.word);
    } else {
      // Allow saving even without a translation — the SpanishDict link still works
      onSave({
        word: popup.word,
        translation: popup.result?.main || '',
        pos: popup.result?.pos || '',
        extras: popup.result?.extras || [],
        savedAt: Date.now(),
      });
    }
  }

  return (
    <div
      ref={popupRef}
      className="dict-popup"
      style={{ left: safeX, top: topStyle === 'auto' ? 'auto' : topStyle, bottom: bottomStyle === 'auto' ? 'auto' : bottomStyle }}
    >
      {/* Header */}
      <div className="dict-header">
        <span className="dict-word">{popup.word}</span>
        <button className="dict-close-btn" onClick={() => setPopup(null)} aria-label="Close"><X size={14} /></button>
      </div>

      {/* Body */}
      <div className="dict-body">
        {popup.loading && (
          <div className="dict-loading"><span className="dict-spinner" /><span>Looking up…</span></div>
        )}
        {!popup.loading && popup.error && (
          <div className="dict-fallback">
            <div className="dict-not-found">No translation available offline</div>
            <a
              className="dict-fallback-link"
              href={`https://www.spanishdict.com/translate/${encodeURIComponent(popup.word)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Languages size={14} />
              Buscar "{popup.word}" en SpanishDict
            </a>
          </div>
        )}
        {!popup.loading && popup.result && (
          <>
            {popup.result.pos && <div className="dict-pos">{popup.result.pos}</div>}
            <div className={`dict-main-translation ${popup.result.isDefinition ? 'is-definition' : ''}`}>
              {popup.result.main}
            </div>
            {popup.result.extras?.length > 0 && (
              <div className="dict-extras">
                {popup.result.extras.map((e, i) => <span key={i} className="dict-extra-tag">{e}</span>)}
              </div>
            )}
            {popup.result.meanings?.length > 0 && (
              <ul className="dict-meanings">
                {popup.result.meanings.map((m, i) => (
                  <li key={i} className="dict-meaning-item">{m}</li>
                ))}
              </ul>
            )}
            {popup.result.examples?.length > 0 && (
              <div className="dict-examples">
                <div className="dict-examples-label">Ejemplos</div>
                {popup.result.examples.map((ex, i) => (
                  <div key={i} className="dict-example">
                    <div className="dict-example-es">{ex.es}</div>
                    <div className="dict-example-en">{ex.en}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Save button — always available once loading is done */}
      {!popup.loading && (
        <button
          className={`dict-save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSaveToggle}
          aria-label={isSaved ? 'Remove from Memoria' : 'Save to Memoria'}
        >
          <Bookmark size={14} className={isSaved ? 'filled' : ''} />
          {isSaved
            ? 'Guardado en Memoria ✓'
            : popup.result
              ? 'Guardar en Memoria'
              : 'Guardar palabra'}
        </button>
      )}

      {/* Footer */}
      <div className="dict-footer">
        <a className="dict-sd-link" href={`https://www.spanishdict.com/translate/${encodeURIComponent(popup.word)}`} target="_blank" rel="noopener noreferrer">
          <Languages size={12} />Ver en SpanishDict
        </a>
        <span className="dict-source">{popup.result?.source || 'Dict'}</span>
      </div>
    </div>
  );
}

// =============================================================
// MEMORIA VIEW — saved words flashcard panel
// =============================================================
// =============================================================
// AUDIO DEBUG PANEL — temporary diagnostic for mobile audio issues
// Tap the small badge to run a full check and see what's failing
// =============================================================
function AudioDebugPanel() {
  const [open, setOpen] = useState(false);
  const [report, setReport] = useState(null);
  const [testing, setTesting] = useState(false);

  function runDiagnostic() {
    const lines = [];

    // Check 1: speechSynthesis exists
    const hasAPI = typeof window !== 'undefined' && !!window.speechSynthesis;
    lines.push(`[1] window.speechSynthesis: ${hasAPI ? 'YES ✓' : 'NO ✗'}`);

    if (!hasAPI) {
      setReport(lines.join('\n'));
      return;
    }

    // Check 2: voices loaded
    const voices = window.speechSynthesis.getVoices() || [];
    lines.push(`[2] Voices loaded: ${voices.length}`);

    // Check 3: list Spanish voices
    const spanish = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));
    lines.push(`[3] Spanish voices: ${spanish.length}`);
    spanish.slice(0, 5).forEach(v => {
      lines.push(`    • ${v.name} (${v.lang})${v.default ? ' [default]' : ''}${v.localService ? ' [local]' : ' [remote]'}`);
    });
    if (spanish.length === 0 && voices.length > 0) {
      lines.push(`    First 3 available voices:`);
      voices.slice(0, 3).forEach(v => lines.push(`    • ${v.name} (${v.lang})`));
    }

    // Check 4: sample picked voice
    const picked = getSpanishVoice();
    lines.push(`[4] Selected voice: ${picked ? picked.name + ' (' + picked.lang + ')' : 'NONE'}`);

    // Check 5: speak a test phrase
    setTesting(true);
    lines.push(`[5] Speaking test phrase…`);
    setReport(lines.join('\n'));

    try {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance('Hola, esto es una prueba.');
      if (picked) utt.voice = picked;
      utt.lang = picked?.lang || 'es-ES';
      utt.rate = 0.9;
      utt.volume = 1;
      let started = false;
      let ended = false;

      utt.onstart = () => {
        started = true;
        setReport(lines.join('\n') + '\n[6] onstart fired ✓ (audio should be playing now)');
      };
      utt.onend = () => {
        ended = true;
        setTesting(false);
        setReport(lines.join('\n') + '\n[6] onstart: ' + (started ? 'YES ✓' : 'NO ✗') + '\n[7] onend: YES ✓\nDONE — if you heard nothing, your device has no audio output for this voice.');
      };
      utt.onerror = (e) => {
        setTesting(false);
        setReport(lines.join('\n') + '\n[ERROR] ' + (e.error || 'unknown') + '\nonstart fired: ' + started);
      };

      window.speechSynthesis.speak(utt);

      // Safety: if neither onstart nor onend fires within 5s, report it
      setTimeout(() => {
        if (!started && !ended) {
          setTesting(false);
          setReport(lines.join('\n') + '\n[6] onstart: NO ✗ (5s elapsed, no events fired)\nThe browser accepted the speak() call but produced no events. This usually means the audio engine is blocked or muted at the OS level.');
        }
      }, 5000);
    } catch (e) {
      setTesting(false);
      setReport(lines.join('\n') + '\n[EXCEPTION] ' + e.message);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', bottom: 16, right: 16, zIndex: 99999,
          background: '#1c1c1a', color: '#fff', border: 'none',
          borderRadius: 999, padding: '8px 14px', fontSize: 12,
          fontFamily: 'monospace', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        }}
      >
        🔧 Audio
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed', bottom: 16, right: 16, zIndex: 99999,
        width: 'min(360px, calc(100vw - 32px))',
        background: '#1c1c1a', color: '#fff',
        borderRadius: 12, padding: 16,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        fontFamily: 'monospace', fontSize: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <strong>Audio diagnostic</strong>
        <button
          onClick={() => { setOpen(false); setReport(null); }}
          style={{ background: 'transparent', color: '#fff', border: 'none', fontSize: 18, cursor: 'pointer' }}
        >×</button>
      </div>
      <button
        onClick={runDiagnostic}
        disabled={testing}
        style={{
          width: '100%', padding: 10, marginBottom: 12,
          background: testing ? '#444' : '#2f5d3a', color: '#fff',
          border: 'none', borderRadius: 6, fontSize: 13,
          fontFamily: 'inherit', cursor: testing ? 'wait' : 'pointer',
        }}
      >
        {testing ? 'Testing…' : 'Run test'}
      </button>
      {report && (
        <pre
          style={{
            margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
            background: '#000', padding: 12, borderRadius: 6,
            maxHeight: '50vh', overflowY: 'auto',
            fontSize: 11, lineHeight: 1.5,
          }}
        >{report}</pre>
      )}
    </div>
  );
}

function getMemoriaTags(entry) {
  const tags = new Set(entry.tags || []);
  if (entry.pending) tags.add('pending');
  if (!entry.translation) tags.add('needs-translation');
  if (/Group 1|cognates|near-cognates/i.test(entry.pos || '')) tags.add('cognates');
  if (/Group 2|function/i.test(entry.pos || '')) tags.add('function-words');
  if (/Group 3|remaining/i.test(entry.pos || '')) tags.add('remaining');
  return [...tags];
}

function exportMemoriaCsv(words) {
  const header = ['Spanish', 'English', 'Tags', 'Notes'];
  const lines = words.map((entry) => [
    entry.word,
    entry.translation || '',
    getMemoriaTags(entry).join(' | '),
    [...(entry.extras || []), entry.pos || ''].filter(Boolean).join(' | '),
  ]);
  const csv = [header, ...lines]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'memoria-spanish.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function MemoriaView({ savedWords, onRemove, onClear, onUpdateWord }) {
  const [flipped, setFlipped] = useState({});
  const [view, setView] = useState('grid'); // 'grid' | 'list'
  const [query, setQuery] = useState('');
  const [tagFilter, setTagFilter] = useState('ALL');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewFlipped, setReviewFlipped] = useState(false);
  const [tagDraft, setTagDraft] = useState('');

  function toggleFlip(word) {
    setFlipped(prev => ({ ...prev, [word]: !prev[word] }));
  }
  const sorted = [...savedWords].sort((a, b) => b.savedAt - a.savedAt);
  const allTags = useMemo(() => {
    const tags = new Set();
    for (const entry of sorted) getMemoriaTags(entry).forEach((tag) => tags.add(tag));
    return [...tags].sort();
  }, [sorted]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((entry) => {
      const tags = getMemoriaTags(entry);
      const matchesTag = tagFilter === 'ALL' || tags.includes(tagFilter);
      const matchesQuery = !q ||
        entry.word.toLowerCase().includes(q) ||
        (entry.translation || '').toLowerCase().includes(q) ||
        tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [sorted, query, tagFilter]);
  const reviewWord = filtered[reviewIndex % Math.max(1, filtered.length)];

  useEffect(() => {
    setReviewIndex(0);
    setReviewFlipped(false);
  }, [query, tagFilter, savedWords.length]);

  function addTag(word) {
    const tag = tagDraft.trim().toLowerCase().replace(/\s+/g, '-');
    if (!tag) return;
    const entry = savedWords.find((w) => w.word === word);
    const tags = Array.from(new Set([...(entry?.tags || []), tag]));
    onUpdateWord?.(word, { tags });
    setTagDraft('');
  }

  function nextReview() {
    setReviewIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    setReviewFlipped(false);
  }

  if (sorted.length === 0) {
    return (
      <div className="memoria-empty">
        <Bookmark size={36} className="memoria-empty-icon" />
        <h2 className="memoria-empty-title">Tu Memoria está vacía</h2>
        <p className="memoria-empty-text">Selecciona cualquier palabra en el libro, tradúcela, y pulsa <strong>Guardar en Memoria</strong>. La palabra aparecerá aquí.</p>
      </div>
    );
  }

  return (
    <article className="chapter-body memoria-view">
      <header className="chapter-header">
        <div className="chapter-meta">
          <span className="chapter-level">Mis palabras</span>
        </div>
        <h1 className="chapter-title">Memoria</h1>
        <p className="chapter-subtitle">{sorted.length} {sorted.length === 1 ? 'palabra guardada' : 'palabras guardadas'}</p>
        <p className="chapter-intro">
          {view === 'grid'
            ? 'Toca una tarjeta para voltearla y ver la traducción.'
            : 'Lista completa de tus palabras con traducción.'}
        </p>
      </header>

      {/* View toggle */}
      <div className="memoria-view-toggle">
        <button
          className={`memoria-view-btn ${view === 'grid' ? 'active' : ''}`}
          onClick={() => setView('grid')}
        >
          Tarjetas
        </button>
        <button
          className={`memoria-view-btn ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
        >
          Lista
        </button>
        <button
          className={`memoria-view-btn ${view === 'review' ? 'active' : ''}`}
          onClick={() => setView('review')}
        >
          Repaso
        </button>
      </div>
      <div className="memoria-tools">
        <label>
          <span>Buscar</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="palabra, translation, tag..." />
        </label>
        <label>
          <span>Etiqueta</span>
          <select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
            <option value="ALL">Todas</option>
            {allTags.map((tag) => <option key={tag} value={tag}>{tag}</option>)}
          </select>
        </label>
        <button className="memoria-tool-btn" onClick={() => exportMemoriaCsv(filtered)}>Export CSV</button>
      </div>

      {view === 'review' ? (
        <div className="memoria-review">
          {reviewWord ? (
            <>
              <button className={`memoria-review-card ${reviewFlipped ? 'flipped' : ''}`} onClick={() => setReviewFlipped((prev) => !prev)}>
                <span className="memoria-review-count">{filtered.length ? `${reviewIndex + 1} / ${filtered.length}` : '0 / 0'}</span>
                <strong>{reviewFlipped ? reviewWord.translation || 'Sin traduccion' : reviewWord.word}</strong>
                <em>{reviewFlipped ? reviewWord.word : 'toca para revelar'}</em>
              </button>
              <div className="memoria-review-actions">
                <SpeakBtn text={reviewWord.word} size="md" />
                <input value={tagDraft} onChange={(e) => setTagDraft(e.target.value)} placeholder="add-tag" />
                <button onClick={() => addTag(reviewWord.word)}>Tag</button>
                <button onClick={nextReview}>Siguiente</button>
              </div>
            </>
          ) : (
            <div className="memoria-empty-text">No hay palabras para este filtro.</div>
          )}
        </div>
      ) : view === 'grid' ? (
        <div className="memoria-grid">
          {filtered.map((entry) => {
            const isFlipped = flipped[entry.word];
            const isPending = entry.pending;
            const tags = getMemoriaTags(entry);
            return (
              <div
                key={entry.word}
                className={`memoria-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleFlip(entry.word)}
              >
                <div className="memoria-card-inner">
                  {/* Front — Spanish + translation preview */}
                  <div className="memoria-face front">
                    <div className="memoria-word">{entry.word}</div>
                    {entry.pos && <div className="memoria-pos">{entry.pos}</div>}
                    {/* Translation preview shown on the front, below the word */}
                    {entry.translation ? (
                      <div className="memoria-front-translation">{entry.translation}</div>
                    ) : isPending ? (
                      <div className="memoria-front-pending">
                        <span className="dict-spinner" />
                        <span>traduciendo…</span>
                      </div>
                    ) : (
                      <div className="memoria-hint">toca para detalles</div>
                    )}
                    {tags.length > 0 && (
                      <div className="memoria-tags">
                        {tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    )}
                  </div>
                  {/* Back — full details */}
                  <div className="memoria-face back">
                    {entry.translation ? (
                      <>
                        <div className="memoria-translation">{entry.translation}</div>
                        {entry.extras?.length > 0 && (
                          <div className="memoria-extras">
                            {entry.extras.slice(0, 3).map((e, i) => (
                              <span key={i} className="memoria-extra-tag">{e}</span>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="memoria-no-translation">Sin traducción guardada</div>
                    )}
                    <a
                      className="memoria-sd-link"
                      href={`https://www.spanishdict.com/translate/${encodeURIComponent(entry.word)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      SpanishDict →
                    </a>
                  </div>
                </div>
                <button
                  className="memoria-remove"
                  onClick={e => { e.stopPropagation(); onRemove(entry.word); }}
                  aria-label={`Remove ${entry.word}`}
                >
                  <X size={13} />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="memoria-list">
          {filtered.map((entry) => {
            const isPending = entry.pending;
            const tags = getMemoriaTags(entry);
            return (
              <div key={entry.word} className="memoria-list-row">
                <div className="memoria-list-main">
                  <div className="memoria-list-es">
                    <span className="memoria-list-word">{entry.word}</span>
                    {entry.pos && <span className="memoria-list-pos">{entry.pos}</span>}
                  </div>
                  {entry.translation ? (
                    <div className="memoria-list-en">{entry.translation}</div>
                  ) : isPending ? (
                    <div className="memoria-list-en pending">
                      <span className="dict-spinner" />
                      traduciendo…
                    </div>
                  ) : (
                    <div className="memoria-list-en empty">Sin traducción</div>
                  )}
                  {entry.extras?.length > 0 && (
                    <div className="memoria-list-extras">
                      {entry.extras.slice(0, 4).map((e, i) => (
                        <span key={i} className="memoria-list-extra-tag">{e}</span>
                      ))}
                    </div>
                  )}
                  {tags.length > 0 && (
                    <div className="memoria-list-extras">
                      {tags.map((tag) => <span key={tag} className="memoria-list-extra-tag">{tag}</span>)}
                    </div>
                  )}
                </div>
                <div className="memoria-list-actions">
                  <a
                    className="memoria-list-sd"
                    href={`https://www.spanishdict.com/translate/${encodeURIComponent(entry.word)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in SpanishDict"
                  >
                    <Languages size={14} />
                  </a>
                  <button
                    className="memoria-list-remove"
                    onClick={() => onRemove(entry.word)}
                    aria-label={`Remove ${entry.word}`}
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {sorted.length > 0 && (
        <div className="memoria-actions">
          <button className="memoria-clear-btn" onClick={onClear}>
            Borrar todo
          </button>
        </div>
      )}
    </article>
  );
}

function HomeView({
  totalChapters,
  visitedCount,
  savedWordsCount,
  levelFilter,
  palabrasSummary,
  sectionProgress,
  recommendations,
  onStart,
  onOpenMemoria,
  onOpenPalabras,
  onOpenVerb,
  onOpenReading,
  onSelectChapter,
}) {
  const progress = totalChapters ? Math.round((visitedCount / totalChapters) * 100) : 0;

  return (
    <article className="chapter-body home-dashboard">
      <header className="home-hero">
        <div className="home-kicker">
          <GraduationCap size={18} />
          Plan de estudio
        </div>
        <h1 className="home-title">Learn Spanish</h1>
        <p className="home-subtitle">
          Hoy: 10 palabras, una pagina leida en voz alta, un verbo repasado, y tres palabras guardadas.
        </p>
        <div className="home-actions">
          <button className="home-primary" onClick={onStart}>
            Empezar
            <ChevronRight size={16} />
          </button>
          <button className="home-secondary" onClick={onOpenMemoria}>
            <Bookmark size={15} />
            Memoria
          </button>
        </div>
      </header>

      <section className="home-stats" aria-label="Study progress">
        <div className="home-stat">
          <span className="home-stat-label">Progreso</span>
          <strong>{progress}%</strong>
          <span>{visitedCount} / {totalChapters} capitulos</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-label">Nivel</span>
          <strong>{levelFilter === 'ALL' ? 'Todo' : levelFilter}</strong>
          <span>Filtro activo</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-label">Memoria</span>
          <strong>{savedWordsCount}</strong>
          <span>{savedWordsCount === 1 ? 'palabra' : 'palabras'}</span>
        </div>
        <div className="home-stat">
          <span className="home-stat-label">Palabras due</span>
          <strong>{palabrasSummary.due}</strong>
          <span>{palabrasSummary.mastered} dominadas</span>
        </div>
      </section>

      <section className="home-daily">
        <div className="home-section-heading">
          <Zap size={18} />
          Ruta diaria
        </div>
        <div className="home-daily-grid">
          <button onClick={onOpenPalabras}>
            <span>01</span>
            <strong>10 palabras</strong>
            <em>{palabrasSummary.due ? `${palabrasSummary.due} vencidas` : `${palabrasSummary.seen} vistas`}</em>
          </button>
          <button onClick={onOpenReading}>
            <span>02</span>
            <strong>Lectura con audio</strong>
            <em>lee y escucha una pagina</em>
          </button>
          <button onClick={onOpenVerb}>
            <span>03</span>
            <strong>Un verbo</strong>
            <em>tabla, voz, repeticion</em>
          </button>
          <button onClick={onOpenMemoria}>
            <span>04</span>
            <strong>Memoria</strong>
            <em>{savedWordsCount} guardadas</em>
          </button>
        </div>
      </section>

      <section className="home-progress-map">
        <div className="home-section-heading">
          <Compass size={18} />
          Mapa de progreso
        </div>
        <div className="home-progress-list">
          {sectionProgress.map((item) => {
            const pct = item.total ? Math.round((item.visited / item.total) * 100) : 0;
            return (
              <div key={item.id} className="home-progress-row">
                <div className="home-progress-top">
                  <span>{item.label}</span>
                  <strong>{item.visited} / {item.total}</strong>
                </div>
                <div className="home-progress-track">
                  <span style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-path">
        <div className="home-section-heading">
          <Clock size={18} />
          Siguiente lectura
        </div>
        <div className="home-recommendations">
          {recommendations.map((chapter, index) => (
            <button
              key={chapter.id}
              className="home-rec"
              onClick={() => onSelectChapter(chapter)}
            >
              <span className="home-rec-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="home-rec-main">
                <span className="home-rec-title">{chapter.title}</span>
                <span className="home-rec-meta">{chapter.sectionLabel} - {chapter.level}</span>
              </span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}

export default function SpanishBook() {
  const [activeSectionId, setActiveSectionId] = useState('tiempos');
  const [activeChapterId, setActiveChapterId] = useState('tiempos');
  const [levelFilter, setLevelFilter] = useState('ALL');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMemoria, setShowMemoria] = useState(false);
  const [showHome, setShowHome] = useState(true);

  // --- Font size: persists across sessions, applied to body via CSS variable ---
  const [fontScale, setFontScale] = useState(1.0); // multiplier: 0.85 → 1.3
  const [resumeOffer, setResumeOffer] = useState(null); // {sectionId, chapterId, title}

  // --- Memoria: saved words, persisted via window.storage ---
  const [savedWords, setSavedWords] = useState([]);
  const [visitedChapters, setVisitedChapters] = useState([]);
  const [palabrasProgress, setPalabrasProgress] = useState({});

  useEffect(() => {
    // Load saved words, font scale, and last-read position on mount
    (async () => {
      try {
        const stored = await window.storage.get('memoria-words');
        if (stored?.value) setSavedWords(JSON.parse(stored.value));
      } catch (_) {}
      try {
        const fs = await window.storage.get('font-scale');
        if (fs?.value) {
          const v = parseFloat(fs.value);
          if (v >= 0.85 && v <= 1.3) setFontScale(v);
        }
      } catch (_) {}
      try {
        const last = await window.storage.get('last-read');
        if (last?.value) {
          const parsed = JSON.parse(last.value);
          // Only offer resume if it's NOT the default opening chapter
          if (parsed?.chapterId && parsed.chapterId !== 'tiempos') {
            setResumeOffer(parsed);
          }
        }
      } catch (_) {}
      try {
        const visited = await window.storage.get('visited-chapters');
        if (visited?.value) setVisitedChapters(JSON.parse(visited.value));
      } catch (_) {}
      try {
        const progress = await window.storage.get(PALABRAS_PROGRESS_KEY);
        if (progress?.value) setPalabrasProgress(JSON.parse(progress.value));
      } catch (_) {}
    })();
  }, []);

  // Apply fontScale to the document via CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale));
    try { window.storage.set('font-scale', String(fontScale)); } catch (_) {}
  }, [fontScale]);

  function bumpFont(delta) {
    setFontScale(prev => {
      const next = Math.max(0.85, Math.min(1.3, +(prev + delta).toFixed(2)));
      return next;
    });
  }

  async function persistWords(words) {
    try { await window.storage.set('memoria-words', JSON.stringify(words)); } catch (_) {}
  }

  async function persistPalabrasProgress(progress) {
    try { await window.storage.set(PALABRAS_PROGRESS_KEY, JSON.stringify(progress)); } catch (_) {}
  }

  function handlePalabrasProgressChange(next) {
    setPalabrasProgress(next);
    persistPalabrasProgress(next);
  }

  // Background-translate a word and update the saved entry with the result.
  // Marks `pending: true` while in flight so the UI can show a spinner.
  async function backgroundTranslate(word) {
    setSavedWords(prev => {
      const next = prev.map(w => w.word === word ? { ...w, pending: true } : w);
      persistWords(next);
      return next;
    });
    const result = await translateWord(word);
    setSavedWords(prev => {
      const next = prev.map(w => {
        if (w.word !== word) return w;
        if (result) {
          return {
            ...w,
            translation: result.main,
            pos: result.pos || w.pos || '',
            extras: result.extras || [],
            pending: false,
            translatedAt: Date.now(),
          };
        }
        return { ...w, pending: false };
      });
      persistWords(next);
      return next;
    });
  }

  function handleSaveWord(entry) {
    setSavedWords(prev => {
      if (prev.some(w => w.word === entry.word)) return prev;
      const next = [entry, ...prev];
      persistWords(next);
      return next;
    });
    // If saved without a translation, fetch it in the background
    if (!entry.translation) {
      backgroundTranslate(entry.word);
    }
  }

  function handleRemoveWord(word) {
    setSavedWords(prev => {
      const next = prev.filter(w => w.word !== word);
      persistWords(next);
      return next;
    });
  }

  function handleUpdateWord(word, patch) {
    setSavedWords(prev => {
      const next = prev.map(w => w.word === word ? { ...w, ...patch } : w);
      persistWords(next);
      return next;
    });
  }

  function handleClearWords() {
    setSavedWords([]);
    persistWords([]);
  }

  // On mount, retry translation for any saved word that's missing one
  useEffect(() => {
    if (savedWords.length === 0) return;
    const untranslated = savedWords.filter(w => !w.translation && !w.pending);
    if (untranslated.length === 0) return;
    // Stagger the retries to avoid hammering APIs
    untranslated.slice(0, 5).forEach((w, i) => {
      setTimeout(() => backgroundTranslate(w.word), i * 800);
    });
  }, [savedWords.length]);
  // Verbos sections collapsed by default (long lists); other sections expanded
  const [expandedSections, setExpandedSections] = useState(() => {
    const init = {};
    for (const s of SECTIONS) {
      init[s.id] = !(s.id === 'verbos' || s.id === 'verbos2');
    }
    return init;
  });

  // Flat list of all visible chapters (after level filter), preserving section order.
  const visibleFlatChapters = useMemo(() => {
    const list = [];
    for (const s of SECTIONS) {
      for (const c of s.chapters) {
        if (c.alwaysVisible || levelFilter === 'ALL' || c.level === levelFilter) {
          list.push({ ...c, sectionId: s.id, sectionLabel: s.label });
        }
      }
    }
    return list;
  }, [levelFilter]);

  // If the active chapter is filtered out, jump to the first visible one.
  useEffect(() => {
    if (!visibleFlatChapters.find((c) => c.id === activeChapterId)) {
      if (visibleFlatChapters.length) {
        setActiveChapterId(visibleFlatChapters[0].id);
        setActiveSectionId(visibleFlatChapters[0].sectionId);
      }
    }
  }, [visibleFlatChapters, activeChapterId]);

  // Auto-expand the section containing the active chapter
  useEffect(() => {
    const found = visibleFlatChapters.find((c) => c.id === activeChapterId);
    if (found) {
      setExpandedSections((prev) => prev[found.sectionId] ? prev : { ...prev, [found.sectionId]: true });
    }
  }, [activeChapterId, visibleFlatChapters]);

  const activeChapter = useMemo(
    () => visibleFlatChapters.find((c) => c.id === activeChapterId),
    [visibleFlatChapters, activeChapterId]
  );

  const currentIndex = visibleFlatChapters.findIndex((c) => c.id === activeChapterId);
  const prevChapter = currentIndex > 0 ? visibleFlatChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < visibleFlatChapters.length - 1 ? visibleFlatChapters[currentIndex + 1] : null;
  const visitedSet = useMemo(() => new Set(visitedChapters), [visitedChapters]);
  const visibleVisitedCount = useMemo(
    () => visibleFlatChapters.filter((c) => visitedSet.has(c.id)).length,
    [visibleFlatChapters, visitedSet]
  );
  const recommendedChapters = useMemo(() => {
    const unseen = visibleFlatChapters.filter((c) => !visitedSet.has(c.id));
    return (unseen.length ? unseen : visibleFlatChapters).slice(0, 4);
  }, [visibleFlatChapters, visitedSet]);
  const startChapter = recommendedChapters[0] || visibleFlatChapters[0];
  const palabrasSummary = useMemo(() => {
    const values = Object.values(palabrasProgress || {});
    const now = Date.now();
    return {
      seen: values.filter((v) => v?.seen).length,
      due: values.filter((v) => v?.seen && (v.dueAt || 0) <= now).length,
      mastered: values.filter((v) => v?.mastered).length,
    };
  }, [palabrasProgress]);
  const sectionProgress = useMemo(() => {
    return SECTIONS.map((section) => {
      const chapters = section.chapters.filter((c) => c.alwaysVisible || levelFilter === 'ALL' || c.level === levelFilter);
      const visited = chapters.filter((c) => visitedSet.has(c.id)).length;
      return { id: section.id, label: section.label, total: chapters.length, visited };
    }).filter((item) => item.total > 0);
  }, [levelFilter, visitedSet]);
  const palabrasChapter = visibleFlatChapters.find((c) => c.id === 'palabras-5000');
  const verbChapter = visibleFlatChapters.find((c) => c.sectionId === 'verbos') || visibleFlatChapters.find((c) => c.sectionId === 'verbos2');
  const readingChapter = visibleFlatChapters.find((c) => c.sectionId === 'lectura');

  function selectChapter(c) {
    setActiveChapterId(c.id);
    setActiveSectionId(c.sectionId || c.sectionId);
    setShowMemoria(false);
    setShowHome(false);
    setSidebarOpen(false);
    setResumeOffer(null);
    setVisitedChapters(prev => {
      if (prev.includes(c.id)) return prev;
      const next = [...prev, c.id];
      try { window.storage.set('visited-chapters', JSON.stringify(next)); } catch (_) {}
      return next;
    });
    // Persist last-read position
    try {
      window.storage.set('last-read', JSON.stringify({
        sectionId: c.sectionId,
        chapterId: c.id,
        title: c.title,
        savedAt: Date.now(),
      }));
    } catch (_) {}
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const main = document.querySelector('.book-main');
      if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function jumpToResume() {
    if (!resumeOffer) return;
    const sec = SECTIONS.find(s => s.id === resumeOffer.sectionId);
    const chap = sec?.chapters.find(c => c.id === resumeOffer.chapterId);
    if (chap) selectChapter({ ...chap, sectionId: sec.id });
    setResumeOffer(null);
  }
  function dismissResume() {
    setResumeOffer(null);
  }

  return (
    <div className="book-root">
      <AudioDebugPanel />
      <DictionaryPopup savedWords={savedWords} onSave={handleSaveWord} onRemove={handleRemoveWord} />
      <style>{styles}</style>

      {/* Mobile top bar */}
      <div className="mobile-bar">
        <button className="mobile-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="mobile-title">
          <span className="mobile-brand-script">Español</span>
        </div>
        <div className="font-controls">
          <button className="font-btn" onClick={() => bumpFont(-0.05)} aria-label="Smaller text" disabled={fontScale <= 0.85}>
            <span className="font-btn-small">A</span>
          </button>
          <button className="font-btn" onClick={() => bumpFont(0.05)} aria-label="Larger text" disabled={fontScale >= 1.3}>
            <span className="font-btn-large">A</span>
          </button>
        </div>
      </div>

      {/* Resume reading banner */}
      {resumeOffer && (
        <div className="resume-banner">
          <div className="resume-banner-text">
            <span className="resume-banner-label">Continuar leyendo</span>
            <span className="resume-banner-title">{resumeOffer.title}</span>
          </div>
          <div className="resume-banner-actions">
            <button className="resume-btn-primary" onClick={jumpToResume}>
              Continuar
              <ChevronRight size={14} />
            </button>
            <button className="resume-btn-dismiss" onClick={dismissResume} aria-label="Dismiss">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      <div className="book-shell">
        {/* SIDEBAR */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="brand">
              <div className="brand-mark">
                <BookOpen size={18} />
              </div>
              <div className="brand-text">
                <div className="brand-eyebrow">Un libro de</div>
                <div className="brand-title">Español</div>
              </div>
              <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            <nav className="section-nav">
              <div className={`section-group home-nav-item ${showHome ? 'active' : ''}`}>
                <button
                  className="section-btn home-section-btn"
                  onClick={() => { setShowHome(true); setShowMemoria(false); setSidebarOpen(false); }}
                >
                  <div className="section-icon-wrap home-icon-wrap">
                    <Compass size={18} className="section-icon" />
                  </div>
                  <div className="section-text">
                    <div className="section-label">Inicio</div>
                    <div className="section-sublabel">Plan diario</div>
                  </div>
                  <div className="section-meta">
                    <div className="section-count">{visitedChapters.length}</div>
                  </div>
                </button>
              </div>

              {SECTIONS.map((s) => {
                const visibleChapters = s.chapters.filter((c) => c.alwaysVisible || levelFilter === 'ALL' || c.level === levelFilter);
                const isActive = s.id === activeSectionId && !showMemoria && !showHome;
                const isExpanded = expandedSections[s.id];
                return (
                  <div key={s.id} className={`section-group ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <button
                      className="section-btn"
                      onClick={() => {
                        setExpandedSections((prev) => ({ ...prev, [s.id]: !prev[s.id] }));
                      }}
                      aria-expanded={isExpanded}
                    >
                      <div className="section-icon-wrap">
                        <SectionIcon id={s.id} size={18} className="section-icon" />
                      </div>
                      <div className="section-text">
                        <div className="section-label">{s.label}</div>
                        <div className="section-sublabel">{s.sublabel}</div>
                      </div>
                      <div className="section-meta">
                        <div className="section-count">{visibleChapters.length}</div>
                        <ChevronDown size={16} className={`section-chevron ${isExpanded ? 'open' : ''}`} />
                      </div>
                    </button>
                    {isExpanded && visibleChapters.length > 0 && (
                      <ul className="chapter-list">
                        {visibleChapters.map((c) => (
                          <li key={c.id}>
                            <button
                              className={`chapter-btn ${activeChapterId === c.id && !showMemoria && !showHome ? 'active' : ''}`}
                              onClick={() => { setShowMemoria(false); selectChapter({ ...c, sectionId: s.id }); }}
                            >
                              <span className="chapter-btn-level">{c.level}</span>
                              <span className="chapter-btn-title">{c.title}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

              {/* Memoria — special nav item */}
              <div className={`section-group memoria-nav-item ${showMemoria ? 'active' : ''}`}>
                <button
                  className="section-btn memoria-section-btn"
                  onClick={() => { setShowHome(false); setShowMemoria(true); setSidebarOpen(false); }}
                >
                  <div className="section-icon-wrap memoria-icon-wrap">
                    <Bookmark size={18} className="section-icon" />
                  </div>
                  <div className="section-text">
                    <div className="section-label">Memoria</div>
                    <div className="section-sublabel">Mis palabras guardadas</div>
                  </div>
                  <div className="section-meta">
                    <div className="section-count memoria-count">{savedWords.length}</div>
                  </div>
                </button>
              </div>
            </nav>

            <div className="sidebar-footer">
              <div className="sig">— para Othman</div>
            </div>
          </div>
          {sidebarOpen && <div className="scrim" onClick={() => setSidebarOpen(false)} />}
        </aside>

        {/* MAIN */}
        <main className="book-main">
          <div className={`book-page ${showHome ? 'home-page' : ''}`}>
            {showHome ? (
              <HomeView
                totalChapters={visibleFlatChapters.length}
                visitedCount={visibleVisitedCount}
                savedWordsCount={savedWords.length}
                levelFilter={levelFilter}
                palabrasSummary={palabrasSummary}
                sectionProgress={sectionProgress}
                recommendations={recommendedChapters}
                onStart={() => startChapter && selectChapter(startChapter)}
                onOpenMemoria={() => { setShowHome(false); setShowMemoria(true); }}
                onOpenPalabras={() => palabrasChapter && selectChapter(palabrasChapter)}
                onOpenVerb={() => verbChapter && selectChapter(verbChapter)}
                onOpenReading={() => readingChapter && selectChapter(readingChapter)}
                onSelectChapter={selectChapter}
              />
            ) : showMemoria ? (
              <MemoriaView
                savedWords={savedWords}
                onRemove={handleRemoveWord}
                onClear={handleClearWords}
                onUpdateWord={handleUpdateWord}
              />
            ) : activeChapter ? (
              <ChapterContent
                chapter={activeChapter}
                sectionId={activeSectionId}
                onSaveWord={handleSaveWord}
                palabrasProgress={palabrasProgress}
                onPalabrasProgressChange={handlePalabrasProgressChange}
              />
            ) : (
              <div className="empty">
                <Sparkles size={28} />
                <p>No hay capítulos en este nivel.</p>
              </div>
            )}

            {/* Chapter navigation (prev / next) */}
            {!showHome && !showMemoria && (
            <nav className="chapter-nav">
              {prevChapter ? (
                <button className="nav-btn prev" onClick={() => selectChapter(prevChapter)}>
                  <ChevronLeft size={16} />
                  <div>
                    <div className="nav-eyebrow">Anterior</div>
                    <div className="nav-title">{prevChapter.title}</div>
                  </div>
                </button>
              ) : <div />}
              {nextChapter ? (
                <button className="nav-btn next" onClick={() => selectChapter(nextChapter)}>
                  <div style={{ textAlign: 'right' }}>
                    <div className="nav-eyebrow">Siguiente</div>
                    <div className="nav-title">{nextChapter.title}</div>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ) : <div />}
            </nav>
            )}
          </div>

          {/* CEFR LEVEL FILTER (the bottom of your sketch) */}
          <footer className="level-bar">
            <div className="level-bar-inner">
              <div className="level-bar-label"><Bookmark size={14} /> Nivel</div>
              <div className="level-pills">
                <button
                  className={`level-pill ${levelFilter === 'ALL' ? 'active' : ''}`}
                  onClick={() => setLevelFilter('ALL')}
                >Todos</button>
                {LEVELS.map((lv) => (
                  <button
                    key={lv}
                    className={`level-pill ${levelFilter === lv ? 'active' : ''}`}
                    onClick={() => setLevelFilter(lv)}
                  >{lv}</button>
                ))}
              </div>
              <div className="level-bar-counter">
                {showHome
                  ? `${visibleVisitedCount} / ${visibleFlatChapters.length}`
                  : currentIndex >= 0 ? `${currentIndex + 1} / ${visibleFlatChapters.length}` : '—'}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// =============================================================
// STYLES — editorial / book aesthetic
// =============================================================
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,500;1,7..72,600&family=Caveat:wght@500;600&display=swap');

:root {
  --paper: #ffffff;
  --paper-light: #ffffff;
  --ink: #1c1c1a;
  --ink-soft: #3a3a36;
  --ink-mute: #6e6a60;
  --rule: #d8cfb9;
  --rule-soft: #ebe3cd;
  --green: #2f5d3a;
  --green-soft: #4d7a55;
  --green-tint: #e3ebde;
  --sienna: #b1502a;
  --sienna-deep: #8b3c1d;
  --sienna-tint: #f4e2d4;
  --red: #b03030;
  --blue: #1f4f8b;
  --shadow: 0 1px 0 rgba(0,0,0,0.04), 0 12px 30px -18px rgba(60, 50, 30, 0.25);
  --font-scale: 1;
}

.book-root {
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Literata', Georgia, serif;
  font-size: calc(20px * var(--font-scale));
  line-height: 1.7;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Apply font scale to all reading-related text */
.reading-paragraph,
.fold-body .reading-paragraph,
.bio-paragraph,
.poem-stanza-es,
.poem-stanza-en,
.poem-intro-note,
.gl-text,
.gl-ex-es,
.gl-ex-en,
.lesson-text,
.lesson-ex-es,
.lesson-ex-en,
.chapter-intro,
.chapter-subtitle {
  font-size: calc(1em * var(--font-scale)) !important;
}

/* Mobile bar — always visible (font controls + menu) */
.mobile-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-light);
  position: sticky; top: 0; z-index: 30;
  gap: 8px;
}
.mobile-brand-script {
  font-family: 'Caveat', cursive;
  font-size: 26px;
  color: var(--green);
}
.mobile-btn {
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 6px 8px;
  color: var(--ink);
  cursor: pointer;
  touch-action: manipulation;
}

/* Font controls in the top bar */
.font-controls {
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 2px;
}
.font-btn {
  width: 32px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: var(--ink);
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  transition: background 120ms;
  touch-action: manipulation;
}
.font-btn:hover:not(:disabled) { background: var(--rule-soft); }
.font-btn:active:not(:disabled) { background: var(--green-tint); }
.font-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.font-btn-small { font-size: 14px; }
.font-btn-large { font-size: 20px; }

/* On wider screens, hide menu button if sidebar is always visible */
@media (min-width: 1101px) {
  .mobile-bar .mobile-btn { display: none; }
  .mobile-bar { padding: 8px 20px; }
}

/* ===== Resume Reading Banner ===== */
.resume-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 18px;
  background: var(--green);
  color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  top: 50px;
  z-index: 25;
  animation: resume-slide-down 280ms cubic-bezier(0.4, 0.2, 0.2, 1);
}
@keyframes resume-slide-down {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
.resume-banner-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
.resume-banner-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 700;
}
.resume-banner-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  font-style: italic;
  letter-spacing: 0.005em;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.resume-banner-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.resume-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #ffffff;
  color: var(--green);
  font-family: 'Literata', Georgia, serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 120ms;
  touch-action: manipulation;
}
.resume-btn-primary:hover { background: var(--paper-light); }
.resume-btn-primary:active { background: var(--paper); }
.resume-btn-dismiss {
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  transition: background 120ms;
  touch-action: manipulation;
}
.resume-btn-dismiss:hover { background: rgba(255,255,255,0.28); }

@media (max-width: 700px) {
  .resume-banner { padding: 12px 14px; top: 48px; }
  .resume-banner-title { font-size: 18px; }
  .resume-btn-primary { font-size: 13px; padding: 7px 12px; }
}

/* ===== Floating Translate button (appears on text selection) ===== */
.dict-floating-btn {
  position: absolute;
  transform: translate(-50%, -100%);
  z-index: 9998;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--ink);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15);
  cursor: pointer;
  animation: float-btn-appear 160ms ease-out;
  touch-action: manipulation;
  white-space: nowrap;
}
.dict-floating-btn::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--ink);
  border-bottom: 0;
}
.dict-floating-btn:hover { background: #2a2a26; }
.dict-floating-btn:active { transform: translate(-50%, -100%) scale(0.97); }
@keyframes float-btn-appear {
  from { opacity: 0; transform: translate(-50%, calc(-100% + 6px)); }
  to { opacity: 1; transform: translate(-50%, -100%); }
}

.book-shell {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
}
@media (max-width: 1100px) {
  .book-shell { grid-template-columns: 1fr; }
}

/* SIDEBAR */
.sidebar {
  border-right: 1px solid var(--rule);
  background: var(--paper-light);
  position: relative;
  z-index: 20;
}
.sidebar-inner {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.scrim { display: none; }
@media (max-width: 1100px) {
  .sidebar {
    position: fixed;
    inset: 0;
    transform: translateX(-100%);
    transition: transform 220ms ease;
    z-index: 50;
    pointer-events: none;
  }
  .sidebar.open { transform: translateX(0); pointer-events: auto; }
  .sidebar-inner {
    width: 84%;
    max-width: 320px;
    background: var(--paper-light);
    height: 100vh;
    box-shadow: var(--shadow);
    position: relative;
    z-index: 2;
  }
  .scrim {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(28, 28, 26, 0.4);
    z-index: 1;
  }
}

/* Touch-friendly buttons everywhere (especially e-ink) */
.chapter-btn,
.section-btn,
.level-pill,
.nav-btn,
.mobile-btn,
.sidebar-close {
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(177, 80, 42, 0.18);
  user-select: none;
  -webkit-user-select: none;
}
.chapter-btn:active {
  background: var(--sienna-tint) !important;
  color: var(--sienna-deep) !important;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 22px 18px;
  border-bottom: 1px solid var(--rule);
  position: relative;
}
.brand-mark {
  width: 36px; height: 36px;
  border-radius: 4px;
  background: var(--green);
  color: var(--paper-light);
  display: grid; place-items: center;
  box-shadow: var(--shadow);
}
.brand-eyebrow {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.brand-title {
  font-family: 'Caveat', cursive;
  font-size: 30px;
  line-height: 1;
  color: var(--green);
  margin-top: 2px;
}
.sidebar-close {
  margin-left: auto;
  display: none;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 4px 6px;
  cursor: pointer;
  color: var(--ink);
}
@media (max-width: 1100px) {
  .sidebar-close { display: inline-flex; }
}

.section-nav {
  flex: 1;
  padding: 10px 12px 24px;
  overflow-y: auto;
}
.section-group { margin-bottom: 4px; }
.section-btn {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 10px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: var(--ink-soft);
  transition: background 150ms ease;
  font-family: inherit;
  touch-action: manipulation;
}
.section-btn:hover { background: rgba(47, 93, 58, 0.06); }
.section-group.active .section-btn { background: var(--green-tint); }

/* Icon wrap — rounded square, elevates the sidebar feel */
.section-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  color: var(--green);
  flex-shrink: 0;
  transition: background 150ms, border-color 150ms, color 150ms;
}
.section-btn:hover .section-icon-wrap {
  background: var(--paper);
  border-color: var(--green);
}
.section-group.active .section-icon-wrap {
  background: var(--green);
  border-color: var(--green);
  color: #ffffff;
}
.memoria-nav-item.active .section-icon-wrap {
  background: var(--ink);
  border-color: var(--ink);
  color: #ffffff;
}
.section-icon { display: block; }

.section-text {
  flex: 1;
  min-width: 0;
}
.section-label {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 19px;
  font-weight: 600;
  color: var(--green);
  letter-spacing: 0.01em;
}
.section-group.active .section-label { color: var(--sienna-deep); }
.memoria-nav-item.active .section-label { color: var(--ink); }
.section-sublabel {
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}
.section-count {
  font-size: 12px;
  color: var(--ink-mute);
  background: var(--paper);
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid var(--rule);
  flex-shrink: 0;
}
.section-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-chevron {
  color: var(--ink-mute);
  transition: transform 200ms ease;
  flex-shrink: 0;
}
.section-chevron.open {
  transform: rotate(180deg);
}
.section-group.collapsed .chapter-list {
  display: none;
}
.chapter-list {
  list-style: none;
  margin: 4px 0 8px;
  padding: 0 0 0 8px;
  border-left: 1px dashed var(--rule);
  margin-left: 12px;
}
.chapter-btn {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 11px 12px;
  border-radius: 4px;
  display: flex;
  gap: 12px;
  align-items: baseline;
  cursor: pointer;
  color: var(--ink-soft);
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  transition: color 120ms ease, background 120ms ease;
}
.chapter-btn:hover { background: rgba(177, 80, 42, 0.06); color: var(--ink); }
.chapter-btn.active {
  color: var(--sienna-deep);
  background: var(--sienna-tint);
  font-weight: 700;
}
.chapter-btn-level {
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--green);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  flex-shrink: 0;
  width: 26px;
}
.chapter-btn.active .chapter-btn-level { color: var(--sienna); }

.sidebar-footer {
  border-top: 1px solid var(--rule);
  padding: 14px 22px 22px;
}
.sig {
  font-family: 'Caveat', cursive;
  font-size: 18px;
  color: var(--ink-mute);
}

/* MAIN */
.book-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  height: 100vh;
}
.book-page {
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px 48px;
  width: 100%;
}
.book-page.home-page {
  max-width: 920px;
}
@media (max-width: 700px) {
  .book-page { padding: 22px 8px 36px; }
}

.home-dashboard {
  max-width: 840px;
}
.home-hero {
  padding: 10px 0 26px;
  border-bottom: 1px solid var(--rule);
}
.home-kicker,
.home-section-heading {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
}
.home-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(48px, 8vw, 86px);
  line-height: 0.95;
  color: var(--ink);
  margin: 18px 0 16px;
  font-weight: 700;
}
.home-subtitle {
  max-width: 620px;
  font-size: 22px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}
.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}
.home-primary,
.home-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Literata', Georgia, serif;
  font-weight: 700;
  touch-action: manipulation;
}
.home-primary {
  background: var(--green);
  color: #ffffff;
  border: 1px solid var(--green);
}
.home-primary:hover { background: #244a2e; }
.home-secondary {
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--rule);
}
.home-secondary:hover { border-color: var(--green); color: var(--green); }
.home-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 24px 0 30px;
}
.home-stat {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 16px;
  background: var(--paper-light);
}
.home-stat-label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 6px;
}
.home-stat strong {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 34px;
  line-height: 1;
  color: var(--sienna-deep);
}
.home-stat span:last-child {
  display: block;
  margin-top: 6px;
  color: var(--ink-soft);
  font-size: 14px;
}
.home-path {
  margin-top: 28px;
}
.home-daily,
.home-progress-map {
  margin-top: 28px;
}
.home-daily-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;
}
.home-daily-grid button {
  min-height: 126px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  text-align: left;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  touch-action: manipulation;
}
.home-daily-grid button:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.home-daily-grid span {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sienna);
  font-weight: 700;
}
.home-daily-grid strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 24px;
  line-height: 1.05;
  color: var(--ink);
}
.home-daily-grid em {
  color: var(--ink-mute);
  font-size: 13px;
  line-height: 1.35;
}
.home-progress-list {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}
.home-progress-row {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 12px 14px;
  background: var(--paper-light);
}
.home-progress-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--ink);
  font-size: 14px;
  margin-bottom: 8px;
}
.home-progress-top strong {
  color: var(--ink-mute);
}
.home-progress-track {
  height: 6px;
  border-radius: 999px;
  background: var(--rule-soft);
  overflow: hidden;
}
.home-progress-track span {
  display: block;
  height: 100%;
  background: var(--green);
  border-radius: inherit;
}
.home-recommendations {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}
.home-rec {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  text-align: left;
  border: 1px solid var(--rule);
  background: var(--paper);
  border-radius: 8px;
  padding: 14px 16px;
  color: var(--ink);
  cursor: pointer;
  touch-action: manipulation;
}
.home-rec:hover {
  border-color: var(--green);
  background: var(--green-tint);
}
.home-rec-index {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px;
  color: var(--sienna);
  font-weight: 700;
}
.home-rec-main {
  min-width: 0;
}
.home-rec-title,
.home-rec-meta {
  display: block;
}
.home-rec-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.15;
}
.home-rec-meta {
  margin-top: 2px;
  color: var(--ink-mute);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
@media (max-width: 960px) {
  .home-stats,
  .home-daily-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 700px) {
  .home-title { font-size: 48px; }
  .home-subtitle { font-size: 18px; }
  .home-stats,
  .home-daily-grid { grid-template-columns: 1fr; }
}

.chapter-header { margin-bottom: 32px; }
.chapter-icon-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.chapter-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green-tint);
  border: 1px solid rgba(47, 93, 58, 0.18);
  color: var(--green);
  flex-shrink: 0;
}
.chapter-level-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sienna);
  margin-bottom: 0;
  font-weight: 600;
}
.chapter-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 44px;
  line-height: 1.05;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 8px;
  letter-spacing: -0.005em;
}
.chapter-subtitle {
  font-style: italic;
  color: var(--ink-mute);
  font-size: 18px;
  margin: 0;
}
.chapter-rule {
  margin-top: 22px;
  width: 64px;
  height: 2px;
  background: var(--green);
}

.chapter-intro {
  font-size: 20px;
  line-height: 1.7;
  color: var(--ink-soft);
  margin: 0 0 36px;
}
.drop-cap::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 64px;
  float: left;
  line-height: 0.85;
  margin: 6px 10px 0 0;
  color: var(--green);
}

.block { margin: 32px 0; }
.block-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: var(--green);
  font-weight: 600;
  margin: 0 0 16px;
  letter-spacing: 0.005em;
}
.inline-icon { vertical-align: -2px; margin-right: 6px; color: var(--green-soft); }

/* Conjugation */
.conjugation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}
.conjugation-card {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 16px 18px;
}
.conjugation-verb {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  color: var(--sienna-deep);
  margin-bottom: 10px;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 6px;
}
.conjugation-list {
  list-style: none;
  padding: 0; margin: 0;
}
.conjugation-list li {
  padding: 4px 0;
  font-size: 17px;
  color: var(--ink-soft);
  font-feature-settings: "liga", "kern";
}

/* Examples */
.examples-list {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column;
  gap: 14px;
}
.example-item {
  border-left: 2px solid var(--green);
  padding: 4px 0 4px 16px;
}
.example-es {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: var(--ink);
  line-height: 1.45;
}
.example-en {
  font-size: 18px;
  font-style: italic;
  margin: 5px 0 0;
  color: var(--ink);
  font-weight: 700;
  line-height: 1.5;
}

/* Rule */
.rule-list {
  margin: 0; padding: 0;
  display: grid;
  gap: 10px;
}
.rule-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--rule-soft);
}
.rule-row dt {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  color: var(--sienna-deep);
  font-size: 16px;
}
.rule-row dd {
  margin: 0;
  color: var(--ink-soft);
  font-size: 16px;
}
@media (max-width: 600px) {
  .rule-row { grid-template-columns: 1fr; gap: 4px; }
}

/* Reading */
.reading-block { padding: 8px 0; }
.reading-paragraph {
  font-size: 20px;
  line-height: 1.85;
  text-align: justify;
  text-justify: inter-word;
  margin: 0 0 18px;
  color: var(--ink);
  hyphens: none;
  -webkit-hyphens: none;
}
.reading-paragraph:first-child::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 56px;
  float: left;
  line-height: 0.85;
  margin: 6px 8px 0 0;
  color: var(--sienna);
}

/* Glossary */
.glossary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 6px 24px;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 16px 18px;
}
.glossary-row {
  display: flex;
  gap: 8px;
  align-items: baseline;
  padding: 5px 0;
  font-size: 17px;
  border-bottom: 1px dotted var(--rule);
}
.glossary-row:last-child { border-bottom: none; }
.glossary-es { font-weight: 600; color: var(--green); }
.glossary-dash { color: var(--ink-mute); }
.glossary-en { color: var(--ink-soft); font-style: italic; }

/* Vocab */
.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0 28px;
}
.vocab-row {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 1px solid var(--rule-soft);
  font-size: 17px;
}
.vocab-es { color: var(--green); font-weight: 600; }
.vocab-en { color: var(--ink-mute); font-style: italic; }

/* Palabras lab */
.palabras-lab {
  margin-top: 28px;
}
.palabras-toolbar {
  display: grid;
  grid-template-columns: 1fr minmax(220px, 280px);
  gap: 12px;
  align-items: stretch;
  margin-bottom: 16px;
}
.palabras-group-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
.palabras-tab {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink-soft);
  border-radius: 8px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  touch-action: manipulation;
}
.palabras-tab:hover {
  border-color: var(--green);
}
.palabras-tab.active {
  background: var(--green-tint);
  border-color: var(--green);
}
.palabras-tab span {
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--green);
  overflow-wrap: anywhere;
}
.palabras-tab strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 24px;
  line-height: 1;
  color: var(--sienna-deep);
}
.palabras-search {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--paper-light);
}
.palabras-search span {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 4px;
}
.palabras-search input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
  font-size: 16px;
  min-width: 0;
}
.palabras-stage {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 18px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 18px;
  background: var(--paper-light);
  margin-bottom: 14px;
}
.palabras-stage-kicker {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
}
.palabras-stage h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 32px;
  line-height: 1.1;
  margin: 6px 0 8px;
  color: var(--ink);
}
.palabras-stage p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.55;
}
.palabras-stage-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(72px, 1fr));
  gap: 8px;
  align-self: stretch;
}
.palabras-stage-stats div {
  border-left: 1px solid var(--rule);
  padding-left: 12px;
}
.palabras-stage-stats span {
  display: block;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.palabras-stage-stats strong {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 28px;
  line-height: 1.1;
  color: var(--sienna-deep);
  margin-top: 4px;
}
.palabras-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.palabras-action-btn,
.palabra-save {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink);
  border-radius: 6px;
  min-height: 34px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
  touch-action: manipulation;
}
.palabras-action-btn:hover,
.palabra-save:hover {
  border-color: var(--green);
  color: var(--green);
}
.palabras-action-btn.active {
  background: var(--ink);
  border-color: var(--ink);
  color: #ffffff;
}
.palabras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}
.palabra-card {
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  min-height: 164px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.palabra-card.revealed {
  border-color: var(--green);
}
.palabra-main {
  flex: 1;
  border: none;
  background: transparent;
  text-align: left;
  padding: 14px;
  cursor: pointer;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 8px;
  touch-action: manipulation;
}
.palabra-rank {
  color: var(--ink-mute);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.palabra-es {
  color: var(--green);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 30px;
  line-height: 1.05;
  font-weight: 700;
  overflow-wrap: anywhere;
}
.palabra-en {
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.35;
  font-style: italic;
  overflow-wrap: anywhere;
}
.palabra-example {
  border-top: 1px dotted var(--rule-soft);
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 13px;
  color: var(--ink);
  line-height: 1.35;
}
.palabra-example em {
  color: var(--ink-mute);
  font-size: 12px;
}
.palabra-card-actions {
  border-top: 1px solid var(--rule-soft);
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.palabra-save {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.palabra-review-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 0 10px 8px;
}
.palabra-review-actions button {
  border: 1px solid var(--rule-soft);
  background: var(--paper-light);
  color: var(--ink-soft);
  border-radius: 5px;
  font-size: 11px;
  padding: 5px 2px;
  cursor: pointer;
  touch-action: manipulation;
}
.palabra-review-actions button:hover {
  border-color: var(--green);
  color: var(--green);
}
.palabra-review-state {
  padding: 0 10px 9px;
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.palabras-browser {
  margin-top: 18px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  overflow: hidden;
  background: var(--paper);
}
.palabras-browser-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--rule);
  background: var(--paper-light);
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.palabras-browser-head strong {
  color: var(--green);
}
.palabras-virtual-list {
  overflow-y: auto;
}
.palabras-virtual-row {
  display: grid;
  grid-template-columns: 70px 1fr 1.4fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid var(--rule-soft);
  font-size: 14px;
}
.palabras-virtual-row strong {
  color: var(--green);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px;
  line-height: 1.1;
}
.palabras-virtual-row button {
  border: 1px solid var(--rule);
  background: transparent;
  border-radius: 5px;
  padding: 5px 8px;
  cursor: pointer;
  color: var(--ink-mute);
}
.palabras-virtual-row button:hover {
  border-color: var(--green);
  color: var(--green);
}
.palabras-empty {
  border: 1px dashed var(--rule);
  border-radius: 8px;
  padding: 28px;
  display: grid;
  place-items: center;
  gap: 8px;
  color: var(--ink-mute);
  text-align: center;
}
@media (max-width: 820px) {
  .palabras-toolbar,
  .palabras-stage {
    grid-template-columns: 1fr;
  }
  .palabras-stage-stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .palabras-stage-stats div {
    border-left: none;
    border-top: 1px solid var(--rule);
    padding: 10px 0 0;
  }
}
@media (max-width: 620px) {
  .palabras-group-tabs,
  .palabras-stage-stats {
    grid-template-columns: 1fr;
  }
  .palabra-card {
    min-height: 150px;
  }
  .palabras-virtual-row {
    grid-template-columns: 52px 1fr;
  }
  .palabras-virtual-row span:nth-child(3),
  .palabras-virtual-row button {
    grid-column: 2;
  }
}

/* Phrase list */
.phrase-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 14px;
}
.phrase-item {
  display: flex; gap: 16px;
  align-items: flex-start;
}
.phrase-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--sienna);
  letter-spacing: 0.1em;
  min-width: 28px;
  padding-top: 4px;
  border-right: 1px solid var(--rule);
  text-align: right;
  padding-right: 10px;
}
.phrase-es { margin: 0; font-size: 18px; color: var(--ink); }
.phrase-en { margin: 4px 0 0; font-size: 16px; font-style: italic; color: var(--ink-mute); }

/* Steps */
.steps-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 18px;
}
.step-item {
  display: flex; gap: 18px;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 18px 20px;
}
.step-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--sienna);
  line-height: 1;
  min-width: 30px;
}
.step-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  margin: 0 0 4px;
  color: var(--green);
  font-weight: 600;
}
.step-text { margin: 0; color: var(--ink-soft); font-size: 15.5px; }

/* Big takeaways */
.big-takeaways {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.big-takeaway-card {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 22px;
  position: relative;
  overflow: hidden;
}
.big-takeaway-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 3px;
  background: var(--green);
}
.big-takeaway-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  color: var(--sienna);
  font-weight: 600;
  margin-bottom: 8px;
}
.big-takeaway-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  margin: 0 0 8px;
  color: var(--ink);
  font-weight: 600;
  line-height: 1.25;
}
.big-takeaway-text {
  margin: 0;
  font-size: 14.5px;
  color: var(--ink-soft);
  line-height: 1.55;
}

/* Tip & Takeaway */
.tip-block {
  background: var(--green-tint);
  border-left: 3px solid var(--green);
  padding: 16px 20px 16px 18px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  border-radius: 0 4px 4px 0;
}
.tip-icon { color: var(--green); flex-shrink: 0; margin-top: 2px; }
.tip-block p { margin: 0; font-size: 15.5px; color: var(--ink-soft); font-style: italic; }

.takeaway-block {
  background: var(--sienna-tint);
  border: 1px solid #e8c8af;
  border-radius: 4px;
  padding: 18px 22px;
  margin-top: 36px;
}
.takeaway-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  margin-bottom: 8px;
  font-weight: 600;
}
.takeaway-block p {
  margin: 0;
  font-size: 16px;
  color: var(--ink);
  line-height: 1.6;
}

/* Chapter nav */
.chapter-nav {
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 14px 16px;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  color: var(--ink-soft);
  transition: background 150ms ease, border-color 150ms ease;
}
.nav-btn:hover {
  background: var(--paper-light);
  border-color: var(--green);
}
.nav-btn.next { justify-content: flex-end; }
.nav-eyebrow {
  font-size: 10.5px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 2px;
}
.nav-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--green);
  font-weight: 600;
}

/* Level bar (the bottom of your sketch) */
.level-bar {
  border-top: 1px solid var(--rule);
  background: var(--paper-light);
  position: sticky;
  bottom: 0;
}
.level-bar-inner {
  max-width: 720px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
}
@media (max-width: 700px) {
  .level-bar-inner { padding: 8px 8px; gap: 8px; }
}
.level-bar-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 600;
}
.level-pills {
  display: flex;
  gap: 6px;
  flex: 1;
  justify-content: center;
}
.level-pill {
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 5px 14px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 13.5px;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 150ms ease;
}
.level-pill:hover { border-color: var(--green); color: var(--green); }
.level-pill.active {
  background: var(--green);
  color: var(--paper-light);
  border-color: var(--green);
}
.level-bar-counter {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  min-width: 50px;
  text-align: right;
}

.empty {
  text-align: center;
  padding: 80px 20px;
  color: var(--ink-mute);
}
.empty p { font-style: italic; margin-top: 8px; }

/* Better default scrollbars on webkit */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(120, 100, 70, 0.18);
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover { background: rgba(120, 100, 70, 0.32); }

/* ===== VERB TABLE (Top 10) — small-screen e-ink layout ===== */
.verb-table-block {
  margin: 24px 0 48px;
}
.participles {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 16px 20px 14px;
  margin-bottom: 30px;
}
.participles-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 600;
  margin-bottom: 10px;
}
.participles-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.participles-row {
  display: flex;
  gap: 16px;
  font-size: 17px;
  align-items: baseline;
}
.participles-key {
  width: 92px;
  color: var(--ink-mute);
  font-style: italic;
}
.participles-val {
  color: var(--ink);
  font-weight: 700;
}
.verb-table-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  color: var(--ink);
  font-weight: 600;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 8px;
  margin: 28px 0 22px;
  letter-spacing: 0.005em;
}
.verb-table-title em {
  color: var(--green);
  font-style: italic;
}
.tense-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.tense-block {
  break-inside: avoid;
}
.tense-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--sienna-deep);
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.tense-rows {
  display: grid;
  grid-template-columns: 150px 1fr;
  row-gap: 10px;
  column-gap: 22px;
  border-top: 1px solid var(--rule);
  padding-top: 12px;
}
.tense-pronoun {
  color: var(--ink-mute);
  font-size: 18px;
  padding: 6px 0;
  font-style: italic;
}
.tense-form {
  font-size: 22px;
  font-family: 'Literata', Georgia, serif;
  color: var(--ink);
  padding: 6px 0;
  font-feature-settings: "liga", "kern";
  letter-spacing: 0.005em;
  font-weight: 700;
}
.tense-form .irreg,
.participles-val .irreg {
  color: var(--red);
  font-weight: 700;
}
.tense-form .ending,
.participles-val .ending {
  color: var(--blue);
  font-weight: 700;
}
/* Endings inside lesson-table cells (used in the Tiempos chapter) */
.lesson-table .ending {
  color: var(--blue);
  font-weight: 700;
}
.lesson-table .irreg {
  color: var(--red);
  font-weight: 700;
}
.verb-legend {
  margin-top: 28px;
  padding-top: 14px;
  border-top: 1px dashed var(--rule);
  font-size: 13px;
  color: var(--ink-mute);
  font-style: italic;
  text-align: center;
}
.verb-legend .irreg { color: var(--red); font-weight: 700; }

/* Verb-table chapters: skip the drop-cap (no intro paragraph anyway) */
.chapter-body:has(.verb-table-block) .chapter-rule { background: var(--sienna); }

/* Smaller-screen tightening for the BOOX */
@media (max-width: 700px) {
  .tense-rows { grid-template-columns: 120px 1fr; column-gap: 14px; row-gap: 8px; }
  .tense-pronoun { font-size: 17px; padding: 5px 0; }
  .tense-form { font-size: 21px; padding: 5px 0; }
  .participles-key { width: 88px; font-size: 17px; }
  .participles-val { font-size: 18px; }
  .participles-row { font-size: 18px; }
}

/* ===== Side-by-side tense table (e.g., HABER's Presente · Pretérito · Imperfecto) ===== */
.tense-group-table {
  width: 100%;
  border-collapse: collapse;
  margin: 6px 0 4px;
  table-layout: fixed;
}
.tense-group-table th,
.tense-group-table td {
  text-align: left;
  vertical-align: baseline;
  padding: 10px 16px;
  border-left: 1px solid var(--rule);
}
.tense-group-table th:first-child,
.tense-group-table td:first-child {
  border-left: none;
  padding-left: 0;
  padding-right: 18px;
}
.tense-group-table thead th {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--sienna-deep);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 13px;
  padding-top: 0;
}
.tense-group-table tbody th.tg-pronoun {
  font-family: 'Literata', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  color: var(--ink-mute);
  font-size: 18px;
  white-space: nowrap;
  padding-right: 18px;
}
.tense-group-table tbody td.tg-form {
  font-family: 'Literata', Georgia, serif;
  font-size: 22px;
  color: var(--ink);
  font-feature-settings: "liga", "kern";
  letter-spacing: 0.005em;
  font-weight: 700;
}
.tense-group-table tbody tr + tr th,
.tense-group-table tbody tr + tr td {
  border-top: 1px dotted var(--rule-soft);
}
.tense-group-table .irreg {
  color: var(--red);
  font-weight: 700;
}
.tense-group-table .ending {
  color: var(--blue);
  font-weight: 700;
}

@media (max-width: 700px) {
  .tense-group-table th,
  .tense-group-table td { padding: 9px 12px; }
  .tense-group-table th:first-child,
  .tense-group-table td:first-child { padding-right: 14px; }
  .tense-group-table tbody th.tg-pronoun { font-size: 17px; padding-right: 14px; }
  .tense-group-table tbody td.tg-form { font-size: 21px; }
  .tense-group-table thead th { font-size: 14px; letter-spacing: 0.14em; }
}

/* Inline example pair — short Spanish + (translation) on the same line */
.inline-pair {
  display: block;
}
.inline-pair .inline-en {
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  margin-left: 4px;
  display: inline;
}

/* ===== VERB-USES (dictionary-style senses) ===== */
.verb-uses-block {
  margin: 48px 0 24px;
  border-top: 2px solid var(--ink);
  padding-top: 28px;
}
.verb-uses-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  font-weight: 700;
  margin: 0 0 24px;
}
.vu-category {
  margin-bottom: 32px;
  break-inside: avoid;
}
.vu-category-head {
  margin-bottom: 16px;
  border-bottom: 1px dotted var(--rule);
  padding-bottom: 8px;
}
.vu-category-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: var(--ink);
  font-weight: 700;
  letter-spacing: 0.01em;
  font-style: italic;
}
.vu-category-note {
  font-size: 16px;
  color: var(--ink);
  font-style: italic;
  margin-top: 4px;
  letter-spacing: 0.01em;
}
.vu-senses {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 4px;
}
.vu-sense {
  display: grid;
  grid-template-columns: 36px 1fr;
  column-gap: 14px;
  align-items: baseline;
  break-inside: avoid;
}
.vu-sense-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--sienna);
  text-align: right;
  letter-spacing: 0.04em;
  padding-top: 2px;
}
.vu-sense-body {
  border-left: 1px solid var(--rule);
  padding-left: 14px;
}
.vu-sense-meaning {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  font-weight: 600;
  color: var(--sienna-deep);
  letter-spacing: 0.01em;
  line-height: 1.4;
  font-style: italic;
}
.vu-sense-subnote {
  font-size: 16px;
  color: var(--ink);
  font-style: italic;
  margin-top: 4px;
  line-height: 1.45;
}
.vu-examples {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vu-examples li {
  padding: 4px 0 4px 0;
}
.vu-examples li + li {
  border-top: 1px dotted var(--rule-soft);
  padding-top: 10px;
}
.vu-ex-es {
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
  line-height: 1.5;
}
.vu-ex-en {
  font-size: 18px;
  color: var(--ink);
  font-style: italic;
  margin-top: 5px;
  line-height: 1.5;
  font-weight: 700;
}

@media (max-width: 700px) {
  .verb-uses-block { padding-top: 22px; margin: 36px 0 16px; }
  .verb-uses-heading { font-size: 12px; letter-spacing: 0.22em; margin-bottom: 18px; }
  .vu-category-label { font-size: 20px; }
  .vu-category-note { font-size: 15px; }
  .vu-sense { grid-template-columns: 30px 1fr; column-gap: 10px; }
  .vu-sense-num { font-size: 15px; }
  .vu-sense-body { padding-left: 12px; }
  .vu-sense-meaning { font-size: 18px; }
  .vu-sense-subnote { font-size: 15px; }
  .vu-ex-es { font-size: 21px; }
  .vu-ex-en { font-size: 17px; }
}

/* ===== Foldable Grammar (Gramática section) ===== */
/* ===== Foldable Biographies (Lectura — Dos Biografías) ===== */
/* ===== Foldable Poems (Lectura — Poemas) ===== */
.foldable-poems {
  margin: 24px 0;
  border-top: 2px solid var(--ink);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.poem-item {
  border: 1px solid var(--rule);
  border-radius: 4px;
  overflow: hidden;
}
.poem-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(28, 28, 26, 0.06);
}
.poem-toggle:hover { background: rgba(28, 28, 26, 0.03); }
.poem-toggle:active { background: var(--rule-soft); }
.poem-item.open .poem-toggle {
  background: var(--ink);
}
.poem-toggle-inner {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  min-width: 0;
}
.poem-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: var(--ink-mute);
  font-weight: 700;
  flex-shrink: 0;
  padding-top: 5px;
}
.poem-item.open .poem-num { color: rgba(255,255,255,0.5); }
.poem-toggle-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.poem-title-line {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.1;
  font-style: italic;
}
.poem-item.open .poem-title-line { color: #ffffff; }
.poem-attribution {
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  color: var(--ink-mute);
  line-height: 1.3;
}
.poem-item.open .poem-attribution { color: rgba(255,255,255,0.6); }
.poem-toggle-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.poem-level-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 3px 10px;
}
.poem-item.open .poem-level-tag {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.8);
}
.poem-chevron {
  color: var(--ink-mute);
  transition: transform 220ms ease;
  flex-shrink: 0;
}
.poem-item.open .poem-chevron { color: rgba(255,255,255,0.7); }
.poem-chevron.open { transform: rotate(180deg); }

/* Body */
.poem-body {
  padding: 32px 20px 36px;
  animation: fold-open 240ms ease-out;
}
.poem-intro-note {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.68;
  color: var(--ink-soft);
  font-style: italic;
  margin: 0 0 20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted var(--rule);
}
.poem-opening-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-style: italic;
  color: var(--ink);
  border-left: 3px solid var(--ink);
  margin: 0 0 30px;
  padding: 10px 0 10px 18px;
  line-height: 1.45;
}

/* Stanzas — numbered, ES then EN */
.poem-stanzas {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.poem-stanza {
  display: grid;
  grid-template-columns: 22px 1fr 1fr;
  column-gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--rule-soft);
  align-items: start;
}
.poem-stanza:last-child { border-bottom: none; }
.poem-stanza-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  padding-top: 3px;
  font-weight: 700;
  text-align: right;
}
.poem-stanza-es {
  font-family: 'Literata', Georgia, serif;
  font-size: 20px;
  line-height: 1.72;
  color: var(--ink);
  font-weight: 600;
}
.poem-stanza-en {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.72;
  color: var(--ink-mute);
  font-style: italic;
}

/* Vocab block */
.poem-vocab-block {
  margin-top: 30px;
  padding: 18px 20px;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 4px;
}
.poem-vocab-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
  margin-bottom: 14px;
}
.poem-vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 8px 24px;
}
.poem-vocab-row {
  display: flex;
  gap: 8px;
  align-items: baseline;
  font-size: 16px;
  padding: 4px 0;
  border-bottom: 1px dotted var(--rule-soft);
}
.poem-vocab-row:last-child { border-bottom: none; }
.poem-vocab-es {
  font-weight: 700;
  color: var(--ink);
  flex-shrink: 0;
}
.poem-vocab-dash { color: var(--ink-mute); flex-shrink: 0; }
.poem-vocab-en {
  color: var(--ink-mute);
  font-style: italic;
}

/* Learning note */
.poem-learning-note {
  margin-top: 22px;
  background: var(--green-tint);
  border-left: 3px solid var(--green);
  border-radius: 0 4px 4px 0;
  padding: 16px 18px;
}
.poem-learning-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 8px;
  font-weight: 700;
}
.poem-learning-note p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: var(--ink-soft);
  font-style: italic;
}

.foldable-songs {
  border-top-color: var(--green);
}
.song-body {
  background: linear-gradient(180deg, rgba(238, 247, 230, 0.36), rgba(255, 255, 255, 0));
}
.song-sections {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.song-section {
  border: 1px solid var(--rule-soft);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.64);
  padding: 16px;
}
.song-section-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 12px;
}
.song-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: start;
}
.song-lyric-es,
.song-lyric-en {
  margin: 0;
  white-space: pre-line;
}
.song-lyric-es {
  font-family: 'Literata', Georgia, serif;
  font-size: 18px;
  line-height: 1.7;
  color: var(--ink);
  font-weight: 600;
}
.song-lyric-en {
  font-family: 'Literata', Georgia, serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--ink-mute);
  font-style: italic;
}
.song-vocab-block {
  background: rgba(238, 247, 230, 0.48);
}

@media (max-width: 700px) {
  .poem-toggle { padding: 18px 12px; }
  .poem-title-line { font-size: 24px; }
  .poem-opening-quote { font-size: 20px; }
  .poem-stanza {
    grid-template-columns: 18px 1fr;
    row-gap: 8px;
  }
  .poem-stanza-en {
    grid-column: 2;
    padding-top: 8px;
    border-top: 1px dotted var(--rule-soft);
    color: var(--ink-mute);
  }
  .poem-stanza-es { font-size: 18px; }
  .poem-stanza-en { font-size: 16px; }
  .poem-vocab-grid { grid-template-columns: 1fr; }
  .poem-learning-note p { font-size: 15px; }
  .song-section-grid { grid-template-columns: 1fr; }
  .song-lyric-en {
    padding-top: 10px;
    border-top: 1px dotted var(--rule-soft);
  }
}

.foldable-bios {
  margin: 24px 0;
  border-top: 2px solid var(--ink);
  display: flex;
  flex-direction: column;
  gap: 0;
}
.bio-item {
  border-bottom: 1px solid var(--rule);
  margin-bottom: 12px;
  border: 1px solid var(--rule);
  border-radius: 4px;
}
.bio-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 20px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(28, 28, 26, 0.06);
}
.bio-toggle:hover { background: rgba(28, 28, 26, 0.03); }
.bio-toggle:active { background: var(--rule-soft); }
.bio-item.open .bio-toggle { background: var(--paper-light); }
.bio-toggle-left {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  min-width: 0;
}
.bio-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  letter-spacing: 0.16em;
  color: var(--ink-mute);
  font-weight: 700;
  min-width: 26px;
  flex-shrink: 0;
  padding-top: 4px;
}
.bio-toggle-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.bio-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.1;
}
.bio-item.open .bio-name { color: var(--ink); }
.bio-subtitle-line {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  line-height: 1.3;
}
.bio-dates {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
}
.bio-toggle-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
}
.bio-level-pills {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.bio-level-badge {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid;
  flex-shrink: 0;
}
.bio-chevron {
  color: var(--ink-mute);
  transition: transform 220ms ease;
  flex-shrink: 0;
}
.bio-chevron.open { transform: rotate(180deg); }
.bio-body {
  padding: 0 4px 32px;
  animation: fold-open 240ms ease-out;
}
.bio-section {
  margin: 0;
  padding: 28px 0;
  border-bottom: 1px solid var(--rule-soft);
}
.bio-section:last-child { border-bottom: none; }
.bio-section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.bio-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--ink);
  font-style: italic;
  letter-spacing: 0.005em;
}
.bio-paragraph {
  font-family: 'Literata', Georgia, serif;
  font-size: 26px;
  line-height: 1.72;
  color: var(--ink);
  margin: 0 0 20px;
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
}
.bio-paragraph:last-of-type { margin-bottom: 0; }
.bio-paragraph:first-of-type::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 46px;
  float: left;
  line-height: 0.85;
  margin: 6px 8px 0 0;
  color: var(--ink-mute);
}
.bio-vocab {
  margin-top: 16px;
  padding: 10px 14px;
  background: var(--paper-light);
  border-left: 2px solid var(--rule);
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  line-height: 1.55;
}
.bio-vocab-label {
  font-family: 'Cormorant Garamond', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-right: 8px;
}

@media (max-width: 700px) {
  .bio-toggle { padding: 16px 4px; gap: 10px; }
  .bio-num { font-size: 13px; min-width: 22px; }
  .bio-name { font-size: 22px; }
  .bio-subtitle-line { font-size: 13px; }
  .bio-dates { font-size: 12px; }
  .bio-section-title { font-size: 22px; }
  .bio-paragraph { font-size: 22px; line-height: 1.65; }
  .bio-paragraph:first-of-type::first-letter { font-size: 48px; }
  .bio-vocab { font-size: 14px; }
}

.foldable-grammar {
  margin: 24px 0;
  border-top: 2px solid var(--green);
}
.gl-item {
  border-bottom: 1px solid var(--rule);
}
.gl-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 18px 6px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(47, 93, 58, 0.12);
}
.gl-toggle:hover { background: rgba(47, 93, 58, 0.04); }
.gl-toggle:active { background: var(--green-tint); }
.gl-item.open .gl-toggle { background: var(--green-tint); }
.gl-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  letter-spacing: 0.16em;
  color: var(--green);
  font-weight: 700;
  min-width: 28px;
  flex-shrink: 0;
}
.gl-level-badge {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--ink-mute);
  font-weight: 700;
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 9px;
  flex-shrink: 0;
}
.gl-item.open .gl-level-badge {
  border-color: var(--green);
  color: var(--green);
}
.gl-toggle-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.gl-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.005em;
  line-height: 1.15;
}
.gl-item.open .gl-title { color: var(--green); }
.gl-subtitle {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gl-chevron {
  color: var(--ink-mute);
  flex-shrink: 0;
  transition: transform 220ms ease;
}
.gl-chevron.open {
  transform: rotate(180deg);
  color: var(--green);
}
.gl-body {
  padding: 6px 0 30px 4px;
  animation: fold-open 240ms ease-out;
}
.gl-intro {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink-soft);
  font-style: italic;
  margin: 0 0 22px;
  padding-bottom: 18px;
  border-bottom: 1px dotted var(--rule);
}
.gl-section {
  margin: 22px 0;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--rule-soft);
}
.gl-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.gl-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: var(--green);
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: 0.01em;
}
.gl-text {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 12px;
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
}
.gl-table thead th {
  color: var(--green) !important;
}
.gl-examples {
  list-style: none;
  margin: 14px 0 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 2px solid var(--green);
}
.gl-examples li {
  padding: 8px 0;
}
.gl-examples li + li {
  border-top: 1px dotted var(--rule-soft);
}
.gl-ex-es {
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.45;
}
.gl-ex-en {
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  color: var(--ink);
  margin-top: 3px;
  line-height: 1.4;
}
.gl-ex-es.inline-pair .inline-en {
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
}
.gl-tip {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: var(--green-tint);
  border-left: 3px solid var(--green);
  padding: 14px 16px;
  margin: 18px 0 0;
  border-radius: 0 4px 4px 0;
}
.gl-tip-icon {
  color: var(--green);
  flex-shrink: 0;
  margin-top: 2px;
}
.gl-tip p {
  margin: 0;
  font-size: 16px;
  color: var(--ink-soft);
  font-style: italic;
  line-height: 1.55;
}
.gl-takeaway {
  background: var(--sienna-tint);
  border: 1px solid #e8c8af;
  border-radius: 4px;
  padding: 16px 18px;
  margin: 18px 0 0;
}
.gl-takeaway-label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  margin-bottom: 6px;
  font-weight: 700;
}
.gl-takeaway p {
  margin: 0;
  font-size: 16px;
  color: var(--ink);
  line-height: 1.6;
}

@media (max-width: 700px) {
  .gl-toggle { padding: 14px 4px; gap: 10px; }
  .gl-num { font-size: 13px; min-width: 22px; }
  .gl-title { font-size: 19px; }
  .gl-subtitle { font-size: 13px; }
  .gl-body { padding: 4px 0 22px 2px; }
  .gl-intro { font-size: 16px; }
  .gl-heading { font-size: 18px; }
  .gl-text { font-size: 16px; }
  .gl-ex-es { font-size: 18px; }
  .gl-ex-en { font-size: 15px; }
  .gl-tip p { font-size: 15px; }
  .gl-takeaway p { font-size: 15px; }
}

/* ===== Grammar Lesson Sections ===== */
/* ===== Foldable Stories (Lectura section) ===== */
.foldable-stories {
  margin: 28px 0;
  border-top: 2px solid var(--ink);
}
.fold-item {
  border-bottom: 1px solid var(--rule);
  break-inside: avoid;
}
.fold-toggle {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 18px 6px 18px 4px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  font-family: 'Literata', Georgia, serif;
  color: var(--ink);
  transition: background 150ms ease;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(177, 80, 42, 0.15);
}
.fold-toggle:hover { background: rgba(177, 80, 42, 0.04); }
.fold-toggle:active { background: var(--sienna-tint); }
.fold-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.18em;
  color: var(--sienna);
  font-weight: 700;
  min-width: 26px;
  flex-shrink: 0;
}
.fold-level {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  color: var(--green);
  font-weight: 700;
  min-width: 28px;
  flex-shrink: 0;
}
.fold-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--ink);
  flex: 1;
  letter-spacing: 0.005em;
  line-height: 1.2;
}
.fold-item.open .fold-title {
  color: var(--sienna-deep);
}
.fold-chevron {
  color: var(--ink-mute);
  flex-shrink: 0;
  transition: transform 220ms ease;
}
.fold-chevron.open {
  transform: rotate(180deg);
  color: var(--sienna-deep);
}
.fold-body {
  padding: 4px 0 24px 4px;
  animation: fold-open 240ms ease-out;
}
.fold-body .reading-paragraph {
  font-size: 19px;
  line-height: 1.85;
  text-align: justify;
  text-justify: inter-word;
  margin: 0 0 16px;
  color: var(--ink);
  hyphens: none;
  -webkit-hyphens: none;
}
.fold-body .reading-paragraph:first-child::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 48px;
  float: left;
  line-height: 0.85;
  margin: 6px 8px 0 0;
  color: var(--sienna);
}
.fold-body .reading-paragraph:last-child {
  margin-bottom: 0;
}
@keyframes fold-open {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 700px) {
  .fold-toggle { padding: 16px 4px 16px 2px; gap: 10px; }
  .fold-num { font-size: 13px; min-width: 22px; }
  .fold-level { font-size: 11px; min-width: 24px; }
  .fold-title { font-size: 19px; }
  .fold-body { padding: 2px 0 20px 2px; }
  .fold-body .reading-paragraph { font-size: 18px; line-height: 1.75; }
  .fold-body .reading-paragraph:first-child::first-letter { font-size: 42px; }
}

.lesson-section {
  margin: 28px 0;
  break-inside: avoid;
}
.lesson-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  color: var(--ink);
  font-weight: 700;
  margin: 0 0 14px;
  letter-spacing: 0.005em;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 8px;
}
.lesson-text {
  font-size: 19px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 14px;
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
}
.lesson-text:last-child { margin-bottom: 0; }
.lesson-table-wrap {
  margin: 16px 0;
  overflow-x: auto;
}
.lesson-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 17px;
}
.lesson-table th,
.lesson-table td {
  text-align: left;
  vertical-align: baseline;
  padding: 10px 14px;
  border-bottom: 1px solid var(--rule);
}
.lesson-table thead th {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sienna-deep);
  font-weight: 700;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 11px;
}
.lesson-table tbody td {
  font-size: 18px;
  color: var(--ink);
  font-weight: 700;
}
.lesson-table tbody td:first-child {
  font-weight: 400;
  font-style: italic;
  color: var(--ink-mute);
}
.lesson-examples {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 2px solid var(--green);
  padding-left: 16px;
}
.lesson-examples li {
  padding: 4px 0;
}
.lesson-examples li + li {
  border-top: 1px dotted var(--rule-soft);
  padding-top: 10px;
}
.lesson-ex-es {
  font-size: 20px;
  font-weight: 700;
  color: var(--ink);
  text-align: justify;
  text-justify: inter-word;
  hyphens: none;
  -webkit-hyphens: none;
  line-height: 1.45;
}
.lesson-ex-en {
  font-size: 17px;
  font-style: italic;
  color: var(--ink);
  margin-top: 4px;
  font-weight: 700;
  line-height: 1.45;
}

@media (max-width: 700px) {
  .lesson-heading { font-size: 21px; }
  .lesson-text { font-size: 18px; }
  .lesson-table { font-size: 16px; }
  .lesson-table th,
  .lesson-table td { padding: 8px 10px; }
  .lesson-table tbody td { font-size: 17px; }
  .lesson-table thead th { font-size: 12px; letter-spacing: 0.14em; }
  .lesson-ex-es { font-size: 19px; }
  .lesson-ex-en { font-size: 16px; }
}

/* ===== VERB PRACTICE QUIZ ===== */
.verb-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.quiz-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--green);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
  white-space: nowrap;
  flex-shrink: 0;
}
.quiz-trigger-btn:hover { background: #234a2d; }
.quiz-trigger-btn:active { transform: scale(0.97); }

.quiz-overlay {
  position: fixed;
  inset: 0;
  background: rgba(28, 28, 26, 0.55);
  backdrop-filter: blur(2px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: quiz-fade 180ms ease-out;
}
@keyframes quiz-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.quiz-modal {
  background: var(--paper);
  border-radius: 12px;
  width: 100%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: quiz-slide 220ms cubic-bezier(0.4, 0.2, 0.2, 1);
}
@keyframes quiz-slide {
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.quiz-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--rule);
}
.quiz-eyebrow {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 4px;
}
.quiz-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--ink);
  font-style: italic;
  letter-spacing: -0.005em;
  margin: 0;
  line-height: 1.1;
}
.quiz-close {
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-mute);
  flex-shrink: 0;
  transition: color 120ms, border-color 120ms;
  touch-action: manipulation;
}
.quiz-close:hover { color: var(--red); border-color: var(--red); }

.quiz-progress {
  margin-bottom: 24px;
}
.quiz-progress-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 8px;
  font-weight: 700;
}
.quiz-progress-bar {
  height: 4px;
  background: var(--rule-soft);
  border-radius: 2px;
  overflow: hidden;
}
.quiz-progress-fill {
  height: 100%;
  background: var(--green);
  transition: width 320ms cubic-bezier(0.4, 0.2, 0.2, 1);
}

.quiz-question {
  text-align: center;
  padding: 24px 12px;
  background: var(--paper-light);
  border-radius: 8px;
  margin-bottom: 20px;
}
.quiz-tense-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 14px;
}
.quiz-prompt {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 14px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.quiz-pronoun {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 600;
  color: var(--ink);
  font-style: italic;
}
.quiz-blank {
  font-family: 'Literata', Georgia, serif;
  font-size: 28px;
  color: var(--rule);
  letter-spacing: 0.1em;
}
.quiz-instruction {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-style: italic;
  color: var(--ink-mute);
  line-height: 1.5;
}

.quiz-form {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}
.quiz-input {
  flex: 1;
  font-family: 'Literata', Georgia, serif;
  font-size: 19px;
  font-weight: 600;
  padding: 12px 16px;
  border: 2px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  outline: none;
  transition: border-color 150ms;
}
.quiz-input:focus { border-color: var(--green); }
.quiz-input.correct { border-color: var(--green); background: var(--green-tint); }
.quiz-input.incorrect { border-color: var(--red); background: rgba(176, 48, 48, 0.06); }
.quiz-input:disabled { opacity: 0.85; }

.quiz-check-btn {
  background: var(--ink);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
}
.quiz-check-btn:hover:not(:disabled) { background: #2a2a26; }
.quiz-check-btn:active:not(:disabled) { transform: scale(0.97); }
.quiz-check-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.quiz-feedback {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.quiz-feedback.correct {
  background: var(--green-tint);
  color: var(--green);
}
.quiz-feedback.incorrect {
  background: rgba(176, 48, 48, 0.08);
  color: var(--red);
}
.quiz-feedback-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: currentColor;
  color: #ffffff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.quiz-feedback.correct .quiz-feedback-icon { background: var(--green); }
.quiz-feedback.incorrect .quiz-feedback-icon { background: var(--red); }
.quiz-feedback-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
}
.quiz-feedback-answer {
  font-size: 14px;
  margin-top: 2px;
  color: var(--ink);
}
.quiz-feedback-answer strong {
  font-weight: 700;
  color: var(--ink);
}
.quiz-feedback-speak {
  margin-left: auto;
  flex-shrink: 0;
  border-color: currentColor !important;
  color: inherit !important;
}

.quiz-next-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: var(--green);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-family: 'Literata', Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
}
.quiz-next-btn:hover { background: #234a2d; }
.quiz-next-btn:active { transform: scale(0.99); }

.quiz-score-line {
  text-align: center;
  font-family: 'Literata', Georgia, serif;
  font-size: 13px;
  color: var(--ink-mute);
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dotted var(--rule-soft);
}

/* Results screen */
.quiz-results {
  text-align: center;
  padding: 12px 0;
}
.quiz-results-circle {
  width: 140px;
  height: 140px;
  margin: 0 auto 20px;
  border: 4px solid var(--green);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--green-tint);
}
.quiz-results-pct {
  font-family: 'Cormorant Garamond', serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--green);
  line-height: 1;
}
.quiz-results-fraction {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  margin-top: 4px;
}
.quiz-results-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--ink);
  font-style: italic;
  margin: 0 0 10px;
}
.quiz-results-msg {
  font-family: 'Literata', Georgia, serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 auto 24px;
  max-width: 400px;
}
.quiz-results-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.quiz-retry-btn,
.quiz-done-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 120ms, transform 120ms;
  touch-action: manipulation;
}
.quiz-retry-btn {
  background: var(--green);
  color: #ffffff;
  border: none;
}
.quiz-retry-btn:hover { background: #234a2d; }
.quiz-done-btn {
  background: transparent;
  color: var(--ink-mute);
  border: 1px solid var(--rule);
}
.quiz-done-btn:hover { color: var(--ink); border-color: var(--ink); }

@media (max-width: 700px) {
  .quiz-modal { padding: 22px; max-height: 95vh; }
  .quiz-title { font-size: 26px; }
  .quiz-pronoun { font-size: 28px; }
  .quiz-input { font-size: 18px; }
  .quiz-form { flex-direction: column; }
  .quiz-check-btn { padding: 12px; }
}

/* ===== KARAOKE TEXT — word-by-word highlight while audio plays ===== */
.karaoke-paragraph {
  position: relative;
}
.kt-word {
  display: inline;
  border-radius: 3px;
  padding: 0 1px;
  margin: 0 -1px;
  transition: background-color 120ms ease, color 120ms ease;
}
.kt-word.kt-active {
  background: #fef3a8;
  color: #2a2410;
  box-shadow: 0 0 0 2px #fef3a8;
}
.karaoke-paragraph.is-playing {
  background: rgba(254, 243, 168, 0.06);
  border-radius: 4px;
}
.kt-space { white-space: pre-wrap; }

/* When a poem stanza is the karaoke target, the paragraph class
   already sets the bold/serif styling — we just need the highlight color
   to remain readable against the bold text */
.poem-stanza-es.kt-active,
.poem-stanza-es .kt-active {
  background: #fef3a8;
}

/* Remove the default reading-paragraph drop-cap when karaoke is active
   on the first paragraph — it interferes with word boundaries */
.karaoke-paragraph.reading-paragraph::first-letter {
  font-size: inherit !important;
  float: none !important;
  margin: 0 !important;
  color: inherit !important;
  font-family: inherit !important;
}
.karaoke-paragraph.bio-paragraph::first-letter {
  font-size: inherit !important;
  float: none !important;
  margin: 0 !important;
  color: inherit !important;
  font-family: inherit !important;
}

/* ===== SPEAK BUTTON ===== */
.speak-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 50%;
  color: var(--ink-mute);
  cursor: pointer;
  vertical-align: middle;
  transition: color 120ms, border-color 120ms, background 120ms, transform 120ms;
  touch-action: manipulation;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.speak-btn:hover {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
}
.speak-btn:active { transform: scale(0.92); }
.speak-btn.playing {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-tint);
  animation: speak-pulse 1.2s ease-in-out infinite;
}
@keyframes speak-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(47, 93, 58, 0.18); }
  50%      { box-shadow: 0 0 0 6px rgba(47, 93, 58, 0); }
}
.speak-btn-sm { width: 28px; height: 28px; }
.speak-btn-md { width: 34px; height: 34px; }

/* In-paragraph speak button — visible, tappable, sits before text */
.paragraph-speak {
  margin-right: 10px;
  vertical-align: 0.1em;
  background: var(--paper-light);
  border-color: var(--green);
  color: var(--green);
}
.paragraph-speak:hover {
  background: var(--green);
  color: #ffffff;
}
.conjugation-speak {
  margin-left: 6px;
  width: 22px;
  height: 22px;
  border-color: transparent;
  opacity: 0.55;
}
.conjugation-speak:hover { opacity: 1; }

/* "Play whole story / poem / section" tools strip */
.story-tools,
.poem-tools {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  padding: 10px 12px;
  background: var(--paper-light);
  border-radius: 6px;
  border: 1px solid var(--rule);
}
.story-speak-label,
.poem-speak-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}

.bio-section-speak {
  margin-left: auto;
}
.poem-quote-speak {
  margin-right: 10px;
  vertical-align: middle;
}

/* The conjugation table cell needs flex layout to fit the speak button */
.tense-form {
  display: inline-flex;
  align-items: center;
}
.tg-form {
  position: relative;
}
.tense-name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tg-th-inner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

/* Phrase list — make space for speak button */
.phrase-content { flex: 1; min-width: 0; }
.phrase-es { display: flex; align-items: center; gap: 8px; }

/* Vocab grid row */
.vocab-row .speak-btn {
  margin-right: 4px;
}

@media (max-width: 700px) {
  .speak-btn-sm { width: 24px; height: 24px; }
  .conjugation-speak { width: 20px; height: 20px; }
  .paragraph-speak { margin-right: 6px; }
}

/* ===== DICTIONARY POPUP ===== */
.dict-popup {
  position: absolute;
  width: 280px;
  transform: translateX(-50%);
  z-index: 9999;
  background: var(--paper-light);
  border: 1px solid var(--ink);
  border-radius: 6px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.1);
  font-family: 'Literata', Georgia, serif;
  overflow: hidden;
  animation: dict-appear 150ms ease-out;
}
@keyframes dict-appear {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.dict-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px 10px;
  background: var(--ink);
  gap: 8px;
}
.dict-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  color: #ffffff;
  letter-spacing: 0.01em;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dict-close-btn {
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  flex-shrink: 0;
  transition: background 120ms;
  touch-action: manipulation;
}
.dict-close-btn:hover { background: rgba(255,255,255,0.28); }

.dict-body {
  padding: 14px 16px 10px;
  min-height: 44px;
}
.dict-loading {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink-mute);
  font-size: 15px;
  font-style: italic;
}
.dict-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid var(--rule);
  border-top-color: var(--ink);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

.dict-not-found {
  font-size: 14px;
  color: var(--ink-mute);
  font-style: italic;
  margin-bottom: 10px;
}
.dict-fallback {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dict-fallback-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: var(--green);
  color: #ffffff !important;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: 'Literata', Georgia, serif;
  justify-content: center;
  transition: background 150ms;
  touch-action: manipulation;
}
.dict-fallback-link:hover { background: #234a2d; }
.dict-fallback-link:active { background: #1a3a23; }
.dict-pos {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 4px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
}

/* Save button — sits between body and footer */
.dict-save-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border: none;
  border-top: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-light);
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  transition: background 150ms, color 150ms;
  touch-action: manipulation;
  letter-spacing: 0.01em;
}
.dict-save-btn:hover { background: var(--green-tint); color: var(--green); }
.dict-save-btn.saved {
  background: var(--green-tint);
  color: var(--green);
}
.dict-save-btn .filled { fill: var(--green); }

/* ===== Memoria sidebar nav item ===== */
.memoria-nav-item {
  margin-top: 8px;
  border-top: 1px dashed var(--rule);
  padding-top: 8px;
}
.memoria-section-btn {
  border-radius: 6px;
}
.memoria-nav-item.active .memoria-section-btn {
  background: var(--ink) !important;
}
.memoria-nav-item.active .section-label,
.memoria-nav-item.active .section-sublabel {
  color: #ffffff !important;
}
.memoria-nav-item.active .memoria-count,
.memoria-nav-item.active .memoria-bookmark-icon {
  color: rgba(255,255,255,0.7) !important;
}
.memoria-bookmark-icon { color: var(--ink-mute); }
.memoria-count {
  font-size: 13px;
  color: var(--ink-mute);
  min-width: 20px;
  text-align: right;
}

/* ===== Memoria view — empty state ===== */
.memoria-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  text-align: center;
  gap: 16px;
}
.memoria-empty-icon { color: var(--rule); }
.memoria-empty-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--ink);
}
.memoria-empty-text {
  font-family: 'Literata', Georgia, serif;
  font-size: 18px;
  line-height: 1.65;
  color: var(--ink-mute);
  max-width: 360px;
}

/* ===== Memoria view — flashcard grid ===== */
.memoria-view .chapter-intro {
  font-style: italic;
  color: var(--ink-mute);
}

/* View toggle (Tarjetas / Lista) */
.memoria-view-toggle {
  display: inline-flex;
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 3px;
  margin: 18px 0 8px;
  gap: 2px;
}
.memoria-view-btn {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  font-weight: 600;
  background: transparent;
  border: none;
  padding: 7px 18px;
  border-radius: 6px;
  color: var(--ink-mute);
  cursor: pointer;
  transition: background 120ms, color 120ms;
  touch-action: manipulation;
  letter-spacing: 0.01em;
}
.memoria-view-btn:hover { color: var(--ink); }
.memoria-view-btn.active {
  background: var(--ink);
  color: #ffffff;
}
.memoria-tools {
  display: grid;
  grid-template-columns: 1fr minmax(160px, 220px) auto;
  gap: 10px;
  align-items: end;
  margin: 10px 0 18px;
}
.memoria-tools label {
  border: 1px solid var(--rule);
  border-radius: 8px;
  padding: 8px 10px;
  background: var(--paper-light);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.memoria-tools label span {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.memoria-tools input,
.memoria-tools select {
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
  min-width: 0;
}
.memoria-tool-btn,
.memoria-review-actions button {
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink);
  border-radius: 6px;
  min-height: 38px;
  padding: 8px 12px;
  cursor: pointer;
  touch-action: manipulation;
}
.memoria-tool-btn:hover,
.memoria-review-actions button:hover {
  border-color: var(--green);
  color: var(--green);
}
.memoria-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
}
.memoria-tags span {
  font-size: 10px;
  color: var(--ink-mute);
  background: var(--paper-light);
  border: 1px solid var(--rule-soft);
  border-radius: 999px;
  padding: 1px 7px;
}
.memoria-review {
  margin: 18px 0 32px;
}
.memoria-review-card {
  width: 100%;
  min-height: 280px;
  border: 1px solid var(--rule);
  border-radius: 10px;
  background: var(--paper);
  color: var(--ink);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
  text-align: center;
  touch-action: manipulation;
}
.memoria-review-card.flipped {
  background: var(--ink);
  color: #ffffff;
}
.memoria-review-card strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 48px;
  line-height: 1.05;
  overflow-wrap: anywhere;
}
.memoria-review-card em {
  color: currentColor;
  opacity: 0.68;
}
.memoria-review-count {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.memoria-review-card.flipped .memoria-review-count {
  color: rgba(255,255,255,0.55);
}
.memoria-review-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
}
.memoria-review-actions input {
  flex: 1;
  min-width: 160px;
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 8px 10px;
  background: var(--paper-light);
  color: var(--ink);
}

/* Front-of-card translation preview */
.memoria-front-translation {
  font-family: 'Literata', Georgia, serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-top: 10px;
  padding: 6px 10px 0;
  border-top: 1px dotted var(--rule);
  width: 100%;
  text-align: center;
  line-height: 1.35;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.memoria-front-pending {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding-top: 6px;
  border-top: 1px dotted var(--rule);
  font-size: 12px;
  color: var(--ink-mute);
  font-style: italic;
  font-family: 'Literata', Georgia, serif;
}
.memoria-front-pending .dict-spinner {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}

/* List view */
.memoria-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 18px 0 32px;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.memoria-list-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 8px;
  border-bottom: 1px solid var(--rule-soft);
  transition: background 120ms;
}
.memoria-list-row:last-child { border-bottom: none; }
.memoria-list-row:hover { background: var(--paper-light); }
.memoria-list-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.memoria-list-es {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
.memoria-list-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  line-height: 1.2;
  letter-spacing: 0.005em;
}
.memoria-list-pos {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
}
.memoria-list-en {
  font-family: 'Literata', Georgia, serif;
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}
.memoria-list-en.pending {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-style: italic;
  color: var(--ink-mute);
}
.memoria-list-en.pending .dict-spinner {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}
.memoria-list-en.empty {
  font-weight: 400;
  font-style: italic;
  color: var(--ink-mute);
  font-size: 15px;
}
.memoria-list-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
}
.memoria-list-extra-tag {
  font-size: 12px;
  color: var(--ink-mute);
  background: var(--paper-light);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 1px 9px;
  font-style: italic;
}
.memoria-list-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}
.memoria-list-sd,
.memoria-list-remove {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 6px;
  color: var(--ink-mute);
  cursor: pointer;
  transition: color 120ms, border-color 120ms, background 120ms;
  touch-action: manipulation;
  text-decoration: none;
}
.memoria-list-sd:hover { color: var(--green); border-color: var(--green); }
.memoria-list-remove:hover { color: var(--red); border-color: var(--red); }

@media (max-width: 700px) {
  .memoria-list-row { padding: 14px 4px; gap: 10px; }
  .memoria-list-word { font-size: 21px; }
  .memoria-list-en { font-size: 15px; }
  .memoria-list-actions { gap: 3px; }
  .memoria-list-sd, .memoria-list-remove { width: 30px; height: 30px; }
  .memoria-tools { grid-template-columns: 1fr; }
  .memoria-review-card strong { font-size: 36px; }
}

.memoria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 18px 0 32px;
}

/* Flip card */
.memoria-card {
  position: relative;
  height: 195px;
  cursor: pointer;
  perspective: 900px;
  -webkit-tap-highlight-color: transparent;
}
.memoria-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 420ms cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}
.memoria-card.flipped .memoria-card-inner {
  transform: rotateY(180deg);
}
.memoria-face {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 16px;
  text-align: center;
  border: 1px solid var(--rule);
}
.memoria-face.front {
  background: var(--paper);
}
.memoria-face.back {
  background: var(--ink);
  transform: rotateY(180deg);
}
.memoria-word {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
  line-height: 1.1;
}
.memoria-pos {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-top: 6px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
}
.memoria-hint {
  font-size: 12px;
  color: var(--rule);
  margin-top: 10px;
  font-style: italic;
  font-family: 'Literata', Georgia, serif;
}
.memoria-translation {
  font-family: 'Literata', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  text-align: center;
}
.memoria-no-translation {
  font-family: 'Literata', Georgia, serif;
  font-size: 15px;
  font-style: italic;
  color: rgba(255,255,255,0.55);
  text-align: center;
}
.memoria-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-top: 8px;
}
.memoria-extra-tag {
  font-size: 12px;
  color: rgba(255,255,255,0.65);
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 2px 8px;
  font-style: italic;
}
.memoria-sd-link {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  margin-top: 10px;
  letter-spacing: 0.03em;
}
.memoria-sd-link:hover { color: #ffffff; text-decoration: underline; }

/* Remove button (top-right corner) */
.memoria-remove {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 2;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: rgba(28,28,26,0.08);
  color: var(--ink-mute);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 150ms, background 150ms;
  touch-action: manipulation;
}
.memoria-card:hover .memoria-remove,
.memoria-card.flipped .memoria-remove { opacity: 1; }
.memoria-remove:hover { background: rgba(176,48,48,0.15); color: var(--red); }

/* Actions */
.memoria-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  border-top: 1px solid var(--rule-soft);
}
.memoria-clear-btn {
  font-family: 'Literata', Georgia, serif;
  font-size: 14px;
  color: var(--ink-mute);
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 6px 16px;
  cursor: pointer;
  transition: color 150ms, border-color 150ms;
  touch-action: manipulation;
}
.memoria-clear-btn:hover { color: var(--red); border-color: var(--red); }

@media (max-width: 700px) {
  .memoria-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
  .memoria-card { height: 170px; }
  .memoria-word { font-size: 24px; }
  .memoria-translation { font-size: 18px; }
  .memoria-remove { opacity: 1; }
}
.dict-main-translation {
  font-size: 21px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
  letter-spacing: 0.005em;
}
.dict-main-translation.is-definition {
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.55;
  color: var(--ink-soft);
}
.dict-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.dict-extra-tag {
  font-size: 13px;
  color: var(--ink-soft);
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 2px 10px;
  font-style: italic;
}
.dict-meanings {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  border-top: 1px dotted var(--rule-soft);
  padding-top: 8px;
}
.dict-meaning-item {
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-soft);
  padding: 3px 0 3px 10px;
  position: relative;
}
.dict-meaning-item::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--ink-mute);
  font-weight: 700;
}
.dict-examples {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dotted var(--rule-soft);
}
.dict-examples-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 700;
  margin-bottom: 6px;
}
.dict-example {
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 2px solid var(--rule);
}
.dict-example:last-child { margin-bottom: 0; }
.dict-example-es {
  font-size: 13px;
  color: var(--ink);
  line-height: 1.4;
  font-weight: 600;
}
.dict-example-en {
  font-size: 12px;
  color: var(--ink-mute);
  line-height: 1.4;
  font-style: italic;
  margin-top: 2px;
}

.dict-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px 10px;
  border-top: 1px solid var(--rule-soft);
  margin-top: 6px;
}
.dict-sd-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: var(--green);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.01em;
  touch-action: manipulation;
}
.dict-sd-link:hover { text-decoration: underline; }
.dict-source {
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
`;
