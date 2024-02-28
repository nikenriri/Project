import React, { Component } from "react";

/**
 * Allows component to be imported in an asynchronous way. Components imported in this way will be compiled into
 * a seperate chunk during build, which loads only when required.
 * @param {object} importComponent Component to import
 */
export const asyncComponent = (importComponent) => {
    class AsyncComponent extends Component {

        _isMounted = false;

        state = {
            component: null
        };

        async componentDidMount() {
            this._isMounted = true;
            const { default: component } = await importComponent();
            // console.log("Component loaded", component)
            if (this._isMounted) {
                this.setState({ component });
            }
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            const C = this.state.component;

            return C && <C {...this.props} />;
        }
    }

    return AsyncComponent;
}