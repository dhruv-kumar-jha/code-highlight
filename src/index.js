'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';


class CodeHighlight extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			// empty state, we might add something in future
		};
	}

	static get defaultProps() {
		return {
			language: 'javascript',
			tab: '    ', // 4 spaces
			title: '',
			description: '',
			classes: {
				title: '',
				description: '',
				pre: '',
				code: '',
			},
		}
	}

	componentDidMount() {
		this.highlightCode();
	}

	componentDidUpdate(prevProps, prevState) {
		this.highlightCode();
	}

	highlightCode() {
		hljs.configure({
			tabReplace: this.props.tab,
		});
		hljs.highlightBlock(this.refs.code);
	}


	render() {

		return(
			<div className={ this.props.className || 'code-highlight' }>

				{ this.props.title &&
					<div className={ this.props.classes.title || 'title' }>
						{ this.props.title }
					</div>
				}

				{ this.props.description &&
					<div className={ this.props.classes.description || 'description' }>{ this.props.description }</div>
				}

				<pre className={`${this.props.language || ''} ${ this.props.classes.pre || '' } `} ref="code">
				<code className={ this.props.classes.code || '' }>
					{ this.props.children }
				</code>
				</pre>

			</div>
		)
	}

}

export default CodeHighlight;
