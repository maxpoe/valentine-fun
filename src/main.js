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
let currentPet = window.VALENTINE_PET && (window.VALENTINE_PET === "dog" || window.VALENTINE_PET === "cat") ? window.VALENTINE_PET : "cat";

function render() {
  const name = window.VALENTINE_NAME && window.VALENTINE_NAME !== "__VALENTINE_NAME__" ? `, ${window.VALENTINE_NAME}` : "";

  const waitingImg = `/${currentPet}-waiting.png`;
  const sadImg = `/${currentPet}-sad.png`;
  const celebratingImg = `/${currentPet}-celebrating.png`;

  app.innerHTML = `
    <div id="main-view">
      <div class="theme-switch-wrapper">
        <span class="theme-label">Cat Purr-sonality 🐱</span>
        <label class="switch">
          <input type="checkbox" id="themeToggle" ${currentPet === 'dog' ? 'checked' : ''}>
          <span class="slider"></span>
        </label>
        <span class="theme-label">Puppy Love 🐶</span>
      </div>

      <h1 class="title">Will you be my Valentine${name}?</h1>
      <div class="cat-container">
        <img src="${noCount === 0 ? waitingImg : sadImg}" alt="Cute Pet" class="cat-image" id="catImage">
      </div>
      <div class="buttons">
        <button id="yesBtn" class="btn" style="font-size: ${1.2 + noCount * 1.2}rem; padding: ${1 + noCount * 0.5}rem ${2.5 + noCount * 1.2}rem;">Yes</button>
        <button id="noBtn" class="btn">${noCount === 0 ? 'No' : noPhrases[Math.min(noCount - 1, noPhrases.length - 1)]}</button>
      </div>
    </div>
    
    <div id="celebration-view" class="celebration">
      <h1 class="title">Yay! Now I am the happiest man on earth! ❤️</h1>
      <div class="cat-container">
        <img src="${celebratingImg}" alt="Happy Pet" class="cat-image">
      </div>
    </div>
  `

  setupEventListeners()
}

function setupEventListeners() {
  const yesBtn = document.querySelector('#yesBtn')
  const noBtn = document.querySelector('#noBtn')
  const themeToggle = document.querySelector('#themeToggle')
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
      render()
    })
  }

  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
      currentPet = e.target.checked ? 'dog' : 'cat'
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
