const quizQuestions = [
    {
        question: "Welche Aussage zum \"Wagner'schen Gesetz\" der wachsenden Staatsausgaben ist korrekt?",
        answers: [
            { text: "Es erklärt, dass mit fortschreitender Industrialisierung und steigendem Wohlstand der Bedarf an öffentlichen Leistungen überproportional zunimmt.", correct: true },
            { text: "Es besagt, dass Staatsausgaben hauptsächlich durch ineffiziente Bürokratien wachsen.", correct: false },
            { text: "Es ist eine gesetzliche Vorschrift, die das jährliche Wachstum der Staatsausgaben auf 2 % begrenzt.", correct: false },
            { text: "Es beschreibt das Phänomen, dass Politiker vor Wahlen die Ausgaben erhöhen, um wiedergewählt zu werden.", correct: false }
        ]
    },
    {
        question: "Welcher Haushaltsgrundsatz wird verletzt, wenn ein Parlament den Haushalt für das laufende Jahr erst im Juni beschließt?",
        answers: [
            { text: "Grundsatz der Vorherigkeit", correct: true },
            { text: "Grundsatz der Öffentlichkeit", correct: false },
            { text: "Grundsatz der Jährlichkeit", correct: false },
            { text: "Grundsatz der Gesamtdeckung", correct: false }
        ]
    },
    {
        question: "Welche Steuerart ist eine Gemeinschaftsteuer, deren Aufkommen sich Bund, Länder und Gemeinden teilen?",
        answers: [
            { text: "Lohn- und Einkommensteuer", correct: true },
            { text: "Erbschaftsteuer", correct: false },
            { text: "Gewerbesteuer", correct: false },
            { text: "Hundesteuer", correct: false }
        ]
    },
    {
        question: "Was ist der Hauptzweck des kommunalen Finanzausgleichs (KFA)?",
        answers: [
            { text: "Die Verteilung von Finanzmitteln vom Land an die Kommunen, um deren unterschiedliche Finanzkraft und Aufgabenlast teilweise auszugleichen.", correct: true },
            { text: "Die Finanzierung von Bundesprojekten in den Kommunen.", correct: false },
            { text: "Die direkte finanzielle Unterstützung von Bürgern durch die Kommune.", correct: false },
            { text: "Der finanzielle Ausgleich zwischen reichen und armen Kommunen durch direkte Zahlungen untereinander.", correct: false }
        ]
    },
    {
        question: "In welchem Teilhaushalt der Doppik werden die Abschreibungen für das Rathausgebäude erfasst?",
        answers: [
            { text: "Im Ergebnishaushalt", correct: true },
            { text: "Im Finanzhaushalt", correct: false },
            { text: "Im Investitionshaushalt", correct: false },
            { text: "In der Eröffnungsbilanz", correct: false }
        ]
    },
    {
        question: "Die Maastricht-Kriterien legen eine Obergrenze für die jährliche Neuverschuldung fest. Wie hoch ist diese?",
        answers: [
            { text: "3 % des Bruttoinlandsprodukts (BIP)", correct: true },
            { text: "1 % des Bruttoinlandsprodukts (BIP)", correct: false },
            { text: "5 % der gesamten Steuereinnahmen", correct: false },
            { text: "60 % des Bruttoinlandsprodukts (BIP)", correct: false }
        ]
    },
    {
        question: "Was ist ein wesentlicher Vorteil der Finanzierung staatlicher Aufgaben durch Steuern gegenüber Gebühren?",
        answers: [
            { text: "Steuern ermöglichen die Finanzierung von Gütern, bei denen eine individuelle Zurechnung nicht möglich ist und erlauben eine soziale Staffelung nach Leistungsfähigkeit.", correct: true },
            { text: "Steuern sind einfacher zu berechnen und verursachen weniger Verwaltungsaufwand.", correct: false },
            { text: "Steuereinnahmen sind immer stabil und konjunkturunabhängig.", correct: false },
            { text: "Steuern sind bei den Bürgern beliebter als Gebühren.", correct: false }
        ]
    },
    {
        question: "Die deutsche Finanzverfassung ist geregelt im...",
        answers: [
            { text: "Grundgesetz (GG)", correct: true },
            { text: "Bürgerlichen Gesetzbuch (BGB)", correct: false },
            { text: "Handelsgesetzbuch (HGB)", correct: false },
            { text: "jeweiligen Landesfinanzministerium", correct: false }
        ]
    },
    {
        question: "Welche Aussage zur Kameralistik ist FALSCH?",
        answers: [
            { text: "Sie stellt das vorhandene Vermögen und die Schulden in einer Bilanz dar.", correct: true },
            { text: "Sie ist eine reine Einnahmen- und Ausgabenrechnung.", correct: false },
            { text: "Sie orientiert sich am Geldverbrauch des Haushaltsjahres.", correct: false },
            { text: "Sie war das traditionelle Buchführungssystem der öffentlichen Verwaltung in Deutschland.", correct: false }
        ]
    },
    {
        question: "Der Haushaltskreislauf besteht aus vier Phasen. Welche ist die korrekte Reihenfolge?",
        answers: [
            { text: "Aufstellung, Beschluss, Vollzug, Kontrolle", correct: true },
            { text: "Vollzug, Aufstellung, Beschluss, Kontrolle", correct: false },
            { text: "Beschluss, Kontrolle, Aufstellung, Vollzug", correct: false },
            { text: "Aufstellung, Kontrolle, Vollzug, Beschluss", correct: false }
        ]
    },
    {
        question: "Eine Gemeinde erhöht den Hebesatz für die Grundsteuer B. Was ist die direkte Folge?",
        answers: [
            { text: "Alle Grundstückseigentümer im Gemeindegebiet müssen mehr Grundsteuer zahlen.", correct: true },
            { text: "Unternehmen im Gewerbegebiet müssen mehr Steuern zahlen.", correct: false },
            { text: "Die Gemeinde erhält mehr Zuweisungen vom Land.", correct: false },
            { text: "Die Hundesteuer wird automatisch ebenfalls teurer.", correct: false }
        ]
    },
    {
        question: "Was besagt das Konnexitätsprinzip im föderalen Finanzsystem?",
        answers: [
            { text: "Wer bestellt, bezahlt: Überträgt eine höhere staatliche Ebene einer unteren neue Aufgaben, muss sie auch für deren Finanzierung sorgen.", correct: true },
            { text: "Alle Steuern müssen im Zusammenhang mit einer staatlichen Leistung stehen.", correct: false },
            { text: "Der Bund ist immer für die Finanzierung der Länder zuständig.", correct: false },
            { text: "Kommunen dürfen nur Aufgaben übernehmen, die sie selbst finanzieren können.", correct: false }
        ]
    },
    {
        question: "Was ist eine \"indirekte Steuer\"?",
        answers: [
            { text: "Eine Steuer, bei der Steuerschuldner und Steuerträger nicht identisch sind (z.B. Mehrwertsteuer).", correct: true },
            { text: "Eine Steuer, die direkt vom Einkommen abgezogen wird.", correct: false },
            { text: "Eine Steuer, die nur alle paar Jahre erhoben wird.", correct: false },
            { text: "Eine Steuer, deren Aufkommen für einen bestimmten Zweck reserviert ist.", correct: false }
        ]
    },
    {
        question: "Die Schuldenbremse im Grundgesetz erlaubt dem Bund eine strukturelle Neuverschuldung von maximal...",
        answers: [
            { text: "0,35 % des BIP", correct: true },
            { text: "0,00 % des BIP", correct: false },
            { text: "1,00 % des BIP", correct: false },
            { text: "3,00 % des BIP", correct: false }
        ]
    },
    {
        question: "Welche der folgenden Einnahmen ist KEINE Gebühr?",
        answers: [
            { text: "Beitrag für den erstmaligen Anschluss eines Grundstücks an die Kanalisation.", correct: true },
            { text: "Eintrittsgeld für das städtische Schwimmbad.", correct: false },
            { text: "Parkschein für einen kommunalen Parkplatz.", correct: false },
            { text: "Verwaltungsgebühr für die Ausstellung eines Personalausweises.", correct: false }
        ]
    },
    {
        question: "Welcher Haushaltsgrundsatz besagt, dass alle Einnahmen zur Deckung aller Ausgaben dienen und nicht zweckgebunden sind?",
        answers: [
            { text: "Grundsatz der Gesamtdeckung", correct: true },
            { text: "Grundsatz der Wirtschaftlichkeit", correct: false },
            { text: "Grundsatz der Jährlichkeit", correct: false },
            { text: "Grundsatz der Vollständigkeit", correct: false }
        ]
    },
    {
        question: "Was misst die \"Steuerquote\"?",
        answers: [
            { text: "Das Verhältnis der Steuereinnahmen zum Bruttoinlandsprodukt (BIP).", correct: true },
            { text: "Den Anteil der indirekten Steuern an den gesamten Steuereinnahmen.", correct: false },
            { text: "Den durchschnittlichen Steuersatz für einen Bürger.", correct: false },
            { text: "Den Anteil, den eine einzelne Steuerart am gesamten Steueraufkommen hat.", correct: false }
        ]
    },
    {
        question: "In der Sozialen Marktwirtschaft hat der Staat unter anderem die Aufgabe...",
        answers: [
            { text: "für einen sozialen Ausgleich zu sorgen und Marktversagen zu korrigieren.", correct: true },
            { text: "die Produktionsmittel zu verstaatlichen.", correct: false },
            { text: "die Preise für alle wichtigen Güter festzulegen.", correct: false },
            { text: "den Wettbewerb vollständig abzuschaffen.", correct: false }
        ]
    },
    {
        question: "Was ist der Unterschied zwischen der Steuerquote und der Abgabenquote?",
        answers: [
            { text: "Die Abgabenquote umfasst neben den Steuern auch die Sozialversicherungsbeiträge.", correct: true },
            { text: "Es gibt keinen Unterschied, die Begriffe sind synonym.", correct: false },
            { text: "Die Abgabenquote ist immer niedriger als die Steuerquote.", correct: false },
            { text: "Die Steuerquote misst die Steuern von Unternehmen, die Abgabenquote die von Privatpersonen.", correct: false }
        ]
    },
    {
        question: "Eine \"Lenkungssteuer\" wie die Tabaksteuer hat primär das Ziel...",
        answers: [
            { text: "das Verhalten der Konsumenten in eine gewünschte Richtung zu beeinflussen (z.B. weniger rauchen).", correct: true },
            { text: "eine möglichst hohe Einnahme für den Staat zu generieren.", correct: false },
            { text: "die Tabakindustrie gezielt zu subventionieren.", correct: false },
            { text: "die Verwaltungskosten des Staates zu decken.", correct: false }
        ]
    },
    {
        question: "Die Nettoinvestitionen eines öffentlichen Haushalts sind definiert als...",
        answers: [
            { text: "die Bruttoinvestitionen abzüglich der Abschreibungen.", correct: true },
            { text: "die Summe aller Ausgaben für Baumaßnahmen.", correct: false },
            { text: "die Bruttoinvestitionen abzüglich der Einnahmen aus Verkäufen von Vermögen.", correct: false },
            { text: "alle Ausgaben, die nicht für Personal oder Soziales getätigt werden.", correct: false }
        ]
    },
    {
        question: "Welche der folgenden Aufgaben wird typischerweise von einem Landesrechnungshof wahrgenommen?",
        answers: [
            { text: "Die externe Finanzkontrolle, also die Prüfung der Haushalts- und Wirtschaftsführung des Landes auf Ordnungsmäßigkeit und Wirtschaftlichkeit.", correct: true },
            { text: "Die Festlegung der Steuersätze für das kommende Jahr.", correct: false },
            { text: "Die Genehmigung des Landeshaushalts.", correct: false },
            { text: "Die Auszahlung von Gehältern an die Landesbediensteten.", correct: false }
        ]
    },
    {
        question: "Die \"Goldene Regel\" der Finanzpolitik besagt, dass...",
        answers: [
            { text: "die kreditfinanzierte Neuverschuldung die Höhe der öffentlichen Nettoinvestitionen nicht übersteigen sollte.", correct: true },
            { text: "der Staat niemals Schulden machen darf.", correct: false },
            { text: "Steuern immer nach der Leistungsfähigkeit erhoben werden sollen.", correct: false },
            { text: "der Haushalt immer ausgeglichen sein muss.", correct: false }
        ]
    },
    {
        question: "Die Einführung der Doppik in den Kommunen zielte vor allem darauf ab...",
        answers: [
            { text: "eine generationengerechtere und transparentere Darstellung des Ressourcenverbrauchs und der Vermögenslage zu erreichen.", correct: true },
            { text: "die Buchführung zu vereinfachen und Personal einzusparen.", correct: false },
            { text: "den Einfluss der Kommunalpolitik auf den Haushalt zu verringern.", correct: false },
            { text: "die kommunale Verschuldung gesetzlich zu verbieten.", correct: false }
        ]
    },
    {
        question: "Richtig oder Falsch: Die Biersteuer ist in Deutschland eine Bundessteuer.",
        answers: [
            { text: "Falsch", correct: true },
            { text: "Richtig", correct: false }
        ]
    },
    {
        question: "Richtig oder Falsch: In Deutschland gilt das Trennsystem, bei dem jede staatliche Ebene (Bund, Länder, Gemeinden) komplett eigene, voneinander getrennte Steuern hat.",
        answers: [
            { text: "Falsch", correct: true },
            { text: "Richtig", correct: false }
        ]
    },
    {
        question: "Was versteht man unter \"kalte Progression\"?",
        answers: [
            { text: "Einen Effekt, bei dem eine Lohnerhöhung, die nur die Inflation ausgleicht, durch den progressiven Steuertarif zu einer höheren realen Steuerbelastung führt.", correct: true },
            { text: "Den schrittweisen Abbau von staatlichen Schulden in kalten Wintermonaten.", correct: false },
            { text: "Die sinkende Steuerlast bei sinkendem Einkommen.", correct: false },
            { text: "Eine Steuererhöhung, die ohne Zustimmung des Parlaments erfolgt.", correct: false }
        ]
    },
    {
        question: "Welches Gremium ist in Deutschland für die Feststellung des Haushaltsgesetzes auf Bundesebene zuständig?",
        answers: [
            { text: "Der Deutsche Bundestag", correct: true },
            { text: "Der Bundesrechnungshof", correct: false },
            { text: "Das Bundesverfassungsgericht", correct: false },
            { text: "Die Deutsche Bundesbank", correct: false }
        ]
    },
    {
        question: "Welche Aussage beschreibt das \"Bruttoprinzip\" im Haushaltsrecht?",
        answers: [
            { text: "Alle Einnahmen und Ausgaben müssen in voller Höhe und unverrechnet im Haushalt veranschlagt werden.", correct: true },
            { text: "Nur der Nettogewinn einer staatlichen Beteiligung darf im Haushalt erscheinen.", correct: false },
            { text: "Der Haushaltsplan muss die Bruttosozialprodukt-Entwicklung berücksichtigen.", correct: false },
            { text: "Brutto-Gehälter der Beamten müssen detailliert aufgeschlüsselt werden.", correct: false }
        ]
    },
    {
        question: "Welche der folgenden Institutionen gehört NICHT zur öffentlichen Hand im Sinne der Finanzstatistik?",
        answers: [
            { text: "Die Volkswagen AG", correct: true },
            { text: "Die Stadt Potsdam", correct: false },
            { text: "Das Land Brandenburg", correct: false },
            { text: "Die Deutsche Rentenversicherung Bund (Sozialversicherung)", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const quizContent = document.getElementById('quiz-content');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const percentageText = document.getElementById('percentage-text');
const restartButton = document.getElementById('restart-btn');

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

/* Fisher-Yates (aka Knuth) Shuffle */
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = shuffle([...quizQuestions]);

    quizContent.classList.remove('hide');
    progressText.classList.remove('hide');
    resultsContainer.classList.add('hide');
    nextButton.classList.add('hide');

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = currentQuestion.question;
    progressText.innerText = `Frage ${questionNo} von ${quizQuestions.length}`;

    let shuffledAnswers = shuffle([...currentQuestion.answers]);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults();
    }
}

function showResults() {
    quizContent.classList.add('hide');
    progressText.classList.add('hide');
    resultsContainer.classList.remove('hide');

    const percentage = Math.round((score / quizQuestions.length) * 100);
    scoreText.innerText = `Auswertung: Sie haben ${score} von ${quizQuestions.length} Fragen richtig beantwortet!`;
    percentageText.innerText = `Das entspricht ${percentage}%.`;

    nextButton.classList.add('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
