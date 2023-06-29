import { useState } from "react";

export function useUpdatePage() {
  const [updatePage, updatePageSet] = useState<number>(0);
  const handleUpdatePage = () => updatePageSet((updatePage) => updatePage + 1);

  return { updatePage, handleUpdatePage };
}
