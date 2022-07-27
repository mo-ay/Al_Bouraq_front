import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import FamilyDetails from "views/FamilyDetails";
import Profile from 'views/examples/Profile'
import AllFamilies from 'views/AllFamilies'
import HouseNeeds from 'views/HouseNeeds'
import HouseTypes from 'views/HouseTypes'
import NGOs from "views/NGOs";
import HusbandStatuses from "views/HusbandStatuses";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/user-profile/:id" render={(props)=><Profile {...props}/>}/>
      <Route path="/all-families" render={(props)=><AllFamilies {...props}/>}/>
      <Route path="/control" render={(props)=><HouseNeeds {...props}/>}/>
      <Route path="/house-types" render={(props)=><HouseTypes {...props}/>}/>
      <Route path="/ngos" render={(props)=><NGOs {...props}/>}/>
      <Route path="/husband_statuses" render={(props)=><HusbandStatuses {...props}/>}/>
      <Route path="/familyDetails/:id" render={(props)=><FamilyDetails {...props}/>}/>
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
