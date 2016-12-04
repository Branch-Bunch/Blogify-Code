import React from 'react'
import Marked from 'marked'

export default class MarkdownBlock extends React.Component {
    render() {
        console.log('hit');
        console.log(this.props.markdown);
        Marked.setOptions({
            renderer: new Marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        })
        const html = Marked(this.props.markdown)
        return (
            <div dangerouslySetInnerHTML={{__html:html}}/>
        )
    }
}
