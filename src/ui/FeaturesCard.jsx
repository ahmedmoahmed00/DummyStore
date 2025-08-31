function FeaturesCard({ Icon, title, description }) {
  return (
    <div className="h-full text-card-foreground flex flex-col gap-3 rounded-xl border border-gray-200 p-6 shadow-sm text-center hover:shadow-lg transition-shadow">
      <div>
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <div className="font-semibold text-xl">{title}</div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeaturesCard;
