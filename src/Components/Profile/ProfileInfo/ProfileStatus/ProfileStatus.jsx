import React from "react";

import style from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => { 
    
    if (this.props.isOwner) {
      this.setState({ editMode: true });
    }
  };

    deActivateEditMode = () => {    
      this.setState({ editMode: false });
      this.props.updateUserStatus(this.state.status);
  };

  onChageStatus = (e) => { 
    this.setState({ status: e.currentTarget.value });
  }

  componentDidUpdate(prevProps, prevState) { 
    if (prevProps.status !== this.props.status) { 
      this.setState({status: this.props.status})
    }
  }

  render() {  
    return (
      <div  className={style.statusBlock}>
        {!this.state.editMode &&
          <div>
            <span onClick={this.activateEditMode}>
              {this.props.status || "No status"}
            </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              type="text"
              onChange={this.onChageStatus}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            />
          </div>
       }
      </div>
    );
  }
}

export default ProfileStatus;
