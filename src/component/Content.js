import React, { Component }
from 'react';

class Content extends Component {
    render() {
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
                                <th>ID</th>
                                <th>Mã nhóm</th>
                                <th>Tên nhóm</th>
                                <th>Trạng thái</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="center">
                                  <input type="checkbox" />
                                </td>
                                <td className="tbl-actions center">
                                  <div className="dropdown">
                                    <a href="javascript:;" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bars" /></a>
                                    <ul className="dropdown-menu">
                                      <li><a href="javascript:;">Sửa</a></li>
                                      <li><a href="javascript:;">Xóa</a></li>
                                    </ul>
                                  </div>
                                </td>
                                <td>1</td>
                                <td>anc222</td>
                                <td><a href="javascript:;" className="btn-link">Nguyễn văn a</a></td>
                                <td>
                                  <span className="label label-table label-success">Hoạt động</span>
                                  <span className="label label-table label-default">Không hoạt động</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
          </div>

                );
    }
}

export default Content;



