import React from 'react'
import Hel from './helmi.jpg'


function P_content() {
    return (
        <main>
            <div class="cards">
            <div class="card-single">
                <div>
                <h1>50</h1>
                <span>Customers</span>
                </div>
                <div>
                <span class="las la-users"></span>
                </div>
            </div>

            <div class="card-single">
                <div>
                <h1>70</h1>
                <span>projects</span>
                </div>
                <div>
                <span class="las la-clipboard-list"></span>
                </div>
            </div>
          
            <div class="card-single">
                <div>
                <h1>150</h1>
                <span>Visitors</span>
                </div>
                <div>
                <span class="las la-user"></span>
                </div>
            </div>
        </div>
        <div class="recent-grid">
          <div class="projects">
            <div class="card">
              <div class="card-header">
                <h3>Recent projocts</h3>
                <button>See all <span class="las la-arrow-right"></span></button>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table width="100%" className="text-center">
                    <thead className="text-center">
                      <tr>
                        <th>Labo/Equipe Title </th>
                        <th>Chef of Labo/Equipe </th>
                        <th>Team </th>
                        <th>Type</th>
                        {/* <th><i class="las la-plus" onclick="addd()"></i> </th> */}
                      </tr>
                    </thead>
                    <tbody id="y">

                                <tr class="panel-title" data-toggle="collapse" href="#collapse1">
                                    <td>App Devlop</td>
                                    <td>Ansari</td>
                                    <td class="td-team">
                                    <div class="img-1"></div>
                                    <div class="img-2"></div>
                                    <div class="img-3"></div>
                                    </td>
                                    <td>
                                    <span class="badge
                                    success">Labo</span>
                                    </td>
                                    {/* <td><i class="las la-trash-alt"></i></td> */}
                                </tr>   
                                
                                <tr id="collapse1" class="panel-collapse collapse">
                                    <td>siteWeb</td>
                                    <td>Amazal</td>
                                    <td class="td-team">
                                    <div class="img-1"></div>
                                    <div class="img-2"></div>
                                    <div class="img-31">more</div>
                                    </td>
                                    <td>
                                    <span class="badge
                                    warning">Equipe</span>
                                    </td>
                                    {/* <td><i class="las la-trash-alt"></i></td> */}
                                </tr>
                                <tr id="collapse1" class="panel-collapse collapse eq">
                                    <td>siteWeb</td>
                                    <td>Samira</td>
                                    <td class="td-team">
                                    <div class="img-1"></div>
                                    <div class="img-2"></div>
                                    <div class="img-31">more</div>
                                    </td>
                                    <td>
                                    <span class="badge
                                    warning">Equipe</span>
                                    </td>
                                    {/* <td><i class="las la-trash-alt"></i></td> */}
                                </tr>
                          
                      <tr>
                        <td>Disign</td>
                        <td>Naji</td>
                        <td class="td-team">
                          <div class="img-1"></div>
                          <div class="img-2"></div>
                          <div class="img-3"></div>
                        </td>
                        <td>
                          <span class="badge
                          success">Labo</span>
                        </td>
                        {/* <td><i class="las la-trash-alt"></i></td> */}
                      </tr>
                      <tr>
                        <td>frontEnd</td>
                        <td>Kouti</td>
                       
                        <td class="td-team">
                          <div class="img-1"></div>
                          <div class="img-2"></div>
                          <div class="img-3"></div>
                        </td>
                        <td>
                          <span class="badge
                          warning">Equipe</span>
                        </td>
                        {/* <td><i class="las la-trash-alt"></i></td> */}
                      </tr>
                      <tr>
                        <td>siteWeb</td>
                        <td>Afdil</td>
                        <td class="td-team">
                          <div class="img-1"></div>
                          <div class="img-2"></div>
                          <div class="img-31">more</div>
                        </td>
                        <td>
                          <span class="badge
                          warning">Equipe</span>
                        </td>
                        {/* <td><i class="las la-trash-alt"></i></td> */}
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
          <div class="customers">
            <div class="card">
              <div class="card-header">
                <h3>New Customers</h3>
                <button>See all <span class="las la-arrow-right"></span></button>
              </div>
              <div class="card-body">
                <div class="customer">
                    <div class="info">
                        <img src={Hel} width="50px" height="50px" alt="" />
                        <div>
                          <h4>hilmi A</h4>
                          <small>devlop</small>
                        </div>
                    </div>
                    <div class="contact">
                      <span class="las la-user-circle"></span>
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                </div>
                <div class="customer">
                  <div class="info">
                      <img src={Hel} width="50px" height="50px" alt="" />
                      <div>
                        <h4>hilmi A</h4>
                        <small>devlop</small>
                      </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
              </div>
              <div class="customer">
                <div class="info">
                    <img src={Hel} width="50px" height="50px" alt="" />
                    <div>
                      <h4>hilmi A</h4>
                      <small>devlop</small>
                    </div>
                </div>
                <div class="contact">
                  <span class="las la-user-circle"></span>
                  <span class="las la-comment"></span>
                  <span class="las la-phone"></span>
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default P_content
