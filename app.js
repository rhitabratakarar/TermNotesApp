import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { getNotes, addNote, removeNote, readNote } from './notes.js'

const command = yargs(hideBin(process.argv))

  /**
   * add command: add a new note
   * @usage1 app.js add --title='some custom title' --body='some custom body'
   */
  .command('add', 'Add a note.', () => {}, (args) => {
    addNote(args.title, args.body)
  })

  /**
   * Remove command: remove a note
   * @usage app.js remove --title='some title to remove'
   */
  .command('remove', 'Remove a note', () => {}, (args) => {
    removeNote(args.title)
  })

  /**
   * Read command: Read the note
   * @usage app.js read --title='some title to read'
   */
  .command('read', 'Read a note', () => {}, (args) => {
    readNote(args.title)
  })

  /**
   * List command: To list all the notes
   * @usage app.js list
   */
  .command('list', 'List all the notes', () => {}, (args) => {
    getNotes()
  })

  .demandCommand(1, chalk.red('Message: Please provide at least one command.'))
  .argv

// if (command._[2] === 'add') {
//   console.log(chalk.bgGreen('Adding Note.'))
// } else if (command._[2] === 'remove') {
//   console.log(chalk.bgRed('Removing Note!!!'))
// }
