This file is the beginning of a class assignment to demonstate objects and their contruction. With pitchers and catchers reporting in a little over a week, I'm trying to create a simple baseball almanac.

As of, 2/10/15, I've covered the AL West: Mariners, Athletics, Rangers, Astros, and Angels.

The numbers for stats and dates have all been sourced from Wikipedia.

Methods inherited from MajorLeagueBaseball prototype:
  briefHistory() = states how many times a given team has won their division, the Pennant, and The World Series
  (still trying to come up with more funcationality).

From the work I've done so far I've realized how immensely objects can increase the scope of a program. I've also learned that working with objects can lead you down a rabbithole and that you have to focus on what the objects are directly responsible for (objects within objects within objects...ugh). This assignment has been helpful with Git too. It's first time I've had to actually make a new branch for one of my own repos.

Questions:
How do I access an array objects set as a property of another object?
mlb.americanLeague[0][0].teamName -> Uncaught TypeError: Cannot read property '0' of undefined
