import classnames from "classnames";
import React from "react";
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: boolean;
  message?: string;
}
const Input = React.forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref) => {
    const { label, className, error, message, ...rest } = props;
    const styleError = error ? "border-red-500" : "";

    return (
      <div className={classnames("flex flex-col", className)} ref={ref}>
        <label className="text-script_ink text-sm font-medium mb-[2px]">
          {label}
        </label>
        <div
          className={`border rounded-lg items-center flex focus:border-black border-blue_dolphin px-4 py-[6px]
          ${styleError}
          `}
        >
          <input
            {...rest}
            className={`h-[100%] leading-[34px] text-xl focus-visible:outline-none bg-transparent disabled:cursor-not-allowed disabled:opacity-50 w-[94%]`}
          />
        </div>
        {error ? (
          <label className="text-red-500 text-sm mt-1">
            {message || "This field is required"}
          </label>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
