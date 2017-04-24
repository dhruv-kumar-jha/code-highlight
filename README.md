# Code Highlight

This react component allows you to highlight your code and make it look prettier wherever you want.

This component makes use of [highlight.js](https://github.com/isagalaev/highlight.js/) plugin.


## Installation

To install this Component, run `yarn add code-highlight` or `npm install code-highlight`., Don't forget to install highlight.js by running `yarn add highlight.js`.


## Usage

To use the component, In your react Application just do

```
import React from 'react';
import CodeHighlight from 'code-highlight';

// import all the styles
import "code-highlight/lib/style.css";
import "highlight.js/styles/xcode.css";


const MyComponent = (props) => {

	return (
		<CodeHighlight
			language="javascript"
			title="Hello World in Javascript"
			description="This code will log hello world in the console."
		>
			{`
            	console.log("Hello World");
            `}
		</CodeHighlight>
	)

}

export default MyComponent;


```

You can also provide additional configuration like

```
<CodeHighlight
	language="" // default: javascript
	title="" // if any
	description="" // if any
    tab="" // what do you want the tab in your code to be replaced with?, default: 4 spaces
    classes={{
    	title: '', // class name for the title
        description: '', // class name for description
        pre: '', // class name for pre tag
        code: '', // class name for code tag
    }}
    className="" // if specified this will replace the default class name and its styles.
>

</CodeHighlight>
```


You can view all the themes/styles for syntax highlighting here https://highlightjs.org/static/demo/
Just import the stylesheet of your choice.

If your webpack configuration doesn't support importing of `css stylesheets`, Either Google on how to support it or Copy the contents of these stylesheets manually into your css file.

