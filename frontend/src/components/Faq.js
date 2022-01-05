import React from 'react'
import '../css/md.css'
import { Link } from 'react-router-dom'
const Faq = () => {
    return (
        <div className='abcd1'>
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container'>

                <div className='my-5'>
                    <section class="accordion-section clearfix mt-3" aria-label="Question Accordions">
                        <div class="container">

                            <h2 className='my-5'>Frequently Asked Questions </h2>
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
                                        <h3 class="panel-title">
                                            <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse10" aria-expanded="true" aria-controls="collapse0">
                                                Can I analyze the test results?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse10" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                        <div class="panel-body px-3 mb-4">
                                            <p><h4> Yes, you can analyze the test results in result section.</h4> </p>
                                            <ul>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
                                        <h3 class="panel-title">
                                            <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Can I get the details of users who have taken the test?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                        <div class="panel-body px-3 mb-4">
                                            <p><h4>Yes, you can get the details you want, such as Name, Email-Id, phone No etc.</h4></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
                                        <h3 class="panel-title">
                                            <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                Is there any software installation required?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                        <div class="panel-body px-3 mb-4">
                                            <p><h4>Software installation is not required for conducting online examinations on the web.</h4></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading p-3 mb-3" role="tab" id="heading3">
                                        <h3 class="panel-title">
                                            <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                Can I set the date and time for a test?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                        <div class="panel-body px-3 mb-4">
                                            <p><h4>Yes, you can set the date and time for a test.</h4></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
                
            </div>
            
        </>
        </div>

    )
}

export default Faq
