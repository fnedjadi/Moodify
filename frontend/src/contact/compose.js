import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import { Form, Button, Input, Message } from 'element-react';

import 'element-theme-default';

class Compose extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        name: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please enter a value for this field.', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: 'Please enter a value for this field.', trigger: 'blur' }
        ]
      },
      redirect: false,
      cancel: false
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
  
    this.refs.form.validate((valid) => {
      if (valid) {
        fetch("http://localhost:8080/questions/submit", {
          method: "POST",
          body: JSON.stringify(this.state.form),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(res => { 
          if (res.status === 200) {
            this.setState({ redirect: true });
          } else {
            Message.warning('Something went wrong.. Try again later.');
          }
        });
      } else {
        Message({
          showClose: true,
          message: 'Correct the highlighted errors and try again.',
          type: 'error'
        });
      }
    });
  }
  
  renderRedirect() {
    if (this.state.redirect) {
      Message({
        message: "You're email have been successly send.",
        type: 'success'
      });
      return <Redirect to='/contact'/>
    } else if (this.state.cancel) {
      return <Redirect to='/contact'/>
    }
  }

  handleCancel() {
    this.setState({ cancel: true });
  }
  
  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }
  
  render() {
    return (
      <div id='compose'>
        <h1> COMPOSE NEW MESSAGE </h1>
        <Form ref="form" model={this.state.form} labelPosition={'top'}  rules={this.state.rules} labelWidth="120">
          <Form.Item label="Your email" prop="name">
            <Input className='input-compose' value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
          </Form.Item>
          <Form.Item label="Your message" prop="desc">
            <Input className='input-compose' type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
          </Form.Item>
          <Form.Item>
            <Button className='el-composesend-button' onClick={this.handleSubmit.bind(this)}>Send Message</Button>
            <Button plain={true} type='danger' onClick={this.handleCancel.bind(this)}>Cancel</Button>
          </Form.Item>
        </Form>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default Compose;