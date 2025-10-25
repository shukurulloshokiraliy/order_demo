import React from "react";
import styles from "./header.module.css";
import loc from "../../assets/images/loc.svg";
import korzinka from "../../assets/images/korzinka.svg";
import forward from "../../assets/images/Forward_Btn.svg";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <p>
          Get 5% Off your first order,{" "}
          <span className={styles.promo}>Promo: ORDER5</span>
        </p>
        <div className={styles.location}>
          <img src={loc} alt="location" className={styles.locIcon} />
          <span>Regent Street, A4, A4201, London</span>
          <a href="#" className={styles.changeLoc}>
            Change Location
          </a>
        </div>
        <div className={styles.cartBox}>
          <img src={korzinka} alt="cart" className={styles.cartIcon} />
          <div className={styles.cartInfo}>
            <p>23 Items</p>
            <p>GBP 79.89</p>
          </div>
          <img src={forward} alt="arrow" className={styles.forwardIcon} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={styles.navbar}>
        <img src={logo} alt="OrderUK" className={styles.logo} />

        <nav className={styles.navLinks}>
          <button className={styles.homeBtn}>Home</button>
          <a href="#">Browse Menu</a>
          <a href="#">Special Offers</a>
          <a href="#">Restaurants</a>
          <a href="#">Track Order</a>
        </nav>

        <button className={styles.loginBtn}>
          <img src={user} alt="user" className={styles.userIcon} />
          Login/Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
