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
        const blocks = this.state.markdown
            .split('```')
            .map((element, index) => {
                return (
                    <MarkdownBlock
                        key={element}
                        markdown={element}
                    />
                )
            })
        console.log(blocks);
        return (
            <div>
                {blocks}
            </div>
        )
    }

    refresh() {
        if (!this.props.params.id) return;
        fetch(`https://api.github.com/gists/${this.props.params.id}`, {})
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
