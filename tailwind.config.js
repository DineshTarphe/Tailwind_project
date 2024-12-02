/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','market.html','about.html','education.html','pagenotfound.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#db2f69',
        'bs_btn_hover': '#ba2859',
        'lavender':'#AF98A0',
        'color951E3D':'#951E3D',
        '454040':'#454040',
        'a9a0a0':'#a9a0a0',
        '5a5657':'#5a5657',
        'fae4ec':'#fae4ec',
        'white4d':'#ffffff4d',
        '131722':'#131722',
        '787b86':'#787b86',
        '089981':'#089981',
        'beforeText':'rgba(241, 196, 15, 0.4)',
        'eq':'#F1C40F',
        'etf':'#1ABC9C',
        'como':'#E74C3C',
        'mutual':'#4886D9',
        'forex':'#34495E',
        'bond':'#2ECC71',
        'crypto':'#985CB0',
        'option':'#E67E22',
        'future':'#95A5A6',
        'db2f69':'#db2f69',
        '9b9b9b':'#9b9b9b',
        'DCDCDC':'#DCDCDC',
        '9B9B9B':'#9B9B9B',
        'f6f6f6':'#f6f6f6',
        'socialiconColor':'rgba(219, 47, 105, 0.7)',
        'socialiconBg':'rgba(219, 47, 105, 0.1)',
        'green':'#27BC9C',
        'white3':'rgba(255, 255, 255, 0.3)',
        'blue':'#4284DD',
        'purple':'#9A5BB4',
        'navy':'#35495D',
        'orange':'#fd6a4f',
        'b72053':'#b72053',
        'fdf2f6':'#FDF2F6',
        'FEF8FB':'#FEF8FB',
        'fb':'#3b5998',
        'linkdin':'#0077b5',
        'dribble':'#ea4c89',
        'pinterest':'#BD081C',
        'AF98A0':'#AF98A0',
        '6d555d':'#6d555d',

      },
      fontFamily:{
        'display':['DM Sans','sans-serif']
      },
      backgroundImage: {
        'banner1': "url('/images/in-slide-bg.webp')",
        'banner2': "url('/images/in-card-background-1.jpg')",
        'cardGradient':'linear-gradient(148deg, rgb(219, 47, 105) 0%, rgba(219, 47, 105, 0.5) 86%)',
        
      },
      fontSize:{
        '90':'90px',
        '40':'40px',
        '32':'32px',
        '28':'28px',
        '18':'18px',
        '16':'16px',
        '14':'14px',
        '10':'10px',
      },
      shadow:{
        'boxS':'rgba(0, 0, 0, 0.14) 0px 2px 18px',
      },
      zIndex:{
        '1':'1',
        '2':'2',
      },
      keyframes:{
        float:{
          '0%':{transform:'translateY(0)'},
          '50%':{transform:'translateY(-10px)'},
          '100%':{transform:'translateY(0)'},
        }
      },
      animation:{
        'floating-card':'float 2s linear 0.2s infinite',
      },
      animationDuration:{
        '16':'16s',
      },
      lineHeight:{
        '64':'64px',
      },
      
    },
  },
  plugins: [],
}

