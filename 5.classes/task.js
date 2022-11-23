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
        if (book.state > 30) {
        this.books.push(book);
        } 
    }
    
    findBookBy(type, value) {
        const result = this.books.find(book => book[type] === value);
        return result || null;
    }

    giveBookByName(bookName) {
        const result = this.books.find(book => book.name === bookName); 
        const indexOfABook = this.books.findIndex(book => book.name === bookName);
        this.books.splice(indexOfABook, 1);
        return result || null; 
    }
}

//Task 3

class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subjects = [];
      }
    
    setSubject(subjectName) {
        if (this.subjects[subjectName] === undefined) {
        this.subjects[subjectName] = []; 
        }
    }
      
    addMark(mark, subjectName) {
        this.setSubject(subjectName);
        if (mark < 1 || mark > 5) {
            return ('Ошибка, оценка должна быть числом от 1 до 5');
        } else 
        this.subjects[subjectName].push(mark);       
    }
        
    getAverageBySubject(subjectName) {
        const arrayStr = this.subjects[subjectName];
        let arrayNum = [];  
        for (let i = 0; i < arrayStr.length; i++) {
            arrayStr[i] = +arrayStr[i];
            arrayNum.push(arrayStr[i]);
        } 
        return arrayNum.reduce((acc, el) => acc += el, 0) / arrayNum.length; 
    }

    getAverage() {
        const array = Object.keys(this.subjects).map(el => this.subjects[el]).flat();
        let newArray = [];  
        for (let i = 0; i < array.length; i++) {
            array[i] = +array[i];
            newArray.push(array[i]);
        } 
        return newArray.reduce((acc, el) => acc += el, 0) / newArray.length;
    }
          
    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}