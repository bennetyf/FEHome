import React from 'react';
import style from './InputStyle.scss';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPrefix:false
        }
    }

    componentWillMount(){
        if(this.props.prefix !== undefined){
            this.setState({...this.state,isPrefix:true});
        }else{
            this.setState({...this.state,isPrefix:false});
        }
    }

    render(){
        return (
            <div className={style.input_wrapper}>
                {this.state.isPrefix ?
                 <span className={style.input_prefix}>{this.props.prefix}</span>:
                 null}

                 <input
                    className={this.state.isPrefix?style.inner_input:`${style.inner_input} ${style.inner_input_wo_prefix}`}
                    id={this.props.id}
                    type={this.props.type}
                    name={this.props.name}
                 />
            </div>
        );
    }
}
export default Input;