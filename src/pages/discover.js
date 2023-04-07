import React from 'react'
import { Header } from '../components/Header/header.js';
import { Footer } from '../components/Footer/footer.js';
import { Timeline } from '../components/discoverTimeline/discoverTimeline.js';

export const Discover = () => {
  return (
    <>
    <Header page= {'discover'} />
    <Timeline />
    <Footer />
    </>
  )
}

export default Discover;