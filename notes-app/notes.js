const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNote();
    const duplicateNotes = notes.find((note)  => note.title === title);

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    }else{
        console.log(chalk.red('Note title taken!'));
    }
    
};

const removeNote = (title) => {
    const notes = loadNote();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notesToKeep.length === notes.length){
        console.log(chalk.red('Note title not exist!'));
    }else{
        saveNotes(notesToKeep);
        console.log(chalk.green('note removed'));
    }
};

const listNodes = () => {
    const notes = loadNote();
    console.log(chalk.green('Your note'));
    
    notes.forEach(note => {
        console.log(note.title);
    });
};

const readNote = (title) => {
    const notes = loadNote();
    const notesToRead = notes.find((note) => note.title === title);

    if(notesToRead){
        console.log('Title: ',notesToRead.title);
        console.log(`Body: ${notesToRead.body}`);
    }else{
        console.log(chalk.red('Note title not exist!'));
    }
};

const saveNotes = (notes) => {
    const dataJSON =JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNote = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNodes: listNodes,
    readNote: readNote
};