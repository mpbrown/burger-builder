import React, { Component, Fragment } from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Fragment>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                ></Backdrop>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translate(Y-100vh)",
                        opacity: this.props.show ? "1" : "0",
                        pointerEvents: this.props.show ? "auto" : "none",
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Modal;
