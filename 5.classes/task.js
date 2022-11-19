'use strict';

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
    constructor (name, releaseDate, pagesCount, state = 100, type) {
        super(name, releaseDate, pagesCount, state = 100, type);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state = 100, type) {
        super(name, releaseDate, pagesCount, state = 100, type);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = 'detective';
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        if ('author' in book && 'name' in book && 'releaseDate' in book && 'pagesCount' in book) {
            book = new Book();
        };
        if ('name' in book && 'releaseDate' in book && 'pagesCount' in book) {
            book = new Magazine();
        };
        if (book.type === 'detective') {
          book = new DetectiveBook();
        };
        if (book.type === 'fantastic') {
          book = new FantasticBook();
        };
        if (book.type === 'novel') {
          book = new NovelBook();
        };
        if (book.type > 30) {
            this.books.push(book);
        } else {
           return null;
        }
    }
    
    findBookBy(type, value) {
        for (let key of PrintEditionItem.type[value]) {

            }
        if (type === this.books[i].[type]) {
                return this.books[i][value];                
            } else {
                return null;
            }
        }
    }

        // return this.books.filter(function(item, i, ) {
        //     return (item.city == city);
        //     });
        //     };
        // const result = this.books.find((_value) => _value === type);
        // return result;
        // let result = this.books.filter(_type => this.books[type] === value);
        // return result;
        // if (result = []) {
        //     return null;
    //     }
    // }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (bookName === this.books[i]) {
                return this.books[i];
                          
            } else {
                return null;
            }
        }
        this.books.slice(this.books[i]); 
    }
}
