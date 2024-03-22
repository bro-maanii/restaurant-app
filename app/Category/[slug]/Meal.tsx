"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { AiFillHeart } from "react-icons/ai";


export default function Meal(props: {
    idMeal: number;
    strMeal: string;
    strMealThumb: string;
  }) {
    const [isFavorite, setIsFavorite] = useState(false);
  const [favMeals, setFavMeals] = useState<any[]>([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem('favMeals');
    if (storedFavs) {
      setFavMeals(JSON.parse(storedFavs));
    }
  }, []); // Empty dependency array to run only on initial render

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);

    const newFavMeals = isFavorite
      ? [...favMeals, props.idMeal]
      : favMeals.filter((id) => id !== props.idMeal);

    setFavMeals(newFavMeals);
    localStorage.setItem('favMeals', JSON.stringify(newFavMeals));
  };
  return (
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image
                width={200}
                height={200}
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={props.strMealThumb}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {props.strMeal}
                </h2>
                <div
        className=""
        onClick={handleToggleFavorite}
      >
        {isFavorite ? (
          <>
            <AiFillHeart className="sm:mr-2 h-6 w-6 sm:h-8 sm:w-8 text-red-500 hover:h-9 hover:w-9 cursor-pointer " />
          </>
        ) : (
          <Heart />
        )}
      </div>
              </div>
            </div>
          </div>
  );
}
