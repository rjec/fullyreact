import { useOutletContext } from "react-router";
import HomePage from "../components/HomePage";
import { FlashcardItem } from "../types";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    const { handleOpenModal } = useOutletContext<{ handleOpenModal: (data: FlashcardItem) => void }>();
    return <HomePage onOpenModal={handleOpenModal} />;
}
