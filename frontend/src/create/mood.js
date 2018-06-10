import React from 'react';
import Loading from './loading.js';
import { Button, Select, Form } from 'element-react';

import 'element-theme-default';
import add from '../img/plus.png';
import close from '../img/close.png';

class Mood extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          form: {
            moods: [{
              key: 1,
              value: ''
            }]
          },
          options: [{
            value: 'sad',
            label: 'Sad'
          }, {
            value: 'calm',
            label: 'Calm'
          }, {
            value: 'happy',
            label: 'Happy'
          }],
          value: ''
        };
      }
      
      handleSubmit(e) {
        e.preventDefault();
      
        this.refs.form.validate((valid) => {
          if (valid) {
            this.props.onSearchClick();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      
      removeMood(item, e) {
        var index = this.state.form.moods.indexOf(item);
      
        if (index !== -1) {
          this.state.form.moods.splice(index, 1);
          this.forceUpdate();
        }
      
        e.preventDefault();
      }
      
      addMood(e) {
  //      if (this.state.form.moods.length < this.state.options.length) {
          var empty = false;
          this.state.form.moods.forEach((Mood, index) => {
            if (Mood.value === "") {
              empty = true;
            }
          });
          if (!empty) {
            e.preventDefault();
            this.state.form.moods.push({
              key: this.state.form.moods.length,
              value: ''
            });
            this.forceUpdate();
    //      }
        }
      }
      
      onMoodChange(index, value) {
        const newForm = this.state.form
        newForm.moods[index].value = value;
        this.setState({
            form: newForm
          })
        this.forceUpdate();
      }
      
      render() {
        return (
          <div id='picker-mood' width='100%'>
            <h1>How is your mood today?</h1>
            <Form ref="form" model={this.state.form} labelWidth="80" className="demo-dynamic" inline={true}>
              {
                this.state.form.moods.map((Mood, index) => {
                  return (
                    <Form.Item key={index}>
                      <Button className='el-close-button' onClick={this.removeMood.bind(this, Mood)}><img className='close-button' src={close} alt="Close icon"/></Button>
                      <Select value={this.state.value} placeholder="Mood" clearable={true} onChange={this.onMoodChange.bind(this, index)}>
                        {
                          this.state.options.map(el => {
                            return <Select.Option key={el.value} label={el.label} value={el.value}/>
                          })
                        }
                      </Select>
                    </Form.Item>
                  )
                })
              }
              <Form.Item>
                <Button className='el-add-button' onClick={this.addMood.bind(this)}><img className='add-button' src={add} alt="Add icon"/></Button>
              </Form.Item>
            </Form>
            <Loading onSearchClick={this.props.onSearchClick}/>
            <Button type="success" onClick={this.handleSubmit.bind(this)}>Generate playlist</Button>
          </div>
        )
      }
}

export default Mood;