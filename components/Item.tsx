import styles from '../styles/Item.module.css'
import { useMutation } from '../convex/_generated/react'
import { Document } from '../convex/_generated/dataModel'

export function Item({ item }: { item: Document<'items'> }) {
  const addCart = useMutation('addCart')
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={item.image} />
      <div className={styles.itemText}>
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemDesc}>{item.description}</div>
        <div className={styles.itemPrice}>{formatter.format(item.price)}</div>
        <button className={styles.itemButton} onClick={() => addCart(item._id)}>
          Add to Cart
        </button>
        <span>({item.remaining} remaining)</span>
      </div>
    </div>
  )
}
