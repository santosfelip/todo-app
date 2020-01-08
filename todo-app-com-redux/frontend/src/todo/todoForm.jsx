import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search }  from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if(e.key === 'Enter') {
            e.shiftKey ? this.props.search() : this.props.handleAdd()
        } else if(e.key === 'Escape') {
            props.clear()
        }
    }

    render() {
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
                    onClick={this.props.handleAdd}/>

                    <IconButton style='info' icon='search'
                    onClick={this.props.search}/>

                    <IconButton style='default' icon='close'
                    onClick={this.props.clear}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)