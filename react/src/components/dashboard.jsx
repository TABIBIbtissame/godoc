
const DoctorCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <div className="mr-4">
        {/* Doctor Information */}
        <h2 className="text-xl font-bold">Zoubida</h2>
        <p className="text-gray-500">Dentist</p>
      </div>
      <div className="ml-auto">
        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
         Prendre rendez-vous !
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
