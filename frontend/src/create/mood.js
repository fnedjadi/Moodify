import React from 'react';
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
              key: 0,
              value: ''
            }]
          },
          options: [{
            key: '-1',
            feature : 'none',
            value: 'N/A',
            name: 'N/A',
            disabled: true
          }],
          value: ''
        };
      }

      componentDidMount() {
        fetch('http://localhost:8080/moods/get')
        .then(results => {
          return results.json();
        }).then(data => {
          let moods = data.map((mood) => {
            return (
              {
                key: mood.id,
                feature : mood.target,
                value: mood.id,
                name: mood.name
            }
            )
          })
          this.setState({options: moods});
        })
      }
      
      handleSubmit(e) {
        e.preventDefault();

      
        let selected_inputs = this.state.form.moods.map(x => x.value);
        let selected_moods = selected_inputs.filter(x => x !== "");

        let mood_names = selected_moods.map(id => this.state.options.find(elt => elt.key === id).name);
        let playlist_name = mood_names.join(', ');

        console.log(playlist_name);
        if (selected_moods.length > 0) {
          this.refs.form.validate((valid) => {
            if (valid) {
              this.props.onSearchClick(selected_moods, playlist_name);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
      
      removeMood(item, e) {
        var index = this.state.form.moods.indexOf(item);
        
        if (index !== -1) {
          let form = this.state.form;
          form.moods.splice(index, 1);
          this.setState({
            form: form
          });
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
          <div id='picker-mood' width='100%'>
            <h1>How is your mood today?</h1>
            <Form ref="form" model={this.state.form} labelWidth="80" className="demo-dynamic" inline={true}>
              {
                this.state.form.moods.map((Mood, index) => {
                  return (
                    <Form.Item key={index} style={{margin:'15px 0 0 0'}}>
                      <Button className='el-close-button' onClick={this.removeMood.bind(this, Mood)}><img className='close-button' src={close} alt="Close icon"/></Button>
                      <Select value={this.state.value} placeholder="Mood" clearable={true} onChange={this.onMoodChange.bind(this, index)}>
                        {
                          this.state.options.map(option => {
                            return <Select.Option key={option.key} label={option.name} value={option.value} disabled={option.disabled} />
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
            <Button className='el-generate-button' onClick={this.handleSubmit.bind(this)}>Generate playlist</Button>
          </div>
        )
      }
}

export default Mood;