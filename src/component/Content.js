import React, { Component }
from 'react';
import Item from './Content/Items';
class Content extends Component {
    constructor(props){
        super(props);
        console.log('anh doanh', this.props.items);
        
    }
    render() {
        var items = this.props.items.map((val, key) => <Item key={key} val={val} index={key}/>);
        
        return (
                <div className="panel">
                        <div className="panel-body">
                          <div>
                            <button className="btn btn-primary btn-labeled fa fa-plus">Thêm mới</button>
                            <button className="btn btn-default">Xóa</button>
                          </div>
                          <table className="table table-striped table-hover table-record">
                            <thead>
                              <tr>
                                <th className="center">
                                  <input type="checkbox" />
                                </th>
                                <th className="center">&nbsp;</th>
                                <th>STT</th>
                                <th>Mã nhóm</th>
                                <th>Tên nhóm</th>
                                <th>Trạng thái</th>
                              </tr>
                            </thead>
                            <tbody>
                            {items}
                            </tbody>
                          </table>
                        </div>
          </div>

                );
    }
}

export default Content;



