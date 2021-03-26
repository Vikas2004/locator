# Locator App:

- This application helps its users to find the treasures based on the treasure location and it validates the user location when it matches with the treasure location and confirms it to the user with UI effects. How cool is it, right?

# About the App:

- This is a single page application where two colors will be displayed.
- When the player touches/clicks the first color they request a valid (treasure) location and hear confirmation that a location has been selected so that they can start finding the location.
- When the player touches/clicks the second color they check with the application if they are in the location or not. If not they would get instructions on how to get to the location with speech.(They can hear this.)
- The player will be able to hear and displayed the message if they have reached the location.
- The player will also be prompted if they want another location and if the player chooses to continue the above process will be iterated.

# Contributors:

<table>
  <tr>
    <td align="center"><a href="https://github.com/Vikas2004"><img src="https://avatars.githubusercontent.com/u/60014528?s=400&u=1d1b38ceb231dedb3dc4d9de6d41bd1603eb9590&v=4" width="100px;" alt=""/><br /><sub><b>Vikas Baswapuram</b></sub></a><br /><a href="https://github.com/Vikas2004" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Dixith1196"><img src="https://avatars.githubusercontent.com/u/60023341?s=400&u=fb45357be42f7f2b97401c4e7f6e607b781c8f8b&v=4" width="100px;" alt=""/><br /><sub><b>Deekshith Maram</b></sub></a><br /><a href="https://github.com/Dixith1196" title="Code">💻</a></td>
    </tr>
`   </table>

<h3>MERN Stack:</h3>
<table>
  <tbody>
  <tr>
     <td>Front End</td>
     <td>ReactJS</td>
    </tr>
   <tr>
     <td>Back End</td>
     <td>ExpressJS</td>
    </tr>
   <tr>
     <td>Database</td>
     <td>MongoDB</td>
    </tr>
    <tr><td>Environment</td><td>nodeJS</td></tr>
  
  </tbody>
  </table>

  ## Host: 
  
  - Heroku

  ## Datastore:

  - MongoDB

  ## ORM:

  - Mongoose

  ## Published Link:

  - [App](https://treasure-locator-frontend.herokuapp.com/)
  
  - Locations are based on the circles.

## Running the app Locally:

- Clone the repo down to your local machine.
- Open the project using Visual Studio Code .
- As the project is divided into front-end(locator-client) and beck-end(locator-api) they both have to be started sperately using the following command ```npm run start```.
- **Note**: If you wish to run the app locally you will have to change the BASE_URL to local host in he constants.js file which is in the locator-client file.

## References:

https://adampaxton.com/how-to-deploy-to-multiple-heroku-apps-from-the-same-git-repository/
https://betterprogramming.pub/how-to-deploy-multiple-apps-under-a-single-github-repository-to-heroku-f6177489d38
https://react-bootstrap.github.io/components/navbar/


