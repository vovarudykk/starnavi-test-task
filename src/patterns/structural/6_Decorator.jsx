class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}/`;
  }
}

function decoratorAWS(obj) {
  obj.isAWS = true;
  obj.info = () => {
    return obj.url + "/aws";
  };

  return obj;
}

function decoratorAzure(obj) {
  obj.isAzure = true;
  obj.info = () => {
    return obj.url + "/azure";
  };

  return obj;
}

const serverAWS = decoratorAWS(new Server("192.168.0.1", "8080"));
console.log(serverAWS.isAWS);

const serverAzure = decoratorAWS(new Server("192.168.0.2", "8081"));
console.log(serverAzure.isAzure);
