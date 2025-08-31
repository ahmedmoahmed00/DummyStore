function MemberCard({ image, name, role, description }) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-col gap-2">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            loading="lazy"
            src={image}
            alt="Team Work"
          />
          <div className="font-semibold text-xl text-center">{name}</div>
          <span className="inline-flex items-center bg-gray-200/60 justify-center rounded-md px-2 py-0.5 text-xs font-medium  gap-1">
            {role}
          </span>
        </div>
        <div>
          <p className="text-gray-600  text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
