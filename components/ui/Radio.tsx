import React from "react";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  error?: boolean;
  message?: string;
}
const Radio = React.forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref) => {
    const { label, className, error, message, ...rest } = props;

    return (
      <div className="flex items-center gap-[6px]">
        <input type="radio" className="w-[18px] h-[18px]" {...rest} />
        <label className="text-carbon text-lg leading-5 font-normal	">
          {label}
        </label>
      </div>
    );
  }
);
Radio.displayName = "Radio";
export default Radio;
