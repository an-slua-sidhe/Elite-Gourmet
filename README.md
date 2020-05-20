![Elite Gourmet Banner Logo](assets/images/banner.png "Elite Gourmet Banner Logo")

# **THE _ELITE GOURMET_ WEBSITE**

## **Introduction**

This is the repository for the **Elite Gourmet** website.

The **Deployed Version** of the site can be visited by clicking [**here**](https://an-slua-sidhe.github.io/milestone-2).

My name is **Paul Quinn** and I designed and developed this site in its entirety as part of my [**Fullstack Web Development Diploma**](https://codeinstitut#e.net/courses) with the **Code Institute**, Ireland. I came up with the concept for Elite Gourmet while thinking of ideas for my Milestone 2 project. After completing modules in Javascript Fundamentals and Interactive Front-end Development, this project needed to showcase my newfound skills in Javascript powered website functionality.

I decided to use 2 APIs for the project; [**Google Maps**](https://developers.google.com/maps/documentation/javascript/tutorial) and [**EmailJS**](https://www.emailjs.com/).

I then needed subject material and a central concept for my project. As I am from West Cork and live in the city of Cork, I considered the explosion of culinary excellence in the region in the last 10-15 years. This also extends beyond Cork to the rest of Ireland, and includes several **Michelin** starred establishments. Combining **Google Maps** and **EmailJS** with this local fine dining landscape, I hit upon the idea of a website serving clients who wished to discover the finest culinary experience without the hassle of organising it.

**Elite Gourmet** is a site where the user can browse and select Michelin starred restaurants from the four corners of Ireland (via the **Google Maps API**) get in contact with the host (via the **EmailJS API**) and organise a trip to and from their chosen establishment, with all transport, dietary and booking concerns taken care of.

 There is a full overview of the design/development process below, along with an extensive outline of the testing process, future features, user stories, responsivity and deployment.

## **Table of Contents**

1. [User Experience](#user-experience)
    - [User Stories](#user-stories)
        - [The Restaurateur](#the-restaurateur)
        - [The Tourist](#the-tourist)
        - [The Gourmand](#the-gourmand)
        - [The Local](#the-local)
        - [The Critic](#the-critic)
    - [Wireframes and Mockups](#wireframes-and-mockups)
        - [Basic Wireframes](#basic-wireframes)
        - [Full Asset Mockups](#full-asset-mockups)
    - [Design Choices](#design-choices)
        - [Images](#images)
        - [Colours](#colours)
        - [Fonts](#fonts)
        - [Icons](#icons)
        - [Google Map Markers](#google-map-markers)
    - [Design Changes](#design-changes)
        - [General Changes](#general-changes)
        - [Mobile Changes](#mobile-changes)
        - [Tablet Changes](#tablet-changes)
        - [Desktop Changes](#desktop-changes)

2. [Features](#features)
    - [Existing Features](#existing-features)
        - [Landing Page](#landing-page)
        - [Services Section](#services-section)
        - [Bookings Section](#bookings-section)
        - [Restaurants Section](#restaurants-section)
        - [About Us Section](#about-us-section)
        - [Footer](#footer)
    - [Future Features](#future-features)

3. [Technologies Used](#technologies-used)

4. [Testing](#testing)
    - [Developer Tools](#developer-tools)
        - [Chrome](#chrome)
        - [Firefox](#firefox)
        - [Opera](#opera)
        - [Edge](#edge)
        - [Internet Explorer](#internet-explorer)
        - [Safari](#safari)

    - [Media Queries](#media-queries)
        - [Mobile](#mobile)
        - [Tablet](#tablet)
        - [Desktop](#desktop)

    - [Dashboard](#dashboard)

    - [User Scenarios](#user-scenarios)
        - [Seeking Fine Dining Information for Ireland](#seeking-fine-dining-information-for-ireland)
        - [Specifically Looking for Michelin Starred Restaurants](#specifically-looking-for-michelin-starred-restaurants)
        - [Locating the Six Restaurant Partners of Elite Gourmet](#locating-the-six-restaurant-partners-of-elite-gourmet)
        - [Booking a Fine Dining Experience](#booking-a-fine-dining-experience)
        - [Finding Out About Elite Gourmet](#finding-out-about-elite-gourmet)
    - [Outstanding Bugs](#outstanding-bugs)

5. [Deployment](#deployment)
    - [Local](#local)
    - [Remote](#remote)

6. [Credits](#credits)
    - [Images Used](#images-used)
    - [Restaurants Used](#restaurants-used)
    - [Acknowledgements](#acknowledgements)

___

## **User Experience**

**Elite Gourmet** was conceived as a site where a discerning customer could go to have their culinary needs taken care of. The **User Interface** (UI) is intended to be streamlined and intuitive, and to be easy and enjoyable to use.

### **User Stories**

There are a number of different types of user which may visit the site, each with different goals and motivations. I have listed their stories in five categories; The Restaurateur, The Tourist, The Gourmand, The Local, The Critic.

#### The Restaurateur

- As a Restaurateur, I can read about Elite Gourmet's philosophy and remit in the [**Services**](#services-section) and [**About Us**](#about-us-section) sections, to see if I would be interested in a partnership with the site.
- As a Restaurateur, I can get in touch with Elite Gourmet to set up a working relationship via the **Become a Restaurant Partner** option in the **Contact Form** in the [**Bookings**](#bookings-section) section.

#### The Tourist

- As a tourist, I can find the site while looking for holiday ideas on my web browser.
- As a tourist, I can quickly discern whether or not the site is what I'm looking for (i.e. a budget or deluxe experience) through the language and imagery used.
- As a tourist, I can see what options **Elite Gourmet** can offer me in the [**Services Section**](#services-section).
- As a tourist, I can browse the restaurants that are available in the [**Restaurants Section**](#restaurants-section).
- As a tourist, I can get in contact with **Elite Gourmet** to begin organising my culinary experience though the **Book a Fine Dining Experience** option in the **Contact Form** of the [**Bookings Section**](#bookings-section).
- As a tourist, I can choose which venue I would like to frequent, organise transport to and from the restaurant, and deal with any dietary issues, by filling in the **Message Section** in the **Contact Form**.

#### Gourmand

- As a gourmand, I can see which of Ireland's **Michelin** starred restaurants are on offer in the [**Restaurants Section**](#restaurants-section).
- As a gourmand, I can get in touch with **Elite Gourmet** to discuss the type of cuisine offered in each establishment, as well as the ethos of the head chef, via the **Book a Fine Dining Experience** option in the [**Bookings Section**](#bookings-section).

#### The Local

- As a local, I can become informed about the growth of fine dining in my area by reading the [**Restaurants Section**](#restaurants-section).
- As a local, I can get in touch with **Elite Gourmet** to see if our services would suit a local person with their own transport and possible prior knowledge of the locale by filling in the **Message Section** in the [**Bookings Section**](#bookings-section).

#### The Critic

- As journalist,  I can get in contact with **Elite Gourmet** to get information about our restaurants and book an evening for a review by using the **Organise a Restaurant Review** option in the **Contact Form** of the [**Booking Section**](#booking).

### **Wireframes and Mockups**

I used Adobe XD to design and create **Wireframes** and **Mock-ups** for this site. I decided to create a single page site and to follow the principal of **Mobile First**. I followed the usual method of keeping the basic wireframes extremely simple stylistically, mostly focusing on the form, location and interaction between the various elements of the site on each page. I then used the theme of culinary excellence to decide the colour palette and artistic direction of the site. The wireframes and mock-ups can be found as PDFs in this repository (see below for links).

#### Basic Wireframes

The basic **Wireframes** are available in three PNGs; one for [**Mobile**](assets/wireframes/mobile-wireframe.png), one for [**Tablet**](assets/wireframes/tablet-wireframe.png) and one for [**Desktop**](assets/wireframes/desktop-wireframe.png). Any colour used is for contrast only. Simple text headings were added to each element to denote its purpose. These overall [**Design Choices**](#design-choices) can be traced to the final deployed [**Website**](https://an-slua-sidhe.github.io/milestone-2), with some changes (see [**Design Changes**](#design-changes)).

#### Full Asset Mockups

PNGs of the full asset **Mockups** can also be found in this repository. The **Mobile** mockup can be found [here](assets/mockups/mobile-mockup.png), the **Tablet** version is [here](assets/mockups/tablet-mockup.png) and the **Desktop** version is [here](assets/mockups/desktop-mockup.png).

### **Design Choices**

The site was intended to have an aura of classy competence, a simplicity of design that didn't attempt to overwhelm the users senses. I have tried to use clear, simple and high quality images and textures when designing the site. I didn't want a site that contained too much clutter and text, but one that got across its message confidently, clearly and cleanly. Therefore, I decided to create a single-page site with a focused aesthetic. Mobile, tablet and desktop versions of the site are only very slightly different, basically invloving **Bootstrap** responsive breakpoint changes (see the [**Restaurants Section**](#restaurants-section) below).

#### Images

I wanted a selection of high quality images for the site, which were uncluttered and depicted cooking scenes in an elegant way. Where these images would be used was already decided in the design **Wireframes** (see [above](#basic-wireframes)). I found the assets I sought on [**Pixabay**](https://pixabay.com/). The main **Jumbotron Background Image** was very important for the site. I chose one that was tasteful, with a palette of muted, yet organic colours, and it can be found [here](assets/images/jumbotron.jpg). I selected an ephemeral image of fine dining for the **README Banner Logo** which can be found [here](assets/images/banner.png). The **Booking Section Background** (click [here](assets/images/bookings-background.jpg)) introduces a dash of brighter colour to the overall palette. This is expanded with the **About Us Background**, which you can see [here](assets/images/about-us-background.jpg). Finally, each culinary venue has an image that was sourced from the restaurant's own webpage; click on the restaurant name below to see the location of these files in this repository:

- [Ichigo Ichie](assets/images/ichigo-ichie-cork.jpg)
- [The Cliff House](assets/images/cliff-house-waterford.jpg)
- [L'Ecrivain](assets/images/lecrivain-dublin.jpg)
- [The Ox](assets/images/ox-belfast.jpg)
- [Kai Restaurant](assets/images/kai-restaurant-galway.jpg)
- [The Chart House](assets/images/chart-house-dingle.jpg)

To see where these images appear on their respective webpages, see the [**Credits**](#credits) section below.

#### Colours

I used [**Canva**](https://www.canva.com) to create a palette from the **Jumbotron Background Image**. This understated and earthy palette suited the culinary nature of the site. I contrasted e6ch section's use of colour, with large high-res background images for the **Jumbotron**, **Booking** and **About Us** sections, and a simple chocolate coloured backdrop to the sections in between. One more main colour from the palette was used for the backgrounds of separate elements within the **Services** and **Restaurants** sections, a moderate blue which could be contrasted with the chocolate background of the overall sections. Variations on these colours where then used for the **anchor links** throughout the site, with changes on **hover**, **scroll** and other actions. The main text colour was a white or off-white, so as to be legible on the dark backgrounds. Variations on the main text colour were used in the Navbar and in various elements throughout for legibility and contrast. An opaque background colour was used in various elements to make text visible.

The colours used for the site are:
- Main Text Colour - #FFF
- Navbar Text Colour - #E0DFDF
- Text Colour Variations - #F1E5E5
- Main Background Colour - #594C45
- Opaque Background Colour - rgba(0, 0, 0, 0.6)
- Element Background Colour - #426A8C
- Link Colour - #F7D29C
- Link Hover Colour - #C29C64
- Google Maps Colour - #000
- Form Button Colour - #ECEAEA

#### Fonts

The fonts I used were selected from [**Google Font's**](https://fonts.google.com/) array of options.  [_**Gafata**_](https://fonts.google.com/specimen/Gafata) was chosen as the main font of the site, as it has a simple yet classy look, and is clearly legible. [_**Cinzel**_](https://fonts.google.com/specimen/Cinzel) was chosen as the main heading font, and for the **Logo**. This font has an elegant look to it which suits the site's overall theme. The back up font is _**Sans-serif**_.

#### Icons

A navicon was created for the site using the font _**Cinzel**_ and [**Gimp**](https://www.gimp.org/) and can be viewed [here](assets/images/favicon.png) (PQ - To be completed). Social media link icons were supplied by [Font Awesome](https://fontawesome.com/).

#### Google Map Markers

I sourced a unique marker for the **Google Maps API** from [**Flaticon**](https://www.flaticon.com/). This marker contains a knife and fork to suit the culinary theme, and the detail and colour of the marker combine well with the sites aesthetic.

### **Design Changes**

#### General Changes

There were very little general changes from the original design. Some font colours were changed when it became apparent that they didn't work as expected; an example of this is in the **CTA**, where the '20% OFF' text was meant to be red, but was changed to a lighter brown colour as the red was too dark. One major change was the introduction of **Flipcards** into the **Restaurants Section** (see [**below**](#flipcards)). This allowed me to have the restaurant image on the front of the card and the information on the back, saving space and making for a better looking UI. In turn, this impacted on the original **Mobile** and **Tablet** design for this section, which tried to force the images and information into one card. The original design, and its **Desktop** variant, can still be seen in the [**Mock-ups**](#full-asset-mockups). The final general change was in the background colours for the elements in the **Services** and **Restaurants** sections. Initial there was supposed to be a contrast between elements, using a light brown (#C29C64) and a blue colour (#594C45) (see for example the contrasting backgrounds of the different Restaurants Section cards in the mockups). This didn't look well in practice, however, and it was decided to just use the blue colour, as it was more understated.

#### Mobile Changes

- **Google Maps API Section**
    This element was initially supposed to appear above the **Services Section Text** element in the **Services Section**. This didn't really work in practice, however, as users would have been asked to browse the map without the context the **Services Text** provided. It was decided to use **Bootstrap's** inbuilt column ordering to make the Services Text appear before Google Maps on mobile, but to appear to the right of it on desktops and higher resolutions.

#### Tablet Changes

- **Google Maps API Section**
    Originally meant to appear above **Services Section Text** element in the **Services Section**, it was decided to use the **Desktop** layout here instead, where these two elements are side by side with **Google Maps** to the left.


#### Desktop Changes

- **Logo**
    The **Logo** was initially supposed to swap corners with the **Navbar** on **Desktop** resolutions. It was believed that the Logo might clash with the lighter section of the **Landing Page** background image on higher resolutions. It did not clash, however, and so it was decided to use the same Landing Page layout for all platforms.



# **FROM HEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!**


___

## **Features**

This is a single-page site with 6 main sections. The basic layout of the site was created using the [**Bootstrap 4**](https://getbootstrap.com) grid system (which is based on [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)), with some alterations and additions. The core of this is the use of containers,rows and columns. All **in-line** links within any section's text are fully navigable; they also change colour when hovered over (see [**Colours**](#colours)).

### **Existing Features**

#### Landing Page

- **Hero Image**  
    This [image](assets/images/jumbotron.jpg) is a high quality file sourced on [**Pixabay**](https://pixabay.com/) which provides a stiking backdrop to the **Landing Page**. It is presented via a **Jumbotron**, and scales across all platforms.

- **Main Logo**
    As the concept of **Elite Gourmet** is one I come up with myself, I have no proprietary icons or images to use as a banner logo for the site. Therefore, I simply used the chosen **Heading** font (_**Cinzel**_) for the landing page's main title. This element has an opaque background to keep it legible on the dark backgound of the **Hero Image**.

- **Navbar**
    I modified the typical [**Bootstrap**](https://getbootstrap.com/docs/4.0/components/navbar) **Navbar** to suit the site. This included collapsing the Navbar into a **Burger Button** and fixing it to top, so it would remain there while scrolling. I modified **Javascript** from [**JS Fiddle**](https://jsfiddle.net/wamosjk/ufhp9s15) to make an opaque Navbar background (rgba: 0, 0, 0, 0.5) for when the page scrolled. I also changed some of the styling to suit the site, selecting Bootstrap's 'navbar-dark' option so it could be seen over the muted colour palette, and changing the 'text-color'(rgb: 224, 223, 223) for the same reason (along with colour changes for 'hover': #C29C64). On **Mobile** and **Tablet** the Navbar goes to the top left of the screen, with the logo to the top right. These swap places for the **Desktop** version.

- **Call to Action (CTA)**  
    There is **CTA** at the bottom of the **Landing Page** envelope. This tells users that there is 20% off all services at the moment, and provides a link for them to click to get more information, bringing them to the **Services Section** of the page. The anchor for this link is the '20% off!' text, which was styled in light brown (rgb: 247, 210, 156) to distinguish it from the main text (white). The CTA element has an opaque background to keep it legible on the dark backgound of the **Hero Image**.

#### Services Section

- **Services Section**  
    There are two elements in this section: one for the **Google Maps API**  and one for **Services Text**. The background for this section is an earthy brown that fits with the images selected and the culinary theme of the site (#594C45). This colour is one of the ones taken from the jumbotron image when building a palette (see [above](#colours).

- **Google Maps API**  
    The **Google Maps** element has a light brown coloured background behind the map itself (#C29C64); it displays to the left of the **Services Section** for **Desktop** and to the bottom on **Mobile** and **Tablet**. The map uses [**JSON**](https://en.wikipedia.org/wiki/JSON) to communicate with the API, rendering the locations of the 6 chosen restaurants upon the initial loading of the site. These are numbered 1 to 6; their names are listed beneath the map, and each one contains a link to the appropriate part of the **Restaurants Section**. Google's [**Cluster**](https://developers.google.com/maps/documentation/javascript/marker-clustering) function is enabled, so several restaurants can be clustered together if the user zooms out on the map. The inital position of the map is focused on the centre of Ireland (lat: 53.4, lng: -7.9) at a zoom of 5.5.

- **Services Text**  
    The **Services Text** element has a moderate blue background colour (#426A8C), in contrast to the **Google Maps** element. The text is white so as to be legible on this background. It outlines the services offered on the site. The list of services is styled in a different colour to the rest of the text to help it to stand out(#f1e5e5). There are two links in the final paragraph; one to the **Bookings Section** and one to the **Restaurants Section**. As usual, these links are in light brown but turn dark brown when hovered.

#### Bookings Section

- **Booking Section Backgound**
(PQ - To be completed).

- **EmailJS Section**
(PQ - To be completed).

#### Restaurants Section

- **Flipcards**
    This could be a way to put more content and information on the site, without cluttering up the clean design aesthetic. The cards for each restaurant in the **Restaurants Section** could function as **Flip Cards**. Each flip card would have extra information about the restaurant on the back, with the main image and title on the front. This would make the site more dynamic and enjoyable for the user.
(PQ - To be completed).

- **Restaurant Cards**  
(PQ - To be completed).

#### About Us Section

- **About Us Text**  
(PQ - To be completed).

#### **Footer**

- **Copyright Text**
    The **Copyright Text** is a simple part of the **Bootstrap** grid. It is a basic text element.
(PQ - To be completed).


- **Contact Information**
    This part of the **Footer** contains the company's contact details, including its fictional phone number and email address.
(PQ - To be completed).

- **Social Media Links**
    The **Social Media Links** are fully functional, and link to fictional **Elite Gourmet** accounts on: [**Facebook**](https://www.facebook.com/??), [**Twitter**](??) and [**Instagram**](https://www.instagram.com/??). The icons for each social media platform were provided by [**Font Awesome**](https://fontawesome.com).
(PQ - To be completed).


### **Future Features**

- **Internationalisation** 
    (Using Crowdin 'I18n')

___

## **Technologies Used**

(PQ - Check most recent versions!! NB)

All the technologies used to create this project are listed below, along with their usage. Simply click on the title for a link to the main site. When there were separate instances where a technology was used, I have listed each link below.

[**HTML**](https://en.wikipedia.org/wiki/HTML5) - This project's structure is based on **HTML 5**.

[**CSS**](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - This project's style was created using **CSS 3**.

[**Adobe XD**](https://www.adobe.com/ie/products/xd.html) - The wireframes and mockups for this site were designed in **Adobe XD**.

[**VSCode**](https://code.visualstudio.com) - All code for this site (including this README file), and all **Github** versioning of this code, was done using **VSCode**.

[**Git**](https://git-scm.com/) - I used **Git** to create this project's local repository and to maintain version conrtrol. 

[**Github**](https://github.com) - The remote repository was done through **Github**.

[**Javascript**](https://en.wikipedia.org/wiki/JavaScript) -   A number of elements on the site have **Javascipt** functionality.

- There were [three plugins](https://getbootstrap.com/docs/4.3/getting-started/introduction) required so that **Bootstrap** would function; **jQuery**, **Popper.js** and **Bootstrap's** own **min.js**.
- I copied and modified **Javascript** code from [**Js Fiddle**](https://jsfiddle.net/wamosjk/ufhp9s15) to create transitions while scrolling.
- I also used **Javascript** to get **Google Maps API**, **EmailJS API** and ??? to function.
(PQ - To be completed).

[**Bootstrap**](https://getbootstrap.com) - The site was built using **Bootstrap's** grid system.

- I also modified several **Bootstrap** components (e.g. **Navbar**, **Bootstrap Grid**, **Contact Form**).

[**Pixabay**](https://pixabay.com/) - I sourced all the images used in the site's construction from this royalty-free website.

[**Canva**](https://www.canva.com) - I found my colour palette by uploading the main landing page [**Hero Image**](assets/images/jumbotron.jpg) to **Canva** and I added to this with my own colours.

[**Flaticon**](https://www.flaticon.com/) - A food-themed map marker for Google Maps was found here.

[**Gimp**](https://www.gimp.org/) - I used this open-sourced image-manipulation program to create my **Favicon**.

[**Font Awesome**](https://fontawesome.com) - The **Social Media Icons** were supplied using **Font Awesome**.

- I attempted to use the latest version of **Font Awesome** which is available on [**CDNJS**](https://cdnjs.com/libraries/font-awesome) (version 5.9.0) but it failed to deploy, so I reverted to the version available from the [**BootstrapCDN**](https://www.bootstrapcdn.com/fontawesome/) (version 4.7.0).
(PQ - Is this still the case?)

[**HTML Code Checker**](https://validator.w3.org) - I checked my HTML with the **W3C Markup Validation Service**

[**CSS Code Checker**](https://jigsaw.w3.org/css-validator) - I checked my CSS with the **W3C CSS Validation Service**

[**CSS Auto-prefixer**](https://autoprefixer.github.io) - The **Autoprefixer CSS Online** provided a **Vendor Prefix** check for my code.

(PQ -  Need a Javascript checker?)

[**ARIA Checker**](http://wave.webaim.org/) - I used **Wave** (Web Accessibility Evaluation Tool) to check that my code was accessible to all users.

___

## **Testing**

### **Developer Tools**

I tested the site in **Developer Tools** on four internet browsers (**Chrome**, **Firefox**,  **Internet Explorer** & **Safari**). Bugs and errors were tackled successfully in this way throughout the development process, using **Live Server** in **VSCode**. I also tested the site with **Android OS** on a **Galaxy A5** and a **??**.

- [**Chrome**](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjwkK_qBRD8ARIsAOteukDltqXTjp13--esZkC4d8eL6Ggma28pvUQiVvwnJwVA06i0YbiSIuwaArNOEALw_wcB&gclsrc=aw.ds)

- [**Firefox**](https://www.mozilla.org/en-US/firefox/new/)

- [**Opera**](https://www.mozilla.org/en-US/firefox/new/)

- [**Edge**](https://www.mozilla.org/en-US/firefox/new/)

- [**Internet Explorer**](https://www.microsoft.com/en-ie/download/internet-explorer.aspx)

- [**Safari**](https://www.apple.com/lae/safari/)

### **Media Queries**

Over 20 (??? Check) separate **Media Query** resolutions were set in the [**CSS**](assets/css/style.css) code. Every imaginable variation, from the smallest phone to the largest 4K monitor, were used to test the responsivity of the site. There are often multiple elements, functions and attributes being targeted and styled within in any one **Media Query**. These ensure that the site looks like it should from 240px in width to over 4000px. I use the full gamut of responsivity in **Developer Tools**, but I also tested certain specific resolutions, as shown below.

#### Mobile

- iPhone 4 (320 x 480)
- Galaxy S5 (360 x 640)
- iPhone X (375 x 812)

#### Tablet

- iPad (768 x 1024)
- iPad Pro (1024 x 1366)

#### Desktop

- Laptop with MDPI Screen (1280 x 800)
- Laptop with HiDPI Screen (1440 x 900)
- Gaming Desktop (2560 x 1440)
- 4K Monitor (3840 x 2160)
- 4k Plus (4000 x 2200)

### **Dashboard**

I used this website to test on a number of platforms which I didn't have physical access to. I also tested the above bugs against these devices. The platforms which I tested on **Dashboard** were:

- sfjlsafj
- lsadjfjhsdaf
- kjsaljkfd

### **User Scenarios**

#### Seeking Fine Dining Information for Ireland

- **Navbar**
    1. Go to the **Landing Page** section.
    2. Click on the **Navbar** on the top left of the screen for **Mobile** and **Tablet**.
    3. Click on the **Navbar** on the top right of the screen for **Desktop**.
    4. Click on the links to either **Services**, **Restaurants** of **About Us** for more information.

- **Scroll**:
    1. Go to the **Landing Page** section.
    2. Scroll down the page to either the **Services**, **Restaurants** or **About Us** sections for information.

#### Specifically Looking for Michelin Starred Restaurants

- **Restaurants Section**:
    1. Use either the **Navbar** link to **Restaurants** or scroll down from the **Landing Page** to the **Restaurants Section**.
    2. Read through the information for each restaurant partner, including their cuisine, philosophy and location.

#### Locating the Six Restaurant Partners of Elite Gourmet

- **Google Maps API**:
    1. Use either the **Navbar** link to **Services** or scroll down from the **Landing Page** to the **Services Section**.
    2. Use the **Google Maps API** to locate the **Michelin** starred restaurants.

#### Booking a Fine Dining Experience

- **Booking Section**:
    1. Use either the **Navbar** link to **Booking** or scroll down from the **Landing Page** to the **Booking Section**.
    2. Use the **Contact Form** in the **EmailJS Section** to contact **Elite Gourmet** and organise your culinary experience.

#### Finding Out About Elite Gourmet

- **About Us**:
    1. Use either the **Navbar** link to **Services** or scroll down from the **Landing Page** to the **About Us Section**.
    2. Read the text outlining the origins and goals of **Elite Gourmet**. 

### **Outstanding Bugs**

HEERREE!!!!
(PQ - No issues as of yet. To be completed).

___

## **Deployment**

### **Local**

- This project is deployed live on [**Github Pages**](https://an-slua-sidhe.github.io/milestone-2).

- You can run the code in your chosen local **Integrated Development Environment** (**IDE**, e.g. [**VS Code**](https://code.visualstudio.com), [**AWS CLoud9**](https://aws.amazon.com/cloud9)).
    1. Open the **Project Repository** in [**Github**](https://github.com/an-slua-sidhe/milestone-2).
    2. Look for the green *Clone or Download* button at the top right of the repository.
    3. If using [**Github Desktop**](https://desktop.github.com), chose to *Open in Desktop*.
    4. If you want to **Clone** the files into a **Git** repository, chose to copy the URL from the same menu (# 2.). Open your chosen **Command Line Interface** (**CLI**, e.g. [**Gitbash**](https://git-scm.com/downloads)) and use the following command:
        ```
        git clone https://github.com/an-slua-sidhe/milestone-2.git
        ```
    5. To set up the files manually in a local repository, chose to **Download ZIP** and remove the files from the ZIP folder. Place them into the chosen location. If desired, set up a **Git** repository in this folder in your **CLI** with the following command:
        ```
        git init
        ```
    6. You can check the state of your repository after initialising it by using this command:
        ```
        git status
        ```

### **Remote**

- To push the code to a remote repository, follow the steps below (I use **Github** as an example).

    1. After using the command 'git status' (see step 6 above) in the command line, check that the console reads:

        ```
        Nothing to commit
        working tree clean
        ```

    2. Next, link your remote repository. For **Github**, open your Github account and select *Repositories*. At the top right of the screen select *New*.

    3. Give your repository a name. Keep it short and avoid underscores.

    4. You can now choose a few different ways to link the local and remote repositories. The one we want here is "…*or push an existing repository from the command line*". Copy the code this option gives you and paste it into your command line. It should look something like this:

        ```
        git remote add origin https://github.com/an-slua-sidhe/milestone-2
        git push -u origin master
        ```

    5. Now you can push any changes from the command line with:

        ```
        git push
        ```
    6. If you check the status of of your local repository now (using 'git status') it should give you something like this:

        ```
        On branch master
        Your branch is up-to-date with 'origin/master'.
        nothing to commit, working tree clean
        ```

    7. Finally, to deploy the code live with **Github Pages**, open the repository in your **Github** account and select '*settings*' at the top right of the page. Scroll down to the *Github Pages* section. Click on the '*None*' button. Select the correct branch from the menu. Now click on the URL link to visit the deployed site.

___

## **Credits**

### **Images Used**

(PQ - Various image credits to be added)

- All images were sourced from [**Pixabay**](https://pixabay.com/).
- Google Maps marker icon made by [Freepik](https://www.flaticon.com/authors/freepik) and sourced from [www.flaticon.com](https://www.flaticon.com/).

### **Restaurants Used**

- Specific restaurant images and all restaurant information was sourced from the respective sites.

    1. The Ichigo Ichie image can be found [here](To be added).

    2. The Cliff House image can be found [here](To be added).

    3. The L'Ecrivain image can be found [here](To be added).

    4. The Ox image can be found [here](To be added).

    5. The Kai Restaurant image can be found [here](To be added).

    6. The Chart House image can be found [here](To be added).

### **Acknowledgements**

- I received inspiration for this project from the many wonderful cafes, restaurants and bars that are thriving in Cork and the surrounding regions. The passion for food and the constant raising of standards that are displayed year-on-year by the indigenous hospitality industry are incredible. As this project was finalised during the pandemic of 2020, I think it is fitting to wish all culinary creatives a fruitful and prosperous future.
