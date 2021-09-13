function Person(name, address) {
    const _name = name;
    const _address = address;
    const getName = () => _name
    const toString = () => `name: ${getName()}, address: ${_address}`
    return {
      _name,
      _address,
      getName,
      toString
    };
  }
  const myPerson = Person('John Doe', '123 Main St Anytown');
  
  console.log('myPerson :', myPerson);
  console.log(`myPerson :${myPerson.getName()}`);