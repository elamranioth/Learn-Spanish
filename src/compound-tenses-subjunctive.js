export const COMPOUND_TENSES_SUBJUNCTIVE_LESSON = {
  id: 'tiempos-compuestos',
  level: 'B1-B2',
  title: 'Tiempos compuestos',
  subtitle: 'Pretérito perfecto y pluscuamperfecto de subjuntivo',
  intro: 'This lesson is about completed actions inside the subjunctive world: emotion, doubt, desire, negation, and unreal conditions. The action is finished, but the sentence does not present it as a plain fact.',
  blocks: [
    {
      type: 'subjunctive-hero',
      eyebrow: 'Regla central',
      title: 'El subjuntivo compuesto nunca camina solo.',
      accent: 'Siempre aparece provocado por una idea principal.',
      points: [
        'It is always triggered by another clause or expression.',
        'It usually lives in a subordinate clause after que or si.',
        'It shows a completed action seen through emotion, doubt, desire, denial, or hypothesis.',
      ],
      formula: 'trigger + que/si + haber en subjuntivo + participio',
    },
    {
      type: 'golden-rule',
      title: 'Golden rule',
      text: 'Never use these forms alone as the main message. They signal that a subordinate action was completed before another viewpoint.',
      examples: [
        { bad: 'Haya terminado el informe.', good: 'Me alegra que haya terminado el informe.' },
        { bad: 'Hubiera sabido la verdad.', good: 'Ojalá hubiera sabido la verdad.' },
      ],
    },
    {
      type: 'subjunctive-tense-cards',
      cards: [
        {
          tone: 'plum',
          title: 'Pretérito Perfecto de Subjuntivo',
          english: 'Present perfect subjunctive',
          formula: 'haya / hayas / haya / hayamos / hayáis / hayan + participio',
          use: 'Use it when the main clause is present or future, and the subordinate action is already complete or must be complete by a future point.',
          mainClause: 'present / future main clause',
          forms: [
            ['yo', 'haya hablado'],
            ['tú', 'hayas comido'],
            ['él / ella', 'haya vivido'],
            ['nosotros', 'hayamos terminado'],
            ['vosotros', 'hayáis visto'],
            ['ellos', 'hayan hecho'],
          ],
          examples: [
            { es: 'Me alegra que hayas venido.', en: 'I am glad that you came / have come.' },
            { es: 'Dudo que hayan firmado el contrato.', en: 'I doubt that they have signed the contract.' },
            { es: 'Necesito que lo hayas revisado antes del lunes.', en: 'I need you to have reviewed it before Monday.' },
          ],
        },
        {
          tone: 'rose',
          title: 'Pretérito Pluscuamperfecto de Subjuntivo',
          english: 'Past perfect subjunctive',
          formula: 'hubiera/hubiese + participio',
          use: 'Use it with past or conditional main clauses, regrets, past doubts, and unreal si clauses. Hubiera and hubiese mean the same thing here.',
          mainClause: 'past / conditional / si clause',
          forms: [
            ['yo', 'hubiera / hubiese hablado'],
            ['tú', 'hubieras / hubieses comido'],
            ['él / ella', 'hubiera / hubiese vivido'],
            ['nosotros', 'hubiéramos / hubiésemos terminado'],
            ['vosotros', 'hubierais / hubieseis visto'],
            ['ellos', 'hubieran / hubiesen hecho'],
          ],
          examples: [
            { es: 'No creía que hubieras leído todo.', en: 'I did not believe that you had read everything.' },
            { es: 'Ojalá hubiera sabido la verdad.', en: 'I wish I had known the truth.' },
            { es: 'Si hubiéramos salido antes, habríamos llegado a tiempo.', en: 'If we had left earlier, we would have arrived on time.' },
          ],
        },
      ],
    },
    {
      type: 'trigger-grid',
      heading: 'Trigger expressions',
      text: 'Do not memorize the tense alone. Memorize the doorway that opens it.',
      categories: [
        {
          title: 'Emotion',
          trigger: 'me alegra que, me sorprende que, siento que',
          examples: [
            { es: 'Me alegra que hayas entendido la explicación.', en: 'I am glad you understood the explanation.' },
            { es: 'Me sorprendió que hubieran aceptado tan rápido.', en: 'It surprised me that they had accepted so quickly.' },
          ],
        },
        {
          title: 'Doubt / negation',
          trigger: 'dudo que, no creo que, no parece que',
          examples: [
            { es: 'No creo que ella haya mentido.', en: 'I do not think she has lied.' },
            { es: 'No parecía que hubieran preparado nada.', en: 'It did not seem that they had prepared anything.' },
          ],
        },
        {
          title: 'Desire / wish',
          trigger: 'quiero que, espero que, ojalá',
          examples: [
            { es: 'Espero que hayas descansado bien.', en: 'I hope you rested well.' },
            { es: 'Ojalá hubiéramos hablado antes.', en: 'I wish we had spoken earlier.' },
          ],
        },
        {
          title: 'Hypothetical si clauses',
          trigger: 'si + pluscuamperfecto de subjuntivo',
          examples: [
            { es: 'Si me hubieras llamado, habría venido.', en: 'If you had called me, I would have come.' },
            { es: 'Si hubiesen revisado el contrato, no habrían firmado.', en: 'If they had reviewed the contract, they would not have signed.' },
          ],
        },
      ],
    },
    {
      type: 'lesson-section',
      heading: 'Perfecto vs. pluscuamperfecto',
      text: 'Choose the tense by looking at the main clause. Present or future frame usually points to haya hablado. Past, conditional, regret, or unreal si frame points to hubiera/hubiese hablado.',
      table: {
        headers: ['Question', 'Perfecto de subjuntivo', 'Pluscuamperfecto de subjuntivo'],
        rows: [
          ['Main clause time', 'present or future', 'past or conditional'],
          ['Formula', 'haya + participio', 'hubiera / hubiese + participio'],
          ['Meaning', 'has done / did / will have done', 'had done / would have done in an unreal past'],
          ['Common triggers', 'me alegra que, dudo que, espero que', 'no creía que, ojalá, si'],
          ['Example', 'Dudo que haya salido.', 'Dudaba que hubiera salido.'],
        ],
      },
    },
    {
      type: 'conditional-pattern',
      heading: 'Conditional irreal: the pattern you must own',
      formula: 'Si + hubiera/hubiese + participio, habría + participio',
      text: 'This is the most important structure in the whole lesson. The si clause names the impossible past condition; the conditional perfect names the result that did not happen.',
      examples: [
        {
          es: 'Si hubiera estudiado más, habría aprobado el examen.',
          en: 'If I had studied more, I would have passed the exam.',
          note: 'Condition did not happen: I did not study enough.',
        },
        {
          es: 'Si me hubieras avisado, habría preparado los documentos.',
          en: 'If you had warned me, I would have prepared the documents.',
          note: 'The warning did not happen, so the preparation did not happen.',
        },
        {
          es: 'Si hubiésemos salido temprano, no habríamos perdido el tren.',
          en: 'If we had left early, we would not have missed the train.',
          note: 'Hubiésemos is the same value as hubiéramos: more formal or literary in many places.',
        },
      ],
    },
    {
      type: 'tips-grid',
      tips: [
        {
          title: 'Hubiera vs. hubiese',
          text: 'Both forms are correct. Hubiera is more common in everyday Spanish. Hubiese sounds a little more formal, literary, or careful, depending on the country.',
        },
        {
          title: 'The special behavior of ojalá',
          text: 'Ojalá can point to different time frames: ojalá haya llegado means I hope he has arrived; ojalá hubiera llegado means I wish he had arrived, but he probably did not.',
        },
      ],
    },
    {
      type: 'choice-quiz',
      title: 'Quiz: completed actions in subjunctive frames',
      questions: [
        {
          prompt: 'Me alegra que tú ___ a tiempo.',
          choices: ['hayas llegado', 'hubieras llegado', 'has llegado', 'habrías llegado'],
          answer: 'hayas llegado',
          explanation: 'Me alegra que is a present emotion trigger, so use pretérito perfecto de subjuntivo: hayas llegado.',
        },
        {
          prompt: 'No creía que ellos ___ el mensaje.',
          choices: ['hayan recibido', 'hubieran recibido', 'han recibido', 'habrán recibido'],
          answer: 'hubieran recibido',
          explanation: 'No creía is a past doubt/negation frame, so the prior completed action uses pluscuamperfecto de subjuntivo.',
        },
        {
          prompt: 'Espero que nosotros ___ todo antes de mañana.',
          choices: ['hayamos terminado', 'hubiéramos terminado', 'hemos terminado', 'habíamos terminado'],
          answer: 'hayamos terminado',
          explanation: 'Espero que looks forward from the present to a completed future deadline: hayamos terminado.',
        },
        {
          prompt: 'Si me lo ___, te habría ayudado.',
          choices: ['hayas dicho', 'hubieras dicho', 'has dicho', 'habrías dicho'],
          answer: 'hubieras dicho',
          explanation: 'Si + unreal past condition requires pluscuamperfecto de subjuntivo: hubieras dicho.',
        },
        {
          prompt: 'Dudo que Ana ___ la verdad.',
          choices: ['haya dicho', 'hubiera dicho', 'ha dicho', 'había dicho'],
          answer: 'haya dicho',
          explanation: 'Dudo que is a present doubt trigger, so use haya + participio.',
        },
        {
          prompt: 'Ojalá ___ más temprano.',
          choices: ['hayamos salido', 'hubiéramos salido', 'hemos salido', 'habremos salido'],
          answer: 'hubiéramos salido',
          explanation: 'With ojalá, pluscuamperfecto often expresses regret about the past: I wish we had left earlier.',
        },
        {
          prompt: 'Era imposible que vosotros ___ eso solos.',
          choices: ['hayáis hecho', 'hubierais hecho', 'habéis hecho', 'habríais hecho'],
          answer: 'hubierais hecho',
          explanation: 'Era imposible is a past evaluative trigger, so use pluscuamperfecto de subjuntivo.',
        },
        {
          prompt: 'Necesito que usted lo ___ antes del lunes.',
          choices: ['haya revisado', 'hubiera revisado', 'ha revisado', 'habría revisado'],
          answer: 'haya revisado',
          explanation: 'Necesito que is a present desire/requirement trigger. The task must be completed before a future point: haya revisado.',
        },
      ],
    },
  ],
};
