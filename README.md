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

This is the website for Antwerp HotSpots - an imaginary Antwerp food&drink guide. It is designed to be interactive & responsive on mobile, tablet and desktop devices, making it easy for users to be presented with recommended locations based on the occasion they select.

---

<span id="ux"></span>
## UX :iphone:

### 1. Who is this website for?

This website can be used by anybody, but primarily targeted towards young adults (i.e. expats/newcomers) to Antwerp who are looking for places to eat/drink and are not too familiar with the best eating spots for specific occasions.

### 2. First-Time User Goals:

* As a First Time Visitor, I want to easily understand the main purpose of the site and who the company is.
* As a First Time Visitor, I want to be able to easily navigate throughout the site to find content most relevant to me.
* As a First Time Visitor, I want to be able to gather key information about each recommended location to be able to make an informed decision.
* As a First Time Visitor, I want to be able to know where the restaurant/bar recommended to me is located.
* As a First Time Visitor, I want to be able to filter the information most interesting to me.
* As a First Time Visitor, I want to be able to visit their social media pages to determine how big a following the company has & how trusted it is.

### 3. Returning Visitor Goals

* As a Returning Visitor, I want to be able to get a variety of options available for the occasion I select. 
* As a Returning Visitor, I want to find the best way to get in touch with the company with any questions or suggestions I may have.

### 4. Frequent User Goals 

* As a Frequent Visitor, I want to check to see if there are any newly added recommended locations that I can check out.

### Design: 

* Color Scheme: 
    * The three main colors used are Black, Pink & Beige.

* Typography:
    * All Headers use Karla. Karla is a sans-serif font with nice letter-spacing - which makes it easy-to-read & clean.
    * Montserrat is my secondary font, used for paragraphs. Like Karla, it is both clean & easy to read especially on smaller devices & pairs nicely with Karla. 
    * Sans-Serif is used as the backup font for both Karla & Montserrat.

* Imagery: 
    * A bright, colorful image was used for the hero image to be eye-catching to the user. It also compliments the color scheme, adding an element of consistency to the website. 

### Wireframes & Mockups:

* View my initial website sitemap and wireframes for desktop (version 1) [here](https://drive.google.com/file/d/1kq3LTz5UpMnOmWZKe2MqF0he9VmtHf0v/view?usp=sharing)
* View final website wireframes for desktop and mobile (version 2) [here](https://drive.google.com/file/d/1jHTmi2l2rRZwRnU1M81dYzpXN-xrQHKj/view?usp=sharing) 
* View my color scheme mockup [here](https://drive.google.com/file/d/1W_Rj8nJMMFHDrnV2U9GIXhA-wkP34Zuo/view?usp=sharing)  
 
---

<span id="features"></span>
## Features :clipboard:

* **Buttons that filter map markers:** The buttons allow website visitors to filter map markers based on the occasion they select in order to see the most relevant locations.
* **Google Maps** This API allows website visitors to see where the recommended location is on the map.
* **InfoWindow** The InfoWindows on the map present the website visitors with key information about each recommended location.
* **Mobile Responsive** 
* **Interactive**

---
<span id="technologies"></span>
## Technologies Used :wrench:

### 1. Languages

This User Centric Frontend Project focused on the use of the following languages:
* HTML - for website structure 
* CSS - for styling 
* JavaScript - for map function & interactivity 

### 2. Other Programs & Frameworks Used 

* Webformatter - to beautify my CSS, HTML, JS code 
* FontAwesome - for all icons used on the buttons
* Balsamiq - for creating wireframes 
* Bootstrap 4.4.1 - for assisting in responsiveness and layout of website 
* Photopea | Online Photo Editor - for resizing images 
* Inkscape - for creating custom map markers 

### 3. IDE's 

This website was developed on GitPod.

### 4. External Hosting

This website is saved in a repository on GitHub.

---

<span id="testing"></span>
## Testing :flashlight:

### 1. Testing Tools 

* [The W3C Markup Validation Service](https://validator.w3.org/) - for testing my HTML code 
    * Result: No errors, however I recieved a warning message that my "date" input type for my form may not be supported in all browsers
* [The W3C CSS Validation Service: W3 Jigsaw](https://jigsaw.w3.org/css-validator/) - for testing my CSS code 
    * Result: "Congratulations! No Error Found."
* [Syntax Validator - Esprima](https://esprima.org/demo/validate.html)
    * Result: Code is syntactically valid. 
* Chrome Dev Tools - for testing:
    * Mobile responsiveness
    * CSS styling changes before implementing it in the code
    * Network to assess whether it was picking up Javascript (status: 200) 

### 2. Testing User Stories (UX Section)

### A. First-Time Visitor Goals:

* As a First Time Visitor, I want to easily understand the main purpose of the site and who the company is.
    * Upon entering the site, users are presented with a bright, catchy and easily readable banner image, which introduces the Company name and purpose of the site. Underneath, a introductory text follows with more context about occasions people can select from & CTA to click one of the selections below.
    * In the footer, a short about us blurb gives the user further details about the company.

* As a First Time Visitor, I want to be able to easily navigate through the site to find content most relevant to me.
    * The website is designed to be very clean and straight to the point. The goal being to allow users to find the spot that most fits their occasion, without being distracted by irrelevant content. 

* As a First Time Visitor, I want to be able to gather key information about each recommended location to be able to make an informed decision.
    * After selecting a marker on the map, users are presented with a very descriptive infoWindow, displaying information about the bar or restaurant, the address, and opening times. An image adds a nice visual of either the food or atmosphere of each spot.

* As a First Time Visitor, I want to be able to know where the restaurant/bar recommended to me is located.
    * Each recommended location populates the interactive Google Maps, allowing the user to see on the map where it is located.
    * When the user clicks on a marker, they can also see the address of the place on the infoWindow. 

* As a First Time Visitor, I want to be able to filter the information most interesting to me.
    * When a user clicks on a specific button, it will filter the markers based on the occasion type. For example, if a user is looking for places to go to alone - he/she clicks "Alone Again, Naturally" and is shown recommended locations perfect for going to alone.
    * If a user wants to see all locations again, they have the option to click "All Locations" and the map will be repopulated with all the markers.

* As a First Time Visitor, I want to be able to visit their social media pages to determine how big a following the company has & how trusted it is.

### B. Returning Visitor Goals

* As a Returning Visitor, I want to be able to get a variety of options available for the occasion I select. 
* As a Returning Visitor, I want to find the best way to get in touch with the company with any questions or suggestions I may have.

### C. Frequent Visitor Goals 

* As a Frequent Visitor, I want to check to see if there are any newly added recommended locations that I can check out.

### 3. Further Testing 

This website has been tested by friends and family to check for:
* bugs or disabled links 
* clear user experience & navigation 
* picture loading speed 
* map functionality

### 4. Browser & Device Testing 

This website has been tested on the following Desktop devices:
*  MacBook Pro 2013 - Chrome & Safari
*  Microsoft Edge - Chrome 

This website has been tested on the following Mobile/Tablet devices:
* iPhone 11 - Safari 
* iPhone 6 - Safari
* iPhone 6s - Safari
* iPad Air 2 - Safari 

### 5. Bugs & Problems 



---

<span id="deployment"></span>
## Deployment :rocket: 

### Github Pages

The project was deployed to GitHub Pages by following the steps below:

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Live Site
* This website is stored in a repository on [Github](https://github.com/ZahraSadiq/Milestone2-AntwerpHotSpots.git) 
    * It was developed on GitPod, with changes regularly pushed to GitHub's repository using one main master branch.
    * Both the deployed and developed versions of this website are identical.

This site is hosted on GitHub Pages. 
* You can view the live site [here](https://zahrasadiq.github.io/Milestone2-AntwerpHotSpots/)
* The url for the site is: https://zahrasadiq.github.io/Milestone2-AntwerpHotSpots/

---
<span id="credits"></span>
## Credits :pencil2:

### 1. Code Snippets 

* Inspiration for the [Jumbotron](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/a4b90d17e5c94220a0f83f00ce7fa606/4b3b1b062b01424997c8fd052e177b8e/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%404b3b1b062b01424997c8fd052e177b8e) (styling)
* Inspiration for the [Banner Image](https://www.w3schools.com/howto/howto_css_hero_image.asp) 
* Inspiration for [Footer](https://courses.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/616289d66b5641a3808cc43e53842695/b51f7b8b815c4bcd9979d2281b6d97a9/?activate_block_id=block-v1%3Acodeinstitute%2BFE%2B2017_T3%2Btype%40sequential%2Bblock%40b51f7b8b815c4bcd9979d2281b6d97a9) (styling)
* Tutorial for adding [Google Maps API](https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/3b2af8636ea54a4d9dc45126f7498633/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%403b2af8636ea54a4d9dc45126f7498633)
* Code used for adding the [InfoWindow & Custom Map Markers](https://www.youtube.com/watch?v=Xptz0GQ2DO4)
* Help with adding image to [InfoWindow](https://stackoverflow.com/questions/33788841/adding-image-in-infowindow-of-google-maps)
* Help with adding description to [InfoWindow](https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple)
* Help with filtering markers based on occasion type from my mentor 
* Code used for [Email link](https://www.tutorialspoint.com/html/html_email_links.htm) in footer 

### 2. Media 

* Icons from: [FontAwesome](https://fontawesome.com/icons?d=gallery)
* Karla & Montserrat Fonts from: [Google Fonts](https://fonts.google.com/?category=Sans+Serif)
* Banner image from: [Unsplash](https://unsplash.com/)
* Custom map marker icons from [Flat Icon](https://www.flaticon.local/authors/freepik) & modified into custom markers by myself
* Recommended Location images were sourced from:
    * [Salon de the Claude](https://www.google.com/search?q=salon+de+th%C3%A9+claude+antwerpen&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk01sQiAHICXEc59eElrNFDgRuOrcCg:1603059383675&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjhkvjIlb_sAhWk4IUKHZNYDasQ_AUoAnoECAQQBA&biw=1271&bih=643#imgrc=2b27vpjSjth1CM)
    * [Luddites Books & Wine](https://www.google.com/search?q=luddites+antwerpen&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk00mws5ve5iHpNoVfIxuu8yXB0XQ7A:1603052443113&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjR6LXb-77sAhWPzoUKHUG0A2wQ_AUoAXoECAQQAw&biw=1280&bih=594#imgrc=hsrftkithUWVlM)
    * [Kommilfoo](https://guide.michelin.com/en/antwerpen/be-antwerpen/restaurant/kommilfoo)
    * [CiPiaCe](https://www.facebook.com/cipiaceantwerp/?ref=page_internal)
    * [Dogma Cocktails](https://www.spottedbylocals.com/antwerp/dogma/)
    * [Manhattn's Burger](https://www.google.com/search?q=manhattan+burger+antwerp&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk02lx2kaLhBl0cV1EsZOTOoa7B_fVg:1603049148200&source=lnms&tbm=isch&sa=X&ved=2ahUKEwijnKS4777sAhURdxoKHXd3A4EQ_AUoAnoECAUQBA&biw=1280&bih=594#imgrc=6Pfp1n-YAOx_VM)
    * [Beastie Burger Antwerpen](https://www.google.com/search?q=beastie+burger+antwerpen&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk00GFZXri1BdIrZ-ECfPefTvQMpv3Q:1603049200875&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi6u7PR777sAhUNfBoKHdHVDnwQ_AUoAXoECAUQAw&biw=1280&bih=594#imgrc=oGgnxqbPBK0kzM)
    * [Frites Atelier](https://www.google.com/search?q=frites+atelier+antwerpen&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk0106bjMUxnhw05GOC1W8VyyxITSBQ:1603049622317&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPlq6a8b7sAhXixoUKHbKnB0oQ_AUoAXoECAUQAw&biw=1280&bih=594#imgrc=XE7E3XPC1qg8-M )
    * [Black Smoke](https://www.google.com/search?q=black+smoke+antwerp&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk00lECeNal0ZZBASd6Y3Kk-1DHgIfw:1603049829713&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi6wqD98b7sAhVC6RoKHVYHCIcQ_AUoAXoECAkQAw&biw=1280&bih=594#imgrc=KSrKVc2yCrIlfM)
    * [Mission Masala](https://www.google.com/search?q=mission+masala+antwerp&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk038M9C3wbx6gHiitLsP4RmDIgc_0A:1603049868595&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV4-WP8r7sAhUMx4UKHbLeBE8Q_AUoAXoECAUQAw&biw=1280&bih=594#imgrc=w8uWjGhxjOSw0M)
    * [Pazzo](https://www.facebook.com/pazzoantwerpen/photos/2460053147457378)
    * [Corazón De Melón](https://www.google.com/search?q=Coraz%C3%B3n+De+Mel%C3%B3n+antwerp&tbm=isch&ved=2ahUKEwid7LDW8r7sAhVRyqQKHSo2CPYQ2-cCegQIABAA&oq=Coraz%C3%B3n+De+Mel%C3%B3n+antwerp&gs_lcp=CgNpbWcQA1CE2SBYhNkgYNfcIGgAcAB4AIABXogBXpIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=IJqMX53cJdGUkwWq7KCwDw&bih=594&biw=1280&rlz=1C5CHFA_enMY503MY503#imgrc=6I_8cWOIg8D1tM )
    * [Het Gerecht](https://www.google.com/search?q=Het+Gerecht++antwerp&tbm=isch&ved=2ahUKEwjj4_rW9L7sAhVtwAIHHbBAD9oQ2-cCegQIABAA&oq=Het+Gerecht++antwerp&gs_lcp=CgNpbWcQAzIECAAQE1CjywJYo8sCYLnNAmgAcAB4AIABRIgBRJIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=OpyMX-PeKu2Ai-gPsIG90A0&bih=594&biw=1280&rlz=1C5CHFA_enMY503MY503#imgrc=5ZsmK8tn4PvpLM)
    * [Sombat Thai Cuisine](https://www.google.com/search?q=Sombat+Thai+Cuisine+&tbm=isch&ved=2ahUKEwicgoHs9L7sAhXGu6QKHRlvDswQ2-cCegQIABAA&oq=Sombat+Thai+Cuisine+&gs_lcp=CgNpbWcQAzIECAAQGDIECAAQGFDc_wFY3P8BYPOCAmgAcAB4AIABW4gBW5IBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=ZpyMX5y3M8b3kgWZ3rngDA&bih=594&biw=1280&rlz=1C5CHFA_enMY503MY503#imgrc=OwDCoMA-f7tHJM)
    * [Eetkamer a l’Infintiste](https://www.facebook.com/cipiaceantwerp/?ref=page_internal)
    * [Bubble Waffle](http://bubblewaffle.be/)
    * [Bar'rique]( https://www.facebook.com/barrique.antwerpen/photos/1028476767343832 )
    * [Barchel](http://barchel-antwerp.com/)
    * [Cafematic](https://www.pocketresto.be/antwerpen/cafematic)
    * [Sky Bar](https://summerbars.com)
    * [Bar d'Henri](https://www.facebook.com/bardhenri/photos/a.692918761533515/802857213873002/ )
    * [Bier Central](https://www.google.com/search?q=bier+central&tbm=isch&chips=q:bier+central,online_chips:antwerp&rlz=1C5CHFA_enMY503MY503&hl=en&sa=X&ved=2ahUKEwjkr7LO7L7sAhUK2aQKHaOID3kQ4lYoA3oECAEQGQ&biw=1280&bih=594#imgrc=rkev_fzW4PsclM)
    * [Tranquilo](https://www.google.com/search?q=tranquilo+antwerpen&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk00y8Vn8gZNuYgkoidbl1_FEDXUYsQ:1603048440520&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiEhevm7L7sAhWVDWMBHZ90BIwQ_AUoAXoECAcQAw&biw=1280&bih=594#imgrc=r8_7Ihfd-rS4hM)
    * [Coffelabs at Fosbury & Sons](https://www.google.com/search?q=Fosbury+%26+Sons&rlz=1C5CHFA_enMY503MY503&hl=en&sxsrf=ALeKk00e-MQGmlxKLGXZmxqlkE4ObiFj3A:1603059529270&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiC066Olr_sAhUJCxoKHQV4BYwQ_AUoAXoECAwQAw&biw=1271&bih=643#imgrc=4320OTQbkgbwWM)
    * [Bar Paniek](https://www.google.com/search?q=bar+paniek&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk00mzK8rZlOVP43ZZEIALGwQ9CqDcg:1603059562525&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPopyelr_sAhUGy4UKHRxcBCEQ_AUoAXoECAUQAw&biw=1271&bih=643#imgrc=Sg3uFviYDPlReM)
    * [Dansing Chocola](https://www.google.com/search?q=dansing+chocola&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk00TpXZZ1Q_hPFtEkA4lK9PNxw5Emw:1603059585400&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj_rZCplr_sAhVP9IUKHYlSBkoQ_AUoAXoECAQQAw&biw=1271&bih=643#imgrc=ajs0nft0jMEoEM)
    * [Kommilfoo](https://www.restaurantkommilfoo.be/)
    * [De Muze](https://www.google.com/search?q=demuze&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk01_NW7arLMGYDVPCEJ9tb4VSHPKtg:1603059704838&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj-uYrilr_sAhVBXxoKHXq0BcwQ_AUoA3oECAQQBQ&biw=1271&bih=643#imgrc=PSvkN3Vr6NlFrM)
    * ['T Zilte](https://www.google.com/search?q=t+zilte&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk03UTb_tstJCYwJpv7LqmZhnPneaCw:1603060039068&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjAlrqBmL_sAhUM5uAKHYzsC_YQ_AUoAXoECAkQAw&biw=1271&bih=643#imgrc=bG-SsI_gJ-9X0M)
    * [No Worries](https://www.google.com/search?q=no+worries+antwerpen&rlz=1C5CHFA_enMY503MY503&sxsrf=ALeKk03KME1Jz5yLlQRY8N-OdoauXNKGiA:1603060103297&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjXuYqgmL_sAhUE_RQKHcd8AAsQ_AUoAnoECAUQBA&biw=1271&bih=643#imgrc=LbHHiVSnaZHWDM)

### 3. Content 

* Unmodified descriptions for Recommended Locations on the map were taken from the following sources:
    * [Luddites Books & Wine](https://www.tripadvisor.com/Attraction_Review-g188636-d21011255-Reviews-Luddites_Books_Wine-Antwerp_Antwerp_Province.html)
    * [Kommilfoo](https://guide.michelin.com/en/antwerpen/be-antwerpen/restaurant/kommilfoo)
    * [CiPiaCe](https://www.facebook.com/cipiaceantwerp/?ref=page_internal)
    * [Cocktails at Nine](https://www.facebook.com/CocktailsatNine/)
    * [De Muze](https://www.demuze.eu/)
    * [Manhattn's Burger](https://www.manhattns.com/)
    * [Beastie Burger Antwerpen](https://www.beastie.be/about-us/)
    * [Frites Atelier](https://www.fritesatelier.com/our-story)
    * [Black Smoke](https://www.dekoninck.be/en/crafts/black-smoke)
    * [Mission Masala](https://wwc.resengo.com/mission_masala_antwerpen)
    * [Eetkamer a l’Infintiste](https://www.facebook.com/cipiaceantwerp/?ref=page_internal)
    * [No worries](https://www.facebook.com/NoWorriesAntwerpen/)
    * ['T Zilte](https://guide.michelin.com/en/antwerpen/be-antwerpen/restaurant/t-zilte)
    * [Sky Bar](https://skybarantwerp.be/)
    * [Barchel](http://barchel-antwerp.com/)
    * [Bar d'Henri](https://www.facebook.com/bardhenri/photos/a.692918761533515/802857213873002/ )
    * [Tranquilo](http://tranquilo.restaurant/)
    
### 4. Acknowledgements 

* **Oluwafemi Medale (My CI Mentor):** Thanks for your advice and support.