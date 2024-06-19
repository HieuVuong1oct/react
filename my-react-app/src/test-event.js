import React from "react";
 
class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textareaChange: "",
            buttonCLick:"",
            mouseOver: ""

        }
        this.mouseOver = this.mouseOver.bind(this);

    }

    changeText(e){
        this.setState({
            textareaChange: e.target.value
        });
    }

    mouseOver(){
        this.setState({
            mouseOver: this.state.mouseOver + "mouseOver..."
        });
    }

    render(){
        return (
            <div style={{marginTop: "5%"}}> 
                <button onClick={() => {
                    this.setState({
                        buttonCLick: this.state.buttonCLick + "Đã click "
                        
                    });
                    
                }}>
                    Click me!!
                    
                </button>{""}

                <button onClick={() => {
                    this.setState({
                        buttonCLick: this.state.buttonCLick.slice(0,-9)
                    });
                }}>
                    Delete click!!
                </button>{""}
                <p>
                    button: <code>{this.state.buttonCLick}</code>
                </p>
                <hr />
                <textarea onChange={(e)=> this.changeText(e)} placeholder="Nhập vào đây..."></textarea>
                <p>
                    textarea: <code>{this.state.textareaChange}</code>
                </p>
                <hr />
                <h6 onMouseOver={this.mouseOver}>Di chuột vào đây</h6>
                <p>
                    mouseOver: <code>{this.state.mouseOver}</code>
                </p>
                
            </div>

        )
    }
}

 
export default Test ;