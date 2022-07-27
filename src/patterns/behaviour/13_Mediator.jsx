class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(msg, to) {
    this.room.send(msg, this, to);
  }

  receive(msg, from) {
    console.log(`${from.name} => ${this.name}: ${msg}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(msg, from, to) {
    if (to) {
      to.receive(msg, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(msg, from);
        }
      });
    }
  }
}

const rudyk = new User("Volodymyr");
const inna = new User("Inna");
const julia = new User("Julia");

const room = new ChatRoom();

room.register(rudyk);
room.register(inna);
room.register(julia);

rudyk.send("Hello!", julia);
inna.send("hi!");
