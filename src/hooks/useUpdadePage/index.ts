import { useState } from "react";

const [updatePage, updatePageSet] = useState<number>(0);
const handleUpdatePage = () => updatePageSet((updatePage) => updatePage + 1);

export { handleUpdatePage, updatePage };
