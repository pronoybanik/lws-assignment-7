import React from "react";
import EditForm from "./EditForm";

const EditJob = () => {
  return (
    <div class="lg:pl-[14rem] mt-[5.8125rem]">
            <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

                <div class="max-w-3xl mx-auto">
                   <EditForm></EditForm>
                </div>
            </main>
        </div>
  );
};

export default EditJob;
