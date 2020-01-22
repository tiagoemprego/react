import React from "react"

class Mirror extends React.Component{

    state = {
        deskTop: window.localStorage.getItem("url"),
        imageURL: ''
    }

    _onChange = e => {
        const file    = this.refs.uploadImg.files[0]
        const reader  = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imageUrl: reader.result
            })
        };
        if (file) {
            var array = []
            var a = reader
            array.push(a)
            reader.readAsDataURL(file);
            localStorage.setItem('url', a);
            this.setState({
                imageUrl :reader.result
            })
            console.log('>>>', array[0].result )
        }
        else {
            this.setState({
                imageUrl: ""
            })
        }
    }

    render() {
        return(
            <>
                <form onSubmit={this.onSubmit} >
                    <input
                        ref="uploadImg"
                        type="file"
                        name="selectedFile"
                        onChange={this._onChange}
                    />
                </form>

                <img src={this.state.imageUrl} />
            </>
        )
    }
}

export default Mirror
