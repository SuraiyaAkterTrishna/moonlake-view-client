

const Property = ({property}) => {
    const {propertyTitle, propertyImage, priceRange, propertyLocation, verificationStatus} = property;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={propertyImage} alt="Food" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
          ${priceRange}
        </p>
        <div className="card-body">
          <h2 className="card-title">{propertyTitle}</h2>
          <p>Location: {propertyLocation}</p>
          <p>Status: {verificationStatus}</p>
          <div className="card-actions justify-end">
            <button className="m-4 btn btn-outline border-0 border-b-4">
                Show Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default Property;