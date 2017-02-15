// var obj = {
//   name: 'Sam'
// }
//
// var stringObj = JSON.stringify(obj)
//
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name": "Sam", "age": 30}'
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body',
}

var originalNoteString = JSON.stringify(originalNote)
console.log(typeof originalNoteString)
console.log(originalNoteString)

fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')

var note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)

var newNote = {
  title: 'Second note',
  body: 'So many notes'
}

var secondNote = JSON.stringify(newNote)

fs.writeFileSync('notes.json', secondNote)
