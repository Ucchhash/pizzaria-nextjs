import styles from '../../styles/Product.module.css';
import {useState} from 'react'
import Image from 'next/image'

const Product = () => {
    const [size, setSize] = useState(0);

    const pizza = {
        id : '1',
        img : '/img/1.png',
        name : 'CAMPAGNOLA',
        price : [19.9, 23.9, 25.9],
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quisquam?"
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={pizza.img} alt="" layout="fill"/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{pizza.name}</h1>
                    <span className={styles.price}>${pizza.price[size]}</span>
                    <p className={styles.desc}>{pizza.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={() => setSize(0)}>
                            <Image src="/img/size.png" layout="fill" alt="" />
                            <span className={styles.number}>Small</span>
                        </div>
                        <div className={styles.size} onClick={() => setSize(1)}>
                            <Image src="/img/size.png" layout="fill" alt="" />
                            <span className={styles.number}>Medium</span>
                        </div>
                        <div className={styles.size} onClick={() => setSize(2)}>
                            <Image src="/img/size.png" layout="fill" alt="" />
                            <span className={styles.number}>Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose additional ingredients</h3>
                    <div className={styles.ingredients}>
                        <div className={styles.option}>
                            <input
                                type="checkbox"
                                id="double"
                                name="double"
                                className={styles.checkbox}
                            />
                            <label htmlFor="double">Double Ingredients</label>
                        </div>
                        <div className={styles.option}>
                            <input
                                type="checkbox"
                                id="cheese"
                                name="cheese"
                                className={styles.checkbox}
                            />
                            <label htmlFor="double">Extra Chesse</label>
                        </div>
                        <div className={styles.option}>
                            <input
                                type="checkbox"
                                id="garlic"
                                name="garlic"
                                className={styles.checkbox}
                            />
                            <label htmlFor="double">Garlic Sauce</label>
                        </div>
                        <div className={styles.option}>
                            <input
                                type="checkbox"
                                id="spicy"
                                name="spicy"
                                className={styles.checkbox}
                            />
                            <label htmlFor="double">Spicy Sauce</label>
                        </div>
                    </div>
                    <div className={styles.add}>
                        <input type="number" defaultValue={1} className={styles.quantity}/>
                        <button className={styles.button}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
