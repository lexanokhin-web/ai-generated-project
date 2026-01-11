import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-motion': ['framer-motion'],
          'vendor-utils': ['aos', 'vanilla-tilt', 'lucide-react'],
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Увеличиваем лимит предупреждения о размере чанков
    chunkSizeWarningLimit: 500,
  },
  // Оптимизация для разработки
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})