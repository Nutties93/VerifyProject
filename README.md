# React Project with Node Express Backend

> Example on using React application with a Node Express Backend to run Nexmo APIs

## Usage

Install nodemon globally

```
1)npm i nodemon -g
```

Install server and client dependencies by going to their root directories.

```
1) npm install 
2) cd client && npm install
```

Update the .env file. Insert values for API_KEY, API_SECRET,BRAND_NAME & VIRTUAL_NUMBER.

To start the server and client at the same time (from the root of the project)

```
cd ..
npm start 
```

Run ngrok application. Listen to port 3001
```
ngrok http 3001
```

Update the webhook url in your account settings under "inbound messages". it will look like this!
```
https://e79b4c9b.ngrok.io/webhooks/inbound-sms
```

## How this works

Since Nexmo API only supports NodeJS and I am interested in creating a react single-page-application.
However, the Nexmo library only supports NodeJS. Hence,  an Express "middleware" was created and the react application will sit on top of this using a **proxy server**. 
We will have a _proxy_ entry in `client/package.json`.

```
"proxy": "http://localhost:3001/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:3001**.


## After starting the application
1) Enter your phone number
2) Enter the code that was sent to your phone number

This will call Nexmo APIs to verify that you own the number that you have just keyed in.

3) Upon clicking the "SUBMIT 4 PIN" button, you will directed "/verifyproject", a protected page.

**The routing of the web application is using react-routers.The routing mechanism can also make use of react-cookies to encrypt/decrypt "JWT tokens".
In this project, I'm simply storing the required values as cookies after every successful API calls and the protected page checks for the existence of these cookies.**

4) "Click" logout to return back to the main page. "/"

5) In the "/verifyproject" page, you can now key in two valid phone numbers and execute the "private SMS communication" example.




