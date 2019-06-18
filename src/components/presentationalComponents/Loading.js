import React from 'react';

function withLoadingIcon(WrappedComponent) {
  return class Loading extends React.Component {
    render(){
      if (this.props.ui.loading) {
        return (
            <img className="alignnone loading"
                 src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"
                 alt="" width="80" height="80" />
          
        );
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLoadingIcon;

