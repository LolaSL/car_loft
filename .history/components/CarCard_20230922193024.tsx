"use client";

import React, { useState } from "react";
import Image from "next/image";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CardDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
      <Image
  src={generateCarImageUrl(car)}
  alt="car model"
  fill
  priority
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 800px"
  className="object-contain"
/>
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <CarInfoItem image="/steering-wheel.svg" text={transmission === "a" ? "Automatic" : "Manual"} />
          <CarInfoItem image="/tire.svg" text={drive.toUpperCase()} />
          <CarInfoItem image="/gas.svg" text={`${city_mpg} MPG`} />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-l"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleOpenModal}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={handleCloseModal} car={car} />
    </div>
  );
};

interface CarInfoItemProps {
  image: string;
  text: string;
}

const CarInfoItem: React.FC<CarInfoItemProps> = ({ image, text }) => (
  <div className="flex flex-col justify-center items-center gap-2">
    <Image src={image} width={20} height={20} alt="car info" />
    <p className="text-[14px] leading-[17px]">{text}</p>
  </div>
);

export default CarCard;
