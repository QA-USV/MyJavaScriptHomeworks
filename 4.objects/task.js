'use strict';

//Task 1

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  
  setSubject(subjectName) {
    this.subject = subjectName;
  }
  
  addMark(...mark) {
    if (this.marks === undefined) {
      this.marks = mark;
    } else {
      this.marks = [...this.marks, ...mark];
    }
  }
    
  addMarks(...marks) {
    if (this.marks === undefined) {
      this.marks = marks;
    } else {
      this.marks = [...this.marks, ...marks];
    }
  }

  getAverage() {
    const sum = this.marks.reduce((el, acc) => acc += el, 0);
    return sum / this.marks.length; 
  }
  
  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}