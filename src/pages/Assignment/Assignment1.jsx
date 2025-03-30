import React from "react";
import styles from "./assignment1.module.css";

const Assignment1 = () => {
  return (
    <div className={styles.assignmentContainer}>
      {/* Leave Letter Section */}
      <section className={styles.leaveLetter}>
        <h1 className={styles.header}>Leave Letter</h1>
        <div className={styles.content}>
          <p>
            <b>From:</b>
            <br />
            Aditi Babu
            <br />
            VIT Chennai
          </p>
          <p>
            <b>To:</b>
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
          <p>
            I kindly request your understanding and approval for this leave. I
            assure you that I will make up for any missed work and lessons
            during my absence.
          </p>
          <p>Thank you for your consideration.</p>
          <p>
            Yours sincerely,
            <br />
            Aditi
          </p>
        </div>
        <div className={styles.image}>
          <img
            src="https://shaadiwish.com/blog/wp-content/uploads/2020/05/coordinated-family-portraits.jpg"
            alt="Family Wedding"
          />
        </div>
      </section>

      {/* Table Layout */}
      <section className={styles.tableSection}>
        <h2>Table Layout</h2>
        <table className={styles.customTable}>
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
      <section className={styles.chessBoardSection}>
        <h2>Chess Board</h2>
        <table
          className={styles.chessBoard}
          border="2"
          cellspacing="0"
          cellpadding="20"
        >
          <tbody>
            <tr>
              <td className={styles.dark}>♜</td>
              <td className={styles.light}>♞</td>
              <td className={styles.dark}>♝</td>
              <td className={styles.light}>♛</td>
              <td className={styles.dark}>♚</td>
              <td className={styles.light}>♝</td>
              <td className={styles.dark}>♞</td>
              <td className={styles.light}>♜</td>
            </tr>
            <tr>
              <td className={styles.light}>♟</td>
              <td className={styles.dark}>♟</td>
              <td className={styles.light}>♟</td>
              <td className={styles.dark}>♟</td>
              <td className={styles.light}>♟</td>
              <td className={styles.dark}>♟</td>
              <td className={styles.light}>♟</td>
              <td className={styles.dark}>♟</td>
            </tr>
            <tr>
              <td className={styles.dark}>&nbsp;</td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
            </tr>
            <tr>
              <td className={styles.light}>&nbsp;</td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
            </tr>
            <tr>
              <td className={styles.dark}>&nbsp;</td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
            </tr>
            <tr>
              <td className={styles.light}>&nbsp;</td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
              <td className={styles.light}></td>
              <td className={styles.dark}></td>
            </tr>
            <tr>
              <td className={styles.dark}>♙</td>
              <td className={styles.light}>♙</td>
              <td className={styles.dark}>♙</td>
              <td className={styles.light}>♙</td>
              <td className={styles.dark}>♙</td>
              <td className={styles.light}>♙</td>
              <td className={styles.dark}>♙</td>
              <td className={styles.light}>♙</td>
            </tr>
            <tr>
              <td className={styles.light}>♖</td>
              <td className={styles.dark}>♘</td>
              <td className={styles.light}>♗</td>
              <td className={styles.dark}>♕</td>
              <td className={styles.light}>♔</td>
              <td className={styles.dark}>♗</td>
              <td className={styles.light}>♘</td>
              <td className={styles.dark}>♖</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Assignment1;
