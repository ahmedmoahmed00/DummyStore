import { useState } from "react";
import FormInput from "../forms/FormInput";
import UserProfileForm from "../forms/UserProfileForm";

function ProfileInformation() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="p-6 border  border-gray-200 w-full rounded-xl flex flex-col gap-6 shadow-sm">
      <header className="flex justify-between items-center ">
        <h2 className="leading-none font-semibold">Profile Information</h2>
        {!disabled && (
          <>
            <button
              onClick={() => setDisabled((prev) => !prev)}
              className="text-sm py-2 px-4 cursor-pointer rounded-xl border border-gray-200"
            >
              Edit
            </button>
          </>
        )}
      </header>
      <div>
        <form className="">
          <div className="flex flex-col gap-5">
            <UserProfileForm disabled={disabled} />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        {disabled && (
          <>
            <button className="cursor-pointer py-2 px-4 text-sm text-white bg-black rounded-md hover:bg-black/80">
              Save Changes
            </button>
            <button
              onClick={() => setDisabled(false)}
              className="cursor-pointer py-2 px-4 text-sm text-black bg-white rounded-md hover:bg-black/3 border border-gray-300"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileInformation;
