import React from 'react';

class Questions extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          questions: [{
              key: -1,
              question: 'N/A',
              value: 'None'
          }]
        };
      }

    componentDidMount() {
        fetch('http://localhost:8080/questions/get')
        .then(results => {
          return results.json();
        }).then(data => {
          let questions = data.map((el) => {
            return ({
                key: el.id,
                question: el.question,
                value: el.answer
            })
          })
          this.setState({questions: questions});
        })
    }

    render() {
    return (
        <div className='faq-question'>
            <h2 style={{margin: '20px 20%'}}>FAQ</h2>
            <ul>
            {
                this.state.questions.map(el => {
                    return <li key={el.key}><big>{el.question}</big><br/>{el.value}</li>
                })
            }
            </ul>
        </div>
    );
    }
}

export default Questions;