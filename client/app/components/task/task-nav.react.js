import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import IconButton from 'material-ui/IconButton';
import Reorder from 'material-ui/svg-icons/action/reorder';
import * as Colors from 'material-ui/styles/colors';

export default class TaskNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const logoStyle = {
      fontWeight: 'bold',
      fontSize: 24,
      color: Colors.white
    };
    const titleStyle = {
      fontSize: 24,
      color: Colors.white
    };
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            {/* handle reorder href to open SideMenu */}
            <IconButton>
              <Reorder />
            </IconButton>
            <ToolbarTitle style={logoStyle} text="Team Dino" />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            {/* insert onClick/onTapTouch to ArrowBack */}
            <ArrowBack
              />
            <ToolbarSeparator />
            {/* insert onClick/onTapTouch to RaisedButton */}
            <RaisedButton
              label="Logout"
              labelPosition="before"
              primary={true}
              icon={<PowerSettingsNew />}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
