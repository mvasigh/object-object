---
title: Welcome to my blog!
date: '2018-12-08T16:09:00.651Z'
tags: [html, css, javascript, react]
---

This is my very first post on my new blog! Here, I will be posting
new and interesting things that I learn in my career as a software
developer.

## About me

Pellentesque ut ipsum ut eros ultrices vestibulum eu nec nisi. Sed ac enim non tortor pellentesque sagittis at mattis tellus. Etiam condimentum pretium dolor, eget euismod nulla volutpat eu.

### Section One

Proin mauris urna, sollicitudin at dolor sit amet, facilisis vulputate dolor. Ut feugiat arcu vitae rhoncus euismod. Nullam hendrerit faucibus ipsum ac consequat. Proin nec scelerisque elit. Nunc posuere iaculis aliquam. Sed faucibus at erat ac viverra.

### Section Two

Nunc sit amet fringilla eros. Etiam a luctus nunc. Nulla id varius enim, quis dapibus purus. Etiam sit amet porttitor lacus.

### Section Three

Nam porttitor sodales lectus. Duis aliquam fermentum elit, et pellentesque dui ullamcorper at. Pellentesque id egestas ante. Sed pulvinar nibh elit, eu molestie tellus pellentesque eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in libero a diam pulvinar varius ac sed turpis. Nullam ac pellentesque massa. Suspendisse condimentum consequat magna, eu dapibus nulla efficitur sagittis.

```js
import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false;
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        return (
            <button onClick={this.handleClick}>Hello World</button>
        )
    }
}

export default Button;
```

Nam porttitor sodales lectus. Duis aliquam fermentum elit, et pellentesque dui ullamcorper at. Pellentesque id egestas ante. Sed pulvinar nibh elit, eu molestie tellus pellentesque eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in libero a diam pulvinar varius ac sed turpis. Nullam ac pellentesque massa. Suspendisse condimentum consequat magna, eu dapibus nulla efficitur sagittis.

Nam porttitor sodales lectus. Duis aliquam fermentum elit, et pellentesque dui ullamcorper at. Pellentesque id egestas ante. Sed pulvinar nibh elit, eu molestie tellus pellentesque eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in libero a diam pulvinar varius ac sed turpis. Nullam ac pellentesque massa. Suspendisse condimentum consequat magna, eu dapibus nulla efficitur sagittis.
