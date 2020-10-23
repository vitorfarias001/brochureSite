import React from 'react';

const Precos = props => {
    return (
        <div id='pricing' className='container-fluid'>
            <div className='text-center'>
                <h2>Preços</h2>
                <h4>Escolha um plano de pagamento que funcione para você</h4>
            </div>
            <div className='row '>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Basic</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>$20</strong> </p>
                            <p><strong>$15</strong> </p>
                            <p><strong>$5</strong> </p>
                            <p><strong>$2</strong> </p>
                            <p><strong></strong> </p>
                        </div>
                        <div className='panel-footer'>
                            <h3>$19</h3>
                            <h4>Por mês</h4>
                            <button className='btn btn-lg'>Sign Up</button>
                        </div>
                    </div>      
                </div>     
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Pro</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>$50</strong> </p>
                            <p><strong>$25</strong> </p>
                            <p><strong>$10</strong> </p>
                            <p><strong>$5</strong> </p>
                            <p><strong></strong></p>
                        </div>
                        <div className='panel-footer'>
                            <h3>$29</h3>
                            <h4>Por Mês</h4>
                            <button className='btn btn-lg'>Sign Up</button>
                        </div>
                    </div>      
                </div>       
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Premium</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>100</strong> </p>
                            <p><strong>50</strong> </p>
                            <p><strong>25</strong> </p>
                            <p><strong>10</strong> </p>
                            <p><strong></strong> </p>
                        </div>
                        <div className='panel-footer'>
                            <h3>$49</h3>
                            <h4>Por mês</h4>
                            <button className='btn btn-lg'>Sign Up</button>
                        </div>
                    </div>      
                </div>    
            </div>
        </div>
    );
};

export default Precos;