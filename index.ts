class UserService {
  sayHi(){
    console.log("What up Doe")
  }
}

class Component {
  constructor(private user: UserService) {
     
  }
}

class Injectotor {
  private _container = new Map();
  constructor(private _providers: any[] = []) {
    this._providers.forEach(service =>
      this._container.set(service, new service())
    );
  }
  get(service: any) {
    const ServiceInstance = this._container.get(service);
    if (!ServiceInstance) {
      throw Error('No provider found');
    }
    return ServiceInstance;
  }
}

const injector = new Injectotor([UserService]);
const component = new Component(injector.get(UserService))

console.log(injector)
