import React, { Fragment } from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
            <div className={classes.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translate(Y-100vh)',
                opacity: props.show ? '1' : '0',
                pointerEvents: props.show ? 'auto' : 'none'
            }}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default modal
