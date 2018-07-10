class Store {
  constructor() {
    this.notes = {};
  }

  add(note) {
    const id = Object.keys(this.notes).length;
    delete note.edit;
    this.notes[id] = note;
    return id;
  }

  update(id, note) {
    delete note.edit;
    this.notes[id] = note;
  }

  fetch(id) {
    return this.notes[id];
  }

  delete(id) {
    this.notes[id] = null;
  }
}

export default Store;
