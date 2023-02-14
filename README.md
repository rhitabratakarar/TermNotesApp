# Description

This is a simple terminal based Notes app.

# Installation:

1. This project requires NodeJS to run as the backend.

2. Clone this git repository using the below mentioned command.
            
        $ git clone https://github.com/rhitabratakarar/TermNotesApp.git

3. Get inside the directory using
        
        $ cd TermNotesApp

4. Once you're into the project directory, use the below command to install the dependencies that will fetch the required packages to run the application.

        $ npm install

5. To run the application, use the below mentioned command

        $ node app.js

# Dependencies:

1. NodeJS

2. NPM

3. Chalk

4. Lodash-es

5. Yargs

**(Optional)**: Development Dependencies:

1. Nodemon

**(Note):** Optional dependency is only required for development purposes.

# Usage:

The following commands can be issued through the command line.

1. `add` - To add a note.

        example:

        $ node app.js add --title='sample title' --body='sample body'

2. `remove` - To remove a note using its title.

        example:

        $ node app.js remove --title='sample title'

3. `list` - To list all of the available notes.

        example:

        $ node app.js list
    
4. `read` - To read a particular note using its title.

        example:

        $ node app.js read --title='sample title'
