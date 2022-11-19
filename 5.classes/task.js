'use strict';

//Task 1

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount; 
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state * 1.5;
    }

    set state(state) {
        this._state = state * 1.5;
        if (this.state < 0) {
            this._state = 0;
        }
        if (this.state > 100) {
            this._state = 100;
        } else {
            return this._state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100, 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100, 'book');
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100,) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'detective';
    }
}

//Task 2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
    
    findBookBy(type, value) {
        const result = this.books.find(book => book[type] === value);
        return result || null;
    }

    giveBookByName(bookName) {
        const result = this.books.find(book => book.name === bookName);
        this.books.splice(result);
        return result || null; 
    }
}

//Task 3

class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subjects = {};
      }
    
    setSubject(subjectName) {
        const subject = subjectName;
        this.subjects[subject] = []
    }
      
    addMark(mark, subjectName) {
        if (mark < 1 && mark > 5) {
            return ('Оценка студента должна быть в диапазоне от 1 по 5');
        } else {
        if (this.subjects.subjectName === subjectName) {
            this.subjects.subjectName.push(mark);
        // } else 
        //     this.subjects.subjectName === undefined;
        //     this.setSubject(subjectName);
        //     this.subjects.subjectName.push(mark);
        // }
    }
}
    }
    
    getAverageBySubject(subjectName) {
        const {subjectName : newSub} = this.subjects;
        // const result = this.subjects.find(subject => subject[subjectName] === subjectName);
        const sum = newSub.reduce((acc, el) => acc += el, 0);
        return sum / newSub.length; 
    }

    getAverage() {
        let arrMarks = Object.values(this.subjects).map(el => this.subjects[el]);
        const sum = this.arrMarks.reduce((el, acc) => acc += el, 0);
        return sum / this.subjects.length; 
        }
          
    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}