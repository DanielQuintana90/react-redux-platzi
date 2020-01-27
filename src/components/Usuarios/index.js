import React from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Tabla from './Tabla';

class Usuarios extends React.Component {
  async componentDidMount() {
    if(!this.props.usuarios.length){
      await this.props.traerTodos();
    }    
  }

  ponerContenido = () => {
    if (this.props.cargando) return <Spinner />;

    if (this.props.error) return <Fatal mensaje={this.props.error} />;

    return <Tabla />;
  };

  render() {
    return (
      <div>
        <h1>Uruarios</h1>
        {this.ponerContenido()}
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
