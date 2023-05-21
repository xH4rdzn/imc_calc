export const Modal = {

  wrapper:document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('.close'),
  result:document.querySelector('#imc'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown (e) {
  if(e.key === 'Escape') {
    Modal.close()
  }
}