# Antwerp HotSpots | Select Your Occasion & Find Your Food Match Within Seconds!

## Index:
* <a href="#project-background">Project Background :information_desk_person:</a> 
* <a href="#ux">UX :iphone:</a> 
* <a href="#features">Features :clipboard:</a>
* <a href="#technologies">Technologies Used :wrench:</a>
* <a href="#testing">Testing :flashlight:</a>
* <a href="#deployment">Deployment :rocket:</a>
* <a href="#credits">Credits :pencil2:</a>

---
<span id="project-background"></span>
## Project Background :information_desk_person:

This project is a redesign of the [BangkokVanguards](https://bangkokvanguards.com/experiences/the-ultimate-bangkok-foodtour/) street food tour page. 
The name of the agency was changed to StreetFoodies & Co., a fictitious & catchy name that suits the vibe of the tour. 

The idea behind the re envisioned structure & layout of the website is:
1. To give visitors a better idea of what the tour has to offer through clearly-defined sections highlighting key information & unique selling points;
2. To provide them with the ability to book the tour with ease with a simple click of a button. 

In the long run, the elevated user experience would help to drive more traffic to the website and generate higher booking conversions for the agency.

---

<span id="ux"></span>
## UX :iphone:

### 1. Who is this website for?

This website is targeted towards first time and veteran travelers to Bangkok interested in:
* learning more about the Bangkok Street Food Tour and
* booking their spot on the tour. 


### 2. Who are the primary target groups?

* This website would attract **first time and veteran travelers to Bangkok** looking for an authentic culinary experience.
* Since the StreetFoodies & Co. (a fictitious tour agency) has collaborated with Mark Wiens to put together this tour, a 
large traffic source for this website would be referral traffic from Mark Wiens’ website - i.e. **Mark Wiens fans.**
* As the tour is 6-8 hours long, with lots of walking, it can be assumed that a large portion of the bookers would be 
**young to middle-aged adults (men & women) either single or with children** who are able to keep up. 

(*Taking these points into consideration, I wanted the website to present a young & vibrant look & feel*)


### 3. What is it that they (the users) want to achieve?

There are 4 user goals for this website:
* Gather key information about the tour & what's included in the tour package 
* Social validation 
* Ability to book a spot on the tour with ease 
* Get contact information in case they need to contact agency directly 


### 4. How is my project the best way to help them achieve those things?

* Smooth navigation throughout the website so that users can find the information they’re looking for
* The content on the website is organized into sections making it both easy to find and digestible
* Clear call-to-actions inform users what actions they should take on the website


### 5. How do users achieve each of the following goals:

**5.1. To learn more about the tour and what will be included in the package:**

The website provides:
* A "Tour Experience" section which gives a short introduction as to what tour bookers can expect from the tour.
* A “Quick Info” sub-section, detailing important information such as duration of the tour, meeting point, tour type and more. 
* An “Itinerary” section which gives website visitors a more elaborate description about the four cuisines they will get to try on the tour.
* A "Pricing" section listing the price per person, categorized by the age range they fall into.


**5.2. To clarify questions they have about the tour or get in touch with the team:**

The website provides:
* A contact email address and phone number in the footer which travellers can use to contact the tour agency.


**5.3. To book a spot on the tour:**

The website provides:
* A "Book Tour" form which contains a form travellers can fill in to book their spot on the tour.


**5.4. To get social validation:**

The website provides:
* A "customer review" section with reviews left by previous tour bookers retrieved from TripAdvisor. 

### Wireframes & Mockups:

* View my initial website sitemap and wireframes for desktop (version 1) [here](https://drive.google.com/file/d/1kq3LTz5UpMnOmWZKe2MqF0he9VmtHf0v/view?usp=sharing)
* View final website wireframes for desktop and mobile (version 2) [here](https://drive.google.com/file/d/1jHTmi2l2rRZwRnU1M81dYzpXN-xrQHKj/view?usp=sharing) 
* View my color scheme mockup [here](https://drive.google.com/file/d/1W_Rj8nJMMFHDrnV2U9GIXhA-wkP34Zuo/view?usp=sharing)  
 
---

<span id="features"></span>
## Features :clipboard:

* **Navigation bar:** It allows website visitors to navigate easily to different sections on the homepage. It also provides a direct button to the booking form on desktop and larger screens. On mobile, the navigation links collapse into a hamburger menu to take up less real estate on the screen and the button disappears.
* **Hero Image:** The hero image gives visitors an exciting view of Bangkok’s vibrant nightlife with a closeup of two tuk tuks parked on a busy food street. The text invites visitors to join in on the highly rated street food tour with a special mention of Mark Wiens as a value added proposition. Moreover, a prominent call-to-action button directs them straight to the form to book their spot right away.
* **Tour Experience:** This first section gives visitors a short and engaging summary of what visitors can expect from the tour, in addition to a link (opening up a separate tab) to Mark Wiens’ website, where people can learn more about him and get WOW'd by his depth of knowledge about food. This would serve as one of the unique selling propositions of this food tour. 
* **Itinerary:** This section uses Bootstrap’s cards component to give visitors an overview of the different stops they would go to on the tour. Each card displays a representative image of the kind of atmosphere or food they would encounter on the stop, accompanied by a short description of the cuisine. 
* **Pricing:** The third section - pricing - uses Bootstrap’s list component to breakdown prices based on the age range visitors fall into. 
* **Reviews:** The customer review section displayed as a carousel offers visitors social validation for the tour with raving remarks from past tour-bookers. 
* **Booking Form:** The final section displays a booking form (Bootstrap) where visitors would be able to book their spot on the tour. At this moment, the form is not functional as it is not connected to a database. 
* **Footer:** The footer contains a short introduction to StreetFoodies & Co (the tour agency), contact details with a fictitious email & phone number for visitors to get in touch, and social links which currently direct visitors to Mark Wiens’ social media accounts. 

---
<span id="technologies"></span>
## Technologies Used :wrench:

### 1. Languages

This User Centric Frontend Project focused on the use of the following languages:
* HTML - for website structure 
* CSS - for styling 
* JavaScript - for map function & interactivity 

### 2. Frameworks 

This website makes use of Bootstrap 4 for:
* grid system 
* styling 
* components i.e. buttons

### 3. IDE's 

This website was developed on GitPod.

### 4. External Hosting

This website is saved in a repository on GitHub.

### 5. Other Technologies Used  

* Webformatter - to beautify my CSS, HTML, JS code 
* FontAwesome - for all icons used on the buttons
* Balsamiq - for creating wireframes 

---

<span id="testing"></span>
## Testing :flashlight:

### 1. Testing Tools 

* [The W3C Markup Validation Service](https://validator.w3.org/) - for testing my HTML code 
    * Result: No errors, however I recieved a warning message that my "date" input type for my form may not be supported in all browsers
* [The W3C CSS Validation Service: W3 Jigsaw](https://jigsaw.w3.org/css-validator/) - for testing my CSS code 
    * Result: "Congratulations! No Error Found."
* Chrome Dev Tools - for testing:
    * Mobile responsiveness
    * CSS styling changes before implementing it in the code
    * Network to assess whether it was picking up Javascript (status: 200) 

### 2. User Testing 

This website has been tested by friends and family to check for:
* bugs or disabled links 
* clear user experience & navigation 
* correct form responses (although form is not functional)
* picture loading speed 

### 3. Browser & Device Testing 

This website has been tested on the following Desktop devices:
*  MacBook Pro 2013 - Chrome & Safari
*  Microsoft Edge - Chrome 

This website has been tested on the following Mobile/Tablet devices:
* iPhone 11 - Safari 
* iPhone 6 - Safari
* iPhone 6s - Safari
* iPad Air 2 - Safari 

### 4. Bugs & Problems 

A major problem I encountered with the website was that the parallax effect doesn't work on mobile and tablet devices. 
To resolve the issue I tried the following:
* Uploading small and medium-sized background images and creating separate media queries for each breakpoint (without parallax effect) as advised [here](https://web.dev/optimize-css-background-images-with-media-queries/)
* Removing the parallax effect and adding the background image to a container as done in the [CI tutorial](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/a4b90d17e5c94220a0f83f00ce7fa606/4b3b1b062b01424997c8fd052e177b8e/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%404b3b1b062b01424997c8fd052e177b8e)

*However, none of my attempts worked and due to time restrictions I decided to revert back to the original parallax effect & tackle it sometime in the future.*

* Another bug that I came across is that the carousel in the Reviews Section jumps slightly when sliding on desktop. I hope to resolve this in the future.   

### 5. Sidenotes: 

* Currently the form is not functional, so testing was only done to make sure that input messages are triggered when a user tries to "submit" the form 
without filling out a required field or checking the required boxes. 

---

<span id="deployment"></span>
## Deployment :rocket: 

* This website is stored in a repository on [Github](https://github.com/ZahraSadiq/Milestone1-StreetFoodiesTour.git) 
    * It was developed on GitPod, with changes regularly pushed to GitHub's repository using one main master branch.
    * Both the deployed and developed versions of this website are identical.

This site is hosted on GitHub Pages. 
* You can view the live site [here](https://zahrasadiq.github.io/Milestone1-StreetFoodiesTour/)
* The url for the site is: https://zahrasadiq.github.io/Milestone1-StreetFoodiesTour/

---
<span id="credits"></span>
## Credits :pencil2:

### 1. Code Snippets 

* Inspiration for the [Callout Container & Jumbotron](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/a4b90d17e5c94220a0f83f00ce7fa606/4b3b1b062b01424997c8fd052e177b8e/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%404b3b1b062b01424997c8fd052e177b8e) (styling)
* Inspiration for the [Parallax Effect](https://www.w3schools.com/howto/howto_css_parallax.asp) 
* Inspiration for [Footer](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/616289d66b5641a3808cc43e53842695/b51f7b8b815c4bcd9979d2281b6d97a9/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%40b51f7b8b815c4bcd9979d2281b6d97a9) (styling)
* Code used for [Email link](https://www.tutorialspoint.com/html/html_email_links.htm) in footer 

### 2. Media 

* Icons from: [FontAwesome](https://fontawesome.com/icons?d=gallery)
* All images sourced from: [Unsplash](https://unsplash.com/collections/10243987/milestone-project-1-)
* Karla & Montserrat Fonts from: [Google Fonts](https://fonts.google.com/?category=Sans+Serif)
* <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>

### 3. Content 

* The tour information on the website was inspired from the [BangkokVanguards food tour website](https://bangkokvanguards.com/experiences/the-ultimate-bangkok-foodtour/)  
* The texts have in large part been modified or made up by me, Zahra Sadiq 
* The quick info details are replicated from the [BangkokVanguards food tour website](https://bangkokvanguards.com/experiences/the-ultimate-bangkok-foodtour/)
* The customer reviews are real TripAdvisor reviews which have been modified to fit the context of this website 
* Content written for the Itinerary section was modified from [here](https://feastthailand.com/food/food-culture/chinese-influence/) and [here](https://feastthailand.com/foodies-food-tour/)

### 4. Acknowledgements 

* **Oluwafemi Medale (My CI Mentor):** Thanks for your advice, guidance and support throughout the duration of this project.
I look forward to working with you again on future milestone projects.




1/3 % 2/3 colums from: https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/616289d66b5641a3808cc43e53842695/a701aa4956df4ce8a1026791c248d5c9/?child=first 

Tutorial for Google Maps:
https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/3b2af8636ea54a4d9dc45126f7498633/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%403b2af8636ea54a4d9dc45126f7498633 

flaticon attribute:
<div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>

custom map markers & info window:
https://www.youtube.com/watch?v=Xptz0GQ2DO4 

adding image to infowindow:
https://stackoverflow.com/questions/33788841/adding-image-in-infowindow-of-google-maps 

adding details to infowindow:
https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple 