// src/useDocumentTitle.js
import { useEffect } from "react";

const useCustomTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
};

export default useCustomTitle;
