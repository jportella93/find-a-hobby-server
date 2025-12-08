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
2. **Install Docker**: https://www.docker.com/get-started (for running MongoDB and Redis in containers)

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

### Database Seeding

The project includes mock data that can be seeded into your database for development and testing.

4. Seed the database with mock data

```
$ npm run seed
```

This will populate your MongoDB database with sample hobbies and user data. The seeding script:

- Adds 10 diverse hobbies with realistic descriptions, links, tags, and images
- Uses upsert operations to avoid duplicates
- Can be run multiple times safely

**Mock Data Includes:**

- Photography, Gardening, Cooking, Rock Climbing, Piano
- Woodworking, Cycling, Drawing, Meditation, Programming
- Each hobby includes helpful links, relevant tags, and sample images

### Running with Docker (Recommended)

4. Start MongoDB and Redis containers

```
$ docker-compose up -d
```

Or use the npm script:

```
$ npm run docker:up
```

5. Verify containers are running

```
$ docker-compose ps
```

6. Start the development server

```
$ npm run dev
```

If everything starts successfully, you should see:

- "Mongoose connected to mongodb://localhost:27017/find-a-hobby"
- "find a Hobby! Server connected on port 3000"

7. Stop containers when done

```
$ docker-compose down
```

Or use the npm script:

```
$ npm run docker:down
```

**Docker Commands:**

- `npm run docker:up` - Start containers in background
- `npm run docker:down` - Stop containers
- `npm run docker:logs` - View container logs
- `npm run docker:clean` - Stop containers and remove volumes (deletes data)

### Running with Local MongoDB/Redis

If you prefer to run MongoDB and Redis locally instead of Docker:

1. **Install MongoDB**: https://www.mongodb.com/docs/manual/installation/
2. **Install Redis**: https://redis.io/docs/install/install-redis/

Then start them manually:

```
# Terminal 1: Start MongoDB
$ mongod
# Or on macOS: brew services start mongodb-community

# Terminal 2: Start Redis
$ redis-server
# Or on macOS: brew services start redis

# Terminal 3: Start the server
$ npm run dev
```

### Connect with client

Go to https://github.com/jportella93/find-a-hobby-client and follow the getting started instructions. Use port 3000 in the client configuration.

## Built with

- [Koa](https://github.com/koajs/koa) - Async middleware for Node.
- [Reccomendation Raccoon](https://github.com/guymorita/recommendationRaccoon) - Recommendation engine.
- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JSON web token implementation for Node.
- [Mongodb](https://github.com/mongodb/mongo) - No relational database.
- [Mongoose](https://github.com/Automattic/mongoose) - Layer for mongodb.

## Author

Jon Portella - [Github](https://github.com/jportella93) - [LinkedIn](https://www.linkedin.com/in/jonportella/)

## License

This project is licensed under the MIT License.

<p align="center">
  <img src="https://imgur.com/W3jHOFM.png" />
</p>
