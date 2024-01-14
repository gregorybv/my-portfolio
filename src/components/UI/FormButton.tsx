import {FC, memo} from "react";

export const FormButton: FC = memo(() => {
    return (
        <button className="bg-[#001b5e] mt-4 w-full p-4 rounded-lg shadow-lg shadow-[#4c85e6] group">
            <p className="text-gray-100 text-xl group-hover:scale-110 ease-in duration-200">
                Send Message
            </p>
        </button>
    );
});
