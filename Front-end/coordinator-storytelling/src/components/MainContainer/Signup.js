import React from "react";
import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {
            title: '',
            country: '',
            email: "",
            username: "",
            password: "",
            
          },
        loggedIn: false
     
    };
    // this.handleChange = this.handleChange.bind(this);
}


handleRegister = ev => {
    const userObject = this.state.user
    ev.preventDefault()
    axios
.post("https://remarkable-story-backend.herokuapp.com/api/register", userObject  )

.then(res => {
    //console.log(res.data)
    localStorage.setItem("token", res.data.token);
    this.setState({ loggedIn: true });
  })
  .catch(err => console.log(err));
}

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value })

}

  render(){
    return(
     <div>
         <h2>Sign Up</h2>
              {/* <p style={{fontSize: '15px'}}> Name </p> */}
              <input onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="Name"
            />
            <br></br>
              <input onChange={this.handleChange}
              type="text"
              name="job-title"
              placeholder="JobTitle"
            />
             <br></br>
               <input onChange={this.handleChange}
              type="text"
              name="country_name"
              placeholder="Country Name"
            />
             <br></br>
                <input onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="Email"
            />
             <br></br>
                <input onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="Username"
            />
             <br></br>
                 <input onChange={this.handleChange}
              type="text"
              name="password"
              placeholder="Password"
            />
            <br></br>
            <button onClick={this.handleRegister}>SUBMIT</button>
 
 
 



     </div>

    )

  }
  
}

export default Signup