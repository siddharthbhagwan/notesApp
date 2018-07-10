// #toDo: Figure out why importing an object is breaking it
import { saveNote, updateColor, deleteNote, editNote, cancelNote, validateNote, getDeleteId } from './note';

function init() {
  $(document).on('click', '#saveNote', saveNote);
  $(document).on('click', '#cancelNote', cancelNote);
  $(document).on('keyup', 'textarea', validateNote);
  $(document).on('click', '.aen-color-palette', updateColor);
  // #toDo: find a cleaner way to get id
  $(document).on('click', '.fa-trash-o', getDeleteId);
  $(document).on('click', '#deleteNote', deleteNote);
  $(document).on('click', '.fa-pencil', editNote);
}

init();

export default init;
