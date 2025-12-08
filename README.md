<p align="center">
  <img src="https://imgur.com/NuDk8QM.png" />
</p>


> A web app that will help you discover the most amazing thing to spend your leisure time on.

<h3 align="center">This is the server implementation of <br>
https://github.com/jportella93/find-a-hobby-client</h3>


## Getting started

This project requires Node.js 18+, MongoDB, and Redis to run locally.

### Prerequisites

1. **Install Node.js 18+**: Download from https://nodejs.org/
2. **Install MongoDB**: https://www.mongodb.com/docs/manual/installation/
3. **Install Redis**: https://redis.io/docs/install/install-redis/

### Setup

1. Clone the repo
```
$ git clone https://github.com/jportella93/find-a-hobby-server.git
$ cd find-a-hobby-server
```

2. Install dependencies
```
$ npm install
```

3. Set up environment variables
```
$ cp .env.example .env
# Edit .env with your configuration if needed
```

4. Start MongoDB (in one terminal)
```
$ mongod
# Or if using MongoDB with brew on macOS: brew services start mongodb-community
```

5. Start Redis (in another terminal)
```
$ redis-server
# Or if using Redis with brew on macOS: brew services start redis
```

6. Start the development server (in another terminal)
```
$ npm run dev
```

If everything starts successfully, you should see:
- "Mongoose connected to mongodb://localhost:27017/find-a-hobby"
- "find a Hobby! Server connected on port 3000"

7. Connect with client
Go to https://github.com/jportella93/find-a-hobby-client and follow the getting started instructions. Use port 3000 in the client configuration.


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
