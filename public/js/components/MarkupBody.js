import React from 'react'
import MarkdownBlock from './MarkdownBlock.js'

export default class MarkupBody extends React.Component {
    render() {
        return (
            <MarkdownBlock markdown="hi there very **cool**" />
        )
    }
}
