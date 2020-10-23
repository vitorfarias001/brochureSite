import React from 'react';

const Inicio = props => {
    return (
        <div>
            {/* Container (About Section) */}
            <div id='about' className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>About Company Page</h2><br />
                        <h4>Empresa de teste</h4><br />
                        <p></p>
                        <br /><button className='btn btn-default btn-lg'>Entrar em contato</button>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-signal logo'></span>
                    </div>
                </div>
            </div>

            <div className='container-fluid bg-grey'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo '></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>Our Values</h2><br />
                        <h4><strong>Missão :</strong> TESTE.</h4><br />
                        <p><strong>Visão:</strong> Teste</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Inicio;