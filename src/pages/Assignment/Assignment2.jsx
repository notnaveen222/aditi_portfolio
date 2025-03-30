import React from "react";
import styles from "./assignment2.module.css";

const Assignment2 = () => {
  return (
    <div className={styles.assignmentContainer}>
      {/* Bakery Website */}
      <section className={styles.bakery}>
        <header className={styles.header}>
          <h1>Aditi's Bakery</h1>
          <nav>
            <a href="#products">Our Products</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <div className={styles.hero}>
          <h2>Freshly Baked, Just for You!</h2>
          <p>
            Discover the magic of homemade bread, cakes, and pastries made with
            love.
          </p>
        </div>

        <section className={styles.section} id="products">
          <h2>Our Products</h2>
          <div className={styles.products}>
            <div className={styles.product}>
              <img
                src="https://i.pinimg.com/originals/ee/85/bd/ee85bdc2fa308c202da7ae651a614d7f.jpg"
                alt="Chocolate Cake"
              />
              <h3>Chocolate Cake</h3>
              <p>Rich and decadent chocolate goodness.</p>
            </div>
            <div className={styles.product}>
              <img
                src="https://static.fanpage.it/wp-content/uploads/sites/22/2020/06/Croissant24.jpg"
                alt="Croissant"
              />
              <h3>Flaky Croissant</h3>
              <p>Buttery, flaky, and irresistible.</p>
            </div>
            <div className={styles.product}>
              <img
                src="https://i.pinimg.com/originals/85/cf/39/85cf39b0dfec4e09fe80340efc219208.jpg"
                alt="Cupcakes"
              />
              <h3>Assorted Cupcakes</h3>
              <p>Perfectly sweet treats for any occasion.</p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="about">
          <h2>About Us</h2>
          <p>
            Aditi's Bakery has been serving the community with delicious
            homemade baked goods since 2005. Our passion is to create delightful
            treats that bring joy to every bite. Every product is made with
            high-quality ingredients and lots of love.
          </p>
        </section>

        <section className={styles.section} id="contact">
          <h2>Contact Us</h2>
          <p>
            Address: 123 Baker Street
            <br />
            Phone: 9876543210
            <br />
            Email:{" "}
            <a href="mailto:info@sweettreats.com">info@sweettreats.com</a>
          </p>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2025 Aditi's Bakery | All Rights Reserved</p>
        </footer>
      </section>

      {/* Running Cat Animation */}
      <section className={styles.catAnimation}>
        <div className={styles.road}>
          <img
            src="https://media.tenor.com/C7caMK_C6IQAAAAi/running-run.gif"
            alt="Running Cat"
            className={styles.cat}
          />
        </div>
      </section>

      {/* Forms and Tables */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <h2>Forms and Tables</h2>
          <form>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" />

            <label htmlFor="middle-name">Middle Name:</label>
            <input type="text" id="middle-name" />

            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" />

            <label htmlFor="user-id">User ID:</label>
            <input type="text" id="user-id" maxLength="8" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" />

            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              rows="5"
              placeholder="Enter your address"
            ></textarea>

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              rows="5"
              placeholder="Enter your description"
            ></textarea>

            <label htmlFor="phone-number">Phone Number:</label>
            <input type="number" id="phone-number" maxLength="10" />

            <div>
              <label>
                <input type="checkbox" value="on" /> Student
              </label>
              <label>
                <input type="checkbox" value="on" /> Indian
              </label>
            </div>

            <div>
              <label>Gender:</label>
              <label>
                <input type="radio" name="gender" value="Male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
            </div>

            <label htmlFor="batch">Batch:</label>
            <select id="batch">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>

            <label htmlFor="fileupload">Upload File:</label>
            <input type="file" id="fileupload" />

            <div>
              <input type="submit" value="Submit" />
              <input type="reset" value="Reset" />
              <button type="button" onClick={() => alert("Hi")}>
                Click
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Assignment2;
