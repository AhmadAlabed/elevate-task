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
        className={`border border-spacing-1 px-3 py-1 flex gap-1 hover:opacity-80 text-lg text-gray-800 `}
      >
        <label htmlFor={id} className="">
          {label}
        </label>
        <select
          name={name}
          id={id}
          className="border-none outline-none"
          {...rest}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
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
