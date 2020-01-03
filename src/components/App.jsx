import React, { Component } from 'react';
import LoginModal from './Login';
import NavBar from './NavBar';

class App extends Component {
    state = { isLoginModalOpen: false }
    handleLoginModal = action => {
        if (action === 1) this.setState({ isLoginModalOpen: true });
        else this.setState({ isLoginModalOpen: false });
      };
    
    render() { 
        return ( <div>
            <LoginModal isOpen={this.state.isLoginModalOpen} handleLoginModal={this.handleLoginModal} />
            <NavBar handleLoginModal={this.handleLoginModal}/>
        </div> );
    }
}
 
export default App;