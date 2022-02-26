import React, { Component } from "react";

export default class Counter extends Component {
    // here you create the state of this class, you can also create inside constructor
    state = {
        numberCameViaProps: this.props.initialValue ?? 0,
        number: 7,
        step: this.props.step ?? 1,
    };

    // in this style of function you must call it like () => this.increment()
    increment() {
        this.setState({
            number: this.state.number + this.state.step,
        });
    }

    //in this style of function you can call it like this.incrementArrowFunction. (this) from Arrow functions always targets the current object, not the window object
    incrementArrowFunction = () => {
        this.setState({
            number: this.state.number + this.state.step,
        });
    };

    dicrementArrowFunction = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    };

    alterStep = (e) => {
        this.setState({ step: +e.target.value });
    };

    // bind the this inside the increment method, so the (this) will not be mixed with the (this) from the current (this) from window
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);

        // you could also create the state here
        // this.state = {
        //     numberCameViaProps: props.initialValue ?? 0,
        //     number: 7,
        //     step: props.step ?? 1,
        // };
    }

    renderForm() {
        return (
            <>
                <input
                    type="number"
                    min={0}
                    max={1000}
                    value={this.state.step}
                    onChange={this.alterStep}
                />

                <button onClick={() => this.increment()}>
                    function increment
                </button>
                <button onClick={this.incrementArrowFunction}>
                    arrow function increment
                </button>
                <button onClick={this.dicrementArrowFunction}>
                    arrow function dicrement
                </button>
                <button onClick={this.increment}>
                    function increment bound in constructor
                </button>
            </>
        );
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                {/* to use the props, you only need to access via*/}
                <h2>{this.props.initialValue}</h2>
                <h2>{this.state.numberCameViaProps}</h2>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>
        );
    }
}
