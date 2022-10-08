resultsPage()

for (i = 0; i < 10; i++) {
    let question = questionSet[i]
    const radioReview = document.querySelectorAll('.q-review')
    radioReview.forEach(() => {
        document.querySelectorAll('ul > li').forEach((answer) => {
        if (answer.textContent == questionSet[8].correctAnswer.split(' ')[0] || answer.textContent == questionSet[8].correctAnswer.split(' ')[1]) {
            answer.style.color = 'green'
         } else if (answer.textContent == question.correctAnswer) {
            answer.style.color = 'green'
        } else if (answer.textContent == localStorage.getItem(`question ${i}`) && answer.textContent !== question.correctAnswer) {
            answer.style.color = 'red'
        }
        })
    })
    const textReview = document.querySelectorAll('.text-review')
    textReview.forEach((answer) => {
            answer.style.color = 'green'
})
}
