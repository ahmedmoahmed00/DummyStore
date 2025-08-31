function MissionCard({ Icon, title, description }) {
  return (
    <div className="text-center">
      <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className=" w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
}

export default MissionCard;
