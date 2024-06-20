import React, {Component, useContext} from "react";

const CounterContext = React.createContext();
const Counter = () => {
    const counter = useContext(CounterContext);

    return (
        <div>
            <code>Context</code>
            <h1>{counter.count}</h1>
            <button onClick={() => {counter.countUp();}}>
                Tăng
            </button>

            <button onClick={() => {counter.countDown();}}>
                Giảm
            </button>
            
        </div>
    )
}

export default class TestUseContext extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:1,
        };
    }

    countUp(){
        this.setState({
            count: this.state.count + 1
        })
    }

    countDown(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
            <CounterContext.Provider
            value={{
                count: this.state.count,
                countUp: this.countUp.bind(this),
                countDown: this.countDown.bind(this)
            }}
            >
                <Counter/>
            </CounterContext.Provider>
        )
    }
}