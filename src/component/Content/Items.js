import React, { Component }
from 'react';

class Items extends Component {
    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem(){
        let index = this.props.index;
        this.props.removeItem(index);
    }
    render() {
        let divStatus;
        if(this.props.val.status){
            divStatus = <span className="label label-table label-success">Hoạt động</span>
        }else{
            divStatus = <span className="label label-table label-default">Không hoạt động</span>
        }
        return (
                               <tr>
                                <td className="center">
                                  <input type="checkbox" />
                                </td>
                                <td className="center">
                                    <div className="dropdown">
                                      <a href="javascript:;" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bars" /></a>
                                      <ul className="dropdown-menu">
                                        <li><a href="javascript:;">Sửa</a></li>
                                        <li><a href="javascript:;" onClick={this.removeItem}>Xóa</a></li>
                                      </ul>
                                    </div>
                                </td>
                                <td>{this.props.index + 1}</td>
                                <td>{this.props.val.codeGroup}</td>
                                <td>{this.props.val.nameGroup}</td>
                                <td>{divStatus}</td>
                              </tr>

                );
    }
}

export default Items;



