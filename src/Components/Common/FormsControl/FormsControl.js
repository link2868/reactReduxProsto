import React from "react";

import style from "./FormControl.module.css";

// export const Textarea = ({ input, meta, ...props }) => {
//   const isError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl + " " + (isError ? style.error : "")}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {isError ? <span>{meta.error}</span> : ""}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const isError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl + " " + (isError ? style.error : "")}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {isError ? <span>{meta.error}</span> : ""}
//     </div>
//   );
// };

const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
      <div className={style.formControl + " " + (isError ? style.error : "")}>
        <div>
          <Element {...input} {...props} />
        </div>
        {isError ? <span>{meta.error}</span> : ""}
      </div>
    );
  };

export const Textarea = Element("textarea");
export const Input = Element("input");
