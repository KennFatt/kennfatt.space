import {
  useCallback,
  type ChangeEventHandler,
  type FC,
  type ReactNode,
} from "react";

export type Option = {
  value?: string;
  label?: ReactNode;
};

export type OnChangeHandler = (value: string) => void;

export interface DropdownProps {
  htmlName?: string;
  options?: Option[];

  onChange?: OnChangeHandler;
}

/**
 * Dropdown is a non-controlled select element.
 *
 * @example
 * ```tsx
 * <Dropdown options={[{ label: <span>A</span>, value: "a" }]} />
 * ```
 */
export const Dropdown: FC<DropdownProps> = ({
  htmlName,
  options = [],
  onChange,
}) => {
  /**
   * Handlers
   */
  const handleOnOptionChanged = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >((event) => {
    if (!event?.target?.value) {
      return;
    }

    onChange?.(event.target.value);
  }, []);

  return (
    <select name={htmlName} onChange={handleOnOptionChanged}>
      {options?.map(({ label, value }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
