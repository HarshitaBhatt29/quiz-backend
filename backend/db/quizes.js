const {v4:uuid}= require ("uuid")

const quizes ={
    data:[
        {
            id:uuid(),
            category:"marvel",
            image: "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwOTkzMTk0MDc1MjYx/marvel-quiz-copy.webp",
            title:"Marvel",
            description:"loreal ipsum",


            quiz:[
                {
                    id:uuid(),
                    question:"Black Panther is set in which fictional country?",
                    options:[
                        {id:uuid(),option:"Wakanda",isCorrect:"true"},
                        {id:uuid(),option:"Takanda",isCorrect:"false"},
                        {id:uuid(),option:"Jakanda",isCorrect:"false"},
                        {id:uuid(),option:"Zakanda",isCorrect:"false"},

                    ]
                },
                {
                    id:uuid(),
                    question:"Who rescued Tony Stark and Nebula from space?",
                    options:[
                        {id:uuid(),option:"Hulk",isCorrect:"true"},
                        {id:uuid(),option:"Thor",isCorrect:"false"},
                        {id:uuid(),option:"Captain Nick",isCorrect:"true"},
                        {id:uuid(),option:"Captain America",isCorrect:"false"},
                    ]
                },
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from the metal of a dying ___?",
                    options: [
                        { id: uuid(), option: "Nebula", isCorrect: false },
                        { id: uuid(), option: "Moon", isCorrect: false },
                        { id: uuid(), option: "Star", isCorrect: true },
                        { id: uuid(), option: "Sun", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id: uuid(), option: "It's Crap", isCorrect: false },
                        { id: uuid(), option: "That's Bullshit", isCorrect: false },
                        { id: uuid(), option: "What ever", isCorrect: false },
                        { id: uuid(), option: "It's perfect", isCorrect: true }
                    ]
                },
       
            ]
        },

        //2nd quiz
        {
            id: uuid(),
            category: "dc",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "DC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                {
                    id: uuid(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        { id: uuid(), option: "Anita", isCorrect: false },
                        { id: uuid(), option: "Suprema", isCorrect: true },
                        { id: uuid(), option: "Mishita", isCorrect: false },
                        { id: uuid(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which supervillain was once the Iranian Ambassador to the U.N.?",
                    options: [
                        { id: uuid(), option: "Wonder Man", isCorrect: false },
                        { id: uuid(), option: "Superman", isCorrect: false },
                        { id: uuid(), option: "The Joker", isCorrect: true },
                        { id: uuid(), option: "Batman", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is batman's favorite food?",
                    options: [
                        { id: uuid(), option: "Chicken Salad", isCorrect: false },
                        { id: uuid(), option: "Turkey Roast", isCorrect: false },
                        { id: uuid(), option: "Goat Ribbs", isCorrect: false },
                        { id: uuid(), option: "Mulligatawny soup", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "In how many seconds can Green Arrow shoot and reload?",
                    options: [
                        { id: uuid(), option: "Two and a half seconds", isCorrect: true },
                        { id: uuid(), option: "Two seconds", isCorrect: false },
                        { id: uuid(), option: "One seconds", isCorrect: false },
                        { id: uuid(), option: "One and a half seconds", isCorrect: false }
                    ]
                },
            ]
        },

    ]
}

module.exports = quizes;
