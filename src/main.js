import './style.css'

const app = document.querySelector('#app')

const noPhrases = [
  "Are you sure?",
  "Please reconsider!",
  "But I'm so cute!",
  "Heartbroken... :(",
  "Don't do this to me!",
  "Last chance?",
  "Really? For real?",
  "I'll buy you snacks!",
  "I'll let you pick the movie!",
  "Pretty please with a cherry on top?",
  "You're breaking my heart!",
  "Think of the kittens!",
  "I won't stop asking!",
  "Okay, one more try?",
  "You have to say yes now :D"
]

let noCount = 0
let yesScale = 1

function render() {
  app.innerHTML = `
    <div id="main-view">
      <h1 class="title">Will you be my Valentine?</h1>
      <div class="cat-container">
        <img src="${noCount === 0 ? '/cat-waiting.png' : '/cat-sad.png'}" alt="Cute Cat" class="cat-image" id="catImage">
      </div>
      <div class="buttons">
        <button id="yesBtn" class="btn" style="font-size: ${1.2 + noCount * 1.2}rem; padding: ${1 + noCount * 0.5}rem ${2.5 + noCount * 1.2}rem;">Yes</button>
        <button id="noBtn" class="btn">${noCount === 0 ? 'No' : noPhrases[Math.min(noCount - 1, noPhrases.length - 1)]}</button>
      </div>
    </div>
    
    <div id="celebration-view" class="celebration">
      <h1 class="title">Yay! Now I am the happiest man on earth! ❤️</h1>
      <div class="cat-container">
        <img src="/cat-celebrating.png" alt="Happy Cat" class="cat-image">
      </div>
    </div>
  `

  setupEventListeners()
}

function setupEventListeners() {
  const yesBtn = document.querySelector('#yesBtn')
  const noBtn = document.querySelector('#noBtn')
  const mainView = document.querySelector('#main-view')
  const celebrationView = document.querySelector('#celebration-view')

  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      mainView.style.display = 'none'
      celebrationView.classList.add('active')
      triggerConfetti()
    })
  }

  if (noBtn) {
    noBtn.addEventListener('click', () => {
      noCount++
      // The user asked for "double in size" each time.
      yesScale = Math.pow(2, noCount)
      render()
    })
  }
}

function triggerConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    confetti.style.left = Math.random() * 100 + 'vw'
    confetti.style.backgroundColor = ['#ff4d6d', '#ff758f', '#ffccd5', '#c9184a'][Math.floor(Math.random() * 4)]
    confetti.style.animationDelay = Math.random() * 3 + 's'
    confetti.style.width = Math.random() * 15 + 5 + 'px'
    confetti.style.height = confetti.style.width
    document.body.appendChild(confetti)

    setTimeout(() => confetti.remove(), 6000)
  }
}

render()
