import { useState } from "react";

function useToggleState(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setValue((prevState) => !prevState);
  };

  return [value, handleToggle];
}

export default useToggleState;
