import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const firstInput = 
`This is a paragraph

**This is a bolded text**

>Block Quotes!

# Heading 1
## Heading 2
### Heading 3

- List Item n°1
- List Item n°2
- List Item n°3

[Google](https://google.com)

This is a inline code: \`<div></div>\`

This is a block of code:
\`\`\`
let x = 1;
let y = 2;
let sum = x + y;
\`\`\`

This is a random image:

![Random image](https://source.unsplash.com/random)
`


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            input: firstInput
        }
    }


    handleChange = event => {
        this.setState({
            input: event.target.value
        })
    }


    render() {
        const input = this.state.input

        return (
            <div className="container-md">
                <h1 className="text-center mt-3 mb-5">Markdown Previewer</h1>
                <div className="row mb-5">
                    <div className="col-6 d-flex flex-column align-items-center">
                        <p className="fw-bold">Enter your text</p>
                        <textarea className="p-3" id="editor" value={input} onChange={this.handleChange} />
                    </div>

                    <div className="col-6 d-flex flex-column align-items-center">
                        <p className="fw-bold">Preview</p>
                        <ReactMarkdown className="preview-result p-2" id="preview" children={input} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
