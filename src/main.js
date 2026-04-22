import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { home } from './page/home.js'
import { error404 } from './page/404.js'
import { tracking } from './page/track.js'
import { ship } from './page/ship.js'
import { contact } from './page/contact.js'
import { logistics } from './page/logistics.js'




import { about } from './page/about.js'
import { login } from './page/login.js'


window.onload=()=>{
    loadPage(window.location.pathname)
}
export function seo(data = {}) {
    const {
      title = '',
      description = '',
      keywords = '',
      author = '',
      image = '',
      url = window.location.href,
      type = 'website',
      icon = '/favicon.ico',
      themeColor = '#ffffff'
    } = data
  
    // Helper: create or update tag
    function setTag(selector, createTag, attrs) {
      let el = document.querySelector(selector)
  
      if (!el) {
        el = document.createElement(createTag)
        document.head.appendChild(el)
      }
  
      for (const key in attrs) {
        el.setAttribute(key, attrs[key])
      }
    }
  
    // Title
    if (title) document.title = title
  
    // Basic meta
    if (description) {
      setTag('meta[name="description"]', 'meta', {
        name: 'description',
        content: description
      })
    }
  
    if (keywords) {
      setTag('meta[name="keywords"]', 'meta', {
        name: 'keywords',
        content: keywords
      })
    }
  
    if (author) {
      setTag('meta[name="author"]', 'meta', {
        name: 'author',
        content: author
      })
    }
  
    // Theme color (mobile browser UI)
    setTag('meta[name="theme-color"]', 'meta', {
      name: 'theme-color',
      content: themeColor
    })
  
    // Open Graph (Facebook, WhatsApp, etc.)
    setTag('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: title
    })
  
    setTag('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: description
    })
  
    setTag('meta[property="og:image"]', 'meta', {
      property: 'og:image',
      content: image
    })
  
    setTag('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: url
    })
  
    setTag('meta[property="og:type"]', 'meta', {
      property: 'og:type',
      content: type
    })
  
    // Twitter
    setTag('meta[name="twitter:card"]', 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image'
    })
  
    setTag('meta[name="twitter:title"]', 'meta', {
      name: 'twitter:title',
      content: title
    })
  
    setTag('meta[name="twitter:description"]', 'meta', {
      name: 'twitter:description',
      content: description
    })
  
    setTag('meta[name="twitter:image"]', 'meta', {
      name: 'twitter:image',
      content: image
    })
  
    // Canonical URL
    setTag('link[rel="canonical"]', 'link', {
      rel: 'canonical',
      href: url
    })
  
    // Favicon
    setTag('link[rel="icon"]', 'link', {
      rel: 'icon',
      href: icon
    })
  }



function loadPage(path){
    const app=document.querySelector('#app');
    switch (path) {
        case '/':
        case '/home':
            app.innerHTML =home()
            break;
        case '/track':
            app.innerHTML =tracking()
            break;
            case '/ship':
                app.innerHTML =ship()
                break;
                case '/contact':
                app.innerHTML =contact()
                break;
                case '/logistics':
                app.innerHTML =logistics()
                break;
                
                case '/about':
                    app.innerHTML =about()
                    break;
                    case '/login':
                    app.innerHTML =login()
                    break;
        default:
            app.innerHTML=error404()
            break;
           
    
    }
}