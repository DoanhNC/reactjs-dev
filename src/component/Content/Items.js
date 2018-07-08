import React, { Component }
from 'react';

class Items extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

                              
                               <tr>
                                <td className="center">
                                  <input type="checkbox" />
                                </td>
                                <td className="center">&nbsp;</td>
                                <td>STT</td>
                                <td>Mã nhóm</td>
                                <td>Tên nhóm</td>
                                <td>Trạng tdái</td>
                              </tr>

                );
    }
}

export default Items;



