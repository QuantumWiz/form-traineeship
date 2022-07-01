# Web form for signing up for traineeship at PHZ

This is a simple form done as an excercise during training. It's meant for future trainees at PHZ who can enter their name and email address into a form. The backend will then call a script that generates contract PDFs based on a template and include the entered name in the contract.

This project is currently a "mininimum viable product". It works as intended but there are some features that could be added. Currently the web form looks a bit bare and tells of submit success or failure only in the console. Backend checks that all fields are received but doesn't yet check if the called script returns errors.

## Running and testing

First you need to install Node packager with `npm install` in both backend and frontend directories.

You can run the backend in the backend directory with `npm run start:dev`. It listens to port 3002.

You can run the frontend in the frontend directory with `npm start`. It runs in the port 3000 by default but can ask to run in a different port if it's taken.

The frontend also has a single Enzyme test which you can run with `npm test` in the frontend directory.