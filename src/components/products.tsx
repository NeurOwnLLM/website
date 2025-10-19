import styles from "./products.module.scss";

export function Products() {
    return (
        <section className={styles.products}>
            <h2>Our Offer</h2>
            <p>
                At neurOwn, we offer a localized suite of AI and machine learning
                solutions tailored to the German market.
            </p>
            <div className={styles.productList}>
                <Hardware />
                <Software />
                <Consulting />
            </div>
        </section>
    );
}

function Hardware() {
    return (
        <div className={styles.productItem}>
            <h3>Hardware Product</h3>
            <p>
                We offer AMD-STRIX 395+, preconfigured, low cost running at 150W full
                load, runs models up to 120B parameters, optimized for inference
            </p>
        </div>
    );
}

function Software() {
    return (
        <div className={styles.productItem}>
            <h3>Software Product</h3>
            <p>
                Mollit sint velit deserunt eu enim occaecat ullamco exercitation. Nulla
                consequat tempor consequat mollit. Deserunt in culpa pariatur
                reprehenderit non occaecat et dolore deserunt velit consequat. Consequat
                amet ad sit anim exercitation laborum nulla duis ipsum dolor Lorem ipsum
                tempor eu. Id tempor magna aute et laborum. Esse ea proident mollit eu
                aliquip ut sit eu id ad. Id laboris ut ea incididunt fugiat sint
                occaecat ipsum ipsum voluptate occaecat anim nostrud mollit.
            </p>
        </div>
    );
}

function Consulting() {
    return (
        <div className={styles.productItem}>
            <h3>Consulting Service</h3>
            <p>
                Ad in et ipsum sint ea ex consectetur dolore occaecat. Tempor aliquip
                deserunt elit ipsum occaecat velit culpa laboris. Ut voluptate nisi
                velit velit ea elit exercitation reprehenderit duis mollit excepteur do
                fugiat duis. Eiusmod veniam non Lorem magna sunt laborum ad incididunt
                fugiat ex laboris non. Minim tempor Lorem est dolore adipisicing sunt.
                Nisi irure id magna anim culpa eu et do laboris. Nulla adipisicing
                occaecat laboris et amet Lorem sunt voluptate culpa qui do magna sit.
                Magna consequat veniam ad ullamco Lorem nostrud nulla quis nostrud
                mollit cupidatat tempor.
            </p>
        </div>
    );
}
