# ReactYouTubeProject

This project calls the youtube api and embeds the video. The user can search youtube for any videos in the search bar on top and the top five results will appear, the highest one in the middle of the page. This one can be played. The others can be switched to the middle with a click.

I did this project in React. I did it with the help of a tutorial; however, I learned some very valuable things about React. 

Each React component has its own state, but that this state is different from the redux state. This state can be initialized in the constructor with a this.state = {...} but later on the state of each component must only be modified through setState().

ES6 syntax is cool because instead of writing = function(params) {}, you can just write = (params) => {} and that will give you a function. 

I learned that with react, you have to import React, {Component} from 'react'; as this enables you to 
use React's functionality as well as have your React classes extend Component, which allows you to set up constructors and initialize the state of the component. 

It is also necessary to export the class that you make, thus allowing other classes to use it. 

The top level React component, many times represented as App in an index.js file, must render the react components to the dom. This can be done using syntax such as ReactDOM.render(<App />, document.querySelector('.container'));

JSX is important to React because it allows you to more concisely return the html and 
accompanying javascript variables to the DOM from your functions, instead of having to call React.createElement 
all the time. 

Babel is what takes JSX and ES6 elements from React and transpiles them to ES5 javascript, 
which is more consistently supported by browsers. 

Webpack allows you to have a nice bundle of libraries that you can grab from. 

These things aren't the extend of my learning about React, but are some of the basics I have learned. 

![afterownquery](https://user-images.githubusercontent.com/25092249/35298542-bec8c4da-003f-11e8-9ff1-2f59fd3c6002.png)

![playingvideo](https://user-images.githubusercontent.com/25092249/35298610-f3b48aee-003f-11e8-8338-1ad421e57ccb.png)

![afterclicking](https://user-images.githubusercontent.com/25092249/35298638-0e53aae2-0040-11e8-8a7b-eba7013d0203.png)
