import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'og-image.jpg', 'Brochure.pdf', 'final_schedule.pdf', 'final_schedule.docx'],
      manifest: {
        name: 'Jnanothsava 2026',
        short_name: 'Jnanothsava',
        description: 'Sharnbasva University Techno-Cultural Fest 2026',
        theme_color: '#1a1025',
        background_color: '#0a0510',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
