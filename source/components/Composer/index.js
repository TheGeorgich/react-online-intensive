// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    render() {
        const {
            avatar,
            currentFirstName,
        } = this.props;

        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { `How are you ${currentFirstName}?` } />
                    <input
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }
}
