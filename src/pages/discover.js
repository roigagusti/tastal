import React from 'react'
import { Header } from '../components/Header/header.js';
import { Footer } from '../components/Footer/footer.js';
import { Modal } from '../components/tastal-items.js';
import { DiscoverTimeline } from '../components/discoverTimeline/discoverTimeline.js';

export const Discover = () => {
  return (
    <>
    <Header page= {'discover'} />
    <DiscoverTimeline />
    <Footer />
    <Modal type={'addPhoto'} />
    </>
  )
}

export default Discover;