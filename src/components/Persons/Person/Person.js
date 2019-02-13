import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
                <Fragment>
                    <div className="Person">
                        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                        <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                        <p key="i2" >{this.props.children}</p>
                        <input 
                            //ref={(inputEl) => {this.inputElement = inputEl}}
                            ref={this.inputElementRef}
                            key="i3" 
                            type="text" 
                            onChange={this.props.changed} 
                            value={this.props.name} 
                        />
                    </div>
                </Fragment>
            );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person);