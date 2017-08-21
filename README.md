# SocketMongoChat Client (Websocket Chat Client)

This is experimental project for showcasing the power of Websockets in realtime communication with server. This is only a client part of whole application . To learn the server interface of this chat application pls refer [https://github.com/suwigyarathore/SocketMongoChat-Server-.git]

This project uses below technologies

* WebSockets (via Socket.io)
* NodeJS
* Express JS
* Docker (using Docker Compose)

## About Express

Fast, unopinionated, minimalist web framework for Node.js. xpress is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
 [https://expressjs.com/]
 

You should have docker and docker-compose installed in your machine as the entire setup is based 
on docker. Pls follow below link for the same 
[https://docs.docker.com/engine/installation/]

Once done the above setup then you can move to next section. Pls user below
command to verify installation

```
$ docker -v
$ docker-compose up -v
```

### Installing

Now lets start our ChatSocketClient app project 

```
git clone https://github.com/suwigyarathore/SocketMongoChat-Client-.git
cd <cloned directory name>
npm install
docker-compose up 
```

Pls check console to see your server must have started at 4000 port and print below
things in console

```
[nodemon] starting `node server.js`
web_1  | App listening on port 3000!

```
My chat client is also deployed on heroku if you are intrested on making your own
server you are free to use this [https://vast-inlet-50372.herokuapp.com/   ] .Pls refer server.js to
sync your client events.

## License

This project is licensed under the MIT License 