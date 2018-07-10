// Load favicon
import '@/assets/images/favicon.png';

// Load App's css (scss)
import '@/assets/css/app.scss';

// Import bootstrap
import 'bootstrap';

// Import starting point
import init from './init';

/*

Hey Blend Labs!

Here's a brief intro of what I've done and the time I've taken.
The setup is a bit much, it was intended to save some time, tradeoff is speed by having such a bulky setup for
a relatively simple app, much of which can be done away with.
I've cloned the repo from https://github.com/johndatserakis/modern-webpack-starter.
It uses Babel and Webpack for the most part.

There are 3 main objects around which the app revolves -
1. Display Note - a template used to display the note
2. AddEditNote - a template used to add/edit the note
3. Store - a class to store the notes

I apologise, I went over with the time, I've given a rough breakdown of how I spent my time -

2.5 hours - JS
1 hour - CSS
1 hour - HTML

~45 mins - npm issues & finding the right boilerplate
~45 mins - strict mime type checking is enabled error for Font Awesome CDN
~1.5 hours - picking better names, optimization and code cleaning

I've added #toDo tags for things that needed fixing once the app was working.
The ones I couldn't get to are still around.

Happy Note-ing!

*/
