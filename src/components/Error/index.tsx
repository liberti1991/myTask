import { ErrorProps } from "./interfaces";
import { ErrorContainer } from "./styled";

export function Error({ error, marginProps }: ErrorProps) {
  return <ErrorContainer marginProps={marginProps}>{error}</ErrorContainer>;
}
