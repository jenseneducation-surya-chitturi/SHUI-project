import axios from "axios";
import { ref, onMounted } from "@vue/composition-api";
export default function useFetchStreams() {
  const user = ref(null);
  const streams = ref([]);
  onMounted(async () => {
    const RESPONSE = await axios.get("/api/dashboard");
    user.value = RESPONSE.data.user;
    streams.value = RESPONSE.data.streams;
  });

  return { user, streams };
}
