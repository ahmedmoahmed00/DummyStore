import { Clock } from "lucide-react";

function ContactTouchCard({ Icon, title, description, mainInfo, badge }) {
  return (
    <div className="p-6 bg-white h-full flex flex-col gap-6 rounded-xl border border-gray-300 shadow-sm text-center hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-green-600" />
        </div>
        <div className="font-semibold text-xl">{title}</div>
      </div>

      <div className="flex flex-col items-center flex-1 gap-4">
        <div className="max-w-full break-words">
          <p className="text-gray-600 text-sm ">{description}</p>
          <p className="font-medium mt-1 ">{mainInfo}</p>
        </div>

        <span className="mt-auto inline-flex items-center justify-center rounded-md px-2 py-0.5 font-medium bg-gray-100 text-xs">
          <Clock className="w-3 h-3 mr-1" />
          {badge}
        </span>
      </div>
    </div>
  );
}

export default ContactTouchCard;
