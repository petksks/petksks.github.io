Hi Peter!

------------------------------------

UPDATED 20-4-2023

Almst there! Things that are still an issue for a G grade:

Header, footer and navigational menu on all main pages (where possible) ✅ ❌
    Contact page link is broken on index.html

    Mobile menu: ❌
       only works on the contact page. 
       On index.html the file path to the js file is: 
           <script src="contact/js/app.js"></script>
       which doesn't exist. On the contact page it is:
           <script src="../assets/js/app.js"></script>
       which does exist! 
       
       You need to update the other pages (and in index.html it will need to be slightly different)

See below for the issues for a VG grade.

------------------------------------



This feedback is for Assignment 5 - complete portfolio - only!

Overall you've done good work - on desktop on the front end it's all fine. As you can see below, however, there's a few issues.

The biggest one is the mobile menu, at this stage I'm afraid I have to say the assignment is broken on mobiles so you haven't met the requirements for a Godkänt grade. From any page in mobile view I cannot access the rest of the site and that's no good!!

I think the issues are caused by file paths -  I spent 10 minutes and it the menu to appear and work, so it should be a relative easy fix. If you fix the hamburger menu on ALL pages on mobile you'll have met the requirements for a Godkänt grade.

However, to get the VG there's a lot of things that need to be looked at. I've detailed the issues below. I understand you are getting deep into React and whatnot, so might not have time available to you to fix everything, do I suggest looking at the mobile menu first, secure that  grade, then decide if you want to push for the VG.

So I'm afraid you'll ned to resubmit. Let me know what you want to do!

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅ ❌
    Contact page link is broken on index.html

    On mobiles:
      contactpage.html menu works fine.

      index.html - hamburger exists but doesn't work; console error from line 71 (it's an incorrect file path)

      skills.html, projects.html - no hamburger menu is rendered though its in the markup.

      If looks like you missed some links to js and icon files. You misspelt "class" on the burger menu, but you have two class attributes on the element.

  H1 on every page ✅

  Mail to Contact form ✅ ❌
    Like the first assignment, all you need to do is to fire a mailto action to open the users email client. The forms is good, just need a mail to action

  Links to specific projects opening in new windows ✅

CSS
  External CSS ✅ ❌
    Should all be in the same css directory with semantic names - contact.css for example

  General style sheets for common elements ❌
    You have heaps of duplicated content in the css files. For example the same code for footer is in 4 files. A better approach is to have a general.css file with all the common elements and include it on every html page.

  Typography style sheet ❌
    Have a typography.css that uses the @font-face property to link to the various font files you have added.

  Locally installed font ✅
  
  Separate stylesheets for each page ✅ ❌
    Too much duplicated content!
    Too many files with the same name!

  RWD
    Desktop ✅
    Mobile ❌ ✅
      Your face gets a bit squished on mobile! A good way to make sure the aspect ratio is retained is to set width: 100%; height: auto. 

      See above for mobile menu issues

JS
  jQuery plugin (such as a carousel) ✅

  JS/jQuery multi level menu (min 2 levels) ❌
    only 1 level, mobile menu issues
  

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅ ❌
    A better approach is to have hmtl, css, js, fonts and images directories

  CSS prefixing where required ❌
    You can copy your css files into a tool like https://autoprefixer.github.io/ and it'll do the work for you!

  jQuery effects  ✅ ❌ 
    Nice shake animation!
    I'm mainly looking for the built in jQuery effects like fade, slide etc

  Semantic element naming ✅

  Code style
   HTML: ✅ fantastic! Always use the "defer" property when importing vanilla JS files
   CSS: ✅ very nice!
   JS: ✅
     const names should always be in SNAKE_CASE