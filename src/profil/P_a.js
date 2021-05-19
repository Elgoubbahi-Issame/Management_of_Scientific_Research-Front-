import React from 'react'

function P_a() {
    return (
        // <div className="container">
        //     <div className="main-table">
        //         <div className="title">
        //         <h2>All New Accounts</h2>
        //         </div>
        //         <div className="user_table">
        //             <table>
        //                 <thead>
        //                     <tr>
        //                         <td>Name</td>
        //                         <td>Email</td>
        //                         <td>User Type</td>
        //                         <td>Joined</td>
        //                         <td><i className="las la-plus"></i> </td>

        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <tr>
        //                         <td>Amazal</td>
        //                         <td>Amazal@gmail.com</td>
        //                         <td>chef equipe</td>
        //                         <td>25 May, 2021</td>
        //                         <td><i className="las la-trash-alt"></i></td>
        //                         <td><i class="las la-user-edit"></i></td>

        //                     </tr>
        //                     <tr>
        //                         <td>Ennaji</td>
        //                         <td>Ennaji@gmail.com</td>
        //                         <td>chef Labo</td>
        //                         <td>25 May, 2021</td>
        //                         <td><i className="las la-trash-alt"></i></td>
        //                         <td><i class="las la-user-edit"></i></td>
        //                     </tr>
        //                     <tr>
        //                         <td>Idbrahim</td>
        //                         <td>Idbrahim@gmail.com</td>
        //                         <td>prof</td>
        //                         <td>25 May, 2021</td>
        //                         <td><i className="las la-trash-alt"></i></td>
        //                         <td><i class="las la-user-edit"></i></td>

        //                     </tr>
        //                     <tr>
        //                         <td>Kouti</td>
        //                         <td>Kouti@gmail.com</td>
        //                         <td>chef equipe</td>
        //                         <td>25 May, 2021</td>
        //                         <td><i className="las la-trash-alt"></i></td>
        //                         <td><i class="las la-user-edit"></i></td>

        //                     </tr>
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
            
        // </div>
        <div className="container ">

        <div className="projects1">
            <div className="card">
            <div className="card-header text-center">
                <h3>New All Accounts</h3>
                {/* <button>See all <span className="las la-arrow-right"></span></button> */}
            </div>
            <div className="card-body">
                <div className="table-responsive">
                <table width="100%" className="text-center">
                    <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Email </th>
                        <th>User Type </th>
                        <th>Joined</th>
                        <th><i className="las la-plus" onclick="addd()"></i></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody id="y">
                            <tr>
                                 <td>Amazal</td>
                                 <td>Amazal@gmail.com</td>
                                 <td>chef equipe</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>
                            </tr>   
                                
                            <tr>
                                 <td>Ennaji</td>
                                 <td>Ennaji@gmail.com</td>
                                 <td>chef Labo</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>
                             </tr>
                                 <tr>
                                 <td>Idbrahim</td>
                                 <td>Idbrahim@gmail.com</td>
                                 <td>prof</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>

                             </tr>
                        
                                <tr>
                                 <td>Kouti</td>
                                 <td>Kouti@gmail.com</td>
                                 <td>chef equipe</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>

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

export default P_a
