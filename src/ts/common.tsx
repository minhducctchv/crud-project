import * as React from "react";

export function useStateChange<S>(initValue: S | (() => S)) {
  const [state, setState] = React.useState<S>(initValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    setState(event.target.value);
  };
  return [state, setState, handleChange] as const;
}

export function useRequiredRule(value: any, label: string) {
  return React.useMemo(() => {
    return {
      isError: !value,
      message: `${label} is required`,
    };
  }, [value]);
}
