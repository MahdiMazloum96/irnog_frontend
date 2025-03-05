"use client";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const { id } = params; // Get dynamic route parameter

  return <h1 className="text-white">Product ID: {id}</h1>;
}
