import { acceptHMRUpdate, defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
  const lastName = ref('Lau');
  const firstName = ref('shangqiang');
  const age = ref(32);

  const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`;
  });

  return {
    lastName,
    firstName,
    fullName,
    age,
  }
});


if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))