import styles from "./ItemListContainer.module.css";

function ItemListContainer({ props }) {
  return (
    <div className={styles.itemList}>
      <h1>{props}</h1>
    </div>
  );
}

export default ItemListContainer;
