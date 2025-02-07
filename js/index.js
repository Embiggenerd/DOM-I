const siteContent = {
  "nav": {
    "nav-item-0": "Ducks",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Trucks",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// State for stretch goal
const state = {
  names: []
}
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav links
const linksParent = document.querySelector('nav')
const link = document.createElement("a")
const link2 = document.createElement("a")

link.href = "#"
link2.href = "#"

linksParent.prepend(link)
linksParent.appendChild(link2)

let links = document.querySelectorAll('nav > a')
for (let i = 0; i < links.length; i++) {
  links[i].textContent = Object.values(siteContent.nav)[i]
  links[i].style.color = "green"
}

// CTA section
let h1 = document.querySelector('h1')
h1.textContent = siteContent.cta.h1

let ctaButton = document.querySelector('.cta-text > button')
ctaButton.textContent = siteContent.cta.button

let ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta["img-src"]


// Main-content : top-content : h4
let topContentH4 = document.querySelectorAll('.top-content h4')
let featureH4 = topContentH4[0]
featureH4.textContent = siteContent['main-content']['features-h4']

let aboutH4 = topContentH4[1]
aboutH4.textContent = siteContent['main-content']['about-h4']


// Main-content : top-content : p
let topContentP = document.querySelectorAll('.top-content p')
let featureP = topContentP[0]
featureP.textContent = siteContent['main-content']['features-content']

let aboutP = topContentP[1]
aboutP.textContent = siteContent['main-content']['about-content']


// Main-content : middle-image
let middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent['main-content']['middle-img-src']


// Main-content : bottom-content : h4
let btmContentH4 = document.querySelectorAll('.bottom-content h4')
btmContentH4[0].textContent = siteContent["main-content"]["services-h4"]
btmContentH4[1].textContent = siteContent["main-content"]["product-h4"]
btmContentH4[2].textContent = siteContent["main-content"]["vision-h4"]


// Main-content : bottom-content : p
let btmContentP = document.querySelectorAll('.bottom-content p')
btmContentP[0].textContent = siteContent["main-content"]["services-content"]
btmContentP[1].textContent = siteContent["main-content"]["product-content"]
btmContentP[2].textContent = siteContent["main-content"]["vision-content"]


// Contacts
document.querySelector('.contact *:nth-child(1)').textContent = siteContent.contact["contact-h4"]
document.querySelector('.contact *:nth-child(2)').textContent = siteContent.contact.address
document.querySelector('.contact *:nth-child(3)').textContent = siteContent.contact.phone
document.querySelector('.contact *:nth-child(4)').textContent = siteContent.contact.email


// Footer
let footerContent = document.querySelector('footer p')
footerContent.textContent = siteContent.footer.copyright