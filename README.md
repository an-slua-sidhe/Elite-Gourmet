![Elite Gourmet Banner Logo](assets/images/banner.png "Elite Gourmet Banner Logo")

# **THE _ELITE GOURMET_ WEBSITE**

## **Introduction**

This is the repository for the **Elite Gourmet** website.

The **Deployed Version** of the site can be visited by clicking [**here**](https://an-slua-sidhe.github.io/milestone-2).

My name is **Paul Quinn** and I designed and developed this site in its entirety as part of my [Fullstack Web Development Diploma](https://codeinstitut#e.net/courses) with the **Code Institute**, Ireland. I came up with the concept for Elite Gourmet while thinking of ideas for my Milestone 2 project. After completing modules in Javascript Fundamentals and Interactive Front-end Development, this project needed to showcase my newfound skills in Javascript powered website functionality.

I decided to use 2-3 APIs for the project; 2 certainties in Google Maps and EmailJS, with the possiblity of adding a third if time constraints allowed (this could also be added to a list of future features if necessary).

I then needed subject material and a central concept for my project. As I am from West Cork and live in the city of Cork, I considered the explosion of culinary excellence in the region in the last 10-15 years. This also extends beyond Cork to the rest of Ireland, and includes several **Michelin** starred establishments. Combining **Google Maps** and **EmailJS** with this local fine dining landscape, I hit upon the idea of a website serving clients who wished to discover the finest culinary experience without the hassle of organising it.

**Elite Gourmet** is a site where the user can browse and select Michelin starred restaurants from the four corners of Ireland (via the Google Maps API) get in contact with the host (via the EmailJS API) and organise a trip to and from their chosen establishment, with all transport, dietary and booking concerns taken care of.

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
    - [Design Changes](#design-changes)
        - [General Changes](#general-changes)
        - [Mobile Changes](#mobile-changes)
        - [Tablet & Desktop Changes](#tablet-&-desktop-changes)

2. [Features](#features)
    - [Existing Features](#existing-features)
        - [Jumbotron](#jumbotron)
        - [Services](#services)
        - [Booking](#booking)
        - [Restaurants](#restaurants)
        - [About Us](#about-us)
        - [Footer](#footer)
    - [Future Features](#future-features)
        - [Flip cards](#flip-cards)
        - [Another API?](#another-api?)


3. [Technologies Used](#technologies-used)

4. [Testing](#testing)
    - [Developer Tools](#developer-tools)
        - [Chrome](#chrome)
        - [Firefox](#firefox)
        - [Internet Explorer](#internet-explorer)
    - [Media Queries](#media-queries)
        - [Mobile](#mobile)
        - [Tablet](#tablet)
        - [Desktop](#desktop)
    - [Jasmine](#Jasmine)
        - [Not sure what to put here yet.](#??)
    - [User Scenarios](#user-scenarios)
        - [Seeking Fine Dining Information for Ireland](#seeking-fine-dining-information-for-ireland)
        - [Specifically Looking for Michelin Starred Restaurants](#specifically-looking-for-michelin-starred-restaurants)
        - [Locating the Six Restaurant Partners of Elite Gourmet](#locating-the-six-restaurant-partners-of-elite-gourmet)
        - [Contacting Elite Gourmet](#contacting-elite-gourmet)
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

- As a Restaurateur, I can read about Elite Gourmet's philosophy and remit in the [**Services**](#services) and [**About Us**](#about-us) sections, to see if I would be intersted in a partnership with the site.
- As a Restaurateur, I can get in touch with Eite Gourmet to set up a working relationship via the **Professional** option of the **Contact Form** in the [**Booking**](#booking) section, or through the phone number and email address available in the [**Contact Information**](#contact-information) in the [**Footer**](#footer).

#### The Tourist

- As a tourist, I can find the site while looking for holiday ideas on my web browser.
- As a tourist, I can quickly discern whether or not the site is what I'm looking for (i.e. a budget or deluxe experience) through the language and imagery used.
- As a tourist, I can see what options **Elite Gourmet** can offer me in the [**Services Section**](#services).
- As a tourist, I can browse the restaurants that are available in the [**Restaurants Section**](#restaurants).
- As a tourist, I can get in contact with **Elite Gourmet** to begin organising my culinary experience though the **Customer** option in the **Contact Form** of the [**Booking Section**](#booking).
- As a tourist, I can choose which venue I would like to frequent, organise transport to and from the restaurant, and deal with any dietary issues, by selecting the appropriate option in the **Contact Form**.
- As a tourist, I can get in contact with **Elite Gourmet** after booking to cancel, change my order or deal with any problems via the [**Contact Information**](#contact-information) in the [**Footer**](#footer).
- As a non-English speaking tourist, I can utilise the foreign language options in the **Navbar** so I can browse the site in my native tongue (available in Spanish, French and German). (PQ - I have yet to implement this functionality)


#### Gourmand

- As a gourmand, I can see which of Ireland's **Michelin** starred restaurants are on offer in the [**Restaurants Section**](#restaurants).
- As a gourmand, I can get in touch with **Elite Gourmet** to discuss the type of cuisine offered in each establishment, as well as the ethos of the head chef, by using the **Contact Form** in the [**Booking Section**](#booking).

#### The Local

- As a local, I can become informed about the growth of fine dining in my area by reading the [**Restaurants Section**](#restaurants).
- As a local, I can get in touch with **Elite Gourmet** to see if our services would suit a local person with their own transport and possible prior knowledge of the locale in the [**Booking Section**](#booking) or by using the information avalable in the [**Contact Information**](#contact-information) in the [**Footer**](#footer).

#### The Critic

- As journalist,  I can get in contact with **Elite Gourmet** to get information about our restaurants and book an evening for a review by using the **Press** option in the **Contact Form** of the [**Booking Section**](#booking).

### **Wireframes and Mockups**

I used Adobe XD to design and create **Wireframes** and **Mock-ups** for this site. I decided to create a single page site and to follow the principal of **Mobile First**. I followed the usual method of keeping the basic wireframes extremely simple stylistically, mostly focusing on the form, location and interaction between the various elements of the site on each page. I then used the theme of culinary excellence to decide the colour palette and artistic direction of the site. The wireframes and mock-ups can be found as PDFs in this repository (see below for links).

#### Basic Wireframes

The basic **Wireframes** are available in three PNGs; one for [**Mobile**](assets/wireframes/mobile-wireframe.png), one for [**Tablet**](assets/wireframes/tablet-wireframe.png) and one for [**Desktop**](assets/wireframes/desktop-wireframe.png). Any colour used is for contrast only. Simple text headings were added to each element to denote its purpose. These overall [**Design Choices**](#design-choices) can be traced to the final deployed [**Website**](https://an-slua-sidhe.github.io/milestone-2), with some changes (see [**Design Changes**](#design-changes)).

#### Full Asset Mockups

PNGs of the full asset **Mockups** can also be found in this repository. The **Mobile** mockup can be found [here](assets/mockups/mobile-mockup.png), the **Tablet** version is [here](assets/mockups/tablet-mockup.png) and the **Desktop** version is [here](assets/mockups/desktop-mockup.png).

### **Design Choices**

The site was intended to have an aura of classy competence, a simplicity of design that didn't attempt to overwhelm the users senses. I have tried to use clear, simple and high quality images and textures when designing the site. I didn't want a site that contained too much clutter and text, but one that got across its message confidently, clearly and cleanly. Therefore, I decided to create a single-page site with a focused aesthetic. As such a site would most likely be popular with visitors to our island, I decided to give the site multi-language fuctionality to broaden the possible user-base (PQ - To be implemented). Mobile, tablet, desktop versions of the site are only very slightly different, basically invloving **Bootstrap** responsive breakpoint changes (details below).

#### Section by Section

!!!!!!!!!!!!!!!!!!!

-  **Jumbotron Hero Image**     
        asfdsadffsaf

-  **Services Section**     
    sdfsafd

- **Booking Section**       
    sdfsafd

- **Restaurants Section**       	
    sdfsafd

- **About Us Section**      
    sdfsafd

- **Footer**        
    sdfsafd

#### Images

I wanted a selection of high quality images for the site, which were uncluttered and depicted cooking scenes in an elegant way. Where these images would be used was already decided in the design **Wireframes** (see above). I found the assets I sought on [**Pixabay**](https://pixabay.com/). The main **Jumbotron Background Image** was very important for the site. I chose one that was tasteful, with a palette of muted, yet organic colours, and it can be found [here](assets/images/jumbotron.jpg). I selected an ephemeral image of fine dining for the **README Banner Logo** which can be found [here](assets/images/banner.png). The **Booking Section Background** (click [here](assets/images/bookings-background.jpg)) introduces a dash of brighter colour to the overall palette. This is expanded with the **About Us Background**, which you can see [here](assets/images/about-us-background.jpg). Finally, each culinary venue has an image that was sourced from the restaurant's own webpage; click on the restaurant name below to see the location of these files in this repository:
- [Ichigo Ichie](assets/images/ichigo-ichie-cork.jpg)
- [The Cliff House](assets/images/cliff-house-waterford.jpg)
- [L'Ecrivain](assets/images/lecrivain-dublin.jpg)
- [The Ox](assets/images/ox-belfast.jpg)
- [Kai Restaurant](kai-restaurant-galway.jpg)
- [The Chart House](assets/images/chart-house-dingle.jpg)

#### Colours

I used [**Canva**](https://www.canva.com) to create a palette from the **Jumbotron Background Image**. This understated and earthy palette suited the culinary nature of the site. I used contrasted each sections use of colour, with large high-res background images for the **Jumbotron**, **Booking** and **About Us** sections, and a simple chocolate coloured backdrop to the sections in between. 

!!!!!!!!!!!!!!!!!


between the different element's shades, using maroon or forest green to accentuate elements on first glance or on hover (see the [**Home**](index.html) page **CTA** {Call to Action} for an example of this). **Navbar** & **Social Media** links transition to maroon on hover, whereas **in-line** links in the body of the text are initially maroon and hover to grey, so that they stand out from the surrounding text (all of these features can also be seen on the [**Home**](index.html) page). The **Navbar** has an opaque background on scroll for legibility, but a translucent background otherwise. The **Gaeilge** link in the **Navbar** is black and hovers to maroon, but this changes to a white which hovers to bright red when the **Navbar** is scrolled (so it continues to be visible).

#### Fonts

I used [**Google Fonts**](https://fonts.google.com/) to find a font for the site. Handwritten or more natural looking fonts (such as the Irish language [*Cló Gaelach*](http://www.nualeargais.ie/foghlaim/seanchlo.php?teanga)) were considered first, as it was believed they would suit the band ethos more. However, these were not practical in execution, as the more detailed script was hard to read. [*Gafata*](https://fonts.google.com/specimen/Gafata) was chosen as the main font in the end, as it has some organic charateristics, but is clearly legible as either a heading or the main text of section. The back up font is *Sans-serif*.

#### Icons

A Corr Mhóna navicon was created for the site using the bands [Offical Logo](assets/images/favicon.jpg). Social media link icons were supplied by [Font Awesome](https://fontawesome.com/).

### **Design Changes**

#### General Changes

- **Contact Page Background**  
    The original [**Contact**](contact.html) page was considered unsatisying and boring in comparison to the other pages, once the site was fully constructed. A new style was chosen for the **Contact** page therefore, with the new album [Poster Art](assets/images/dair-dryad.jpg) being used as an atmospheric background for the page's **Section**.

- **Corr Mhóna Live Photo**  
    A different [**Live Photo**](assets/images/band-live2.jpg) was chosen, as this shows the band playing at the [**Siege of Limerick**](http://siegeoflimerick.net). This echoes the story in the **News** section about **Corr Mhóna** playing at the festival.

- **Discography Order**  
    The chronological order of the discography releases was swapped, with the earliest recording (__*An Chéad Thríail*__) appearing at the top of the [**Discography**](disc.html) page. This was becaue the art for __*Dair*__ has been used extensively elsewhere, and the so other covers can provide some variety here.

#### Mobile Changes

- **CTA Position**  
    Though the original wireframe design had the mobile version of the **CTA** between the **Burger Menu Button** and the **Audio Player** at the top of the Landing Page, it didn't look well in practice. It was decided to keep the same **CTA** format throughout all resolutions.

- **Audio Player**  
    The **Audio Player** did not look well on mobile resolutions, and was removed.

- **Irish Language Option**  
    The **_Gaeilge_** (Irish language) link did not work well with the mobile **Burger Menu Button**, and now displays at higher resolutions only.

- **Copyright Text**  
    This text only appears on tablet or desktop, as it was decided that the **Social Media** links looked better centralised by themeselves on mobile.

#### Tablet & Desktop Changes

- **Translucent Navbar**  
    Though the original wireframes show a cream-coloured background for the **Navbar**, a translucent background was chosen for the finished site, as this compliments the parchement style of the **Hero Image** and **Banner Logo**.  This is not visible on mobile, where the **Navbar** becomes a **Burger Menu Button**.

- **Contact Page Navbar**  
    On 1500px or higher the [**Contact**](contact.html) page **Navbar** become opaque as soon as the page loads, and the **Banner Logo** does not display. This showcases the background artwork on larger resolutions.

___

## **Features**

There are four pages on the site, with a number of features appearing on each page and certain features being unique to one page. The basic layout of the site was created using the [**Bootstrap 4**](https://getbootstrap.com) grid system (which is based on [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)), with some alterations and additions.

### **Existing Features**

#### Common Features



- **Section**  
    There is a main section on each page, though the content is different each time (see below). These were created using the **Bootstrap** grid and are constructed with containers, rows and columns. The [**Home**](index.html) and [**Biography**](bio.html) pages main sections consist of two main containers which can display side by side or one beneath the other, depending on whether they are viewed in mobile or tablet/desktop (see [**Deployment**](#deployment)). The [**Contact**](contact.html) and [**Discography**](disc.html) pages have slightly different section layouts, however. All **in-line** links within any page's section text are fully navigable; they appear as maroon but change colour to grey when hovered over.

- **Footer**
    A basic footer can be found on each page. It contains two features, some **Copyright Text** and the **Social Media Links**. The **Copyright Text** is a simple part of the **Bootstrap** grid, and doesn't display on mobile. The **Social Media Links** are fully functional, and link to the band's previously existing online web presence on [**Bandcamp**](https://corrmona.bandcamp.com), [**Youtube**](https://www.youtube.com/watch?v=2wL0o1rxRLQ), [**Facebook**](https://www.facebook.com/corrmhona) and [**Instagram**](https://www.instagram.com/corrmhona). The icons for each social media platform were provided by [**Font Awesome**](https://fontawesome.com).

#### Jumbotron

- **Hero Image**  
    This [image](assets/images/dair-art.jpg) is the new album cover, and provides a stiking backdrop to the **Landing Page**. It is presented via a **Jumbotron**, and scales across all platorms.

- **Banner Logo**  
    All other pages besides the **Home** page display a [**Banner Logo**](assets/images/banner-logo1.jpg) instead of the **Hero Image**. On the [**Contact**](contact.html) page the **Banner Logo** is not displayed above 1500px (see [**Media Queries**](#media-queries) below).

- **Navbar**
    I modified the typical [**Bootstrap**](https://getbootstrap.com/docs/4.0/components/navbar) **Navbar** to suit the site, which included fixing it to top so it would remain there while scrolling, with a translucent background. I modified **Javascript** from [**JS Fiddle**](https://jsfiddle.net/wamosjk/ufhp9s15) to make an opaque background for when the page scrolled. The __*Gaeilge*__ (Irish language) link changes colour from black to white on scroll, whereas the **Audio Player** text does not display on scroll. All of these  keep the text legible when scrolling.
    The **Navbar** turns into a **Burger Button Menu** on mobile, and this changes colour on scroll for visibility, also enabled with the same **Javascript** code.

- **Call to Action (CTA)**  
    There is **CTA** at the bottom of the [**Landing Page**](index.html) envelope. This tells users that a new album is coming soon, and provides a link for them to click to get more information, bringing them to the **News Section** of the page.

#### Services

- **Google Maps API**  
    This [element](bio.html) contains photos of the four band members and their names. It displays to the left for desktop and to the bottom on mobile and tablet.

- **Services Text**  
    This is an [element](bio.html) which contains a large amount of text. All links within the text navigate to their respective targets. The **Biography Section** displays to the top on mobile and to the right for tablet and desktop.

#### Booking

- **EmailJS Booking Form**  
    There is only one main section container in the [**Discography**](disc.html) page. There are three groups of elements within it, each group with an **Album Cover**, an **Album Title** and **Album Text**. These are displayed on a dark green background, from the oldest release to the newest. On higher resolutions, the three elements appear in a containing div with a sand-coloured background, whereas on mobile the appear separately from the top down (i.e. **Album Cover**, **Album Title**, **Album Text**).

#### Restaurants

- **Restaurant Cards**  
    This section is different to the other three pages. There is a large background image (the new album [**Poster Art**](assets/images/dair-dryad.jpg)) and a central element on an opaque background. This contains a [**Contact Form**](contact.html) which is not functional yet, but will be in future. It is a modified version of the [**Bootstrap**](https://getbootstrap.com/docs/4.0/components/forms) form code. The form has several fields which ask the user to let the band know why they are getting in touch; an e-mail field, a set of three radio buttons, and a larger text input field. There is a [**Bootstrap**](https://getbootstrap.com/docs/4.0/components/buttons) button below these features, which has been modified so that its colours (maroon and cream) match the site.

#### **Footer**

- **Copyright Text**
    A basic footer can be found on each page. It contains two features, some **Copyright Text** and the **Social Media Links**. The **Copyright Text** is a simple part of the **Bootstrap** grid, and doesn't display on mobile.

- **Contact Information**
    Basic contact details can be found here, including **Elite Gourmet's** phone numbers and email address. (PQ - Display on Mobile??)


- **Social Media Links**
    The **Social Media Links** are fully functional, and link to the band's previously existing online web presence on [**Bandcamp**](https://corrmona.bandcamp.com), [**Youtube**](https://www.youtube.com/watch?v=2wL0o1rxRLQ), [**Facebook**](https://www.facebook.com/corrmhona) and [**Instagram**](https://www.instagram.com/corrmhona). The icons for each social media platform were provided by [**Font Awesome**](https://fontawesome.com).


### **Future Features**

#### Flip Cards

(This is may be a future feature for the site, or something I add now). This could be a way to put more content and information on the site, without cluttering up the clean design aesthetic. The cards for each restaurant in the Restaurants Section could function as **Flip Cards**. Each flip card would have extra information about the restaurant on the back, with the main image and title on the front. This would make the site more dynamic and enjoyable for the user.

#### Another API?

I might be good to use one more API considering the brief. But which one? :)
Youtube is an obvious choice, but not sure how I would use it here. Video on hospitality industry?
___

## **Technologies Used**

(PQ - Check versions!! NB)
All the technologies used to create this project are listed below, along with their usage. Simply click on the title for a link to the main site. When there were separate instances where a technology was used, I have listed each link below.

[**HTML**](https://en.wikipedia.org/wiki/HTML5) - This project's structure is based on **HTML 5**.

[**CSS**](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - This project's style was created using **CSS 3**.

[**Adobe XD**](https://www.adobe.com/ie/products/xd.html) - The wireframes and mockups for this site were designed in **Adobe XD**.

[**VSCode**](https://code.visualstudio.com) - All code for this site (including this README file), and all **Github** versioning of this code, was done using **VSCode**.

[**Git**](https://git-scm.com/) - I used **Git** to create this project's local repository and to maintain version conrtrol. 

- The remote repository was done through [**Github**](https://github.com).

[**Javascript**](https://en.wikipedia.org/wiki/JavaScript) -  This was used a couple of times when creating this site.

- There were [three plugins](https://getbootstrap.com/docs/4.3/getting-started/introduction) required so that **Bootstrap** would function; **jQuery**, **Popper.js** and **Bootstrap's** own **min.js**.6
- I also copied and modified **Javascript** code from [**Js Fiddle**](https://jsfiddle.net/wamosjk/ufhp9s15) to create transitions while scrolling.

[**Bootstrap**](https://getbootstrap.com) - The site was built using **Bootstrap's** grid system.

- I also modified several **Bootstrap** components (e.g. **Navbar**, **Buttons**,**Contact Form**).

[**Pixabay**](https://pixabay.com/) - I sourced all the images used in the sites construction from this royalty-free website.

[**Canva**](https://www.canva.com) - I found my colour palette by uploading the new album [**Cover Art**](assets/images/dair-art.jpg) to **Canva**, and added to this with my own colours.

[**Font Awesome**](https://fontawesome.com) - The **Social Media Icons** were supplied using **Font Awesome**. 

(PQ - Is this still the case?)
- I attempted to use the latest version of **Font Awesome** which is available on [**CDNJS**](https://cdnjs.com/libraries/font-awesome) (version 5.9.0) but it failed to deploy, so I reverted to the version available from the [**BootstrapCDN**](https://www.bootstrapcdn.com/fontawesome/) (version 4.7.0).

[**HTML Code Checker**](https://validator.w3.org) - I checked my HTML with the **W3C Markup Validation Service**

[**CSS Code Checker**](https://jigsaw.w3.org/css-validator) - I checked my CSS with the **W3C CSS Validation Service**

[**CSS Auto-prefixer**](https://autoprefixer.github.io) - The **Autoprefixer CSS Online** provided a **Vendor Prefix** check for my code.

[**ARIA Checker**](http://wave.webaim.org/) - I used **Wave** (Web Accessibility Evaluation Tool) to check that my code was accessible to all users.

___

## **Testing**

### **Developer Tools**

I tested the site in **Developer Tools** on four internet browsers (**Chrome**, **Firefox**,  **Internet Explorer** & **Safari**). Bugs and errors were tackled successfully in this way throughout the development process, using **Live Server** in **VSCode**. I also tested the site with **Android OS** on a **Galaxy A5** and a **Huawei Lyo L01**.

- [**Chrome**](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjwkK_qBRD8ARIsAOteukDltqXTjp13--esZkC4d8eL6Ggma28pvUQiVvwnJwVA06i0YbiSIuwaArNOEALw_wcB&gclsrc=aw.ds)

- [**Firefox**](https://www.mozilla.org/en-US/firefox/new/)

- [**Internet Explorer**](https://www.microsoft.com/en-ie/download/internet-explorer.aspx)

- [**Safari**](https://www.apple.com/lae/safari/)

### **Media Queries**

Over 20 separate **Media Query** parameters were set in the [**CSS**] code(assets/css/style.css). Every imaginable variation of resolution, from the smallest phone to the biggest 4K monitor, were used to test the responsivity of the site. There are often multiple elements, functions and attributes being targeted and styled within in any one **Media Query**. These ensure that the site looks like it should from 240px in width to over 4000px. I would use the full gamut of responsivity in **Developer Tools**, but I also tested certain specific resolutions, as shown below.

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

### **User Scenarios**

#### Seeking Fine Dining Information for Ireland

- **Audio Player** (Tablet & Desktop):
    1. Go to the [**Home**](index.html) page.
    2. Click on the **Audio Player** on the top right of the screen.

- **Teaser Video**:
    1. Go to the [**Home**](index.html) page.
    2. Look for the **Media** section farther down the page.
    3. Click on the new album **Teaser Video** at the top of the section.

#### Specifically Looking for Michelin Starred Restaurants

- **News Section**:
    1. Go to the [**Home**](index.html) page.
    2. Scroll down to the **News Section**, just below the **Hero Image** and **CTA**.

#### Locating the Six Restaurant Partners of Elite Gourmet

- **Shop**:
    1. (This is a **Future Feature**).
    2. Go to the **Navbar** on any page.
    3. Click on the **Shop** nav item.

- **Bandcamp**:
    1. (Until the **Shop** is functional).
    2. Scroll down to the **Footer** on any page.
    3. Click on the **Bandcamp** icon.
    4. Proceed to the **Corr Mhóna Bandcamp** site.

#### Booking a Fine Dining Experience

- **Biography Section**:
    1. Go to the **Navbar** on any page.
    2. Click on the [**Biography**](bio.html) {'The Band'} link.
    3. Scroll down to the **Biography Section** of the page.

#### Finding Out About Elite Gourmet

- **Contact Form**:
    1. (This is a **Future Feature**).
    2. Go to the **Navbar** on any page.
    3. Click on the [**Contact**](contact.html) link.
    4. Go to the **Contact Form** at the centre of the page.
    5. Fill in your email, reason for contacting the band and message into the appropriate fields.
    6. Click on the **'Send it!' Button** at the bottom of the **Contact Form**.

### **Outstanding Bugs**

There are a few errors and bugs that are worth noting. Some are due to a lack of functionality whereas others are due to a particular platform or medium reacting differently to the code.

- **Galaxy A5 Scrolling Issue**  

    When scrolling down on the **Home** page, the **Hero Image** becomes larger in size as you scroll. This does not effect performance or the **User Experience**, but hasn't appeared on other platforms.

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
        git clone https://github.com/an-slua-sidhe/milestone-1.git
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
        git remote add origin https://github.com/an-slua-sidhe/milestone-1
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

- All images were sourced from [**Pixabay**](To be added).

    1. For **README Banner** - see [here](https://pixabay.com/photos/dish-restaurant-dining-food-dinner-918613/).

    2. For main **Jumbotron** background - see [here]().
    
    3. For **Booking Section** background - see [here](https://pixabay.com/photos/olive-oil-tomatoes-basil-eat-1412361/).

    4. For **About Us Section** background - see [here](https://pixabay.com/photos/mediterranean-cuisine-eat-food-2378758/).

### **Restaurants Used**

- Specific restaurant images were sourced from their respective sites.

    1. The Ichigo Ichie image can be found [here](To be added).

    2. The Cliff House image can be found [here](To be added).

    3. The L'Ecrivain image can be found [here](To be added).

    4. The Ox image can be found [here](To be added).

    5. The Kai Restaurant image can be found [here](To be added).

    6. The Chart House image can be found [here](To be added).

### **Acknowledgements**

- I received inspiration for this project from the many wonderful cafes, restaurants and bars that are thriving in Cork and the surrounding regions. The passion for food and the constant raising of standards that are displayed year-on-year by the indigenous hospitality industry are incredible. As this project was finalised during the pandemic of 2020, I think it is fitting to wish all culinary creatives a fruitful and prosperous future.
