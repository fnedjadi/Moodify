import React from 'react';
import { Loading } from 'element-react';
import { Button } from 'element-react';

import 'element-theme-default';

class LoadingSearch extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          fullscreen: false,
          onSearchClick: props.onSearchClick
        }
      }
      
      onClick() {
        clearTimeout(this.timeout);
      
        this.timeout = setTimeout(() => {
          this.setState({
            fullscreen: false
          });
          this.state.onSearchClick();
        }, 3000); // TODO : after getting list
      
        this.setState({
          fullscreen: true
        });
      }
      
      render() {
        return (
          <div>
            <Button type="success" plain={true} onClick={this.onClick.bind(this)}>Search</Button>
            {
              this.state.fullscreen && <Loading fullscreen={true} />
            }
          </div>
        )
      }
}

export default LoadingSearch;