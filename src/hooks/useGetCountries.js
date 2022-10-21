import { useEffect, useState } from "react";
import instanceAxios from "../config/axios";
import mockCountries from "@/mocks/countries.json";

export const useGetCountries = () => {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await instanceAxios.get("/paises");
        setCountries(data);
      } catch (error) {
        setCountries(mockCountries.countries);
      }
    };

    getCountries();
  }, []);

  return { countries };
}