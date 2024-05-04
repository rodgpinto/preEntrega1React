import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../../public/rg.ico"

function NavBar() {
  return (
    <div className={styles.divNavBar}>
      <a href="#">
        <img
          src={logo}
          alt="Logo-RG"
          className={styles.navBarLogo}
        />
      </a>
      <hr className={styles.hrDivisor} />
      <a href="#" className={styles.navBar}>
        Cascos
      </a>
      <hr className={styles.hrDivisor} />
      <a href="#" className={styles.navBar}>
        Indumentaria
      </a>
      <hr className={styles.hrDivisor} />
      <a href="#" className={styles.navBar}>
        Repuestos
      </a>
      <hr className={styles.hrDivisor} />
      <a href="#" className={styles.navBar}>
        Accesorios
      </a>
      <CartWidget></CartWidget>
    </div>
  );
}

export default NavBar;
