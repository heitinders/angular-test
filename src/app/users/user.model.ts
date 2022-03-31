export class UserData {
  'id': Number;
  'name': String;
  'username': String;
  'email': String;
  'address': Address;
  'phone': String;
  'website': String;
  'company': Company;
}

class Address {
  'street': String;
  'suite': String;
  'city': String;
  'zipcode': String;
  'geo': Geo;
}

class Geo {
  'lat': String;
  'lng': String;
}

class Company {
  'name': String;
  'catchPhrase': String;
  'bs': String;
}
