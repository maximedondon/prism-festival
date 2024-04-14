import { create } from "zustand";

const useProjectStore = create((set) => ({
  projectList: [],
  fetchProjects: async () => {
    try {
      const bucketKey = "";
      const readKey = "";
      const cosmicUrl = `https://api.cosmicjs.com/v3/buckets/${bucketKey}/objects?pretty=true&query=%7B"type":"betas"%7D&limit=10&read_key=${readKey}&depth=1&props=slug,title,metadata`;

      const response = await fetch(cosmicUrl);
      const json = await response.json();

      set({ projectList: json.objects });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },
}));

export default useProjectStore;
