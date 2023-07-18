import React, { Suspense, lazy } from "react";
import UserData from "@/components/UserData";
import Card from "@/components/Card";
import { useRouter } from "next/router";
// const Card = lazy(() => import('@/components/Card'));
import Zustand from "@/pages/zustand/acumulator";
import useStore from "@/store/store";

export default function User() {
  // method 01 :use the router of Next.js
  // const router = useRouter();
  // const { value01, value02 } = router.query;

  // method 02 :use Zustand
  const username = useStore((state) => state.username);
  const password = useStore((state) => state.password);

  const userData = [
    { title: "X1", subtitle: "XX1", value: "Y1" },
    { title: "X2", subtitle: "XX2", value: "Y2" },
    { title: "X3", subtitle: "XX3", value: "Y3" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
  ];

  return (
    <>
      <UserData value01={username} value02={password}></UserData>
      <Card Data={userData}></Card>
      <Zustand></Zustand>
    </>
  );
}
