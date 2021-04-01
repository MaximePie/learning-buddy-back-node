# Learning Buddy Node

This projects provides a second backoffice, it is just developed for 
training purpose.

## Dependencies list 
Here are all the dependencies for this project and their role

- [dotEnv](https://www.npmjs.com/package/dotenv) to guarantee the use of `.env` files.
- [Express](https://expressjs.com/) To make cool NodeJS app fast 
- [Mongoose](https://mongoosejs.com/docs/) Used for database communication 
- [Nodemon](https://www.npmjs.com/package/nodemon) Useful tool for nodeJS developing 

- [Cors](https://www.npmjs.com/package/cors) and [BodyParser](https://www.npmjs.com/package/body-parser) to allow 
communications with the outer world

## Database
Here are the instructions to install a DB communication system

### Connecting 
To connect to the DB, fill your `.env` file with the credentials. 

```js
const mongoose = require('mongoose');
const { url } = require('./databaseService');
mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));
```

### Models 
Here is a basic example of a model declaration from [mongoose documentation](https://mongoosejs.com/)
```js
const Cat = mongoose.model('Cat', { name: String });
```

:warning: It is also possible to use a Schema instead of `{name: String}` for longer Entity definition

```js
const kittySchema = new mongoose.Schema({
  name: String
});
kittySchema.methods.speak = () => console.log("Mow");

const Kitten = mongoose.model('Kitten', kittySchema);
```

---

#### Create
Basic example of Entity Creation in database  
```js
const kitty = new Cat({ name: 'Titouan' });
kitty.save().then(() => console.log('meow'));
```

--- 

#### Read
Basic example which gets all the Entities. Use the `response` object provided by the function in `app.get` method 
(or whatever, as long as we have a `response` object)

```js
Cat.find().then(data => response.status(200).json(data));
```

Or find with a condition 

```js
Cat.find({ name: 'Titouan' })
```

## Configuring CORS

It is possible to set the CORS to be allowed only from specific sources. We can do it later. Follow 
[this](https://bezkoder.com/node-express-mongodb-crud-rest-api/) for more info.
