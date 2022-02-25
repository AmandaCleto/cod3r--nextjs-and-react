import styles from "./chess-board.module.css";

export default function ChessBoard() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8];
    const generateBox = (number) => {
        return list.map((value) => (
            <div
                key={value}
                className={` ${
                    (number + value) % 2 == 0 ? styles.white : styles.black
                }  ${styles.box}`}
            />
        ));
    };

    return (
        <div className={styles.board}>
            <div>
                {list.map((index, value) => (
                    <div key={index} className={styles.line}>
                        {generateBox(value)}
                    </div>
                ))}
            </div>
        </div>
    );
}
