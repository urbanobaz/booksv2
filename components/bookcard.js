import React from 'react';
import Link from 'next/link';

function BookCard(props) {
  const date = new Date(props.book.volumeInfo.publishedDate);
  let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return (
    <div>
      <Link href='/'>
        <div className="card">
          <div className="card-contents">
            <h3>{props.book.volumeInfo.title}</h3>
            <p>{props.book.volumeInfo.authors[0]}</p>
            <p>Pages: {props.book.volumeInfo.pageCount}</p>
            <p>Published: {`${months[monthIndex]} ${day}, ${year}`}</p>
            <p>Google API ID: {props.book.id}</p>
          </div>

        </div>
      </Link>

      <style jsx>{`
        .card {
          padding: 18px;
          height: 200px;
          margin: 18px 18px 24px;
          width: 200px;
          flex-basis: 200px;
          flex-shrink: 0;
          flex-grow: 0;
          text-align: center;
          border: 1px solid #9b9b9b;
          text-decoration: none;
          display: flex;
          flex-wrap: wrap;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: black;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .card-contents {
          height: 100%;
          width: 100%;
          justify-content: center;
          align-content: center;
          flex: 1 1 1;
        }

        @media (max-width: 500px) {
          .card {
            width: 300px;
            height: 300px;
          }
          .card h3 {
            font-size: 30px;
            margin-bottom: 15px;
          }
          .card p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default BookCard;
