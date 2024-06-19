import React from "react";

class Testform extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email : "",
            password:"" 

        };

    }
  changeInputValue(e){
    this.setState({
        [e.target.name] : e.target.value
    })
  }
  validationForm(){
    let returnData = {
        error: false,
        msg: ''
    }
    const {email,password} = this.state

    const re = /\S+@\S+\.\S+/;
    if(!re.test(email)){
        returnData = {
            error:true,
            msg: 'Không đúng định dạng email'
        }
    }

    if(password.length <8){
        returnData = {
            error:true,
            msg: 'Mật khẩu phải dài hơn 8 ký tự'
        }
    }
    return returnData;
  }

  submitForm(e){
    e.preventDefault();
    const validation = this.validationForm();
    if(validation.error){
        alert(validation.msg)
    }else{
        alert('Submit form success')
    }
  }
    render(){
        return(
           <div className="container">
                <form
                    onSubmit = {(e) => {this.submitForm(e)}}

                >
                    <div className="form-group">    
                        <label htmlFor="text">Email:</label>
                        <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        onChange={e => this.changeInputValue(e)}
                        >
                        </input>

                    </div>
                    <div className="form-group">    
                        <label htmlFor="pwd">Password:</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter email"
                        onChange={e => this.changeInputValue(e)}
                        >
                        </input>
                        
                    </div>
                    <button type="submit" className="btn">Submit </button>

                    </form>
                    </div>
                
           
        )
    }
}

export default Testform; 