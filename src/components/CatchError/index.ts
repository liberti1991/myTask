import { Alert } from "react-native";
import { AppError } from "../../utils/AppError";

export function CatchError(
  err: unknown,
  titleError: string,
  messageError: string
) {
  if (err instanceof AppError) {
    Alert.alert(err.title, err.message);
  } else {
    Alert.alert(titleError, messageError);
    console.log(err);
  }
}
