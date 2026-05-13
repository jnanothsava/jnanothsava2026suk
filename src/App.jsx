import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LiquidBackground from './components/LiquidBackground'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Events = lazy(() => import('./pages/Events'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const Schedule = lazy(() => import('./pages/Schedule'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <LiquidBackground />
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'var(--color-primary-light)' }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/events/:eventId" element={<EventDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}

export default App
