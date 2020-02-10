import React, { Component } from "react";
import Head from "next/head";
import request from "superagent";

import Nav from "../components/nav";
import BookCard from '../components/bookcard'
import data from '../books.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [data.Books[0],data.Books[1],data.Books[2],data.Books[3],data.Books[4],data.Books[5],data.Books[6],data.Books[7],data.Books[8]],
      bookList: [],
      searchField: "",
      pagesRead: 0
    };
  }

  componentDidMount() {
    let pagesRead = 0;
    let pages = [];
    for(let book of this.state.books) {
      pages.push(book.volumeInfo.pageCount);
    }
    pagesRead = pages.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    this.setState({ pagesRead });

    const birth = new Date(1990, 3, 20, 15, 20, 0);
    const now = Date.now();
    const dif = now - birth;
    const difSecs = dif/1000;
    const difMins = difSecs/60;
    const difHours = difMins/60;
    const difDays = difHours/24;
    const difYears = difDays/365;
    console.log(Math.ceil(difDays) + 1);
  }

  searchBook = e => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then(data => {
        this.setState({ books: [...this.state.books, data.body.items[0]] });
        console.log(data.body.items[0])
      });

    this.setState({ searchField: "" });
  };

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <div className="header">
          <h1 className="title">Welcome to Books&More!</h1>
          <small className="pages-read row">
            Pages Read: {this.state.pagesRead}
          </small>

          <div className="search-area row">
            <form onSubmit={this.searchBook} action="">
              <input type="text" onChange={this.handleSearch} />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className="bookarea">
          <div className="row list">
            {this.state.books.map((book, index) => {
              return <BookCard book={book} key={index} />
            })}
          </div>
        </div>

        <style jsx>{`
          .header {
            width: 100%;
            color: #333;
          }
          .bookarea {
            width: 100%;
          }
          .title {
            width: 100%;
            margin: 0;
            padding-top: 2em;
            font-size: 48px;
          }
          .title,
          .pages-read {
            text-align: center;
          }
          .row {
            margin: 60px auto 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .list {
            margin: 60px auto 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
