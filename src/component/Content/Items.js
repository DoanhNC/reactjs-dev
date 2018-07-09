import React, { Component }
from 'react';

class Items extends Component {
    constructor(props){
        super(props);
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
                                <td className="center">&nbsp;</td>
                                <td>{this.props.index + 1}</td>
                                <td>{this.props.val.codeGroup}</td>
                                <td>{this.props.val.nameGroup}</td>
                                <td>{divStatus}</td>
                              </tr>

                );
    }
}

export default Items;



