import React from 'react';
import Loading from './loading.js';
import { Button, Select, Form } from 'element-react';

import 'element-theme-default';

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
        if (this.state.form.moods.length < this.state.options.length) {
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
          }
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
          <Form ref="form" model={this.state.form} labelWidth="80" className="demo-dynamic">
            {
              this.state.form.moods.map((Mood, index) => {
                return (
                  <Form.Item key={index}>
                    <Select value={this.state.value} placeholder="Mood" clearable={true} onChange={this.onMoodChange.bind(this, index)}>
                      {
                        this.state.options.map(el => {
                          return <Select.Option key={el.value} label={el.label} value={el.value}/>
                        })
                      }
                    </Select>
                    <Button plain={true} type="danger" onClick={this.removeMood.bind(this, Mood)}>x</Button>
                  </Form.Item>
                )
              })
            }
            <Form.Item>
              <Loading onSearchClick={this.props.onSearchClick}/>
              <Button type="success" onClick={this.handleSubmit.bind(this)}>Generate playlist</Button>
              <Button onClick={this.addMood.bind(this)}>+</Button>
            </Form.Item>
          </Form>
        )
      }
}

export default Mood;