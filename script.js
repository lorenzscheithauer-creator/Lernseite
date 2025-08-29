const quizQuestions = [
    {
        question: "Welches sind die drei wichtigsten Einnahmequellen einer typischen deutschen Gemeinde?",
        answers: [
            { text: "Einkommensteuer, Erbschaftsteuer und Hundesteuer.", correct: false },
            { text: "Gewerbesteuer, Grundsteuer und der Gemeindeanteil an der Einkommensteuer.", correct: true },
            { text: "Umsatzsteuer, LKW-Maut und Gebühren für Personalausweise.", correct: false },
            { text: "Zuweisungen vom Bund, Körperschaftsteuer und Parkgebühren.", correct: false }
        ]
    },
    {
        question: "Was beschreibt der \"Hebesatz\" im kommunalen Steuerrecht?",
        answers: [
            { text: "Ein fester Steuersatz, der vom Bund für alle Gemeinden einheitlich festgelegt wird.", correct: false },
            { text: "Der Prozentsatz, den eine Gemeinde von den Landessteuern erhält.", correct: false },
            { text: "Ein von der Gemeinde festgelegter Multiplikator, mit dem der Steuermessbetrag bei der Gewerbe- und Grundsteuer multipliziert wird.", correct: true },
            { text: "Die Obergrenze für die Aufnahme von Krediten pro Einwohner.", correct: false }
        ]
    },
    {
        question: "Worin besteht der wesentliche Unterschied zwischen dem Ergebnishaushalt und dem Finanzhaushalt in der Doppik?",
        answers: [
            { text: "Der Ergebnishaushalt zeigt die Investitionen, der Finanzhaushalt die Personalkosten.", correct: false },
            { text: "Der Ergebnishaushalt bildet den Ressourcenverbrauch (z.B. Abschreibungen) ab, während der Finanzhaushalt die tatsächlichen Geldflüsse (Ein- und Auszahlungen) darstellt.", correct: true },
            { text: "Der Ergebnishaushalt ist für Landkreise, der Finanzhaushalt für kreisfreie Städte verpflichtend.", correct: false },
            { text: "Im Ergebnishaushalt stehen die Einnahmen, im Finanzhaushalt die Ausgaben.", correct: false }
        ]
    },
    {
        question: "Warum birgt die Gewerbesteuer ein erhebliches Risiko für die kommunale Haushaltsplanung?",
        answers: [
            { text: "Weil sie sehr kompliziert zu berechnen ist und oft zu Fehlern führt.", correct: false },
            { text: "Weil ihre Einnahmen stark von der konjunkturellen Lage der lokalen Unternehmen abhängen und daher stark schwanken können.", correct: true },
            { text: "Weil die Bürger gegen hohe Gewerbesteuern häufig protestieren.", correct: false },
            { text: "Weil der Bund den Hebesatz jederzeit ändern kann.", correct: false }
        ]
    },
    {
        question: "Was ist ein \"Sondervermögen\" im öffentlichen Haushaltsrecht?",
        answers: [
            { text: "Eine private Spende an den Staat für einen bestimmten Zweck.", correct: false },
            { text: "Der Teil des Haushalts, der ausschließlich für Sozialleistungen reserviert ist.", correct: false },
            { text: "Ein für einen bestimmten Zweck eingerichteter, vom Kernhaushalt getrennter Wirtschaftsplan, der oft kreditfinanziert ist.", correct: true },
            { text: "Die \"eiserne Reserve\" einer Regierung für unerwartete Krisen.", correct: false }
        ]
    },
    {
        question: "Die Einrichtung von Sondervermögen (\"Schattenhaushalten\") verstößt potenziell gegen welche zwei zentralen Haushaltsgrundsätze?",
        answers: [
            { text: "Grundsatz der Jährlichkeit und der Wirtschaftlichkeit.", correct: false },
            { text: "Grundsatz der Öffentlichkeit und der Gesamtdeckung.", correct: false },
            { text: "Grundsatz der Einheit und der Klarheit.", correct: true }
        ]
    },
    {
        question: "Was ist die Kernregel der im Grundgesetz verankerten Schuldenbremse für den Bund?",
        answers: [
            { text: "Der Bund darf absolut keine neuen Schulden aufnehmen.", correct: false },
            { text: "Die Neuverschuldung darf die Höhe der Investitionen nicht überschreiten (Goldene Regel).", correct: false },
            { text: "Die strukturelle, konjunkturbereinigte Neuverschuldung ist auf maximal 0,35 % des Bruttoinlandsprodukts begrenzt.", correct: true },
            { text: "Schulden sind nur erlaubt, wenn alle Länder zustimmen.", correct: false }
        ]
    },
    {
        question: "Was war das zentrale Versprechen der Umstellung von der Kameralistik auf die Doppik bezüglich der Verwaltungssteuerung?",
        answers: [
            { text: "Eine reine Kostensenkung durch weniger Personal in der Buchhaltung.", correct: false },
            { text: "Eine verbesserte Steuerung über Ziele, Produkte und Kennzahlen anstelle der reinen Orientierung an Einnahmen und Ausgaben.", correct: true },
            { text: "Die Vereinfachung der Buchführung, sodass keine Fachkräfte mehr benötigt werden.", correct: false },
            { text: "Die vollständige Abschaffung der kommunalen Verschuldung.", correct: false }
        ]
    },
    {
        question: "Die Metastudie von Raffer (2021) spricht von einer \"Steuerungslücke\" in der Doppik. Was ist damit gemeint?",
        answers: [
            { text: "Die Software für die doppische Buchführung hat gravierende Sicherheitslücken.", correct: false },
            { text: "Es fehlt das Geld, um Controller für die Verwaltungssteuerung einzustellen.", correct: false },
            { text: "Die Steuerungsinstrumente (z.B. Kennzahlen) sind zwar vorhanden, werden aber von der Politik und Verwaltung kaum für tatsächliche Entscheidungen genutzt.", correct: true },
            { text: "Die Bürger verstehen die neuen doppischen Haushaltspläne nicht.", correct: false }
        ]
    },
    {
        question: "Welches der folgenden Ziele der Doppik-Reform gilt laut empirischen Studien als weitgehend erreicht?",
        answers: [
            { text: "Eine signifikant bessere und nachweisbare Steuerung durch Kennzahlen in allen Kommunen.", correct: false },
            { text: "Eine höhere Transparenz über die tatsächliche Vermögens- und Schuldenlage der Kommune.", correct: true },
            { text: "Eine drastische Reduzierung der Verwaltungskosten in allen Bereichen.", correct: false },
            { text: "Eine deutschlandweit einheitliche und vergleichbare Darstellung aller kommunalen Haushalte.", correct: false }
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
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContent.classList.remove('hide');
    resultsContainer.classList.add('hide');
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = currentQuestion.question;
    progressText.innerText = `Frage ${questionNo} von ${quizQuestions.length}`;

    currentQuestion.answers.forEach(answer => {
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

    if (quizQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults();
    }
}

function showResults() {
    quizContent.classList.add('hide');
    progressText.innerText = "Quiz beendet!";
    resultsContainer.classList.remove('hide');
    scoreText.innerText = `Sie haben ${score} von ${quizQuestions.length} Fragen richtig beantwortet!`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
