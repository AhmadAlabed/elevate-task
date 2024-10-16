import { SelectHTMLAttributes } from "react";
interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  label: string;
  options: { value: string; text: string }[];
}
const Select = (props: ISelectProps) => {
  const { id, name, label, options, ...rest } = props;
  return (
    <>
      <div
        className={`border border-spacing-1 px-5 py-2.5 flex gap-1 hover:opacity-80 text-sm font-medium text-skin-base `}
      >
        <label htmlFor={id} className="">
          {label}
        </label>
        <select
          name={name}
          id={id}
          className="border-none outline-none bg-transparent "
          {...rest}
        >
          {options.map((option, index) => {
            return (
              <option
                key={index}
                value={option.value}
                className="bg-skin-fill text-skin-base  "
              >
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
