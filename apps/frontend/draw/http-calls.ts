import { BACKEND_URL } from "@repo/common/config";
import axios from "axios";

export async function getExistingShapes (roomId : string) {
    const res = await axios.get(`${BACKEND_URL}/shape/${roomId}`, {
        headers: {
            "Authorization" : localStorage.getItem('token')
        }
    });
    const messages = res.data.shapes;
    console.log("Existing Shapes fetched")
    console.log(messages)
    return messages;
}