(function() {

  returnANote()

  function returnANote() {
    var note = new Note('i am a note')
    assert.isTrue( note.newNote === 'i am a note')
  }
})();