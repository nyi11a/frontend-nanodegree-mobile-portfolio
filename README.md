## Website Performance Optimization portfolio project

This project is part of the Udacity  Website Optimization Project. The goal is to optimize this online portfolio for speed! In particular, optimizing the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

To view the effect of my optimizations:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)



Optimizations made:
1.Commented out Googlefonts
2. dded media attribute to print.css file tag in HTMl
3. Made Google Analytics Script asynchronous
4. Optimized images and manually resized pizzeria.jpg
5. Placed CSS via style tag at bottom of HTML



####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, I  modified views/js/main.js until the frames per second rate is 60 fps or higher.

To view the effects of my optimizations, open pizza.html in Chrome.
Open Chrome Developer Tools
Use timeline function to see the fps score.

Note: Grunt was used to minify pizza.html, views/js/main.js as well as the css files in the views folder.

The grunfiles configuration was set up using: http://gruntjs.com/configuring-tasks. The Process html feature has also been added to enable use of the minified files for information on this, please see https://www.npmjs.com/package/grunt-processhtml#usage-examples


optimizations:

function changePizzaSizes(size)
1. Forced synchronous layout avoided by turning queryselectall("randomPizzaContainer") into variable randomPizzas 2. querySelectorAll changed to getElementByClassName
2. Var newWidth added to switch case rather than inside function.

resizePizzas function
1. Placed naming of var pizzasDiv outside for loop

function updatePositions() {
1. Items defined via GetElementsByClassName instead of querySelectAll
2. Cached the items.length even though it only makes a small difference in speed, but every millisecond counts
3. Took document.body.scrollTop out of the for loop and placed it in a variable that we can then call in the for loop
4.Calculated repeating values for phase and pushed them into an empty array (phaseList), for loop then iterates through array instead of recalculating for each pizza
5. Added widthMove variable and changed the for loop to accomodate it
6. Used translateX instead of basicLeft
7. Added eventlistener to window, as it decouples scrolling from updating- taken from Udacity forum discussion: https://discussions.udacity.com/t/still-below-60fps-when-scrolling-due-to-painting-even-though-i-did-all-the-optimization-please-help/36979
 in DOMContentLoaded listener, getElementsbyID used instead of queryselector
8. Reduce number of pizzas created at start tbe relative to the screen's height and width addEventListener('DOMContentLoaded', function(), cols maintained at 8 to avoid the value  becoming a multiple of 5 because all pizzas will move in an aligned fashion, breaking the original movement.
9. Added 'translateZ(0)' and will-change: transform to CSS


You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
