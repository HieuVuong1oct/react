import React ,{Component} from "react";

const Notification = (props) => {
    if(props.isShow){
        return(
            <ul>
                <li>Thông báo 1</li>
                <li>Thông báo 2</li>
            </ul>
        )
    }else{
        return null
    }
}

export default class TestRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowNotification: false
        };
    }

    changeNotification(){
        this.setState({
            isShowNotification: !this.state.isShowNotification,
             
        })
        
    }
    render(){
        const {isShowNotification} = this.state
        const buttonText = isShowNotification ? 'Ẩn' : 'Hiển thị';
        return(
            <div style={{margin:20}}>
                <p>Lập trình Reactjs</p>
                <button onClick={() => this.changeNotification()}>
                    
                {buttonText}
                </button>
                <Notification  isShow ={isShowNotification}/>
            </div>
        )
    }
}