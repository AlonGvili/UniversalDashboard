import react from 'react'

const NEW_COMMENT = 'new_comment' // POST: localhost:port/api/comments/{commentId}
const ADD_COMMENT = 'add_comment' // POST: localhost:port/api/comments/{parentId}/{commentId}
const GET_COMMENT = 'get_comment' // GET: localhost:port/api/comments/{parentId}/{commentId}
const REMOVE_COMMENT = 'remove_comment' // DELETE: localhost:port/api/comments/{parentId}/{commentId}
const SET_COMMENT = 'set_comment' // PUT: localhost:port/api/comments/{parentId}/{commentId}
const GET_COMMENTS = 'get_comments' // GET: localhost:port/api/comments/{parentId}
const REMOVE_COMMENTS = 'remove_comments' // DELETE: localhost:port/api/comments/{parentId}
