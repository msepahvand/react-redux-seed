import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDetails } from '../../modules/user'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      userName: evt.target.value
    });
  }

  render() {
    return (
    <div>
        <input name="UserName" type="text" value={this.state.userName} onChange={evt => this.updateInputValue(evt)}/>
    
        <button type="button"
        onClick={() => this.props.getDetails(this.state.userName)} disabled={!this.state.userName}>Get Github Details</button>
        
    </div>)
  }
}

const mapStateToProps = function(state){
   return {
      user: state.user,
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({
   getDetails
}, dispatch)

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Home)