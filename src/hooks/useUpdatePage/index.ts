import { useState } from "react";

export function useUpdatePage() {
  const [updatePage, updatePageSet] = useState<number>(0);
  const handleUpdatePage = () =>
    updatePageSet((previousState) => previousState + 1);

  return { updatePage, handleUpdatePage };
}
