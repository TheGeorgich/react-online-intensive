// Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        const {
            avatar,
            currentFirstName,
            currentLastName,
        } = this.props;

        return (
            <section className = { Styles.post }>
                <img src = { avatar } />
                <a>{`${currentFirstName} ${currentLastName}`}</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Howdi!</p>
            </section>
        );
    }
}
