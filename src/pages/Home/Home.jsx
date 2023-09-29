import React from 'react'
import { Hero } from './components/Hero'
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.container}>
      <Hero />
    </div>
  )
}

export default Home