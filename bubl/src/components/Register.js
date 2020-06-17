import React, {Component} from 'react';
import { connect } from "react-redux";
import { register } from "../actions";
import { Label, Input, LoginButton, Form, Button } from "../StyledComponents";

class Register extends Component {
   state = {
      newUser: {
         username: "",
         password: "",
         firstName: "",
         lastName: "",
         age: "",
         school_id: ""
      }
   }

   handleChange = e => {
      e.preventDefault();

      this.setState({
         newUser: {
           ...this.state.newUser,
           [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
         }
       });
   }

   handleSubmit = e => {
    e.preventDefault()
    
      this.props.register(this.state.newUser)
      .then(res => (res === false) ? null : this.props.history.push("/schools")      
      );
   }

   render() {
      return (
         <Form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            {this.props.registerError && <p>Error on sign up, try again</p>}
            <Label htmlFor="username">Username:</Label>
            <Input name="username" value={this.state.newUser.username} onChange={this.handleChange} placeholder="Username" />
            <Label htmlFor="password">Password:</Label>
            <Input name="password" type='password' value={this.state.newUser.password} onChange={this.handleChange} placeholder="Password" />            
            <LoginButton>Register</LoginButton>
         </Form>
      )
   }
}

const mapStateToProps = state => {
   return {
    registerError: state.registerError
   };
 };
 
 export default connect(mapStateToProps, {register})(Register);