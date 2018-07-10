// #toDo: use jQuery and extract common code between this and _updateDisplay()
const _addNoteToDisplay = (id, noteData) => {
  const displayNoteTemplate = document.getElementsByClassName('dn-container')[0];
  const newNote = displayNoteTemplate.cloneNode(true);
  newNote.querySelector('.dn-title').textContent = noteData.title;
  newNote.querySelector('.dn-body').textContent = noteData.body;
  newNote.querySelector('.dn-color').style.backgroundColor = noteData.color;
  newNote.classList.remove('dn-sample');
  newNote.hidden = false;
  newNote.id = id;
  $('#notes').append(newNote);
};

const _removeNoteFromDisplay = id => {
  $(`#${id}`).remove();
};

const _getNoteData = () => {
  return {
    title: $('textarea')[0].value,
    body: $('textarea')[1].value,
    edit: $('#saveNote').data('edit'),
    color: $('.aen-color')[0].style.backgroundColor || '#ffaab1'
  };
};

const _updateDisplay = (id, noteData) => {
  const noteNode = $(`#${id}`);
  $(`#${id} .dn-title`).text(noteData.title);
  $(`#${id} .dn-body`).text(noteData.body);
  $(`#${id} .dn-color`)[0].style.backgroundColor = noteData.color;
};

const _updateModalObject = ({ title = '', body = '', color = '#ffaab1' } = {}) => {
  $('textarea')[0].value = title;
  $('textarea')[1].value = body;
  $('.aen-color')[0].style.backgroundColor = color;
};

// #toDo: replace with own debounce
const _debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export {
  _debounce,
  _getNoteData,
  _updateDisplay,
  _addNoteToDisplay,
  _updateModalObject,
  _clearNoteTemplate,
  _removeNoteFromDisplay
};
