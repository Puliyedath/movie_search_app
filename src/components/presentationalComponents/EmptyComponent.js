import React from 'react';

const style = {
    border: '2px dashed black',
    minHeight: '100px',
    height: '100px',
    textAlign: 'center',
    verticalAlign: 'middle',
    paddingTop: '25px',
};

function withEmptyComponent(WrappedComponent) {
    return class EmptyComponent extends React.Component {
        render() {
            if (Object.keys(this.props.movieCards).length == 0) {
                return (
                    <div className="rounded m-5" style={style}>
                    No Results Available
                    </div>
                );
            }

            return <WrappedComponent {...this.props} />;
        }
    }
}


export default withEmptyComponent;
