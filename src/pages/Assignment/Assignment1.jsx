import React from "react";
import "./assignment1.css";

const Assignment1 = () => {
  return (
    <div className="a1-container">
      <h1 className="a1-title">Assignment 1</h1>

      {/* Leave Letter */}
      <section className="a1-section">
        <h2 className="a1-heading">Leave Letter</h2>
        <div className="a1-letter">
          <p>
            From,
            <br />
            Aditi Babu
            <br />
            VIT Chennai
          </p>
          <p>
            To,
            <br />
            Dr. Ashoka Rajan
            <br />
            VIT Chennai
          </p>
          <p>
            <b>Subject:</b> Request for Leave to Attend a Family Wedding
          </p>
          <p>Dear Sir,</p>
          <p>
            I am writing to request leave from <b>13th January 2025</b> to{" "}
            <b>18th January 2025</b>, as I will be attending a family wedding
            during this period. It is a significant occasion for my family, and
            my presence is essential.
          </p>
          <p>Thank you for your consideration.</p>
          <p>
            Yours sincerely,
            <br />
            Aditi
          </p>
          <div className="a1-image">
            <img
              src="https://shaadiwish.com/blog/wp-content/uploads/2020/05/coordinated-family-portraits.jpg"
              alt="Family Wedding"
            />
          </div>
        </div>
      </section>

      {/* Table Layout */}
      <section className="a1-section">
        <h2 className="a1-heading">Table Layout</h2>
        <table className="a1-table">
          <tbody>
            <tr>
              <td rowSpan="2">A</td>
              <td>B</td>
              <td rowSpan="3">D</td>
              <td colSpan="2">E</td>
              <td>F</td>
            </tr>
            <tr>
              <td>C</td>
              <td rowSpan="2">G</td>
              <td rowSpan="2">H</td>
              <td rowSpan="2">I</td>
            </tr>
            <tr>
              <td colSpan="2">J</td>
            </tr>
            <tr>
              <td colSpan="3">K</td>
              <td>L</td>
              <td colSpan="2">M</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Chess Board */}
      <section className="a1-section">
        <h2 className="a1-heading">Chess Board</h2>
        <table className="a1-chessboard">
          <tbody>
            <tr>
              <td>♜</td>
              <td>♞</td>
              <td>♝</td>
              <td>♛</td>
              <td>♚</td>
              <td>♝</td>
              <td>♞</td>
              <td>♜</td>
            </tr>
            <tr>
              <td>♟</td>
              <td>♟</td>
              <td>♟</td>
              <td>♟</td>
              <td>♟</td>
              <td>♟</td>
              <td>♟</td>
              <td>♟</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>♙</td>
              <td>♙</td>
              <td>♙</td>
              <td>♙</td>
              <td>♙</td>
              <td>♙</td>
              <td>♙</td>
              <td>♙</td>
            </tr>
            <tr>
              <td>♖</td>
              <td>♘</td>
              <td>♗</td>
              <td>♕</td>
              <td>♔</td>
              <td>♗</td>
              <td>♘</td>
              <td>♖</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Assignment1;
