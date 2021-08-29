import React from "react";
import Container from "../layout/SectionContainer";
import CatagoryCard from "./CatagoryCard";
import HealthyFood from "../assets/healthy-food.svg";

export default function Catagory() {
  return (
    <div>
      <Container title="Shop By Catagory">
        <div className="grid grid-cols-3 pt-6">
          <CatagoryCard
            Icon={HealthyFood}
            offer="Upto 60% off"
            title="Fruits & Vegetables"
          />
          <CatagoryCard
            Icon={HealthyFood}
            offer="Upto 30% off"
            title="Fish & Meat"
          />
          <CatagoryCard
            Icon={HealthyFood}
            offer="Upto 40% off"
            title="Rice & Flour"
          />
          <CatagoryCard
            Icon={HealthyFood}
            offer="Upto 40% off"
            title="Fruits & Vegetables"
          />
          <CatagoryCard
            Icon={HealthyFood}
            offer="Upto 60% off"
            title="Baby Food"
          />
          <CatagoryCard
            Icon={HealthyFood}
            offer="Upto 30% off"
            title="Personal Care"
          />
        </div>
      </Container>
    </div>
  );
}
