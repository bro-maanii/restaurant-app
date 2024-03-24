"use client";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import Link from "next/link";

interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

async function getData() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data.categories;
}

export default async function page() {
  const categoryData: ICategory[] = await getData();
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold ">Menu</h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {categoryData.map((category) => (
              <Link
                key={category.idCategory}
                href={`/Category/${category.strCategory}`}
              >
                <Category
                  idCategory={category.idCategory}
                  strCategory={category.strCategory}
                  strCategoryThumb={category.strCategoryThumb}
                  strCategoryDescription={category.strCategoryDescription}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
