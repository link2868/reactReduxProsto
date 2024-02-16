import React from "react";
import { Navigate } from "react-router-dom";

// export const withAuthNavigate = (Component) => {
//   class NavigateComponent extends React.Component {
//     render() {
//       if (!this.props.resultAuth) {
//         return <Navigate to={"/login"} />;
//       }
//       return <Component {...this.props} />;
//     }
//   }
//   return NavigateComponent;
// };

export const withAuthNavigate = (Component) => {
  const NavigateComponent = (props) => {
    if (!props.resultAuth) {
      return <Navigate to={"/login"} />;
    }
    return <Component {...props} />;
  };
  return NavigateComponent;
};
