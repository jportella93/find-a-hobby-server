<p align="center">
  <img src="https://imgur.com/NuDk8QM.png" />
</p>


> A web app that will help you discover the most amazing thing to spend your leisure time on.

<h3 align="center">This is the server implementation of <br>
https://github.com/jportella93/find-a-hobby-client</h3>


## Getting started
Install mongodb and redis in your computer if you don't have done it already. <br>
https://www.mongodb.com/ <br>
https://redis.io/

1. Clone the repo

```
$ git clone https://github.com/jportella93/find-a-hobby-server.git
$ cd find-a-hobby-server
```

2. Install dependencies
```
$ npm install
```

3. Start redis database
```
$ redis-server
```

4. In a new terminal window (keep the other one also open): Start mongodb database
```
$ mongod
```

5. In a new terminal window (keep the other two also open): Start development server
```
$ npm run start
```
If everything went good you will see a message like:

  <p align="center"><em>Mongoose connected to mongodb://localhost/find-a-hobby <br>
  find a Hobby! Server connected on port 3000</em></p>

The number of the port that logs in (3000 in this case) is what you have to write in the client in the file /src/lib/apiClient.js

6. Connect with client.
Go to https://github.com/jportella93/find-a-hobby-client and follow the getting started instructions.


## Built with

* [Koa](https://github.com/koajs/koa) - Async middleware for Node.
* [Reccomendation Raccoon](https://github.com/guymorita/recommendationRaccoon) - Recommendation engine.
* [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JSON web token implementation for Node.
* [Mongodb](https://github.com/mongodb/mongo) - No relational database.
* [Mongoose](https://github.com/Automattic/mongoose) - Layer for mongodb.


## Author

Jon Portella - [Github](https://github.com/jportella93) - [LinkedIn](https://www.linkedin.com/in/jonportella/)


## License

This project is licensed under the MIT License.

<p align="center">
  <img src="https://imgur.com/W3jHOFM.png" />
</p>
