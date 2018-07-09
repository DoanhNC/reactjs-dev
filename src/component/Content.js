import React, { Component }
from 'react';
import Item from './Content/Items';
import Modal from 'react-bootstrap-modal';
class Content extends Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            'isShowModal' : false
        };
    };
    handleToggle(){
        this.setState({
            'isShowModal' : true
        });
    };
    closeModal(){
        this.setState({
            'isShowModal' : false
        });
    } 
    save(){
//        this.setState({
//            'isShowModal' : false
//        });
    } 
    render() {
        var items = this.props.items.map((val, key) => <Item key={key} val={val} index={key}/>);
        return (
                <div className="panel">
                        <div className="panel-body">
                          <div>
                            <button className="btn btn-primary btn-labeled fa fa-plus" onClick={this.handleToggle}> Thêm mới</button>
                            <button className="btn btn-default btn-labeled fa disabled">Xóa</button>
                          </div>
                          <table className="table table-striped table-hover table-record">
                            <thead>
                              <tr>
                                <th className="center">
                                  <input type="checkbox" />
                                </th>
                                <th className="center">&nbsp;</th>
                                <th className="center">STT</th>
                                <th className="center">Mã nhóm</th>
                                <th className="center">Tên nhóm</th>
                                <th className="center">Trạng thái</th>
                              </tr>
                            </thead>
                            <tbody>
                            {items}
                            </tbody>
                          </table>
                        </div>
                         <Modal show={this.state.isShowModal} onHide={this.closeModal} aria-labelledby="ModalHeader">
                            <Modal.Header closeButton>
                              <Modal.Title id='ModalHeader'>Thông tin nhóm</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <form>
                                <div className="form-group">
                                  <label htmlFor="codeGroup">Mã nhóm:</label>
                                  <input type="text" className="form-control" id="codeGroup" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="nameGroup">Tên nhóm:</label>
                                  <input type="text" className="form-control" id="nameGroup" />
                                </div>
                                <div className="checkbox">
                                  <label htmlFor="status"><input type="checkbox" id="status" /> Hoạt động</label>
                                </div>
                              </form>
                            </Modal.Body>
                            <Modal.Footer>
                              <button className='btn btn-primary' onClick={this.save}>
                                Ghi lại
                              </button>
                              <Modal.Dismiss className='btn btn-default'>Hủy</Modal.Dismiss>
                            </Modal.Footer>
                          </Modal>
                 </div>

                );
    }
}

export default Content;



