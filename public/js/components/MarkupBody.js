import React from 'react'
import MarkdownBlock from './MarkdownBlock.js'

export default class MarkupBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: ''
        }
        this.refresh()
    }

    render() {
        let textBlocks = ''
        return (
            <MarkdownBlock markdown={this.state.markdown} />
        )
    }

    refresh() {
        fetch('https://api.github.com/gists/4b59ccde8113faf0328f5eb29c298836', {})
            .then(res => {
                return res.json()
        }).then(json => {
            console.log(json);
            const filename = Object.keys(json.files)[0]
            this.setState({
                markdown: json.files[filename].content
            })
        })
    }
}
