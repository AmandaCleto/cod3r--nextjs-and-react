import List from "../../components/List";
import Item from "../../components/Item";

export default function children() {
    return (
        <div>
            <List>
                <Item item="#1" />
                <Item item="#2" />
                <Item item="#3" />
            </List>
        </div>
    );
}
