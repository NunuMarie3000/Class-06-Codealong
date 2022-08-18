# Class_06_Codealong

## Class06_Codealong: API requests with Axios

* HTTP-we use it to send requests over the internet
* WRRC: Web Request Response Cycle
* computer is the client
  * client makes the request(like typing something in a searchbar, like typing in www.youtube.com)
  * request(url, header, method)
    * url looks like(www.youtube.com)
    * header, we have to send specific info to a certain server, if we don't have that info in the header, the server can't get the info it needs, it can't understand it
    * GET METHOD: when you use a get method, you're requesting info, not changing it or anything
      * 3 other methods we use(HTTP methods):
        * GET: read only info
        * POST: create
        * PUT: update
        * DELETE: delete
    * client can make any of these HTTP methods, these are included when we the client makes a request to the server
    * behind the scenes, server is getting reader to send a response
      * when we (www.youtube.com), it's the server's job to process that request, and send some information beack
        * most of the time the server will be an API, but API is usually being pulled from a database
      * The server sends back the response, the response includes: Status code, Data, Headers in the form of a promise
        * status codes are there to tell the client if it can/cannot get the data requested
        * 200 request: everything went okay
        * 404 request: not found
      * message.body = Our data
    * HTTP protocols are stateless
      * it won't remember that request anymore after you make it
      * you're gonna need a way to save the data in our application so we can use it...a promise? idk...guess we'll see soon
      * ex: you're a guest at a restaurant and you order something. The waiter is the client, they need to take your request and give it to the chef, the chef(if they make it correctly and everything's fine, they send back a 200, good food, if the food has a bug in it, the chef wont send it back until the issue is fixed, they send 404 not found, etc.)
* how do we use this info in our react applications?
  * API(Application Programming Interface)
  * We're gonna look at a 3rd party API(one from another service, not one that we made)
    * there's a lot of APIS, like apps on our phones
    * think about what you wanna build, then look to see if there are apis to help you build that
  * data sent back to you from the http request, the response you get back is in json, so we love that
    * keys are applied in the header of your URL, we'll see this later
  * we need url to make http request
  * we don't need to use axios to make http requests, but it's nice, so we are
  * in 201, i used fetch method, it's equivalent to axios, axios is just another option, its easier
  * to download: npm install axios
    * we have to import it still even though we install it: import axios from 'axios'
  * we're gonna use async/await function, they go together, you can't use one without another
    * ex:
    function getInfo async(){
      await something.then()
    }
* npm i react-dotenv
  * we're gonna use it to put our keys in it so they aren't stolen, make sure our dotenv is hidden
  * we made a .env file
  * we added .env in gitignore under misc
  * process.env.REACT_APP_LOCATION in place of the token in our axios request
  * make sure .env is always outside of the src folder