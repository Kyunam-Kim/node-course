const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')


// add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()

// console.log(process.argv)
// console.log(yargs.argv)




// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove'){
//     console.log('Removing note!')
// }
















// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is KyuNam ')
// fs.appendFileSync('notes.txt', 'and 25 years old')

// const name = 'kyunam'

// console.log(name)


// require('./utils')

// const validator = require('validator')
// const chalk = require('chalk')

// const getNotes = require('./notes')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isURL('http:/mead.io'))

// const style = chalk.red.bold.inverse
// console.log(style("Error!"))









