import { CreditCard, Mail, Shield } from "lucide-react";

function UserSettings() {
  return (
    <div className="flex flex-col gap-6">
      <div className="p-6 border border-gray-200 shadow-sm rounded-xl flex flex-col gap-7">
        <header>
          <h2 className="leading-none font-semibold">Account Settings</h2>
        </header>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">
                  Add an extra layer of security
                </p>
              </div>
            </div>
            <button className="flex items-center cursor-pointer hover:bg-gray-100 border-gray-200 justify-center gap-2 rounded-md text-sm font-medium transition-all border shadow-xs h-9 px-4 py-2 ">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Mail className=" w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">
                  Add an extra layer of security
                </p>
              </div>
            </div>
            <button className="flex items-center cursor-pointer hover:bg-gray-100 border-gray-200 justify-center gap-2 rounded-md text-sm font-medium transition-all border shadow-xs h-9 px-4 py-2 ">
              Manage
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">
                  Add an extra layer of security
                </p>
              </div>
            </div>
            <button className="flex items-center cursor-pointer hover:bg-gray-100 border-gray-200 justify-center gap-2 rounded-md text-sm font-medium transition-all border shadow-xs h-9 px-4 py-2 ">
              Manage
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-200 shadow-sm rounded-xl flex flex-col gap-7">
        <div>
          <h2 className="leading-none font-semibold text-red-600">
            Danger Zone
          </h2>
        </div>
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <h3 className="font-medium text-red-800 mb-2">Delete Account</h3>
          <p className="text-sm text-red-600 mb-4">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button class="flex items-center bg-red-600 justify-center gap-2 rounded-md text-sm font-medium transition-all text-white shadow-xs  h-9 px-4 py-2 ">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
