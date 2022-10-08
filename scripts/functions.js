const questionSet = [
 
    {
        id: 1,
        question:'What is the value of the variables total and i after the code has been executed?',
        choice1:'total = 0, i = 0',
        choice2:'total = 15, i = 0',
        choice3:'total = 0, i = 5',
        choice4:'total = 15, i = 5',
        choice5:'total = 3, i = 0',
        correctAnswer: 'total = 15, i = 5'
        
    },
    
 
    {
        id: 2,
        question: `Fill in the blank space in code below. The output of the console after running the iterate function should be: 
        item: 1
        item: 2
        item: 3`,
        correctAnswer: '...'
       
        
    },
 
    {
        id: 3,
        question: 'Question: What is the value of the sum variable?',
        choice1: 0, 
        choice2: '0.10.7',
        choice3: 0.7999999999999999, 
        choice4: 8,
        choice5: 'NaN',
        correctAnswer: 0.7999999999999999 
        
    },

    {
        id: 4,
        question: 'Select all proper ways to extract piece "program" of the text "metaprogramming"',
        choice1: 'text.slice(4, 7)',
        choice2: 'text.chunk(4, 7)',
        choice3: 'text.chunk(4, 11)',
        choice4: 'text.substring(4, 11)',
        choice5: 'text.substr(4, 11)',
        correctAnswer: 'text.substring(4, 11)'
        
    },

    {
        id: 5,
        question: 'What is the value of the z variable?',
        choice1: 6,
        choice2: '6.0',
        choice3: 'undefined',
        choice4: 'This code will cause a syntax error',
        correctAnswer: 'This code will cause a syntax error'
        
    }, 

    {
        id: 6,
        question: 'Consider the code below. What is the value of the comparison variable?',
        choice1: 'false',
        choice2: 'true',
        choice3: 'object',
        choice4: 'undefined',
        correctAnswer: 'true'
        
    },

    {
        id: 7,
        question: 'Complete the code below to output to the console text "woof woof"',
        correctAnswer: 'prototype'
        
    },

    {
        id: 8,
        question: 'Consider a HTML snippet and defined event handlers. What will the output of the console be after clicking the button?',
        choice1: 'document clicked, division clicked, button clicked', 
        choice2: 'button clicked, division clicked, document clicked',
        choice3: 'button clicked',
        choice4: 'button clicked, document clicked',
        choice5: 'document clicked',
        correctAnswer: 'button clicked, division clicked, document clicked'
        
    },

    {
        id: 9,
        question: 'Consider the snippet of the HTML code. How to access the first child of the child of the node?',
        choice1: 'Parent.firstChild',
        choice2: 'Parent.firstNodeChild',
        choice3: 'Parent.item(0)',
        choice4: 'Parent.child.Nodes[0]',
        choice5: 'Parent.childElements[0]',
        correctAnswer: 'Parent.firstChild Parent.child.Nodes[0]'
        
    },

    {
        id: 10,
        question: 'Which attribute of the <script> element ensure that scripts with this attribute will execute in the order in which they appear in the document?',
        choice1: 'async',
        choice2: 'defer',
        choice3: 'stable',
        choice4: 'sync',
        correctAnswer: 'defer'
    }
]


function renderQuestions() {

    let question = questionSet[i]

    const questionText = document.querySelector('.question')
    const answerText = document.querySelector('.answers')

    let renderQuestion = ''
    let renderAnswers = ''

    if (question.id == 2 || question.id == 7) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers += `<div><input type="text" class="text" name="answer"></div>`
    } else if (question.id == 5 || question.id == 6) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers +=
        `<div><input type="radio" class="radio" name="answer"  value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice4']}">${question['choice4']}</div>`
    } else if (question.id == 4 || question.id == 9) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers +=
        `<div><input type="checkbox" class="checkbox" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice4']}">${question['choice4']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice5']}">${question['choice5']}</div>`
    } else {
        renderQuestion += `<p>${question.question}</p>`;
        renderAnswers += 
        `<div><input type="radio" class="radio" name="answer" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice4']}">${question['choice4']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice5']}">${question['choice5']}</div>`;
    }
    
    questionText.innerHTML = renderQuestion
    answerText.innerHTML = renderAnswers

}



function renderNextQuestion() {
    if (questionSet[i + 1]) {
        i += 1
    }
    
    let question = questionSet[i]

    const questionText = document.querySelector('.question')
    const answerText = document.querySelector('.answers')

    let renderQuestion = ''
    let renderAnswers = ''

    if (question.id == 2 || question.id == 7) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers += `<div><input type="text" class="text" name="answer"></div>`
    } else if (question.id == 5 || question.id == 6) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers +=
        `<div><input type="radio" class="radio" name="answer" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice4']}">${question['choice4']}</div>`
    } else if (question.id == 4 || question.id == 9) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers +=
        `<div><input type="checkbox" class="checkbox" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice4']}">${question['choice4']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice5']}">${question['choice5']}</div>`
    } else {
        renderQuestion += `<p>${question.question}</p>`;
        renderAnswers += 
        `<div><input type="radio" class="radio" name="answer" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice4']}">${question['choice4']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice5']}">${question['choice5']}</div>`;
    }
    
    questionText.innerHTML = renderQuestion
    answerText.innerHTML = renderAnswers
}

function renderPreviousQuestion() {
    if (questionSet[i - 1]) {
        i -= 1
    }
    let question = questionSet[i]

    const questionText = document.querySelector('.question')
    const answerText = document.querySelector('.answers')

    let renderQuestion = ''
    let renderAnswers = ''

    if (question.id == 2 || question.id == 7) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers += `<div><input type="text" class="text" name="answer"></div>`
    } else if (question.id == 5 || question.id == 6) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers +=
        `<div><input type="radio" class="radio" name="answer" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice4']}">${question['choice4']}</div>`
    } else if (question.id == 4 || question.id == 9) {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers +=
        `<div><input type="checkbox" class="checkbox" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice4']}">${question['choice4']}</div>
        <div><input type="checkbox" class="checkbox" value="${question['choice5']}">${question['choice5']}</div>`
    } else {
        renderQuestion += `<p>${question.question}</p>`
        renderAnswers += 
        `<div><input type="radio" class="radio" name="answer" value="${question['choice1']}">${question['choice1']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice2']}">${question['choice2']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice3']}">${question['choice3']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice4']}">${question['choice4']}</div>
        <div><input type="radio" class="radio" name="answer" value="${question['choice5']}">${question['choice5']}</div>`;
    }
    
    questionText.innerHTML = renderQuestion
    answerText.innerHTML = renderAnswers

}

function saveAnswers() {
    document.querySelectorAll('.radio').forEach((element) => {
        
        if (element.value == localStorage.getItem(`question ${i}`)) {
            element.checked = true
        }
        
    })

    document.querySelectorAll('.text').forEach((element) => {
        
        element.value = localStorage.getItem(`question ${i}`) 

        
    })

    document.querySelectorAll('.checkbox').forEach((element) => {
        
        if (element.value == localStorage.getItem(`question ${i}`)) {
            element.checked = true
        }
    })
}

function localStorageAnswers() {
    
    document.querySelectorAll('.radio').forEach((element) => {

        element.addEventListener('click', function (e) {
    
          localStorage.setItem(`question ${i}`, e.target.value)
      })
    })
    
    document.querySelectorAll('.text').forEach((element) => {
        element.addEventListener('input', function (e) {
    
            localStorage.setItem(`question ${i}`, e.target.value)    
      })
    })

    document.querySelectorAll('.checkbox').forEach((element) => {

        element.addEventListener('click', function (e) {
    
          localStorage.setItem(`question ${i}`, e.target.value)
      })
    })
}

function submit() {

    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    submitBtn.setAttribute('class', 'submit')
    document.querySelector('#page-nav').appendChild(submitBtn)

    document.querySelector('.submit').addEventListener('click', () => {
    location.assign('/results.html')
    
    })
}

function pageNavigation() {
    const pageNav = document.querySelector('#page-nav')
    pageNav.innerHTML = ''

    const nextBtn = document.createElement('button')
    const backBtn = document.createElement('button')

    backBtn.setAttribute('class', 'back')
    nextBtn.setAttribute('class', 'next')

    backBtn.textContent = 'Back'
    nextBtn.textContent = 'Next'

    pageNav.appendChild(backBtn)
    pageNav.appendChild(nextBtn)

    backBtn.addEventListener('click', () => {
        renderPreviousQuestion()
        localStorageAnswers()
        saveAnswers()

        if (i < 9) {
            if (document.querySelector('.submit')) {
            document.querySelector('.submit').remove()
            }
            pageNavigation()
        }
    })

    nextBtn.addEventListener('click', () => {
        renderNextQuestion()
        localStorageAnswers()
        saveAnswers()

        if (i == 9) {
            if (nextBtn) {
             nextBtn.remove()   
            }
            submit()
        } 
    })
}



function resultsPage() {
    let numCorrect = 0

    for (j = 0; j < 10; j++) {

        const question = questionSet[j]

        if (localStorage.getItem(`question ${j}`) == question.correctAnswer) {
            numCorrect += 1
        } else if (questionSet[3].correctAnswer.split(' ').includes(localStorage.getItem(`question 3`))) {
            numCorrect += 1
        }

    }

    if (numCorrect >= 7) {
        document.querySelector('#results').innerHTML = 
        `<p>Result: PASS</p>
        <p>Score: ${numCorrect}/10 (${numCorrect}0%)</p>`
    } else if (numCorrect < 7) {
        document.querySelector('#results').innerHTML = 
        `<p>Result: FAIL</p>
        <p>Score: ${numCorrect}/10 (${numCorrect}0%)</p>
        <br>
        <br>`
    }
}
