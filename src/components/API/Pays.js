import React, {Component} from 'react'

class Pays extends Component{

    state = {
        values : []
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
            .then((reponse) =>{
                return reponse.json()
            })
            .then((result) =>{
                this.setState({values : result})
            })
    }
    render(){
        return(
            <>
            {
                this.state.values.map((item,index) =>(
                <option value={item.name}>{item.name}</option>
                ))
            }
            </>
        )
    }
}

export default Pays