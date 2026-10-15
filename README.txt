SQUISH STACK V5: STACK + MATCH + CATCH
Self-hosted static site. No build, account or server database required.

INSTALL / UPDATE
1. Back up your current site.
2. Extract this ZIP. Upload its contents to your website document root, preserving folders. index.html belongs at the root of squishstack.com.
3. Upload sw.js LAST, after all other files. Use HTTPS for installation and offline play. Do not run the game by double-clicking an HTML file.
4. Visit the homepage online. If offered, tap Update app. Close and reopen existing home-screen apps after updating. Old Stack-only shortcuts may need removing and re-adding from the homepage.
5. On iPhone use Safari > Share > Add to Home Screen. On Android use the browser menu > Install app / Add to Home screen.
6. Wait for Ready for offline play, then test each game in airplane mode. External shopping and optional Google Fonts need internet; system fonts work offline.

NEW IN V5
Squish Catch: drag or move the pointer, hold arrow controls, or use keyboard arrow keys. Catch characters for 10 points, avoid purple prickles, and keep three lives. Every 100 points increases difficulty. P or Pause pauses the round. Leaving the page pauses automatically. Best score is saved locally when storage is available.
Original Stack and Match games remain available from the home screen.
The Fruit & food shopping slot now links to the NeeDoh Squishmas Advent Calendar, ASIN B0GPY41JGK, using the existing Match affiliate tag trumpgear2828-20. Original game illustrations are not product photos.

EDITING
Home: index.html and assets/style.css
Catch: games/catch/index.html, catch.css, catch.js
Shopping: each game's index.html. Search B0GPY41JGK to change the calendar link.
After future file changes, bump the CACHE value in sw.js. Add new runtime files to FILES.
Root manifest and worker serve all three games. The legacy Stack worker retires itself.
Scores stay on one device/browser. Clearing site data removes them. Browsers can evict offline files; reconnect to restore them.
Squish Stack is an independent game site, not affiliated with Schylling or NeeDoh.
