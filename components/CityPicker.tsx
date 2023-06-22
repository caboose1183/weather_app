"use client";

import React, { useEffect, useState } from "react";
import { Country, City } from "country-state-city";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { GlobeAltIcon } from "@heroicons/react/solid";

// for ts type of country
type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

// for ts type of city
type cityOption = {
  value: {
    latitude: string | null | undefined;
    longitude: string | null | undefined;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

// for use of react select assigning country
const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(
      `/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className="space-y-4">
      {/* country select */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeAltIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          options={options}
          isClearable
          value={selectedCountry}
          onChange={handleSelectedCountry}
          className="text-black"
        />
      </div>

      {/* city select */}
      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeAltIcon className="h-5 w-5 text-white" />
            <label htmlFor="country">City</label>
          </div>
          <Select
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude,
                longitude: city.longitude,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
            isClearable
            value={selectedCity}
            onChange={handleSelectedCity}
            className="text-black"
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
