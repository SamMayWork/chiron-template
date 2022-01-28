let responses = {}

let buttons = document.querySelectorAll('button')

const correctAnswer = (e) => {
  const targetId = e.target.parentElement.parentElement.parentElement.id
  
  if (!responses[targetId]) {
    responses[targetId] = true
  }
}

const wrongAnswer = (e) => {
  const targetId = e.target.parentElement.parentElement.parentElement.id
  
  if (!responses[targetId]) {
    responses[targetId] = false
  }
}

const submit = (e) => {
  let correctCount = 0

  Object.keys(responses).forEach(response => {
    correctCount += responses[response]
  })

  alert(`You scored ${correctCount} out of 5, ${correctCount === 5 ? 'well done, sending you back to the tool!' : 'not quite right, review the content and have another go!'}`)

  if (correctCount === 5) {
    window.location.replace(e.target.dataset.correctredirect)
  } else {
    window.location.replace(e.target.dataset.wrongredirect)
  }
}

buttons.forEach(button => {
  if (button.classList[0] && button.classList[0] == 'correct') {
    button.addEventListener('click', correctAnswer)
  } else {
    if (button.id !== 'submit') {
      button.addEventListener('click', wrongAnswer)
    } else {
      button.addEventListener('click', submit)
    }
  }
})