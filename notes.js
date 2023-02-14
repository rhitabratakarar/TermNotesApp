import fs from 'fs'
import chalk from 'chalk'
import * as _ from 'lodash-es'

const notestxt = './notes.txt'

const getDataFromFile = () => {
  const dataBuffer = fs.readFileSync(notestxt, { encoding: 'utf8' })
  return dataBuffer
}

const saveNotes = (allNotes) => {
  fs.writeFileSync(notestxt, (typeof allNotes === 'string') ? allNotes : JSON.stringify(allNotes), { encoding: 'utf8' })
}

const getNotes = () => {
  const dataBuffer = getDataFromFile()
  if (dataBuffer) {
    const parsedContents = JSON.parse(dataBuffer)
    parsedContents.forEach((value, index) => {
      console.log('\n')
      console.log(index, '\b.', chalk.green('Title:', value.title))
      if (value.body.length > 50) {
        console.log('Body:', value.body.substr(0, 50) + '...')
      } else {
        console.log('Body:', value.body)
      }
    })
  } else {
    console.error(chalk.bgRed('Message: '), chalk.red('Found nothing.'))
  }
}

const addNote = (title, body) => {
  const dataBuffer = getDataFromFile()
  if (dataBuffer) {
    const parsedContents = JSON.parse(dataBuffer)
    parsedContents.push({ title, body })
    saveNotes(parsedContents)
  } else {
    const newData = JSON.stringify([{ title, body }])
    saveNotes(newData)
  }
}

const readNote = (title) => {
  const dataBuffer = getDataFromFile()
  const parsedJsonData = JSON.parse(dataBuffer)
  let filteredData = null
  if (parsedJsonData) {
    filteredData = _.filter(parsedJsonData, note => note.title === title)
  }
  if (filteredData.length) {
    console.log(chalk.bgGreen('Notes Found.'))
    filteredData.forEach((value, index) => {
      console.log(index, '\b.', chalk.green(value.title))
      console.log('Body:', value.body)
    })
  } else {
    console.log(chalk.bgRed('No Notes found with that title.'))
  }
}

const removeNote = (title) => {
  const dataBuffer = getDataFromFile()
  const notesInJson = JSON.parse(dataBuffer)
  const filteredNotes = _.reject(notesInJson, note => note.title === title)
  saveNotes(filteredNotes)
}

export { getNotes, addNote, removeNote, readNote }
