Problem: 
   - Delay in submit action to complete, leads user to double click "Pay" button

Steps to follow to solve the problem:

1. Create an HTML payment page
   a) "Pay" button deactivated until all fields are filled
   b) Check card Expiry (no past dates allowed: Date >= current date )
   c) "Cancel" button clear all fields
   d) On submit
          I) if successful:
          	- display a message "the button was pressed once, no more clicks allowed", 
          	- disable button and then 
          	- redirect to 2.)
          II) if failed:
                 - display the appropriate error message
2. Success page


Comments:

The task requirements were clear and concise. 
It didn't seem difficult at first sight, but it required attention and focus
on details. Before starting programming I developed a plan (the above one) with points to do and 
then followed them. 

I chose to use Bootstrap and Javascript and worked on Visual Studio Code. I ran the app using Wamp.

I picked up Javascript instead of jQuery or any other frontend framework because
I want to master my skills in Javascript first, before I jump to more abstract techs
which encapsulate a lot of logic. For me, in this stage, it is very important to understand
the fundamentals of JS, as a language and when dealing with DOM manipulation, very crucial to
frontend development. That's why I went for Bootstrap instead of pure CSS, because I wanted to dedicate more effort to JS, 
since I already have a good level of comfort with CSS. 
Of course, I still need to master it as well. 

I didn't include any backend in my task, because I wanted to concentrate on frontend and didn't want
to get confused with the programming approach backend follows, in the stage I am now. 

This task gave me the opportunity to learn more about forms, which are heavily used
in web apps, helped me practice more JS, improved my analytical thinking and task planning.


/**  Ina Speci   */