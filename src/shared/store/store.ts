import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Vacancy as TVacancy } from "@shared/model/model";

interface IStore {
  projectPopup: boolean;
  toggleProjectPopup: () => void;
  vacancyPopup: boolean;
  toggleVacancyPopup: () => void;
  articlePopup: boolean;
  toggleArticlePopup: () => void;
  mainVideo: string;
  setMainVideo: (video: string) => void;
  vacancyData: TVacancy[];
  setVacancyData: (vacancy: TVacancy[]) => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    projectPopup: false,
    toggleProjectPopup: () => set((state) => ({ projectPopup: !state.projectPopup })),
    vacancyPopup: false,
    toggleVacancyPopup: () => set((state) => ({ vacancyPopup: !state.vacancyPopup })),
    articlePopup: false,
    toggleArticlePopup: () => set((state) => ({ articlePopup: !state.articlePopup })),
    mainVideo: "https://rutube.ru/play/embed/71e51b36354b8ad95b6bd82e2c78e229/",
    setMainVideo: (video: string) => set(() => ({ mainVideo: video })),
    vacancyData: [],
    setVacancyData: (vacancy: TVacancy[]) => set(() => ({ vacancyData: vacancy })),
  }))
);