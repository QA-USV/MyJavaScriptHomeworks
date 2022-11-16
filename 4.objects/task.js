'use strict';

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
    const avg = +(sum / this.marks.length); 
    // More readable result is '+(sum / this.marks.length).toFixed(2)'. But the result will not meet the expected one. //
    return avg;
  }
  
  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}