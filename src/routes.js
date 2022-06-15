const handle = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: handle.addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handle.getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handle.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handle.editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handle.deleteNoteByIdHandler,
  },
];

module.exports = routes;
