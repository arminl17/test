# Frontend Mentor - Arch Studio multi-page website solution

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

In this challenge, users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
  - The `Email` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the contact page map. The addresses we have on the design are fictional, so you'll need to add real addresses for this bonus task.

### Screenshot

![public/assets/Arch%20Studios%20Screenshot.jpg]!


### Links

- Live Site URL: [https://arch-studio-zeta.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Leaflet](https://react-leaflet.js.org/) - Map API


### What I learned

This project presented some new challenges to me, and also helped me solidify things I have already worked with!

#Leaflet API
Incorporating this API on a basic level was straightforward, but I ran into issues when adding features.  Changing the map view, map center, focus, and locations, were all working on the initial render, but not changing properly with state.  When I revisited the docs, I disovered the children of the map container are immutable!  By adding the function below, I was able to take in props and update the map properties.

```JavaScript
const ChangeMap = ({center, zoom}) => {
    const map = useMap();
    map.setView(center, zoom, {duration: 5});
    return null;
}
```

#Changing state based on screen size
In the portfolio page of this site, the design docs called for different grid layouts based on screen size.  While this isn't uncommon, the images provided for desktop, tablet, and mobile had drastically different proportions.  Since I was already using an object to render the portfolio data, I didn't want to write endless lines of CSS to change the background image responsively.  In the code below, I captured the initial size of the window (and added an event listener for resizing) to determine which images should be shown on the page.

``` JavaScript
    // Decides on which state to use based on initial page size
    useEffect(() => {
        let w = window.innerWidth
        if (w > 800) {
            setDataState(props.data)
        } else if (w <= 800) {
            setDataState(props.data2)
        }
    }, [props.data, props.data2])

    // Adjusts page size if the window size changes
    window.addEventListener("resize", function() {
        let w = window.innerWidth
        if (w > 800) {
            setDataState(props.data)
        } else if (w <= 800) {
            setDataState(props.data2)
        }
    })
```


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

