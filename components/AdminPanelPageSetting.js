import LogOutButton from "@/components/LogOutButton";
import { useState, useEffect } from "react";

import {BackToPanelButton} from "@/components/BackToPanel";
import SetPasswordButton from "@/components/SetPasswordButton";

import axios from "axios";
import Router from "next/router";

function AdminPanelPage() {

  const [getCurrentPassword, setCurrentPassword] = useState("");

  const [getNewPassword, setNewPassword] = useState("");

  const [getConfirmPassword, setConfirmPassword] = useState("");



  useEffect(() => {
    console.log("Somethingc eomes heree");
    checkIfSessionPresent().then((res) => {
      if (res) {

      } else {
         Router.push("/login");
      }
    });
  }, []);

  
  async function checkIfSessionPresent() {
    const dataSend = {
      username: "",
      password: "",
      callfunction: "SessionPresent",
    };
    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,

        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  

  return (
    <div>
      <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-0 p-8">
          <div class="mx-auto md:p-6 md:w-1/2">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
              <form method="POST" action="">
                <div class="mb-4">
                  <label
                    for="changePassword"
                    class=" block text-gray-700 text-xl font-primary font-semibold  mb-2 text-center"
                  >
                    Change Password
                  </label>
                  <div class="mb-4 mt-4">
                    <label
                      for="currentPassword"
                      class="font-primary font-medium block text-gray-700 text-sm mb-2"
                    >
                      Current Password
                      <span class="text-red-500">&nbsp;*</span>
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-400"
                          fill="#7d7d7d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                      </div>
                      <input
                        type="password"
                        id="changePassword"
                        class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                        placeholder="Type your username"
                        value={getCurrentPassword}
                        onChange={(evt) => {
                          setCurrentPassword(evt.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label
                      for="newPassword"
                      class="font-primary font-medium block text-gray-700 text-sm mb-2"
                    >
                      New Password
                      <span class="text-red-500">&nbsp;*</span>
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-400"
                          fill="#7d7d7d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                      </div>
                      <input
                        type="password"
                        id="newPassword"
                        class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                        placeholder="Type your username"
                        value={getNewPassword}
                        onChange={(evt) => {
                          setNewPassword(evt.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>


                  <div class="mb-4">
                    <label
                      for="confirmPassword"
                      class="font-primary font-medium block text-gray-700 text-sm mb-2"
                    >
                      Confirm Password
                      <span class="text-red-500">&nbsp;*</span>
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-400"
                          fill="#7d7d7d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                      </div>
                      <input
                        type="password"
                        id="confirmPassword"
                        class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                        placeholder="Type your username"
                        value={getConfirmPassword}
                        onChange={(evt) => {
                          setConfirmPassword(evt.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto space-y-4 px-2">

      <SetPasswordButton 
      currentPassword={getCurrentPassword}
      newPassword={getNewPassword}
      confirmPassword={getConfirmPassword}  />



        <BackToPanelButton text={"Back To Panel"} url={"/admin-panel"} />

      </div>
    </div>
  );
}
export default AdminPanelPage;
