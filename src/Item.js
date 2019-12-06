import React from "react";

export default function Item(props) {
    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    );
}