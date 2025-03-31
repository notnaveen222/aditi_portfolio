import React from "react";
import "./assignment2.css";

const Assignment2 = () => {
  return (
    <div className="a2-container">
      {/* Header */}
      <header className="a2-header">
        <h1>Aditi's Bakery</h1>
        <nav>
          <a href="#products">Our Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="a2-hero">
        <h2>Freshly Baked, Just for You!</h2>
        <p>
          Discover the magic of homemade bread, cakes, and pastries made with
          love.
        </p>
      </div>

      {/* Product Section */}
      <section className="a2-section" id="products">
        <h2 style={{ textAlign: "center" }}>Our Products</h2>
        <div className="a2-products">
          <div className="a2-product">
            <img
              src="https://i.pinimg.com/originals/ee/85/bd/ee85bdc2fa308c202da7ae651a614d7f.jpg"
              alt="Chocolate Cake"
            />
            <h3>Chocolate Cake</h3>
            <p>Rich and decadent chocolate goodness.</p>
          </div>
          <div className="a2-product">
            <img
              src="https://static.fanpage.it/wp-content/uploads/sites/22/2020/06/Croissant24.jpg"
              alt="Croissant"
            />
            <h3>Flaky Croissant</h3>
            <p>Buttery, flaky, and irresistible.</p>
          </div>
          <div className="a2-product">
            <img
              src="https://i.pinimg.com/originals/85/cf/39/85cf39b0dfec4e09fe80340efc219208.jpg"
              alt="Cupcakes"
            />
            <h3>Assorted Cupcakes</h3>
            <p>Perfectly sweet treats for any occasion.</p>
          </div>
        </div>

        {/* Footer moved here, at the end of Q1 */}
        <footer className="a2-footer">
          <p>&copy; 2025 Aditi's Bakery | All Rights Reserved</p>
        </footer>
      </section>

      {/* Running Cat Section (Q2) */}
      <div className="a2-road">
        <img
          src="https://media.tenor.com/C7caMK_C6IQAAAAi/running-run.gif"
          alt="Running Cat"
          className="a2-cat"
        />
      </div>

      {/* Forms Section (Q3) */}
      <div className="a2-form-container">
        <h2>Forms and Tables</h2>
        <form>
          <label>
            First Name: <input type="text" />
          </label>
          <label>
            Middle Name: <input type="text" />
          </label>
          <label>
            Last Name: <input type="text" />
          </label>
          <label>
            User ID: <input type="text" maxLength="8" />
          </label>
          <label>
            Password: <input type="password" />
          </label>
          <label>
            Date of Birth: <input type="date" />
          </label>
          <label>
            Address:{" "}
            <textarea rows="3" placeholder="Enter your address"></textarea>
          </label>
          <label>
            Description:{" "}
            <textarea rows="3" placeholder="Enter description"></textarea>
          </label>
          <label>
            Phone Number: <input type="number" />
          </label>

          {/* Checkbox Group */}
          <div className="a2-checkbox-group">
            <label>
              <input type="checkbox" /> Student
            </label>
            <label>
              <input type="checkbox" /> Indian
            </label>
          </div>

          {/* Radio Buttons */}
          <div className="a2-radio-group">
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
          </div>

          {/* Dropdown */}
          <label>
            Batch:
            <select>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </label>

          {/* Buttons */}
          <div className="a2-btn-group">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
            <button type="button" onClick={() => alert("Hi")}>
              Click
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Assignment2;
