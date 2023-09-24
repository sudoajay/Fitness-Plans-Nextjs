import CheckOutButton from "@/components/CheckOutButton";
import BackToProductButton from "@/components/BackToProductButton";
import { useState, useEffect } from "react";

function ContactUsFormTable() {
  const [getFullname, setFullName] = useState("");
  const [getEmail, setEmail] = useState("");

  const [getMessage, setMessage] = useState("");

  const [getNewData, setNewData] = useState({});

  useEffect(() => {
    setNewData(newData);
  }, [getFullname]);
  useEffect(() => {
    setNewData(newData);
  }, [getEmail]);
  useEffect(() => {
    setNewData(newData);
  }, [getMessage]);

  const newData = {
    fullName: getFullname,
    email: getEmail,
    message: getMessage,
  };

  return (
    <div>
      <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-0 p-8">
          <div class="mx-auto md:p-6 w-8/12">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
              <form method="POST" action="">
                <div class="w-full shrink-0 grow-0 basis-auto ">
                  <div class="flex flex-wrap">
                    <div class="mb-12   w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="flex items-start ">
                        <div class="shrink-0 ">
                          <div class="inline-block rounded-md bg-gray-100  p-4 text-primary ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="#2596be"
                              stroke-width="2"
                              class="h-6 w-6"
                            >
                              <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
                            </svg>
                           
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-primary font-bold block text-gray-700">
                            Adress
                          </p>
                          <p class="font-primary font-medium block text-gray-700">
                            Lane no 1 , Kathghariya Haldwani Uttrakhand
                          </p>
                          <p class="font-primary font-medium block text-gray-700">
                            263139 India
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-gray-100 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="#2596be"
                              class="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-1 font-primary font-bold block text-gray-700">
                            Products questions
                          </p>
                          <p class="font-primary font-medium block text-gray-700">
                            contact@fitness-plans.regimefit.com
                          </p>
                          {/* <p class="font-primary font-medium block text-gray-700">
                            +91 70177 30728
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div class="mb-12   w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="flex items-start ">
                        <div class="shrink-0 ">
                          <div class="inline-block rounded-md bg-gray-100  p-4 text-primary ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="#2596be"
                              class="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-1 font-primary font-bold block text-gray-700">
                            Technical support
                          </p>
                          <p class="font-primary font-medium block text-gray-700">
                            contact@fitness-plans.regimefit.com
                          </p>
                          {/* <p class="font-primary font-medium block text-gray-700">
                            +91 70177 30728
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="align-start flex">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-gray-100 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="#2596be"
                              class="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                              />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-1 font-primary font-bold block text-gray-700">
                            Bug report
                          </p>
                          <p class="font-primary font-medium block text-gray-700">
                            contact@fitness-plans.regimefit.com
                          </p>
                          {/* <p class="font-primary font-medium block text-gray-700">
                            +91 70177 30728
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 class="mb-6 font-primar font-medium  text-2xl ">Still need help?</h2>

                <div class="mb-4">
                  <label
                    for="fullName"
                    class=" font-primary font-medium block text-gray-700 text-sm mb-2"
                  >
                    Full Name
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="Richard Smith"
                      value={getFullname}
                      onChange={(evt) => {
                        setFullName(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="email"
                    class="font-primary font-medium block text-gray-700 text-sm mb-2"
                  >
                    Email
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="richardsmith@xyz.com"
                      value={getEmail}
                      onChange={(evt) => {
                        setEmail(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="mb-2  mt-2">
                  <label
                    for="message"
                    class=" font-primary font-medium block text-gray-700 text-sm  mb-2"
                  >
                    Message
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class=" mt-1 relative rounded-md shadow-sm">
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-4 w-full  pr-10 shadow appearance-none border-2 border-palette-light rounded py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="Write your thoughts here..."
                      value={getMessage}
                      onChange={(evt) => {
                        setMessage(evt.target.value);
                      }}
                    ></textarea>
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
          showText={"Send Message"}
          webUrl={"/"}
        />
        <BackToProductButton />
      </div>
    </div>
  );
}
export default ContactUsFormTable;
