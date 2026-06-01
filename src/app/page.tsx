import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/HeroSection'
import Reviews from './components/Reviews'
import Action from './components/Action'
import Journey from './components/JourneySection'
import CommunitySection from './components/CommunitySection'
import FooterSection from './components/FooterSection'
import DetailSection from './components/DetailSection'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Reviews />
      <DetailSection />
      <Action />
      <Journey />
      <CommunitySection />
      <FooterSection />
    </>
  )
}

export default page