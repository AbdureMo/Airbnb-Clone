"use client";
import { useState } from "react";
import Header from "./components/header/Header";
import Filter from "./components/Filter/Filter";
import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards/Cards";
import FooterNavbar from "./components/footerNavbar/FooterNavbar";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div>
      <div className="sticky top-0 bg-white z-50">
        <Header />
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
      <FooterNavbar />
    </div>
  );
}
