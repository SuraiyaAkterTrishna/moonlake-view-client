import { useState } from "react";
import { useEffect } from "react";
import Property from "../Property/Property";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <section className="mb-8 pt-20">
      <div className="flex justify-center items-center">
        <div className="text-center w-2/3">
          <h1 className="text-3xl font-semibold mt-8">
            Find Your Dream Properties Here
          </h1>
          <p className="text-gray-500 mb-8">
            With the features and filters provided with the Houzez widgets you
            can turn your visitors attention to the latest listings or the ones
            that are most profitable to buy at the moment.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {properties.map((property) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </div>
    </section>
  );
};

export default AllProperties;
