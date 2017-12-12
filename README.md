# NYT Games Team Web Code Test

Thank you for your interest in the NYT Games team! This exercise will help us
get to know you a bit as an engineer. Your task is to create a playable version
of the card-matching game Memory. Your app should fetch the game data found
found [here](https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json).

## Code Test Guidelines

The game should follow the basic rules of memory:

* All cards begin face down.
* The player turns one card face up, and then a second.
  * If they match, the pair is removed from the game.
  * If they do not match, both cards turn back over.
* The game ends when the player finds all matching pairs.

The only other requirement is that you incorporate the `Timer` component that
we’ve included in the starter project. You may modify the component to better
integrate with your app as a whole, but the timer should start when the first
card is flipped over and stop when the game ends. Beyond that, the sky’s the
limit. All other application and interface design decisions are left to your
discretion.

When reviewing your submission, the following criteria will be considered:

* **Overall code clarity and organization**: Does the app structure make sense?
  Are components broken down in a sensible way? Can we follow the control flow
  without a user manual?
* **State management**: Is the application state handled in an elegant way? Do
  the different pieces of state interact logically?
* **Attention to detail**: Did you follow all the implementation and submission
  instructions? Is your code reasonably bug-free?
* **User experience**: Is the interface intuitive and responsive? How polished
  does it feel?

## Extra Credit

Provided your app satisfies everything in the previous section, anything else is
optional. But if you find yourself with some time left over, here are some
suggestions on ways you might extend your app and really make it stand out:

* Support for
  [three-card matches](https://web-code-test-dot-nyt-games-prd.appspot.com/triples.json)
* Progress saving for resuming an unfinished game
* User-customizable card styles
* Some sort of auditory experience
* A scoring system beyond time spent solving
* A leaderboard to record top solves
* Additional modes of play (head-to-head, race-the-clock, etc.)
* Accessibility features (keyboard navigation, voice-over effects, etc.)
* Any other variations or enhancements you might dream up that would showcase
  your creativity

## Setup

To help you get started†, we’ve created this starter project based on
[NYT kyt](https://github.com/NYTimes/kyt) that uses Webpack, Node, Babel,
Express, React and Sass + CSS Modules, all of which are technologies we use
internally. Feel free to extend the `package.json` with any other packages that
you might want to extend the app’s functionality (for data fetching, state
handling, etc.).

Clone this repository and run `npm install`, then `npm run dev` in the root
directory to start up the development server. Once it’s running, you can view
the app at `localhost:3000`††.

If you’re looking for somewhere to start, a good place to dive in is `Game.js`,
where we’ve left a placeholder `<div>` for you to build on. Good luck! We look
forward to playing your game.

---

†You are encouraged to use our scaffolding to minimize the time spent on
configuration and let you jump right into coding your app. You may elect to use
your own setup if you prefer, but if you do, be sure to include from-scratch
installation instructions. Please track your changes through git either way; we
are interested in your journey as well as your destination. When you’re
finished, please zip up the project folder, upload it to a cloud store of your
choice (Dropbox, Google Drive, etc.) and send a link to the address provided in
your invitation; our spam filters don’t much care for attachments containing .js
files. Replace the contents of this Readme with any special installation or
gameplay instructions or general comments about the app not specifically called
out in your code.

††See the `scripts` in `package.json` for more commands you can run (e.g., for
linting and running the test suite).
