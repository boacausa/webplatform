import React, { PureComponent, Fragment } from 'react';
import NavBar from './NavBar';

const Header = () => (
  <div className='row'>
    <div className='col-lg-12'>
      <h1 className='page-header'>ONGs</h1>
    </div>
  </div>
);

const Actions = () => (
  <div className='panel panel-default'>
    <div className='panel-heading'>
      Ações
    </div>
    <div className='panel-body'>
      <a href='<%= new_ngo_area_ngo_path %>' className='btn btn-primary'>Cadastrar</a>
    </div>
  </div>
);

const ListItem = ({ id, social_name, fantasy_name, email, site }) => (
  <tr>
    <td>{id}</td>
    <td>{social_name}</td>
    <td>{fantasy_name}</td>
    <td>{email}</td>
    <td>{site}</td>
  </tr>
);

const List = ({ items, isFetched }) => (
  <div className='panel panel-default'>
    <div className='panel-heading'>
      ONGs
    </div>
    <div className='panel-body'>
      <div className='table-responsive'>
        <table className='table table-striped table-bordered table-hover'>
          <thead>
          <tr>
            <th>#</th>
            <th>Razão Social</th>
            <th>Nome Fantasia</th>
            <th>E-mail</th>
            <th>Site</th>
          </tr>
          </thead>
          <tbody>
            {isFetched ? items.map(item => <ListItem key={item.id} {...item} />) : <tr><td>Carregando...</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

class NGOs extends PureComponent {
  componentDidMount() {
    this.props.fetchNgos();
  }

  render() {
    return (
      <Fragment>
        <NavBar />

        <div id='page-wrapper' style={{ minHeight: '931px' }}>
          <Header />

          <div className='row'>
            <div className='col-lg-12'>
              <Actions />
              <List
                items={this.props.items}
                isFetched={this.props.isFetched}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NGOs;
