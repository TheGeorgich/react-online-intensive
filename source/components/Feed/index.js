// Core
import React, { Component } from 'react';

// Components
import StatusBar from '../StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    render() {
        const {
            avatar,
            currentFirstName,
        } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar }
                    currentFirstName = { currentFirstName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}
