const sticker = document.querySelector('.toggle-sticker')
let peeled = false

sticker.onclick = () => {
  if (peeled = !peeled)
    sticker.classList.add('is-peeled')
  else
    sticker.classList.remove('is-peeled')
}

setTimeout(() => {
  sticker.classList.remove('is-peeled')
}, 0)