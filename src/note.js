import Store from './store';

// #toDo: Figure out why importing an object is breaking
import {
  _debounce,
  _getNoteData,
  _updateDisplay,
  _addNoteToDisplay,
  _updateModalObject,
  _removeNoteFromDisplay
} from './noteHelper';

const store = new Store();

const updateColor = event => {
  const color = $(event.target).css('background-color');
  $($('.aen-color')[0]).css('background-color', color);
};

const saveNote = event => {
  const noteData = _getNoteData();
  if (noteData.edit) {
    const id = $('#saveNote').attr('data-id');
    store.update(id, noteData);
    _updateDisplay(id, noteData);
    $('#saveNote').attr('data-id', null);
    _updateModalObject();
  } else {
    const generatedId = store.add(noteData);
    _addNoteToDisplay(generatedId, noteData);
  }
  _updateModalObject();
};

const deleteNote = event => {
  const id = $('#deleteNote').attr('data-id');
  store.delete(id);
  _removeNoteFromDisplay(id);
  $('#deleteNote').attr('data-id', null);
};

const editNote = () => {
  const id = $(event.target).parents('.dn-container')[0].id;
  const noteData = store.fetch(id);
  const editStatus = $('#saveNote');

  _updateModalObject(noteData);
  $(editStatus).data('edit', true);
  $('#saveNote').attr('data-id', id);
  $('.add-note-btn').click();
};

const cancelNote = () => {
  _updateModalObject();
};

const validateNote = _debounce(() => {
  $('#aen-title textarea')[0].value.length > 0 && $('#aen-body textarea')[0].value.length > 0
    ? $('#saveNote').attr('disabled', false)
    : $('#saveNote').attr('disabled', true);
}, 250);

const getDeleteId = () => {
  const id = $(event.target).parents('.dn-container')[0].id;
  $('#deleteNote').attr('data-id', id);
};

export { saveNote, updateColor, deleteNote, editNote, cancelNote, validateNote, getDeleteId };
