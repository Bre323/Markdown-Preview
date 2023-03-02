import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }


    render() {
        return (
            <div>
                <h1 className="text-center mt-3 mb-5">Markdown Previewer</h1>
                <div className="row">
                    <div className="col-6 d-flex flex-column align-items-center">
                        <p className="fw-bold">Enter your text</p>
                        <textarea className="p-3" id="editor" />
                    </div>

                    <div className="col-6 d-flex flex-column align-items-center">
                        <p className="fw-bold">Preview</p>
                        <div className="preview-result p-2" id="preview" />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
