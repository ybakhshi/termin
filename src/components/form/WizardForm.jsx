import React, { Component} from 'react';
import PropTypes from 'prop-types'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import './WizardForm.css';
class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
      progress: 3
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
  setProgress =(value) =>{
    this.setState({progress:value})
  }
  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className ="card card-termin" >
        <div className="card-header  header-termin">
            <div className="progress bg-light">
              <div className="progress-bar bg-success " style={{width:`${this.state.progress}%` }}>{this.state.progress}%</div>
            </div>
        </div>
        {/* <div style ={{backgroundColor:'#e9ecef'}}><hr className ="mt-0 mb-0 ml-5 mr-5 bg-dark"/></div> */}
        <div className ="card-body">
          <div className ="jumbotron m-0">
            {page === 1 && <WizardFormFirstPage setProgress ={this.setProgress} onSubmit={this.nextPage}/>}
            {page === 2 && <WizardFormSecondPage 
                            setProgress ={this.setProgress} 
                            previousPage={this.previousPage}
                            nextPage={this.nextPage} 
                            onSubmit={this.nextPage}
                            />
            }
            {page === 3 && <WizardFormThirdPage setProgress ={this.setProgress} previousPage={this.previousPage} onSubmit={onSubmit}/>}
          </div>
        </div>
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm;