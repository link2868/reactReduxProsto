import React, { useEffect, useState } from "react";

import style from "./ProfileStatus.module.css";

const ProfileStatusFunction = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => { 
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => { 
        if (props.isOwner) {
            setEditMode(true)
        }
    }

    const deActivateEditMode = () => {   
        setEditMode(false)
        props.updateUserStatus(status) 
    };

    const onChageStatus = (e) => { 
     setStatus( e.currentTarget.value );
    }
    
    return (
      <div  className={style.statusBlock}>
            {!editMode &&
                <div>
                    <span onClick={activateEditMode}>
                        {props.status || "No status"}
                    </span>
                </div>
            }
            {editMode &&    
                <div>
                    <input
                        type="text"
                        autoFocus="true"
                        onBlur={deActivateEditMode}
                        value={status}
                        onChange={onChageStatus}
                    />
                </div>
            }
      </div>
    );
 
}

export default ProfileStatusFunction;
