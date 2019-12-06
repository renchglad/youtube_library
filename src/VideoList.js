import React from "react";
import Item from "./Item";

export default class VideoList extends React.Component {
    createItemList() {
        let table = [];
        for (let i = 0; i < this.props.itemList.length; i++) {
            table.push(
                <Item
                    key={i}
                    name={this.props.itemList[i].title}
                    onClick={() => this.props.onClick(i)}
                />
            );
        }
        return table;
    }

    render() {
        return (
            <div className="listPanel">
                {this.createItemList()}
            </div>
        )
    }
}