# Components

On the second day of reactjs, We share one of the most important concepts of react, components. 
A component is like a javascript function that has a specific functionality.
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

There are two types of components, 
- class based components
- functional-based components


### Class components
Class components are defined using the ES6 class. This was the only way of creating components before function components. But for now, I will be focused on the Functional based components which are easier and better with the use of hooks.

### Functional based components
Functional components were introduced in React v16.8. They can take in props (properties) just like parameters in javascript and may return HTML (using JSX) telling the browser how the UI should look like.
When writing a component name, It's best to use a title case.

```js
function ComponentName(){  
 return <h1>Hello, world</h1>  
}
```

The above component is similar to this class component

```js
import React from 'react'

class ComponentName extends React.component{  
   render(){  
      return <h1>Hello, world</h1>  
   }  
}
```

A React project usually contains many components which can interact with each other. To make a component accessible by another, you will need to expose it and later on import it.

```js
//ComponentOne.js
function ComponentOne(){  
    return <h1>Hello, world</h1>  
}

export default ComponentOne;

// ComponentTwo.js
import ComponentOne from './ComponentOne'

function ComponentTwo(){  
     return (  
          <ComponentOne />  
     )  
}

export default ComponentTwo;
```

### Conclusion
One of the pros of React is the reusability of components. I did mention about `props` and `state` but more of that in another part of the 7days.
Happy coding.
