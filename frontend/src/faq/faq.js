import React from 'react';

import Link from './faq-link';
import Questions from './questions';
import FAQHeader from './faq-header';

class FAQ extends React.Component {
  render() {
    return (
      <div id='faq'>
        <FAQHeader/>
        <Questions/>
        <Link/>
      </div>
    );
  }
}

export default FAQ;