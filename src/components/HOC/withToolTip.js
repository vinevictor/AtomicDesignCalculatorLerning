import React, { Component } from 'react';
import '../../App.css';

function withToolTip(WrappedComponent, textTip) {
  return class WithToolTip extends Component {
    state = {
      showTooltip: false
    };

    handleMouseEnter = () => {
      this.setState({ showTooltip: true });
    };

    handleMouseLeave = () => {
      this.setState({ showTooltip: false });
    };

    render() {
      return (
        <div 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <WrappedComponent {...this.props} />
          {this.state.showTooltip && (
            <div className='toolTip'>
              {textTip}
            </div>
          )}
        </div>
      );
    }
  };
}

export default withToolTip;
