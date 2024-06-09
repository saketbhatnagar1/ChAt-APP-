import React, { useEffect, useState } from "react";
const PREFIX = "CHAT-APP";

export default function useLocalStorage(key, initialValue) {
  //we will store key in local storage,initial value is what we will pas to local storage
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);
}
