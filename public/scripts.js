const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: "",
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 4,
            questions: [
                {
                    question: "Qui est l'auteur de la saga Harry Potter ?",
                    answers: {
                        a: "Emma Watson",
                        b: "J.K Rowling",
                        c: "Gustave Flaubert",
                        d: "Victor Hugo",
                    },
                    correctAnswer: "b",
                },
                {
                    question: "Qui sont les parents d'Harry Potter ?",
                    answers: {
                        a: "Remus et Nymphadora",
                        b: "Arthur et Molly",
                        c: "Lily et James",
                        d: "Lucius et Narcissa",
                    },
                    correctAnswer: "c",
                },
                {
                    question: "Qui à tuer Sirius Black ? (RIP)",
                    answers: {
                        a: "Voldemort",
                        b: "Peter Pettigrow",
                        c: "Lucius Malfoy",
                        d: "Bellatrix Lestrange",
                    },
                    correctAnswer: "d",
                },
                {
                    question: "Quel est le patronus d'Harry Potter ?",
                    answers: {
                        a: "Un ours",
                        b: "Un cerf",
                        c: "Un chien",
                        d: "Une licorne",
                    },
                    correctAnswer: "b",
                },
            ],
        };
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value;
            if (
                this.selectedAnswer ==
                this.questions[this.index]["correctAnswer"]
            )
                this.correctAnswers++;
            else this.wrongAnswers++;
        },
        nextQuestion() {
            this.index++;
            this.selectedAnswer = "";
        },
        showResults() {
            this.index++;
        },
        resetQuiz() {
            this.index = 0;
            this.selectedAnswer = "";
            this.correctAnswer = 0;
            this.wrongAnswer = 0;
        },
    },
});

app.mount("#app");
