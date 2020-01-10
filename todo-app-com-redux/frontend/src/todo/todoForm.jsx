import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, HandleClear }  from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, HandleClear } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if(e.key === 'Escape') {
            HandleClear()
        }
    }

    render() {
        const { add, search, description, HandleClear } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                    onClick={() => add(description)}/>

                    <IconButton style='info' icon='search'
                    onClick={search}/>

                    <IconButton style='default' icon='close'
                    onClick={HandleClear}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, HandleClear },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)