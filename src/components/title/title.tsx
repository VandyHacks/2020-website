import React from 'react';
import * as styles from './title.module.css'

const Title: React.FC<{}> = () => (
    <div className={styles.title}>
        <Banner />
        <Maintitle />
        <Subtitle />
    </div>
)

const Banner: React.FC<{}> = () => {
    return <div className={styles.banner}>
        <h2>{' '}retro edn.</h2>
        </div>;
}

const Maintitle: React.FC<{}> = () => (
    <div className={styles.maintitle}>
        <h1>VandyHacks</h1>
    </div>
)

const Subtitle: React.FC<{}> = () => (
    <div className={styles.subtitle}>
        <h2>The Hackathon</h2>
    </div>
)

export default Title