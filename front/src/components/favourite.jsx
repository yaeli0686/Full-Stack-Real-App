import React, { Component } from 'react';

class Favourite extends React.Component {

    // isFavourite:boolean,
    // onClick()

    render() {
        let favouriteClass = this.props.isFavourite ? "bi bi-heart-fill text-danger" : "bi bi-heart";

        return <i class={favouriteClass}></i>
    }
}

export default Favourite;