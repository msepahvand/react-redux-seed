import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {


  render() {
    return (
    <section>
        <article>
            <p>{JSON.stringify(this.props.user, null, 2)}</p>
        </article>
    </section>)
  }
}

const mapStateToProps = function(state){
  return {
          user: state.user,
  }
}
export default connect(
  mapStateToProps
)(About)