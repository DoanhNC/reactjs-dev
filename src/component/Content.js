import React, { Component }
from 'react';
import Item from './Content/Items';
class Content extends Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            'isShowModal' : false
        };
    };
    handleToggle(){
        this.setState({
            'isShowModal' : true
        });
    };
    render() {
        var items = this.props.items.map((val, key) => <Item key={key} val={val} index={key}/>);
        let divModal;
        if(this.state.isShowModal){
          divModal =  <div id="myModal" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title">Modal Header</h4>
                                </div>
                                <div className="modal-body">
                                  <p>Some text in the modal.</p>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                              </div>

                            </div>
                          </div>
        }else{
            divModal = <div></div>
        }
        return (
                <div className="panel">
                        <div className="panel-body">
                          <div>
                            <button className="btn btn-primary btn-labeled fa fa-plus" onClick={this.handleToggle}> Thêm mới</button>
                            <button className="btn btn-default">Xóa</button>
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
                       {divModal}
                 </div>

                );
    }
}

export default Content;



