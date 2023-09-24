import CheckOutButton from "@/components/CheckOutButton";
import BackToProductButton from "@/components/BackToProductButton";
import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

function ContactUsFormTable() {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");

  const [getNewData, setNewData] = useState({});

  useEffect(() => {
    setNewData(newData);
  }, [getUsername]);
  useEffect(() => {
    setNewData(newData);
  }, [getPassword]);

  const newData = {
    username: getUsername,
    password: getPassword,
  };

  useEffect(() => {
    console.log("Somethingc eomes heree")
    checkIfSessionPresent().then((res) => {
      if (res) {
        Router.push("/admin-panel");
      } 
    });
  }, []);


  async function checkIfSessionPresent(){


    const dataSend = {
      username: "",
      password: "",
      callfunction : "SessionPresent",
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
          <div class="mx-auto md:p-6 w-2/4">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
              <form method="POST" action="">
                <div class="mb-4">
                  <label
                    for="Username"
                    class=" font-primary font-medium block text-gray-700 text-sm mb-2"
                  >
                    Username
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 text-gray-400"
                      fill="#7d7d7d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    height="1em" viewBox="0 0 448 512">
                      
                      
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                     
                    </div>
                    <input
                      type="text"
                      id="Username"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="Type your username"
                      value={getUsername}
                      onChange={(evt) => {
                        setUsername(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="pwd"
                    class="font-primary font-medium block text-gray-700 text-sm mb-2"
                  >
                    Password
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
                      id="password"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="Type your username"
                      value={getPassword}
                      onChange={(evt) => {
                        setPassword(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton
          getNewData={getNewData}
          showText={"Login"}
          webUrl={"/admin-panel"}
        />
        <BackToProductButton />
      </div>
    </div>
  );
}
export default ContactUsFormTable;
