import React, { Component }  from 'react'


export class P_SR extends Component {
    change(e){
        // alert(e.currentTarget.id);
            document.getElementById(e.currentTarget.id).classList.toggle('chng');
    }
   
    render() {
    return (
        <div className="container ">

            <div className="projects1">
                <div className="card">
                <div className="card-header text-center">
                    <h3>Recent projocts</h3>
                    {/* <button>See all <span className="las la-arrow-right"></span></button> */}
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table width="100%" className="text-center">
                        <thead className="text-center">
                        <tr>
                            <th>Labo/Equipe Title </th>
                            <th>Chef of Labo/Equipe </th>
                            <th>Team </th>
                            <th>Type</th>
                            <th><i className="las la-plus" onclick="addd()"></i> </th>
                        </tr>
                        </thead>
                        <tbody id="y">

                                    <tr onClick={this.change} id="col1" className="panel-title" data-toggle="collapse" href="#collapse1">
                                        <td>App Devlop</td>
                                        <td>Ansari</td>
                                        <td className="td-team1">
                                        <div className="img-1"></div>
                                        <div className="img-2"></div>
                                        <div className="img-3"></div>
                                        </td>
                                        <td>
                                        <span className="badge
                                        success">Labo</span>
                                        </td>
                                        <td><i className="las la-trash-alt"></i></td>
                                    </tr>   
                                    
                                    <tr id="collapse1" className="panel-collapse collapse eq">
                                        <td>siteWeb</td>
                                        <td>Amazal</td>
                                        <td className="td-team1">
                                        <div className="img-1"></div>
                                        <div className="img-2"></div>
                                        <div className="img-31">more</div>
                                        </td>
                                        <td>
                                        <span className="badge
                                        warning">Equipe</span>
                                        </td>
                                        <td><i className="las la-trash-alt"></i></td>
                                    </tr>
                                    <tr id="collapse1" className="panel-collapse collapse eq">
                                        <td>siteWeb</td>
                                        <td>Samira</td>
                                        <td className="td-team1">
                                        <div className="img-1"></div>
                                        <div className="img-2"></div>
                                        <div className="img-31">more</div>
                                        </td>
                                        <td>
                                        <span className="badge
                                        warning">Equipe</span>
                                        </td>
                                        <td><i className="las la-trash-alt"></i></td>
                                    </tr>
                            
                        <tr>
                            <td>Disign</td>
                            <td>Naji</td>
                            <td className="td-team1">
                            <div className="img-1"></div>
                            <div className="img-2"></div>
                            <div className="img-3"></div>
                            </td>
                            <td>
                            <span className="badge
                            success">Labo</span>
                            </td>
                            <td><i className="las la-trash-alt"></i></td>
                        </tr>
                        <tr>
                            <td>frontEnd</td>
                            <td>Kouti</td>
                        
                            <td className="td-team1">
                            <div className="img-1"></div>
                            <div className="img-2"></div>
                            <div className="img-3"></div>
                            </td>
                            <td>
                            <span className="badge
                            warning">Equipe</span>
                            </td>
                            <td><i className="las la-trash-alt"></i></td>
                        </tr>
                        <tr>
                            <td>siteWeb</td>
                            <td>Afdil</td>
                            <td className="td-team1">
                            <div className="img-1"></div>
                            <div className="img-2"></div>
                            <div className="img-31">more</div>
                            </td>
                            <td>
                            <span className="badge
                            warning">Equipe</span>
                            </td>
                            <td><i className="las la-trash-alt"></i></td>
                        </tr>
                        </tbody>
                    </table>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
}
export default P_SR
