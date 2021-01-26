import React, { Component } from 'react'

class Image extends Component {

    state = {
        values: []
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((reponse) => {
                return reponse.json()
            })
            .then((result) => {
                this.setState({ values: result })
            })
    }
    render() {
        return (
            <>
                    {
                    this.state.values.map((item,index)=>(
                        (index == 0 )?
                            (<div className="carousel-item active">
                                <img className="d-block w-100" alt="" src={item.flag} data-holder-rendered="true"/>
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>) :
                            (<div className="carousel-item">
                                <img className="d-block w-100" alt="" src={item.flag} data-holder-rendered="true"/>
                                <div className="carousel-item-background d-none d-md-block"></div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>)
                        ))
                    }
                    
            </>
        )
    }
}

export default Image