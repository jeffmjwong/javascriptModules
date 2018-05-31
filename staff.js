const instructors = ['Tracy', 'Matt', 'Scott', 'Bianca'];
const locations = ['Sydney', 'Brisbane'];
const other = 'blah';

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

module.exports = { instructors, locations, other, Student };
