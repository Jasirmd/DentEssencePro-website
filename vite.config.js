import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { randomFillSync } from 'crypto'

// Polyfill globalThis.crypto.getRandomValues for environments where it's missing
// Some Node/CI environments (or older Node versions) do not expose the Web Crypto
// API expected by Vite. Use Node's crypto.randomFillSync as a safe replacement.
if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues !== 'function') {
  // eslint-disable-next-line no-undef
  globalThis.crypto = {
    getRandomValues: (array) => {
      // randomFillSync supports TypedArray (Uint8Array etc.) and fills in-place
      return randomFillSync(array)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

