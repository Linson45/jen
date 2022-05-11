import { sessionStorageService } from "../../_services/sessionStorage.services";

export function authHeader() {
  const currentUser = sessionStorageService.currentUserValue;
  if (currentUser && currentUser.token) {
    return { Authorization: `${currentUser.token}` };
  } else {
    return {};
  }
}
