import React, {Component} from 'react'
import _ from 'lodash'

class NumberInput extends Component {
    validateInput = ({target}) => {
        const {name, value} = target
        if(!isNaN(target.value)){
          this.props.handleChange(name, _.toNumber(value))
        }else{
            this.props.handleErrorMessage(this.props.name, `${this.props.name} is not a number`)
        }
    }

    render(){
        return(
            <input
                name = {this.props.name}
                onChange = {this.validateInput}/>
        )
    }
}

export default NumberInput