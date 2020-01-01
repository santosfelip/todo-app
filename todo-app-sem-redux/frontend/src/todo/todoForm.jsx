import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton'

export default props => {
    const key = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.search() : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.clear()
        }
    }
    
    
    return (
        <div role='form' className='todoForm'>
            
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={key}
                    value={props.description}></input>
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}/>

                <IconButton style='info' icon='search'
                onClick={props.search}/>

                <IconButton style='default' icon='close'
                onClick={props.clear}/>
            </Grid>
        </div>
    )
}