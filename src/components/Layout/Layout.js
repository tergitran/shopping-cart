import React, { Fragment } from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const Layout = (props) => {
    const { itemsInCart } = props;
    return (
        <Fragment>
            <ToolBar itemsInCart={itemsInCart}></ToolBar>
            {/* <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} /> */}
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;