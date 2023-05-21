export const AlertError = {
  element: document.querySelector('.alert-wrapper'),
  open() {
    AlertError.element.classList.add('open')
  },
  close() {
    AlertError.element.classList.remove('open')
  }
}

