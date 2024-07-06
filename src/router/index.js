import { createRouter, createWebHistory } from "vue-router";
import ReverseString from "@/views/ReverseString.vue";
import LongestWord from "@/views/LongestWord.vue";
import WordQuery from "@/views/WordQuery.vue";
import MatrixDifference from "@/views/MatrixDifference.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "reverse-string",
      component: ReverseString,
    },
    {
      path: "/longest-word",
      name: "longest-word",
      component: LongestWord,
    },
    {
      path: "/word-query",
      name: "word-query",
      component: WordQuery,
    },
    {
      path: "/matrix-difference",
      name: "matrix-difference",
      component: MatrixDifference,
    },
  ],
});

export default router;
