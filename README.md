# Bus Website
This is a simple bus booking website that can take user input in a reservation 
form and store it in the file database.db. The form can take name, number of 
people, route number, and time. There's also a place to display a
bus schedule (like which buses are running at this time and date and
their route), but it hasn't been implemented yet, so inputting the
time and date does nothing. The website also displays images on a roulette, 
and the images can be swapped for more relevant ones.

## How to Locally Deploy

1. **Install dependencies**

   Open a terminal in the project folder and run:
   ```sh
   npm install express body-parser sqlite3
   ```

2. **Start the server**

   In the same terminal, run:
   ```sh
   node server.js
   ```

   You should see:
   ```
   Server is running on http://localhost:3000
   ```

3. **Open the website**

   Open your browser and go to:
   ```
   http://localhost:3000
   ```

The website can now be viewed and used. The data entered in the reservation
form will be stored in database.db.