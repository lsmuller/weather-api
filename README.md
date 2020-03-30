## Notes

### Design v0
#### Endpoints
`/v1/weather?city={:city}`
- GET /v1/weather?city=PortoAlegre    Fetches weather info for the requested city

#### Models definition
weather     
`{date: string, city: string (city.Name), temperature: float, scale: string (celsius), condition: string (condition.Name)`
city        
`{ Name: string }`
condition   
`{ Name: string }`
scale       
`{ "celsius" }`

#### Responses
200 : `weather`
500 : `{ "error" : "string" }`

#### Data sample
City:
1 1 Vancouver
2 2 PortoAlegre
3 3 Montreal
4 4 SaoPaulo

Condition
1 Clear
2 Cloudy
3 Rain
4 Thunderstorm
5 Snow
6 Mist

#### Implementation definitions:
- stack: [MEAN](http://meanjs.org/)
    MongoDB - NoSQL database
    Express.js - Wb applications framework
    Angular.js - MVC framework used for web applications
    Node.js - Framework used for scalable server-side and networking applications.

    why?
    Well know in the community (and recommended)
    Fulfilled the requirements for this development
    Easy for begginers
    Wide documentation available

- unit testing: [Jest](https://jestjs.io/)
Even though it's not the most complete framework, it's quite easy to use and requires almost no extra configuration.

- authentication: [Passport.js](http://www.passportjs.org/packages/)
Well known and proves several strategies to assist the developers.

- deploy: [Heroku](heroku.com/)
Extremelly easy to use with Node.js, offers a wide range of built-in services in the platform, free (depending on constraints that can be checked on the website)

### Date
Sunday, Match 29th

### Location of deployed application
https://evening-wave-33176.herokuapp.com

### Time spent
Definitions and design: 2.5h (described in Notes & Shortcuts/Compromises made sessions)
Setup: 1h
Implementation: 3h

### Assumptions made
- Input format: US english, no special characters, no accents
- This API works using celsius temperature scale
- There will be no duplicated city name within the data sample
- the Name field will follow the UpperCamelCase convention

### Shortcuts/Compromises made
#### Design v1
##### Implement all endpoints defined at design phase

`/v1/weather`
- GET   Fetches weather info for all registered cities

`/v1/weather?country={:country}&city={:city}`
- GET   Fetches weather info for the requested city considering the country
/v1/weather?country=Brazil&city=PortoAlegre

`/v1/country`
- GET   Fetches the registered countries
- POST      Add a new Country

`/v1/country/{:country}`
- GET       Gets an existing Country
- PUT       Updates an existing country
- DELETE    Deletes an existing country

`/v1/country/{:country}/city`
- GET       Fetches the cities available for the requested country
- POST      Adds a new City

`/v1/country/{:country}/city/{:city}`
- GET       Gets an existing city
- PUT       Updates an existing city
- DELETE    Deletes an existing city

##### Add swagger and Docker support
Further reado about how to add the Swagger to the app. Post the API to [SwaggerHub](https://swagger.io/tools/swaggerhub/).
 
##### Implement Authentication
 Update the application to use [Passport.js](http://www.passportjs.org/) to authenticate the user using OAuth 2.0 via Google account.

##### Build the UI using Angular
I have tried to create a dummy component fetching static data from the API, but I was unsuccessfull in my attempt. I have no knowledge in front-end development as of now.

### Stretch goals attempted
I could successfully deploy the application to Heroku with no further issues. As the platform offers a built in instance for MongoDB, I wish I persisted the data sample instead of storing it in-memory.

### Instructions to run assignment locally
To run locally:
- clone the repository into the computer
- Go to the root folder of the project
- Run the following commend via terminal:
`node server.js`

Access via Heroku: https://evening-wave-33176.herokuapp.com 

The endpoint can be accessed via Rest client or directly in the browser.

### What did you not include in your solution that you want us to know about?
Node.js unit testing. Karma comes as a built in test framework for Angular applications. I have chosen Jest for the API unit testes, but I couldn't configure the project to run both frameworks in parallel.

### Other information about your submission that you feel it's important that we know if applicable.
- I have never worked with any of the technologies I used in this challenge.
- I have chosen to invest a large portion of time in designing and understanding the proper technologies to use. Unfortunatelly, 

### Your feedback on this technical challenge
I learned a lot while doing the test