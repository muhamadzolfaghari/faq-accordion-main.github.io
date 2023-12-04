import { useMutation } from "react-query";
import { API_URL } from "../lib/apiUrl.const";

async function getAngleNumber(code: string): Promise<{ result: string }> {
  const formData = new FormData();
  formData.append("action", "get_angle_number");
  formData.append("code", code);
  const requestsInit: RequestInit = { method: "POST", body: formData };
  const res = await fetch(API_URL, requestsInit);
  const json = await res.json();
  return json;
}

export default function useGetAngleNumber() {
  return useMutation(getAngleNumber);
}
