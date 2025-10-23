import React from 'react'

const IconButton = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      marginRight: 28,
      borderRadius: 12,
      background: '#0c2340',
      color: 'white',
      textDecoration: 'none',
      padding: 0,
      overflow: 'hidden',
      lineHeight: 0,
      flexShrink: 0,
      boxSizing: 'border-box'
    }}
  >
    {children}
  </a>
)

export default function SocialIcons({ size = 18 }){
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <IconButton href="https://www.facebook.com/dentessencepro/" label="Facebook">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={{display:'block', width:'56%', height:'56%'}} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 2 6.48 2 12.07 2 17.12 5.66 21.23 10.44 22v-7.04H7.9V12.1h2.54V9.85c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12.1h2.78l-.44 2.86h-2.34V22C18.34 21.23 22 17.12 22 12.07z"/></svg>
      </IconButton>

      <IconButton href="https://www.instagram.com/dentessencepro/" label="Instagram">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={{display:'block', width:'56%', height:'56%'}} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.25 1.25 0 11.001 2.501A1.25 1.25 0 0116.5 6z"/></svg>
      </IconButton>

      <IconButton href="https://www.linkedin.com/company/dentessencepro/" label="LinkedIn">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={{display:'block', width:'56%', height:'56%'}} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.7-1.2 2.4-2.2 4.9-2.2 5.2 0 6.1 3.4 6.1 7.8V24H17V15.3c0-2.1 0-4.8-2.9-4.8-2.9 0-3.3 2.2-3.3 4.6V24H7V8z"/></svg>
      </IconButton>

      <IconButton href="https://www.youtube.com/@makamgangaiah5309" label="YouTube">
        <svg width={size} height={size} viewBox="0 0 24 24" style={{display:'block'}} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2 12 2 12 2h-.1s-4.8 0-8.5.8c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8 0 9.9v.2C0 11.9.2 13.6.2 13.6s.2 1.7.8 2.4c.8.9 1.8.9 2.3 1 1.7.2 7.2.6 7.2.6s4.8 0 8.5-.8c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.8.2-3.7v-.2c0-1.9-.2-3.7-.2-3.7zM9.8 15.1V8.9l6.2 3.1-6.2 3.1z"/></svg>
      </IconButton>
    </div>
  )
}
