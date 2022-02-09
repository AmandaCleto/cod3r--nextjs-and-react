import styles from "../styles/Home.module.css";
import Line from "../components/Line";

export default function Board() {
    return (
        <div className={styles.container}>
            <Line black />
            <Line />
            <Line black />
            <Line />
            <Line black />
            <Line />
            <Line black />
            <Line />
        </div>
    );
}
