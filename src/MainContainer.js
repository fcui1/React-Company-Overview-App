import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
/** 
 *  MainContainer (Component)
 *      Wraps everything that a page needs into it's own component
 * 
*/
class MainContainer extends React.Component {
    render(){
        return(
            <div>
                <NavBar highlight={this.props.sidebar}/>
                <div className="container-fluid container">
                    <div className="row">
                        <div className="main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
           </div>
            
            );
    }
}

export default MainContainer;