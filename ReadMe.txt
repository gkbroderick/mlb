Final Update for InroCS project.

http://mcgough.github.io/mlb/ (gh-pages)

*Photo slider - borrowed from UnSlider
*Scroll Start/Stop effect - borrowed from http://ssorallen/jquery-scrollstop
*Images and Statistics - borrowed from Google and Wikipedia

I've spent a good amount of time on this page. More than, I'd like to admit actually. A decision to center the entire layout near the deadline, tacked on what seemed like an entire day's work. After dealing with that mistake and cleaning up the code, I've spent nearly 25 hours on this page.

I felt like the project went really well. The entire process was a learning experience. From building the object constructor, to putting the layout together by design, and ending with the effects using jQuery.

I'd day say that the most important thing that I've learned from this project is to wireframe a design before putting the page together. Building as I went along lead to a lot of avoidables issues. The one issue, that I still have and bothers me the most, is that the page is not responsive.

The most enjoyable part of the process was using jQuery. Writing functional code that you can get to work is a great feeling.

Eventhough I am extremely proud of this project, if I had to grade it, I'd say it is 7.5-8/10. Mainly because the unresponsiveness just really isn't acceptable in this day and age. Also, I feel that the css could'be been organized more cleanly, If I had mapped out the page before diving in.

******************************

!This site is not responsive, built and meant to be viewed on a 13inch monitor!


This file is the beginning of a class assignment to demonstate objects and their contruction. With pitchers and catchers reporting in a little over a week, I'm trying to create a simple baseball almanac.

As of, 2/10/15, I've covered the AL West: Mariners, Athletics, Rangers, Astros, and Angels.

The numbers for stats and dates have all been sourced from Wikipedia.

Methods found in MlbTeam constructor:
  briefHistory() = states how many times a given team has won their division, the Pennant, and The World Series
  (still trying to come up with more funcationality).

From the work I've done so far I've realized how immensely objects can increase the scope of a program. I've also learned that working with objects can lead you down a rabbithole and that you have to focus on what the objects are directly responsible for (objects within objects within objects...ugh). This assignment has been helpful with Git too. It's first time I've had to actually make a new branch for one of my own repos.

***********************

Update 2/11/15:
mlb object removed
teams added to teamPool array
searchLeague() alerts what teams are in what division
Questions:
How do I access an array objects set as a property of another object?
mlb.americanLeague[0][0].teamName -> Uncaught TypeError: Cannot read property '0' of undefined

***********************

Update 2/13/15:
HTML/CCC styling applied, however the page is not responsive.Still a lot of work needed their.

Jquery function triggerd by dropdown that accesses teamPool and calls the briefhistory method

The most important insight I gained from this assignment is
responsive design, and how complex it is. Not thinking, I found myself too deep into the project and too intimidated to go back and try and adapt the page.

For the most part this was all accomplished by myself. Galen Broderick did help me out, big time, with binding the jquery function to the event.
