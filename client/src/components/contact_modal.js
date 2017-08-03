import React,  { Component } from 'react';
import './modal.css';

class Confirm extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleConfirm(){
        this.props.onClick();
        this.setState({showModal: false})
    }
        
    render() {
        const {text, className, message, title} = this.props;
        if(this.state.showModal){
            return (
                <div className="del-modal">
                    <div className="del-modal-content">
                        <input type="text" className="form-control mb-3" placeholder="Name"/>
                        <textarea className="form-control mb-3" rows="5" placeholder="About me"></textarea>
                        <textarea className="form-control mb-3" rows="6" placeholder="Goals"></textarea>
                        <textarea className="form-control mb-3"     rows="7" placeholder="Questions"></textarea>
                        <input type="text" className="form-control mb-3" placeholder="Email"/>
                        <button onClick={() => this.handleConfirm()} className="btn btn-outline-success mr-2">Submit</button>
                        <button onClick={() => {this.setState({showModal: false})}} className="btn btn-outline-danger">Cancel</button>
                    </div>
                </div>
            )
        }
        return (
            <button className={className} onClick={() => this.setState({showModal: true})}>{text}</button>
        )
    }
}

export default Confirm;