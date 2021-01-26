import React, { Component } from 'react'
import Image from '../../components/API/Image'


class Blog extends Component {

    render() {
        return (
            <>
                <div className="my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div id="carousel-captions" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <Image />
                                </div>
                                <a className="carousel-control-prev" href="#carousel-captions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-captions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Blog